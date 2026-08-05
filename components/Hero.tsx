import Image from "next/image";
import Link from "next/link";
import { company } from "@/lib/company";

export default function Hero() {
  return (
    <section className="relative isolate min-h-[88vh] overflow-hidden text-white">
      <Image
        src="/images/bandeau-disponibilite.jpg"
        alt=""
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div
        className="absolute inset-0 bg-[linear-gradient(105deg,rgba(1,42,78,0.92)_0%,rgba(1,82,145,0.82)_48%,rgba(1,82,145,0.55)_100%)]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(124,172,196,0.45), transparent 40%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto grid min-h-[88vh] max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:py-24">
        <div className="reveal space-y-7">
          <p className="inline-flex rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-white/90 backdrop-blur">
            Genève &amp; Vaud · Depuis {company.foundedYear}
          </p>

          <div>
            <p className="mb-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Emmenez-moi
            </p>
            <h1 className="max-w-2xl text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.35rem]">
              Transport accompagné pour les personnes à mobilité réduite
            </h1>
          </div>

          <p className="max-w-xl text-lg text-white/92 sm:text-xl">
            Des chauffeurs formés dans le domaine des soins vous accompagnent en toute sécurité
            pour vos rendez-vous médicaux, vos déplacements privés et vos sorties dans les
            cantons de Genève et de Vaud.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href={company.officePhoneHref} className="phone-chip">
              <span className="text-white/70">Bureau</span>
              {company.officePhoneDisplay}
            </a>
            <a href={company.driverPhoneHref} className="phone-chip">
              <span className="text-white/70">Chauffeur</span>
              {company.driverPhoneDisplay}
            </a>
          </div>

          <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:flex-wrap">
            <Link
              href="/#reservation"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-6 py-3 text-base font-semibold text-brand-blue shadow-lg transition hover:-translate-y-0.5 hover:bg-brand-blue-tint"
            >
              Réserver un transport
            </Link>
            <a
              href={company.driverPhoneHref}
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/60 bg-white/10 px-6 py-3 text-base font-semibold text-white backdrop-blur transition hover:bg-white/20"
            >
              Appeler le chauffeur
            </a>
            <Link
              href="/#services"
              className="inline-flex min-h-12 items-center justify-center px-2 py-3 text-base font-semibold text-white/95 underline decoration-white/40 underline-offset-4 hover:decoration-white"
            >
              Découvrir nos services
            </Link>
          </div>
        </div>

        <div className="reveal relative mx-auto hidden w-full max-w-md lg:block" style={{ animationDelay: "120ms" }}>
          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] border border-white/25 shadow-2xl">
            <Image
              src="/images/hero-transport-pmr.jpg"
              alt="Véhicule Emmenez-moi pour le transport de personnes à mobilité réduite"
              fill
              className="object-cover"
              sizes="420px"
              priority
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-blue-deep/80 to-transparent p-5">
              <p className="text-sm font-semibold text-white">Prise en charge attentive · 7 j/7</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
