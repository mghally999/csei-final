"use client";
import React from "react";

const cardStyle = {
  height: "160px",
  background: "#eb732c",
  padding: "24px",
  border: "2px solid rgba(255, 255, 255, 0.2)",
  borderRadius: "12px",
  textAlign: "center",
  boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
  backdropFilter: "blur(2px)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "20px",
  fontWeight: "600",
  color: "#000",
};

const programs = [
  "Tourism and Culinary Arts",
  "Health & Social Care",
  // "Information Technology",
  "Business Management",
];

export default function ProgramSpecializations() {
  return (
    <section
      style={{
        padding: "80px 0",
        background:
          "linear-gradient(180deg, #ffffff 0%, #dbeafe 25%, #86b3f7 50%, #3a5acb 75%, #0f1d56 100%)",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 16px" }}>
        {/* Title */}
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <h2
            style={{
              color: "#000000",
              fontSize: "32px",
              fontWeight: "700",
              marginBottom: "10px",
              textShadow: "0 1px 3px rgba(0,0,0,0.4)",
            }}
          >
            Programme Specializations
          </h2>
          <p style={{ color: "#000000", fontSize: "16px" }}>
            Explore our four core fields of academic excellence.
          </p>
        </div>

        {/* Cards */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "24px",
            justifyContent: "center",
          }}
        >
          {programs.map((title, index) => (
            <div
              key={index}
              style={{
                width: "100%",
                maxWidth: "280px",
                flex: "1 1 200px",
              }}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <div style={cardStyle}>{title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
