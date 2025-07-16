"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaHandRock,
  FaUsers,
  FaChalkboardTeacher,
  FaAward,
  FaCrown,
  FaHandsHelping,
} from "react-icons/fa";

const values = [
  {
    title: "Empowerment",
    description: "Ignite every student’s potential.",
    icon: <FaHandRock />,
  },
  {
    title: "Inclusivity",
    description: "Emphasis on diversity, belonging, and equal opportunity.",
    icon: <FaUsers />,
  },
  {
    title: "Support & Mentorship",
    description:
      "Prioritizing personalized guidance and holistic student development.",
    icon: <FaChalkboardTeacher />,
  },
  {
    title: "Excellence",
    description: "Dedication to novelty, quality and rigor.",
    icon: <FaAward />,
  },
  {
    title: "Leadership",
    description:
      "Focus on cultivating changemakers who drive positive change globally.",
    icon: <FaCrown />,
  },
  {
    title: "Community & Collaboration",
    description:
      "Building a shared environment where growth is nurtured together.",
    icon: <FaHandsHelping />,
  },
];

export default function CoreValues() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <section className="core-values-section custom-linear-blue-top">
      <div className="container">
        <div className="section-header text-center" data-aos="fade-up">
          <h2 className="csei-heading">Our Core Values</h2>
          <div className="header-underline"></div>
          <p className="sectionTitle__text mt-3 max-w-3xl mx-auto">
            The principles that shape our culture, guide our mission, and define
            our identity.
          </p>
        </div>

        {/* Cards */}
        <div className="row justify-center mt-5">
          {values.map((value, index) => (
            <div
              key={index}
              className="col-lg-4 col-md-6 mb-4"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="value-card">
                <div className="icon-wrapper">{value.icon}</div>
                <h4 className="value-title">{value.title}</h4>
                <p className="value-desc">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .core-values-section {
          padding: 80px 0;
          background-color: #fff;
        }

        .csei-heading {
          font-size: 2.75rem;
          font-weight: 800;
          line-height: 1.2;
          margin: 0;
          color: #001c48;
        }

        .header-underline {
          width: 80px;
          height: 5px;
          background: linear-gradient(90deg, #3b82f6, #000000);
          margin: 12px auto 0;
          border-radius: 3px;
        }

        .sectionTitle__text {
          text-align: center;
          line-height: 1.7;
          font-size: 1.1rem;
          font-weight: 500;
          color: #000;
          margin-bottom: 50px;
        }

        .value-card {
          background: #000000;
          border: 1px solid #bfdbfe;
          height: 100%;
          border-radius: 12px;
          text-align: center;
          padding: 30px 20px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .value-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
        }

        .icon-wrapper {
          width: 64px;
          height: 64px;
          background-color: rgba(30, 58, 138, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          margin: 0 auto 16px;
        }

        .icon-wrapper :global(svg) {
          font-size: 30px;
          color: #bfdbfe;
        }

        .value-title {
          color: #ffffff;
          font-size: 20px;
          font-weight: 600;
          margin-bottom: 12px;
        }

        .value-desc {
          color: #ffffff;
          font-size: 15px;
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .csei-heading {
            font-size: 2rem;
          }

          .sectionTitle__text {
            font-size: 1rem;
          }

          .value-title {
            font-size: 18px;
          }

          .value-desc {
            font-size: 14px;
          }
        }
      `}</style>
    </section>
  );
}
