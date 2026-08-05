import Link from "next/link";

export default function AvailabilityBanner() {
  return (
    <section
      className="relative overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('/images/bandeau-disponibilite.jpg')" }}
    >
      <div className="absolute inset-0 bg-white/85" aria-hidden="true" />
      <div className="relative mx-auto max-w-3xl px-4 py-14 text-center sm:px-6 sm:py-16">
        <h2 className="text-3xl font-bold tracking-tight text-brand-blue sm:text-4xl">
          7 jours sur 7, soirs et week-end
        </h2>
        <p className="mt-4 text-lg text-foreground sm:text-xl">
          Pour un déplacement planifié ou une demande ponctuelle, Emmenez-moi Sàrl organise
          votre prise en charge avec attention et professionnalisme.
        </p>
        <Link href="/#reservation" className="btn-primary mt-8">
          Organiser mon transport
        </Link>
      </div>
    </section>
  );
}
