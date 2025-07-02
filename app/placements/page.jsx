"use client";
import { placementBriefs } from "@/data/placements/placement-briefs";
import CardGridLayout from "@/components/CardGridLayout";

export default function Page() {
  return (
    <CardGridLayout
      title="Placement Programs"
      description="Bridging academic excellence with career success through our comprehensive placement initiatives."
      cards={placementBriefs} // show only this one
    />
  );
}
