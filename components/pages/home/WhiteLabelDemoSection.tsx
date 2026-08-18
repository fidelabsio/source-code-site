"use client";

import BrandSwitchButton from "./BrandSwitchButton";
import ConfigJsonLine from "./ConfigJsonLine";
import { useBrandSwitcher, type Brand } from "@/hooks/useBrandSwitcher";

const BRANDS: Brand[] = [
  { name: "Brand Green", rgb: "20, 184, 166", hex: "#14B8A6", soft: "#E0FAF8", logo: "green-logo.svg" },
  { name: "Brand Blue", rgb: "47, 84, 235", hex: "#2F54EB", soft: "#F0F3FF", logo: "blue-logo.svg" },
  { name: "Brand Orange", rgb: "249, 115, 22", hex: "#F97316", soft: "#FFF2E8", logo: "orange-logo.svg" },
  { name: "Brand Violet", rgb: "124, 58, 237", hex: "#7C3AED", soft: "#F3EEFF", logo: "violet-logo.svg" },
];

const NEUTRAL_VALUE_COLOR = "rgb(147, 197, 253)";

export default function WhiteLabelDemoSection() {
  const { activeIndex, setActiveIndex, activeBrand: b } = useBrandSwitcher(BRANDS);
  const initial = b.name.split(" ")[1][0];

  return (
    <section id="whitelabel" data-scene="whitelabel" style={{ background: "radial-gradient(120% 90% at 50% -10%, rgb(16, 36, 58) 0%, rgb(11, 21, 38) 45%, rgb(8, 15, 28) 100%)", padding: "96px 32px", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: "0px", opacity: "0.5", backgroundImage: "linear-gradient(rgba(148, 163, 184, 0.055) 1px, transparent 1px), linear-gradient(90deg, rgba(148, 163, 184, 0.055) 1px, transparent 1px)", backgroundSize: "56px 56px", maskImage: "radial-gradient(75% 60% at 50% 30%, rgb(0, 0, 0) 0%, transparent 100%)" }} />
      <div style={{ position: "absolute", left: "50%", top: "-140px", width: "900px", height: "520px", transform: "translateX(-50%)", borderRadius: "999px", filter: "blur(70px)", background: "radial-gradient(rgba(20, 184, 166, 0.3) 0%, rgba(20, 184, 166, 0.12) 42%, transparent 72%)", animation: "11s ease-in-out 0s infinite normal none running fl-ambient" }} />
      <div style={{ position: "absolute", left: "-120px", bottom: "-80px", width: "560px", height: "420px", borderRadius: "999px", filter: "blur(80px)", background: "radial-gradient(rgba(34, 211, 238, 0.16) 0%, transparent 70%)", animation: "14s ease-in-out 2s infinite normal none running fl-ambient" }} />
      <div style={{ position: "absolute", right: "-140px", top: "120px", width: "520px", height: "420px", borderRadius: "999px", filter: "blur(90px)", background: "radial-gradient(rgba(47, 84, 235, 0.16) 0%, transparent 70%)", animation: "13s ease-in-out 1s infinite normal none running fl-ambient" }} />
      <div style={{ position: "absolute", inset: "0px", background: "linear-gradient(transparent 60%, rgba(8, 15, 28, 0.85) 100%)" }} />
      <div style={{ position: "relative", maxWidth: "1100px", margin: "0px auto" }}>
        <div style={{ textAlign: "center", marginBottom: "44px" }}>
          <span data-scene-item="1" style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "6px 14px", borderRadius: "999px", background: "rgba(20, 184, 166, 0.14)", color: "rgb(20, 184, 166)", fontSize: "12px", fontWeight: "600", letterSpacing: "0.8px", marginBottom: "16px" }}>
            <span style={{ width: "7px", height: "7px", flex: "0 0 auto", borderRadius: "999px", background: "rgb(20, 184, 166)", boxShadow: "rgba(20, 184, 166, 0.133) 0px 0px 0px 3px, rgba(20, 184, 166, 0.733) 0px 0px 9px", animation: "2.4s ease-in-out 0s infinite normal none running fl-dot" }} />
            LIVE WHITE-LABEL DEMO
          </span>
          <h2 data-scene-item="2" style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "800", fontSize: "40px", letterSpacing: "-1.4px", margin: "0px 0px 12px", color: "rgb(255, 255, 255)" }}>
            {"Watch a Rebrand "}
            <span style={{ backgroundImage: "linear-gradient(135deg, rgb(47, 84, 235) 0%, rgb(3, 162, 145) 25%, rgb(47, 84, 235) 50%, rgb(3, 162, 145) 75%, rgb(47, 84, 235) 100%)", backgroundSize: "200% 100%", backgroundClip: "text", WebkitTextFillColor: "transparent", color: "transparent", animation: "6s linear 0s infinite normal none running fl-grad" }}>
              Happen in One Click
            </span>
          </h2>
          <p data-scene-item="3" style={{ fontSize: "16px", color: "rgb(156, 163, 175)", margin: "0px auto", maxWidth: "560px", lineHeight: "1.6" }}>
            Pick a client brand. Every colour, logo, and label in the app updates from a single config file.
          </p>
        </div>
        <div data-scene-item="4" style={{ display: "flex", justifyContent: "center", gap: "12px", marginBottom: "32px", flexWrap: "wrap" }}>
          {BRANDS.map((brand, i) => (
            <BrandSwitchButton key={brand.name} label={brand.name} dotColor={`rgb(${brand.rgb})`} active={i === activeIndex} onClick={() => setActiveIndex(i)} />
          ))}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "minmax(0px, 1fr) 300px", gap: "24px", alignItems: "stretch" }}>
          <div data-scene-item="5" style={{ background: "rgb(255, 255, 255)", borderRadius: "16px", padding: "24px", transition: "box-shadow 0.4s", boxShadow: `rgba(${b.rgb}, 0.4) 0px 24px 60px -20px` }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingBottom: "18px", borderBottom: "1px solid rgb(243, 244, 246)", marginBottom: "20px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <div style={{ width: "30px", height: "30px", borderRadius: "9px", transition: "background 0.4s", background: b.hex, display: "flex", alignItems: "center", justifyContent: "center", color: "rgb(255, 255, 255)", fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "800", fontSize: "13px" }}>
                  <span className="sc-interp">{initial}</span>
                </div>
                <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "700", fontSize: "16px", color: b.hex, transition: "color 0.4s" }}>
                  <span className="sc-interp">{b.name}</span>
                </span>
              </div>
              <span style={{ fontSize: "10.5px", fontWeight: "600", padding: "5px 10px", borderRadius: "999px", transition: "0.4s", background: "rgb(224, 250, 248)", color: "rgb(20, 184, 166)" }}>
                CLIENT
              </span>
            </div>
            <h3 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: "22px", fontWeight: "700", margin: "0px 0px 6px", color: "rgb(13, 21, 38)" }}>
              Request a Quote
            </h3>
            <p style={{ fontSize: "13px", color: "rgb(107, 114, 128)", margin: "0px 0px 22px" }}>
              Get a custom quote for your products in minutes.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px", marginBottom: "20px" }}>
              <div>
                <div style={{ fontSize: "11px", fontWeight: "500", color: "rgb(107, 114, 128)", marginBottom: "6px" }}>
                  Product
                </div>
                <div style={{ height: "38px", border: "1px solid rgb(229, 231, 235)", borderRadius: "10px", background: "rgb(249, 250, 251)" }} />
              </div>
              <div>
                <div style={{ fontSize: "11px", fontWeight: "500", color: "rgb(107, 114, 128)", marginBottom: "6px" }}>
                  Quantity
                </div>
                <div style={{ height: "38px", border: "1px solid rgb(229, 231, 235)", borderRadius: "10px", background: "rgb(249, 250, 251)" }} />
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <button className="fl-ix-scpb fl-ix-scp5" style={{ padding: "12px 22px", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "none", borderRadius: "10px", color: "rgb(255, 255, 255)", fontFamily: "Geist, sans-serif", fontSize: "13.5px", fontWeight: "600", cursor: "pointer", transition: "transform 0.18s cubic-bezier(0.2, 0.8, 0.2, 1), background 0.4s, box-shadow 0.18s", background: b.hex, boxShadow: `rgba(${b.rgb}, 0.333) 0px 6px 18px` }}>
                Request Quote →
              </button>
              <span style={{ fontSize: "11.5px", color: "rgb(107, 114, 128)" }}>
                {"Powered by "}
                <span className="sc-interp">{b.name}</span>
              </span>
            </div>
          </div>
          <div data-scene-item="6" style={{ background: "rgb(10, 15, 30)", border: "1px solid rgb(31, 41, 55)", borderRadius: "16px", padding: "20px", fontFamily: "ui-monospace, Menlo, monospace", fontSize: "11px", lineHeight: "2" }}>
            <div style={{ fontFamily: "Geist, sans-serif", fontSize: "11px", fontWeight: "600", letterSpacing: "0.8px", color: "rgb(107, 114, 128)", marginBottom: "12px" }}>
              BRAND.CONFIG.JSON
            </div>
            <div style={{ color: "rgb(107, 114, 128)", fontSize: "14px" }}>{"{"}</div>
            <ConfigJsonLine fieldKey="name" value={b.name} valueColor={NEUTRAL_VALUE_COLOR} trailingComma />
            <ConfigJsonLine fieldKey="primary" value={b.hex} valueColor={b.hex} trailingComma />
            <ConfigJsonLine fieldKey="soft" value={b.soft} valueColor={NEUTRAL_VALUE_COLOR} trailingComma />
            <ConfigJsonLine fieldKey="logo" value={b.logo} valueColor={NEUTRAL_VALUE_COLOR} trailingComma={false} />
            <div style={{ color: "rgb(107, 114, 128)", fontSize: "14px" }}>{"}"}</div>
          </div>
        </div>
      </div>
      <div style={{ position: "relative", textAlign: "center", marginTop: "56px" }}>
        <a href="/white-label-showcase" className="fl-ix-scpc" style={{ display: "inline-flex", alignItems: "center", gap: "12px", padding: "16px 32px", color: "rgb(20, 184, 166)", fontFamily: "Geist", fontSize: "16px", fontWeight: "700", letterSpacing: "-0.3px", borderBottom: "1px dashed rgba(20, 184, 166, 0.5)", transition: "color 0.2s, gap 0.2s, border-color 0.2s" }}>
          <span style={{ fontSize: "16px" }}>✦</span>
          {"View Complete White Label Showcase "}
          <span style={{ fontSize: "17px" }}>→</span>
        </a>
      </div>
    </section>
  );
}
