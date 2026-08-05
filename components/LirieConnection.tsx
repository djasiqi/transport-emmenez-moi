import { company } from "@/lib/company";

export default function LirieConnection() {
  return (
    <section id="coordination" className="section-pad scroll-mt-24 bg-page-bg">
      <div className="mx-auto max-w-6xl">
        <div className="card max-w-4xl p-8 sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-blue">
            Pour les institutions partenaires
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-brand-blue sm:text-4xl">
            Une coordination simplifiée avec LIRIE
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-foreground">
            Emmenez-moi Sàrl s’inscrit également dans une démarche de modernisation de la
            coordination des transports grâce à LIRIE, une plateforme suisse dédiée aux échanges
            entre les établissements de santé et les entreprises de transport.
          </p>
          <p className="mt-3 text-lg leading-relaxed text-muted">
            Pour les institutions partenaires, LIRIE permet notamment de centraliser les
            demandes, suivre leur évolution, transmettre les informations utiles et faciliter
            les échanges liés à chaque transport.
          </p>
          <p className="mt-3 text-lg leading-relaxed text-muted">
            Le transport reste pris en charge par Emmenez-moi Sàrl selon les modalités convenues
            avec l’établissement.
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
      </div>
    </section>
  );
}
