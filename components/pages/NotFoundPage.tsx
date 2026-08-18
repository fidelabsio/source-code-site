export default function NotFoundPage() {
  return (
    <>
      <section style={{ background: "rgb(247, 252, 252)", padding: "96px 32px 112px", borderBottom: "1px solid rgb(238, 242, 242)" }}>
        <div style={{ maxWidth: "720px", margin: "0px auto", textAlign: "center" }}>
          <div style={{ position: "relative", width: "150px", height: "150px", margin: "0px auto 34px", animation: "6s ease-in-out 0s infinite normal none running fl-float" }}>
            <div style={{ position: "absolute", inset: "-46px", borderRadius: "999px", background: "radial-gradient(circle, rgb(254, 242, 242) 0%, rgba(254, 242, 242, 0) 68%)", animation: "5s ease-in-out 0s infinite normal none running fl-glow", pointerEvents: "none" }} />
            <div style={{ position: "absolute", inset: "0px", borderRadius: "38px", background: "linear-gradient(135deg, rgb(254, 242, 242), rgb(247, 252, 252))", opacity: "0.9" }} />
            <div style={{ position: "absolute", inset: "-12px", borderRadius: "46px", border: "1.5px dashed rgb(220, 38, 38)", opacity: "0.34", animation: "14s linear 0s infinite normal none running fl-spin" }} />
            <div style={{ position: "absolute", inset: "0px", display: "flex", alignItems: "center", justifyContent: "center", color: "rgb(220, 38, 38)" }}>
              <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" />
                <path d="m21 21-4.3-4.3" />
                <path d="M8.5 11h5" />
              </svg>
            </div>
          </div>
          <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "6px 14px", borderRadius: "999px", background: "rgb(254, 242, 242)", color: "rgb(220, 38, 38)", fontSize: "12px", fontWeight: "600", letterSpacing: "0.8px", marginBottom: "20px", animation: "0.5s ease-out 0s 1 normal both running fl-rise" }}>
            <span style={{ width: "7px", height: "7px", flex: "0 0 auto", borderRadius: "999px", background: "rgb(220, 38, 38)", boxShadow: "rgba(220, 38, 38, 0.12) 0px 0px 0px 3px, rgba(220, 38, 38, 0.6) 0px 0px 9px", animation: "2.4s ease-in-out 0s infinite normal none running fl-dot" }} />
            404 ERROR
          </span>
          <h1 style={{ fontFamily: "\"Bricolage Grotesque\", sans-serif", fontWeight: "800", fontSize: "46px", lineHeight: "1.08", letterSpacing: "-1.8px", margin: "0px 0px 16px", color: "rgb(13, 21, 38)", textWrap: "pretty" }}>
            {"Page "}
            <span style={{ color: "rgb(220, 38, 38)" }}>
              not found
            </span>
          </h1>
          <p style={{ fontSize: "16px", lineHeight: "1.7", color: "rgb(107, 114, 128)", margin: "0px auto 34px", maxWidth: "520px" }}>
            The page you’re looking for doesn’t exist, may have been moved, or the URL may be incorrect.
          </p>
          <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="/" className="fl-nf-scp3 fl-nf-scp4" style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "15px 28px", borderRadius: "999px", background: "linear-gradient(135deg, rgb(3, 162, 145), rgb(47, 84, 235))", color: "rgb(255, 255, 255)", fontSize: "14.5px", fontWeight: "600", boxShadow: "rgba(47, 84, 235, 0.24) 0px 4px 14px", transition: "transform 0.18s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.18s, background 0.18s" }}>
              {"Return Home "}
              <span>
                →
              </span>
            </a>
            <a href="/documentation" className="fl-nf-scp5 fl-nf-scp4" style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "15px 28px", borderRadius: "999px", background: "rgb(255, 255, 255)", border: "1px solid rgb(209, 213, 219)", color: "rgb(31, 41, 55)", fontSize: "14.5px", fontWeight: "600", transition: "0.18s" }}>
              Browse Documentation
            </a>
          </div>
        </div>
      </section>
      <section style={{ background: "rgb(255, 255, 255)", padding: "56px 32px 72px" }}>
        <div style={{ maxWidth: "1160px", margin: "0px auto" }}>
          <div style={{ background: "rgb(255, 255, 255)", border: "1px solid rgb(229, 231, 235)", borderRadius: "16px", padding: "32px", display: "flex", gap: "28px", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", boxShadow: "rgba(15, 23, 42, 0.08) 0px 18px 40px, rgba(15, 23, 42, 0.04) 0px 8px 18px" }}>
            <div>
              <h2 style={{ fontFamily: "\"Bricolage Grotesque\", sans-serif", fontWeight: "800", fontSize: "24px", letterSpacing: "-0.9px", margin: "0px 0px 8px", color: "rgb(13, 21, 38)" }}>
                Looking for something specific?
              </h2>
              <p style={{ fontSize: "14.5px", lineHeight: "1.65", color: "rgb(107, 114, 128)", margin: "0px", maxWidth: "540px" }}>
                The documentation covers setup, branding, and deployment. Support has the most-opened guides, and we answer email within one business day.
              </p>
            </div>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a href="/contact#contact-form" className="fl-nf-scp3 fl-nf-scp4" style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "15px 28px", borderRadius: "999px", background: "linear-gradient(135deg, rgb(3, 162, 145), rgb(47, 84, 235))", color: "rgb(255, 255, 255)", fontSize: "14.5px", fontWeight: "600", boxShadow: "rgba(47, 84, 235, 0.24) 0px 4px 14px", transition: "transform 0.18s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.18s, background 0.18s" }}>
                Contact Us
              </a>
              <a href="/support" className="fl-nf-scp5 fl-nf-scp4" style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "15px 28px", borderRadius: "999px", background: "rgb(255, 255, 255)", border: "1px solid rgb(209, 213, 219)", color: "rgb(31, 41, 55)", fontSize: "14.5px", fontWeight: "600", transition: "0.18s" }}>
                Support
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
