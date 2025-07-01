"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";

import Overview from "@/components/programs/Overview";
import WhyCSEI from "@/components/programs/WhyCSEI";
import EntryRequirements from "@/components/programs/EntryRequirements";
import QualificationStructure from "@/components/programs/QualificationStructure";
import AllUnits from "@/components/programs/AllUnits";
import AssessmentVerification from "@/components/programs/AssessmentVerification";
import CareerOpportunities from "@/components/programs/CareerOpportunities";
import UniversityProgression from "@/components/programs/UniversityProgression";

import FooterOne from "@/components/layout/footers/FooterOne";
import ModalVideoComponent from "@/components/common/ModalVideo";

import allPrograms from "@/data/programs/allPrograms";

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

export default function Page() {
  const { slug } = useParams(); // e.g. ["health-social-care", "level-4"]
  const [pageItem, setPageItem] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(1);

  useEffect(() => {
    if (slug && Array.isArray(slug)) {
      const category = slug[0];
      const level =
        slug.length === 3 ? `${slug[1]}/${slug[2]}` : slug[1] || "default"; // default fallback

      const program = allPrograms.find(
        (item) => item.category === category && item.level === level
      );

      setPageItem(program || null);
    }
  }, [slug]);

  if (!pageItem)
    return (
      <div className="min-h-screen flex items-center justify-center text-red-600 text-lg font-semibold">
        Program not found.
      </div>
    );

  return (
    <>
      {/* Hero Section */}
      <section className="page-header -type-5 bg-dark-1">
        <div className="page-header__bg">
          <div className="bg-image js-lazy" data-bg="img/event-single/bg.png" />
        </div>
        <div className="container">
          <div className="page-header__content pt-80 pb-90">
            <div className="row y-gap-30 justify-center align-center custom-flex-margin">
              <div className="col-xl-6 col-lg-6 d-flex flex-column justify-center">
                <div className="d-flex x-gap-15 y-gap-10 pb-20">
                  <div>
                    <div className="badge px-15 py-8 text-11 bg-green-1 text-dark-1 fw-400">
                      {pageItem.category.toUpperCase()}
                    </div>
                  </div>
                  <div>
                    <div className="badge px-15 py-8 text-11 bg-purple-1 text-white fw-400">
                      {pageItem.level.toUpperCase().replaceAll("-", " ")}
                    </div>
                  </div>
                </div>

                <h1 className="mb-10 text-30 lh-14 text-white pr-60 lg:pr-0">
                  {pageItem.title}
                </h1>

                <div className="badge px-15 py-8 text-11 bg-purple-1 text-white fw-600 qualification-badge mt-20 enhanced-badge">
                  Qualification Structure: {pageItem.qualificationStructure}
                </div>
                <div className="badge px-15 py-8 text-11 bg-purple-1 text-white fw-600 qualification-badge mt-20 enhanced-badge">
                  Duration: {pageItem.duration}
                </div>
              </div>

              <div className="col-xl-5 col-lg-6">
                <div className="relative">
                  <Image
                    width={690}
                    height={342}
                    className="w-1/1 course-img"
                    src={pageItem.imageSrc}
                    alt="Course Image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tab Section */}
      <section className="layout-pt-lg layout-pb-md">
        <div className="container">
          <div className="tabs -side js-tabs">
            <div className="row y-gap-40">
              <div className="col-lg-4">
                <div className="tabs__controls y-gap-5 js-tabs-controls">
                  {menuItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setActiveTab(item.id)}
                      className={`tabs__button text-18 fw-500 js-tabs-button ${
                        activeTab === item.id ? "is-active" : ""
                      }`}
                      type="button"
                    >
                      {item.text}
                    </button>
                  ))}
                </div>
              </div>

              <div className="col-lg-8">
                <div className="tabs__content js-tabs-content space-y-12 text-gray-800">
                  {activeTab === 1 && <Overview data={pageItem.overview} />}
                  {activeTab === 2 && <WhyCSEI data={pageItem.whyCSEI} />}
                  {activeTab === 3 && (
                    <EntryRequirements data={pageItem.entryRequirements} />
                  )}
                  {activeTab === 4 && (
                    <QualificationStructure
                      data={pageItem.qualificationStructureText}
                    />
                  )}
                  {activeTab === 5 && (
                    <AllUnits data={pageItem.qualificationUnits} />
                  )}
                  {activeTab === 6 && (
                    <AssessmentVerification
                      data={pageItem.assessmentVerification}
                    />
                  )}
                  {activeTab === 7 && (
                    <CareerOpportunities data={pageItem.careerOpportunities} />
                  )}
                  {activeTab === 8 && (
                    <UniversityProgression
                      data={pageItem.universityProgression}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterOne />

      <ModalVideoComponent
        videoId="LlCwHnp3kL4"
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </>
  );
}
