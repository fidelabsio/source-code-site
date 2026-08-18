import type { ReactNode } from "react";

export default function CompareToggleButton({
  icon,
  label,
  active,
  onClick,
}: {
  icon: ReactNode;
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="fl-wl-scp6"
      style={{
        flex: "1 1 220px",
        minWidth: "220px",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
        padding: "13px 20px",
        borderRadius: "12px",
        background: active ? "rgb(240, 253, 250)" : "rgb(255, 255, 255)",
        border: active ? "1px solid rgb(20, 184, 166)" : "1px solid rgb(229, 231, 235)",
        cursor: "pointer",
        fontFamily: "Geist, system-ui, sans-serif",
        textAlign: "left",
        transition: "background 0.3s cubic-bezier(0.2, 0.8, 0.2, 1), border-color 0.3s, transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1)",
        transform: active ? "translateY(-2px)" : "translateY(0px)",
      }}
    >
      <span
        style={{
          width: "34px",
          height: "34px",
          flex: "0 0 auto",
          borderRadius: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "background 0.3s, color 0.3s",
          background: active ? "rgb(206, 255, 251)" : "rgb(243, 244, 246)",
          color: active ? "rgb(13, 148, 136)" : "rgb(156, 163, 175)",
        }}
      >
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          {icon}
        </svg>
      </span>
      <span
        style={{
          fontSize: "13.5px",
          fontWeight: "600",
          whiteSpace: "nowrap",
          transition: "color 0.3s",
          color: active ? "rgb(13, 148, 136)" : "rgb(75, 85, 99)",
        }}
      >
        <span className="sc-interp">{label}</span>
      </span>
      <span
        style={{
          position: "absolute",
          left: "20px",
          right: "20px",
          bottom: "6px",
          height: "2px",
          borderRadius: "2px",
          transition: "transform 0.35s cubic-bezier(0.2, 0.8, 0.2, 1), opacity 0.3s",
          transform: active ? "scaleX(1)" : "scaleX(0)",
          opacity: active ? "1" : "0",
          background: "linear-gradient(90deg, rgb(47, 84, 235), rgb(3, 162, 145))",
        }}
      />
    </button>
  );
}
