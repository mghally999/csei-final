"use client";
import { academicCards } from "@/data/academics/academics";
import CardGridLayout from "@/components/CardGridLayout";

export default function Page() {
  return (
    <CardGridLayout
      title="Explore Our Academic Areas"
      description="Navigate through all schools, resources, and essential academic support at CSEI."
      cards={academicCards}
      bgColor="bg-[#F9FAFB]"
      textColor="text-[#160643]"
    />
  );
}
