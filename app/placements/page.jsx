"use client";
import { placementCards } from "@/data/placements/placements";
import CardGridLayout from "@/components/CardGridLayout";

export default function Page() {
  return (
    <CardGridLayout
      title="Placement Programs"
      description="Bridging academic excellence with career success through our comprehensive placement initiatives."
      cards={placementCards}
    />
  );
}
