"use client";

import SectionEyebrow from "@/components/ui/SectionEyebrow";
import GradientHeading from "@/components/ui/GradientHeading";
import ReceiveListRow from "./ReceiveListRow";
import { usePurchaseRenewalToggle } from "@/hooks/usePurchaseRenewalToggle";

const INCLUDES = ["Complete production-ready source code", "12 months product updates", "12 months standard technical support"];

const RECEIVE_LIST = [
  "Commercial License",
  "Complete production-ready source code",
  "Secure download link",
  "Installation Guide",
  "Configuration Guide",
  "API Documentation",
  "Webhook Documentation",
  "Documentation Library",
  "Video Tutorials",
  "Third-Party Notices",
  "12 months product updates",
  "12 months standard technical support",
  "Future optional renewal available",
];

const MINI_STATS = [
  { value: "1", label: "Production store" },
  { value: "100%", label: "Source access" },
  { value: "12 mo", label: "Updates & support" },
];

export default function PricingSection() {
  const { renewal, setRenewal, content } = usePurchaseRenewalToggle();

  return (
    <section id="pricing" style={{ background: "rgb(255, 255, 255)", padding: "96px 32px" }}>
      <div style={{ maxWidth: "960px", margin: "0px auto" }}>
        <div style={{ textAlign: "center", marginBottom: "44px" }}>
          <SectionEyebrow tone="teal">PRICING</SectionEyebrow>
          <GradientHeading lead="One Plan. " highlight="Everything Included." />
          <p style={{ fontSize: "16px", color: "rgb(107, 114, 128)", margin: "0px 0px 28px" }}>
            One perpetual licence, bought once. Renewal is optional and only covers updates and support.
          </p>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "12px" }}>
            <div style={{ display: "inline-flex", padding: "5px", background: "rgb(243, 244, 246)", borderRadius: "999px", gap: "4px" }}>
              <button onClick={() => setRenewal(false)} style={{ padding: "11px 22px", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "none", borderRadius: "999px", fontFamily: "Geist, sans-serif", fontSize: "14px", fontWeight: "600", cursor: "pointer", transition: "0.2s cubic-bezier(0.2, 0.8, 0.2, 1)", background: renewal ? "transparent" : "rgb(13, 21, 38)", color: renewal ? "rgb(107, 114, 128)" : "rgb(255, 255, 255)", boxShadow: renewal ? "none" : "rgba(13, 21, 38, 0.267) 0px 4px 12px" }}>
                Purchase
              </button>
              <button onClick={() => setRenewal(true)} style={{ padding: "11px 22px", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "none", borderRadius: "999px", fontFamily: "Geist, sans-serif", fontSize: "14px", fontWeight: "600", cursor: "pointer", transition: "0.2s cubic-bezier(0.2, 0.8, 0.2, 1)", background: renewal ? "rgb(13, 21, 38)" : "transparent", color: renewal ? "rgb(255, 255, 255)" : "rgb(107, 114, 128)", boxShadow: renewal ? "rgba(13, 21, 38, 0.267) 0px 4px 12px" : "none" }}>
                Renewal Preview
              </button>
            </div>
            <span style={{ fontSize: "12px", fontWeight: "600", color: "rgb(13, 148, 136)", background: "rgb(224, 250, 248)", padding: "5px 11px", borderRadius: "999px" }}>
              <span className="sc-interp">{content.badgeText}</span>
            </span>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "minmax(0px, 1fr) minmax(0px, 1fr)", gap: "0px", border: "1px solid rgb(229, 231, 235)", borderRadius: "24px", overflow: "hidden", boxShadow: "rgba(13, 21, 38, 0.2) 0px 24px 48px -24px" }}>
          <div style={{ position: "relative", padding: "44px", background: "linear-gradient(160deg, rgb(13, 21, 38), rgb(13, 148, 136))", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: "-140px", right: "-120px", width: "340px", height: "340px", borderRadius: "999px", background: "radial-gradient(circle, rgba(20, 184, 166, 0.5) 0%, rgba(20, 184, 166, 0) 70%)", pointerEvents: "none" }} />
            <div style={{ position: "absolute", bottom: "-160px", left: "-110px", width: "320px", height: "320px", borderRadius: "999px", background: "radial-gradient(circle, rgba(47, 84, 235, 0.42) 0%, rgba(47, 84, 235, 0) 72%)", pointerEvents: "none" }} />
            <div style={{ position: "absolute", inset: "0px", background: "linear-gradient(200deg, rgba(255, 255, 255, 0.14) 0%, rgba(255, 255, 255, 0) 46%)", pointerEvents: "none" }} />
            <div style={{ position: "relative" }}>
              <span style={{ display: "inline-block", padding: "5px 12px", borderRadius: "999px", background: "rgba(255, 255, 255, 0.16)", color: "rgb(255, 255, 255)", fontSize: "12px", fontWeight: "600", letterSpacing: "0.8px", marginBottom: "24px" }}>
                COMMERCIAL LICENSE
              </span>
              <div style={{ display: "flex", alignItems: "baseline", gap: "6px", marginBottom: "8px" }}>
                <span style={{ fontSize: "17px", fontWeight: "600", color: "rgba(255, 255, 255, 0.62)", alignSelf: "flex-start", marginTop: "9px" }}>
                  <span className="sc-interp">USD</span>
                </span>
                <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: "56px", fontWeight: "800", letterSpacing: "-2.4px", color: "rgb(255, 255, 255)" }}>
                  <span className="sc-interp">{content.priceAmount}</span>
                </span>
                <span style={{ fontSize: "16px", color: "rgba(255, 255, 255, 0.7)" }}>
                  <span className="sc-interp">{content.priceUnit}</span>
                </span>
              </div>
              <div style={{ fontSize: "14px", fontWeight: "600", color: "rgb(206, 255, 251)", marginBottom: "14px" }}>
                <span className="sc-interp">{content.kicker}</span>
              </div>
              <div style={{ marginBottom: "20px", display: content.showIncludes ? undefined : "none" }}>
                <div style={{ fontSize: "13px", fontWeight: "600", color: "rgba(255, 255, 255, 0.9)", marginBottom: "10px" }}>
                  Includes:
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "9px" }}>
                  {INCLUDES.map((text) => (
                    <ReceiveListRow key={text} text={text} tone="dark" />
                  ))}
                </div>
              </div>
              <p style={{ fontSize: "14px", color: "rgba(255, 255, 255, 0.78)", margin: "0px 0px 28px", lineHeight: "1.6" }}>
                <span className="sc-interp">
                  {content.noteText}
                </span>
              </p>
              <a href={content.ctaHref} className="fl-ix-scpd fl-ix-scp5" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", padding: "16px 32px", borderRadius: "999px", background: "rgb(255, 255, 255)", color: "rgb(13, 21, 38)", fontSize: "16px", fontWeight: "600", transition: "transform 0.18s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.18s" }}>
                <span className="sc-interp">{content.ctaText}</span>
                {" "}
                <span>→</span>
              </a>
              <p style={{ fontSize: "12px", color: "rgba(255, 255, 255, 0.6)", margin: "16px 0px 0px", textAlign: "center" }}>
                <span className="sc-interp">{content.footText}</span>
              </p>
            </div>
          </div>
          <div style={{ padding: "44px", background: "rgb(255, 255, 255)" }}>
            <h4 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: "16px", fontWeight: "700", margin: "0px 0px 20px", color: "rgb(13, 21, 38)" }}>
              <span className="sc-interp">{content.receiveHeading}</span>
            </h4>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px 20px" }}>
              {RECEIVE_LIST.map((text, i) => (
                <ReceiveListRow key={`${text}-${i}`} text={text} tone="light" />
              ))}
            </div>
            <div style={{ marginTop: "28px", paddingTop: "24px", borderTop: "1px solid rgb(243, 244, 246)", display: "flex", gap: "24px" }}>
              {MINI_STATS.map((s) => (
                <div key={s.label}>
                  <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: "24px", fontWeight: "700", color: "rgb(13, 21, 38)" }}>
                    {s.value}
                  </div>
                  <div style={{ fontSize: "12px", color: "rgb(107, 114, 128)" }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
