export default function FinalCtaSection() {
  return (
    <section style={{ background: "linear-gradient(120deg, rgb(3, 162, 145), rgb(47, 84, 235))", padding: "0px 32px" }}>
      <div style={{ maxWidth: "1160px", margin: "0px auto", padding: "36px 0px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "32px", flexWrap: "wrap" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: "24px", fontWeight: "800", letterSpacing: "-0.8px", color: "rgb(255, 255, 255)" }}>
            Ship your first client brand this week.
          </span>
          <span style={{ fontSize: "14px", color: "rgba(255, 255, 255, 0.8)" }}>
            <span className="sc-interp">one-time USD 599</span>
            {" · unlimited brands · full source"}
          </span>
        </div>
        <a href="/checkout" className="fl-ix-scpd fl-ix-scp5" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", padding: "16px 32px", borderRadius: "999px", background: "rgb(255, 255, 255)", color: "rgb(13, 21, 38)", fontSize: "16px", fontWeight: "600", transition: "transform 0.18s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.18s" }}>
          {"Buy Source Code "}
          <span>→</span>
        </a>
      </div>
    </section>
  );
}
