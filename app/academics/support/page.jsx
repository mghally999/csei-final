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
                <h1 className="text-40 fw-700 mb-20">Academic Support</h1>
                <p className="text-16 max-w-600 mx-auto">
                  Where passion meets precision — our culinary programs equip
                  students with world-class cooking techniques and hospitality
                  knowledge.
                </p>
              </div>
            </div>

            <div className="row y-gap-40 justify-center">
              <div className="col-lg-10" data-aos="fade-up">
                <h3 className="text-24 fw-600 mb-20">Programs Offered:</h3>
                <ul className="list-disc pl-20 text-16 leading-8">
                  <li>Professional Diploma in Culinary Arts</li>
                  <li>Workshops with international chefs and food experts</li>
                  <li>Modern kitchen labs and practical sessions</li>
                  <li>Industry internships in top hotels and restaurants</li>
                </ul>
              </div>

              <div className="col-lg-10 mt-40" data-aos="fade-up">
                <h3 className="text-24 fw-600 mb-20">Career Opportunities:</h3>
                <p className="text-16">
                  Graduates pursue careers as executive chefs, pastry artists,
                  kitchen managers, and hospitality entrepreneurs across global
                  culinary markets.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
