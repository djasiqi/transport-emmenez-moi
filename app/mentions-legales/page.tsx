import type { Metadata } from "next";
import Link from "next/link";
import { company } from "@/lib/company";

export const metadata: Metadata = {
  title: `Mentions légales — ${company.name}`,
  description: `Mentions légales du site de ${company.name}.`,
  alternates: { canonical: "/mentions-legales" },
};

export default function MentionsLegalesPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:py-16">
      <h1 className="mb-6 text-3xl font-bold text-brand-blue">Mentions légales</h1>

      <p className="mb-8 rounded border border-amber-300 bg-amber-50 px-4 py-3 text-sm text-amber-950">
        Ce contenu est un modèle informatif à valider par l&apos;entreprise ou un conseil
        juridique avant publication définitive.
      </p>

      <div className="space-y-8 text-base font-light leading-relaxed">
        <section>
          <h2 className="mb-2 text-xl font-medium">Éditeur du site</h2>
          <p>
            {company.name}
            <br />
            {company.street}
            <br />
            {company.city}
            <br />
            Suisse
          </p>
          <p className="mt-3">
            Téléphone bureau :{" "}
            <a href={company.phoneBureauHref} className="underline text-brand-blue">
              {company.phoneBureauDisplay}
            </a>
            <br />
            Téléphone chauffeur :{" "}
            <a href={company.phoneChauffeurHref} className="underline text-brand-blue">
              {company.phoneChauffeurDisplay}
            </a>
            <br />
            E-mail :{" "}
            <a href={company.emailHref} className="underline text-brand-blue">
              {company.email}
            </a>
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-medium">Responsabilité éditoriale</h2>
          <p>
            La responsabilité éditoriale du site incombe à {company.name}. Pour toute question
            relative au contenu, vous pouvez nous contacter aux coordonnées ci-dessus.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-medium">Hébergement</h2>
          <p>
            Le site est hébergé par Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723,
            États-Unis.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-medium">Propriété intellectuelle</h2>
          <p>
            L&apos;ensemble des contenus présents sur ce site (textes, images, logos, éléments
            graphiques) est protégé par le droit de la propriété intellectuelle. Toute
            reproduction, représentation ou diffusion, totale ou partielle, sans autorisation
            préalable écrite de {company.name}, est interdite.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-medium">Limitation de responsabilité</h2>
          <p>
            {company.name} s&apos;efforce d&apos;assurer l&apos;exactitude des informations
            diffusées sur ce site. Toutefois, aucune garantie n&apos;est donnée quant à
            l&apos;exhaustivité ou à l&apos;actualité permanente des contenus. L&apos;utilisation
            des informations se fait sous la seule responsabilité de l&apos;utilisateur.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-medium">Liens externes</h2>
          <p>
            Le site peut contenir des liens vers des sites tiers. {company.name} n&apos;exerce
            aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu
            ou à leurs pratiques.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-medium">Droit applicable</h2>
          <p>
            Les présentes mentions légales sont régies par le droit suisse. En cas de litige,
            les tribunaux du canton de Genève sont compétents, sous réserve des dispositions
            impératives applicables.
          </p>
        </section>

        <p>
          Voir aussi la{" "}
          <Link href="/protection-des-donnees" className="underline text-brand-blue">
            déclaration relative à la protection des données
          </Link>
          .
        </p>
      </div>
    </article>
  );
}
