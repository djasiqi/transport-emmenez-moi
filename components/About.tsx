import Image from "next/image";

export default function About() {
  return (
    <section id="a-propos" className="scroll-mt-24 bg-white px-4 py-14 sm:py-16">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
        <div className="space-y-5 text-left">
          <p className="text-2xl font-light sm:text-3xl">
            Les transports Emmenez-moi Sàrl, basés à Genève
          </p>
          <p className="text-base font-light leading-relaxed sm:text-lg">
            Créée fin 2019, Emmenez-moi Sàrl est une entreprise de transport de personnes à
            mobilité réduite. Avec une flotte de deux véhicules (un véhicule équipé pour le
            transport médical et un véhicule ordinaire), elle intervient dans les cantons de
            Genève et de Vaud.
          </p>
          <p className="text-base font-light leading-relaxed sm:text-lg">
            Que ce soit pour un trajet ponctuel, régulier, ou une escapade de plusieurs jours,
            nos chauffeurs expérimentés vous accompagnent dans la bonne humeur. Formés en tant
            qu&apos;aides-soignants, ils vous garantissent une sécurité absolue lors de vos
            déplacements.
          </p>
        </div>
        <div className="relative mx-auto aspect-[4/3] w-full max-w-xl overflow-hidden rounded-sm shadow-md">
          <Image
            src="/images/vehicule-emmenez-moi.jpg"
            alt="Emmenez-moi - véhicule équipé"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}
