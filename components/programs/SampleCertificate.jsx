"use client";

import React from "react";

export default function SampleCertificate() {
  return (
    <section
      style={{
        padding: "2rem 1rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h2
        style={{
          fontSize: "2rem",
          fontWeight: "600",
          //   textAlign: "center",
          color: "#1c144e",
          marginBottom: "2rem",
        }}
      >
        Sample Certificate
      </h2>

      <div
        style={{
          width: "100%",
          maxWidth: "800px",
          height: "500px", // You can adjust this height as needed
          overflow: "hidden",
          border: "1px solid #e5e7eb",
          borderRadius: "12px",
          boxShadow: "0 6px 20px rgba(0, 0, 0, 0.1)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#fff",
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
