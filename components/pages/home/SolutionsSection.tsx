import SectionEyebrow from "@/components/ui/SectionEyebrow";
import GradientHeading from "@/components/ui/GradientHeading";
import NumberedProcessStep from "./NumberedProcessStep";

const STEPS = [
  { number: "01", title: "Purchase", description: "Complete your secure checkout and purchase the Commercial License." },
  { number: "02", title: "Delivery Email", description: "Receive your license, download link, invoice, and setup instructions." },
  { number: "03", title: "Secure Download", description: "Download the complete source code package and documentation." },
  { number: "04", title: "Documentation & Setup", description: "Follow the setup guides to install and configure your application." },
  { number: "05", title: "Build & Launch", description: "Brand, deploy, validate, and launch your Shopify application." },
];

export default function SolutionsSection() {
  return (
    <section id="solutions" style={{ background: "rgb(249, 250, 251)", padding: "96px 32px" }}>
      <div style={{ maxWidth: "1160px", margin: "0px auto" }}>
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <SectionEyebrow tone="blue">Source Code</SectionEyebrow>
          <GradientHeading lead="Turn " highlight="this code into revenue" />
        </div>
        <div>
          <div style={{ background: "linear-gradient(120deg, rgb(6, 71, 64), rgb(13, 148, 136))", borderRadius: "24px", padding: "48px", color: "rgb(255, 255, 255)", marginBottom: "32px", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", right: "-60px", top: "-60px", width: "280px", height: "280px", borderRadius: "999px", background: "radial-gradient(circle, rgba(206, 255, 251, 0.22), transparent 70%)" }} />
            <div style={{ position: "relative", maxWidth: "560px" }}>
              <h3 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: "34px", fontWeight: "800", letterSpacing: "-1.2px", margin: "0px 0px 14px" }}>
                Launch your own Shopify app under your brand.
              </h3>
              <p style={{ fontSize: "16px", lineHeight: "1.65", color: "rgba(255, 255, 255, 0.82)", margin: "0px" }}>
                Skip 6 months of engineering. Buy the codebase, drop in your brand, and go live on the Shopify App Store with a product merchants already pay for.
              </p>
              <a href="/founders" className="fl-ix-scp9 fl-ix-scp5" style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginTop: "28px", padding: "12px 24px", borderRadius: "999px", background: "transparent", border: "1px solid rgba(255, 255, 255, 0.45)", color: "rgb(255, 255, 255)", fontSize: "14px", fontWeight: "600", transition: "0.18s" }}>
                {"View Product "}
                <span>→</span>
              </a>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))", gap: "16px" }}>
            {STEPS.map((s) => (
              <NumberedProcessStep key={s.number} number={s.number} title={s.title} description={s.description} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
