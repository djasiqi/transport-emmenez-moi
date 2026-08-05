"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useSyncExternalStore } from "react";
import { bookingHref } from "@/lib/booking";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/#services", label: "Nos services" },
  { href: "/#engagements", label: "Nos engagements" },
  { href: "/#a-propos", label: "À propos" },
  { href: "/#coordination", label: "LIRIE" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#contact", label: "Contact" },
] as const;

function subscribe(onStoreChange: () => void) {
  window.addEventListener("scroll", onStoreChange, { passive: true });
  return () => window.removeEventListener("scroll", onStoreChange);
}

function getSnapshot() {
  return window.scrollY > 12;
}

function getServerSnapshot() {
  return false;
}

export default function Header() {
  const scrolled = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const [open, setOpen] = useState(false);

  return (
    <header
      className={`sticky top-0 z-40 transition-[background,box-shadow,border-color] duration-300 ${
        scrolled
          ? "border-b border-border/80 bg-white/90 shadow-[0_8px_30px_rgba(1,82,145,0.08)] backdrop-blur-md"
          : "border-b border-transparent bg-white/75 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3.5 sm:px-6">
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

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navigation principale">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-3.5 py-2 text-[0.95rem] font-medium text-foreground/80 transition hover:bg-brand-blue-tint hover:text-brand-blue"
            >
              {link.label}
            </Link>
          ))}
          <Link href={bookingHref()} className="btn-primary ml-3 px-5 py-2.5 text-[0.95rem]">
            Réserver
          </Link>
        </nav>

        <div className="flex items-center gap-2 lg:hidden">
          <Link href={bookingHref()} className="btn-primary px-4 py-2 text-sm">
            Réserver
          </Link>
          <button
            type="button"
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-brand-blue/30 text-sm font-semibold text-brand-blue"
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
          className="border-t border-border bg-white px-4 py-4 lg:hidden"
          aria-label="Navigation mobile"
        >
          <ul className="flex flex-col gap-1">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block rounded-lg px-3 py-2.5 text-base font-medium text-brand-blue hover:bg-brand-blue-tint"
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
