"use client";

import React from "react";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Overview({ data }) {
  if (!data) return null;

  const items = Array.isArray(data) ? data : [data];

  return (
    <section
      style={{
        backgroundColor: "#000000",
        padding: "clamp(60px, 6vw, 100px) clamp(16px, 5vw, 40px)",
        borderRadius: "16px",
      }}
    >
      <div
        style={{
          maxWidth: "1240px",
          margin: "0 auto",
        }}
      >
        {/* Section Title */}
        <h2
          style={{
            fontSize: "clamp(28px, 5vw, 42px)",
            fontWeight: "800",
            color: "#ffffff",
            marginBottom: "50px",
            textAlign: "center",
            position: "relative",
          }}
        >
          Comprehensive Overview
          <span
            style={{
              position: "absolute",
              bottom: "-16px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "100px",
              height: "4px",
              backgroundColor: "#ffffff",
              borderRadius: "2px",
            }}
          />
        </h2>

        {/* List Container */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "clamp(20px, 2.5vw, 32px)",
            backgroundColor: "#000000",
            borderRadius: "12px",
          }}
        >
          {items.map((text, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "flex-start",
                flexDirection: "row",
                flexWrap: "nowrap",
              }}
            >
              <div
                style={{
                  width: "32px",
                  height: "32px",
                  backgroundColor: "#ffffff",
                  color: "#000000",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "14px",
                  fontWeight: 700,
                  flexShrink: 0,
                  marginRight: "16px",
                  boxShadow: "0 4px 12px rgba(255, 255, 255, 0.1)",
                }}
              >
                <FontAwesomeIcon icon={faCheck} />
              </div>

              <div
                style={{
                  fontSize: "clamp(16px, 1.5vw, 20px)",
                  fontWeight: 600,
                  color: "#ffffff",
                  lineHeight: 1.8,
                  flex: 1,
                  wordBreak: "break-word",
                }}
              >
                {text}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
