const values = ["Sécurité", "Disponibilité", "Fiabilité", "Ponctualité"] as const;

export default function Values() {
  return (
    <section className="bg-white px-4 py-10 sm:py-12" aria-label="Nos valeurs">
      <div className="mx-auto grid max-w-6xl gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {values.map((value) => (
          <div
            key={value}
            className="flex min-h-28 items-center justify-center bg-brand-blue-mid px-4 py-6 text-center"
          >
            <p className="text-xl font-light text-white sm:text-2xl">{value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
