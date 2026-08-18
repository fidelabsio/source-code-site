"use client";

import { useRef, type ReactNode } from "react";
import { useFlipOnHover } from "@/hooks/useFlipOnHover";

export default function FlipVideoCard({
  icon,
  title,
  description,
  videoSrc,
}: {
  icon: ReactNode;
  title: string;
  description: string;
  videoSrc: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { flipped, onMouseEnter, onMouseLeave } = useFlipOnHover(videoRef);

  return (
    <div style={{ height: "216px", perspective: "1000px", cursor: "pointer" }} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <div style={{ position: "relative", width: "100%", height: "100%", transformStyle: "preserve-3d", transition: "transform 0.52s cubic-bezier(0.45, 0.05, 0.55, 0.95)", transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)" }}>
        <div style={{ position: "absolute", inset: "0px", backfaceVisibility: "hidden", background: "rgb(249, 250, 251)", border: "1px solid rgb(229, 231, 235)", borderRadius: "12px", padding: "24px", display: "flex", flexDirection: "column" }}>
          <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: "linear-gradient(135deg, rgb(224, 250, 248), rgb(240, 243, 255))", display: "flex", alignItems: "center", justifyContent: "center", color: "rgb(47, 84, 235)", marginBottom: "16px" }}>
            {icon}
          </div>
          <h3 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: "16px", fontWeight: "700", margin: "0px 0px 6px", color: "rgb(13, 21, 38)" }}>
            <span className="sc-interp">{title}</span>
          </h3>
          <p style={{ fontSize: "12.5px", lineHeight: "1.6", color: "rgb(107, 114, 128)", margin: "0px" }}>
            <span className="sc-interp">{description}</span>
          </p>
          <div style={{ marginTop: "auto", fontSize: "10.5px", fontWeight: "600", letterSpacing: "0.6px", color: "rgb(156, 163, 175)" }}>
            HOVER TO PREVIEW →
          </div>
        </div>
        <div style={{ position: "absolute", inset: "0px", backfaceVisibility: "hidden", transform: "rotateY(180deg)", borderRadius: "12px", overflow: "hidden", background: "rgb(13, 21, 38)", border: "1px solid rgb(206, 255, 251)", boxShadow: "rgba(13, 148, 136, 0.4) 0px 16px 32px -18px" }}>
          <video ref={videoRef} autoPlay muted data-vsrc={videoSrc} loop playsInline preload="none" src={videoSrc} style={{ display: "block", width: "100%", height: "100%", objectFit: "cover" }} />
          <div style={{ position: "absolute", left: "0px", right: "0px", bottom: "0px", padding: "10px 14px", background: "linear-gradient(transparent, rgba(10, 15, 30, 0.92))", fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: "13px", fontWeight: "700", color: "rgb(255, 255, 255)" }}>
            <span className="sc-interp">{title}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
