"use client";
import React from "react";
import {
  FaHandRock,
  FaUsers,
  FaChalkboardTeacher,
  FaAward,
  FaCrown,
  FaHandsHelping,
} from "react-icons/fa";

// Style objects
const cardStyle = {
  height: "150px",
  background: "#000000",
  padding: "24px",
  border: "1px solid #BFDBFE", // tailwind: border-blue-200
  borderRadius: "12px",
  textAlign: "center",
  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  backdropFilter: "blur(4px)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};

const iconWrapperStyle = {
  width: "56px",
  height: "56px",
  borderRadius: "50%",
  backgroundColor: "rgba(30, 58, 138, 0.4)", // tailwind: bg-blue-900/40
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: "16px",
};

const iconStyle = {
  color: "#BFDBFE", // tailwind: text-blue-200
  fontSize: "28px",
};

const titleStyle = {
  color: "white",
  fontSize: "18px",
  fontWeight: "600",
  marginBottom: "8px",
};

const descriptionStyle = {
  color: "white",
  fontSize: "14px",
  lineHeight: "1.6",
  padding: "0 12px",
};

// Values data
const values = [
  {
    title: "Empowerment",
    description: "Ignite every student’s potential.",
    icon: <FaHandRock style={iconStyle} />,
  },
  {
    title: "Inclusivity",
    description: "Emphasis on diversity, belonging, and equal opportunity.",
    icon: <FaUsers style={iconStyle} />,
  },
  {
    title: "Support & Mentorship",
    description:
      "Prioritizing personalized guidance and holistic student development.",
    icon: <FaChalkboardTeacher style={iconStyle} />,
  },
  {
    title: "Excellence",
    description: "Dedication to novelty, quality and rigor.",
    icon: <FaAward style={iconStyle} />,
  },
  {
    title: "Leadership",
    description:
      "Focus on cultivating changemakers who drive positive change globally.",
    icon: <FaCrown style={iconStyle} />,
  },
  {
    title: "Community & Collaboration",
    description:
      "Building a shared environment where growth is nurtured together.",
    icon: <FaHandsHelping style={iconStyle} />,
  },
];

export default function Values() {
  return (
    <section style={{ padding: "80px 0", backgroundColor: "#04044e" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 16px" }}>
        {/* Section Title */}
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <h2
            style={{ color: "white", fontSize: "32px", marginBottom: "20px" }}
          >
            Our Core Values
          </h2>
          <p style={{ color: "white", fontSize: "16px", lineHeight: "1.6" }}>
            The principles that shape our culture, guide our mission, and define
            our identity.
          </p>
        </div>

        {/* Values Cards */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "24px",
            justifyContent: "center",
          }}
        >
          {values.map((item, index) => (
            <div
              key={index}
              style={{
                width: "100%",
                maxWidth: "360px",
                flex: "1 1 300px",
              }}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div style={cardStyle}>
                <div style={iconWrapperStyle}>{item.icon}</div>
                <h4 style={titleStyle}>{item.title}</h4>
                <p style={descriptionStyle}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
