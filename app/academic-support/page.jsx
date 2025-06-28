"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import Image from "next/image";
import "aos/dist/aos.css";
import Header from "@/components/layout/headers/Header";
import FooterOne from "@/components/layout/footers/FooterOne";
import Preloader from "@/components/common/Preloader";
import PageLinks from "@/components/common/PageLinks";

export default function StudentSupport() {
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
                  Student Support System
                </h2>
                <p className="text-16 text-[#160643] mb-20 leading-relaxed">
                  At CSEI Academy, we are dedicated to mentoring and supporting
                  our students every step of the way to help them unlock their
                  full potential as a newcomer in Dubai. Our support system
                  provides personalized guidance, career planning, and academic
                  support tailored to each student's unique needs.
                </p>
                <ul className="list-disc text-[#160643] pl-20 space-y-10">
                  <li>
                    Personalized mentoring from experienced faculty and industry
                    professionals
                  </li>
                  <li>
                    Career guidance and support to help students plan their
                    future paths
                  </li>
                  <li>
                    Workshops and skill-building sessions to enhance academic
                    and professional growth
                  </li>
                  <li>
                    Continuous encouragement fostering confidence and resilience
                  </li>
                  <li>
                    Access to industry connections and real-world opportunities
                    for practical learning
                  </li>
                </ul>
              </div>

              <div className="col-lg-6" data-aos="fade-right">
                <Image
                  src="/assets/img/student-support/support.jpg"
                  alt="Student Support System"
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
