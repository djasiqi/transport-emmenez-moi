import Image from "next/image";

export default function Services() {
  return (
    <section className="bg-page-bg px-4 py-14 sm:py-16">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
        <div className="relative mx-auto aspect-[4/3] w-full max-w-xl overflow-hidden rounded-sm shadow-md order-2 lg:order-1">
          <Image
            src="/images/service-accompagnement.jpg"
            alt="Emmenez-moi - service à la personne"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
        <div className="space-y-5 order-1 lg:order-2">
          <p className="text-2xl font-light sm:text-3xl">
            Un service à la personne de haute qualité
          </p>
          <p className="text-base font-light leading-relaxed sm:text-lg">
            Voyager avec Emmenez-moi Sàrl, c&apos;est vous assurer un trajet chaleureux à prix
            compétitif. Grâce à nos forfaits, bénéficiez d&apos;économies sur votre aller-retour.
          </p>
          <p className="text-base font-light leading-relaxed sm:text-lg">
            Nous accueillons nos clients en 5 langues (français, anglais, italien, espagnol,
            arabe) et avons des attentions particulières pour chacun d&apos;entre eux.
          </p>
          <p className="text-base font-light leading-relaxed sm:text-lg">
            Cette ambiance professionnelle et amicale nous assure une clientèle régulière,
            ravie de retrouver une certaine autonomie grâce à nos services.
          </p>
          <p className="text-base font-light leading-relaxed sm:text-lg">
            Personne âgée, en fauteuil roulant, ou valide: contactez-nous 7 jours sur 7 pour
            réserver votre trajet.
          </p>
        </div>
      </div>
    </section>
  );
}
