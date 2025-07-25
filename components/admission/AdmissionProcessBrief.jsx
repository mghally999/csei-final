"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faEnvelope,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import ApplicationFormModal from "@/components/ApplicationFormModal";

const BrandColors = {
  primaryDark: "#000C2D",
  primaryBlue: "#001E6C",
  accent: "#E05500",
  lightText: "#F5F5F5",
  border: "#FFFFFF22",
};

const checkStyle = {
  width: "28px",
  height: "28px",
  backgroundColor: BrandColors.accent,
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
        color: BrandColors.lightText,
        fontWeight: 500,
        whiteSpace: "pre-wrap",
      }}
    >
      {text}
    </div>
  </motion.div>
);

const Section = ({ title, children }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    style={{
      background: `linear-gradient(135deg, ${BrandColors.primaryDark} 0%, ${BrandColors.primaryBlue} 100%)`,
      padding: "40px",
      borderRadius: "16px",
      border: `2px solid ${BrandColors.accent}`,
      boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
      marginBottom: "50px",
    }}
  >
    <h3
      style={{
        fontSize: "28px",
        fontWeight: "700",
        color: BrandColors.lightText,
        marginBottom: "20px",
        borderBottom: `2px solid ${BrandColors.accent}`,
        paddingBottom: "10px",
      }}
    >
      {title}
    </h3>
    <ul style={{ paddingLeft: 0, listStyle: "none" }}>{children}</ul>
  </motion.div>
);

export default function AdmissionGuide() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCloseModal = () => setIsModalOpen(false);

  const sections = [
    {
      title: "Steps for Applying Your Qualification",
      points: [
        "Step 1: Submit application form with required documents",
        "Step 2: Application review and virtual interview",
        "Step 3: Receive admission offer letter with tuition details",
        "Step 4: Accept offer and make initial payment",
        "Step 5: Final enrollment & orientation at CSEI campus",
      ],
    },
    {
      title: "Documents Required",
      points: [
        "Completed Application Form",
        "Passport Copy (valid 6+ months)",
        "Academic Certificates & Transcripts",
        "Passport-sized Photograph",
        "English Proficiency (if required)",
        "Updated CV (for PG courses)",
      ],
    },
    {
      title: "Additional Notes",
      points: [
        "Scholarships available for eligible students",
        "Career, visa, and academic counseling provided",
        "Accommodation support available upon request",
        "Apply at least 1 month before course starts",
        "Visa approval is subject to UAE Immigration rules",
      ],
    },
    {
      title: "Need Assistance?",
      points: ["+971-45522469", "admission@cseiacademy.ae"],
    },
  ];

  return (
    <section style={{ backgroundColor: BrandColors.primaryDark }}>
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "31vh",
          minHeight: "700px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          color: "white",
          padding: "20px",
        }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            fontSize: "clamp(36px, 5vw, 64px)",
            fontWeight: "800",
            marginBottom: "20px",
            textShadow: "0 2px 10px rgba(0,0,0,0.5)",
            color: "#ffffff",
          }}
        >
          Online Admission
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          style={{
            fontSize: "clamp(20px, 2.5vw, 28px)",
            fontWeight: "600",
            marginTop: "20px",
            maxWidth: "800px",
            textShadow: "0 1px 5px rgba(0,0,0,0.3)",
          }}
        >
          Conquer your dream in UAE with CSEI Academy
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          style={{ marginTop: "40px" }}
        >
          <motion.button
            onClick={() => setIsModalOpen(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              backgroundColor: BrandColors.accent,
              color: "white",
              padding: "18px 48px",
              fontSize: "18px",
              fontWeight: "600",
              borderRadius: "10px",
              border: "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "12px",
              boxShadow: "0 6px 20px rgba(0, 0, 0, 0.5)",
              transition: "all 0.3s ease",
            }}
          >
            Apply Now
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <FiArrowRight style={{ fontSize: "20px" }} />
            </motion.span>
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Scholarship Banner */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          backgroundColor: "#000000",
          color: "white",
          padding: "25px 20px",
          textAlign: "center",
          fontSize: "20px",
          fontWeight: "700",
          width: "100%",
          boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
        }}
      >
        Scholarships valid until 31st July for September intake
      </motion.div>

      {/* Sections */}
      <div
        style={{ maxWidth: "1100px", margin: "0 auto", padding: "80px 20px" }}
      >
        {sections.map((section, idx) => (
          <Section key={idx} title={section.title}>
            {section.points.map((point, i) => (
              <ListItem key={i} text={point} />
            ))}
          </Section>
        ))}

        <div style={{ textAlign: "center", marginTop: "40px" }}>
          <motion.button
            onClick={() => setIsModalOpen(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              backgroundColor: BrandColors.accent,
              color: "white",
              padding: "16px 32px",
              borderRadius: "10px",
              border: "none",
              fontSize: "18px",
              fontWeight: "600",
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            Start Your Application <FiArrowRight style={{ fontSize: "24px" }} />
          </motion.button>
        </div>

        <ApplicationFormModal isOpen={isModalOpen} onClose={handleCloseModal} />
      </div>
    </section>
  );
}
