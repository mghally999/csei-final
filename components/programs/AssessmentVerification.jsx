"use client";

import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export const AssessmentVerification = ({ data }) => {
  if (!data || !Array.isArray(data)) return null;

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      style={{
        backgroundColor: "#000000",
        padding: "clamp(60px, 6vw, 100px) clamp(16px, 5vw, 40px)",
        borderRadius: "16px",
      }}
    >
      <div style={{ maxWidth: "1240px", margin: "0 auto" }}>
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
          Assessment and Verification
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

        {/* Content List */}
        <div
          style={{
            borderRadius: "10px",
            backgroundColor: "#000000",
            display: "flex",
            flexDirection: "column",
            gap: "24px",
          }}
        >
          {data.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              style={{
                display: "flex",
                alignItems: "flex-start",
              }}
            >
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

              <div
                style={{
                  fontSize: "20px",
                  fontWeight: "700",
                  color: "#ffffff",
                  lineHeight: "1.8",
                }}
              >
                {item}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default AssessmentVerification;
