"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import ApplicationFormModal from "@/components/ApplicationFormModal";

// ✅ Reusable List Item Component
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

// ✅ Section Wrapper
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

// ✅ Main Component
export default function InternationalStudentsGuide() {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

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
            color: "#000",
          }}
        >
          International Students – Admission & Visa Guide
        </motion.h2>

        {/* === Sections === */}
        <Section title="How to Apply as an International Student">
          <ul style={{ paddingLeft: 0, listStyle: "none" }}>
            <ListItem text="Complete the online application form accurately." />
            <ListItem text="Upload transcripts, certificates, and English proficiency proof." />
            <ListItem text="All documents can be submitted via email if needed." />
            <ListItem text="Wait for your conditional or official offer letter." />
            <ListItem text="Eligibility is based on academic qualifications and program capacity." />
          </ul>
        </Section>

        <Section title="CSEI Academy Support Services">
          <ul style={{ paddingLeft: 0, listStyle: "none" }}>
            <ListItem text="Step-by-step guidance from admission counselors." />
            <ListItem text="Visa & admission consultants to assist you." />
            <ListItem text="Referral to certified attestation & translation agencies." />
            <ListItem text="MOFA Attestation support for UAE requirements." />
          </ul>
        </Section>

        <Section title="Student Visa Options">
          <ul style={{ paddingLeft: 0, listStyle: "none" }}>
            <ListItem text="Short-Term Student Visa (up to 90 days) – for crash courses, licensing, certifications." />
            <ListItem text="Long-Term Student Visa (1 year) – for diploma, advanced diploma, or degree programs." />
          </ul>
        </Section>

        <Section title="Visa Application Support">
          <ul style={{ paddingLeft: 0, listStyle: "none" }}>
            <ListItem text="Visa documentation check & submission via CSEI coordinator." />
            <ListItem text="Medical insurance & airport pickup assistance." />
            <ListItem text="Regular follow-ups until approval and entry permit." />
          </ul>
        </Section>

        <Section title="Visa Application Requirements">
          <ul style={{ paddingLeft: 0, listStyle: "none" }}>
            <ListItem text="Passport (valid for at least 6 months)" />
            <ListItem text="Passport-size photo (white background)" />
            <ListItem text="Educational certificates & transcripts" />
            <ListItem text="Offer letter from CSEI Academy" />
            <ListItem text="Paid visa processing fee to CSEI Academy" />
          </ul>
        </Section>

        <Section title="Important Visa Notes">
          <ul style={{ paddingLeft: 0, listStyle: "none" }}>
            <ListItem text="Apply for your visa at least 1 month before the course starts." />
            <ListItem text="Plan to arrive 2 weeks before orientation." />
            <ListItem text="Medical tests & Emirates ID (for long-term visa) are done after arrival." />
            <ListItem text="Visa approval is subject to UAE immigration laws." />
          </ul>
        </Section>

        <Section title="Visa Renewal & Cancellation">
          <ul style={{ paddingLeft: 0, listStyle: "none" }}>
            <ListItem text="Renewal must be initiated at least 1 month before expiry." />
            <ListItem text="AED 3,500 covers renewal, medical, insurance & Emirates ID." />
            <ListItem text="Students withdrawing or graduating must cancel their visa through CSEI." />
            <ListItem text="Visa cancellation requires full fee clearance." />
            <ListItem text="Failure to cancel visa properly may incur AED 5,000 fine." />
          </ul>
        </Section>

        <Section title="Visa Cancellation Charges (in AED / USD)">
          <ul style={{ paddingLeft: 0, listStyle: "none" }}>
            <ListItem text="Entry Permit Cancellation – 1200 AED / 330 USD" />
            <ListItem text="Residence Visa Cancellation (in UAE) – 1500 AED / 410 USD" />
            <ListItem text="Residence Visa Cancellation (out of UAE with passport) – 2000 AED / 550 USD" />
            <ListItem text="Residence Visa Cancellation (out of UAE without passport) – 4400 AED / 1200 USD" />
          </ul>
        </Section>

        {/* === CTA Button Section === */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            textAlign: "center",
            marginTop: "40px",
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
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
            Start Your Application
            <FiArrowRight style={{ fontSize: "24px" }} />
          </motion.button>

          <motion.button
            onClick={() => router.push("/admission/arrival-support")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              backgroundColor: "#0f1d56",
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
            Explore Arrival Support
            <FiArrowRight style={{ fontSize: "24px" }} />
          </motion.button>
        </motion.div>
      </div>

      {/* Modal Component */}
      <ApplicationFormModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </section>
  );
}
