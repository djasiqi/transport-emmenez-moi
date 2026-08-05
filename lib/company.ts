export const company = {
  name: "Emmenez-moi\u00A0Sàrl",
  address: {
    street: "Route de Chevrens 145",
    postalCode: "1247",
    city: "Anières",
    country: "Suisse",
  },
  officePhoneDisplay: "022 512 02 03",
  officePhoneHref: "tel:+41225120203",
  driverPhoneDisplay: "079 291 50 37",
  driverPhoneHref: "tel:+41792915037",
  email: "info@casa-famiglia.ch",
  emailHref: "mailto:info@casa-famiglia.ch",
  serviceAreas: ["Genève", "Vaud"] as const,
  foundedYear: 2019,
  lirieUrl: "https://www.lirie.ch",
} as const;

export const siteConfig = {
  title: "Transport PMR à Genève et Vaud | Emmenez-moi Sàrl",
  description:
    "Emmenez-moi Sàrl accompagne les personnes à mobilité réduite pour leurs rendez-vous médicaux et déplacements privés à Genève et dans le canton de Vaud.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://transport-emmenez-moi.ch",
} as const;
