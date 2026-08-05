import Link from "next/link";
import { company } from "@/lib/company";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-blue px-4 py-12 text-white">
      <div className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <p className="mb-3 text-lg font-medium">Adresse</p>
          <p className="font-light leading-relaxed">
            {company.name}
            <br />
            {company.street}
            <br />
            {company.city}
          </p>
        </div>

        <div>
          <p className="mb-3 text-lg font-medium">Téléphones</p>
          <p className="font-light leading-relaxed">
            Bureau:{" "}
            <a href={company.phoneBureauHref} className="underline hover:text-white/90">
              {company.phoneBureauDisplay.replace(/ /g, "")}
            </a>
            <br />
            Réservation Chauffeur:{" "}
            <a href={company.phoneChauffeurHref} className="underline hover:text-white/90">
              {company.phoneChauffeurDisplay}
            </a>
          </p>
          <p className="mt-4 font-light">
            E-mail{" "}
            <a href={company.emailHref} className="underline hover:text-white/90">
              {company.email}
            </a>
          </p>
          <p className="mt-4 font-light">
            Administration interne
            <br />
            <a href={company.emailHref} className="underline hover:text-white/90">
              {company.email}
            </a>
          </p>
        </div>

        <div>
          <p className="mb-3 text-lg font-medium">Informations juridiques</p>
          <ul className="space-y-2 font-light">
            <li>
              <Link href="/mentions-legales" className="underline hover:text-white/90">
                Mentions légales
              </Link>
            </li>
            <li>
              <Link href="/protection-des-donnees" className="underline hover:text-white/90">
                Déclaration relative à la protection des données
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <p className="mx-auto mt-10 max-w-6xl border-t border-white/20 pt-6 text-center text-sm font-light text-white/80">
        © {year} {company.name}
      </p>
    </footer>
  );
}
