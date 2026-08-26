export type SidebarLink = { label: string; href: string };
export type SidebarCategory = { title: string; links: SidebarLink[] };

export const DOC_SIDEBAR_CATEGORIES: SidebarCategory[] = [
  {
    title: "ONBOARDING",
    links: [
      { label: "Buyer Onboarding Guide", href: "/documentation" },
      { label: "Quick Start Checklist", href: "/documentation/quick-start-checklist" },
    ],
  },
  {
    title: "HELP",
    links: [{ label: "Troubleshooting", href: "/documentation/troubleshooting" }],
  },
  {
    title: "TECHNICAL REFERENCE",
    links: [{ label: "License", href: "/documentation/license" }],
  },
];
