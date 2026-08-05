import type { Metadata } from "next";
import Link from "next/link";
import { company } from "@/lib/company";

export const metadata: Metadata = {
  title: `Protection des données — ${company.name}`,
  description: `Déclaration relative à la protection des données de ${company.name}.`,
  alternates: { canonical: "/protection-des-donnees" },
};

const UPDATED = "5 août 2026";

export default function ProtectionDesDonneesPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:py-16">
      <p className="mb-6">
        <Link href="/" className="text-base font-semibold text-brand-blue underline underline-offset-2">
          ← Retour à l’accueil
        </Link>
      </p>

      <h1 className="mb-2 text-3xl font-bold text-brand-blue sm:text-4xl">
        Déclaration relative à la protection des données
      </h1>
      <p className="mb-10 text-sm text-muted">Dernière mise à jour : {UPDATED}</p>

      <div className="space-y-8 text-base leading-relaxed text-foreground sm:text-lg">
        <section>
          <h2 className="mb-2 text-xl font-semibold text-brand-blue">Responsable du traitement</h2>
          <p>
            {company.name}
            <br />
            {company.address.street}
            <br />
            {company.address.postalCode} {company.address.city}
            <br />
            E-mail :{" "}
            <a href={company.emailHref} className="text-brand-blue underline">
              {company.email}
            </a>
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-semibold text-brand-blue">Données collectées</h2>
          <p>
            Via le formulaire de demande, nous pouvons collecter : prénom, nom, adresse e-mail,
            numéro de téléphone, date et heure souhaitées, adresses de départ et d’arrivée, type
            de trajet, besoin lié au fauteuil roulant, besoin d’accompagnement, ainsi que le
            contenu du message complémentaire.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-semibold text-brand-blue">Finalités du traitement</h2>
          <p>
            Les données sont utilisées pour traiter votre demande, vous recontacter, organiser
            une éventuelle prise en charge et assurer le suivi commercial lié aux services de
            transport de {company.name}.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-semibold text-brand-blue">Prestataires techniques</h2>
          <p>
            L’envoi des messages du formulaire est assuré via Resend. L’hébergement du site est
            assuré par Vercel. Ces prestataires traitent les données dans la limite nécessaire à
            la fourniture de leur service. Selon leur localisation ou leur infrastructure, des
            transferts internationaux de données peuvent intervenir dans le cadre de ces
            prestations techniques.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-semibold text-brand-blue">Base du traitement</h2>
          <p>
            Le traitement repose sur votre demande (prise de contact / demande de transport) et
            sur l’intérêt légitime de {company.name} à y répondre, dans le respect de la Loi
            fédérale sur la protection des données (LPD).
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-semibold text-brand-blue">Conservation</h2>
          <p>
            Les messages et données associées sont conservés uniquement le temps nécessaire au
            traitement de la demande, au suivi éventuel de la relation, et aux obligations
            légales ou comptables applicables.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-semibold text-brand-blue">Sécurité</h2>
          <p>
            Des mesures techniques et organisationnelles appropriées sont mises en œuvre pour
            protéger les données contre l’accès non autorisé, la perte ou l’altération, dans la
            mesure des moyens raisonnables disponibles.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-semibold text-brand-blue">Vos droits</h2>
          <p>
            Vous pouvez demander l’accès, la rectification ou la suppression de vos données
            personnelles, dans les limites prévues par la LPD, en nous contactant à{" "}
            <a href={company.emailHref} className="text-brand-blue underline">
              {company.email}
            </a>
            . Nous traiterons votre demande dans un délai raisonnable.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-semibold text-brand-blue">Cookies et stockage local</h2>
          <p>
            La version actuelle du site n’utilise pas d’outil d’analytique ni de cookies
            publicitaires. Un stockage local du navigateur peut être utilisé uniquement pour
            mémoriser que vous avez pris connaissance de la bannière d’information.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-semibold text-brand-blue">Modifications</h2>
          <p>
            Cette déclaration peut être mise à jour afin de refléter l’évolution du site ou des
            exigences légales. La version publiée sur cette page, avec sa date de mise à jour,
            fait foi.
          </p>
        </section>

        <p>
          Voir aussi les{" "}
          <Link href="/mentions-legales" className="text-brand-blue underline">
            mentions légales
          </Link>
          .
        </p>
      </div>
    </article>
  );
}
