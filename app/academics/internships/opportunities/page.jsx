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

        <section className="layout-pt-lg layout-pb-lg bg-[#160643] text-white">
          <div className="container">
            <div className="row justify-center text-center mb-60">
              <div className="col-auto" data-aos="fade-up">
                <h1 className="text-40 fw-700 mb-20">
                  Internship Opportunities
                </h1>
                <p className="text-16 max-w-600 mx-auto">
                  Discover a diverse range of internship opportunities across
                  industries that shape future careers.
                </p>
              </div>
            </div>

            <div className="row justify-center">
              <div
                className="col-lg-10"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <ul className="list-disc text-white text-16 leading-loose pl-20">
                  <li>
                    Opportunities with leading hospitals, clinics, and
                    healthcare organizations.
                  </li>
                  <li>
                    Internships with top accounting firms and financial service
                    providers.
                  </li>
                  <li>
                    Collaborations with IT companies for hands-on tech and
                    software experience.
                  </li>
                  <li>
                    Education sector training with schools, early childhood
                    centers, and institutions.
                  </li>
                  <li>
                    Business and admin roles in logistics, marketing, and HR
                    departments.
                  </li>
                  <li>
                    Flexible virtual or hybrid internships for remote
                    skill-building.
                  </li>
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
