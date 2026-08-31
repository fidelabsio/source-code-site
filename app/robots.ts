import type { MetadataRoute } from "next";

const SITE_URL = "https://fidecode.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/checkout", "/thank-you", "/offline", "/error-page"],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
