import fs from "fs";
import path from "path";

const CONTENT_DIR = path.join(process.cwd(), "content", "documentation");

export interface DocumentationGuide {
  slug: string;
  title: string;
  file: string;
}

// Order matches the "In ZIP File" Notion hub page's listing. "Feature
// Documentation" combines its 7 Notion sub-pages (Hide Price, Request Quote,
// Quote Cart, Quote Form Builder, Dashboard Overview, Email Notifications,
// Theme Extension) into one guide, following the hub page's own grouping.
export const DOCUMENTATION_GUIDES: DocumentationGuide[] = [
  { slug: "installation-guide", title: "Installation Guide", file: "01-installation-guide.txt" },
  { slug: "shopify-partner-setup-guide", title: "Shopify Partner Setup Guide", file: "02-shopify-partner-setup-guide.txt" },
  { slug: "deployment-guide", title: "Deployment Guide", file: "03-deployment-guide.txt" },
  { slug: "database-setup-guide", title: "Database Setup Guide (Prisma Postgres)", file: "04-database-setup-guide.txt" },
  { slug: "api-reference", title: "API Reference", file: "05-api-reference.txt" },
  { slug: "developer-customization-guide", title: "Developer Customization Guide", file: "06-developer-customization-guide.txt" },
  { slug: "webhook-documentation", title: "Webhook Documentation", file: "07-webhook-documentation.txt" },
  { slug: "brand-configuration-guide", title: "Brand Configuration Guide", file: "08-brand-configuration-guide.txt" },
  { slug: "architecture-guide", title: "Architecture Guide", file: "09-architecture-guide.txt" },
  { slug: "environment-variables-guide", title: "Environment Variables Guide", file: "10-environment-variables-guide.txt" },
  { slug: "folder-structure-guide", title: "Folder Structure Guide", file: "11-folder-structure-guide.txt" },
  { slug: "configuration-guide", title: "Configuration Guide", file: "12-configuration-guide.txt" },
  { slug: "documentation-navigation-flow", title: "Documentation Navigation Flow", file: "13-documentation-navigation-flow.txt" },
  { slug: "feature-documentation", title: "Feature Documentation", file: "14-feature-documentation.txt" },
  { slug: "release-notes", title: "Release Notes", file: "15-release-notes.txt" },
  { slug: "upgrade-guide", title: "Upgrade Guide", file: "16-upgrade-guide.txt" },
];

export function readGuideBody(guide: DocumentationGuide): string {
  return fs.readFileSync(path.join(CONTENT_DIR, guide.file), "utf8");
}
