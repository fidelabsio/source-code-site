import type { ReactNode } from "react";

export default function ChooseCard({
  icon,
  title,
  description,
}: {
  icon: ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="fl-fd-scp8" style={{ flex: "0 1 auto", width: "calc(25% - 15px)", minWidth: "250px", background: "rgb(255, 255, 255)", border: "1px solid rgb(229, 231, 235)", borderRadius: "16px", padding: "28px", transition: "transform 0.28s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.28s, border-color 0.28s" }}>
      <div style={{ width: "38px", height: "38px", borderRadius: "11px", background: "rgb(224, 250, 248)", display: "flex", alignItems: "center", justifyContent: "center", color: "rgb(13, 148, 136)", marginBottom: "18px" }}>
        {icon}
      </div>
      <h3 style={{ fontFamily: "\"Bricolage Grotesque\", sans-serif", fontSize: "16px", fontWeight: "700", margin: "0px 0px 8px", color: "rgb(13, 21, 38)" }}>
        <span className="sc-interp">
          {title}
        </span>
      </h3>
      <p style={{ fontSize: "13px", lineHeight: "1.6", color: "rgb(107, 114, 128)", margin: "0px" }}>
        <span className="sc-interp">
          {description}
        </span>
      </p>
    </div>
  );
}
