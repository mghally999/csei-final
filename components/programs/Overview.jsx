"use client";

import React from "react";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Overview({ data }) {
  if (!data) return null;

  const items = Array.isArray(data) ? data : [data];

  return (
    <div
      style={{
        backgroundColor: "#000000",
        padding: "80px 20px",
        borderRadius: "8px",
      }}
    >
      <div style={{ maxWidth: "1240px", margin: "0 auto" }}>
        {/* Section Title with half-white underline */}
        <h2
          style={{
            fontSize: "40px",
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

        {/* Checkmark List Container */}
        <div
          style={{
            borderRadius: "8px",
            backgroundColor: "#000000",
            padding: "40px",
            display: "flex",
            flexDirection: "column",
            gap: "24px",
          }}
        >
          {items.map((text, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "flex-start",
              }}
            >
              {/* Checkmark Icon */}
              <div
                style={{
                  width: "28px",
                  height: "28px",
                  backgroundColor: "#ffffff",
                  color: "#000000",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "14px",
                  fontWeight: 700,
                  marginRight: "18px",
                  flexShrink: 0,
                  marginTop: "2px",
                  boxShadow: "0 4px 8px rgba(255, 255, 255, 0.15)",
                }}
              >
                <FontAwesomeIcon icon={faCheck} />
              </div>

              {/* Text */}
              <div
                style={{
                  fontSize: "20px",
                  fontWeight: "700",
                  color: "#ffffff",
                  lineHeight: "1.8",
                }}
              >
                {text}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
