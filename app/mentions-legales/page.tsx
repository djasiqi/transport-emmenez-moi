import type { Metadata } from "next";
import Link from "next/link";
import { company } from "@/lib/company";

export const metadata: Metadata = {
  title: `Mentions légales — ${company.name}`,
  description: `Mentions légales du site de ${company.name}.`,
  alternates: { canonical: "/mentions-legales" },
};

const UPDATED = "5 août 2026";

export default function MentionsLegalesPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:py-16">
      <p className="mb-6">
        <Link href="/" className="text-base font-semibold text-brand-blue underline underline-offset-2">
          ← Retour à l’accueil
        </Link>
      </p>

      <h1 className="mb-2 text-3xl font-bold text-brand-blue sm:text-4xl">Mentions légales</h1>
      <p className="mb-10 text-sm text-muted">Dernière mise à jour : {UPDATED}</p>

      <div className="space-y-8 text-base leading-relaxed text-foreground sm:text-lg">
        <section>
          <h2 className="mb-2 text-xl font-semibold text-brand-blue">Éditeur du site</h2>
          <p>
            {company.name}
            <br />
            {company.address.street}
            <br />
            {company.address.postalCode} {company.address.city}
            <br />
            {company.address.country}
          </p>
          <p className="mt-3">
            Téléphone bureau :{" "}
            <a href={company.officePhoneHref} className="text-brand-blue underline">
              {company.officePhoneDisplay}
            </a>
            <br />
            Téléphone chauffeur :{" "}
            <a href={company.driverPhoneHref} className="text-brand-blue underline">
              {company.driverPhoneDisplay}
            </a>
            <br />
            E-mail :{" "}
            <a href={company.emailHref} className="text-brand-blue underline">
              {company.email}
            </a>
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-semibold text-brand-blue">Responsabilité éditoriale</h2>
          <p>
            La responsabilité éditoriale du site incombe à {company.name}. Pour toute question
            relative au contenu, vous pouvez nous contacter aux coordonnées ci-dessus.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-semibold text-brand-blue">Hébergement</h2>
          <p>
            Le site est hébergé par Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723,
            États-Unis.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-semibold text-brand-blue">Propriété intellectuelle</h2>
          <p>
            L’ensemble des contenus présents sur ce site (textes, images, logos, éléments
            graphiques) est protégé par le droit de la propriété intellectuelle. Toute
            reproduction, représentation ou diffusion, totale ou partielle, sans autorisation
            préalable écrite de {company.name}, est interdite.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-semibold text-brand-blue">Disponibilité du site</h2>
          <p>
            {company.name} s’efforce d’assurer l’accès au site. Des interruptions liées à la
            maintenance, à des incidents techniques ou à des causes indépendantes de notre
            volonté peuvent toutefois survenir.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-semibold text-brand-blue">Limitation de responsabilité</h2>
          <p>
            {company.name} s’efforce d’assurer l’exactitude des informations diffusées. Aucune
            garantie n’est donnée quant à l’exhaustivité ou à l’actualité permanente des
            contenus. L’utilisation des informations se fait sous la seule responsabilité de
            l’utilisateur. L’envoi d’une demande via le formulaire ne constitue pas une
            confirmation automatique de transport.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-semibold text-brand-blue">Liens externes</h2>
          <p>
            Le site peut contenir des liens vers des sites tiers, notamment des plateformes ou
            partenaires. {company.name} n’exerce aucun contrôle sur ces sites et décline toute
            responsabilité quant à leur contenu ou à leurs pratiques.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-semibold text-brand-blue">Droit applicable</h2>
          <p>
            Les présentes mentions légales sont régies par le droit suisse. En cas de litige, et
            sous réserve des dispositions impératives applicables, les tribunaux compétents du
            canton de Genève pourront être saisis.
          </p>
        </section>

        <p>
          Voir aussi la{" "}
          <Link href="/protection-des-donnees" className="text-brand-blue underline">
            déclaration relative à la protection des données
          </Link>
          .
        </p>
      </div>
    </article>
  );
}
