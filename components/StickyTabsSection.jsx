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
import SampleCertificate from "@/components/programs/SampleCertificate";
import { TuitionFees } from "@/components/programs/TuitionFees";

export default function StickyTabsSection({ program }) {
  const [activeTab, setActiveTab] = useState(1);
  const [isSticky, setIsSticky] = useState(false);
  const [limitReached, setLimitReached] = useState(false);

  const sectionRefs = useRef([]);
  const wrapperRef = useRef(null);
  const sidebarRef = useRef(null);
  const lastSectionRef = useRef(null);

  // Base menu with Tuition Fees added
  const baseMenuItems = [
    { id: 1, text: "Overview" },
    { id: 2, text: "Why CSEI?" },
    { id: 3, text: "Entry Requirements" },
    { id: 4, text: "Qualification Structure" },
    { id: 5, text: "Qualification Units" },
    { id: 6, text: "Assessment and Verification" },
    { id: 7, text: "Career Opportunities" },
    { id: 10, text: "Tuition Fees" },
  ];

  const menuItems = [...baseMenuItems];

  // Add "Sample Certificate" and "University Progression" if NOT professional
  if (!program.professional) {
    menuItems.push({ id: 8, text: "Sample Certificate" });
    menuItems.push({ id: 9, text: "University Progression" });
  }

  // Sections with Tuition Fees component
  const sections = [
    { id: 1, Component: Overview, props: { data: program.overview } },
    { id: 2, Component: WhyCSEI, props: { data: program.whyCSEI } },
    {
      id: 3,
      Component: EntryRequirements,
      props: { data: program.entryRequirements },
    },
    {
      id: 4,
      Component: QualificationStructure,
      props: { data: program.qualificationStructureText },
    },
    { id: 5, Component: AllUnits, props: { data: program.qualificationUnits } },
    {
      id: 6,
      Component: AssessmentVerification,
      props: { data: program.assessmentVerification },
    },
    {
      id: 7,
      Component: CareerOpportunities,
      props: { data: program.careerOpportunities },
    },
    {
      id: 10,
      Component: TuitionFees,
      props: {
        program, // Pass full program object
      },
    },
  ];

  if (!program.professional) {
    sections.push({
      id: 8,
      Component: SampleCertificate,
      props: {},
    });
    sections.push({
      id: 9,
      Component: UniversityProgression,
      props: {
        data: [],
        description: program.universityProgression,
      },
    });
  }

  // Sort sections to maintain correct order
  sections.sort((a, b) => a.id - b.id);

  // Scrollspy
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
        rootMargin: "-150px 0px -10% 0px",
        threshold: 0.25,
      }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  // Sticky sidebar
  useEffect(() => {
    const handleScroll = () => {
      if (!wrapperRef.current || !sidebarRef.current || !lastSectionRef.current)
        return;

      const wrapperRect = wrapperRef.current.getBoundingClientRect();
      const sidebarHeight = sidebarRef.current.offsetHeight;
      const lastSectionRect = lastSectionRef.current.getBoundingClientRect();

      setIsSticky(wrapperRect.top <= 120);
      setLimitReached(lastSectionRect.bottom <= sidebarHeight + 90);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (id) => {
    const el = sectionRefs.current[id - 1];
    if (el) {
      const offset = 180;
      const y = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section className="sticky-section" ref={wrapperRef}>
      <div className="container-layout">
        {/* Sidebar */}
        <div className="sidebar-wrapper">
          <aside
            ref={sidebarRef}
            className={`sidebar ${isSticky ? "sticky" : ""} ${
              limitReached ? "stopped" : ""
            }`}
          >
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
        </div>

        {/* Content */}
        <div className="content">
          {sections.map(({ id, Component, props }) => (
            <div
              key={id}
              ref={(el) => {
                sectionRefs.current[id - 1] = el;
                if (id === sections[sections.length - 1].id) {
                  lastSectionRef.current = el;
                }
              }}
              data-section-id={id}
              className="content-section"
            >
              <Component {...props} />
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
          max-width: 1280px;
          margin: 0 auto;
          gap: 2rem;
        }

        .sidebar-wrapper {
          width: 260px;
          flex-shrink: 0;
        }

        .sidebar {
          width: 260px;
          padding: 1rem;
          background: #fff;
          border-radius: 12px;
          border: 1px solid #e5e7eb;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
          height: max-content;
        }

        .sidebar.sticky {
          position: fixed;
          top: 167px;
          z-index: 20;
        }

        .sidebar.stopped {
          position: absolute;
          top: auto;
          bottom: 0;
        }

        .tab-button {
          display: block;
          width: 100%;
          padding: 0.75rem 1rem;
          text-align: left;
          margin-bottom: 10px;
          background: #f9fafb;
          color: #1f2937;
          border-radius: 6px;
          font-weight: 500;
          border: none;
          cursor: pointer;
          transition: 0.2s ease;
        }

        .tab-button:hover {
          background: #e5e7eb;
        }

        .tab-button.active {
          background: #000;
          color: #fff;
        }

        .content {
          flex: 1;
        }

        .content-section {
          scroll-margin-top: 140px;
          margin-bottom: 5rem;
          min-height: 400px;
        }

        @media (max-width: 1024px) {
          .container-layout {
            flex-direction: column;
          }

          .sidebar-wrapper {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
