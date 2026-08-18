"use client";

import GradientHeading from "@/components/ui/GradientHeading";
import Eyebrow from "./white-label-showcase/Eyebrow";
import BrandDotButton from "./white-label-showcase/BrandDotButton";
import PreviewCard from "./white-label-showcase/PreviewCard";
import CompareToggleButton from "./white-label-showcase/CompareToggleButton";
import ConfigFileButton from "./white-label-showcase/ConfigFileButton";
import CodeLine from "./white-label-showcase/CodeLine";
import FeatureCard from "./white-label-showcase/FeatureCard";
import { useTabSwitcher } from "@/hooks/useTabSwitcher";

const BRAND_BUTTONS = [
  { dotColor: "rgb(20, 184, 166)", label: "Brand Green", active: true },
  { dotColor: "rgb(47, 84, 235)", label: "Brand Blue", active: false },
  { dotColor: "rgb(249, 115, 22)", label: "Brand Orange", active: false },
];

const COMPARE_TABS = [
  {
    label: "Application Branding",
    shotSrc: "/assets/application-branding.png",
    icon: (
      <>
        <path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8Z" />
        <path d="M13.5 6.5h.01" />
        <path d="M17.5 10.5h.01" />
        <path d="M8.5 7.5h.01" />
      </>
    ),
  },
  {
    label: "Merchant Dashboard",
    shotSrc: "/assets/merchant-dashboard.png",
    icon: (
      <>
        <path d="M3 3v18h18" />
        <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" />
      </>
    ),
  },
  {
    label: "Email Templates",
    shotSrc: "/assets/email-templatess.png",
    icon: (
      <>
        <path d="M22 7 13.03 12.7a2 2 0 0 1-2.06 0L2 7" />
        <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z" />
      </>
    ),
  },
];

const DEFAULT_ACTIVE_SHOT_INDEX = 1;

const FEATURE_CARDS = [
  {
    title: "Application Branding",
    items: ["App Name", "Logo", "Favicon", "Company Name"],
    icon: (
      <>
        <path d="M20 7h-4V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2Z" />
        <path d="M2 13h20" />
      </>
    ),
  },
  {
    title: "Dashboard",
    items: ["Dashboard", "Sidebar", "Navigation", "Dashboard Widgets", "Settings"],
    icon: (
      <>
        <path d="M3 3v18h18" />
        <path d="M8 17V9" />
        <path d="M13 17v-5" />
        <path d="M18 17v-9" />
      </>
    ),
  },
  {
    title: "Email Templates",
    items: ["Header", "Footer", "Logo", "Sender Information"],
    icon: (
      <>
        <path d="M22 6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2Z" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </>
    ),
  },
];

const CONFIG_FILES = [
  { label: "colors.json", active: true },
  { label: "logo.svg", active: false },
  { label: "settings.ts", active: false },
  { label: "theme variables", active: false },
];

const COLORS_JSON_LINES = [
  { text: "{", color: "rgb(107, 114, 128)" },
  { text: '  "primary": "#14B8A6",', color: "rgb(147, 197, 253)" },
  { text: '  "primarySoft": "#E0FAF8",', color: "rgb(147, 197, 253)" },
  { text: '  "surface": "#F0FAF8",', color: "rgb(147, 197, 253)" },
  { text: '  "textOnPrimary": "#FFFFFF"', color: "rgb(147, 197, 253)" },
  { text: "}", color: "rgb(107, 114, 128)" },
];

