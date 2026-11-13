import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/apps";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/downloads/"],
    },
    sitemap: `${getSiteUrl()}/sitemap.xml`,
  };
}
