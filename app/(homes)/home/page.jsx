// ✅ 1. HomePage.jsx (page.jsx or wherever you render all home components)

"use client";

import { useState } from "react";
import HomeHeroSlider from "@/components/homes/heros/Home";
import Categories from "@/components/homes/categories/Categories";
import Courses from "@/components/homes/courses/Courses";
import TestimonialsOne from "@/components/common/TestimonialsOne";
import FeaturesOne from "@/components/homes/features/FeaturesOne";
import GetApp from "@/components/homes/getApp/GetApp";
import FeaturesSection from "@/components/FeaturesSection";
import Brands from "@/components/common/Brands";
import EnquiryModal from "@/components/EnquiryModal";
import Header from "@/components/layout/headers/Header";
import FooterOne from "@/components/layout/footers/FooterOne";
import MilestoneGrid from "@/components/StatsShowCase";

export default function HomePage() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Header setShowModal={setShowModal} />
      <HomeHeroSlider setShowModal={setShowModal} />

      <FeaturesOne />
      <FeaturesSection />
      <Categories />
      <Courses />
      <TestimonialsOne />
      <MilestoneGrid />
      <GetApp />
      <Brands />

      <EnquiryModal isOpen={showModal} onClose={() => setShowModal(false)} />
      <FooterOne />
    </>
  );
}