export default function WhiteLabelShowcasePage() {
  const { activeIndex, setActiveIndex } = useTabSwitcher(DEFAULT_ACTIVE_SHOT_INDEX);

  return (
    <>
      <section style={{ background: "rgb(247, 252, 252)", padding: "72px 32px 56px", textAlign: "center" }}>
        <div style={{ maxWidth: "820px", margin: "0px auto" }}>
          <Eyebrow
            background="rgb(224, 250, 248)"
            color="rgb(13, 148, 136)"
            dotColor="rgb(20, 184, 166)"
            dotShadow="rgba(20, 184, 166, 0.13) 0px 0px 0px 3px, rgba(20, 184, 166, 0.73) 0px 0px 9px"
            marginBottom="20px"
          >
            WHITE LABEL SHOWCASE
          </Eyebrow>
          <h1 style={{ fontFamily: "\"Bricolage Grotesque\", sans-serif", fontWeight: "800", fontSize: "52px", lineHeight: "1.06", letterSpacing: "-2px", margin: "0px 0px 16px", color: "rgb(13, 21, 38)" }}>
            {"White Label "}
            <span style={{ backgroundImage: "linear-gradient(135deg, rgb(47, 84, 235) 0%, rgb(3, 162, 145) 25%, rgb(47, 84, 235) 50%, rgb(3, 162, 145) 75%, rgb(47, 84, 235) 100%)", backgroundSize: "200% 100%", backgroundClip: "text", WebkitTextFillColor: "transparent", color: "transparent", animation: "6s linear 0s infinite normal none running fl-grad" }}>
              Showcase
            </span>
          </h1>
          <p style={{ fontSize: "16px", lineHeight: "1.65", color: "rgb(75, 85, 99)", margin: "0px auto", maxWidth: "640px" }}>
            Explore how one production-ready Shopify application can be transformed into completely different client brands through simple branding configuration.
          </p>
        </div>
      </section>
      <section style={{ background: "rgb(247, 252, 252)", padding: "0px 32px 24px" }}>
        <div style={{ maxWidth: "1160px", margin: "0px auto", display: "flex", justifyContent: "center", gap: "12px", flexWrap: "wrap" }}>
          {BRAND_BUTTONS.map((b) => (
            <BrandDotButton key={b.label} dotColor={b.dotColor} label={b.label} active={b.active} />
          ))}
        </div>
      </section>
      <section style={{ background: "rgb(247, 252, 252)", padding: "32px 32px 88px" }}>
        <div style={{ maxWidth: "1160px", margin: "0px auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(288px, 1fr))", gap: "20px" }}>
            <PreviewCard
              headerLeft={
                <div style={{ display: "flex", alignItems: "center", gap: "9px" }}>
                  <div style={{ width: "26px", height: "26px", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", color: "rgb(255, 255, 255)", fontFamily: "\"Bricolage Grotesque\", sans-serif", fontWeight: "800", fontSize: "12px", transition: "background 0.4s", background: "rgb(20, 184, 166)" }}>
                    <span className="sc-interp">G</span>
                  </div>
                  <span style={{ display: "flex", alignItems: "center", lineHeight: "1", fontFamily: "\"Bricolage Grotesque\", sans-serif", fontWeight: "700", fontSize: "14px", transition: "color 0.4s", color: "rgb(20, 184, 166)" }}>
                    <span className="sc-interp">Brand Green</span>
                  </span>
                </div>
              }
              headerRight={
                <span style={{ fontSize: "9.5px", fontWeight: "600", letterSpacing: "0.6px", color: "rgb(156, 163, 175)" }}>DASHBOARD</span>
              }
            >
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "8px", marginBottom: "14px" }}>
                <div style={{ background: "rgb(249, 250, 251)", borderRadius: "9px", padding: "10px" }}>
                  <div style={{ fontSize: "8.5px", color: "rgb(107, 114, 128)", marginBottom: "3px" }}>Quotes</div>
                  <div style={{ fontFamily: "\"Bricolage Grotesque\", sans-serif", fontSize: "16px", fontWeight: "700", color: "rgb(13, 21, 38)" }}>39</div>
                </div>
                <div style={{ background: "rgb(249, 250, 251)", borderRadius: "9px", padding: "10px" }}>
                  <div style={{ fontSize: "8.5px", color: "rgb(107, 114, 128)", marginBottom: "3px" }}>Accepted</div>
                  <div style={{ fontFamily: "\"Bricolage Grotesque\", sans-serif", fontSize: "16px", fontWeight: "700", color: "rgb(13, 21, 38)" }}>12</div>
                </div>
                <div style={{ borderRadius: "9px", padding: "10px", transition: "background 0.4s", background: "rgb(224, 250, 248)" }}>
                  <div style={{ fontSize: "8.5px", marginBottom: "3px", transition: "color 0.4s", color: "rgb(20, 184, 166)" }}>Revenue</div>
                  <div style={{ fontFamily: "\"Bricolage Grotesque\", sans-serif", fontSize: "16px", fontWeight: "700", transition: "color 0.4s", color: "rgb(20, 184, 166)" }}>$4.2k</div>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "9px", padding: "8px 10px", borderRadius: "8px", fontSize: "11.5px", transition: "background 0.4s, color 0.4s", background: "rgb(224, 250, 248)", color: "rgb(20, 184, 166)" }}>
                  <span style={{ width: "6px", height: "6px", flex: "0 0 auto", borderRadius: "999px", transition: "background 0.4s", background: "rgb(20, 184, 166)" }} />
                  <span className="sc-interp">Quotes</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "9px", padding: "8px 10px", borderRadius: "8px", fontSize: "11.5px", transition: "background 0.4s, color 0.4s", background: "transparent", color: "rgb(107, 114, 128)" }}>
                  <span style={{ width: "6px", height: "6px", flex: "0 0 auto", borderRadius: "999px", transition: "background 0.4s", background: "rgb(209, 213, 219)" }} />
                  <span className="sc-interp">Products</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "9px", padding: "8px 10px", borderRadius: "8px", fontSize: "11.5px", transition: "background 0.4s, color 0.4s", background: "transparent", color: "rgb(107, 114, 128)" }}>
                  <span style={{ width: "6px", height: "6px", flex: "0 0 auto", borderRadius: "999px", transition: "background 0.4s", background: "rgb(209, 213, 219)" }} />
                  <span className="sc-interp">Customers</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "9px", padding: "8px 10px", borderRadius: "8px", fontSize: "11.5px", transition: "background 0.4s, color 0.4s", background: "transparent", color: "rgb(107, 114, 128)" }}>
                  <span style={{ width: "6px", height: "6px", flex: "0 0 auto", borderRadius: "999px", transition: "background 0.4s", background: "rgb(209, 213, 219)" }} />
                  <span className="sc-interp">Settings</span>
                </div>
              </div>
            </PreviewCard>
            <PreviewCard
              headerLeft={
                <span style={{ fontFamily: "\"Bricolage Grotesque\", sans-serif", fontWeight: "700", fontSize: "14px", color: "rgb(13, 21, 38)" }}>Storefront</span>
              }
              headerRight={
                <span style={{ fontSize: "9.5px", fontWeight: "600", padding: "4px 9px", borderRadius: "999px", transition: "0.4s", background: "rgb(224, 250, 248)", color: "rgb(20, 184, 166)" }}>LIVE</span>
              }
            >
              <div style={{ height: "74px", borderRadius: "10px", marginBottom: "14px", transition: "color 0.4s", background: "rgb(240, 250, 248)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "\"Bricolage Grotesque\", sans-serif", fontSize: "13px", fontWeight: "700", color: "rgb(20, 184, 166)" }}>
                Product Gallery
              </div>
              <div style={{ fontFamily: "\"Bricolage Grotesque\", sans-serif", fontSize: "15px", fontWeight: "700", color: "rgb(13, 21, 38)", marginBottom: "4px" }}>
                Merino Wool Jacket
              </div>
              <div style={{ fontSize: "11.5px", color: "rgb(107, 114, 128)", marginBottom: "14px" }}>
                Price hidden — request a quote
              </div>
              <button className="fl-wl-scp5 fl-wl-scp4" style={{ width: "100%", padding: "11px", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "none", borderRadius: "9px", color: "rgb(255, 255, 255)", fontFamily: "Geist, sans-serif", fontSize: "12.5px", fontWeight: "600", cursor: "pointer", transition: "transform 0.18s cubic-bezier(0.2, 0.8, 0.2, 1), background 0.4s", background: "rgb(20, 184, 166)" }}>
                Request a Quote →
              </button>
            </PreviewCard>
            <PreviewCard
              headerLeft={
                <span style={{ fontFamily: "\"Bricolage Grotesque\", sans-serif", fontWeight: "700", fontSize: "14px", color: "rgb(13, 21, 38)" }}>Email Preview</span>
              }
              headerRight={
                <span style={{ fontSize: "9.5px", fontWeight: "600", letterSpacing: "0.6px", color: "rgb(156, 163, 175)" }}>TRANSACTIONAL</span>
              }
            >
              <div style={{ border: "1px solid rgb(243, 244, 246)", borderRadius: "10px", overflow: "hidden" }}>
                <div style={{ padding: "14px", display: "flex", alignItems: "center", gap: "9px", transition: "background 0.4s", background: "rgb(20, 184, 166)" }}>
                  <div style={{ width: "22px", height: "22px", borderRadius: "6px", background: "rgba(255, 255, 255, 0.24)", display: "flex", alignItems: "center", justifyContent: "center", color: "rgb(255, 255, 255)", fontFamily: "\"Bricolage Grotesque\", sans-serif", fontWeight: "800", fontSize: "10px" }}>
                    <span className="sc-interp">G</span>
                  </div>
                  <span style={{ fontFamily: "\"Bricolage Grotesque\", sans-serif", fontWeight: "700", fontSize: "12.5px", color: "rgb(255, 255, 255)" }}>
                    <span className="sc-interp">Brand Green</span>
                  </span>
                </div>
                <div style={{ padding: "16px" }}>
                  <div style={{ fontFamily: "\"Bricolage Grotesque\", sans-serif", fontSize: "13.5px", fontWeight: "700", color: "rgb(13, 21, 38)", marginBottom: "6px" }}>
                    Your quote is ready
                  </div>
                  <div style={{ fontSize: "11.5px", lineHeight: "1.6", color: "rgb(107, 114, 128)", marginBottom: "14px" }}>
                    Hi Priya — your custom quote for 2 items is attached and valid for 14 days.
                  </div>
                  <div style={{ display: "inline-block", padding: "9px 16px", borderRadius: "8px", fontSize: "11.5px", fontWeight: "600", color: "rgb(255, 255, 255)", transition: "background 0.4s", background: "rgb(20, 184, 166)" }}>
                    View Quote
                  </div>
                </div>
                <div style={{ padding: "12px 16px", borderTop: "1px solid rgb(243, 244, 246)", fontSize: "10px", color: "rgb(107, 114, 128)" }}>
                  {"Sent by "}
                  <span className="sc-interp">quotes@brandgreen.com</span>
                </div>
              </div>
            </PreviewCard>
          </div>
        </div>
      </section>
      <section style={{ background: "rgb(255, 255, 255)", padding: "88px 32px" }}>
        <div style={{ maxWidth: "1160px", margin: "0px auto" }}>
          <div style={{ textAlign: "center", marginBottom: "44px" }}>
            <GradientHeading lead="Before " highlight="vs After" size={38} style={{ letterSpacing: "-1.3px" }} />
            <p style={{ fontSize: "15px", color: "rgb(107, 114, 128)", margin: "0px" }}>
              Two identities from one codebase — switch brands above to update the comparison.
            </p>
          </div>
          <div style={{ position: "relative", aspectRatio: "1024 / 640", borderRadius: "20px", overflow: "hidden", background: "rgb(249, 250, 251)", border: "1px solid rgb(229, 231, 235)", boxShadow: "rgba(13, 21, 38, 0.28) 0px 20px 46px -28px" }}>
            {COMPARE_TABS.map((tab, i) => {
              const active = i === activeIndex;
              return (
                <img
                  key={tab.shotSrc}
                  alt=""
                  data-shot={tab.shotSrc}
                  data-active={active}
                  src={tab.shotSrc}
                  style={{ position: "absolute", inset: "0px", width: "100%", height: "100%", objectFit: "contain", imageRendering: "-webkit-optimize-contrast", pointerEvents: active ? "auto" : "none", transform: active ? "translateX(0px)" : "translateX(24px)" }}
                />
              );
            })}
          </div>
          <div style={{ position: "relative", zIndex: "1", marginTop: "40px", display: "flex", flexWrap: "wrap", gap: "12px", alignItems: "stretch", paddingTop: "4px", paddingBottom: "4px" }}>
            {COMPARE_TABS.map((tab, i) => (
              <CompareToggleButton key={tab.label} icon={tab.icon} label={tab.label} active={i === activeIndex} onClick={() => setActiveIndex(i)} />
            ))}
          </div>
        </div>
      </section>
      <section style={{ background: "rgb(249, 250, 251)", padding: "88px 32px" }}>
        <div style={{ maxWidth: "1160px", margin: "0px auto" }}>
          <div style={{ textAlign: "center", marginBottom: "44px" }}>
            <Eyebrow
              background="rgb(240, 243, 255)"
              color="rgb(47, 84, 235)"
              dotColor="rgb(47, 84, 235)"
              dotShadow="rgba(47, 84, 235, 0.13) 0px 0px 0px 3px, rgba(47, 84, 235, 0.73) 0px 0px 9px"
            >
              CUSTOMIZABLE
            </Eyebrow>
            <GradientHeading lead="Everything That Can Be " highlight="Customized" size={38} style={{ letterSpacing: "-1.3px" }} />
            <p style={{ fontSize: "15px", color: "rgb(107, 114, 128)", margin: "0px auto", maxWidth: "620px", lineHeight: "1.6" }}>
              All branding elements can be customized through the white-label source code and configuration files without rebuilding the application.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(248px, 1fr))", gap: "20px" }}>
            {FEATURE_CARDS.map((card) => (
              <FeatureCard key={card.title} icon={card.icon} title={card.title} items={card.items} />
            ))}
          </div>
        </div>
      </section>
      <section style={{ background: "radial-gradient(120% 90% at 50% -10%, rgb(16, 36, 58) 0%, rgb(11, 21, 38) 45%, rgb(8, 15, 28) 100%)", padding: "88px 32px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: "0px", opacity: "0.5", backgroundImage: "linear-gradient(rgba(148, 163, 184, 0.055) 1px, transparent 1px), linear-gradient(90deg, rgba(148, 163, 184, 0.055) 1px, transparent 1px)", backgroundSize: "56px 56px", maskImage: "radial-gradient(75% 60% at 50% 30%, rgb(0, 0, 0) 0%, transparent 100%)" }} />
        <div style={{ position: "absolute", left: "50%", top: "-140px", width: "900px", height: "520px", transform: "translateX(-50%)", borderRadius: "999px", filter: "blur(70px)", background: "radial-gradient(rgba(20, 184, 166, 0.3) 0%, rgba(20, 184, 166, 0.12) 42%, transparent 72%)", animation: "11s ease-in-out 0s infinite normal none running fl-ambient" }} />
        <div style={{ position: "relative", maxWidth: "1100px", margin: "0px auto" }}>
          <div style={{ textAlign: "center", marginBottom: "44px" }}>
            <Eyebrow
              background="rgba(20, 184, 166, 0.14)"
              color="rgb(20, 184, 166)"
              dotColor="rgb(20, 184, 166)"
              dotShadow="rgba(20, 184, 166, 0.13) 0px 0px 0px 3px, rgba(20, 184, 166, 0.73) 0px 0px 9px"
            >
              CONFIGURATION FILES
            </Eyebrow>
            <GradientHeading lead="Branding Lives in " highlight="Config, Not Code" size={38} color="rgb(255, 255, 255)" style={{ letterSpacing: "-1.3px" }} />
            <p style={{ fontSize: "15px", color: "rgb(156, 163, 175)", margin: "0px auto", maxWidth: "600px", lineHeight: "1.6" }}>
              Configure branding without touching core application logic.
            </p>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", alignItems: "stretch" }}>
            <div style={{ flex: "0 1 220px", display: "flex", flexDirection: "column", gap: "8px" }}>
              {CONFIG_FILES.map((file) => (
                <ConfigFileButton key={file.label} label={file.label} active={file.active} />
              ))}
            </div>
            <div style={{ flex: "1 1 340px", minWidth: "0px", background: "rgb(10, 15, 30)", border: "1px solid rgb(31, 41, 55)", borderRadius: "16px", padding: "24px", fontFamily: "ui-monospace, Menlo, monospace", fontSize: "12px", lineHeight: "2", minHeight: "260px" }}>
              <div style={{ fontFamily: "Geist, sans-serif", fontSize: "11px", fontWeight: "600", letterSpacing: "0.8px", color: "rgb(107, 114, 128)", marginBottom: "14px" }}>
                <span className="sc-interp">COLORS.JSON</span>
              </div>
              {COLORS_JSON_LINES.map((line, i) => (
                <CodeLine key={i} text={line.text} color={line.color} />
              ))}
            </div>
          </div>
        </div>
      </section>
      <section style={{ background: "linear-gradient(120deg, rgb(3, 162, 145), rgb(47, 84, 235))", padding: "0px 32px" }}>
        <div style={{ maxWidth: "1160px", margin: "0px auto", padding: "56px 0px", textAlign: "center" }}>
          <h2 style={{ fontFamily: "\"Bricolage Grotesque\", sans-serif", fontWeight: "800", fontSize: "34px", letterSpacing: "-1.2px", margin: "0px 0px 12px", color: "rgb(255, 255, 255)" }}>
            Ship your first client brand this week.
          </h2>
          <p style={{ fontSize: "15px", color: "rgba(255, 255, 255, 0.82)", margin: "0px 0px 28px" }}>
            One licence, full source access, complete branding control.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="/checkout" className="fl-wl-scp9 fl-wl-scp4" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", padding: "16px 32px", borderRadius: "999px", background: "rgb(255, 255, 255)", color: "rgb(13, 21, 38)", fontSize: "16px", fontWeight: "600", transition: "transform 0.18s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.18s" }}>
              {"Buy Source Code "}
              <span>→</span>
            </a>
            <a href="/contact#contact-form" className="fl-wl-scpa fl-wl-scp4" style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "15px 28px", borderRadius: "999px", background: "transparent", border: "1px solid rgba(255, 255, 255, 0.5)", color: "rgb(255, 255, 255)", fontSize: "14.5px", fontWeight: "600", transition: "0.18s" }}>
              Contact Sales
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
