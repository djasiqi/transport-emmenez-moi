import Link from "next/link";

const services = [
  {
    title: "Rendez-vous médicaux",
    text: "Transport vers les hôpitaux, cliniques, cabinets médicaux, centres de soins et établissements spécialisés.",
  },
  {
    title: "Transport en fauteuil roulant",
    text: "Prise en charge adaptée des personnes se déplaçant en fauteuil roulant, selon les caractéristiques du véhicule et les besoins communiqués lors de la réservation.",
  },
  {
    title: "Déplacements privés",
    text: "Visites familiales, démarches administratives, sorties, courses et déplacements personnels.",
  },
  {
    title: "Transports réguliers",
    text: "Organisation de trajets récurrents pour des consultations, traitements, accueils de jour ou activités planifiées.",
  },
  {
    title: "Aller-retour avec attente",
    text: "Possibilité d’organiser un aller-retour et, selon la demande, un temps d’attente pendant le rendez-vous.",
  },
  {
    title: "Accompagnement personnalisé",
    text: "Aide à l’installation, attention portée au confort du passager et accompagnement jusqu’à la destination convenue.",
  },
] as const;

export default function Services() {
  return (
    <section id="services" className="section-pad scroll-mt-24 bg-surface">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold tracking-tight text-brand-blue sm:text-4xl">
          Nos services de transport
        </h2>
        <p className="mt-3 max-w-2xl text-lg text-muted">
          Des solutions adaptées aux besoins de mobilité, pour les particuliers comme pour les
          situations organisées avec une institution.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="card flex flex-col gap-4">
              <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
              <p className="flex-1 text-base leading-relaxed text-muted">{service.text}</p>
              <Link href="/#reservation" className="btn-ghost self-start px-0">
                Demander ce transport
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
