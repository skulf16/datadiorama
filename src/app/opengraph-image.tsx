import { ImageResponse } from "next/og";

export const alt = "datadiorama – Ihr verlässlicher IT-Partner";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "linear-gradient(135deg, #05092b 0%, #0a1450 55%, #0058e2 140%)",
          padding: 80,
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        {/* Punkt-Cluster */}
        <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
          <div style={{ display: "flex", gap: 6 }}>
            <div style={{ width: 18, height: 18, borderRadius: 9, background: "#2ea3f2" }} />
            <div style={{ width: 26, height: 26, borderRadius: 13, background: "#0058e2", marginTop: 8 }} />
            <div style={{ width: 14, height: 14, borderRadius: 7, background: "#7da9ff", marginTop: 2 }} />
          </div>
          <div style={{ fontSize: 38, fontWeight: 700, letterSpacing: -1 }}>datadiorama</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              fontSize: 26,
              letterSpacing: 6,
              textTransform: "uppercase",
              color: "#51b4f6",
            }}
          >
            IT-Systemhaus &amp; Softwareentwicklung
          </div>
          <div style={{ fontSize: 72, fontWeight: 700, lineHeight: 1.05, maxWidth: 1000 }}>
            Ihr Full-Service-IT-Partner für Netzwerke, Cloud &amp; Telefonie
          </div>
        </div>

        <div style={{ fontSize: 28, color: "rgba(255,255,255,0.75)" }}>
          Potsdam · Berlin · St. Gallen — seit 2013
        </div>
      </div>
    ),
    { ...size },
  );
}
