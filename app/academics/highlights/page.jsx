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

      <div className="content-wrapper js-content-wrapper overflow-hidden">
        <PageLinks />

        <section className="layout-pt-lg layout-pb-lg bg-[#160643] text-white">
          <div className="container">
            <div className="row justify-center text-center mb-60">
              <div className="col-auto" data-aos="fade-up">
                <h1 className="text-40 fw-700 mb-20">Academic Highlights</h1>
                <p className="text-16 max-w-600 mx-auto">
                  Explore what sets our academic programs apart and how we
                  ensure exceptional education.
                </p>
              </div>
            </div>

            <div className="row y-gap-40">
              {[
                {
                  title: "Globally Recognized Qualifications",
                  desc: "We offer UK-regulated diplomas that open doors worldwide.",
                },
                {
                  title: "Qualified International Faculty",
                  desc: "Learn from PhD holders, industry experts, and certified trainers.",
                },
                {
                  title: "Industry-Focused Curriculum",
                  desc: "Programs designed with practical application and future-ready skills.",
                },
                {
                  title: "Modern Learning Facilities",
                  desc: "Smart classrooms, virtual labs, and fully equipped practical environments.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="col-lg-6"
                  data-aos="fade-up"
                  data-aos-delay={i * 100}
                >
                  <div className="bg-white text-[#160643] rounded-12 p-30 h-100 shadow-md hover:shadow-xl transition-all duration-300">
                    <h3 className="text-20 fw-700 mb-10">{item.title}</h3>
                    <p className="text-14">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="row pt-60" data-aos="fade-up">
              <div className="col-12 text-center">
                <p className="text-16">
                  Our highlights reflect our mission to deliver academic
                  excellence and transform lives through knowledge and
                  innovation.
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
