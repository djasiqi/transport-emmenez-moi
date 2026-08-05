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
    <section id="reservation" className="section-pad scroll-mt-24 bg-surface">
      <div className="mx-auto max-w-6xl">
        <p className="section-kicker">Réservation</p>
        <h2 className="section-title">Comment organiser votre transport ?</h2>
        <p className="section-lead">
          Un parcours simple, clair et confirmé avant chaque prise en charge.
        </p>

        <ol className="relative mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <div
            className="pointer-events-none absolute left-[12%] right-[12%] top-10 hidden h-px bg-gradient-to-r from-transparent via-brand-blue-soft to-transparent lg:block"
            aria-hidden="true"
          />
          {steps.map((step) => (
            <li key={step.n} className="card relative text-center sm:text-left">
              <span className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-blue text-lg font-bold text-white shadow-[0_8px_20px_rgba(1,82,145,0.3)] sm:mx-0">
                {step.n}
              </span>
              <h3 className="mt-5 text-lg font-semibold text-foreground">{step.title}</h3>
              <p className="mt-2 text-base leading-relaxed text-muted">{step.text}</p>
            </li>
          ))}
        </ol>

        <p className="mt-8 rounded-xl border border-brand-blue/15 bg-brand-blue-tint/70 px-5 py-4 text-base text-brand-blue-deep">
          L’envoi d’une demande ne vaut pas confirmation définitive du transport.
        </p>
      </div>
    </section>
  );
}
