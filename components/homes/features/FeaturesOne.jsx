"use client";

import React from "react";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const features = [
  "Academic Support",
  "Professional Development",
  "Academic Mentoring",
  "Accommodation & Transport",
  "Migration Support",
  "Student Services",
];

export default function WhyCSEIWithVideo() {
  return (
    <section style={{ backgroundColor: "#000", padding: "80px 0" }}>
      <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 20px" }}>
        {/* Section Title */}
        <h2
          style={{
            fontSize: "36px",
            fontWeight: "800",
            color: "#ffffff",
            marginBottom: "60px",
            textAlign: "center",
          }}
        >
          Why CSEI Academy & Student Support
        </h2>

        {/* Custom Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 2fr",
            gap: "0px",
            backgroundColor: "#111",
            borderRadius: "16px",
            overflow: "hidden",
            boxShadow: "0 12px 24px rgba(0,0,0,0.6)",
          }}
        >
          {/* LEFT SIDE: Why CSEI Bullet Points */}
          <div
            style={{
              padding: "40px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              borderRight: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            <h3
              style={{
                fontSize: "24px",
                fontWeight: "700",
                marginBottom: "24px",
                color: "#ffffff",
              }}
            >
              Why <span style={{ color: "#e05500" }}>CSEI Academy</span>?
            </h3>

            {features.map((text, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "16px",
                }}
              >
                <div
                  style={{
                    width: "26px",
                    height: "26px",
                    backgroundColor: "#e05500",
                    color: "#fff",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "13px",
                    marginRight: "12px",
                    boxShadow: "0 4px 8px rgba(255, 85, 0, 0.3)",
                    flexShrink: 0,
                  }}
                >
                  <FontAwesomeIcon icon={faCheck} />
                </div>
                <div
                  style={{
                    fontSize: "16px",
                    lineHeight: "1.6",
                    color: "#f1f1f1",
                    fontWeight: 500,
                  }}
                >
                  {text}
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT SIDE: Video Preview */}
          <div style={{ position: "relative", minHeight: "100%" }}>
            <video
              src="/videos/why-csei.mov"
              autoPlay
              loop
              muted
              playsInline
              style={{
                width: "100%",
                height: "400px",
                objectFit: "cover",
                display: "block",
                objectPosition: "center",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
