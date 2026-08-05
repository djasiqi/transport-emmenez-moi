import Image from "next/image";
import { company } from "@/lib/company";

export default function Hero() {
  return (
    <section className="bg-brand-blue px-4 py-12 text-center text-white sm:py-16">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-8">
        <div className="relative h-56 w-56 overflow-hidden rounded-full border-4 border-white/30 shadow-lg sm:h-72 sm:w-72">
          <Image
            src="/images/hero-transport-pmr.jpg"
            alt="Emmenez-moi - chauffeurs milieu médical"
            fill
            className="object-cover"
            sizes="(max-width: 640px) 224px, 288px"
            priority
          />
        </div>

        <div className="space-y-4">
          <h1 className="text-3xl font-bold uppercase leading-tight tracking-wide sm:text-5xl md:text-6xl">
            Transport de personnes à mobilité réduite
          </h1>
          <p className="mx-auto max-w-3xl text-lg font-light text-white/95 sm:text-2xl">
            Des chauffeurs formés dans le médical vous conduisent dans vos déplacements
            dans les cantons de Genève et de Vaud.
          </p>
        </div>

        <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-4">
          <a
            href={company.phoneBureauHref}
            className="inline-flex min-w-[240px] items-center justify-center rounded bg-brand-blue-soft px-5 py-3 text-base font-light text-brand-brown transition hover:brightness-95"
          >
            Bureau: {company.phoneBureauDisplay}
          </a>
          <a
            href={company.phoneChauffeurHref}
            className="inline-flex min-w-[240px] items-center justify-center rounded bg-brand-blue-soft px-5 py-3 text-base font-light text-brand-brown transition hover:brightness-95"
          >
            Réservation Chauffeur: {company.phoneChauffeurDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
