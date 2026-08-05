"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-black/5 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="inline-flex shrink-0" aria-label="Emmenez-moi — Accueil">
          <Image
            src="/logo-emmenez-moi.jpg"
            alt="Emmenez-moi - transport mobilité réduite"
            width={220}
            height={50}
            className="h-10 w-auto sm:h-12"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Navigation principale">
          <Link href="/" className="text-sm font-medium text-brand-blue hover:underline">
            Accueil
          </Link>
          <Link
            href="/mentions-legales"
            className="text-sm font-medium text-brand-blue hover:underline"
          >
            Mentions légales
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded border border-brand-blue px-3 py-2 text-sm font-medium text-brand-blue md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          Menu
        </button>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          className="border-t border-black/5 bg-white px-4 py-3 md:hidden"
          aria-label="Navigation mobile"
        >
          <ul className="flex flex-col gap-3">
            <li>
              <Link
                href="/"
                className="block text-sm font-medium text-brand-blue"
                onClick={() => setOpen(false)}
              >
                Accueil
              </Link>
            </li>
            <li>
              <Link
                href="/mentions-legales"
                className="block text-sm font-medium text-brand-blue"
                onClick={() => setOpen(false)}
              >
                Mentions légales
              </Link>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
