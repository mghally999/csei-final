"use client";
import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export const UniversityProgression = ({ data = [], description = "" }) => {
  const hasList = Array.isArray(data) && data.length > 0;
  const hasDescription =
    typeof description === "string" && description.trim() !== "";

  if (!hasList && !hasDescription) return null;

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-50px" }}
      style={{
        backgroundColor: "#000000",
        padding: "clamp(60px, 6vw, 100px) clamp(16px, 5vw, 40px)",
        borderRadius: "16px",
      }}
    >
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
        University Progression
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

      <div style={{ maxWidth: "1240px", margin: "0 auto" }}>
        {hasDescription && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            style={{
              fontSize: "18px",
              fontWeight: 600,
              color: "#ffffff",
              lineHeight: 1.8,
              marginBottom: "30px",
              padding: "20px",
              backgroundColor: "#111111",
              borderRadius: "10px",
            }}
          >
            {description}
          </motion.p>
        )}

        {hasList && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
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
                  backgroundColor: "#111111",
                  padding: "20px",
                  borderRadius: "10px",
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
                    marginTop: "4px",
                    boxShadow: "0 4px 8px rgba(255, 255, 255, 0.15)",
                  }}
                >
                  <FontAwesomeIcon icon={faCheck} />
                </div>

                {/* Text */}
                <div
                  style={{
                    fontSize: "18px",
                    fontWeight: 600,
                    color: "#ffffff",
                    lineHeight: 1.8,
                    textAlign: "justify",
                  }}
                >
                  {item}
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </motion.section>
  );
};

export default UniversityProgression;
