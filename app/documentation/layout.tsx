import type { ReactNode } from "react";
import DocSidebar from "@/components/pages/documentation/DocSidebar";

export default function DocumentationLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <section style={{ background: "rgb(247, 252, 252)", padding: "64px 32px 48px", borderBottom: "1px solid rgb(238, 242, 242)" }}>
        <div style={{ maxWidth: "820px", margin: "0px auto", textAlign: "center" }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "6px 14px", borderRadius: "999px", background: "rgb(224, 250, 248)", color: "rgb(13, 148, 136)", fontSize: "11px", fontWeight: "600", letterSpacing: "0.8px", marginBottom: "18px" }}>
            <span style={{ width: "7px", height: "7px", flex: "0 0 auto", borderRadius: "999px", background: "rgb(20, 184, 166)", boxShadow: "rgba(20, 184, 166, 0.13) 0px 0px 0px 3px, rgba(20, 184, 166, 0.73) 0px 0px 9px", animation: "2.4s ease-in-out 0s infinite normal none running fl-dot" }} />
            DOCUMENTATION
          </span>
          <h1 style={{ fontFamily: "\"Bricolage Grotesque\", sans-serif", fontWeight: "800", fontSize: "44px", lineHeight: "1.08", letterSpacing: "-1.7px", margin: "0px auto 14px", color: "rgb(13, 21, 38)", maxWidth: "760px" }}>
            {"Everything, "}
            <span style={{ backgroundImage: "linear-gradient(135deg, rgb(47, 84, 235) 0%, rgb(3, 162, 145) 25%, rgb(47, 84, 235) 50%, rgb(3, 162, 145) 75%, rgb(47, 84, 235) 100%)", backgroundSize: "200% 100%", backgroundClip: "text", WebkitTextFillColor: "transparent", color: "transparent", animation: "6s linear 0s infinite normal none running fl-grad" }}>
              Documented
            </span>
          </h1>
          <p style={{ fontSize: "16px", lineHeight: "1.65", color: "rgb(107, 114, 128)", margin: "0px auto", maxWidth: "620px" }}>
            A developer-first portal for installing, configuring, rebranding, and shipping the codebase.
          </p>
        </div>
      </section>
      <section style={{ background: "rgb(255, 255, 255)", padding: "0px 32px 72px" }}>
        <div style={{ maxWidth: "1280px", margin: "0px auto", display: "flex", flexWrap: "wrap", gap: "36px", alignItems: "flex-start" }}>
          <DocSidebar />
          {children}
        </div>
      </section>
    </>
  );
}
