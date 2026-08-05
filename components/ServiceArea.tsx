import Link from "next/link";
import { bookingHref } from "@/lib/booking";
import { company } from "@/lib/company";

export default function ServiceArea() {
  return (
    <section className="section-pad">
      <div className="mx-auto max-w-6xl">
        <p className="section-kicker">Zones</p>
        <h2 className="section-title">Nos principales zones d’intervention</h2>
        <p className="section-lead">
          <span className="whitespace-nowrap">Emmenez-moi&nbsp;Sàrl</span> intervient
          principalement dans :
        </p>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {company.serviceAreas.map((area) => (
            <li
              key={area}
              className="card flex min-h-32 flex-col items-start justify-center bg-[linear-gradient(160deg,#ffffff_0%,#eef5fa_100%)]"
            >
              <p className="text-sm font-semibold uppercase tracking-wider text-brand-blue-soft">
                Canton
              </p>
              <p className="mt-1 text-3xl font-bold tracking-tight text-brand-blue-deep">{area}</p>
            </li>
          ))}
        </ul>

        <p className="mt-6 max-w-2xl text-base text-muted">
          D’autres destinations peuvent être étudiées selon les besoins, la distance et les
          disponibilités.
        </p>
        <Link href={bookingHref()} className="btn-primary mt-8">
          Demander un trajet
        </Link>
      </div>
    </section>
  );
}
