import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 7,
          background: "linear-gradient(135deg, #2F54EB 0%, #03A291 100%)",
          color: "#FFFFFF",
          fontFamily: "sans-serif",
          fontWeight: 800,
          fontSize: 18,
          letterSpacing: -1,
        }}
      >
        FL
      </div>
    ),
    { ...size }
  );
}
