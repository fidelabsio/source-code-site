import GradientHeading from "@/components/ui/GradientHeading";
import FeatureCard from "./about/FeatureCard";
import ReasonRow from "./about/ReasonRow";
import TimelineStep from "./about/TimelineStep";

const REASONS = [
  {
    number: "01",
    title: "Teams lose months to quote functionality",
    description: "Custom quote flows, approval logic, and merchant dashboards are six to nine months of engineering before a first customer sees anything.",
  },
  {
    number: "02",
    title: "The same solution gets rebuilt repeatedly",
    description: "Every B2B client needs the same quotation workflow, rebuilt from scratch and billed as bespoke work each time.",
  },
  {
    number: "03",
    title: "Merchants need flexible quotation workflows",
    description: "Hidden pricing, request-a-quote, draft orders, and negotiated pricing are table stakes in wholesale and B2B commerce.",
  },
  {
    number: "04",
    title: "FIDE ships that as production source code",
    description: "A complete, documented, white-label codebase you own outright — deploy it under your own brand in days, not quarters.",
  },
];

const ARROWS_ICON = (
  <>
    <path d="m18 16 4-4-4-4" />
    <path d="m6 8-4 4 4 4" />
    <path d="m14.5 4-5 16" />
  </>
);

const MOUNTAIN_FLAG_ICON = (
  <>
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09Z" />
    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2Z" />
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
  </>
);

const BOOK_ICON = (
  <>
    <path d="M12 7v14" />
    <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3Z" />
  </>
);

const GEAR_ICON = (
  <>
    <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6h.09A1.65 1.65 0 0 0 10 3.09V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9v.09a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z" />
  </>
);

const BRIEFCASE_ICON = (
  <>
    <path d="M4 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18" />
    <path d="M16 8h2a2 2 0 0 1 2 2v12" />
    <path d="M2 22h20" />
    <path d="M8 6h2" />
    <path d="M8 10h2" />
    <path d="M8 14h2" />
  </>
);

const DEVELOPERS_ICON = (
  <>
    <path d="M18 21a8 8 0 0 0-16 0" />
    <path d="M10 13a5 5 0 1 0 0-10 5 5 0 0 0 0 10" />
    <path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3" />
  </>
);

const SHIELD_CHECK_ICON = (
  <>
    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1Z" />
    <path d="m9 12 2 2 4-4" />
  </>
);

const DOCUMENT_ICON = (
  <>
    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
    <path d="M15 2v5h5" />
    <path d="M9 13h6" />
    <path d="M9 17h4" />
  </>
);

const RENEW_ICON = (
  <>
    <path d="M3 12a9 9 0 0 1 15-6.7L21 8" />
    <path d="M21 3v5h-5" />
    <path d="M21 12a9 9 0 0 1-15 6.7L3 16" />
    <path d="M3 21v-5h5" />
  </>
);

const ROBOT_ICON = (
  <>
    <path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8Z" />
    <path d="M8 9h.01" />
    <path d="M12 7h.01" />
    <path d="M16 9h.01" />
  </>
);

const VIDEO_ICON = (
  <>
    <path d="M20 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2Z" />
    <path d="M8 21h8" />
    <path d="M12 17v4" />
    <path d="m10 8 5 3-5 3Z" />
  </>
);

const DEPLOY_ICON = (
  <>
    <path d="M12 13v8" />
    <path d="m8 17 4 4 4-4" />
    <path d="M4.4 15a7 7 0 1 1 12.2-6h1.4a4.5 4.5 0 0 1 2.1 8.5" />
  </>
);

function icon(paths: React.ReactNode) {
  return (
    <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {paths}
    </svg>
  );
}

const WHAT_WE_BUILD = [
  {
    title: "White label source code",
    description: "The complete repository — frontend, backend, database schema, and theme extension — rebrandable through configuration.",
    icon: icon(ARROWS_ICON),
  },
  {
    title: "Production ready features",
    description: "Hide price, quote requests, quote dashboard, draft orders, email notifications, and theme extension, all shipping today.",
    icon: icon(MOUNTAIN_FLAG_ICON),
  },
  {
    title: "Documentation & video tutorials",
    description: "108 pages across three guides, plus recorded walkthroughs for setup, branding, and deployment.",
    icon: icon(BOOK_ICON),
  },
  {
    title: "Developer-friendly architecture",
    description: "Typed, tested, and conventional. No obfuscation, no hidden licence servers, no runtime phone-home.",
    icon: icon(GEAR_ICON),
  },
];

