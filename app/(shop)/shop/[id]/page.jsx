import PageLinks from "@/components/common/PageLinks";
import Preloader from "@/components/common/Preloader";

import FooterOne from "@/components/layout/footers/FooterOne";
import Header from "@/components/layout/headers/Header";
import ProductDetails from "@/components/shop/ProductDetails";
import RelatedProducts from "@/components/shop/RelatedProducts";
import React from "react";
export const metadata = {
  title:
    "Shop-details || CSEI - Professional LMS Online Education Course NextJS Template",
  description:
    "Elevate your e-learning content with CSEI, the most impressive LMS template for online courses, education and LMS platforms.",
};
export default async function page(props) {
  const params = await props.params;
  return (
    <div className="main-content  ">
      <Preloader />

      <Header />
      <div className="content-wrapper js-content-wrapper overflow-hidden">
        <ProductDetails id={params.id} />
        <RelatedProducts />

        <FooterOne />
      </div>
    </div>
  );
}
