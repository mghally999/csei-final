"use client";

import React, { useState, useEffect } from "react";
import Overview from "./Overview";
import EntryRequirements from "./EntryRequirements";
import QualificationStructure from "./QualificationStructure";
import AllUnits from "./AllUnits";
import AssessmentVerification from "./AssessmentVerification";

import Preloader from "@/components/common/Preloader.jsx";
import Header from "@/components/layout/headers/Header.jsx";
import FooterOne from "@/components/layout/footers/FooterOne.jsx";
import ModalVideoComponent from "@/components/common/ModalVideo";
import Image from "next/image";
import { coursesData } from "@/data/courses";
import UniversityProgression from "./UniversityProgression";
import WhyCSEI from "./WhyCSEI";
import CareerOpportunities from "./CareerOpportunities";

const menuItems = [
  { id: 1, text: "Overview" },
  { id: 2, text: "Why CSEI?" },
  { id: 3, text: "Entry Requirements" },
  { id: 4, text: "Qualification Structure" },
  { id: 5, text: "Qualification Units" },
  { id: 6, text: "Assessment and Verification" },
  { id: 7, text: "Career Opportunities" },
];

export default function Page() {
  const [pageItem, setPageItem] = useState(coursesData[0]);
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(1);

  useEffect(() => {
    setPageItem(coursesData[0]); // Use ID if needed
  }, []);

  return (
    <>
      <div className="main-content">
        <Preloader />
      </div>

      <Header />

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
                      BEST SELLER
                    </div>
                  </div>
                  <div>
                    <div className="badge px-15 py-8 text-11 bg-purple-1 text-white fw-400">
                      POPULAR
                    </div>
                  </div>
                </div>

                <h1 className="mb-10 text-30 lh-14 text-white pr-60 lg:pr-0">
                  OTHM Level 4 Diploma in Health and Social Care Management
                </h1>

                <div className="badge px-15 py-8 text-11 bg-purple-1 text-white fw-600 qualification-badge mt-20 enhanced-badge">
                  Qualification Structure: 120 Credit
                </div>
              </div>

              <div className="col-xl-5 col-lg-6">
                <div className="relative">
                  <Image
                    width={690}
                    height={342}
                    className="w-1/1"
                    src={pageItem.imageSrc}
                    alt="Course Image"
                  />
                  <div className="absolute-full-center d-flex justify-center items-center">
                    <div
                      onClick={() => setIsOpen(true)}
                      className="d-flex justify-center items-center size-60 rounded-full bg-white cursor-pointer"
                    >
                      <div className="icon-play text-18" />
                    </div>
                  </div>
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
                  {activeTab === 1 && <Overview />}
                  {activeTab === 2 && <WhyCSEI />}
                  {activeTab === 3 && <EntryRequirements />}
                  {activeTab === 4 && <QualificationStructure />}
                  {activeTab === 5 && <AllUnits />}
                  {activeTab === 6 && <AssessmentVerification />}
                  {activeTab === 7 && <CareerOpportunities />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <UniversityProgression />
      <FooterOne />

      <ModalVideoComponent
        videoId="LlCwHnp3kL4"
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </>
  );
}
