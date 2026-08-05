"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/#services", label: "Nos services" },
  { href: "/#a-propos", label: "À propos" },
  { href: "/#engagements", label: "Nos engagements" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#contact", label: "Contact" },
] as const;

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-surface/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="inline-flex shrink-0" aria-label="Emmenez-moi — Accueil">
          <Image
            src="/logo-emmenez-moi.jpg"
            alt="Emmenez-moi - transport mobilité réduite"
            width={200}
            height={46}
            className="h-10 w-auto sm:h-11"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-5 lg:flex" aria-label="Navigation principale">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-base font-medium text-foreground hover:text-brand-blue"
            >
              {link.label}
            </Link>
          ))}
          <Link href="/#reservation" className="btn-primary ml-2 px-4 py-2 text-base">
            Réserver
          </Link>
        </nav>

        <div className="flex items-center gap-2 lg:hidden">
          <Link href="/#reservation" className="btn-primary px-3 py-2 text-sm">
            Réserver
          </Link>
          <button
            type="button"
            className="inline-flex min-h-12 min-w-12 items-center justify-center rounded-lg border border-brand-blue text-sm font-semibold text-brand-blue"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            Menu
          </button>
        </div>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          className="border-t border-border bg-surface px-4 py-4 lg:hidden"
          aria-label="Navigation mobile"
        >
          <ul className="flex flex-col gap-3">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block py-1 text-base font-medium text-brand-blue"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
