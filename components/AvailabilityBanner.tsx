import Link from "next/link";

export default function AvailabilityBanner() {
  return (
    <section
      className="relative overflow-hidden bg-cover bg-center px-4 py-16 text-center sm:py-20"
      style={{ backgroundImage: "url('/images/bandeau-disponibilite.jpg')" }}
    >
      <div className="absolute inset-0 bg-white/75" aria-hidden="true" />
      <div className="relative mx-auto max-w-4xl space-y-6">
        <h2 className="text-3xl font-bold uppercase tracking-wide text-brand-blue sm:text-5xl md:text-6xl">
          7 J/7, Soirs et week-end
        </h2>
        <p className="text-lg font-light text-black sm:text-2xl">
          En urgence ou sur rendez-vous, faites confiance au professionnalisme de Emmenez-moi
          Sàrl pour tous vos trajets.
        </p>
        <Link
          href="#a-propos"
          className="inline-flex items-center justify-center rounded border border-brand-blue bg-white px-6 py-3 text-base font-light uppercase tracking-wide text-brand-brown transition hover:bg-page-bg"
        >
          En savoir plus
        </Link>
      </div>
    </section>
  );
}
