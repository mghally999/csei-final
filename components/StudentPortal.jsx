"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const checkStyle = {
  width: "28px",
  height: "28px",
  backgroundColor: "#000000",
  color: "white",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "16px",
  fontWeight: "bold",
  boxShadow: "0 4px 6px rgba(102, 51, 153, 0.3)",
  marginRight: "12px",
  flexShrink: 0,
};

const listItem = (text) => (
  <div
    style={{ display: "flex", alignItems: "flex-start", marginBottom: "12px" }}
  >
    <div style={checkStyle}>✓</div>
    <div
      style={{
        fontSize: "16px",
        lineHeight: "1.6",
        color: "#2d3748",
        fontWeight: 500,
      }}
    >
      {text}
    </div>
  </div>
);

export default function StudentPortalSection() {
  return (
    <section
      style={{
        background:
          "linear-gradient(359deg, #ffffff 0%, #dbeafe 25%, #86b3f7 50%, #3a5acb 75%, #0f1d56 100%)",
        padding: "80px 20px",
      }}
    >
      <div style={{ maxWidth: "1140px", margin: "0 auto" }}>
        <h2
          style={{
            fontSize: "32px",
            fontWeight: "700",
            color: "#ffffff",
            marginBottom: "40px",
            textAlign: "center",
          }}
        >
          Student Portal at CSEI Academy
        </h2>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            justifyContent: "center",
            marginBottom: "60px",
          }}
        >
          {[
            {
              title: "1. Academic Dashboard",
              image:
                "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=2070&auto=format&fit=crop",
            },
            {
              title: "2. Registration & Enrollment",
              image:
                "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=2070&auto=format&fit=crop",
            },
            {
              title: "3. Financial Information",
              image:
                "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=2070&auto=format&fit=crop",
            },
          ].map((item, index) => (
            <Link
              href="#"
              key={index}
              style={{
                textDecoration: "none",
                color: "inherit",
                maxWidth: "300px",
                width: "100%",
              }}
            >
              <div
                style={{
                  textAlign: "center",
                  borderRadius: "12px",
                  overflow: "hidden",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
                  backgroundColor: "#fff",
                }}
              >
                <Image
                  src={item.image}
                  width={300}
                  height={200}
                  alt={item.title}
                  style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "cover",
                    transition: "transform 0.3s ease",
                  }}
                />
                <div style={{ padding: "16px", fontWeight: "600" }}>
                  {item.title}
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div style={{ color: "#f1f5f9", fontSize: "17px", lineHeight: "1.7" }}>
          <h3 style={{ fontWeight: "700", marginBottom: "16px" }}>
            4. Key Services in the Portal
          </h3>
          {[
            "Communication Tools to connect with faculty and classmates.",
            "Event Calendar for all academic and extracurricular schedules.",
            "Student Support Services: request academic or technical help.",
            "Profile Management: update emergency contacts and details.",
            "Mobile Application Access: log in on the go, any time, any device.",
            "Secure login and privacy compliance for all user data.",
          ].map(listItem)}

          <h3 style={{ fontWeight: "700", margin: "40px 0 16px" }}>
            5. Get Started
          </h3>
          {[
            "Visit studentportal.csei.ac.ae or download from App Store / Play Store.",
            "Log in using your student credentials (ID & password).",
            "Explore all features, notifications, and updates in one place.",
          ].map(listItem)}
        </div>
      </div>
    </section>
  );
}
