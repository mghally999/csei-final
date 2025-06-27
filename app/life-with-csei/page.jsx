"use client";

import React from "react";
import Preloader from "@/components/common/Preloader";
import Header from "@/components/layout/headers/Header";
import PageLinks from "@/components/common/PageLinks";
import StepsOne from "./StepsOne";
import LearningJourney from "./LearningJourney";
import LearningPathSix from "./LearningPathSix";
import BecomeInstactor from "./BecomeInstactor";
import BecomeStudent from "./BecomeStudent";
import Brands from "./Brands";
import FooterOne from "@/components/layout/footers/FooterOne";
import About from "@/components/about/About";
import StudentPortal from "./StudentPortal";
import Alumni from "./Alumni";

export default function LifeWithCSEIPage() {
  return (
    <div className="main-content">
      <Preloader />
      <Header />

      <div className="content-wrapper js-content-wrapper overflow-hidden">
        <PageLinks />
        <About />
        <StepsOne />
        <LearningJourney />
        <LearningPathSix />

        <BecomeInstactor />
        <BecomeStudent />
        <Brands />
        <StudentPortal />
        <Alumni />
        <FooterOne />
      </div>
    </div>
  );
}
