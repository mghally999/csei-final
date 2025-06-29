import NotFound from "@/components/not-found/NotFound";
import PageLinks from "@/components/common/PageLinks";
import React from "react";

export const metadata = {
  title:
    "Page not found || CSEI - Professional LMS Online Education Course NextJS Template",
  description:
    "Elevate your e-learning content with CSEI, the most impressive LMS template for online courses, education and LMS platforms.",
};

export default function Page() {
  return (
    <div className="content-wrapper js-content-wrapper overflow-hidden">
      <NotFound />
    </div>
  );
}
