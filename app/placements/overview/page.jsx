// app/placements/overview/page.jsx
"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import Image from "next/image";
import "aos/dist/aos.css";
import Header from "@/components/layout/headers/Header";
import FooterOne from "@/components/layout/footers/FooterOne";
import Preloader from "@/components/common/Preloader";
import PageLinks from "@/components/common/PageLinks";

export default function PlacementOverview() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <div className="main-content">
      <Preloader />
      <Header />

      <div className="content-wrapper js-content-wrapper overflow-hidden">
        <PageLinks />

        <section className="layout-pt-lg layout-pb-md bg-[#F9F6F1]">
          <div className="container">
            <div className="row y-gap-40 items-center">
              <div className="col-lg-6" data-aos="fade-right">
                <Image
                  src="/assets/img/placements/overview.jpg"
                  alt="Placement Overview"
                  width={520}
                  height={480}
                  className="rounded-16 w-full"
                />
              </div>

              <div className="col-lg-6" data-aos="fade-left">
                <h2 className="text-30 fw-700 text-[#160643] mb-30">
                  Career Placement at CSEI
                </h2>
                <p className="text-16 text-[#160643] mb-20 leading-relaxed">
                  CSEI Academy ensures students don't just graduate — they
                  launch their careers with confidence. Our placement programs
                  are tailored to align academic achievements with industry
                  needs.
                </p>
                <p className="text-16 text-[#160643] leading-relaxed">
                  Through dedicated support and employer partnerships, we
                  prepare graduates for the competitive global job market.
                </p>
              </div>
            </div>
          </div>
        </section>

        <FooterOne />
      </div>
    </div>
  );
}
