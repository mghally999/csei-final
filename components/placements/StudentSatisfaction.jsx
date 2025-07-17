"use client";

import React from "react";
import Image from "next/image";
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

const positiveFeedback = [
  "80% satisfaction rate with placement services",
  "Strong support from placement team",
  "Access to reputed recruiters and companies",
  "Comprehensive training and mock interviews",
];

const improvementAreas = [
  "Expanding job role variety across departments",
  "Higher salary package negotiations",
  "More industry-specific opportunities",
  "Customized department-wise placement support",
];

export default function StudentSatisfaction() {
  return (
    <section
      style={{ backgroundColor: "#f8f9fa" }}
      className="custom-padding custom-linear-white-top"
    >
      <div style={{ maxWidth: "1140px", margin: "0 auto", padding: "0 16px" }}>
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
          Student Satisfaction & Feedback
        </motion.h2>

        {/* Reversed layout - Text on left, Image on right */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap-reverse",
            gap: "50px",
            justifyContent: "center",
            alignItems: "stretch",
            marginBottom: "50px",
          }}
        >
          {/* Text Column */}
          <div style={{ flex: "1", minWidth: "280px", maxWidth: "600px" }}>
            <p
              style={{
                fontSize: "18px",
                color: "#4a5568",
                textAlign: "justify",
                marginBottom: "50px",
                lineHeight: "1.7",
              }}
            >
              We regularly collect and analyze student feedback to continuously
              improve our placement services. Our current satisfaction rate
              stands at 80%, with most students appreciating our comprehensive
              support system.
            </p>
            <p
              style={{
                fontSize: "17px",
                color: "#4a5568",
                lineHeight: "1.7",
                textAlign: "justify",
              }}
            >
              For the 20% who expressed concerns, we've developed targeted
              initiatives to address their feedback and enhance our placement
              offerings across all departments.
            </p>
          </div>

          {/* Image Column */}
          <div
            style={{
              flex: "0 0 500px",
              maxWidth: "100%",
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
            }}
          >
            <Image
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216"
              alt="Student satisfaction"
              width={500}
              height={350}
              style={{
                width: "100%",
                height: "auto",
                objectFit: "cover",
              }}
              priority
            />
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
          <div style={{ flex: "1", minWidth: "280px", maxWidth: "600px" }}>
            <h3
              style={{
                fontWeight: "700",
                fontSize: "20px",
                marginBottom: "16px",
              }}
            >
              What Students Value:
            </h3>
            {positiveFeedback.map((item, idx) => (
              <ListItem key={idx} text={item} />
            ))}
          </div>

          <div style={{ flex: "1", minWidth: "280px", maxWidth: "600px" }}>
            <h3
              style={{
                fontWeight: "700",
                fontSize: "20px",
                marginBottom: "16px",
              }}
            >
              Our Improvement Focus:
            </h3>
            {improvementAreas.map((item, idx) => (
              <ListItem key={idx} text={item} />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "12px",
            padding: "30px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
            marginBottom: "40px",
          }}
        >
          <h3
            style={{
              fontWeight: "700",
              fontSize: "20px",
              marginBottom: "20px",
              textAlign: "center",
            }}
          >
            Placement Statistics
          </h3>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              flexWrap: "wrap",
              gap: "20px",
            }}
          >
            {[
              { value: "85%", label: "Current Employability Ratio" },
              { value: "40", label: "Eligible Students" },
            ].map((stat, index) => (
              <div key={index} style={{ textAlign: "center" }}>
                <div
                  style={{
                    fontSize: "28px",
                    fontWeight: "700",
                    color: "#000000",
                    marginBottom: "8px",
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontSize: "16px",
                    color: "#4a5568",
                  }}
                >
                  {stat.label}
                </div>
              </div>
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
          <a
            href="https://www.google.com/search?sca_esv=304cd5078918df87&sxsrf=AE3TifMRveSjZAKfBUqD2PyW6Sgbf9dM3A:1752431692398&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E1GQZWn-67L9a04NGTojObq9E3dJKbJItLtj3VCmLtXJWI570AG0mlkePBa7etJcFMllgHmnVMd1X8o86wvkFkrciG2U&q=CSEI-Academy+Reviews&sa=X&ved=2ahUKEwiM2ZLkvLqOAxXj87sIHWJ_HeYQ0bkNegQIKBAE&biw=1440&bih=778&dpr=2#lrd=0x3e5f5d8a8025a777:0x49dffabe91b3a140,3,,,"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: "#000000",
              color: "#ffffff",
              padding: "14px 30px",
              borderRadius: "8px",
              fontWeight: "600",
              fontSize: "16px",
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              textDecoration: "none",
              flexWrap: "wrap",
            }}
          >
            Share Your Feedback on Google <FiArrowRight />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
