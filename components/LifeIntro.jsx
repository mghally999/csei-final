"use client";

import React, { useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";
import ApplicationFormModal from "@/components/ApplicationFormModal";

export default function LifeHero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleApplyNowClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      {/* ✅ Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1503676260728-1c00da094a0b')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "81vh",
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
          Life with CSEI Academy
        </motion.h1>

        <motion.h4
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          style={{
            fontSize: "clamp(18px, 2.5vw, 28px)",
            fontWeight: "500",
            marginBottom: "20px",
            color: "#e0e0e0",
          }}
        >
          Life with CSEI
        </motion.h4>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          style={{
            fontSize: "18px",
            maxWidth: "750px",
            lineHeight: "1.6",
            marginBottom: "15px",
            color: "#dddddd",
          }}
        >
          CSEI Academy stands as a premier destination in Dubai for education,
          where ambitious students are empowered and inspired to pursue endless
          opportunities.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          style={{
            fontSize: "18px",
            maxWidth: "750px",
            lineHeight: "1.6",
            color: "#dddddd",
          }}
        >
          Join CSEI community where your ambitions are nurtured, your talents
          recognized, and your future possibilities endless. Discover how life
          with CSEI Academy transforms education into a pathway for lifelong
          achievement and opportunity.
        </motion.p>

        {/* ✅ CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          style={{ marginTop: "40px" }}
        >
          <motion.a
            href="/life-with-csei/campus-life"
            whileHover={{
              scale: 1.05,
              background: "linear-gradient(to right, #1d4ed8, #3730a3)",
              boxShadow: "0 15px 35px rgba(67, 56, 202, 0.5)",
            }}
            whileTap={{ scale: 0.95 }}
            style={{
              background: "linear-gradient(to right, #2563eb, #4338ca)",
              color: "#ffffff",
              padding: "16px 32px",
              fontSize: "18px",
              fontWeight: "600",
              borderRadius: "12px",
              display: "inline-flex",
              alignItems: "center",
              gap: "12px",
              border: "1px solid rgba(255, 255, 255, 0.3)",
              boxShadow: "0 10px 25px rgba(0, 0, 0, 0.3)",
              textDecoration: "none",
              transition: "all 0.3s ease",
            }}
          >
            Explore Student Life
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <FiArrowRight style={{ fontSize: "24px" }} />
            </motion.span>
          </motion.a>
        </motion.div>
      </motion.div>

      {/* ✅ Banner Below Hero */}
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
        Discover vibrant campus life, clubs, and community at CSEI Academy
      </motion.div>

      <ApplicationFormModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
}
