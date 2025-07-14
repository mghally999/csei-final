"use client";

import React from "react";

export default function SampleCertificate() {
  return (
    <section
      style={{
        backgroundColor: "#000000",
        padding: "80px 20px",
        borderRadius: "8px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Section Title */}
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
        Sample Certificate
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

      {/* Image Container */}
      <div
        style={{
          width: "100%",
          maxWidth: "800px",
          height: "500px",
          overflow: "hidden",
          border: "1px solid #ffffff33",
          borderRadius: "12px",
          boxShadow: "0 10px 30px rgba(255, 255, 255, 0.1)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#111111",
        }}
      >
        <img
          src="/assets/img/othm/sample-certificate.webp"
          alt="Sample OTHM Certificate"
          style={{
            maxWidth: "100%",
            maxHeight: "100%",
            objectFit: "contain",
            display: "block",
          }}
        />
      </div>
    </section>
  );
}
