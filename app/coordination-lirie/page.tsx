import type { Metadata } from "next";
import Link from "next/link";
import { company, siteConfig } from "@/lib/company";

export const metadata: Metadata = {
  title: "Coordination LIRIE — transport institutionnel",
  description:
    "Emmenez-moi Sàrl collabore avec LIRIE, plateforme suisse de coordination des transports de santé. Institutions : centralisez vos demandes ; Emmenez-moi assure le transport PMR à Genève et Vaud.",
  alternates: { canonical: "/coordination-lirie" },
  openGraph: {
    title: "Coordination LIRIE | Emmenez-moi Sàrl",
    description:
      "Comment Emmenez-moi et LIRIE collaborent pour coordonner les transports accompagnés des institutions en Suisse romande.",
    url: `${siteConfig.url}/coordination-lirie`,
  },
};

const roles = [
  {
    title: "LIRIE",
    text: "Plateforme de coordination : centralisation des demandes, suivi des échanges et lien entre établissements de santé et entreprises de transport.",
  },
  {
    title: "Emmenez-moi Sàrl",
    text: "Entreprise de transport accompagné : réalisation des courses PMR à Genève et dans le canton de Vaud, avec chauffeurs formés aux soins.",
  },
] as const;

export default function CoordinationLiriePage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:py-16">
      <p className="mb-6">
        <Link href="/#coordination" className="text-base font-semibold text-brand-blue underline underline-offset-2">
          ← Retour à l’accueil
        </Link>
      </p>

      <p className="section-kicker">Institutions & coordination</p>
      <h1 className="section-title mt-2">
        Coordination des transports avec LIRIE
      </h1>
      <p className="mt-4 text-lg leading-relaxed text-muted">
        Emmenez-moi&nbsp;Sàrl collabore avec{" "}
        <a
          href={company.lirieUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-brand-blue underline underline-offset-2"
        >
          LIRIE
        </a>
        , une plateforme suisse dédiée à la coordination des transports de santé et accompagnés
        en Suisse romande.
      </p>

      <div className="mt-10 space-y-8 text-base leading-relaxed text-foreground sm:text-lg">
        <section>
          <h2 className="mb-3 text-xl font-semibold text-brand-blue-deep">Qui fait quoi ?</h2>
          <ul className="space-y-4">
            {roles.map((role) => (
              <li key={role.title} className="rounded-2xl border border-border bg-white p-5">
                <p className="font-semibold text-brand-blue-deep">{role.title}</p>
                <p className="mt-1 text-muted">{role.text}</p>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-semibold text-brand-blue-deep">
            Pour les institutions
          </h2>
          <p className="text-muted">
            Hôpitaux, cliniques, structures médico-sociales, curateurs et professionnels peuvent
            s’appuyer sur LIRIE pour organiser les demandes de transport, puis sur
            Emmenez-moi&nbsp;Sàrl pour la prise en charge accompagnée sur le terrain (fauteuil
            roulant, transport couché, trajets médicaux ou privés).
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-semibold text-brand-blue-deep">En résumé</h2>
          <p className="text-muted">
            LIRIE ne remplace pas le transporteur : elle facilite la coordination. Le transport
            reste réalisé par Emmenez-moi&nbsp;Sàrl selon les modalités convenues avec
            l’établissement.
          </p>
        </section>
      </div>

      <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <a
          href={company.lirieUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          Visiter LIRIE
        </a>
        <Link href="/#contact" className="btn-secondary">
          Contacter Emmenez-moi
        </Link>
      </div>
    </article>
  );
}
