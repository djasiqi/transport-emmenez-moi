import Link from "next/link";

export default function Institutions() {
  return (
    <section id="institutions" className="section-pad scroll-mt-24 bg-surface">
      <div className="mx-auto max-w-6xl">
        <div className="card border-brand-blue/20 bg-brand-blue-tint/40 p-8 sm:p-10">
          <h2 className="text-3xl font-bold tracking-tight text-brand-blue sm:text-4xl">
            Vous représentez une institution ou un professionnel de santé ?
          </h2>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-foreground">
            Emmenez-moi Sàrl accompagne également les établissements de santé, les structures
            médico-sociales, les curateurs et les professionnels chargés d’organiser les
            déplacements de leurs patients, résidents ou bénéficiaires.
          </p>
          <p className="mt-3 max-w-3xl text-lg leading-relaxed text-muted">
            Nous pouvons prendre en charge des transports ponctuels ou réguliers et adapter
            l’accompagnement aux informations communiquées par l’institution.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link href="/#contact" className="btn-primary">
              Échanger sur vos besoins
            </Link>
            <Link href="/#coordination" className="btn-secondary">
              Découvrir la coordination avec LIRIE
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
