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
  title: siteConfig.title,
  description: siteConfig.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: company.name,
    locale: "fr_CH",
    type: "website",
    images: [
      {
        url: "/images/hero-transport-pmr.jpg",
        alt: "Véhicule Emmenez-moi à Genève, Jet d’Eau en arrière-plan",
      },
    ],
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: company.name,
  image: `${siteConfig.url}/logo-emmenez-moi.jpg`,
  url: siteConfig.url,
  telephone: company.officePhoneDisplay,
  email: company.email,
  foundingDate: String(company.foundedYear),
  address: {
    "@type": "PostalAddress",
    streetAddress: company.address.street,
    postalCode: company.address.postalCode,
    addressLocality: company.address.city,
    addressCountry: "CH",
  },
  areaServed: company.serviceAreas.map((area) => ({
    "@type": "AdministrativeArea",
    name: area,
  })),
  description: siteConfig.description,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className={`${manrope.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
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
