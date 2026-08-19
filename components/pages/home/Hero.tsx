import IconTile from "@/components/ui/IconTile";
import GradientButton from "@/components/ui/GradientButton";

const HIGHLIGHTS = [
  {
    label: "Reusable Codebase",
    icon: (
      <>
        <path d="m16 18 6-6-6-6" />
        <path d="m8 6-6 6 6 6" />
      </>
    ),
  },
  {
    label: "White-Label Ready",
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
    label: "Developer Documentation",
    icon: (
      <>
        <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
        <path d="M15 2v5h5" />
        <path d="m9.5 12.5-1.5 1.5 1.5 1.5" />
        <path d="m13.5 12.5 1.5 1.5-1.5 1.5" />
      </>
    ),
  },
];

const TRUST_BADGES = ["Production Ready", "White-Label", "Easy Deployment", "Fast Delivery", "Secure & Scalable"];

export default function Hero() {
  return (
    <section data-hero="1" style={{ position: "relative", background: "rgb(247, 252, 252)", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: "0px", backgroundImage: "url(\"https://res.cloudinary.com/dgjd6jpof/image/upload/f_auto,q_auto/v1787150875/source-code-site/index-asset-3.png\")", backgroundSize: "cover", backgroundPosition: "center center" }} />
      <div style={{ position: "relative", maxWidth: "1240px", margin: "0px auto", padding: "56px 32px 24px", display: "grid", gridTemplateColumns: "minmax(400px, 470px) minmax(0px, 1fr)", gap: "48px", alignItems: "center" }}>
        <div>
          <h1 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "800", fontSize: "56px", lineHeight: "1.02", letterSpacing: "-2.4px", margin: "0px 0px 24px", color: "rgb(13, 21, 38)", textWrap: "balance" }}>
            {"One Codebase for Your Brand "}
            <span style={{ backgroundImage: "linear-gradient(135deg, rgb(47, 84, 235) 0%, rgb(3, 162, 145) 25%, rgb(47, 84, 235) 50%, rgb(3, 162, 145) 75%, rgb(47, 84, 235) 100%)", backgroundSize: "200% 100%", backgroundClip: "text", WebkitTextFillColor: "transparent", color: "transparent", animation: "6s linear 0s infinite normal none running fl-grad" }}>
              and Every Client Brand.
            </span>
          </h1>
          <p style={{ fontSize: "16px", lineHeight: "1.6", color: "rgb(75, 85, 99)", margin: "0px 0px 32px", maxWidth: "420px" }}>
            Launch your own Shopify app or deliver white-label solutions — everything starts with one production-ready codebase.
          </p>
          <div style={{ display: "flex", gap: "24px", marginBottom: "40px", flexWrap: "nowrap", alignItems: "center" }}>
            {HIGHLIGHTS.map((h) => (
              <div key={h.label} style={{ display: "flex", alignItems: "center", gap: "10px", flex: "1 1 0%", minWidth: "0px" }}>
                <IconTile size={36} radius={10}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    {h.icon}
                  </svg>
                </IconTile>
                <span style={{ fontSize: "13px", fontWeight: "500", lineHeight: "1.35", color: "rgb(55, 65, 81)" }}>
                  {h.label}
                </span>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", gap: "16px", alignItems: "center", flexWrap: "wrap" }}>
            <GradientButton href="/checkout" className="fl-ix-scp4 fl-ix-scp5">
              {"Get Source Code "}
              <span style={{ fontSize: "16px" }}>→</span>
            </GradientButton>
            <a href="/documentation?doc=video-tutorials" className="fl-ix-scp6 fl-ix-scp5" style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "16px 28px", borderRadius: "999px", background: "rgb(255, 255, 255)", border: "1px solid rgb(209, 213, 219)", color: "rgb(31, 41, 55)", fontSize: "16px", fontWeight: "600", transition: "0.18s" }}>
              <span style={{ fontSize: "11px" }}>▶</span>
              {" Watch Demo"}
            </a>
          </div>
        </div>
        <div style={{ position: "relative", padding: "24px 0px 0px", animation: "7s ease-in-out 0s infinite normal none running fl-heroFloat" }}>
          <img src="https://res.cloudinary.com/dgjd6jpof/image/upload/f_auto,q_auto/v1787150890/source-code-site/index-asset-2.png" alt="Fide Labs dashboard with three client brands rebranded from one config file" style={{ display: "block", width: "100%", minWidth: "0px", maxWidth: "720px", height: "auto", marginLeft: "auto" }} />
        </div>
      </div>
      <div style={{ position: "relative", maxWidth: "1240px", margin: "0px auto", padding: "8px 32px 40px", display: "flex", flexWrap: "wrap", gap: "52px", justifyContent: "flex-start" }}>
        {TRUST_BADGES.map((label) => (
          <div key={label} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ width: "18px", height: "18px", flex: "0 0 auto", borderRadius: "999px", background: "rgb(20, 184, 166)", color: "rgb(255, 255, 255)", fontSize: "10px", display: "flex", alignItems: "center", justifyContent: "center" }}>
              ✓
            </span>
            <span style={{ fontSize: "13px", fontWeight: "500", color: "rgb(55, 65, 81)" }}>
              <span className="sc-interp">{label}</span>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
