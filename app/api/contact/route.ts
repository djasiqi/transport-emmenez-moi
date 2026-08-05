import { NextResponse } from "next/server";
import { Resend } from "resend";
import { company } from "@/lib/company";

export const runtime = "nodejs";

const MAX = {
  prenom: 100,
  nom: 100,
  email: 200,
  telephone: 40,
  message: 5000,
} as const;

function clean(value: unknown, max: number): string {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, max);
}

function isEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
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
  const message = clean(data.message, MAX.message);

  if (!prenom || !nom || !email || !telephone || !message) {
    return NextResponse.json({ ok: false, error: "missing_fields" }, { status: 400 });
  }

  if (!isEmail(email)) {
    return NextResponse.json({ ok: false, error: "invalid_email" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL || company.email;

  if (!apiKey) {
    console.error("RESEND_API_KEY is not configured");
    return NextResponse.json({ ok: false, error: "server_misconfigured" }, { status: 500 });
  }

  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      from: "Emmenez-moi Site Web <onboarding@resend.dev>",
      to: [toEmail],
      replyTo: email,
      subject: `Nouveau message — ${prenom} ${nom}`,
      text: [
        `Prénom: ${prenom}`,
        `Nom: ${nom}`,
        `Email: ${email}`,
        `Téléphone: ${telephone}`,
        "",
        "Message:",
        message,
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
