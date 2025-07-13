"use client";

import React from "react";

// ✅ Placements Sections
import PlacementHero from "@/components/placements/PlacementHero";
import PlacementProcess from "@/components/placements/PlacementProcess";
import PlacementServices from "@/components/placements/PlacementServices";
import StudentSatisfaction from "@/components/placements/StudentSatisfaction";
import EmployerPartnership from "@/components/placements/EmployerPartnership";

export default function PlacementsPage() {
  return (
    <main className="text-black bg-white overflow-x-hidden">
      {/* Hero Section */}
      <PlacementHero />

      {/* Step-by-step Process Section */}
      <PlacementProcess />

      {/* Placement Services Section */}
      <PlacementServices />

      {/* Student Feedback / Satisfaction Section */}
      <StudentSatisfaction />

      {/* Employer Partnership / Why Partner With CSEI */}
      <EmployerPartnership />
    </main>
  );
}
