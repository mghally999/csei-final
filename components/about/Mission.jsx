"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Mission() {
  const missionPoints = [
    "Deliver internationally recognized programs",
    "Promote practical, career-oriented learning",
    "Support continuous professional development",
    "Foster innovation and critical thinking",
    "Encourage community engagement and impact",
    "Maintain high ethical and academic standards",
    "Adapt to the evolving demands of the workforce",
    "Ensure equal opportunities for all learners",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="mission-section relative py-24 md:py-32 bg-gradient-to-b from-[#f3f5ff] to-[#e6ecff] overflow-hidden">
      {/* Decorative Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-purple-300 rounded-full blur-[120px] opacity-40"></div>
        <div className="absolute bottom-0 -right-40 w-[500px] h-[500px] bg-blue-300 rounded-full blur-[150px] opacity-30"></div>
      </div>

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        {/* Title and Intro */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1B0C4D] leading-snug">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Mission
            </span>
          </h2>
          <div
            className="max-w-4xl mx-auto mt-6 text-[#1B0C4D]/90 text-lg md:text-xl font-medium leading-relaxed md:leading-loose"
            style={{
              fontSize: "15px",
              fontWeight: "500",
              marginBottom: "15px",
            }}
          >
            <p>
              At CSEI Academy in Dubai, our mission is to ignite every student's
              potential through affordable, internationally recognized education
              and an inclusive campus environment. Our dedicated staff support,
              mentor, and inspire learners from diverse backgrounds.
            </p>
            <p className="mt-4">
              Through hands-on learning and real-world exposure, we equip future
              leaders to thrive and create lasting impact—both locally and
              globally.
            </p>
          </div>
        </motion.div>

        {/* Flex List of Mission Points (No Numbers) */}
        <motion.ul
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col gap-6"
        >
          {missionPoints.map((point, i) => (
            <motion.li
              key={i}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="flex items-start p-6 rounded-xl bg-white/70 border border-blue-200 backdrop-blur-md shadow-md transition-all duration-300"
            >
              <p
                className="text-lg md:text-xl font-semibold text-[#1B0C4D] leading-snug"
                style={{
                  display: "flex",
                  justifyContent: "left",
                  alignItems: "left",
                  fontWeight: "bold",
                  fontSize: "20px",
                  marginBottom: "15px",
                  marginTop: "20px",
                }}
              >
                {point}
              </p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
