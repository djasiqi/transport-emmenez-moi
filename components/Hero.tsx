import Image from "next/image";
import Link from "next/link";
import { company } from "@/lib/company";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-blue text-white">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-2">
        <div className="space-y-6">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-blue-soft">
            Genève &amp; Vaud · Depuis {company.foundedYear}
          </p>
          <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Transport accompagné pour les personnes à mobilité réduite
          </h1>
          <p className="max-w-xl text-lg font-normal text-white/95 sm:text-xl">
            Des chauffeurs formés dans le domaine des soins vous accompagnent en toute sécurité
            pour vos rendez-vous médicaux, vos déplacements privés et vos sorties dans les
            cantons de Genève et de Vaud.
          </p>

          <div className="flex flex-col gap-2 text-base sm:text-lg">
            <a
              href={company.officePhoneHref}
              className="font-medium text-white underline decoration-white/40 underline-offset-4 hover:decoration-white"
            >
              Bureau : {company.officePhoneDisplay}
            </a>
            <a
              href={company.driverPhoneHref}
              className="font-medium text-white underline decoration-white/40 underline-offset-4 hover:decoration-white"
            >
              Réservation chauffeur : {company.driverPhoneDisplay}
            </a>
          </div>

          <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap">
            <Link
              href="/#reservation"
              className="inline-flex min-h-12 items-center justify-center rounded-lg bg-white px-5 py-3 text-base font-semibold text-brand-blue hover:bg-brand-blue-tint"
            >
              Réserver un transport
            </Link>
            <a
              href={company.driverPhoneHref}
              className="inline-flex min-h-12 items-center justify-center rounded-lg border-2 border-white px-5 py-3 text-base font-semibold text-white hover:bg-white/10"
            >
              Appeler le chauffeur
            </a>
            <Link
              href="/#services"
              className="inline-flex min-h-12 items-center justify-center px-5 py-3 text-base font-semibold text-white underline underline-offset-4"
            >
              Découvrir nos services
            </Link>
          </div>
        </div>

        <div className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-2xl border-4 border-white/25 shadow-xl lg:max-w-none">
          <Image
            src="/images/hero-transport-pmr.jpg"
            alt="Véhicule Emmenez-moi pour le transport de personnes à mobilité réduite"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
        </div>
      </div>
    </section>
  );
}
