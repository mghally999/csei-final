"use client";
import React from "react";

// Section Components
import LifeIntro from "@/components/LifeIntro";
import LifeBeyondClassroom from "@/components/LifeBeyondClassroom";
import CampusFacilities from "@/components/CampusFacilities";
import AccommodationInfo from "@/components/AccommodationInfo";
import TransportationDetails from "@/components/TransportationDetails";
import AcademicMentoring from "@/components/AcademicMentoring";
import StudentPortal from "@/components/StudentPortal";
import LMSOverview from "@/components/LMSOverview";
import AlumniNetwork from "@/components/AlumniNetwork";
import ProgramSpecializations from "@/components/ProgramSpecializations";

export default function Page() {
  return (
    <div className="layout-pb-lg">
      <div className="main-content">
        <div className="content-wrapper js-content-wrapper overflow-hidden">
          <ProgramSpecializations />
          <LifeIntro />
          <LifeBeyondClassroom />
          <CampusFacilities />
          <AccommodationInfo />
          <TransportationDetails />
          <AlumniNetwork />
          <AcademicMentoring />
          <StudentPortal />
          <LMSOverview />
        </div>
      </div>
    </div>
  );
}
