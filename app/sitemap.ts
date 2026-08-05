import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/company";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  return [
    { url: `${base}/`, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    {
      url: `${base}/mentions-legales`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${base}/protection-des-donnees`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
