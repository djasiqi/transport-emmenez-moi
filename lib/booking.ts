/** Ancre du formulaire « Demande de transport » */
export const formAnchor = "demande";

export type ServiceSlug =
  | "medicaux"
  | "fauteuil"
  | "prives"
  | "regulier"
  | "aller-retour"
  | "accompagnement";

export type FormPreset = {
  typeTrajet?: string;
  fauteuil?: "oui" | "non";
  accompagnement?: "oui" | "non";
  message?: string;
};

export const servicePresets: Record<ServiceSlug, FormPreset> = {
  medicaux: {
    message: "Demande : rendez-vous médicaux.",
  },
  fauteuil: {
    fauteuil: "oui",
    message: "Demande : transport en fauteuil roulant.",
  },
  prives: {
    message: "Demande : déplacements privés.",
  },
  regulier: {
    typeTrajet: "transport-regulier",
    message: "Demande : transports réguliers.",
  },
  "aller-retour": {
    typeTrajet: "aller-retour",
    message: "Demande : aller-retour avec attente pendant le rendez-vous.",
  },
  accompagnement: {
    accompagnement: "oui",
    message: "Demande : accompagnement personnalisé.",
  },
};

export function bookingHref(service?: ServiceSlug) {
  if (!service) return `/#${formAnchor}`;
  return `/?service=${service}#${formAnchor}`;
}

export function isServiceSlug(value: string | null): value is ServiceSlug {
  return !!value && value in servicePresets;
}
