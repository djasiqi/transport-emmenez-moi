import Image from "next/image";
import { company } from "@/lib/company";

export default function About() {
  return (
    <section id="a-propos" className="section-pad scroll-mt-24 bg-surface">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
        <div className="space-y-5">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-blue">
            Depuis {company.foundedYear}
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-brand-blue sm:text-4xl">
            Une entreprise genevoise spécialisée dans le transport accompagné
          </h2>
          <p className="text-lg leading-relaxed text-foreground">
            Fondée en {company.foundedYear} et basée à {company.address.city}, {company.name}{" "}
            accompagne les personnes à mobilité réduite dans leurs déplacements à Genève et dans
            le canton de Vaud.
          </p>
          <p className="text-lg leading-relaxed text-muted">
            Notre flotte comprend deux véhicules, dont un véhicule spécialement équipé pour
            certaines prises en charge nécessitant un transport adapté.
          </p>
          <p className="text-lg leading-relaxed text-muted">
            Nos chauffeurs, issus du domaine des soins, accordent une attention particulière à
            la sécurité, au confort et au respect du rythme de chaque passager.
          </p>
          <p className="text-lg leading-relaxed text-muted">
            Nous intervenons pour des trajets ponctuels ou réguliers, des rendez-vous médicaux,
            des déplacements privés ainsi que des sorties organisées sur plusieurs jours.
          </p>
          <p className="text-lg leading-relaxed text-muted">
            Notre équipe peut accueillir les passagers en français, anglais, italien, espagnol et
            arabe.
          </p>
        </div>

        <div className="grid gap-4">
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border shadow-sm">
            <Image
              src="/images/vehicule-emmenez-moi.jpg"
              alt="Véhicule Emmenez-moi équipé pour le transport adapté"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border shadow-sm">
            <Image
              src="/images/service-accompagnement.jpg"
              alt="Accompagnement personnalisé lors d’un transport Emmenez-moi"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
