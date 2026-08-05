const values = [
  {
    title: "Sécurité",
    text: "Des chauffeurs formés dans le domaine des soins et attentifs aux besoins particuliers de chaque passager.",
  },
  {
    title: "Disponibilité",
    text: "Une prise en charge possible 7\u00A0jours\u00A0sur\u00A07, y compris en soirée et le week-end, selon les réservations et les disponibilités.",
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
    <section id="engagements" className="section-pad scroll-mt-24 bg-surface">
      <div className="mx-auto max-w-6xl">
        <p className="section-kicker">Engagements</p>
        <h2 className="section-title">Nos engagements</h2>
        <p className="section-lead">
          Une prise en charge humaine, sûre et organisée, adaptée aux personnes fragiles.
        </p>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {values.map((value) => (
            <article
              key={value.title}
              className="card relative overflow-hidden border-l-[3px] border-l-brand-blue pl-6"
            >
              <div
                className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-brand-blue-tint"
                aria-hidden="true"
              />
              <h3 className="relative text-xl font-semibold text-brand-blue-deep">{value.title}</h3>
              <p className="relative mt-3 text-base leading-relaxed text-muted">{value.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
