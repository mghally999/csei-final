"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "@/components/layout/headers/Header";
import FooterOne from "@/components/layout/footers/FooterOne";
import Preloader from "@/components/common/Preloader";
import PageLinks from "@/components/common/PageLinks";

export default function Page() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <div className="main-content">
      <Preloader />
      <Header />
      <div className="content-wrapper js-content-wrapper">
        <PageLinks />
        <section className="layout-pt-lg layout-pb-lg bg-[#160643] text-dark-1">
          <div className="container">
            <div className="row justify-center text-center mb-60">
              <div className="col-auto" data-aos="fade-up">
                <h1 className="text-40 fw-700 mb-20">
                  School of Computing & IT
                </h1>
                <p className="text-16 max-w-600 mx-auto">
                  CSEI’s School of Computing prepares students to become
                  innovators in the digital age. Our curriculum blends theory,
                  real-world application, and ethical tech practices to develop
                  well-rounded computing professionals.
                </p>
              </div>
            </div>

            <div className="row y-gap-40 justify-center">
              <div className="col-lg-10" data-aos="fade-up">
                <h3 className="text-24 fw-600 mb-20">Key Features:</h3>
                <ul className="list-disc pl-20 text-16 leading-8">
                  <li>
                    Industry-relevant modules in software engineering, data
                    science, AI, and cybersecurity.
                  </li>
                  <li>
                    Hands-on labs, live projects, and internship opportunities.
                  </li>
                  <li>
                    Certification alignment with top platforms like AWS, Cisco,
                    and Microsoft.
                  </li>
                  <li>
                    Taught by PhD-qualified instructors with industry
                    experience.
                  </li>
                </ul>
              </div>

              <div className="col-lg-10 mt-40" data-aos="fade-up">
                <h3 className="text-24 fw-600 mb-20">Career Outcomes:</h3>
                <p className="text-16">
                  Graduates are prepared for careers in software development, IT
                  consulting, systems analysis, data analytics, and emerging
                  roles like ethical hacking and AI research.
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
