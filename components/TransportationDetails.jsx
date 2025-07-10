"use client";
import React from "react";
import Image from "next/image";

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

const ListItem = ({ text }) => (
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

export default function TransportationSection() {
  return (
    <section style={{ backgroundColor: "#f8f9fa", padding: "80px 20px" }}>
      <div style={{ maxWidth: "1140px", margin: "0 auto" }}>
        <h2
          style={{
            fontSize: "32px",
            fontWeight: "700",
            color: "#1a202c",
            marginBottom: "40px",
            textAlign: "center",
          }}
        >
          Transportation at CSEI Academy
        </h2>

        {/* Top Layout: Image and Paragraphs */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "30px",
            justifyContent: "center",
            alignItems: "flex-start",
            marginBottom: "50px",
          }}
        >
          {/* Image */}
          <div
            style={{
              flex: "0 0 500px",
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
            }}
          >
            <Image
              src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=2070&auto=format&fit=crop"
              alt="Transportation"
              width={500}
              height={350}
              style={{ width: "100%", height: "auto", objectFit: "cover" }}
              priority
            />
          </div>

          {/* Paragraphs */}
          <div style={{ flex: "1", minWidth: "300px" }}>
            <p
              style={{
                fontSize: "17px",
                color: "#4a5568",
                marginBottom: "20px",
                lineHeight: "1.7",
              }}
            >
              CSEI Academy’s location near Dubai Academic City offers students
              exceptional convenience and connectivity, making daily commutes
              and event attendance both straightforward and affordable.
            </p>
            <p
              style={{
                fontSize: "17px",
                color: "#4a5568",
                marginBottom: "20px",
                lineHeight: "1.7",
              }}
            >
              The campus is within easy reach of public transport including
              metro and bus services. We’ve also partnered with local providers
              for safe, reliable rides to and from campus or official events.
            </p>
            <p
              style={{
                fontSize: "17px",
                color: "#4a5568",
                marginBottom: "0",
                lineHeight: "1.7",
              }}
            >
              Although we don’t operate our own buses, students receive full
              support in navigating the transport network and getting discounted
              student Nol cards for budget-friendly travel across Dubai.
            </p>
          </div>
        </div>

        {/* Row Headings */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "40px",
            marginBottom: "20px",
          }}
        >
          <h3
            style={{
              fontWeight: "700",
              fontSize: "20px",
              margin: 0,
              flex: 1,
              minWidth: "280px",
            }}
          >
            Transportation Request Form Fields:
          </h3>
          <h3
            style={{
              fontWeight: "700",
              fontSize: "20px",
              margin: 0,
              flex: 1,
              minWidth: "280px",
            }}
          >
            Highlights:
          </h3>
        </div>

        {/* Form + Highlights Side by Side */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "40px",
            alignItems: "flex-start",
          }}
        >
          {/* Left - Form Fields */}
          <div style={{ flex: "1", minWidth: "280px" }}>
            {[
              "Full Name",
              "Student ID / Identity Number",
              "Contact Number",
              "Email Address",
              "Pick-up Location",
              "Drop-off Location",
              "Date of Travel",
              "Time of Pick-up",
              "Type of Transportation Required: One-way or Round-trip",
              "Special Requirements (e.g., wheelchair access, extra luggage)",
            ].map((item, idx) => (
              <ListItem key={idx} text={item} />
            ))}

            <div
              style={{
                marginTop: "20px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <button
                style={{
                  backgroundColor: "#000",
                  color: "#fff",
                  padding: "12px 28px",
                  fontWeight: "600",
                  borderRadius: "8px",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "16px",
                }}
              >
                Submit Transportation Form
              </button>
            </div>
          </div>

          {/* Right - Highlights */}
          <div style={{ flex: "1", minWidth: "280px" }}>
            {[
              "Convenient access to Dubai Metro and public buses",
              "Discounted Nol cards for students",
              "Local partnerships with trusted transport providers",
              "Assistance with official academy event transportation",
              "No private fleet, but full support with planning routes",
            ].map((item, idx) => (
              <ListItem key={idx} text={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
