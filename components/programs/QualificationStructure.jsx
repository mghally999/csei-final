"use client";
import React from "react";
import { motion } from "framer-motion";

export const QualificationStructure = ({ data }) => {
  if (!data) return null;

  // Convert data to array if it's a string
  const contentArray = Array.isArray(data) ? data : [data];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-50px" }}
      className="bg-white rounded-xl shadow-sm mb-15 custom-margin"
      style={{
        opacity: 1,
        border: "1px solid #ddd",
        padding: "30px",
      }}
    >
      <h3 className="text-2xl font-semibold text-gray-900 mb-10">
        Qualification Structure
      </h3>

      <motion.ul
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
        className="space-y-4 list-disc list-inside"
      >
        {contentArray.map((item, index) => (
          <motion.li
            key={index}
            className="rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-4 pl-6"
            style={{
              textAlign: "justify",
              wordSpacing: "normal",
              letterSpacing: "normal",
              lineHeight: 1.8,
              fontSize: "18px",
              fontWeight: 600,
              color: "#000000",
              background:
                "linear-gradient(135deg, rgb(255, 255, 255) 0%, rgb(219, 234, 254) 25%, rgb(134, 179, 247) 50%, rgba(58, 90, 203, 0.2) 75%, rgb(15 29 86 / 4%) 100%)",
            }}
          >
            {item}
          </motion.li>
        ))}
      </motion.ul>
    </motion.section>
  );
};
