import PageLinks from "@/components/common/PageLinks";
import Preloader from "@/components/common/Preloader";

import CourseDetailsSix from "@/components/courseSingle/CourseDetailsSix";

import CourseSlider from "@/components/courseSingle/CourseSlider";
import FooterOne from "@/components/layout/footers/FooterOne";

import Header from "@/components/layout/headers/Header";
import React from "react";

export const metadata = {
  title:
    "Couese-single-6 || CSEI - Professional LMS Online Education Course NextJS Template",
  description:
    "Elevate your e-learning content with CSEI, the most impressive LMS template for online courses, education and LMS platforms.",
};

export default async function page(props) {
  const params = await props.params;
  return (
    <div className="main-content  ">
      <Preloader />
      <Header />
      <div className="content-wrapper  js-content-wrapper">
        <PageLinks dark={true} />
        <CourseDetailsSix id={params.id} />
        {/* <CourseSlider/> */}
        <FooterOne />
      </div>
    </div>
  );
}
