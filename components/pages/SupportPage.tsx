import GradientHeading from "@/components/ui/GradientHeading";
import TopicCard from "./support/TopicCard";
import ResourceCard from "./support/ResourceCard";

const TOPICS = [
  {
    title: "Getting started",
    description: "Clone the repository, configure environment variables, and run against a development store.",
    href: "/documentation?doc=buyer-onboarding",
    icon: (
      <>
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09Z" />
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2Z" />
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
      </>
    ),
  },
  {
    title: "Installation",
    description: "Install dependencies, run migrations, and connect the app to your Shopify Partner account.",
    href: "/documentation?doc=installation",
    icon: (
      <>
        <path d="M12 13v8" />
        <path d="m8 17 4 4 4-4" />
        <path d="M4.4 15a7 7 0 1 1 12.2-6h1.4a4.5 4.5 0 0 1 2.1 8.5" />
      </>
    ),
  },
  {
    title: "White label branding",
    description: "Rebrand colours, logo, app name, and email templates through the configuration layer.",
    href: "/documentation?doc=white-label-overview",
    icon: (
      <>
        <path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8Z" />
        <path d="M8 9h.01" />
        <path d="M12 7h.01" />
        <path d="M16 9h.01" />
      </>
    ),
  },
  {
    title: "Quote builder",
    description: "How quote requests are created, priced, negotiated, and converted to draft orders.",
    href: "/documentation?doc=configuration",
    icon: (
      <>
        <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
        <path d="M15 2v5h5" />
        <path d="M9 13h6" />
        <path d="M9 17h4" />
      </>
    ),
  },
  {
    title: "Dashboard",
    description: "Merchant dashboard structure, widgets, permissions, and navigation customisation.",
    href: "/documentation?doc=route-architecture",
    icon: (
      <>
        <path d="M8 21a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
        <path d="M19 21a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
        <path d="M2 3h2l2.6 12.4a2 2 0 0 0 2 1.6h8.8a2 2 0 0 0 2-1.6L21 7H5.1" />
      </>
    ),
  },
  {
    title: "Email notifications",
    description: "Transactional templates, sender configuration, and delivery providers.",
    href: "/documentation?doc=configuration",
    icon: (
      <>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z" />
      </>
    ),
  },
  {
    title: "Theme extension",
    description: "Install the storefront block, hide prices, and place the request-a-quote button.",
    href: "/documentation?doc=theme-tokens",
    icon: (
      <>
        <path d="m18 16 4-4-4-4" />
        <path d="m6 8-4 4 4 4" />
        <path d="m14.5 4-5 16" />
      </>
    ),
  },
  {
    title: "Deployment",
    description: "Ship to Vercel, Fly.io, or Docker using the included deployment pipeline.",
    href: "/documentation?doc=deployment",
    icon: (
      <>
        <path d="M3 12a9 9 0 0 1 15-6.7L21 8" />
        <path d="M21 3v5h-5" />
        <path d="M21 12a9 9 0 0 1-15 6.7L3 16" />
        <path d="M3 21v-5h5" />
      </>
    ),
  },
  {
    title: "Troubleshooting",
    description: "Common setup errors, webhook failures, and how to read the application logs.",
    href: "/documentation?doc=troubleshooting",
    icon: (
      <>
        <path d="M8 2v3" />
        <path d="M16 2v3" />
        <path d="M8 6h8a4 4 0 0 1 4 4v4a8 8 0 0 1-16 0v-4a4 4 0 0 1 4-4Z" />
        <path d="M2 12h3" />
        <path d="M19 12h3" />
        <path d="m4 19 3-2" />
        <path d="m20 19-3-2" />
      </>
    ),
  },
  {
    title: "FAQ",
    description: "Licensing, updates, client brands, and what is included in the purchase.",
    href: "/faq",
    icon: (
      <>
        <path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z" />
        <path d="M9.1 9a3 3 0 0 1 5.8 1c0 2-3 3-3 3" />
        <path d="M12 17h.01" />
      </>
    ),
  },
];

const RESOURCES = [
  {
    title: "Documentation",
    description: "108 pages across core, white label, and technical guides.",
    href: "/documentation",
    icon: (
      <>
        <path d="M12 7v14" />
        <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3Z" />
      </>
    ),
  },
  {
    title: "Video tutorials",
    description: "Recorded walkthroughs for setup, branding, and deployment.",
    href: "/documentation?doc=video-tutorials",
    icon: (
      <>
        <path d="M20 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2Z" />
        <path d="M8 21h8" />
        <path d="M12 17v4" />
        <path d="m10 8 5 3-5 3Z" />
      </>
    ),
  },
  {
    title: "Email support",
    description: "Direct access to the engineers who wrote the code, with a 24-hour SLA.",
    href: "/contact#contact-form",
    icon: (
      <>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z" />
      </>
    ),
  },
  {
    title: "Configuration guide",
    description: "Every key in colors.json, settings.ts, and the theme variables, explained.",
    href: "/documentation?doc=configuration",
    icon: (
      <>
        <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6h.09A1.65 1.65 0 0 0 10 3.09V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9v.09a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z" />
      </>
    ),
  },
  {
    title: "Deployment guide",
    description: "Environment setup, database provisioning, and production checklists.",
    href: "/documentation?doc=deployment",
    icon: (
      <>
        <path d="M12 13v8" />
        <path d="m8 17 4 4 4-4" />
        <path d="M4.4 15a7 7 0 1 1 12.2-6h1.4a4.5 4.5 0 0 1 2.1 8.5" />
      </>
    ),
  },
  {
    title: "FAQ",
    description: "Short answers to the licensing and capability questions we get most.",
    href: "/faq",
    icon: (
      <>
        <path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z" />
        <path d="M9.1 9a3 3 0 0 1 5.8 1c0 2-3 3-3 3" />
        <path d="M12 17h.01" />
      </>
    ),
  },
];

