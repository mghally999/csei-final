import { admissionCards } from "@/data/admissions/admissions";
import CardGridLayout from "@/components/CardGridLayout";

export const metadata = {
  title: "Admissions | CSEI Academy",
  description:
    "Start your academic journey with CSEI's admission process for undergraduate, postgraduate, and international students.",
};

export default function Page() {
  return (
    <CardGridLayout
      title="Admissions at CSEI"
      description="Navigate your path to excellence with our detailed admission process, international support, and financial options."
      cards={admissionCards.map((card) => ({
        ...card,
        link: card.link.replace("/admissions/", "/admission/"),
      }))}
    />
  );
}
