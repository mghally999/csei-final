import BlogsThree from "@/components/blogs/BlogsThree";
import PageLinks from "@/components/common/PageLinks";
import Preloader from "@/components/common/Preloader";

import FooterOne from "@/components/layout/footers/FooterOne";
import Header from "@/components/layout/headers/Header";
import React from "react";

export const metadata = {
  title:
    "Blog-list-3 || CSEI - Professional LMS Online Education Course NextJS Template",
  description:
    "Elevate your e-learning content with CSEI, the most impressive LMS template for online courses, education and LMS platforms.",
};

export default function page() {
  return (
    <div className="main-content  ">
      <div className="content-wrapper js-content-wrapper overflow-hidden">
        <BlogsThree />
      </div>
    </div>
  );
}
