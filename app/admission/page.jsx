"use client";
import { admissionCards } from "@/data/admissions/admissions";
import CardGridLayout from "@/components/CardGridLayout";

export default function Page() {
  return (
    <CardGridLayout
      title="Admissions at CSEI"
      description="Navigate your path to excellence with our detailed admission process, international support, and financial options."
      cards={admissionCards}
    />
  );
}
