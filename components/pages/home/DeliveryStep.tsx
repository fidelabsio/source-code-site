import type { ReactNode } from "react";
import type { TimelineStepState } from "@/hooks/useTimelineAnimation";

export default function DeliveryStep({
  stepNumber,
  icon,
  title,
  description,
  badgePosition,
  showConnector,
  state,
}: {
  stepNumber: number;
  icon: ReactNode;
  title: string;
  description: string;
  badgePosition: "left" | "right";
  showConnector: boolean;
  state: TimelineStepState;
}) {
  const badgeStyle =
    badgePosition === "left"
      ? { top: "-20px", left: "228px", justifyContent: "flex-start" as const }
      : { top: "-13px", right: "1px" };

  const badgeColors = state.running
    ? { background: "#FEF2F2", color: "#DC2626", borderColor: "#FECACA" }
    : { background: "#F0FDF4", color: "#16A34A", borderColor: "#BBF7D0" };

  return (
    <div className="fl-ix-scpe" style={{ position: "relative", flex: "0 1 auto", width: "calc(33.3333% - 40px)", minWidth: "230px", background: "rgb(255, 255, 255)", borderRadius: "16px", padding: "24px", transition: "transform 0.26s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.26s, border-color 0.26s", borderWidth: "1px", borderStyle: "solid", borderColor: state.done ? "#14B8A6" : "#E5E7EB", transform: state.active ? "translateY(-4px)" : "translateY(0px)", boxShadow: state.active ? "0 16px 32px -18px rgba(13,21,38,.2)" : "none" }}>
      <div style={{ position: "absolute", zIndex: "2", display: "flex", alignItems: "center", gap: "6px", padding: "5px 11px", borderRadius: "999px", fontSize: "11.5px", fontWeight: "700", letterSpacing: "0.2px", whiteSpace: "nowrap", transition: "opacity 0.26s, transform 0.26s cubic-bezier(0.2, 0.8, 0.2, 1)", ...badgeColors, opacity: state.pending ? "0" : "1", transform: state.pending ? "translateY(6px) scale(0.9)" : "translateY(0) scale(1)", ...badgeStyle }}>
        {state.running ? (
          <span style={{ width: "10px", height: "10px", flex: "none", borderRadius: "999px", border: "2px solid rgba(220,38,38,.28)", borderTopColor: "#DC2626", animation: "fl-spin .7s linear infinite", display: "block" }} />
        ) : (
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="m20 6-11 11-5-5" />
          </svg>
        )}
        <span className="sc-interp">{state.pending ? "" : state.label}</span>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "11px", marginBottom: "14px" }}>
        <div style={{ width: "36px", height: "36px", flex: "0 0 auto", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", transition: "background 0.3s, color 0.3s", background: "rgb(243, 244, 246)", color: "rgb(156, 163, 175)" }}>
          {icon}
        </div>
        <span style={{ fontSize: "11px", fontWeight: "700", letterSpacing: "0.6px", color: "rgb(156, 163, 175)" }}>
          <span className="sc-interp">{`STEP ${stepNumber}`}</span>
        </span>
      </div>
      <h3 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: "16px", fontWeight: "700", margin: "0px 0px 7px", color: "rgb(13, 21, 38)" }}>
        <span className="sc-interp">{title}</span>
      </h3>
      <p style={{ fontSize: "13px", lineHeight: "1.6", color: "rgb(107, 114, 128)", margin: "0px" }}>
        <span className="sc-interp">{description}</span>
      </p>
      <div style={{ position: "absolute", top: "50%", right: "-60px", width: "60px", height: "2px", marginTop: "-1px", borderRadius: "2px", backgroundImage: "linear-gradient(90deg, rgb(13, 148, 136) 50%, rgb(229, 231, 235) 50%)", backgroundSize: "200% 100%", transition: "background-position 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)", backgroundPosition: state.done ? "0px 0px" : "100% 0px", display: showConnector ? undefined : "none" }}>
        <span style={{ position: "absolute", right: "-1px", top: "50%", width: "6px", height: "6px", marginTop: "-3px", borderTop: "2px solid rgb(229, 231, 235)", borderRight: "2px solid rgb(229, 231, 235)", transform: "rotate(45deg)", transition: "border-color 0.6s", borderColor: state.done ? "#0D9488" : "#E5E7EB" }} />
      </div>
    </div>
  );
}
