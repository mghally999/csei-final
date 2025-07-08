import Home from "@/components/homes/heros/Home";
import Categories from "@/components/homes/categories/Categories";
import Courses from "@/components/homes/courses/Courses";
import TestimonialsOne from "@/components/common/TestimonialsOne";
import FeaturesOne from "@/components/homes/features/FeaturesOne";
import GetApp from "@/components/homes/getApp/GetApp";
import FeaturesSection from "@/components/FeaturesSection";
import Brands from "@/components/common/Brands";
import StatsShowcase from "@/components/StatsShowCase";
import CourseCard from "@/components/ServiceCard";

export default function HomePage() {
  return (
    <>
      <Home />
      <FeaturesOne />
      <FeaturesSection />
      <Categories />
      <Courses />
      <CourseCard
        title="Cardiology"
        subtitle="Medical Field"
        image="/images/services/cardiology.png"
        href="/services/cardiology"
        description="Cardiology is the medical field focused on diagnosing and treating heart diseases."
      />
      <TestimonialsOne />
      <StatsShowcase />
      <GetApp />
      <Brands />
    </>
  );
}
