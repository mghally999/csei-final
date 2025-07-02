"use client";

import React, { useRef, useEffect, useState } from "react";

import Overview from "@/components/programs/Overview";
import { WhyCSEI } from "@/components/programs/WhyCSEI";
import { EntryRequirements } from "@/components/programs/EntryRequirements";
import { QualificationStructure } from "@/components/programs/QualificationStructure";
import { AllUnits } from "@/components/programs/AllUnits";
import { AssessmentVerification } from "@/components/programs/AssessmentVerification";
import { CareerOpportunities } from "@/components/programs/CareerOpportunities";
import { UniversityProgression } from "@/components/programs/UniversityProgression";

const menuItems = [
  { id: 1, text: "Overview" },
  { id: 2, text: "Why CSEI?" },
  { id: 3, text: "Entry Requirements" },
  { id: 4, text: "Qualification Structure" },
  { id: 5, text: "Qualification Units" },
  { id: 6, text: "Assessment and Verification" },
  { id: 7, text: "Career Opportunities" },
  { id: 8, text: "University Progression" },
];

export default function StickyTabsSection({ program }) {
  const [activeTab, setActiveTab] = useState(1);
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = Number(entry.target.getAttribute("data-section-id"));
            setActiveTab(id);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px 0px -60% 0px",
        threshold: 0.3,
      }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const handleClick = (id) => {
    const el = sectionRefs.current[id - 1];
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const sections = [
    { id: 1, Component: Overview, data: program.overview },
    { id: 2, Component: WhyCSEI, data: program.whyCSEI },
    { id: 3, Component: EntryRequirements, data: program.entryRequirements },
    {
      id: 4,
      Component: QualificationStructure,
      data: program.qualificationStructureText,
    },
    { id: 5, Component: AllUnits, data: program.qualificationUnits },
    {
      id: 6,
      Component: AssessmentVerification,
      data: program.assessmentVerification,
    },
    {
      id: 7,
      Component: CareerOpportunities,
      data: program.careerOpportunities,
    },
    {
      id: 8,
      Component: UniversityProgression,
      data: program.universityProgression,
    },
  ];

  return (
    <section className="sticky-section">
      <div className="container-layout">
        {/* Sticky Sidebar */}
        <aside className="sidebar">
          {menuItems.map(({ id, text }) => (
            <button
              key={id}
              onClick={() => handleClick(id)}
              className={`tab-button ${activeTab === id ? "active" : ""}`}
            >
              {text}
            </button>
          ))}
        </aside>

        {/* Main Content */}
        <div className="content">
          {sections.map(({ id, Component, data }) => (
            <div
              key={id}
              ref={(el) => (sectionRefs.current[id - 1] = el)}
              data-section-id={id}
              className={`content-section ${
                activeTab === id ? "highlight" : ""
              }`}
            >
              <Component data={data} />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .sticky-section {
          padding: 4rem 1rem;
        }

        .container-layout {
          display: flex;
          max-width: 1200px;
          margin: 0 auto;
          gap: 2rem;
        }

        .sidebar {
          width: 250px;
          position: sticky;
          top: 120px;
          align-self: flex-start;
          background: #ffffff;
          padding: 1rem;
          border-radius: 0.75rem;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
          border: 1px solid #e5e7eb;
          height: max-content;
        }

        .tab-button {
          display: block;
          width: 100%;
          text-align: left;
          padding: 0.75rem 1rem;
          margin-bottom: 15rem;
          background-color: #f3f4f6;
          border-radius: 0.375rem;
          font-weight: 600;
          color: #1f2937;
          transition: all 0.2s ease;
          border: none;
          cursor: pointer;
        }

        .tab-button.active {
          background-color: #000;
          color: #fff;
        }

        .tab-button:hover {
          background-color: #e5e7eb;
        }

        .content {
          flex: 1;
        }

        .content-section {
          margin-bottom: 5rem;
          scroll-margin-top: 140px;
          transition: border-left 0.3s ease;
          padding-left: 1rem;
          border-left: 4px solid transparent;
        }

        .content-section.highlight {
          border-left: 4px solid #1e40af;
          background: #f9fafb;
          border-radius: 0.5rem;
        }

        @media (max-width: 1280px) {
          .sidebar {
            display: none;
          }

          .container-layout {
            flex-direction: column;
          }

          .content {
            margin-left: 0;
          }
        }
      `}</style>
    </section>
  );
}
