import GradientHeading from "@/components/ui/GradientHeading";
import IncludedCard from "./IncludedCard";

const CARDS = [
  {
    label: "SOURCE CODE",
    title: "Source Code",
    items: ["Production-ready source code", "Shopify OAuth & APIs", "React + TypeScript", "PostgreSQL & Prisma"],
    icon: (
      <>
        <path d="m18 16 4-4-4-4" />
        <path d="m6 8-4 4 4 4" />
        <path d="m14.5 4-5 16" />
      </>
    ),
  },
  {
    label: "DOCUMENTATION",
    title: "Documentation",
    items: ["Installation Guide", "Architecture Guide", "API Reference", "README & Troubleshooting"],
    icon: (
      <>
        <path d="M12 7v14" />
        <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3Z" />
      </>
    ),
  },
  {
    label: "VIDEO TUTORIALS",
    title: "Video Tutorials",
    items: ["Installation walkthrough", "Branding & customization", "Deployment guide", "Feature overview"],
    icon: (
      <>
        <path d="M2 4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2Z" />
        <path d="M8 21h8" />
        <path d="M12 17v4" />
        <path d="m10 7 5 3-5 3Z" />
      </>
    ),
  },
  {
    label: "LICENSE",
    title: "License",
    items: ["Commercial License", "Usage rights", "Restrictions", "Renewal policy"],
    icon: (
      <>
        <path d="M11.6 2.4a1 1 0 0 1 .8 0l2 .9a1 1 0 0 0 .6.1l2.2-.3a1 1 0 0 1 1 .5l1.1 1.9a1 1 0 0 0 .4.4l1.9 1.1a1 1 0 0 1 .5 1l-.3 2.2a1 1 0 0 0 .1.6l.9 2a1 1 0 0 1 0 .8l-.9 2a1 1 0 0 0-.1.6l.3 2.2a1 1 0 0 1-.5 1l-1.9 1.1a1 1 0 0 0-.4.4l-1.1 1.9a1 1 0 0 1-1 .5l-2.2-.3a1 1 0 0 0-.6.1l-2 .9a1 1 0 0 1-.8 0l-2-.9a1 1 0 0 0-.6-.1l-2.2.3a1 1 0 0 1-1-.5l-1.1-1.9a1 1 0 0 0-.4-.4l-1.9-1.1a1 1 0 0 1-.5-1l.3-2.2a1 1 0 0 0-.1-.6l-.9-2a1 1 0 0 1 0-.8l.9-2a1 1 0 0 0 .1-.6l-.3-2.2a1 1 0 0 1 .5-1l1.9-1.1a1 1 0 0 0 .4-.4l1.1-1.9a1 1 0 0 1 1-.5l2.2.3a1 1 0 0 0 .6-.1Z" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),
  },
  {
    label: "ENVIRONMENT",
    title: "Environment File",
    items: [".env.example", "Configuration guide", "Required variables", "Setup instructions"],
    icon: (
      <>
        <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
        <path d="M15 2v5h5" />
        <path d="m9 15 1.5-1.5L9 12" />
        <path d="M12.5 16h2" />
      </>
    ),
  },
  {
    label: "UPDATES",
    title: "Release Notes & Updates",
    items: ["Release Notes", "Version history", "Bug fixes", "Upgrade guide"],
    icon: (
      <>
        <path d="M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z" />
        <path d="M3 12h5" />
        <path d="M16 12h5" />
      </>
    ),
  },
];

export default function PackageIncludedSection() {
  return (
    <section style={{ background: "rgb(240, 250, 248)", padding: "96px 32px 64px" }}>
      <div style={{ maxWidth: "1160px", margin: "0px auto" }}>
        <div id="fl-package-reveal" style={{ textAlign: "center", marginBottom: "48px" }}>
          <div style={{ position: "relative", width: "104px", height: "78px", margin: "0px auto 26px", perspective: "520px", animation: "5s ease-in-out 0s infinite normal none running fl-bob" }}>
            <div style={{ position: "absolute", left: "50%", top: "44px", width: "120px", height: "120px", margin: "-60px 0px 0px -60px", borderRadius: "999px", border: "1px solid rgb(20, 184, 166)", animation: "3.2s ease-out 0s infinite normal none running fl-ring" }} />
            <div style={{ position: "absolute", left: "50%", top: "44px", width: "120px", height: "120px", margin: "-60px 0px 0px -60px", borderRadius: "999px", border: "1px solid rgb(47, 84, 235)", animation: "3.2s ease-out 1.6s infinite normal none running fl-ring" }} />
            <div style={{ position: "absolute", left: "8px", right: "8px", bottom: "0px", height: "52px", borderRadius: "0px 0px 10px 10px", background: "linear-gradient(160deg, rgb(13, 148, 136), rgb(6, 71, 64))", boxShadow: "rgba(6, 71, 64, 0.5) 0px 14px 26px -12px" }} />
            <div style={{ position: "absolute", left: "8px", right: "8px", bottom: "0px", height: "52px", borderRadius: "0px 0px 10px 10px", background: "linear-gradient(90deg, transparent 44%, rgba(255, 255, 255, 0.22) 44%, rgba(255, 255, 255, 0.22) 56%, transparent 56%)" }} />
            <div style={{ position: "absolute", left: "0px", right: "0px", top: "18px", height: "20px", borderRadius: "6px", background: "linear-gradient(160deg, rgb(20, 184, 166), rgb(13, 148, 136))", transformOrigin: "center bottom", boxShadow: "rgba(6, 71, 64, 0.45) 0px 6px 14px -6px", animation: "1s cubic-bezier(0.34, 1.4, 0.64, 1) 0.3s 1 normal both running fl-lid" }} />
            <div style={{ position: "absolute", left: "22px", right: "22px", top: "6px", height: "3px", borderRadius: "999px", background: "linear-gradient(90deg, transparent, rgb(206, 255, 251), transparent)", transformOrigin: "center center", animation: "0.7s ease 0.9s 1 normal both running fl-boxglow" }} />
          </div>
          <span style={{ position: "relative", display: "inline-flex", alignItems: "center", gap: "7px", padding: "6px 15px", borderRadius: "999px", background: "rgb(255, 255, 255)", border: "1px solid rgb(206, 255, 251)", color: "rgb(13, 148, 136)", fontSize: "12px", fontWeight: "600", marginBottom: "20px", overflow: "hidden" }}>
            <span style={{ width: "7px", height: "7px", borderRadius: "999px", background: "rgb(20, 184, 166)" }} />
            What's Included
            <span style={{ position: "absolute", inset: "0px", width: "40%", background: "linear-gradient(90deg, transparent, rgba(20, 184, 166, 0.22), transparent)", animation: "3.4s ease-in-out 0s infinite normal none running fl-shimmer" }} />
          </span>
          <GradientHeading lead="Everything Included " highlight="in Your Package" />
          <p style={{ fontSize: "16px", color: "rgb(107, 114, 128)", margin: "0px auto", maxWidth: "620px", lineHeight: "1.6" }}>
            Get everything you need to launch, customize, and maintain your Shopify source code product—from production-ready code to documentation, tutorials, licensing, and future updates.
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
          {CARDS.map((card, i) => (
            <IncludedCard
              key={card.title}
              icon={
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  {card.icon}
                </svg>
              }
              label={card.label}
              title={card.title}
              items={card.items}
              delay={0.35 + i * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
