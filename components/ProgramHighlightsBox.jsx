"use client";

import React from "react";
import {
  FaClock,
  FaGraduationCap,
  FaMapMarkerAlt,
  FaBookOpen,
} from "react-icons/fa";
import { extractCreditsFromString } from "@/utils/extractCredits";

export default function ProgramHighlightsBox({ data }) {
  const credits = extractCreditsFromString(data?.qualificationStructure);

  const highlightItems = [
    {
      icon: <FaClock size={20} />,
      label: "Duration",
      value: data?.duration || "N/A",
    },
    {
      icon: <FaGraduationCap size={20} />,
      label: "Intake",
      value: "September and February",
    },
    {
      icon: <FaMapMarkerAlt size={20} />,
      label: "Location",
      value: "Dubai",
    },
    {
      icon: <FaBookOpen size={20} />,
      label: "Credits",
      value: credits ? `${credits} Credits` : "N/A",
    },
  ];

  return (
    <div className="program-box">
      {highlightItems.map((item, index) => (
        <div key={index} className="program-item">
          <div className="program-icon">{item.icon}</div>
          <div className="program-text">
            <span className="program-label">{item.label}:</span>{" "}
            <span className="program-value">{item.value}</span>
          </div>
        </div>
      ))}

      <style jsx>{`
        .program-box {
          background: linear-gradient(135deg, #dbeafe, #93c5fd);
          padding: 30px;
          border-radius: 16px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
          transition: all 0.4s ease;
          transform-style: preserve-3d;
        }

        .program-box:hover {
          transform: translateY(-5px) scale(1.01);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }

        .program-item {
          display: flex;
          align-items: center;
          margin-bottom: 20px;
          transition: all 0.3s ease;
        }

        .program-item:last-child {
          margin-bottom: 0;
        }

        .program-icon {
          width: 42px;
          height: 42px;
          background-color: #ffffff;
          color: #1e3a8a;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          box-shadow: 0 6px 14px rgba(30, 58, 138, 0.25);
          margin-right: 16px;
          transition: all 0.3s ease;
        }

        .program-box:hover .program-icon {
          background-color: #1e3a8a;
          color: #ffffff;
        }

        .program-text {
          font-size: 16px;
          font-weight: 600;
          color: #1e293b;
        }

        .program-label {
          font-weight: 800;
          color: #0f172a;
        }

        .program-value {
          color: #1e3a8a;
        }

        @media (max-width: 600px) {
          .program-box {
            padding: 24px;
          }

          .program-item {
            margin-bottom: 16px;
          }

          .program-icon {
            width: 38px;
            height: 38px;
          }

          .program-text {
            font-size: 15px;
          }
        }
      `}</style>
    </div>
  );
}
