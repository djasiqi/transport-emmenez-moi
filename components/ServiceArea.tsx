import Link from "next/link";
import { company } from "@/lib/company";

export default function ServiceArea() {
  return (
    <section className="section-pad bg-surface">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold tracking-tight text-brand-blue sm:text-4xl">
          Nos principales zones d’intervention
        </h2>
        <p className="mt-3 text-lg text-muted">
          Emmenez-moi Sàrl intervient principalement dans :
        </p>
        <ul className="mt-6 flex flex-col gap-3 sm:flex-row sm:gap-6">
          {company.serviceAreas.map((area) => (
            <li
              key={area}
              className="card flex min-w-[12rem] items-center justify-center py-6 text-xl font-semibold text-brand-blue"
            >
              Canton de {area}
            </li>
          ))}
        </ul>
        <p className="mt-6 max-w-2xl text-base text-muted">
          D’autres destinations peuvent être étudiées selon les besoins, la distance et les
          disponibilités.
        </p>
        <Link href="/#reservation" className="btn-primary mt-8">
          Demander un trajet
        </Link>
      </div>
    </section>
  );
}
