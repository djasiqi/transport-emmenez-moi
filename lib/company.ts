export const company = {
  name: "Emmenez-moi Sàrl",
  street: "Route de Chevrens 145",
  city: "1247 Anières",
  phoneBureauDisplay: "022 512 02 03",
  phoneBureauHref: "tel:+41225120203",
  phoneChauffeurDisplay: "079 291 50 37",
  phoneChauffeurHref: "tel:+41792915037",
  email: "info@casa-famiglia.ch",
  emailHref: "mailto:info@casa-famiglia.ch",
} as const;

export const siteConfig = {
  title: "Transport de personnes à mobilité réduite - Emmenez-moi Sàrl",
  description:
    "Des chauffeurs formés dans le médical vous conduisent dans vos déplacements dans les cantons de Genève et de Vaud. 7 j/7, soirs et week-end.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://transport-emmenez-moi.ch",
} as const;
