// components/placement/PlacementProcess.jsx
"use client";

import React from "react";
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
        color: "#2d3748",
        fontWeight: 500,
      }}
    >
      {text}
    </div>
  </motion.div>
);

const StepCard = ({ title, children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    whileHover={{ y: -5 }}
    style={{
      backgroundColor: "#fff",
      padding: "30px",
      borderRadius: "12px",
      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
      marginBottom: "30px",
      border: "1px solid rgba(0, 0, 0, 0.05)",
    }}
  >
    <h4
      style={{
        fontSize: "22px",
        fontWeight: "700",
        color: "#000000",
        marginBottom: "20px",
        position: "relative",
        paddingBottom: "10px",
      }}
    >
      {title}
      <span
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "60px",
          height: "4px",
          backgroundColor: "#000000",
          borderRadius: "2px",
        }}
      />
    </h4>
    {children}
  </motion.div>
);

export default function PlacementProcess() {
  return (
    <section
      className="custom-linear-blue-top"
      style={{
        backgroundColor: "#f8f9fa",
        padding: "80px 20px",
        position: "relative",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          position: "relative",
          zIndex: 2,
        }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            fontSize: "clamp(28px, 4vw, 42px)",
            fontWeight: "800",
            color: "#000000",
            marginBottom: "60px",
            textAlign: "center",
            position: "relative",
          }}
        >
          Our Placement Approach
          <div
            style={{
              height: "4px",
              width: "100px",
              backgroundColor: "#000000",
              margin: "20px auto 0",
              borderRadius: "2px",
            }}
          />
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          style={{
            maxWidth: "800px",
            margin: "0 auto 60px",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontSize: "18px",
              color: "#4a5568",
              marginBottom: "20px",
              lineHeight: "1.7",
            }}
          >
            At CSEI, we groom students not just for jobs, but for long-term
            career success in evolving markets.
          </p>
        </motion.div>

        <div style={{ marginBottom: "60px" }}>
          <StepCard title=" Career Ready Professionals">
            <p
              style={{
                fontSize: "16px",
                lineHeight: "1.7",
                color: "#4a5568",
                marginBottom: "20px",
              }}
            >
              Our students represent a blend of academic excellence, practical
              experience, and a positive attitude towards learning and growth.
            </p>
            <ul style={{ listStyleType: "none", paddingLeft: "0" }}>
              {[
                "Precise coursework and continuous assessments",
                "Real-world problem solving capabilities",
                "Soft skills training (communication, teamwork, adaptability)",
                "Innovation and critical thinking focus",
                "Strong work ethic and ethical responsibility",
              ].map((item, index) => (
                <ListItem key={index} text={item} />
              ))}
            </ul>
          </StepCard>

          <StepCard title="Industry-Aligned Training">
            <p
              style={{
                fontSize: "16px",
                lineHeight: "1.7",
                color: "#4a5568",
                marginBottom: "20px",
              }}
            >
              We ensure our curriculum stays relevant to industry needs through:
            </p>
            <ul style={{ listStyleType: "none", paddingLeft: "0" }}>
              {[
                "Regular industry expert consultations",
                "Vocational theory classes",
                "Updated course content reflecting market trends",
                "Practical application through projects",
                "Continuous feedback from employer partners",
              ].map((item, index) => (
                <ListItem key={index} text={item} />
              ))}
            </ul>
          </StepCard>
        </div>
      </div>
    </section>
  );
}
