"use client";

import Link from "next/link";
import { useCallback, useSyncExternalStore } from "react";

const STORAGE_KEY = "emmenez-moi-cookie-notice";

function subscribe(onStoreChange: () => void) {
  window.addEventListener("storage", onStoreChange);
  return () => window.removeEventListener("storage", onStoreChange);
}

function getServerSnapshot() {
  return false;
}

export default function CookieBanner() {
  const getSnapshot = useCallback(() => {
    try {
      return !window.localStorage.getItem(STORAGE_KEY);
    } catch {
      return true;
    }
  }, []);

  const visible = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  function dismiss() {
    try {
      window.localStorage.setItem(STORAGE_KEY, "acknowledged");
    } catch {
      // ignore storage errors
    }
    window.dispatchEvent(new Event("storage"));
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Information sur les cookies"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-black/10 bg-white p-4 shadow-lg sm:p-5"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-relaxed text-black">
          Ce site utilise uniquement des éléments techniques nécessaires à son fonctionnement,
          ainsi que le stockage local du navigateur pour mémoriser votre choix concernant cette
          information. Aucun outil d&apos;analytique ni cookie publicitaire n&apos;est utilisé
          dans la version actuelle. Pour en savoir plus, consultez la{" "}
          <Link href="/protection-des-donnees" className="underline text-brand-blue">
            déclaration relative à la protection des données
          </Link>
          .
        </p>
        <button
          type="button"
          onClick={dismiss}
          className="shrink-0 rounded bg-brand-blue px-5 py-2.5 text-sm font-medium text-white hover:bg-brand-blue-mid"
        >
          J&apos;ai compris
        </button>
      </div>
    </div>
  );
}
