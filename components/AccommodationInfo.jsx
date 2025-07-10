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

export default function AccommodationSection() {
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
          Accommodation at CSEI Academy
        </h2>

        {/* Horizontal Images */}
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
              title: "1. Modern Residences",
              image:
                "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=2070&auto=format&fit=crop",
            },
            {
              title: "2. Dining & Lounge Areas",
              image:
                "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=2070&auto=format&fit=crop",
            },
            {
              title: "3. Sports & Fitness Facilities",
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

        {/* Description Section */}
        <div style={{ color: "#2d3748", fontSize: "17px", lineHeight: "1.7" }}>
          <h3 style={{ fontWeight: "700", marginBottom: "16px" }}>
            4. Residential Experience
          </h3>
          <p style={{ marginBottom: "30px" }}>
            Residential facilities at CSEI Academy offer students the
            convenience and community of living near the library, dining
            facilities, and sports amenities. Living at the heart of Dubai means
            you can fully immerse yourself in student life, participate in a
            variety of activities, and make the most of your university
            experience.
          </p>

          <h3 style={{ fontWeight: "700", marginBottom: "16px" }}>
            5. Student Services Support
          </h3>
          {[
            "Know about on-campus living, available activities, room types, and facilities.",
            "Application process to reserve, cancel, or change your housing assignment.",
            "Providing official Proof of Residence letters for any administrative or visa requirements.",
          ].map(listItem)}

          <h3 style={{ fontWeight: "700", margin: "40px 0 16px" }}>
            6. Book Your Accommodation Plan
          </h3>

          {/* Form Breakdown */}
          {[
            "Full Name (as per official ID/passport)",
            "Student ID or Identity Number",
            "Contact Number (mobile and/or landline)",
            "Email Address",
            "Type of Accommodation (Private Room / Shared with Dedicated Room / Shared Room)",
            "Preferred Room Features (single bed, study desk, air conditioning)",
            "Special Requirements (disability access, dietary needs)",
            "Desired Move-in Date",
            "Expected Length of Stay (start and end date)",
            "Copy of Passport or National ID",
            "Student Enrollment Confirmation or Offer Letter",
            "Visa Copy",
            "Recent Passport-sized Photograph",
            "Name of Emergency Contact",
            "Relationship to Student",
            "Emergency Contact Number",
            "Preferred Payment Method (credit card, bank transfer, etc.)",
            "Deposit Confirmation (if required)",
            "Acknowledgement of Accommodation Policies and Terms",
            "Consent to Data Processing and Communication",
            "Additional Notes or Requests – Open Field",
          ].map(listItem)}

          <h3 style={{ fontWeight: "700", margin: "40px 0 16px" }}>
            7. Final Note
          </h3>
          {[
            "Whether you’re curious about daily life in our residence halls or need support with your housing application, we are committed to making your transition to campus living smooth and enjoyable.",
            "Photos • Policies • Schedules (available upon request)",
          ].map(listItem)}
        </div>
      </div>
    </section>
  );
}
