import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/apps";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: getSiteUrl(),
      lastModified: new Date("2026-11-14T00:00:00.000Z"),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