const WHO_WE_BUILD_FOR = [
  {
    title: "Client work",
    description: "Deliver a branded B2B quotation product from one licence. Bill for implementation, not for rebuilding the same feature set.",
    icon: icon(BRIEFCASE_ICON),
  },
  {
    title: "Product teams",
    description: "Launch your own Shopify app under your own brand without a six-month engineering runway or a dedicated backend hire.",
    icon: icon(MOUNTAIN_FLAG_ICON),
  },
  {
    title: "Shopify developers",
    description: "Read, extend, and own the source. Fork it, add features, and ship custom work on a foundation that already handles the hard parts.",
    icon: icon(DEVELOPERS_ICON),
  },
];

const OUR_PRINCIPLES = [
  {
    title: "Developer first",
    description: "Written to be read. Conventional patterns, meaningful names, and comments where the reasoning is not obvious.",
    icon: icon(ARROWS_ICON),
  },
  {
    title: "Production ready",
    description: "Shipped from a real, running application — not a demo, a boilerplate, or a tutorial project.",
    icon: icon(SHIELD_CHECK_ICON),
  },
  {
    title: "Transparent licensing",
    description: "One clear licence, no per-seat fees, no revenue share, no restrictions on the brands you deploy.",
    icon: icon(DOCUMENT_ICON),
  },
  {
    title: "Long-term support",
    description: "Ongoing releases and a 24-hour support SLA for every licence holder.",
    icon: icon(RENEW_ICON),
  },
];

const WHY_CHOOSE_FIDE_CARD_STYLE = { flex: "0 1 auto", width: "calc(25% - 15px)", minWidth: "230px", textAlign: "left" as const };

const WHY_CHOOSE_FIDE = [
  {
    title: "White label ready",
    description: "Rebrand through config files — colours, logo, name, and email templates — without touching application logic.",
    icon: icon(ROBOT_ICON),
  },
  {
    title: "Full source code",
    description: "Every file, every migration, every test. No compiled bundles or restricted modules.",
    icon: icon(ARROWS_ICON),
  },
  {
    title: "Documentation included",
    description: "Core, white label, and technical guides written alongside the code.",
    icon: icon(BOOK_ICON),
  },
  {
    title: "Video tutorials",
    description: "Recorded setup, branding, and deployment walkthroughs.",
    icon: icon(VIDEO_ICON),
  },
  {
    title: "Fast deployment",
    description: "Deploy to Vercel, Fly.io, or Docker with the included pipeline.",
    icon: icon(DEPLOY_ICON),
  },
  {
    title: "Production ready",
    description: "Already handling real merchant traffic in live stores.",
    icon: icon(SHIELD_CHECK_ICON),
  },
];

const JOURNEY = [
  {
    number: "1",
    title: "Idea",
    description: "A recurring brief across dozens of Shopify B2B builds: merchants asking for the same quotation workflow.",
    showConnector: true,
  },
  {
    number: "2",
    title: "Development",
    description: "Built as a real production app — Remix, Prisma, Shopify App Bridge, theme extensions, and a job queue.",
    showConnector: true,
  },
  {
    number: "3",
    title: "Production-ready source code",
    description: "Hardened, documented, and packaged for white labelling with a full configuration layer.",
    showConnector: true,
  },
  {
    number: "4",
    title: "Continuous improvements",
    description: "Ongoing releases, security patches, and new features shipped to every licence holder.",
    showConnector: false,
  },
];

