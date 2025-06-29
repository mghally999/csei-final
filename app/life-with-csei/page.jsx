"use client";
import { lifeWithCSEICards } from "@/data/life-with-csei/life-with-csei";
import CardGridLayout from "@/components/CardGridLayout";

export default function Page() {
  return (
    <CardGridLayout
      title="Life With CSEI"
      description="Explore a holistic student experience that blends learning, living, and leadership at CSEI Academy."
      cards={lifeWithCSEICards}
    />
  );
}
