// app/placements/services/page.jsx
"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import Image from "next/image";
import "aos/dist/aos.css";
import Header from "@/components/layout/headers/Header";
import FooterOne from "@/components/layout/footers/FooterOne";
import Preloader from "@/components/common/Preloader";
import PageLinks from "@/components/common/PageLinks";

export default function PlacementServices() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <div className="main-content">
      <Preloader />
      <Header />

      <div className="content-wrapper js-content-wrapper overflow-hidden">
        <PageLinks />

        <section className="layout-pt-lg layout-pb-md bg-[#F1F9F8]">
          <div className="container">
            <div className="row y-gap-40 items-center">
              <div className="col-lg-6" data-aos="fade-right">
                <Image
                  src="/assets/img/placements/services.jpg"
                  alt="Placement Services"
                  width={520}
                  height={480}
                  className="rounded-16 w-full"
                />
              </div>

              <div className="col-lg-6" data-aos="fade-left">
                <h2 className="text-30 fw-700 text-[#160643] mb-30">
                  Our Placement Services
                </h2>
                <p className="text-16 text-[#160643] mb-20 leading-relaxed">
                  We offer end-to-end placement support for both students and
                  recruiters:
                </p>
                <ul className="list-disc text-[#160643] pl-20 space-y-10">
                  <li>Campus recruitment drives</li>
                  <li>Industry mentorship programs</li>
                  <li>Resume building workshops</li>
                  <li>Mock interview sessions</li>
                  <li>Employer branding opportunities</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <FooterOne />
      </div>
    </div>
  );
}
