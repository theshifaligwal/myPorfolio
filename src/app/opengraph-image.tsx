import { ImageResponse } from "next/og";
import { profile } from "@/data/content";

// The preview card shown when the site is shared on LinkedIn, X, WhatsApp, Slack, etc.
export const alt = `${profile.name}, ${profile.roles.join(" and ")}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#f5f1ee",
          color: "#1f1a17",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 88,
            height: 88,
            borderRadius: 24,
            background: "#b8664f",
            color: "#fff",
            fontSize: 36,
            fontWeight: 800,
            letterSpacing: 4,
          }}
        >
          SG
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 104, fontWeight: 800, letterSpacing: -3, lineHeight: 1 }}>
            {profile.name}
          </div>
          <div style={{ display: "flex", fontSize: 44, color: "#655d59", marginTop: 24 }}>
            {profile.roles[0]}
            <span style={{ color: "#b8664f", margin: "0 16px" }}>&amp;</span>
            {profile.roles[1]}
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 30, color: "#655d59" }}>
          Figma · React · Next.js · {profile.location}
        </div>
      </div>
    ),
    size
  );
}
