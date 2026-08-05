import Link from "next/link";
import { bookingHref, type ServiceSlug } from "@/lib/booking";

const services: {
  title: string;
  text: string;
  slug: ServiceSlug;
}[] = [
  {
    slug: "medicaux",
    title: "Rendez-vous médicaux",
    text: "Transport vers les hôpitaux, cliniques, cabinets médicaux, centres de soins et établissements spécialisés.",
  },
  {
    slug: "fauteuil",
    title: "Transport en fauteuil roulant",
    text: "Prise en charge adaptée des personnes se déplaçant en fauteuil roulant, selon les caractéristiques du véhicule et les besoins communiqués lors de la réservation.",
  },
  {
    slug: "prives",
    title: "Déplacements privés",
    text: "Visites familiales, démarches administratives, sorties, courses et déplacements personnels.",
  },
  {
    slug: "regulier",
    title: "Transports réguliers",
    text: "Organisation de trajets récurrents pour des consultations, traitements, accueils de jour ou activités planifiées.",
  },
  {
    slug: "aller-retour",
    title: "Aller-retour avec attente",
    text: "Possibilité d’organiser un aller-retour et, selon la demande, un temps d’attente pendant le rendez-vous.",
  },
  {
    slug: "accompagnement",
    title: "Accompagnement personnalisé",
    text: "Aide à l’installation, attention portée au confort du passager et accompagnement jusqu’à la destination convenue.",
  },
];

export default function Services() {
  return (
    <section id="services" className="section-pad scroll-mt-24">
      <div className="mx-auto max-w-6xl">
        <p className="section-kicker">Services</p>
        <h2 className="section-title">Nos services de transport</h2>
        <p className="section-lead">
          Des solutions adaptées aux besoins de mobilité, pour les particuliers comme pour les
          situations organisées avec une institution.
        </p>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <article key={service.slug} className="card card-interactive flex flex-col gap-4">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-blue-tint text-sm font-bold text-brand-blue">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="text-xl font-semibold tracking-tight text-foreground">
                {service.title}
              </h3>
              <p className="flex-1 text-base leading-relaxed text-muted">{service.text}</p>
              <Link href={bookingHref(service.slug)} className="btn-ghost self-start">
                Demander ce transport
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
