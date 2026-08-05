const steps = [
  {
    n: "1",
    title: "Contactez-nous",
    text: "Appelez-nous ou transmettez votre demande à l’aide du formulaire.",
  },
  {
    n: "2",
    title: "Précisez votre besoin",
    text: "Indiquez la date, l’horaire, les adresses, le type de trajet et les éventuelles aides nécessaires.",
  },
  {
    n: "3",
    title: "Recevez notre confirmation",
    text: "Emmenez-moi Sàrl vous recontacte afin de confirmer la disponibilité et les modalités de la prise en charge.",
  },
  {
    n: "4",
    title: "Voyagez sereinement",
    text: "Votre chauffeur vous accompagne depuis le lieu de départ jusqu’à la destination convenue.",
  },
] as const;

export default function HowItWorks() {
  return (
    <section id="reservation" className="section-pad scroll-mt-24 bg-page-bg">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold tracking-tight text-brand-blue sm:text-4xl">
          Comment organiser votre transport ?
        </h2>
        <p className="mt-3 max-w-2xl text-lg text-muted">
          Un parcours simple, clair et confirmé avant chaque prise en charge.
        </p>

        <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <li key={step.n} className="card">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-blue text-base font-bold text-white">
                {step.n}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-foreground">{step.title}</h3>
              <p className="mt-2 text-base leading-relaxed text-muted">{step.text}</p>
            </li>
          ))}
        </ol>

        <p className="mt-8 rounded-lg border border-border bg-surface px-4 py-3 text-base text-muted">
          L’envoi d’une demande ne vaut pas confirmation définitive du transport.
        </p>
      </div>
    </section>
  );
}
