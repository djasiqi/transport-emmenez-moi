import Link from "next/link";

export default function Institutions() {
  return (
    <section id="institutions" className="section-pad scroll-mt-24">
      <div className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-[1.75rem] border border-brand-blue/15 bg-[linear-gradient(135deg,#eef5fa_0%,#ffffff_55%,#e8f2f8_100%)] p-8 shadow-[var(--shadow-soft)] sm:p-12">
          <div
            className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-brand-blue/10"
            aria-hidden="true"
          />
          <p className="section-kicker">Institutions</p>
          <h2 className="section-title max-w-3xl">
            Vous représentez une institution ou un professionnel de santé ?
          </h2>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-foreground">
            Emmenez-moi&nbsp;Sàrl accompagne également les établissements de santé, les structures
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
              Voir la coordination LIRIE
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
