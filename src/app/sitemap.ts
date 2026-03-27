import type { MetadataRoute } from "next";
import { getAllSlugs } from "@/data/blog-posts";

const BASE_URL = "https://www.spaik.io";

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = ["nl", "en"];
  const slugs = getAllSlugs();

  const staticPages = ["", "/blog", "/legal"];

  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    const prefix = locale === "nl" ? "" : `/${locale}`;

    for (const page of staticPages) {
      entries.push({
        url: `${BASE_URL}${prefix}${page}`,
        lastModified: new Date(),
        changeFrequency: page === "" ? "weekly" : "monthly",
        priority: page === "" ? 1.0 : 0.8,
        alternates: {
          languages: {
            nl: `${BASE_URL}${page}`,
            en: `${BASE_URL}/en${page}`,
          },
        },
      });
    }

    for (const slug of slugs) {
      entries.push({
        url: `${BASE_URL}${prefix}/blog/${slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.7,
        alternates: {
          languages: {
            nl: `${BASE_URL}/blog/${slug}`,
            en: `${BASE_URL}/en/blog/${slug}`,
          },
        },
      });
    }
  }

  return entries;
}
