// app/placements/why-csei/page.jsx
"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import Image from "next/image";
import "aos/dist/aos.css";
import Header from "@/components/layout/headers/Header";
import FooterOne from "@/components/layout/footers/FooterOne";
import Preloader from "@/components/common/Preloader";
import PageLinks from "@/components/common/PageLinks";

export default function WhyCSEI() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <div className="main-content">
      <Preloader />
      <Header />

      <div className="content-wrapper js-content-wrapper overflow-hidden">
        <PageLinks />

        <section className="layout-pt-lg layout-pb-md bg-[#FFF9F5]">
          <div className="container">
            <div className="row y-gap-40 items-center">
              <div className="col-lg-6" data-aos="fade-left">
                <h2 className="text-30 fw-700 text-[#160643] mb-30">
                  Why Recruit CSEI Graduates
                </h2>
                <p className="text-16 text-[#160643] mb-20 leading-relaxed">
                  Our students stand out with their industry-ready skills and
                  practical knowledge:
                </p>
                <ul className="list-disc text-[#160643] pl-20 space-y-10">
                  <li>Hands-on project experience</li>
                  <li>Strong technical fundamentals</li>
                  <li>Excellent problem-solving abilities</li>
                  <li>Industry-aligned curriculum</li>
                  <li>Professional soft skills training</li>
                </ul>
              </div>

              <div className="col-lg-6" data-aos="fade-right">
                <Image
                  src="/assets/img/placements/why-csei.jpg"
                  alt="Why Recruit CSEI Students"
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
