// iOS home-screen icon. iOS rounds the corners itself (and paints transparent
// corners black), so this one is a full-bleed square.
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
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)",
        }}
      >
        <svg width={100} height={100} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style={{ marginTop: 4 }}>
          <g fill="none" stroke="#ffffff" strokeWidth={12} strokeLinecap="round" strokeLinejoin="round">
            <circle cx="50" cy="22" r="9" fill="#ffffff" stroke="none" />
        <path d="M47 40 L 53 40 L 58 82 Q 50 88 42 82 Z" fill="#ffffff" stroke="#ffffff" strokeWidth={4} />
          </g>
        </svg>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 2,
            padding: "2px 14px",
            borderRadius: 999,
            background: "#ffffff",
            color: "#4f46e5",
            fontSize: 22,
            letterSpacing: 2,
          }}
        >
          Y9
        </div>
      </div>
    ),
    { ...size },
  );
}
