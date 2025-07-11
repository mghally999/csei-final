"use client";
import React from "react";
import { motion } from "framer-motion";

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
      className="bg-white rounded-xl shadow-sm mb-15 custom-margin custom-linear-blue-top"
      style={{
        border: "1px solid #ddd",
        padding: "30px",
      }}
    >
      <h3 className="text-2xl font-semibold text-gray-900 mb-10">
        University Progression
      </h3>

      {hasDescription && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          style={{
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
        >
          {description}
        </motion.p>
      )}

      {hasList && (
        <motion.ul
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="space-y-4 list-disc list-inside"
        >
          {data.map((item, index) => (
            <motion.li
              key={index}
              className="rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-4 pl-6"
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
            >
              {item}
            </motion.li>
          ))}
        </motion.ul>
      )}
    </motion.section>
  );
};
