"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Administration = () => {
  const [activeTab, setActiveTab] = useState("All");

  // Brand colors
  const brandColors = {
    primary: "#001E6C",
    secondary: "#000C2D",
    accent: "#E05500",
    lightText: "#F5F5F5",
    darkText: "#333333",
    border: "#E0E0E0",
    highlight: "#0A1445",
  };

  // Departments
  const departments = [
    "All",
    "Leadership Team",
    "Admissions",
    "Student Support",
    "Software",
    "Finance",
    "Human Resources",
    "Support Services",
  ];

  // Leadership Team
  const leadershipTeam = [
    {
      name: "Mr. Suhail Ahmed Mohammed",
      role: "Board of Directors",
      image: "/assets/img/about/team/Mr-Suhail.png",
    },
    {
      name: "Dr. Apollo Serafico",
      role: "Head of Academics",
      image: "/assets/img/about/team/Mr-Apolo.png",
    },
    {
      name: "Mr. Roshan Gautam",
      role: "General Manager",
      image: "/assets/img/about/team/Mr-Roshan.png",
    },
    {
      name: "Dr. Khaled Anwar",
      role: "Lead Internal Verifier",
      image: "/assets/img/about/team/Dr-Khaled.jpeg",
    },
  ];

  // Software Team
  const softwareTeam = [
    {
      name: "Mohammed Ghally",
      role: "Software Engineer",
      image: "/assets/img/about/team/mohammed-ghally.png",
    },
  ];

  // Student Support Team
  const studentSupportTeam = [
    {
      name: "Kaleem Ullah",
      role: "Public Relationship Officer / Student Support",
      image: "/assets/img/about/team/kaleem-ullah.png",
    },
  ];

  // All Team Members
  const allTeamMembers = {
    All: [
      ...leadershipTeam,
      ...softwareTeam,
      ...studentSupportTeam,
      {
        name: "Shajin Rethnamani",
        role: "Social Media Executive",
        image: "/assets/img/about/team/shajin-rethnamani.jpeg",
      },
      {
        name: "Binisha Sapkota",
        role: "Admission Counsellor",
        image: "/assets/img/about/team/binisha-sapkota.png",
      },
      {
        name: "Mehvish Shahzad",
        role: "Admission Manager",
        image: "/assets/img/about/team/mehvish-shahzad.png",
      },
      {
        name: "Bishakha Madai",
        role: "International Admission Officer",
        image: "/assets/img/about/team/who-we-are.png",
      },
      {
        name: "Ms Gayani Arumapperuma",
        role: "Internal Verifier",
        image: "/assets/img/about/team/gayani-arumapperuma.png",
      },
      {
        name: "Merlyn Francis",
        role: "HR / Placements Officer",
        image: "/assets/img/about/team/merlyn-francis.png",
      },
      {
        name: "Puja Jaiswal",
        role: "Admin",
        image: "/assets/img/about/team/who-we-are.png",
      },
    ],
    "Leadership Team": leadershipTeam,
    Admissions: [
      {
        name: "Binisha Sapkota",
        role: "Admission Counsellor",
        image: "/assets/img/about/team/binisha-sapkota.png",
      },
      {
        name: "Mehvish Shahzad",
        role: "Admission Manager",
        image: "/assets/img/about/team/mehvish-shahzad.png",
      },
      {
        name: "Bishakha Madai",
        role: "International Admission Officer",
        image: "/assets/img/about/team/who-we-are.png",
      },
    ],
    "Student Support": studentSupportTeam,
    Software: softwareTeam,
    Finance: [
      {
        name: "Srikrishna Rao",
        role: "Finance & Projects",
        email: "srikrishna.rao@manipaidubai.com",
        image: "",
      },
    ],
    "Human Resources": [
      {
        name: "Merlyn Francis",
        role: "HR / Placements Officer",
        image: "/assets/img/about/team/merlyn-francis.png",
      },
    ],
    "Support Services": [
      {
        name: "Shajin Rethnamani",
        role: "Social Media Executive",
        image: "/assets/img/about/team/shajin-rethnamani.jpeg",
      },
      {
        name: "Puja Jaiswal",
        role: "Admin",
        image: "/assets/img/about/team/who-we-are.png",
      },
    ],
  };

  return (
    <div className="administration-page">
      {/* Hero Section - Updated to match who-we-are style */}
      <div className="hero-container">
        <Image
          src="/assets/img/about/team/who-we-are.png"
          alt="MAHE Dubai Administration Team"
          fill
          className="hero-image"
          priority
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
        <div className="overlay" />
        <h1 className="hero-title bottom-aligned">
          {["Who We Are"].map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              {word}{" "}
            </motion.span>
          ))}
        </h1>
      </div>

      {/* Main Content */}
      <div className="admin-container">
        <div className="admin-sidebar">
          <ul className="department-tabs">
            {departments.map((department, index) => (
              <li
                key={index}
                className={`tab-item ${
                  activeTab === department ? "active" : ""
                }`}
                onClick={() => setActiveTab(department)}
              >
                {department}
                {activeTab === department && (
                  <motion.div
                    className="active-indicator"
                    layoutId="activeTab"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="admin-content">
          <div className="staff-grid">
            {allTeamMembers[activeTab] &&
            allTeamMembers[activeTab].length > 0 ? (
              allTeamMembers[activeTab].map((staff, index) => (
                <div key={index} className="col_12 col_md_6 col_xl_3">
                  <div className="profileCard_profileCard__gIIi4">
                    <div className="profileCard_imgWrapper__pAPFB">
                      {staff.image ? (
                        <img
                          alt="card"
                          loading="lazy"
                          width="360"
                          height="248"
                          decoding="async"
                          className="img-hack"
                          src={staff.image}
                          style={{ color: "transparent" }}
                        />
                      ) : (
                        <div className="placeholder-image">
                          <span>
                            {staff.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="profileCard_contentWrapper__1dRtE profileCard_autoHight__Ac9km">
                      <h5 className="line-clamp-2 profileCard_height1__zzskm profileCard_title__SMUO2">
                        {staff.name}
                      </h5>
                      <p className="line-clamp-1">{staff.role}</p>
                      {staff.email && (
                        <div className="profileCard_contactDetailList__40m3k">
                          <div className="profileCard_contactDetailBox__B3Lj7">
                            <div className="profileCard_iconWrapper__kdnSY">
                              <img
                                alt="email"
                                loading="lazy"
                                width="20"
                                height="20"
                                decoding="async"
                                src="/assets/svg/email-blue.svg"
                                style={{ color: "transparent" }}
                              />
                            </div>
                            <div className="profileCard_contactDetail__6ZYcE">
                              <ul>
                                <li>
                                  <a href={`mailto:${staff.email}`}>
                                    {staff.email}
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="no-staff-message">
                No staff members found for this department.
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        .administration-page {
          font-family: "Inter", sans-serif;
          color: ${brandColors.darkText};
          max-width: 1400px;
          margin: 0 auto;
          padding-bottom: 60px;
        }

        /* Hero Section - Updated to match who-we-are style */
        .hero-container {
          position: relative;
          height: 100vh;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .hero-image {
          object-fit: cover;
          object-position: center;
          will-change: transform;
        }

        .overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.8) 0%,
            rgba(0, 0, 0, 0.2) 50%,
            rgba(0, 0, 0, 0.8) 100%
          );
          z-index: 1;
        }

        .hero-title {
          position: absolute;
          bottom: 60px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 2;
          color: white;
          font-size: clamp(2.5rem, 8vw, 5rem);
          font-weight: 900;
          text-align: center;
          line-height: 1.2;
          text-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
          max-width: 90%;
          will-change: transform;
          display: inline-block;
          padding: 0 20px;
        }

        /* Main Layout */
        .admin-container {
          display: flex;
          gap: 40px;
          padding: 0 40px;
          margin-top: 75px;
        }

        .admin-sidebar {
          flex: 0 0 280px;
        }

        .admin-content {
          flex: 1;
        }

        /* Department Tabs */
        .department-tabs {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .tab-item {
          position: relative;
          padding: 14px 24px;
          cursor: pointer;
          font-weight: 500;
          color: #555;
          border-radius: 8px;
          transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
          font-size: 15px;
        }

        .tab-item:hover {
          background: rgba(0, 30, 108, 0.05);
        }

        .tab-item.active {
          color: ${brandColors.primary};
          font-weight: 600;
          background: rgba(0, 30, 108, 0.08);
        }

        .active-indicator {
          position: absolute;
          left: 0;
          top: 0;
          height: 100%;
          width: 4px;
          background: ${brandColors.primary};
          border-radius: 0 4px 4px 0;
        }

        /* Staff Grid */
        .staff-grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 30px;
          margin-bottom: 60px;
        }

        .profileCard_profileCard__gIIi4 {
          background: #fff;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .profileCard_profileCard__gIIi4:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
        }

        .profileCard_imgWrapper__pAPFB {
          position: relative;
          width: 100%;
          padding-top: 70%;
          overflow: hidden;
        }

        .profileCard_imgWrapper__pAPFB img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: auto;
          object-fit: cover;
        }

        .img-hack {
          color: transparent;
        }

        .profileCard_contentWrapper__1dRtE {
          padding: 20px;
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .profileCard_autoHight__Ac9km {
          height: auto;
        }

        .profileCard_title__SMUO2 {
          font-size: 18px;
          font-weight: 600;
          color: ${brandColors.primary};
          margin: 0 0 8px 0;
          line-height: 1.3;
        }

        .profileCard_height1__zzskm {
          min-height: 46px;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
          margin: 0 0 15px 0;
          color: #000000;
          font-weight: bold;
          font-size: 14px;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .profileCard_contactDetailList__40m3k {
          margin-top: auto;
        }

        .profileCard_contactDetailBox__B3Lj7 {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .profileCard_iconWrapper__kdnSY {
          flex-shrink: 0;
        }

        .profileCard_contactDetail__6ZYcE {
          flex: 1;
        }

        .profileCard_contactDetail__6ZYcE ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .profileCard_contactDetail__6ZYcE a {
          color: ${brandColors.accent};
          text-decoration: none;
          font-size: 14px;
          transition: color 0.2s;
        }

        .profileCard_contactDetail__6ZYcE a:hover {
          color: #c04800;
          text-decoration: underline;
        }

        .placeholder-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: #f5f5f5;
          display: flex;
          align-items: center;
          justify-content: center;
          color: ${brandColors.primary};
          font-size: 24px;
          font-weight: bold;
        }

        .no-staff-message {
          grid-column: 1 / -1;
          text-align: center;
          padding: 60px;
          color: #666;
          font-style: italic;
          font-size: 1.1rem;
        }

        /* Responsive Design */
        @media (max-width: 1200px) {
          .col_xl_3 {
            width: 33.333%;
          }
        }

        @media (max-width: 992px) {
          .col_md_6 {
            width: 50%;
          }
        }

        @media (max-width: 768px) {
          .hero-container {
            height: 80vh;
          }

          .hero-title {
            font-size: 3rem;
          }

          .admin-container {
            flex-direction: column;
            gap: 30px;
            padding: 0 30px;
          }

          .admin-sidebar {
            flex: 0 0 auto;
          }

          .department-tabs {
            flex-direction: row;
            overflow-x: auto;
            padding-bottom: 15px;
          }

          .tab-item {
            white-space: nowrap;
          }

          .active-indicator {
            left: 50%;
            transform: translateX(-50%);
            top: auto;
            bottom: 0;
            height: 4px;
            width: 80%;
            border-radius: 4px 4px 0 0;
          }

          .col_md_6 {
            width: 100%;
          }
        }

        @media (max-width: 576px) {
          .hero-container {
            height: 70vh;
          }

          .hero-title {
            font-size: 2.5rem;
          }

          .staff-grid {
            grid-template-columns: 1fr;
          }

          .col_xl_3,
          .col_md_6 {
            width: 100%;
          }
        }

        @media (max-width: 480px) {
          .hero-container {
            height: 60vh;
          }

          .hero-title {
            font-size: 2rem;
          }

          .admin-container {
            padding: 0 20px;
          }
        }
      `}</style>
    </div>
  );
};

export default Administration;
