"use client";

import React from "react";

// ✅ Admissions Components
import AdmissionProcess from "@/components/admission/AdmissionProcessBrief";
import AttestationGuidance from "@/components/admission/AttestationGuidance";
import ArrivalAndOrientation from "@/components/admission/ArrivalAndOrientation";
import TuitionPaymentProcedure from "@/components/admission/TuitionPaymentProcedure";
import InternationalStudentsBrief from "@/components/admission/InternationalStudents";
import ScholarshipsBrief from "@/components/admission/ScholarshipsBrief";

export default function AdmissionsPage() {
  return (
    <main className="text-black bg-white overflow-x-hidden">
      {/* Section: Step-by-step Process */}
      <AdmissionProcess />

      {/* Section: Attestation & Translation */}
      <AttestationGuidance />

      {/* Section: Arrival Support */}
      <ArrivalAndOrientation />

      {/* Section: Inernational Student */}
      <InternationalStudentsBrief />

      {/* Section: Fee & Tuition Process */}
      <TuitionPaymentProcedure />

      {/* Section: Scholarships */}
      <ScholarshipsBrief />
    </main>
  );
}
