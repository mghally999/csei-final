"use client";
import React from "react";
import { motion } from "framer-motion";

export const CareerOpportunities = ({ data }) => {
  if (!data || !Array.isArray(data)) return null;

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
        Career Opportunities
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
              background:
                "linear-gradient(135deg, rgb(255, 255, 255) 0%, rgb(219, 234, 254) 25%, rgb(134, 179, 247) 50%, rgba(58, 90, 203, 0.2) 75%, rgb(15 29 86 / 4%) 100%)",
            }}
          >
            {item}
          </motion.li>
        ))}
      </ul>
    </motion.section>
  );
};

export default CareerOpportunities;
