"use client";

import React from "react";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";
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
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.3)",
  marginRight: "12px",
  flexShrink: 0,
};

const ListItem = ({ text }) => (
  <motion.div
    initial={{ opacity: 0, x: -10 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.3 }}
    style={{ display: "flex", alignItems: "flex-start", marginBottom: "12px" }}
  >
    <div style={checkStyle}>✓</div>
    <div
      style={{
        fontSize: "16px",
        lineHeight: "1.6",
        color: "#000000",
        fontWeight: 500,
      }}
    >
      {text}
    </div>
  </motion.div>
);

const servicesLeft = [
  "Soft skills training and mock interviews",
  "Resume writing and aptitude preparation",
  "Internship assistance and corporate referrals",
];

const servicesRight = [
  "Career counselling and one-on-one coaching",
  "Skill development in tech, hospitality, marketing",
  "Alumni networking for job mentorship and support",
];

export default function PlacementServices() {
  return (
    <section style={{ backgroundColor: "#f8f9fa" }} className="custom-padding">
      <div style={{ maxWidth: "1140px", margin: "0 auto" }}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            fontSize: "32px",
            fontWeight: "700",
            color: "#1a202c",
            marginBottom: "40px",
            textAlign: "center",
          }}
        >
          Our Placement Services
        </motion.h2>

        {/* Image + Paragraph layout */}
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
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
              alt="Placement Services"
              width={500}
              height={350}
              style={{ width: "100%", height: "auto", objectFit: "cover" }}
              priority
            />
          </div>

          {/* Paragraph */}
          <div style={{ flex: "1", minWidth: "300px" }}>
            <p
              style={{
                fontSize: "17px",
                color: "#4a5568",
                marginBottom: "20px",
                lineHeight: "1.7",
              }}
            >
              At CSEI Academy, our Placement Cell is dedicated to empowering
              students with real-world tools, confidence, and professional
              exposure to land their dream roles. We partner with companies,
              alumni, and career mentors to offer a complete placement pipeline.
            </p>
            <p
              style={{
                fontSize: "17px",
                color: "#4a5568",
                lineHeight: "1.7",
              }}
            >
              From building your resume to mastering interviews and gaining
              field-ready skills, we ensure that you’re placement-ready by the
              time you graduate.
            </p>
          </div>
        </div>

        {/* Dual Column Lists */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "40px",
            marginBottom: "40px",
            justifyContent: "space-between",
          }}
        >
          <div style={{ flex: "1", minWidth: "280px" }}>
            <h3
              style={{
                fontWeight: "700",
                fontSize: "20px",
                marginBottom: "16px",
              }}
            >
              What We Offer:
            </h3>
            {servicesLeft.map((item, idx) => (
              <ListItem key={idx} text={item} />
            ))}
          </div>

          <div style={{ flex: "1", minWidth: "280px" }}>
            <h3
              style={{
                fontWeight: "700",
                fontSize: "20px",
                marginBottom: "16px",
              }}
            >
              Additional Support:
            </h3>
            {servicesRight.map((item, idx) => (
              <ListItem key={idx} text={item} />
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          style={{ textAlign: "center", marginTop: "30px" }}
        >
          <Link
            href="/placements/services"
            style={{
              backgroundColor: "#000000", // ✅ black
              color: "#ffffff", // ✅ white
              padding: "14px 30px",
              borderRadius: "8px",
              fontWeight: "600",
              fontSize: "16px",
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              textDecoration: "none",
            }}
          >
            Explore All Services <FiArrowRight />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