export default function AboutPage() {
  return (
    <>
      <section style={{ background: "rgb(247, 252, 252)", padding: "64px 32px 48px", borderBottom: "1px solid rgb(238, 242, 242)" }}>
        <div style={{ maxWidth: "820px", margin: "0px auto", textAlign: "center" }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "6px 14px", borderRadius: "999px", background: "rgb(224, 250, 248)", color: "rgb(13, 148, 136)", fontSize: "11px", fontWeight: "600", letterSpacing: "0.8px", marginBottom: "20px" }}>
            <span style={{ width: "7px", height: "7px", flex: "0 0 auto", borderRadius: "999px", background: "rgb(20, 184, 166)", boxShadow: "rgba(20, 184, 166, 0.13) 0px 0px 0px 3px, rgba(20, 184, 166, 0.73) 0px 0px 9px", animation: "2.4s ease-in-out 0s infinite normal none running fl-dot" }} />
            ABOUT FIDE LABS
          </span>
          <h1 style={{ fontFamily: "\"Bricolage Grotesque\", sans-serif", fontWeight: "800", fontSize: "44px", lineHeight: "1.1", letterSpacing: "-1.6px", margin: "0px auto 14px", color: "rgb(13, 21, 38)", maxWidth: "760px", textWrap: "pretty" }}>
            {"Building production-ready Shopify source code for "}
            <span style={{ backgroundImage: "linear-gradient(135deg, rgb(47, 84, 235) 0%, rgb(3, 162, 145) 25%, rgb(47, 84, 235) 50%, rgb(3, 162, 145) 75%, rgb(47, 84, 235) 100%)", backgroundSize: "200% 100%", backgroundClip: "text", WebkitTextFillColor: "transparent", color: "transparent", animation: "6s linear 0s infinite normal none running fl-grad" }}>
              every brand
            </span>
          </h1>
          <p style={{ fontSize: "16px", lineHeight: "1.65", color: "rgb(107, 114, 128)", margin: "0px auto", maxWidth: "620px" }}>
            FIDE Labs builds and licenses complete, white-label Shopify application source code. One purchase, a perpetual licence, complete branding control.
          </p>
        </div>
      </section>
      <section style={{ background: "rgb(255, 255, 255)", padding: "64px 32px" }}>
        <div style={{ maxWidth: "1160px", margin: "0px auto" }}>
          <div style={{ textAlign: "center", marginBottom: "36px" }}>
            <GradientHeading lead="Why FIDE " highlight="exists" size={36} style={{ letterSpacing: "-1.3px" }} />
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-start", gap: "32px 56px" }}>
            <div style={{ flex: "1 1 30%", minWidth: "280px" }}>
              <img src="https://res.cloudinary.com/dgjd6jpof/image/upload/f_auto,q_auto/v1787150904/source-code-site/about-asset-2.png" alt="FIDE dashboard alongside its theme configuration file" style={{ display: "block", width: "100%", height: "auto", margin: "0px 0px 22px" }} />
              <p style={{ fontSize: "15px", lineHeight: "1.75", color: "rgb(107, 114, 128)", margin: "0px" }}>
                Every B2B Shopify team faces the same challenges—building complex quote workflows from scratch. FIDE Labs exists to eliminate that repetitive effort with production-ready, white-label source code that helps businesses launch faster.
              </p>
            </div>
            <div style={{ flex: "1 1 58%", minWidth: "320px", display: "flex", flexDirection: "column", gap: "0px" }}>
              {REASONS.map((reason) => (
                <ReasonRow key={reason.number} number={reason.number} title={reason.title} description={reason.description} />
              ))}
            </div>
          </div>
        </div>
      </section>
      <section style={{ background: "rgb(249, 250, 251)", padding: "64px 32px" }}>
        <div style={{ maxWidth: "1160px", margin: "0px auto" }}>
          <div style={{ textAlign: "center", marginBottom: "36px" }}>
            <GradientHeading lead="What we " highlight="build" size={36} style={{ letterSpacing: "-1.3px" }} />
            <p style={{ fontSize: "15px", lineHeight: "1.65", color: "rgb(107, 114, 128)", margin: "0px auto", maxWidth: "620px" }}>
              Four things ship in every licence.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px" }}>
            {WHAT_WE_BUILD.map((card) => (
              <FeatureCard key={card.title} icon={card.icon} title={card.title} description={card.description} />
            ))}
          </div>
        </div>
      </section>
      <section style={{ background: "rgb(255, 255, 255)", padding: "64px 32px" }}>
        <div style={{ maxWidth: "1160px", margin: "0px auto" }}>
          <div style={{ textAlign: "center", marginBottom: "36px" }}>
            <GradientHeading lead="Who we " highlight="build for" size={36} style={{ letterSpacing: "-1.3px" }} />
            <p style={{ fontSize: "15px", lineHeight: "1.65", color: "rgb(107, 114, 128)", margin: "0px auto", maxWidth: "620px" }}>
              Three audiences, one codebase.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
            {WHO_WE_BUILD_FOR.map((card) => (
              <FeatureCard key={card.title} icon={card.icon} title={card.title} description={card.description} />
            ))}
          </div>
        </div>
      </section>
      <section style={{ background: "rgb(249, 250, 251)", padding: "64px 32px" }}>
        <div style={{ maxWidth: "1160px", margin: "0px auto" }}>
          <div style={{ textAlign: "center", marginBottom: "36px" }}>
            <GradientHeading lead="Our " highlight="principles" size={36} style={{ letterSpacing: "-1.3px" }} />
            <p style={{ fontSize: "15px", lineHeight: "1.65", color: "rgb(107, 114, 128)", margin: "0px auto", maxWidth: "620px" }}>
              How we decide what to build and how to license it.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px" }}>
            {OUR_PRINCIPLES.map((card) => (
              <FeatureCard key={card.title} icon={card.icon} title={card.title} description={card.description} />
            ))}
          </div>
        </div>
      </section>
      <section style={{ background: "rgb(255, 255, 255)", padding: "64px 32px" }}>
        <div style={{ maxWidth: "1160px", margin: "0px auto" }}>
          <div style={{ textAlign: "center", marginBottom: "36px" }}>
            <GradientHeading lead="Why choose " highlight="FIDE" size={36} style={{ letterSpacing: "-1.3px" }} />
            <p style={{ fontSize: "15px", lineHeight: "1.65", color: "rgb(107, 114, 128)", margin: "0px auto", maxWidth: "620px" }}>
              What you get the day the repository lands in your account.
            </p>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px" }}>
            {WHY_CHOOSE_FIDE.map((card) => (
              <FeatureCard key={card.title} icon={card.icon} title={card.title} description={card.description} style={WHY_CHOOSE_FIDE_CARD_STYLE} />
            ))}
          </div>
        </div>
      </section>
      <section style={{ background: "rgb(249, 250, 251)", padding: "64px 32px" }}>
        <div style={{ maxWidth: "1160px", margin: "0px auto" }}>
          <div style={{ textAlign: "center", marginBottom: "36px" }}>
            <GradientHeading lead="Company " highlight="journey" size={36} style={{ letterSpacing: "-1.3px" }} />
            <p style={{ fontSize: "15px", lineHeight: "1.65", color: "rgb(107, 114, 128)", margin: "0px auto", maxWidth: "620px" }}>
              From a recurring client brief to a licensed source product.
            </p>
          </div>
          <div style={{ maxWidth: "620px", margin: "0px auto", textAlign: "left", display: "flex", flexDirection: "column" }}>
            {JOURNEY.map((step) => (
              <TimelineStep key={step.number} number={step.number} title={step.title} description={step.description} showConnector={step.showConnector} />
            ))}
          </div>
        </div>
      </section>
      <section style={{ background: "linear-gradient(120deg, rgb(3, 162, 145), rgb(47, 84, 235))", padding: "0px 32px" }}>
        <div style={{ maxWidth: "1160px", margin: "0px auto", padding: "56px 0px", textAlign: "center" }}>
          <h2 style={{ fontFamily: "\"Bricolage Grotesque\", sans-serif", fontWeight: "800", fontSize: "34px", letterSpacing: "-1.2px", margin: "0px 0px 12px", color: "rgb(255, 255, 255)" }}>
            Ready to launch your own branded Shopify product?
          </h2>
          <p style={{ fontSize: "15px", color: "rgba(255, 255, 255, 0.82)", margin: "0px 0px 28px" }}>
            Full source access, a perpetual licence, 12 months of updates and support.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="/checkout" className="fl-ab-scp6 fl-ab-scp4" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", padding: "16px 32px", borderRadius: "999px", background: "rgb(255, 255, 255)", color: "rgb(13, 21, 38)", fontSize: "16px", fontWeight: "600", transition: "transform 0.18s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.18s" }}>
              {"Buy Source Code "}
              <span>
                →
              </span>
            </a>
            <a href="/contact#contact-form" className="fl-ab-scp7 fl-ab-scp4" style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "15px 28px", borderRadius: "999px", background: "transparent", border: "1px solid rgba(255, 255, 255, 0.5)", color: "rgb(255, 255, 255)", fontSize: "14.5px", fontWeight: "600", transition: "0.18s" }}>
              Contact Sales
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
