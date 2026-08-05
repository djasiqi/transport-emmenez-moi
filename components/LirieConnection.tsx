import { company } from "@/lib/company";

export default function LirieConnection() {
  return (
    <section id="coordination" className="section-pad scroll-mt-24 bg-surface">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-8 rounded-[1.75rem] border border-border bg-page-bg p-8 lg:grid-cols-[1.2fr_0.8fr] lg:p-10">
          <div>
            <p className="section-kicker">Coordination</p>
            <h2 className="section-title">Une coordination simplifiée avec LIRIE</h2>
            <p className="mt-4 text-lg leading-relaxed text-foreground">
              Emmenez-moi&nbsp;Sàrl s’inscrit également dans une démarche de modernisation de la
              coordination des transports grâce à LIRIE, une plateforme suisse dédiée aux
              échanges entre les établissements de santé et les entreprises de transport.
            </p>
            <p className="mt-3 text-lg leading-relaxed text-muted">
              Pour les institutions partenaires, LIRIE permet notamment de centraliser les
              demandes, suivre leur évolution, transmettre les informations utiles et faciliter
              les échanges liés à chaque transport.
            </p>
            <p className="mt-3 text-lg leading-relaxed text-muted">
              Le transport reste pris en charge par Emmenez-moi&nbsp;Sàrl selon les modalités
              convenues avec l’établissement.
            </p>
            <a
              href={company.lirieUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-8"
            >
              Découvrir LIRIE
            </a>
          </div>
          <div className="rounded-2xl border border-brand-blue/15 bg-white p-6 shadow-[var(--shadow-soft)]">
            <a
              href={company.lirieUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex"
              aria-label="Découvrir LIRIE"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/logo-lirie.png"
                alt="Logo LIRIE"
                width={180}
                height={78}
                className="h-14 w-auto"
              />
            </a>
            <p className="mt-4 text-xl font-semibold tracking-tight text-brand-blue-deep">
              Plateforme de coordination
            </p>
            <ul className="mt-5 space-y-3 text-base text-muted">
              <li className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-blue" />
                Centralisation des demandes
              </li>
              <li className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-blue" />
                Suivi et traçabilité des échanges
              </li>
              <li className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-blue" />
                Lien établissements ↔ transporteurs
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
