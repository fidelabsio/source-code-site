"use client";

import { useEffect, useState } from "react";

interface VideoModalButtonProps {
  videoUrl: string;
  title: string;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

export default function VideoModalButton({ videoUrl, title, className, style, children }: VideoModalButtonProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className={className} style={{ ...style, cursor: "pointer" }}>
        {children}
      </button>
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={title}
          onClick={() => setOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(13, 21, 38, 0.8)",
            zIndex: 1000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "24px",
          }}
        >
          <div onClick={(e) => e.stopPropagation()} style={{ position: "relative", width: "100%", maxWidth: "900px" }}>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close video"
              style={{
                position: "absolute",
                top: "-44px",
                right: 0,
                width: "36px",
                height: "36px",
                borderRadius: "999px",
                border: "none",
                background: "rgba(255, 255, 255, 0.15)",
                color: "#ffffff",
                fontSize: "20px",
                lineHeight: 1,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              ×
            </button>
            <div style={{ position: "relative", width: "100%", paddingTop: "56.25%", borderRadius: "12px", overflow: "hidden", background: "#000000" }}>
              <iframe
                src={videoUrl}
                title={title}
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0 }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
