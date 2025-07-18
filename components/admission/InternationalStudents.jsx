"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";

export default function InternationalStudentsBrief() {
  const router = useRouter();

  return (
    <section
      className="layout-pb-lg custom-padding custom-linear-blue-top"
      style={{
        backgroundColor: "#f9fafb",
        paddingTop: "80px",
        paddingBottom: "80px",
      }}
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
          {/* Text Left */}
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
              International Students & Visa Support
            </h2>
            <p
              style={{
                fontSize: "18px",
                color: "#4a5568",
                lineHeight: "1.7",
                marginBottom: "32px",
              }}
            >
              From admission to arrival, we guide international students through
              every step—applications, document prep, UAE visa options,
              insurance, and airport pickup, all with expert support.
            </p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              style={{ marginTop: "40px" }}
            >
              <motion.button
                onClick={() => router.push("/admission/international-students")}
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
                Explore Visa & Admission Info
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <FiArrowRight style={{ fontSize: "20px" }} />
                </motion.span>
              </motion.button>
            </motion.div>
          </div>

          {/* Image Right - Positioned Bottom Center */}
          <div
            style={{
              flex: "0 0 50%",
              maxWidth: "50%",
              padding: "15px",
              position: "relative",
              height: "500px",
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                width: "80%",
                height: "80%",
                position: "relative",
              }}
            >
              <Image
                src="/assets/img/admission/international-student.png"
                alt="International Students"
                fill
                style={{
                  objectFit: "cover",
                  objectPosition: "50% 15%",
                }}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
