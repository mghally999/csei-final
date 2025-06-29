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
      <div className="content-wrapper js-content-wrapper">
        <PageLinks />
        <section className="layout-pt-lg layout-pb-lg bg-[#160643] text-dark-1">
          <div className="container">
            <div className="row justify-center text-center mb-60">
              <div className="col-auto" data-aos="fade-up">
                <h1 className="text-40 fw-700 mb-20">
                  School of Health Sciences
                </h1>
                <p className="text-16 max-w-600 mx-auto">
                  Empowering the next generation of healthcare professionals
                  with a strong foundation in medical knowledge, ethical
                  practices, and clinical training.
                </p>
              </div>
            </div>

            <div className="row y-gap-40 justify-center">
              <div className="col-lg-10" data-aos="fade-up">
                <h3 className="text-24 fw-600 mb-20">Programs Include:</h3>
                <ul className="list-disc pl-20 text-16 leading-8">
                  <li>
                    Diploma in Health & Social Care Management (OTHM Level 4-7)
                  </li>
                  <li>Workshops in Patient Safety and Community Health</li>
                  <li>Hands-on training through internships and simulations</li>
                  <li>
                    Faculty with experience in international healthcare systems
                  </li>
                </ul>
              </div>

              <div className="col-lg-10 mt-40" data-aos="fade-up">
                <h3 className="text-24 fw-600 mb-20">Future Career Paths:</h3>
                <p className="text-16">
                  Our graduates are equipped to enter roles in hospitals, public
                  health organizations, NGOs, and social service agencies, or to
                  pursue advanced studies in healthcare.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