export default function SupportPage() {
  return (
    <>
      <section style={{ background: "rgb(247, 252, 252)", padding: "64px 32px 48px", borderBottom: "1px solid rgb(238, 242, 242)" }}>
        <div style={{ maxWidth: "820px", margin: "0px auto", textAlign: "center" }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "6px 14px", borderRadius: "999px", background: "rgb(224, 250, 248)", color: "rgb(13, 148, 136)", fontSize: "11px", fontWeight: "600", letterSpacing: "0.8px", marginBottom: "20px" }}>
            <span style={{ width: "7px", height: "7px", flex: "0 0 auto", borderRadius: "999px", background: "rgb(20, 184, 166)", boxShadow: "rgba(20, 184, 166, 0.13) 0px 0px 0px 3px, rgba(20, 184, 166, 0.73) 0px 0px 9px", animation: "2.4s ease-in-out 0s infinite normal none running fl-dot" }} />
            SUPPORT
          </span>
          <h1 style={{ fontFamily: "\"Bricolage Grotesque\", sans-serif", fontWeight: "800", fontSize: "44px", lineHeight: "1.1", letterSpacing: "-1.6px", margin: "0px auto 14px", color: "rgb(13, 21, 38)", maxWidth: "760px", textWrap: "pretty" }}>
            {"How can we "}
            <span style={{ backgroundImage: "linear-gradient(135deg, rgb(47, 84, 235) 0%, rgb(3, 162, 145) 25%, rgb(47, 84, 235) 50%, rgb(3, 162, 145) 75%, rgb(47, 84, 235) 100%)", backgroundSize: "200% 100%", backgroundClip: "text", WebkitTextFillColor: "transparent", color: "transparent", animation: "6s linear 0s infinite normal none running fl-grad" }}>
              help?
            </span>
          </h1>
          <p style={{ fontSize: "16px", lineHeight: "1.65", color: "rgb(107, 114, 128)", margin: "0px auto", maxWidth: "620px" }}>
            Browse the most common topics, or reach a developer directly.
          </p>
        </div>
      </section>
      <section style={{ background: "rgb(255, 255, 255)", padding: "64px 32px" }}>
        <div style={{ maxWidth: "1160px", margin: "0px auto" }}>
          <div style={{ textAlign: "center", marginBottom: "36px" }}>
            <GradientHeading size={30} lead="Popular " highlight="Topics" style={{ letterSpacing: "-1.1px" }} />
            <p style={{ fontSize: "15px", lineHeight: "1.65", color: "rgb(107, 114, 128)", margin: "0px auto", maxWidth: "620px" }}>
              The guides licence holders open most often.
            </p>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px" }}>
            {TOPICS.map((topic) => (
              <TopicCard
                key={topic.title}
                href={topic.href}
                title={topic.title}
                description={topic.description}
                icon={
                  <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    {topic.icon}
                  </svg>
                }
              />
            ))}
          </div>
        </div>
      </section>
      <section style={{ background: "rgb(249, 250, 251)", padding: "64px 32px" }}>
        <div style={{ maxWidth: "1160px", margin: "0px auto" }}>
          <div style={{ textAlign: "center", marginBottom: "36px" }}>
            <GradientHeading size={30} lead="Support " highlight="Resources" style={{ letterSpacing: "-1.1px" }} />
            <p style={{ fontSize: "15px", lineHeight: "1.65", color: "rgb(107, 114, 128)", margin: "0px auto", maxWidth: "620px" }}>
              Everything that ships alongside the codebase.
            </p>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px" }}>
            {RESOURCES.map((resource) => (
              <ResourceCard
                key={resource.title}
                href={resource.href}
                title={resource.title}
                description={resource.description}
                icon={
                  <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    {resource.icon}
                  </svg>
                }
              />
            ))}
          </div>
        </div>
      </section>
      <section style={{ background: "linear-gradient(120deg, rgb(3, 162, 145), rgb(47, 84, 235))", padding: "0px 32px" }}>
        <div style={{ maxWidth: "1160px", margin: "0px auto", padding: "56px 0px", textAlign: "center" }}>
          <h2 style={{ fontFamily: "\"Bricolage Grotesque\", sans-serif", fontWeight: "800", fontSize: "34px", letterSpacing: "-1.2px", margin: "0px 0px 12px", color: "rgb(255, 255, 255)" }}>
            Still need help?
          </h2>
          <p style={{ fontSize: "15px", color: "rgba(255, 255, 255, 0.82)", margin: "0px 0px 28px" }}>
            A developer will read your message and reply within one business day.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="/contact" className="fl-sup-scp8 fl-sup-scp4" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", padding: "16px 32px", borderRadius: "999px", background: "rgb(255, 255, 255)", color: "rgb(13, 21, 38)", fontSize: "16px", fontWeight: "600", transition: "transform 0.18s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.18s" }}>
              {"Contact Support "}
              <span>
                →
              </span>
            </a>
            <a href="/documentation" className="fl-sup-scp9 fl-sup-scp4" style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "15px 28px", borderRadius: "999px", background: "transparent", border: "1px solid rgba(255, 255, 255, 0.5)", color: "rgb(255, 255, 255)", fontSize: "14.5px", fontWeight: "600", transition: "0.18s" }}>
              Browse Documentation
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
