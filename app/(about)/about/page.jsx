"use client";
import React from "react";

// About Us Sections
import Brief from "@/components/about/Brief";
import AboutCSEI from "@/components/about/AboutCSEI";
import Mission from "@/components/about/Mission";
import Values from "@/components/about/Values";
import OrganizationStructure from "@/components/about/OrganizationStructure";
import Leadership from "@/components/about/Leadership";

// Extra Sections
import TestimonialsOne from "@/components/common/TestimonialsOne";
import Brands from "@/components/common/Brands";
import AccreditationIntro from "@/components/AccreditationIntro";
import TeamMembers from "@/components/about/TeamMember";

export default function Page() {
  return (
    <div className="main-content">
      <div className="content-wrapper js-content-wrapper overflow-hidden">
        <Brief />
        <AboutCSEI />
        <Mission />
        <Values />
        <OrganizationStructure />
        <Leadership />
        <TeamMembers />
        <AccreditationIntro />
        <Brands />
      </div>
    </div>
  );
}
