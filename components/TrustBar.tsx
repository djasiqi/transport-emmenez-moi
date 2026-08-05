import { company } from "@/lib/company";

const items = [
  `Depuis ${company.foundedYear}`,
  "Chauffeurs formés dans le domaine des soins",
  "Véhicule adapté",
  "Service 7 jours sur 7",
] as const;

export default function TrustBar() {
  return (
    <section className="border-b border-border bg-surface" aria-label="Points de confiance">
      <ul className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-5 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-4 sm:px-6 sm:py-6">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-center gap-2 text-base font-medium text-foreground sm:text-[1.05rem]"
          >
            <span
              className="inline-block h-2 w-2 shrink-0 rounded-full bg-brand-blue"
              aria-hidden="true"
            />
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
