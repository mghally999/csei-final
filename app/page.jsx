import HomeHero from "@/components/homes/heros/HomeHero";
import Categories from "@/components/homes/categories/Categories";
import Courses from "@/components/homes/courses/Courses";
import TestimonialsOne from "@/components/common/TestimonialsOne";
import FeaturesOne from "@/components/homes/features/FeaturesOne";
import GetApp from "@/components/homes/getApp/GetApp";
import Brands from "@/components/common/Brands";
import Join from "@/components/homes/join/Join";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <Categories />
      <Courses />
      <TestimonialsOne />
      <FeaturesOne />
      <GetApp />
      <Brands />
      <Join />
    </>
  );
}
