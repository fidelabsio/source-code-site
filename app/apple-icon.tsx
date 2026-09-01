import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #2F54EB 0%, #03A291 100%)",
          color: "#FFFFFF",
          fontFamily: "sans-serif",
          fontWeight: 800,
          fontSize: 88,
          letterSpacing: -4,
        }}
      >
        FL
      </div>
    ),
    { ...size }
  );
}
