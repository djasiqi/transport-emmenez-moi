import type { Metadata } from "next";
import Link from "next/link";
import { company } from "@/lib/company";

export const metadata: Metadata = {
  title: `Protection des données — ${company.name}`,
  description: `Déclaration relative à la protection des données de ${company.name}.`,
  alternates: { canonical: "/protection-des-donnees" },
};

export default function ProtectionDesDonneesPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:py-16">
      <h1 className="mb-6 text-3xl font-bold text-brand-blue">
        Déclaration relative à la protection des données
      </h1>

      <p className="mb-8 rounded border border-amber-300 bg-amber-50 px-4 py-3 text-sm text-amber-950">
        Ce contenu est un modèle informatif à valider par l&apos;entreprise ou un conseil
        juridique avant publication définitive.
      </p>

      <div className="space-y-8 text-base font-light leading-relaxed">
        <section>
          <h2 className="mb-2 text-xl font-medium">Responsable du traitement</h2>
          <p>
            {company.name}
            <br />
            {company.street}
            <br />
            {company.city}
            <br />
            E-mail :{" "}
            <a href={company.emailHref} className="underline text-brand-blue">
              {company.email}
            </a>
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-medium">Données collectées</h2>
          <p>
            Via le formulaire de contact, nous pouvons collecter : prénom, nom, adresse e-mail,
            numéro de téléphone et contenu du message.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-medium">Finalités du traitement</h2>
          <p>
            Les données sont utilisées uniquement pour répondre à votre demande, organiser une
            réservation ou un échange commercial lié aux services de transport de {company.name}.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-medium">Transmission à des prestataires</h2>
          <p>
            L&apos;envoi des messages du formulaire est assuré via le prestataire technique
            Resend. L&apos;hébergement du site est assuré par Vercel. Ces prestataires traitent
            les données dans la limite nécessaire à la fourniture de leur service.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-medium">Base et justification du traitement</h2>
          <p>
            Le traitement repose sur votre demande (prise de contact) et sur l&apos;intérêt
            légitime de {company.name} à répondre aux sollicitations liées à son activité, dans
            le respect de la Loi fédérale sur la protection des données (LPD).
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-medium">Conservation</h2>
          <p>
            Les messages et données associées sont conservés uniquement le temps nécessaire au
            traitement de la demande et aux éventuelles obligations légales ou comptables
            applicables.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-medium">Sécurité</h2>
          <p>
            Des mesures techniques et organisationnelles appropriées sont mises en œuvre pour
            protéger les données contre l&apos;accès non autorisé, la perte ou l&apos;altération,
            dans la mesure des moyens raisonnables disponibles.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-medium">Droits des personnes</h2>
          <p>
            Vous pouvez demander l&apos;accès, la rectification ou la suppression de vos données
            personnelles, dans les limites prévues par la LPD, en nous contactant à{" "}
            <a href={company.emailHref} className="underline text-brand-blue">
              {company.email}
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-medium">Cookies et stockage local</h2>
          <p>
            La version actuelle du site n&apos;utilise pas d&apos;outil d&apos;analytique ni de
            cookies publicitaires. Un stockage local du navigateur peut être utilisé uniquement
            pour mémoriser que vous avez pris connaissance de la bannière d&apos;information.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-medium">Modifications</h2>
          <p>
            Cette déclaration peut être mise à jour afin de refléter l&apos;évolution du site ou
            des exigences légales. La version publiée sur cette page fait foi.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-medium">Contact</h2>
          <p>
            Pour toute question relative à la protection des données :{" "}
            <a href={company.emailHref} className="underline text-brand-blue">
              {company.email}
            </a>
            .
          </p>
        </section>

        <p>
          Voir aussi les{" "}
          <Link href="/mentions-legales" className="underline text-brand-blue">
            mentions légales
          </Link>
          .
        </p>
      </div>
    </article>
  );
}
