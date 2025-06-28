// import HomeOne from "@/components/homes/home";
import Header from "../components/layout/headers/Header";
// import MobileMenu from "@/components/layout/component/MobileMenu";

import HomeHero from "../components/homes/heros/HomeHero";

import Brands from "../components/common/Brands";
import Categories from "../components/homes/categories/Categories";
import Courses from "../components/homes/courses/Courses";
import TestimonialsOne from "../components/common/TestimonialsOne";
import FeaturesOne from "../components/homes/features/FeaturesOne";
import WhyCourse from "../components/homes/WhyCourse";
import Instructors from "../components/common/Instructors";
import GetApp from "../components/homes/getApp/GetApp";
import Blog from "../components/homes/blogs/Blog";
import Join from "../components/homes/join/Join";
import FooterOne from "../components/layout/footers/FooterOne";
import Preloader from "@/components/common/Preloader";

export const metadata = {
  title: "CSEI Academy - Creative Star Education Institutes",
  description:
    "Unlock your learning potential with CSEI Academy – a dynamic, modern LMS platform designed for schools, institutes, and educators to deliver online courses, manage students, and enhance digital education with ease.",
};

export default function HomePage() {
  return (
    <>
      <Preloader />
      <Header />

      <div className="content-wrapper  js-content-wrapper overflow-hidden">
        <HomeHero />
        <Categories />
        <Courses />
        <TestimonialsOne />
        <FeaturesOne />
        <Instructors />
        <GetApp />
        {/* <Blog /> */}
        <Brands />
        <Join />
        <FooterOne />
      </div>
    </>
  );
}
