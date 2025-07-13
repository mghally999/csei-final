"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

const ListItem = ({ text }) => (
  <motion.li
    initial={{ opacity: 0, x: -10 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.3 }}
    style={{
      display: "flex",
      alignItems: "flex-start",
      marginBottom: "12px",
      fontSize: "16px",
      lineHeight: "1.6",
      color: "#2d3748",
      fontWeight: 500,
    }}
  >
    <span
      style={{
        width: "24px",
        height: "24px",
        backgroundColor: "#000",
        color: "#fff",
        borderRadius: "50%",
        display: "inline-flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "14px",
        marginRight: "10px",
        flexShrink: 0,
      }}
    >
      ✓
    </span>
    {text}
  </motion.li>
);

const Section = ({ title, children }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    style={{
      backgroundColor: "#fff",
      padding: "40px",
      borderRadius: "12px",
      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.08)",
      marginBottom: "50px",
    }}
  >
    <h3
      style={{
        fontSize: "26px",
        fontWeight: "700",
        color: "#000",
        marginBottom: "20px",
        borderBottom: "2px solid #000",
        paddingBottom: "10px",
      }}
    >
      {title}
    </h3>
    {children}
  </motion.div>
);

export default function ScholarshipsPage() {
  return (
    <section style={{ backgroundColor: "#f8f9fa" }} className="custom-padding">
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            fontSize: "clamp(28px, 4vw, 40px)",
            textAlign: "center",
            marginBottom: "60px",
            fontWeight: "800",
            color: "#0f1d56",
          }}
        >
          Financial Aid & Scholarships
        </motion.h2>

        <Section title="Merit-Based Scholarships">
          <ul style={{ paddingLeft: 0, listStyle: "none" }}>
            <ListItem text="Awarded based on academic excellence and past performance." />
            <ListItem text="Available to both new and continuing students." />
            <ListItem text="Minimum GPA or grade threshold may apply." />
          </ul>
        </Section>

        <Section title="Need-Based Financial Support">
          <ul style={{ paddingLeft: 0, listStyle: "none" }}>
            <ListItem text="Designed for students from lower-income backgrounds." />
            <ListItem text="Requires submission of income or financial documentation." />
            <ListItem text="Subject to availability and budget allocation each semester." />
          </ul>
        </Section>

        <Section title="Alumni & Returning Student Grants">
          <ul style={{ paddingLeft: 0, listStyle: "none" }}>
            <ListItem text="Special tuition waivers for students who previously studied at CSEI." />
            <ListItem text="Available for second diploma, professional courses, or skill programs." />
            <ListItem text="Must apply through alumni portal or academic advisor." />
          </ul>
        </Section>

        <Section title="External Sponsorships & Partnerships">
          <ul style={{ paddingLeft: 0, listStyle: "none" }}>
            <ListItem text="Students may apply through government or NGO sponsorship bodies." />
            <ListItem text="Corporate or foundation scholarships available by nomination." />
            <ListItem text="CSEI Academy will support documentation and verification." />
          </ul>
        </Section>

        <Section title="Application & Deadlines">
          <ul style={{ paddingLeft: 0, listStyle: "none" }}>
            <ListItem text="Scholarship applications must be submitted before semester start." />
            <ListItem text="Late applications may not be considered for current intake." />
            <ListItem text="Email financialaid@csei.ac.ae or speak to a counselor for help." />
            <ListItem text="All scholarships are reviewed by the Financial Aid Committee." />
          </ul>
        </Section>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            textAlign: "center",
            marginTop: "40px",
          }}
        >
          <motion.a
            href="/apply-now"
            className="button -md -dark-1 bg-blue-1 text-white"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "12px",
              padding: "16px 32px",
              backgroundColor: "#000000",
              color: "white",
              borderRadius: "10px",
              textDecoration: "none",
              fontSize: "18px",
              fontWeight: "600",
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Apply for Scholarship <FiArrowRight style={{ fontSize: "24px" }} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
