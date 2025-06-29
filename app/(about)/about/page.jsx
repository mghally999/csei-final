"use client";
import React from "react";

// Preloader, Header, Footer, Page Links
import FooterOne from "@/components/layout/footers/FooterOne";
import PageLinks from "@/components/common/PageLinks";

// About Us Sections
import Brief from "@/components/about/Brief";
import AboutCSEI from "@/components/about/AboutCSEI";
import Mission from "@/components/about/Mission";
import Values from "@/components/about/Values";
import OrganizationStructure from "@/components/about/OrganizationStructure";

// Extra Sections
import TestimonialsOne from "@/components/common/TestimonialsOne";
import Brands from "@/components/common/Brands";

export default function Page() {
  return (
    <div className="main-content">
      <div className="content-wrapper js-content-wrapper overflow-hidden">
        <PageLinks />

        {/* Sections — Alternating background colors */}
        <section className="py-20 bg-white">
          <Brief />
        </section>
        {/* <section className="py-20 bg-[#160643] text-white">
          <Milestones />
        </section> */}
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
        {/* <section className="py-20 bg-[#160643] text-white">
          <IndustryPartners />
        </section> */}

        {/* Extra Sections */}
        {/* <section className="py-20 bg-white">
          <WhyCourse />
        </section> */}
        <section className="py-20 bg-[#160643] text-white">
          <TestimonialsOne />
        </section>
        <section className="py-20 bg-white">
          <Brands />
        </section>
      </div>
      <FooterOne />
    </div>
  );
}
