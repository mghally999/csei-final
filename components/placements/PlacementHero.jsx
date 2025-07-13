// components/placement/PlacementHero.jsx
"use client";

import React, { useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";
import ApplicationFormModal from "@/components/ApplicationFormModal";

export default function PlacementHero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleApplyNowClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2069&auto=format&fit=crop')",
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
          Career Services & Placements
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
          Bridging academic excellence with industry opportunities
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          style={{ marginTop: "40px" }}
        >
          <motion.button
            onClick={handleApplyNowClick}
            whileHover={{
              scale: 1.05,
              backgroundColor: "#111111",
              boxShadow: "0 8px 25px rgba(0, 0, 0, 0.6)",
            }}
            whileTap={{ scale: 0.95 }}
            style={{
              backgroundColor: "#000000",
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
            Connect With Our Team
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              <FiArrowRight style={{ fontSize: "20px" }} />
            </motion.span>
          </motion.button>
        </motion.div>
      </motion.div>

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
        Current Placement Rate: 62.5% | Partner with us to hire top talent
      </motion.div>

      <ApplicationFormModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
}
