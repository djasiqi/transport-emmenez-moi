const values = [
  {
    title: "Sécurité",
    text: "Des chauffeurs formés dans le domaine des soins et attentifs aux besoins particuliers de chaque passager.",
  },
  {
    title: "Disponibilité",
    text: "Une prise en charge possible 7 jours sur 7, y compris en soirée et le week-end, selon les réservations et les disponibilités.",
  },
  {
    title: "Fiabilité",
    text: "Des informations de transport clairement recueillies et une organisation préparée avec soin.",
  },
  {
    title: "Ponctualité",
    text: "Une attention particulière portée aux horaires de rendez-vous et aux contraintes communiquées lors de la réservation.",
  },
] as const;

export default function Values() {
  return (
    <section id="engagements" className="section-pad scroll-mt-24 bg-page-bg">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold tracking-tight text-brand-blue sm:text-4xl">
          Nos engagements
        </h2>
        <p className="mt-3 max-w-2xl text-lg text-muted">
          Une prise en charge humaine, sûre et organisée, adaptée aux personnes fragiles.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {values.map((value) => (
            <article key={value.title} className="card border-l-4 border-l-brand-blue">
              <h3 className="text-xl font-semibold text-brand-blue">{value.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-muted">{value.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
