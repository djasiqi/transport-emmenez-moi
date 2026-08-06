import Link from "next/link";
import { company } from "@/lib/company";

const points = [
  {
    title: "Demandes centralisées",
    text: "Une seule plateforme pour transmettre les trajets et les informations utiles entre établissements et transporteurs.",
  },
  {
    title: "Suivi et traçabilité",
    text: "Les échanges et l’avancement restent accessibles aux acteurs habilités tout au long de la mission.",
  },
  {
    title: "Rôles clairement séparés",
    text: "LIRIE assure la coordination ; Emmenez-moi\u00A0Sàrl réalise le transport accompagné sur le terrain.",
  },
] as const;

export default function LirieConnection() {
  return (
    <section id="coordination" className="section-pad scroll-mt-24" aria-labelledby="coordination-title">
      <div className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-[1.75rem] border border-border bg-white">
          <div
            className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 bg-[linear-gradient(135deg,transparent_0%,#eef5fa_48%,#e3eef6_100%)] lg:block"
            aria-hidden="true"
          />

          <div className="relative grid gap-10 p-8 sm:p-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-12 lg:p-12">
            <div>
              <p className="section-kicker">Pour les institutions</p>
              <h2 id="coordination-title" className="section-title">
                Coordination des transports avec LIRIE
              </h2>
              <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted">
                Emmenez-moi&nbsp;Sàrl collabore avec{" "}
                <a
                  href={company.lirieUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-brand-blue underline decoration-brand-blue/30 underline-offset-2 hover:decoration-brand-blue"
                >
                  LIRIE
                </a>
                , une plateforme suisse de coordination des transports de santé et accompagnés en
                Suisse romande.
              </p>
              <p className="mt-3 max-w-xl text-base leading-relaxed text-muted">
                Pour les hôpitaux, cliniques, structures médico-sociales et professionnels, LIRIE
                facilite la centralisation des demandes, le suivi des échanges et le lien avec les
                entreprises de transport partenaires.
              </p>
              <p className="mt-3 max-w-xl text-base leading-relaxed text-muted">
                Le transport reste assuré par Emmenez-moi&nbsp;Sàrl, selon les modalités convenues
                avec l’établissement.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link href="/coordination-lirie" className="btn-primary">
                  En savoir plus sur LIRIE
                </Link>
                <a
                  href={company.lirieUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  Site LIRIE
                </a>
                <Link href="/#contact" className="btn-ghost self-start">
                  Contacter Emmenez-moi
                </Link>
              </div>
            </div>

            <ul className="space-y-4">
              {points.map((point) => (
                <li key={point.title} className="flex gap-3">
                  <span
                    className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[var(--lirie-teal,#00796B)]"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="font-semibold tracking-tight text-brand-blue-deep">
                      {point.title}
                    </p>
                    <p className="mt-0.5 text-base leading-relaxed text-muted">{point.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
