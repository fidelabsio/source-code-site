import type { MetadataRoute } from "next";

const SITE_URL = "https://fidecode.com";

const routes: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/about", priority: 0.7, changeFrequency: "monthly" },
  { path: "/founders", priority: 0.7, changeFrequency: "monthly" },
  { path: "/white-label-showcase", priority: 0.8, changeFrequency: "monthly" },
  { path: "/documentation", priority: 0.8, changeFrequency: "weekly" },
  { path: "/documentation/license", priority: 0.6, changeFrequency: "monthly" },
  { path: "/documentation/quick-start-checklist", priority: 0.6, changeFrequency: "monthly" },
  { path: "/documentation/troubleshooting", priority: 0.6, changeFrequency: "monthly" },
  { path: "/faq", priority: 0.7, changeFrequency: "monthly" },
  { path: "/support", priority: 0.6, changeFrequency: "monthly" },
  { path: "/security", priority: 0.6, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.5, changeFrequency: "yearly" },
  { path: "/terms", priority: 0.3, changeFrequency: "yearly" },
  { path: "/privacy", priority: 0.3, changeFrequency: "yearly" },
  { path: "/license", priority: 0.4, changeFrequency: "yearly" },
  { path: "/license/agreement", priority: 0.3, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${SITE_URL}${path}`,
    changeFrequency,
    priority,
  }));
}
