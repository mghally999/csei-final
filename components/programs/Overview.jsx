"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

// Framer Motion variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Overview({ data }) {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: "ease-out" });
  }, []);

  if (!data) return null;

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      data-aos="fade-up"
      data-aos-delay="150"
      className="bg-white rounded-xl shadow-sm mb-15 custom-margin custom-linear-blue-top"
      style={{
        opacity: 1,
        border: "1px solid #ddd",
        padding: "30px",
      }}
    >
      <motion.h3
        variants={itemVariants}
        className="text-2xl font-semibold text-gray-900 mb-10"
      >
        Overview
      </motion.h3>

      <motion.ul
        variants={containerVariants}
        className="space-y-10 list-disc list-inside"
      >
        {Array.isArray(data) ? (
          data.map((item, index) => (
            <motion.li
              key={index}
              variants={itemVariants}
              className="rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
              style={{
                listStyleType: "disc",
                textAlign: "justify",
                wordSpacing: "normal",
                letterSpacing: "normal",
                lineHeight: 1.8,
                fontSize: "18px",
                fontWeight: 600,
                color: "#000000",
                marginBottom: "1.5rem",
                padding: "20px",
                marginLeft: "1rem",
              }}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {item}
            </motion.li>
          ))
        ) : (
          <motion.li
            variants={itemVariants}
            className="rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
            style={{
              listStyleType: "disc",
              wordSpacing: "normal",
              letterSpacing: "normal",
              lineHeight: 1.8,
              fontSize: "18px",
              fontWeight: 600,
              color: "#000000",
              marginBottom: "1.5rem",
              padding: "20px",
              marginLeft: "1rem",
              background:
                "linear-gradient(135deg, rgb(255, 255, 255) 0%, rgb(219, 234, 254) 25%, rgb(134, 179, 247) 50%, rgba(58, 90, 203, 0.2) 75%, rgb(15 29 86 / 4%) 100%)",
            }}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {data}
          </motion.li>
        )}
      </motion.ul>
    </motion.section>
  );
}
