// Browser-tab icon: a rounded indigo → violet square with a bold white ¡.
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
          background: "linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)",
          borderRadius: 8,
        }}
      >
        <svg width={24} height={24} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style={{ marginTop: 1 }}>
          <g fill="none" stroke="#ffffff" strokeWidth={13} strokeLinecap="round" strokeLinejoin="round">
            <circle cx="50" cy="22" r="9" fill="#ffffff" stroke="none" />
        <path d="M47 40 L 53 40 L 58 82 Q 50 88 42 82 Z" fill="#ffffff" stroke="#ffffff" strokeWidth={4} />
          </g>
        </svg>
      </div>
    ),
    { ...size },
  );
}
