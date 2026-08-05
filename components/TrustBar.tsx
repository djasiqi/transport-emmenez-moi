import { company } from "@/lib/company";

const items = [
  { label: `Depuis ${company.foundedYear}`, detail: "Entreprise genevoise" },
  { label: "Chauffeurs formés", detail: "Domaine des soins" },
  { label: "Véhicule adapté", detail: "Prise en charge PMR" },
  { label: "7 jours sur 7", detail: "Soirs et week-end" },
] as const;

export default function TrustBar() {
  return (
    <section className="relative z-10 -mt-6 px-4 sm:-mt-8 sm:px-6" aria-label="Points de confiance">
      <ul className="mx-auto grid max-w-6xl gap-3 rounded-2xl border border-border/80 bg-white/95 p-3 shadow-[0_16px_50px_rgba(1,82,145,0.12)] backdrop-blur sm:grid-cols-2 sm:gap-2 lg:grid-cols-4 lg:p-2">
        {items.map((item) => (
          <li
            key={item.label}
            className="rounded-xl px-4 py-3.5 text-center sm:text-left lg:px-5"
          >
            <p className="text-base font-bold text-brand-blue-deep">{item.label}</p>
            <p className="mt-0.5 text-sm text-muted">{item.detail}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
