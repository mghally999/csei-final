"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Administration() {
  const [activeTab, setActiveTab] = useState("All");

  const brandColors = {
    primary: "#001E6C",
    secondary: "#000C2D",
    accent: "#E05500",
    lightText: "#F5F5F5",
    darkText: "#333333",
    border: "#E0E0E0",
    highlight: "#0A1445",
  };

  const departments = [
    "All",
    "Leadership Team",
    "Admissions",
    "Student Support",
    "IT & Software",
    "Human Resources / Placements",
    "Academics",
    "Support Services",
  ];

  const leadershipTeam = [
    {
      name: "Mr. Suhail Ahmed Mohammed",
      role: "Board of Directors",
      image: "/assets/img/about/team/Mr-Suhail.png",
    },
    {
      name: "Mr. Roshan Gautam",
      role: "General Manager",
      image: "/assets/img/about/team/Mr-Roshan.png",
    },
    {
      name: "Dr. Apollo Serafico",
      role: "Head of Academics",
      image: "/assets/img/about/team/Mr-Apolo.png",
    },
    {
      name: "Dr. Khaled Anwar",
      role: "Lead Internal Verifier",
      image: "/assets/img/about/team/Dr-Khaled.jpeg",
    },
  ];

  const admissionsTeam = [
    {
      name: "Ms. Mehvish Shahzad",
      role: "Admission Manager",
      image: "/assets/img/about/team/mehvish-shahzad.png",
    },
    {
      name: "Ms. Binisha Sapkota",
      role: "Admission Counsellor",
      image: "/assets/img/about/team/binisha-sapkota.png",
    },
    {
      name: "Ms. Bishakha Madai",
      role: "International Admission Officer",
      image: "/assets/img/about/team/bishaka-madai.jpg",
    },
    {
      name: "Ms. Puja Jaiswal",
      role: "Admissions Admin",
      image: "/assets/img/about/team/who-we-are.png",
    },
  ];

  const studentSupportTeam = [
    {
      name: "Mr. Kaleem Ullah",
      role: "Public Relationship Officer / Student Support Services",
      image: "/assets/img/about/team/kaleem-ullah.png",
    },
  ];

  const itSoftwareTeam = [
    {
      name: "Mr. Mohammed Ghally",
      role: "Software Engineer",
      image: "/assets/img/about/team/mohammed-ghally.png",
    },
    {
      name: "Mr. Sajin Rethnamani",
      role: "Digital Marketing Executive",
      image: "/assets/img/about/team/shajin-rethnamani.jpeg",
    },
  ];

  const hrPlacementsTeam = [
    {
      name: "Ms. Merlyn Francis",
      role: "HR & Placements Officer",
      image: "/assets/img/about/team/merlyn-francis.png",
    },
  ];

  const academicTeam = [
    {
      name: "Ms. Gayani Arumapperuma",
      role: "Business Faculty",
      image: "/assets/img/about/team/gayani-arumapperuma.png",
    },
    {
      name: "Mr. Omar Tariq",
      role: "Tourism & Culinary Art Faculty",
      image: "/assets/img/about/team/omar-tariq.png",
    },
    {
      name: "Mr. Hailur Rehman",
      role: "IT Faculty",
      image: "/assets/img/about/team/hailur-rehman.jpeg",
    },
    {
      name: "Dr. Tayyaba Munir",
      role: "Health Faculty",
      image: "/assets/img/about/team/dr-tayyaba.jpeg",
    },
  ];

  const supportTeam = [
    {
      name: "Mr. Shajin Rethnamani",
      role: "Social Media Executive",
      image: "/assets/img/about/team/shajin-rethnamani.jpeg",
    },
  ];

  const allTeamMembers = {
    All: [
      ...leadershipTeam,
      ...admissionsTeam,
      ...studentSupportTeam,
      ...itSoftwareTeam,
      ...hrPlacementsTeam,
      ...academicTeam,
      ...supportTeam,
    ],
    "Leadership Team": leadershipTeam,
    Admissions: admissionsTeam,
    "Student Support": studentSupportTeam,
    "IT & Software": itSoftwareTeam,
    "Human Resources / Placements": hrPlacementsTeam,
    Academics: academicTeam,
    "Support Services": supportTeam,
  };

  return (
    <div className="admin-container custom-padding">
      <div className="admin-sidebar">
        <ul className="department-tabs">
          {departments.map((department, index) => (
            <li
              key={index}
              className={`tab-item ${activeTab === department ? "active" : ""}`}
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
          {allTeamMembers[activeTab] && allTeamMembers[activeTab].length > 0 ? (
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

      {/* Styles */}
      <style jsx>{`
        .admin-container {
          display: flex;
          gap: 40px;
          padding: 0 40px;
          margin-top: 75px;
          font-family: "Inter", sans-serif;
          color: ${brandColors.darkText};
          max-width: 1400px;
          margin: 0 auto;
          padding-bottom: 60px;
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
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
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
          padding-top: 100%;
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
          display: flex;
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
          .staff-grid {
            grid-template-columns: 1fr;
          }

          .col_xl_3,
          .col_md_6 {
            width: 100%;
          }
        }

        @media (max-width: 480px) {
          .admin-container {
            padding: 0 20px;
          }
        }
      `}</style>
    </div>
  );
}
