import { NextResponse } from "next/server";
import { Resend } from "resend";
import { company } from "@/lib/company";

export const runtime = "nodejs";

const TRIP_TYPES = new Set([
  "aller-simple",
  "aller-retour",
  "transport-regulier",
  "demande-information",
]);

const YES_NO = new Set(["oui", "non"]);

const MAX = {
  prenom: 100,
  nom: 100,
  email: 200,
  telephone: 40,
  dateSouhaitee: 20,
  heureSouhaitee: 10,
  adresseDepart: 300,
  adresseArrivee: 300,
  typeTrajet: 40,
  fauteuil: 10,
  accompagnement: 10,
  message: 5000,
} as const;

const TRIP_LABELS: Record<string, string> = {
  "aller-simple": "Aller simple",
  "aller-retour": "Aller-retour",
  "transport-regulier": "Transport régulier",
  "demande-information": "Demande d’information",
};

function clean(value: unknown, max: number): string {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, max);
}

function isEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function isDate(value: string): boolean {
  if (!value) return true;
  return /^\d{4}-\d{2}-\d{2}$/.test(value);
}

function isTime(value: string): boolean {
  if (!value) return true;
  return /^\d{2}:\d{2}$/.test(value);
}

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  if (!body || typeof body !== "object") {
    return NextResponse.json({ ok: false, error: "invalid_body" }, { status: 400 });
  }

  const data = body as Record<string, unknown>;
  const prenom = clean(data.prenom, MAX.prenom);
  const nom = clean(data.nom, MAX.nom);
  const email = clean(data.email, MAX.email);
  const telephone = clean(data.telephone, MAX.telephone);
  const dateSouhaitee = clean(data.dateSouhaitee, MAX.dateSouhaitee);
  const heureSouhaitee = clean(data.heureSouhaitee, MAX.heureSouhaitee);
  const adresseDepart = clean(data.adresseDepart, MAX.adresseDepart);
  const adresseArrivee = clean(data.adresseArrivee, MAX.adresseArrivee);
  const typeTrajet = clean(data.typeTrajet, MAX.typeTrajet);
  const fauteuil = clean(data.fauteuil, MAX.fauteuil).toLowerCase();
  const accompagnement = clean(data.accompagnement, MAX.accompagnement).toLowerCase();
  const message = clean(data.message, MAX.message);
  const consentement = data.consentement === true;

  if (!prenom || !nom || !email || !telephone || !typeTrajet) {
    return NextResponse.json({ ok: false, error: "missing_fields" }, { status: 400 });
  }

  if (!isEmail(email)) {
    return NextResponse.json({ ok: false, error: "invalid_email" }, { status: 400 });
  }

  if (!isDate(dateSouhaitee) || !isTime(heureSouhaitee)) {
    return NextResponse.json({ ok: false, error: "invalid_datetime" }, { status: 400 });
  }

  if (!TRIP_TYPES.has(typeTrajet)) {
    return NextResponse.json({ ok: false, error: "invalid_trip_type" }, { status: 400 });
  }

  if (!YES_NO.has(fauteuil) || !YES_NO.has(accompagnement)) {
    return NextResponse.json({ ok: false, error: "invalid_yes_no" }, { status: 400 });
  }

  const isTransportRequest = typeTrajet !== "demande-information";
  if (isTransportRequest && (!adresseDepart || !adresseArrivee)) {
    return NextResponse.json({ ok: false, error: "missing_addresses" }, { status: 400 });
  }

  if (!consentement) {
    return NextResponse.json({ ok: false, error: "missing_consent" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL || company.email;

  if (!apiKey) {
    console.error("RESEND_API_KEY is not configured");
    return NextResponse.json({ ok: false, error: "server_misconfigured" }, { status: 500 });
  }

  const resend = new Resend(apiKey);
  const dateLabel = dateSouhaitee || "date non précisée";
  const subject = `Nouvelle demande de transport — ${prenom} ${nom} — ${dateLabel}`;

  try {
    const { error } = await resend.emails.send({
      from: "Emmenez-moi Site Web <onboarding@resend.dev>",
      to: [toEmail],
      replyTo: email,
      subject,
      text: [
        "Nouvelle demande de transport",
        "",
        `Prénom: ${prenom}`,
        `Nom: ${nom}`,
        `Email: ${email}`,
        `Téléphone: ${telephone}`,
        `Date souhaitée: ${dateSouhaitee || "—"}`,
        `Heure souhaitée: ${heureSouhaitee || "—"}`,
        `Adresse de départ: ${adresseDepart || "—"}`,
        `Adresse d'arrivée: ${adresseArrivee || "—"}`,
        `Type de trajet: ${TRIP_LABELS[typeTrajet] || typeTrajet}`,
        `Fauteuil roulant: ${fauteuil}`,
        `Accompagnement nécessaire: ${accompagnement}`,
        "",
        "Message complémentaire:",
        message || "—",
      ].join("\n"),
    });

    if (error) {
      console.error("Resend error", error);
      return NextResponse.json({ ok: false, error: "send_failed" }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact API error", error);
    return NextResponse.json({ ok: false, error: "send_failed" }, { status: 502 });
  }
}
