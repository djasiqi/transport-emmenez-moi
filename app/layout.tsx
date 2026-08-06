import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import CookieBanner from "@/components/CookieBanner";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MobileCallBar from "@/components/MobileCallBar";
import { company, siteConfig } from "@/lib/company";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: "%s | Emmenez-moi Sàrl",
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  applicationName: company.namePlain,
  authors: [{ name: company.namePlain }],
  creator: company.namePlain,
  publisher: company.namePlain,
  category: "transport",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48.png", sizes: "48x48", type: "image/png" },
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: ["/favicon-32.png"],
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: company.namePlain,
    locale: "fr_CH",
    type: "website",
    images: [
      {
        url: "/images/og-emmenez-moi.jpg",
        width: 1200,
        height: 630,
        alt: "Emmenez-moi Sàrl — transport accompagné PMR à Genève et Vaud",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.shortDescription,
    images: ["/images/og-emmenez-moi.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "MedicalBusiness"],
      "@id": `${siteConfig.url}/#business`,
      name: company.namePlain,
      legalName: company.namePlain,
      url: siteConfig.url,
      logo: `${siteConfig.url}/logo-emmenez-moi.jpg`,
      image: [
        `${siteConfig.url}/logo-emmenez-moi.jpg`,
        `${siteConfig.url}/images/og-emmenez-moi.jpg`,
        `${siteConfig.url}/images/hero-transport-pmr.jpg`,
        `${siteConfig.url}/images/vehicule-emmenez-moi.jpg`,
      ],
      telephone: company.officePhoneE164,
      email: company.email,
      foundingDate: String(company.foundedYear),
      priceRange: "CHF",
      address: {
        "@type": "PostalAddress",
        streetAddress: company.address.street,
        postalCode: company.address.postalCode,
        addressLocality: company.address.city,
        addressRegion: "GE",
        addressCountry: "CH",
      },
      areaServed: company.serviceAreas.map((area) => ({
        "@type": "AdministrativeArea",
        name: area,
      })),
      description: siteConfig.description,
      knowsAbout: [
        "Transport de personnes à mobilité réduite",
        "Transport en fauteuil roulant",
        "Transport couché",
        "Transport médical non urgent",
        "Coordination LIRIE",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Services de transport accompagné",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Transport PMR accompagné",
              description:
                "Transport accompagné pour personnes à mobilité réduite à Genève et dans le canton de Vaud.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Transport en fauteuil roulant",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Transport couché",
            },
          },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: company.namePlain,
      description: siteConfig.shortDescription,
      inLanguage: "fr-CH",
      publisher: { "@id": `${siteConfig.url}/#business` },
    },
    {
      "@type": "Organization",
      "@id": `${company.lirieUrl}/#organization`,
      name: company.lirieName,
      alternateName: "Lirie",
      url: company.lirieUrl,
      description:
        "Plateforme suisse de coordination des transports de santé et accompagnés, reliant établissements, patients et entreprises de transport.",
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Suisse romande",
      },
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr-CH" className={`${manrope.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieBanner />
        <MobileCallBar />
      </body>
    </html>
  );
}
