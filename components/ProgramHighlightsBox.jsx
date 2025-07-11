"use client";
import React from "react";
import {
  FaClock,
  FaGraduationCap,
  FaMapMarkerAlt,
  FaFileAlt,
  FaTh,
} from "react-icons/fa";

export default function ProgramHighlightsBox({ data }) {
  const highlightItems = [
    {
      icon: <FaClock size={20} color="#000000" />,
      label: "Duration",
      value: data?.duration || "N/A",
    },
    {
      icon: <FaGraduationCap size={20} color="#000000" />,
      label: "Intake",
      value: "September and February",
    },
    {
      icon: <FaMapMarkerAlt size={20} color="#000000" />,
      label: "Location",
      value: "Dubai",
    },
  ];

  return (
    <div
      style={{
        backgroundColor: "rgb(134, 179, 247)",
        borderRadius: "10px",
        padding: "24px",
        marginTop: "20px",
        boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
      }}
    >
      {highlightItems.map((item, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: index !== highlightItems.length - 1 ? "18px" : "0",
          }}
        >
          <div style={{ marginRight: "16px" }}>{item.icon}</div>
          <p
            style={{
              margin: 0,
              color: "#000000",
              fontSize: "16px",
              fontWeight: "900",
            }}
          >
            <strong>{item.label}:</strong> {item.value}
          </p>
        </div>
      ))}
    </div>
  );
}
