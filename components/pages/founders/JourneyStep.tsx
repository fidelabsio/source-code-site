import type { TimelineStepState } from "@/hooks/useTimelineAnimation";

export default function JourneyStep({
  stepNumber,
  title,
  description,
  timeText,
  showConnector,
  state,
}: {
  stepNumber: string;
  title: string;
  description: string;
  timeText: string;
  showConnector: boolean;
  state: TimelineStepState;
}) {
  const badgeColors = state.running
    ? { background: "#FEF2F2", color: "#DC2626", borderColor: "#FECACA" }
    : { background: "#F0FDF4", color: "#16A34A", borderColor: "#BBF7D0" };

  return (
    <div className="fl-fd-scp7" style={{ position: "relative", flex: "0 1 auto", width: "calc(33.3333% - 40px)", minWidth: "230px", display: "flex", flexDirection: "column", background: "rgb(249, 250, 251)", borderRadius: "16px", padding: "16px", transition: "transform 0.26s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.26s, border-color 0.26s", borderWidth: "1px", borderStyle: "solid", borderColor: state.done ? "#14B8A6" : "#E5E7EB", transform: state.active ? "translateY(-4px)" : "translateY(0px)", boxShadow: state.active ? "0 16px 32px -18px rgba(13,21,38,.2)" : "none" }}>
      <div style={{ position: "absolute", top: "-13px", right: "12px", zIndex: "2", display: "flex", alignItems: "center", gap: "6px", padding: "5px 11px", borderRadius: "999px", fontSize: "11.5px", fontWeight: "700", letterSpacing: "0.2px", whiteSpace: "nowrap", transition: "opacity 0.26s, transform 0.26s cubic-bezier(0.2, 0.8, 0.2, 1)", ...badgeColors, opacity: state.pending ? "0" : "1", transform: state.pending ? "translateY(6px) scale(0.9)" : "translateY(0) scale(1)" }}>
        {state.running ? (
          <span style={{ width: "10px", height: "10px", flex: "none", borderRadius: "999px", border: "2px solid rgba(220,38,38,.28)", borderTopColor: "#DC2626", animation: "fl-spin .7s linear infinite", display: "block" }} />
        ) : (
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m20 6-11 11-5-5" />
          </svg>
        )}
        <span className="sc-interp">{state.pending ? "" : state.label}</span>
      </div>
      <div style={{ position: "relative", width: "52px", height: "52px", marginBottom: "18px" }}>
        <div style={{ position: "absolute", inset: "0px", borderRadius: "14px", border: "1.5px dashed rgba(20, 184, 166, 0.55)", animation: state.pending ? "none" : "fl-spin 9s linear infinite" }} />
        <div style={{ position: "absolute", inset: "0px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", lineHeight: "1" }}>
          <span style={{ fontSize: "8px", fontWeight: "700", letterSpacing: "0.6px", color: "rgb(156, 163, 175)", marginBottom: "2px" }}>
            STEP
          </span>
          <span style={{ fontFamily: "\"Bricolage Grotesque\", sans-serif", fontWeight: "700", fontSize: "15px", color: "rgb(13, 148, 136)" }}>
            <span className="sc-interp">
              {stepNumber}
            </span>
          </span>
        </div>
      </div>
      <h3 style={{ fontFamily: "\"Bricolage Grotesque\", sans-serif", fontSize: "20px", fontWeight: "700", margin: "0px 0px 8px", color: "rgb(13, 21, 38)" }}>
        <span className="sc-interp">
          {title}
        </span>
      </h3>
      <p style={{ fontSize: "14px", lineHeight: "1.6", color: "rgb(107, 114, 128)", margin: "0px 0px 16px", flex: "1 1 0%" }}>
        <span className="sc-interp">
          {description}
        </span>
      </p>
      <div style={{ fontSize: "11.5px", fontWeight: "600", color: "rgb(13, 148, 136)", paddingTop: "14px", borderTop: "1px solid rgb(229, 231, 235)" }}>
        <span className="sc-interp">
          {timeText}
        </span>
      </div>
      <div style={{ position: "absolute", top: "50%", right: "-60px", width: "60px", height: "2px", marginTop: "-1px", borderRadius: "2px", backgroundImage: "linear-gradient(90deg, rgb(13, 148, 136) 50%, rgb(229, 231, 235) 50%)", backgroundSize: "200% 100%", transition: "background-position 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)", backgroundPosition: state.done ? "0px 0px" : "100% 0px", display: showConnector ? undefined : "none" }}>
        <span style={{ position: "absolute", right: "-1px", top: "50%", width: "6px", height: "6px", marginTop: "-3px", borderTop: "2px solid rgb(229, 231, 235)", borderRight: "2px solid rgb(229, 231, 235)", transform: "rotate(45deg)", transition: "border-color 0.6s", borderColor: state.done ? "#0D9488" : "#E5E7EB" }} />
      </div>
    </div>
  );
}
