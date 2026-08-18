import GradientHeading from "@/components/ui/GradientHeading";
import ExcludedRow from "./ExcludedRow";

const EXCLUDED = [
  "SEO Configuration",
  "Marketing Analytics",
  "Social Media Integrations",
  "Dynamic Legal Page Generation",
  "Company Profile Management",
  "Third-Party Marketing Automation",
];

export default function NotIncludedSection() {
  return (
    <section style={{ background: "rgb(255, 255, 255)", padding: "80px 32px" }}>
      <div style={{ maxWidth: "900px", margin: "0px auto" }}>
        <div style={{ textAlign: "center", marginBottom: "36px" }}>
          <GradientHeading lead="What's Not " highlight="Included" size={32} style={{ letterSpacing: "-1.1px" }} />
          <p style={{ fontSize: "14.5px", color: "rgb(107, 114, 128)", margin: "0px auto", maxWidth: "640px", lineHeight: "1.65" }}>
            The current release focuses on delivering a production-ready, white-label Shopify source code product with everything required to rebrand, customize, deploy, and launch.
          </p>
        </div>
        <div id="fl-excluded" style={{ background: "rgb(254, 242, 242)", border: "1px solid rgb(254, 202, 202)", borderRadius: "16px", padding: "28px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "14px 28px" }}>
            {EXCLUDED.map((text) => (
              <ExcludedRow key={text} text={text} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
