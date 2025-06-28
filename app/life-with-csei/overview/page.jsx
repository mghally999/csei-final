"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import Image from "next/image";
import "aos/dist/aos.css";
import Header from "@/components/layout/headers/Header";
import FooterOne from "@/components/layout/footers/FooterOne";
import Preloader from "@/components/common/Preloader";
import PageLinks from "@/components/common/PageLinks";

export default function LifeWithCSEIOverview() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <div className="main-content">
      <Preloader />
      <Header />

      <div className="content-wrapper js-content-wrapper overflow-hidden">
        <PageLinks />

        <section className="layout-pt-lg layout-pb-md bg-[#F5F9FF]">
          <div className="container">
            <div className="row y-gap-40 items-center">
              <div className="col-lg-6" data-aos="fade-left">
                <h2 className="text-30 fw-700 text-[#160643] mb-30">
                  Life with CSEI: Overview
                </h2>
                <p className="text-16 text-[#160643] mb-20 leading-relaxed">
                  At CSEI, life extends beyond the classroom. Our vibrant campus
                  offers students a blend of academic excellence and real-life
                  experience. We’re not just focused on learning, but on living
                  — empowering our students to build skills, friendships, and
                  memories that last a lifetime.
                </p>
                <p className="text-16 text-[#160643] leading-relaxed">
                  Whether it’s student clubs, interactive workshops, or hands-on
                  campus tours, every moment at CSEI is designed to enrich both
                  personal and professional growth.
                </p>
              </div>

              <div className="col-lg-6" data-aos="fade-right">
                <Image
                  src="/assets/img/life/overview.jpg"
                  alt="Life with CSEI"
                  width={520}
                  height={480}
                  className="rounded-16 w-full"
                />
              </div>
            </div>
          </div>
        </section>

        <FooterOne />
      </div>
    </div>
  );
}
