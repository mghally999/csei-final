import RelatedBlogs from "@/components/blogs/RelatedBlogs";
import PageLinks from "@/components/common/PageLinks";

import FooterOne from "@/components/layout/footers/FooterOne";
import Header from "@/components/layout/headers/Header";
import React from "react";
import BlogDetails from "@/components/blogs/BlogDetails";
import Preloader from "@/components/common/Preloader";

export const metadata = {
  title:
    "Blog-details || CSEI - Professional LMS Online Education Course NextJS Template",
  description:
    "Elevate your e-learning content with CSEI, the most impressive LMS template for online courses, education and LMS platforms.",
};

export default async function page(props) {
  const params = await props.params;
  return (
    <div className="main-content  ">
      <div className="content-wrapper js-content-wrapper overflow-hidden">
        <BlogDetails id={params.id} />

        <RelatedBlogs />

        <FooterOne />
      </div>
    </div>
  );
}
