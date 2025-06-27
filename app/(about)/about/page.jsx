"use client";
import React from "react";

// Preloader, Header, Footer, Page Links
import Preloader from "@/components/common/Preloader";
import Header from "@/components/layout/headers/Header";
import FooterOne from "@/components/layout/footers/FooterOne";
import PageLinks from "@/components/common/PageLinks";

// About Us Sections
import Brief from "@/components/about/Brief";
import Milestones from "@/components/about/Milestones";
import AboutCSEI from "@/components/about/AboutCSEI";
import Mission from "@/components/about/Mission";
import Values from "@/components/about/Values";
import OrganizationStructure from "@/components/about/OrganizationStructure";
import IndustryPartners from "@/components/about/IndustryPartners";
import Accreditations from "@/components/about/Accreditations"; // Make sure you create this

// Extra Sections
import WhyCourse from "@/components/homes/WhyCourse";
import TestimonialsOne from "@/components/common/TestimonialsOne";
import Instructors from "@/components/common/Instructors";
import Brands from "@/components/common/Brands";

export default function Page() {
  return (
    <div className="main-content">
      <Preloader />
      <Header />
      <div className="content-wrapper js-content-wrapper overflow-hidden">
        <PageLinks />

        {/* Sections — Alternating background colors */}
        <section className="py-20 bg-white">
          <Brief />
        </section>
        <section className="py-20 bg-[#160643] text-white">
          <Milestones />
        </section>
        <section className="py-20 bg-white">
          <AboutCSEI />
        </section>
        <section className="py-20 bg-[#160643] text-white">
          <Mission />
        </section>
        <section className="py-20 bg-white">
          <Values />
        </section>
        <section className="py-20 bg-white">
          <OrganizationStructure />
        </section>
        <section className="py-20 bg-[#160643] text-white">
          <IndustryPartners />
        </section>

        {/* Extra Sections */}
        <section className="py-20 bg-white">
          <WhyCourse />
        </section>
        {/* <section className="py-20 bg-[#160643] text-white">
          <TestimonialsOne />
        </section> */}
        <section className="py-20 bg-white">
          <Brands />
        </section>
      </div>
      <FooterOne />
    </div>
  );
}
