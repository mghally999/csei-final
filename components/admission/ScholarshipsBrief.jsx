"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";

export default function ScholarshipsBrief() {
  const router = useRouter();

  const handleExploreClick = () => {
    router.push("/admission/financial-aid-scholarships");
  };

  return (
    <section
      className="layout-pb-lg custom-linear-white-top"
      style={{ backgroundColor: "#f8f9fa", paddingTop: "80px" }}
    >
      <div className="container">
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            margin: "-15px",
            alignItems: "center",
          }}
        >
          {/* Image */}
          <div
            style={{
              flex: "0 0 50%",
              maxWidth: "50%",
              padding: "15px",
            }}
          >
            <div
              style={{
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
              }}
            >
              <Image
                width={600}
                height={400}
                style={{ width: "100%", height: "auto", objectFit: "cover" }}
                src="assets/img/life/scholarship.png"
                alt="Scholarships and Financial Aid"
              />
            </div>
          </div>

          {/* Content */}
          <div
            style={{
              flex: "0 0 50%",
              maxWidth: "50%",
              padding: "15px",
            }}
          >
            <h2
              style={{
                fontSize: "36px",
                fontWeight: 700,
                color: "#0f1d56",
                marginBottom: "30px",
              }}
            >
              Financial Aid & Scholarships
            </h2>
            <p
              style={{
                fontSize: "18px",
                color: "#4a5568",
                lineHeight: "1.7",
                marginBottom: "32px",
              }}
            >
              Explore a world of merit-based, need-based, and external
              scholarships that make quality education more accessible. Whether
              you're an achiever, athlete, or returning alumni, CSEI has
              tailored financial support to help you succeed.
            </p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              style={{ marginTop: "40px" }}
            >
              <motion.button
                onClick={handleExploreClick}
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
                Explore All Scholarship Options
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
          </div>
        </div>
      </div>
    </section>
  );
}
