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
                <h1 className="text-40 fw-700 mb-20">Calendar</h1>
                <p className="text-16 max-w-600 mx-auto">
                  Bridging theory and practice—our internships give students
                  real-world experience in top companies across various
                  industries.
                </p>
              </div>
            </div>

            <div className="row y-gap-40 justify-center">
              <div className="col-lg-10" data-aos="fade-up">
                <h3 className="text-24 fw-600 mb-20">Key Highlights:</h3>
                <ul className="list-disc pl-20 text-16 leading-8">
                  <li>
                    Industry placements aligned with each student's major.
                  </li>
                  <li>
                    Hands-on exposure to corporate processes and team
                    environments.
                  </li>
                  <li>
                    Resume-boosting experience and networking opportunities.
                  </li>
                  <li>Supervised training and performance evaluation.</li>
                </ul>
              </div>

              <div className="col-lg-10 mt-40" data-aos="fade-up">
                <h3 className="text-24 fw-600 mb-20">Eligibility:</h3>
                <p className="text-16">
                  Open to students enrolled in diploma or professional
                  certificate programs at CSEI Academy who have completed a
                  minimum of one academic semester.
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
