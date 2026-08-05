import Image from "next/image";
import Link from "next/link";
import { company } from "@/lib/company";

export default function Hero() {
  return (
    <section className="relative isolate min-h-[min(92vh,52rem)] overflow-hidden text-white">
      <Image
        src="/images/hero-transport-pmr.jpg"
        alt="Véhicule Emmenez-moi sur les quais de Genève, Jet d’Eau en arrière-plan"
        fill
        priority
        className="object-cover object-[72%_45%] sm:object-[78%_42%]"
        sizes="100vw"
      />
      {/* Lisibilité à gauche, photo bien visible à droite */}
      <div
        className="absolute inset-0 bg-[linear-gradient(90deg,rgba(1,32,58,0.88)_0%,rgba(1,52,96,0.72)_42%,rgba(1,82,145,0.28)_72%,rgba(1,82,145,0.12)_100%)]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-brand-blue-deep/50 via-transparent to-brand-blue-deep/25"
        aria-hidden="true"
      />

      <div className="relative mx-auto flex min-h-[min(92vh,52rem)] max-w-6xl items-end px-4 pb-16 pt-28 sm:items-center sm:px-6 sm:pb-20 sm:pt-24">
        <div className="max-w-xl space-y-6 sm:space-y-7">
          <p className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Emmenez-moi
          </p>

          <h1 className="text-3xl font-bold leading-[1.12] tracking-tight sm:text-4xl lg:text-[2.75rem]">
            Transport accompagné pour les personnes à mobilité réduite
          </h1>

          <p className="max-w-lg text-lg leading-relaxed text-white/92 sm:text-xl">
            Des chauffeurs formés dans le domaine des soins vous conduisent à Genève et dans le
            canton de Vaud, 7 jours sur 7.
          </p>

          <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center">
            <Link
              href="/#reservation"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-7 py-3 text-base font-semibold text-brand-blue shadow-[0_10px_30px_rgba(0,0,0,0.22)] transition hover:-translate-y-0.5 hover:bg-brand-blue-tint"
            >
              Réserver un transport
            </Link>
            <a
              href={company.driverPhoneHref}
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/55 bg-white/10 px-7 py-3 text-base font-semibold text-white backdrop-blur-sm transition hover:bg-white/18"
            >
              Appeler {company.driverPhoneDisplay}
            </a>
          </div>

          <p className="text-sm text-white/80 sm:text-base">
            Bureau{" "}
            <a
              href={company.officePhoneHref}
              className="font-semibold text-white underline decoration-white/35 underline-offset-4 hover:decoration-white"
            >
              {company.officePhoneDisplay}
            </a>
            <span className="mx-2 text-white/40" aria-hidden="true">
              ·
            </span>
            Genève &amp; Vaud · Depuis {company.foundedYear}
          </p>
        </div>
      </div>
    </section>
  );
}
