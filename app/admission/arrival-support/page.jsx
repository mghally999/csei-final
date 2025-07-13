"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";
import ApplicationFormModal from "@/components/ApplicationFormModal";

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
        color: "#0f1d56",
        marginBottom: "20px",
        borderBottom: "2px solid #0f1d56",
        paddingBottom: "10px",
      }}
    >
      {title}
    </h3>
    {children}
  </motion.div>
);

export default function ArrivalOrientation() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

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
          Arrival, Orientation & Student Support
        </motion.h2>

        <Section title="Before You Arrive">
          <ul style={{ paddingLeft: 0, listStyle: "none" }}>
            <ListItem text="Receive your visa approval and prepare your travel documents." />
            <ListItem text="Request airport pickup and accommodation assistance from CSEI." />
            <ListItem text="Follow a pre-departure checklist (travel, insurance, housing)." />
          </ul>
        </Section>

        <Section title="Upon Arrival in Dubai">
          <ul style={{ paddingLeft: 0, listStyle: "none" }}>
            <ListItem text="Airport pickup and drop-off to accommodation (if arranged)." />
            <ListItem text="Assistance with check-in and local transport guidance." />
            <ListItem text="Medical test and Emirates ID support (for long-term visa holders)." />
          </ul>
        </Section>

        <Section title="Student Orientation Program">
          <ul style={{ paddingLeft: 0, listStyle: "none" }}>
            <ListItem text="Welcome session and campus/facility tour." />
            <ListItem text="Academic schedule briefing and program introductions." />
            <ListItem text="Explanation of UAE cultural norms, laws, and expectations." />
            <ListItem text="Overview of visa rules, insurance, attendance policies." />
            <ListItem text="Meet your faculty, student advisor, and program coordinator." />
          </ul>
        </Section>

        <Section title="Ongoing Support Services">
          <ul style={{ paddingLeft: 0, listStyle: "none" }}>
            <ListItem text="Academic advisors and exam preparation resources." />
            <ListItem text="Visa renewals, cancellations, and immigration guidance." />
            <ListItem text="Accommodation and shared housing recommendations." />
            <ListItem text="Emotional wellness, career coaching, and job fair access." />
            <ListItem text="Student events, city tours, and volunteering opportunities." />
          </ul>
        </Section>

        <Section title="What to Bring With You">
          <ul style={{ paddingLeft: 0, listStyle: "none" }}>
            <ListItem text="Passport, visa copy, and attested academic documents." />
            <ListItem text="Valid travel insurance (if not covered by CSEI)." />
            <ListItem text="UAE-compatible debit/credit card or cash." />
            <ListItem text="Light clothing, electronics, adapters, and essentials." />
          </ul>
        </Section>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            textAlign: "center",
            marginTop: "40px",
          }}
        >
          <motion.button
            onClick={handleOpenModal}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              backgroundColor: "#000000",
              color: "white",
              padding: "16px 32px",
              borderRadius: "10px",
              border: "none",
              fontSize: "18px",
              fontWeight: "600",
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            Start Your Application <FiArrowRight style={{ fontSize: "24px" }} />
          </motion.button>
        </motion.div>
      </div>

      {/* Modal */}
      <ApplicationFormModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </section>
  );
}
