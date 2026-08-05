import Link from "next/link";
import { bookingHref } from "@/lib/booking";

export default function AvailabilityBanner() {
  return (
    <section className="section-pad relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/bandeau-disponibilite.jpg')" }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-brand-blue/88" aria-hidden="true" />
      <div className="relative mx-auto max-w-3xl text-center text-white">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.14em] text-brand-blue-soft">
          Disponibilité
        </p>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          <span className="whitespace-nowrap">7&nbsp;jours&nbsp;sur&nbsp;7</span>, soirs et
          week-end
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90 sm:text-xl">
          Pour un déplacement planifié ou une demande ponctuelle,{" "}
          <span className="whitespace-nowrap">Emmenez-moi&nbsp;Sàrl</span> organise votre prise
          en charge avec attention et professionnalisme.
        </p>
        <Link
          href={bookingHref()}
          className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-white px-6 py-3 text-base font-semibold text-brand-blue shadow-lg transition hover:-translate-y-0.5"
        >
          Organiser mon transport
        </Link>
      </div>
    </section>
  );
}
