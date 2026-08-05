import Image from "next/image";
import Link from "next/link";
import { company } from "@/lib/company";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-[linear-gradient(165deg,var(--brand-blue-deep)_0%,var(--brand-blue)_55%,#0a6aad_100%)] text-white">
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 85% 10%, rgba(124,172,196,0.45), transparent 35%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-3">
        <div className="space-y-4">
          <Image
            src="/logo-emmenez-moi.jpg"
            alt=""
            width={180}
            height={40}
            className="h-10 w-auto rounded-md bg-white p-1.5"
          />
          <p className="text-base leading-relaxed text-white/90">
            Transport accompagné pour les personnes à mobilité réduite à Genève et dans le
            canton de Vaud.
          </p>
          <p className="text-base text-white/85">
            {company.name}
            <br />
            {company.address.street}
            <br />
            {company.address.postalCode} {company.address.city}
          </p>
        </div>

        <div>
          <p className="mb-4 text-lg font-semibold">Contact</p>
          <ul className="space-y-3 text-base text-white/90">
            <li>
              Bureau :{" "}
              <a href={company.officePhoneHref} className="underline underline-offset-2">
                {company.officePhoneDisplay}
              </a>
            </li>
            <li>
              Réservation chauffeur :{" "}
              <a href={company.driverPhoneHref} className="underline underline-offset-2">
                {company.driverPhoneDisplay}
              </a>
            </li>
            <li>
              Email :{" "}
              <a href={company.emailHref} className="underline underline-offset-2">
                {company.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="mb-4 text-lg font-semibold">Informations</p>
          <ul className="space-y-3 text-base text-white/90">
            <li>
              <Link href="/mentions-legales" className="underline underline-offset-2">
                Mentions légales
              </Link>
            </li>
            <li>
              <Link href="/protection-des-donnees" className="underline underline-offset-2">
                Protection des données
              </Link>
            </li>
            <li className="space-y-3">
              <a
                href={company.lirieUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2"
              >
                Coordination institutionnelle avec LIRIE
              </a>
              <a
                href={company.lirieUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-lg bg-white px-3 py-2 shadow-sm transition hover:bg-brand-blue-tint"
                aria-label="Découvrir LIRIE"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/logo-lirie.png"
                  alt="Logo LIRIE"
                  width={148}
                  height={64}
                  className="h-12 w-auto"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <p className="relative border-t border-white/15 py-5 text-center text-sm text-white/75">
        © {year} {company.name}. Tous droits réservés.
      </p>
    </footer>
  );
}
