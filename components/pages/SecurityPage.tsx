import SecurityCard from "./security/SecurityCard";

const SECURITY_CARDS = [
  {
    icon: (
      <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 11H5a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2Z" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
    title: "Data privacy",
    description:
      "Merchant and customer information is handled securely, and the application stores only what a quotation workflow actually needs.",
    items: [
      "No customer payment data is stored — checkout stays with Shopify",
      "Quote records hold only the fields required to price and fulfil a request",
      "Data lives in your own database instance, under your control",
      "No analytics or telemetry is sent back to FIDE Labs",
    ],
  },
  {
    icon: (
      <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.5 19a4.5 4.5 0 1 0-1.4-8.8A7 7 0 1 0 7 18.9" />
        <path d="M12 13v8" />
        <path d="m8 17 4 4 4-4" />
      </svg>
    ),
    title: "Secure hosting",
    description:
      "Deployments run on secure cloud infrastructure with encryption in transit and reliable, reproducible hosting.",
    items: [
      "HTTPS enforced end to end, with HSTS in the production config",
      "Deploy to Vercel, Fly.io, or Docker with the included pipeline",
      "Secrets read from environment variables, never committed to the repository",
      "Database connections are TLS-encrypted by default",
    ],
  },
  {
    icon: (
      <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2" />
        <path d="m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06" />
        <path d="m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8" />
      </svg>
    ),
    title: "Webhook security",
    description: "Every inbound Shopify webhook is verified before the application acts on it.",
    items: [
      "Shopify webhook verification on all registered topics",
      "HMAC signature validation using your app secret",
      "Requests failing validation are rejected with a 401 and logged",
      "Session tokens and OAuth flows follow Shopify authentication best practice",
    ],
  },
  {
    icon: (
      <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="m18 16 4-4-4-4" />
        <path d="m6 8-4 4 4 4" />
        <path d="m14.5 4-5 16" />
      </svg>
    ),
    title: "Source code security",
    description: "A production-ready architecture written with secure coding practices and no hidden behaviour.",
    items: [
      "Parameterised database access through Prisma — no raw string queries",
      "Input validation and output escaping across routes and forms",
      "No obfuscated bundles, tracking scripts, or licence phone-home",
      "Regularly maintained, with fixes shipped to all licence holders",
    ],
  },
  {
    icon: (
      <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="m7.5 4.27 9 5.15" />
        <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
        <path d="m3.3 7 8.7 5 8.7-5" />
        <path d="M12 22V12" />
      </svg>
    ),
    title: "Dependencies",
    description: "The dependency tree is deliberately small and actively monitored.",
    items: [
      "Trusted, widely-used packages with active maintenance",
      "Regular upgrades on a scheduled release cadence",
      "Security patches shipped promptly when advisories land",
      "Automated dependency and vulnerability monitoring in CI",
    ],
  },
  {
    icon: (
      <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
        <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
        <path d="M7 21h10" />
        <path d="M12 3v18" />
        <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />
      </svg>
    ),
    title: "Privacy & compliance",
    description: "A GDPR-aware implementation that leaves customer data in the merchant’s hands.",
    items: [
      "Shopify GDPR webhooks implemented: data request, redact, and shop redact",
      "Merchant-controlled customer data with export and deletion paths",
      "Data minimisation and retention practices built into the schema",
      "Clear privacy documentation you can adapt for your own brand",
    ],
  },
];

export default function SecurityPage() {
  return (
    <>
      <section style={{ background: "rgb(247, 252, 252)", padding: "64px 32px 48px", borderBottom: "1px solid rgb(238, 242, 242)" }}>
        <div style={{ maxWidth: "820px", margin: "0px auto", textAlign: "center" }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "6px 14px", borderRadius: "999px", background: "rgb(224, 250, 248)", color: "rgb(13, 148, 136)", fontSize: "12px", fontWeight: "600", letterSpacing: "0.8px", marginBottom: "20px" }}>
            <span style={{ width: "7px", height: "7px", flex: "0 0 auto", borderRadius: "999px", background: "rgb(20, 184, 166)", boxShadow: "rgba(20, 184, 166, 0.13) 0px 0px 0px 3px, rgba(20, 184, 166, 0.73) 0px 0px 9px", animation: "2.4s ease-in-out 0s infinite normal none running fl-dot" }} />
            SECURITY & COMPLIANCE
          </span>
          <h1 style={{ fontFamily: "\"Bricolage Grotesque\", sans-serif", fontWeight: "800", fontSize: "44px", lineHeight: "1.1", letterSpacing: "-1.6px", margin: "0px auto 14px", color: "rgb(13, 21, 38)", maxWidth: "760px", textWrap: "pretty" }}>
            {"Enterprise-grade security and "}
            <span style={{ backgroundImage: "linear-gradient(135deg, rgb(47, 84, 235) 0%, rgb(3, 162, 145) 25%, rgb(47, 84, 235) 50%, rgb(3, 162, 145) 75%, rgb(47, 84, 235) 100%)", backgroundSize: "200% 100%", backgroundClip: "text", WebkitTextFillColor: "transparent", color: "transparent", animation: "6s linear 0s infinite normal none running fl-grad" }}>
              transparent compliance practices
            </span>
          </h1>
          <p style={{ fontSize: "16px", lineHeight: "1.65", color: "rgb(107, 114, 128)", margin: "0px auto", maxWidth: "620px" }}>
            FIDE Labs follows modern development and deployment best practices for its white-label Shopify source code product. This page describes how the codebase handles data, secures requests, and stays maintained.
          </p>
        </div>
      </section>
      <section style={{ background: "rgb(255, 255, 255)", padding: "64px 32px" }}>
        <div style={{ maxWidth: "1160px", margin: "0px auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "20px" }}>
            {SECURITY_CARDS.map((card) => (
              <SecurityCard key={card.title} icon={card.icon} title={card.title} description={card.description} items={card.items} />
            ))}
          </div>
        </div>
      </section>
      <section style={{ background: "rgb(249, 250, 251)", padding: "64px 32px" }}>
        <div style={{ maxWidth: "1160px", margin: "0px auto" }}>
          <div style={{ background: "rgb(255, 255, 255)", border: "1px solid rgb(229, 231, 235)", borderRadius: "16px", padding: "36px", display: "flex", gap: "28px", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", boxShadow: "rgba(15, 23, 42, 0.08) 0px 18px 40px, rgba(15, 23, 42, 0.04) 0px 8px 18px" }}>
            <div>
              <h2 style={{ fontFamily: "\"Bricolage Grotesque\", sans-serif", fontWeight: "800", fontSize: "30px", letterSpacing: "-1.1px", margin: "0px 0px 8px", color: "rgb(13, 21, 38)" }}>
                Need help?
              </h2>
              <p style={{ fontSize: "15px", lineHeight: "1.65", color: "rgb(107, 114, 128)", margin: "0px", maxWidth: "520px" }}>
                The technical documentation covers authentication, webhooks, and deployment in detail. For anything security-specific, get in touch.
              </p>
            </div>
            <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
              <a href="/documentation" className="fl-sec-scp3 fl-sec-scp4" style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "14px 26px", borderRadius: "999px", background: "linear-gradient(135deg, rgb(3, 162, 145), rgb(47, 84, 235))", color: "rgb(255, 255, 255)", fontSize: "14.5px", fontWeight: "600", boxShadow: "rgba(47, 84, 235, 0.24) 0px 4px 14px", transition: "transform 0.18s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.18s, background 0.18s" }}>
                {"Browse Documentation "}
                <span>
                  →
                </span>
              </a>
              <a href="/contact#contact-form" className="fl-sec-scp6 fl-sec-scp4" style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "14px 26px", borderRadius: "999px", background: "rgb(255, 255, 255)", border: "1px solid rgb(209, 213, 219)", color: "rgb(31, 41, 55)", fontSize: "14.5px", fontWeight: "600", transition: "0.18s" }}>
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
