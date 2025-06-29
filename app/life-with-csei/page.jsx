import { lifeWithCSEICards } from "@/data/life-with-csei/life-with-csei";
import CardGridLayout from "@/components/CardGridLayout";

export default function LifeAtCSEI() {
  const filteredCards = lifeWithCSEICards.filter(
    (card) => card.id !== "core-values"
  );

  return (
    <CardGridLayout
      title="Life at CSEI"
      description="Experience our vibrant campus community with world-class facilities and comprehensive support services."
      cards={filteredCards}
      cta={{
        text: "Ready to join our community?",
        link: "/apply",
        label: "Start Your Application",
      }}
    />
  );
}
