import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
          background: "#0D1526",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 64,
            height: 64,
            borderRadius: 14,
            background: "linear-gradient(135deg, #2F54EB 0%, #03A291 100%)",
            color: "#FFFFFF",
            fontWeight: 800,
            fontSize: 28,
            marginBottom: 40,
          }}
        >
          FL
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 60,
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: -2,
            color: "#FFFFFF",
            maxWidth: 980,
          }}
        >
          One Codebase for Your Brand and Every Client Brand
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 28,
            color: "#9CA8BC",
            maxWidth: 900,
          }}
        >
          Production-ready Shopify app source code — Fide Labs
        </div>
      </div>
    ),
    { ...size }
  );
}
