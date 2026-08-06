export const company = {
  name: "Emmenez-moi\u00A0Sàrl",
  namePlain: "Emmenez-moi Sàrl",
  address: {
    street: "Route de Chevrens 145",
    postalCode: "1247",
    city: "Anières",
    country: "Suisse",
  },
  officePhoneDisplay: "022 512 02 03",
  officePhoneHref: "tel:+41225120203",
  officePhoneE164: "+41225120203",
  driverPhoneDisplay: "079 291 50 37",
  driverPhoneHref: "tel:+41792915037",
  email: "info@casa-famiglia.ch",
  emailHref: "mailto:info@casa-famiglia.ch",
  serviceAreas: ["Genève", "Vaud"] as const,
  foundedYear: 2019,
  lirieUrl: "https://www.lirie.ch",
  lirieName: "LIRIE",
} as const;

export const siteConfig = {
  title: "Transport PMR Genève & Vaud | Emmenez-moi Sàrl",
  description:
    "Emmenez-moi Sàrl : transport accompagné pour personnes à mobilité réduite à Genève et dans le canton de Vaud. Chauffeurs formés aux soins, véhicules adaptés, 7 j/7. Coordination institutionnelle possible avec LIRIE.",
  shortDescription:
    "Transport accompagné PMR à Genève et Vaud — chauffeurs formés aux soins, véhicules adaptés, 7 jours sur 7.",
  keywords: [
    "transport PMR Genève",
    "transport mobilité réduite Vaud",
    "Emmenez-moi",
    "transport fauteuil roulant Genève",
    "transport médical non urgent",
    "transport couché Genève",
    "LIRIE coordination transport",
    "transport accompagné Anières",
  ],
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://transport-emmenez-moi.ch",
} as const;
