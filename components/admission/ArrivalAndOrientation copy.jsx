"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

const checkStyle = {
  width: "28px",
  height: "28px",
  backgroundColor: "#000000",
  color: "white",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "16px",
  fontWeight: "bold",
  boxShadow: "0 4px 6px rgba(102, 51, 153, 0.3)",
  marginRight: "12px",
  flexShrink: 0,
};

const ListItem = ({ text }) => (
  <motion.div
    whileInView={{ opacity: 1, y: 0 }}
    initial={{ opacity: 0, y: 30 }}
    transition={{ duration: 0.4 }}
    style={{ display: "flex", alignItems: "flex-start", marginBottom: "12px" }}
  >
    <div style={checkStyle}>✓</div>
    <div
      style={{
        fontSize: "16px",
        lineHeight: "1.6",
        color: "#2d3748",
        fontWeight: 500,
      }}
    >
      {text}
    </div>
  </motion.div>
);

export default function ArrivalAndOrientation() {
  return (
    <section style={{ backgroundColor: "#f8f9fa" }} className="custom-padding">
      <div style={{ maxWidth: "1140px", margin: "0 auto" }}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            fontSize: "32px",
            fontWeight: "700",
            color: "#1a202c",
            marginBottom: "40px",
            textAlign: "center",
          }}
        >
          Arrival, Orientation & Support Services
        </motion.h2>

        <div style={{ marginBottom: "50px" }}>
          <h3
            style={{
              fontSize: "20px",
              fontWeight: "600",
              marginBottom: "20px",
            }}
          >
            Pre-Arrival Support:
          </h3>
          {[
            "Pre-departure checklist (visa, travel, insurance, accommodation)",
            "Assistance with flight bookings (if requested)",
            "Airport pickup coordination (optional – request in advance)",
          ].map((item, i) => (
            <ListItem key={i} text={item} />
          ))}
        </div>

        <div style={{ marginBottom: "50px" }}>
          <h3
            style={{
              fontSize: "20px",
              fontWeight: "600",
              marginBottom: "20px",
            }}
          >
            On Arrival:
          </h3>
          {[
            "Airport pickup (if arranged)",
            "Drop-off at your accommodation or CSEI-recommended stay options",
          ].map((item, i) => (
            <ListItem key={i} text={item} />
          ))}
        </div>

        <div style={{ marginBottom: "50px" }}>
          <h3
            style={{
              fontSize: "20px",
              fontWeight: "600",
              marginBottom: "20px",
            }}
          >
            Orientation Program Includes:
          </h3>
          {[
            "Welcome session and campus tour",
            "Introduction to academic schedules & programs",
            "Briefing on UAE rules, culture, and lifestyle",
            "Overview of visa rules, medical insurance, and attendance policies",
            "How to access student support, online learning, and exams",
            "Career development & internship planning (if applicable)",
            "Meet faculty and your student advisor who will support you throughout your course",
          ].map((item, i) => (
            <ListItem key={i} text={item} />
          ))}
        </div>

        {/* Two Column Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "40px",
            marginBottom: "50px",
          }}
        >
          <div>
            <h3
              style={{
                fontSize: "20px",
                fontWeight: "600",
                marginBottom: "20px",
              }}
            >
              Academic Support
            </h3>
            {[
              "Program coordinator and advisor for academic queries",
              "Free access to learning portals, resources, and exam prep",
              "One-on-one support for licensing exams (e.g., DHA, MOH)",
            ].map((item, i) => (
              <ListItem key={i} text={item} />
            ))}
          </div>
          <div>
            <h3
              style={{
                fontSize: "20px",
                fontWeight: "600",
                marginBottom: "20px",
              }}
            >
              Visa & Legal Support
            </h3>
            {[
              "Processing Student Visa",
              "Renewal and extension of student visa",
              "Emirates ID processing guidance",
              "Visa change or exit assistance (if required)",
            ].map((item, i) => (
              <ListItem key={i} text={item} />
            ))}
          </div>
          <div>
            <h3
              style={{
                fontSize: "20px",
                fontWeight: "600",
                marginBottom: "20px",
              }}
            >
              Accommodation Assistance
            </h3>
            {[
              "Guidance on finding safe and affordable housing",
              "Help with local leasing, PG/hostel contacts",
              "Shared accommodation options for short stays",
            ].map((item, i) => (
              <ListItem key={i} text={item} />
            ))}
          </div>
          <div>
            <h3
              style={{
                fontSize: "20px",
                fontWeight: "600",
                marginBottom: "20px",
              }}
            >
              Counseling & Wellbeing
            </h3>
            {[
              "Career counseling and coaching",
              "Emotional wellness and transition support",
              "Referrals to health or legal professionals if needed",
            ].map((item, i) => (
              <ListItem key={i} text={item} />
            ))}
          </div>
        </div>

        <div style={{ marginBottom: "50px" }}>
          <h3
            style={{
              fontSize: "20px",
              fontWeight: "600",
              marginBottom: "20px",
            }}
          >
            Cultural Integration
          </h3>
          {[
            "Student events, cultural exchange days, Dubai city tours",
            "Job/internship fairs, guest lectures, and volunteering options",
          ].map((item, i) => (
            <ListItem key={i} text={item} />
          ))}
        </div>

        <div style={{ marginBottom: "60px" }}>
          <h3
            style={{
              fontSize: "20px",
              fontWeight: "600",
              marginBottom: "20px",
            }}
          >
            What to Bring (Checklist)
          </h3>
          {[
            "Original passport & visa copy",
            "Copies of attested academic documents",
            "Valid travel insurance (if not arranged by CSEI)",
            "UAE-accepted debit/credit card or cash",
            "Light clothing, adapters, and personal care items",
          ].map((item, i) => (
            <ListItem key={i} text={item} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          style={{ textAlign: "center", marginTop: "40px" }}
        >
          <a
            href="/contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "12px",
              color: "#ffffff",
              background: "linear-gradient(to right, #2563eb, #4338ca)",
              padding: "16px 32px",
              borderRadius: "12px",
              fontSize: "18px",
              fontWeight: 600,
              textDecoration: "none",
              border: "1px solid rgba(255, 255, 255, 0.3)",
              boxShadow: "0 10px 25px rgba(0, 0, 0, 0.3)",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background =
                "linear-gradient(to right, #1d4ed8, #3730a3)";
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow =
                "0 15px 35px rgba(67, 56, 202, 0.5)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background =
                "linear-gradient(to right, #2563eb, #4338ca)";
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow =
                "0 10px 25px rgba(0, 0, 0, 0.3)";
            }}
          >
            Reach Student Support <FiArrowRight style={{ fontSize: "24px" }} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
