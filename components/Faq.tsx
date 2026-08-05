"use client";

import { useId, useState } from "react";

const faqs = [
  {
    q: "Intervenez-vous uniquement à Genève ?",
    a: "Emmenez-moi\u00A0Sàrl intervient principalement dans les cantons de Genève et de Vaud. D’autres destinations peuvent être étudiées sur demande.",
  },
  {
    q: "Transportez-vous les personnes en fauteuil roulant ?",
    a: "L’entreprise dispose d’un véhicule adapté à certaines prises en charge en fauteuil roulant. Les dimensions du fauteuil et les besoins du passager doivent être précisés lors de la réservation.",
  },
  {
    q: "Peut-on réserver un aller-retour ?",
    a: "Oui. Un aller-retour peut être organisé. Il est important d’indiquer les horaires prévus et si un temps d’attente est nécessaire.",
  },
  {
    q: "Travaillez-vous le soir et le week-end ?",
    a: "Le service est disponible 7\u00A0jours\u00A0sur\u00A07, y compris en soirée et le week-end, selon les réservations et les disponibilités.",
  },
  {
    q: "Comment obtenir un tarif ?",
    a: "Le tarif dépend notamment du trajet, du type de prise en charge, du temps d’attente et des éventuels besoins particuliers. Une estimation peut être communiquée avant confirmation.",
  },
  {
    q: "Une personne peut-elle accompagner le passager ?",
    a: "Cela peut être possible selon le véhicule utilisé, l’organisation de la course et les places disponibles. Ce besoin doit être indiqué au moment de la réservation.",
  },
] as const;

export default function Faq() {
  const baseId = useId();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-pad scroll-mt-24 bg-surface">
      <div className="mx-auto max-w-3xl">
        <p className="section-kicker">FAQ</p>
        <h2 className="section-title">Questions fréquentes</h2>
        <p className="section-lead">
          Les réponses aux demandes les plus courantes avant une réservation.
        </p>

        <div className="mt-10 space-y-3">
          {faqs.map((item, index) => {
            const panelId = `${baseId}-panel-${index}`;
            const buttonId = `${baseId}-button-${index}`;
            const isOpen = openIndex === index;

            return (
              <div
                key={item.q}
                className={`overflow-hidden rounded-2xl border transition ${
                  isOpen
                    ? "border-brand-blue/25 bg-white shadow-[var(--shadow-soft)]"
                    : "border-border bg-page-bg"
                }`}
              >
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-lg font-semibold text-foreground"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                  >
                    {item.q}
                    <span
                      aria-hidden="true"
                      className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-brand-blue transition ${
                        isOpen ? "bg-brand-blue-tint rotate-0" : "bg-white"
                      }`}
                    >
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  hidden={!isOpen}
                  className="border-t border-border px-5 py-4 text-base leading-relaxed text-muted"
                >
                  {item.a}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
