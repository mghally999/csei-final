"use client";

import React from "react";
import { FiArrowRight } from "react-icons/fi";
import {
  FaBullhorn,
  FaUsersCog,
  FaUniversity,
  FaGlobe,
  FaClock,
  FaHandshake,
} from "react-icons/fa";
import Link from "next/link";

const employerBenefits = [
  {
    title: "Brand Visibility & Engagement",
    description:
      "Employer branding on campus, guest lectures, webinars, and early engagement through internships and events.",
    icon: <FaBullhorn style={{ color: "#BFDBFE", fontSize: "28px" }} />,
  },
  {
    title: "Tailored Recruitment Support",
    description:
      "Role-specific candidate shortlisting, hiring drives, and access to pre-assessed talent pools.",
    icon: <FaUsersCog style={{ color: "#BFDBFE", fontSize: "28px" }} />,
  },
  {
    title: "Strong Institutional Support",
    description:
      "Continuous collaboration, placement team coordination, and post-hiring support.",
    icon: <FaUniversity style={{ color: "#BFDBFE", fontSize: "28px" }} />,
  },
  {
    title: "Diversity & Inclusion",
    description:
      "Access talent from various social, economic, and geographic backgrounds.",
    icon: <FaGlobe style={{ color: "#BFDBFE", fontSize: "28px" }} />,
  },
  {
    title: "Faster Hiring Cycles",
    description:
      "Structured placement seasons and reduced time-to-hire compared to traditional recruitment.",
    icon: <FaClock style={{ color: "#BFDBFE", fontSize: "28px" }} />,
  },
  {
    title: "Loyalty and Retention",
    description:
      "Higher loyalty and tenure, plus clear growth paths for graduates.",
    icon: <FaHandshake style={{ color: "#BFDBFE", fontSize: "28px" }} />,
  },
];

export default function EmployerPartnershipCards() {
  return (
    <section className="about-subpage layout-pt-lg layout-pb-lg bg-light-3 custom-linear-blue-top">
      <div className="cards-wrapper">
        <h2 className="values-title">Why Partner With CSEI?</h2>
        <p className="values-subtext">
          Partnering with CSEI is more than just a recruitment strategy — it’s
          an investment in shaping the future of your organization and the
          industry.
        </p>

        <div className="cards-grid">
          {employerBenefits.map((item, index) => (
            <div
              className="card"
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="icon-wrapper">{item.icon}</div>
              <h4 className="text-white fw-600">{item.title}</h4>
              <p>{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-60">
          <Link
            href="/contact-us"
            rel="noopener noreferrer"
            style={{
              backgroundColor: "#000000",
              color: "#ffffff",
              padding: "14px 30px",
              borderRadius: "8px",
              fontWeight: "600",
              fontSize: "16px",
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              textDecoration: "none",
              flexWrap: "wrap",
            }}
          >
            Get in Touch <FiArrowRight />
          </Link>
        </div>
      </div>

      <style jsx>{`
        .about-subpage {
          font-family: sans-serif;
        }

        .cards-wrapper {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          text-align: center;
        }

        .values-title {
          font-size: 42px;
          font-weight: 800;
          margin-bottom: 20px;
          color: #000;
        }

        .values-subtext {
          font-size: 16px;
          color: #000;
          margin-bottom: 48px;
        }

        .cards-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 24px;
          justify-content: center;
        }

        .card {
          background: #000;
          padding: 24px;
          border: 1px solid #bfdbfe;
          border-radius: 12px;
          text-align: center;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          backdrop-filter: blur(4px);
          width: 100%;
          max-width: 360px;
          flex: 1 1 300px;
          color: white;
        }

        .icon-wrapper {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background-color: rgba(30, 58, 138, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 16px auto;
        }

        .card h4 {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 8px;
        }

        .card p {
          font-size: 14px;
          line-height: 1.6;
          padding: 0 12px;
        }

        @media (max-width: 768px) {
          .values-title {
            font-size: 30px;
          }

          .cards-wrapper {
            padding: 0 16px;
          }
        }
      `}</style>
    </section>
  );
}
