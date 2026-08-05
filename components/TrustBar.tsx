import { company } from "@/lib/company";

const items = [
  { label: `Depuis ${company.foundedYear}`, detail: "Entreprise genevoise" },
  { label: "Chauffeurs formés", detail: "Domaine des soins" },
  { label: "Véhicule adapté", detail: "Prise en charge PMR" },
  { label: "7\u00A0jours\u00A0sur\u00A07", detail: "Soirs et week-end" },
] as const;

export default function TrustBar() {
  return (
    <section className="border-b border-border bg-white" aria-label="Points de confiance">
      <ul className="mx-auto grid max-w-6xl gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <li key={item.label} className="bg-white px-5 py-5 sm:px-6 sm:py-6">
            <p className="text-base font-bold text-brand-blue-deep">{item.label}</p>
            <p className="mt-0.5 text-sm text-muted">{item.detail}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
