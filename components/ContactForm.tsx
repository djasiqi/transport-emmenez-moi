"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { company } from "@/lib/company";

type Status = "idle" | "loading" | "success" | "error";

const tripTypes = [
  { value: "aller-simple", label: "Aller simple" },
  { value: "aller-retour", label: "Aller-retour" },
  { value: "transport-regulier", label: "Transport régulier" },
  { value: "demande-information", label: "Demande d’information" },
] as const;

const inputClass =
  "w-full rounded-lg border border-border bg-white px-3 py-3 text-base text-foreground";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = event.currentTarget;
    const data = new FormData(form);
    const tripType = String(data.get("typeTrajet") || "");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prenom: data.get("prenom"),
          nom: data.get("nom"),
          email: data.get("email"),
          telephone: data.get("telephone"),
          dateSouhaitee: data.get("dateSouhaitee"),
          heureSouhaitee: data.get("heureSouhaitee"),
          adresseDepart: data.get("adresseDepart"),
          adresseArrivee: data.get("adresseArrivee"),
          typeTrajet: tripType,
          fauteuil: data.get("fauteuil"),
          accompagnement: data.get("accompagnement"),
          message: data.get("message"),
          consentement: data.get("consentement") === "on",
        }),
      });

      const result = (await response.json().catch(() => null)) as {
        ok?: boolean;
        error?: string;
      } | null;

      if (!response.ok || !result?.ok) {
        setStatus("error");
        setErrorMsg(
          result?.error === "missing_consent"
            ? "Veuillez accepter la déclaration relative à la protection des données."
            : "Oups, une erreur s’est produite lors de l’envoi de votre message. Veuillez réessayer plus tard.",
        );
        return;
      }

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMsg(
        "Oups, une erreur s’est produite lors de l’envoi de votre message. Veuillez réessayer plus tard.",
      );
    }
  }

  return (
    <section id="contact" className="section-pad scroll-mt-24 bg-surface">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <aside className="space-y-6">
          <h2 className="text-3xl font-bold tracking-tight text-brand-blue sm:text-4xl">
            Contact
          </h2>
          <div className="space-y-2 text-lg">
            <p className="font-semibold text-foreground">{company.name}</p>
            <p className="text-muted">
              {company.address.street}
              <br />
              {company.address.postalCode} {company.address.city}
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-muted">Bureau</p>
              <a
                href={company.officePhoneHref}
                className="text-xl font-semibold text-brand-blue underline underline-offset-4"
              >
                {company.officePhoneDisplay}
              </a>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-muted">
                Réservation chauffeur
              </p>
              <a
                href={company.driverPhoneHref}
                className="text-xl font-semibold text-brand-blue underline underline-offset-4"
              >
                {company.driverPhoneDisplay}
              </a>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-muted">Email</p>
              <a
                href={company.emailHref}
                className="text-lg font-semibold text-brand-blue underline underline-offset-4"
              >
                {company.email}
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-3 pt-2">
            <a href={company.officePhoneHref} className="btn-secondary">
              Appeler le bureau
            </a>
            <a href={company.driverPhoneHref} className="btn-primary">
              Appeler le chauffeur
            </a>
            <a href={company.emailHref} className="btn-ghost px-0">
              Envoyer un email
            </a>
          </div>
        </aside>

        <div>
          <h3 className="text-2xl font-bold text-foreground">Demande de transport</h3>
          <p className="mt-2 text-base text-muted">
            Remplissez le formulaire : nous vous recontacterons pour confirmer la prise en
            charge.
          </p>

          <form onSubmit={onSubmit} className="mt-8 space-y-4" noValidate>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="prenom" className="mb-1 block text-sm font-semibold">
                  Prénom*
                </label>
                <input
                  id="prenom"
                  name="prenom"
                  type="text"
                  required
                  autoComplete="given-name"
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="nom" className="mb-1 block text-sm font-semibold">
                  Nom*
                </label>
                <input
                  id="nom"
                  name="nom"
                  type="text"
                  required
                  autoComplete="family-name"
                  className={inputClass}
                />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="email" className="mb-1 block text-sm font-semibold">
                  Adresse email*
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="telephone" className="mb-1 block text-sm font-semibold">
                  Téléphone*
                </label>
                <input
                  id="telephone"
                  name="telephone"
                  type="tel"
                  required
                  autoComplete="tel"
                  className={inputClass}
                />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="dateSouhaitee" className="mb-1 block text-sm font-semibold">
                  Date souhaitée
                </label>
                <input id="dateSouhaitee" name="dateSouhaitee" type="date" className={inputClass} />
              </div>
              <div>
                <label htmlFor="heureSouhaitee" className="mb-1 block text-sm font-semibold">
                  Heure souhaitée
                </label>
                <input id="heureSouhaitee" name="heureSouhaitee" type="time" className={inputClass} />
              </div>
            </div>

            <div>
              <label htmlFor="adresseDepart" className="mb-1 block text-sm font-semibold">
                Adresse de départ
              </label>
              <input id="adresseDepart" name="adresseDepart" type="text" className={inputClass} />
            </div>
            <div>
              <label htmlFor="adresseArrivee" className="mb-1 block text-sm font-semibold">
                Adresse d’arrivée
              </label>
              <input id="adresseArrivee" name="adresseArrivee" type="text" className={inputClass} />
            </div>

            <div>
              <label htmlFor="typeTrajet" className="mb-1 block text-sm font-semibold">
                Type de trajet*
              </label>
              <select id="typeTrajet" name="typeTrajet" required className={inputClass} defaultValue="">
                <option value="" disabled>
                  Sélectionnez…
                </option>
                {tripTypes.map((t) => (
                  <option key={t.value} value={t.value}>
                    {t.label}
                  </option>
                ))}
              </select>
            </div>

            <fieldset className="grid gap-4 sm:grid-cols-2">
              <legend className="sr-only">Besoins d’accessibilité</legend>
              <div>
                <label htmlFor="fauteuil" className="mb-1 block text-sm font-semibold">
                  Fauteuil roulant*
                </label>
                <select id="fauteuil" name="fauteuil" required className={inputClass} defaultValue="">
                  <option value="" disabled>
                    Sélectionnez…
                  </option>
                  <option value="oui">Oui</option>
                  <option value="non">Non</option>
                </select>
              </div>
              <div>
                <label htmlFor="accompagnement" className="mb-1 block text-sm font-semibold">
                  Accompagnement nécessaire*
                </label>
                <select
                  id="accompagnement"
                  name="accompagnement"
                  required
                  className={inputClass}
                  defaultValue=""
                >
                  <option value="" disabled>
                    Sélectionnez…
                  </option>
                  <option value="oui">Oui</option>
                  <option value="non">Non</option>
                </select>
              </div>
            </fieldset>

            <div>
              <label htmlFor="message" className="mb-1 block text-sm font-semibold">
                Message complémentaire
              </label>
              <textarea id="message" name="message" rows={4} className={inputClass} />
            </div>

            <div className="flex items-start gap-3">
              <input
                id="consentement"
                name="consentement"
                type="checkbox"
                required
                className="mt-1 h-5 w-5 rounded border-border"
              />
              <label htmlFor="consentement" className="text-sm leading-relaxed text-muted">
                J’ai pris connaissance de la{" "}
                <Link href="/protection-des-donnees" className="text-brand-blue underline">
                  déclaration relative à la protection des données
                </Link>{" "}
                et j’accepte que mes informations soient utilisées afin de traiter ma demande.*
              </label>
            </div>

            <button type="submit" disabled={status === "loading"} className="btn-primary disabled:opacity-60">
              {status === "loading" ? "Envoi…" : "Envoyer ma demande"}
            </button>

            <p className="text-sm text-muted">
              L’envoi de ce formulaire ne vaut pas confirmation définitive du transport.
              Emmenez-moi Sàrl vous recontactera pour confirmer la disponibilité et les modalités
              de la prise en charge.
            </p>

            <div aria-live="polite" className="min-h-12 text-base">
              {status === "success" ? (
                <p className="text-brand-blue">
                  Merci de nous avoir contactés. Nous vous répondrons dès que possible.
                </p>
              ) : null}
              {status === "error" ? (
                <p role="alert" className="text-red-700">
                  {errorMsg}
                </p>
              ) : null}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
