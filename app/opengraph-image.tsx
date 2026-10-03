import { ImageResponse } from "next/og";
import { siteContent } from "@/content/site";

export const alt = `${siteContent.name} — Calm, Precision Software Engineering Studio`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
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
          backgroundColor: "#05060f",
          fontFamily: "sans-serif",
          color: "#d1e4fa",
          padding: "60px",
          textAlign: "center",
          position: "relative",
        }}
      >
        {/* Eyebrow */}
        <div
          style={{
            display: "flex",
            fontSize: "16px",
            letterSpacing: "4px",
            textTransform: "uppercase",
            color: "#98c0ef",
            marginBottom: "20px",
          }}
        >
          SOFTWARE STUDIO · EST. {siteContent.establishedYear}
        </div>

        {/* Wordmark */}
        <div
          style={{
            display: "flex",
            fontSize: "88px",
            fontWeight: 600,
            letterSpacing: "-2px",
            color: "#d8ecf8",
            marginBottom: "20px",
          }}
        >
          {siteContent.wordmark}
        </div>

        {/* Tagline */}
        <div
          style={{
            display: "flex",
            fontSize: "24px",
            maxWidth: "760px",
            color: "#c7d3ea",
            lineHeight: 1.4,
          }}
        >
          {siteContent.description}
        </div>

        {/* Footer badges */}
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: "24px",
            fontSize: "14px",
            color: "#9da7ba",
          }}
        >
          <span style={{ display: "flex" }}>HIGH-ASSURANCE SYSTEMS</span>
          <span style={{ display: "flex" }}>·</span>
          <span style={{ display: "flex" }}>DISTRIBUTED CLOUD</span>
          <span style={{ display: "flex" }}>·</span>
          <span style={{ display: "flex" }}>NEXT.JS &amp; REACT</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
