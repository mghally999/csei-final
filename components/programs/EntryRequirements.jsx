"use client";
import React from "react";
import { motion } from "framer-motion";

export const EntryRequirements = ({ data }) => {
  if (!data || !Array.isArray(data)) return null;

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-50px" }}
      className="bg-white rounded-xl shadow-sm mb-15 custom-margin custom-linear-blue-top"
      style={{
        opacity: 1,
        border: "1px solid #ddd",
        padding: "30px",
      }}
    >
      <h3 className="text-2xl font-semibold text-gray-900 mb-10">
        Entry Requirements
      </h3>

      <ul className="space-y-10 list-disc list-inside">
        {data.map((item, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            viewport={{ once: true }}
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
          >
            {item}
          </motion.li>
        ))}
      </ul>
    </motion.section>
  );
};
