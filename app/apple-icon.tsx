import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/** Home-screen icon for iOS: the same "e." monogram as icon.svg, unrounded (iOS masks the corners). */
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
          background: "#0E1726",
        }}
      >
        <svg width="150" height="150" viewBox="0 0 32 32">
          <path
            d="M7 16.5h13.5a6.75 6.75 0 1 0-1.98 4.77"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="25" cy="21.6" r="2.6" fill="#4F74FF" />
        </svg>
      </div>
    ),
    size,
  );
}
