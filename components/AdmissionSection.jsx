// components/admission/AdmissionSection.jsx
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";

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
    whileInView={{ opacity: 1, y: 0 }}
    initial={{ opacity: 0, y: 30 }}
    transition={{ duration: 0.4 }}
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
  </motion.div>
);

export default function AdmissionSection({
  title,
  description,
  imageUrl,
  imagePosition = "left",
  itemsLeft,
  itemsRight,
  buttonText,
  buttonLink,
}) {
  return (
    <section style={{ backgroundColor: "#f8f9fa" }} className="custom-padding">
      <div style={{ maxWidth: "1140px", margin: "0 auto" }}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            fontSize: "32px",
            fontWeight: "700",
            color: "#1a202c",
            marginBottom: "40px",
            textAlign: "center",
          }}
        >
          {title}
        </motion.h2>

        {/* Top Layout: Image and Paragraphs */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "30px",
            justifyContent: "center",
            alignItems: "flex-start",
            marginBottom: "50px",
            flexDirection: imagePosition === "left" ? "row" : "row-reverse",
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
              src={imageUrl}
              alt={title}
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
              {description}
            </p>

            {buttonText && (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                style={{ marginTop: "30px" }}
              >
                <Link
                  href={buttonLink}
                  style={{
                    backgroundColor: "#000000",
                    color: "white",
                    padding: "15px 40px",
                    fontSize: "18px",
                    fontWeight: "600",
                    borderRadius: "8px",
                    border: "none",
                    cursor: "pointer",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "10px",
                    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.5)",
                    textDecoration: "none",
                    transition: "all 0.3s ease",
                  }}
                >
                  {buttonText} <FiArrowRight style={{ fontSize: "20px" }} />
                </Link>
              </motion.div>
            )}
          </div>
        </div>

        {/* Two Column Grid */}
        {itemsLeft && itemsRight && (
          <>
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
                Key Features:
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
                Benefits:
              </h3>
            </div>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "40px",
                alignItems: "flex-start",
              }}
            >
              {/* Left Column */}
              <div style={{ flex: "1", minWidth: "280px" }}>
                {itemsLeft.map((item, idx) => (
                  <ListItem key={idx} text={item} />
                ))}
              </div>

              {/* Right Column */}
              <div style={{ flex: "1", minWidth: "280px" }}>
                {itemsRight.map((item, idx) => (
                  <ListItem key={idx} text={item} />
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
