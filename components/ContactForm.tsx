"use client";

import { FormEvent, useState } from "react";
import { company } from "@/lib/company";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");

    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prenom: data.get("prenom"),
          nom: data.get("nom"),
          email: data.get("email"),
          telephone: data.get("telephone"),
          message: data.get("message"),
        }),
      });

      if (!response.ok) {
        setStatus("error");
        return;
      }

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="scroll-mt-24 bg-white px-4 py-14 sm:py-16">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">
        <div className="space-y-4">
          <p className="text-2xl font-light sm:text-3xl">Contact</p>
          <p className="text-base font-light leading-relaxed sm:text-lg">
            {company.name}
            <br />
            {company.street}
            <br />
            {company.city}
          </p>
          <p className="text-base font-light sm:text-lg">
            Bureau:{" "}
            <a href={company.phoneBureauHref} className="underline hover:text-brand-blue">
              {company.phoneBureauDisplay.replace(/ /g, "")}
            </a>
          </p>
          <p className="text-base font-light sm:text-lg">
            Réservation Chauffeur:{" "}
            <a href={company.phoneChauffeurHref} className="underline hover:text-brand-blue">
              {company.phoneChauffeurDisplay.replace(/ /g, "")}
            </a>
          </p>
          <p className="text-base font-light sm:text-lg">
            <a href={company.emailHref} className="underline hover:text-brand-blue">
              {company.email}
            </a>
          </p>
        </div>

        <div>
          <p className="mb-2 text-2xl font-light uppercase tracking-wide sm:text-3xl">
            Formulaire
          </p>
          <h2 className="mb-6 text-xl font-bold">Contact Us</h2>

          <form onSubmit={onSubmit} className="space-y-4" noValidate>
            <div>
              <label htmlFor="prenom" className="mb-1 block text-sm font-medium">
                Prénom*
              </label>
              <input
                id="prenom"
                name="prenom"
                type="text"
                required
                autoComplete="given-name"
                className="w-full rounded border border-black/20 bg-white px-3 py-2"
              />
            </div>
            <div>
              <label htmlFor="nom" className="mb-1 block text-sm font-medium">
                Nom*
              </label>
              <input
                id="nom"
                name="nom"
                type="text"
                required
                autoComplete="family-name"
                className="w-full rounded border border-black/20 bg-white px-3 py-2"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-1 block text-sm font-medium">
                Adresse e-mail*
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className="w-full rounded border border-black/20 bg-white px-3 py-2"
              />
            </div>
            <div>
              <label htmlFor="telephone" className="mb-1 block text-sm font-medium">
                Téléphone*
              </label>
              <input
                id="telephone"
                name="telephone"
                type="tel"
                required
                autoComplete="tel"
                className="w-full rounded border border-black/20 bg-white px-3 py-2"
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-1 block text-sm font-medium">
                Message*
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full rounded border border-black/20 bg-white px-3 py-2"
              />
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="inline-flex items-center justify-center rounded bg-brand-blue px-6 py-3 text-sm font-medium uppercase tracking-wide text-white transition hover:bg-brand-blue-mid disabled:opacity-60"
            >
              {status === "loading" ? "Envoi…" : "Envoyer"}
            </button>

            <div aria-live="polite" className="min-h-12 text-sm">
              {status === "success" ? (
                <p>
                  Merci de nous contacter.
                  <br />
                  Nous vous répondrons dès que possible.
                </p>
              ) : null}
              {status === "error" ? (
                <p role="alert">
                  Oups, une erreur s&apos;est produite lors de l&apos;envoi de votre message.
                  <br />
                  Veuillez réessayer plus tard.
                </p>
              ) : null}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
