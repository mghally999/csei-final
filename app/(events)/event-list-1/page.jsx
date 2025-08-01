import PageLinks from "@/components/common/PageLinks";
import Preloader from "@/components/common/Preloader";
import EventsOne from "@/components/events/EventsOne";
import FooterOne from "@/components/layout/footers/FooterOne";
import Header from "@/components/layout/headers/Header";
import React from "react";
export const metadata = {
  title:
    "Event-list-1 || CSEI - Professional LMS Online Education Course NextJS Template",
  description:
    "Elevate your e-learning content with CSEI, the most impressive LMS template for online courses, education and LMS platforms.",
};
export default function page() {
  return (
    <div className="main-content  ">
      <Preloader />

      <Header />
      <div className="content-wrapper js-content-wrapper overflow-hidden">
        <EventsOne />
        <FooterOne />
      </div>
    </div>
  );
}
