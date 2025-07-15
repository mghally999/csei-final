"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AboutCSEI() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <section className="csei-section custom-linear-blue-top">
      <div className="container">
        <div className="row items-center">
          {/* LEFT SIDE - TEXT */}
          <div className="col-lg-6 pe-lg-10" data-aos="fade-right">
            <div className="section-header">
              <h2 className="csei-heading">About CSEI Academy</h2>
              <div className="header-underline"></div>
            </div>

            <p className="sectionTitle__text">
              CSEI Academy is a dynamic and future-focused institution committed
              to delivering internationally recognized education and
              professional training programs. We empower students and
              professionals with the knowledge, skills, and credentials needed
              to thrive in a competitive global environment.
            </p>
            <p className="sectionTitle__text">
              With a strong emphasis on academic excellence, innovation, and
              industry alignment, our programs are tailored to meet the evolving
              demands of the modern workforce. Whether you're pursuing higher
              education, skill enhancement, or career advancement, CSEI provides
              a supportive and inclusive learning environment where success is
              nurtured.
            </p>
          </div>

          {/* RIGHT SIDE - IMAGE */}
          <div className="col-lg-6 ps-lg-10" data-aos="fade-left">
            <div className="ml-10">
              <Image
                style={{ borderRadius: "10px" }}
                src="/assets/img/about/csei-building4.jpeg"
                alt="About CSEI Academy"
                width={520}
                height={480}
                className="rounded-2xl w-full object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .csei-section {
          background-color: #fff;
        }

        .section-header {
          margin-bottom: 32px;
        }

        .csei-heading {
          font-size: 2.75rem;
          font-weight: 800;
          line-height: 1.2;
          margin: 0;
          color: #001c48;
        }

        .header-underline {
          width: 80px;
          height: 5px;
          background: linear-gradient(90deg, #3b82f6, #000000);
          margin-top: 12px;
          border-radius: 3px;
        }

        .sectionTitle__text {
          text-align: justify;
          line-height: 1.7;
          font-size: 16.5px;
          font-weight: 500;
          color: #000;
          margin-bottom: 1.5rem;
          font-size: 1.1rem;
        }

        .pe-lg-10 {
          padding-right: 6rem !important;
        }

        .ps-lg-10 {
          padding-left: 6rem !important;
        }

        .ml-10 {
          margin-left: 4rem;
        }

        @media (max-width: 992px) {
          .pe-lg-10,
          .ps-lg-10 {
            padding-right: 1rem !important;
            padding-left: 1rem !important;
          }

          .ml-10 {
            margin-left: 0;
            margin-top: 3rem;
          }

          .csei-heading {
            font-size: 2rem;
            text-align: center;
          }

          .header-underline {
            margin-left: auto;
            margin-right: auto;
          }

          .sectionTitle__text {
            font-size: 1rem;
          }
        }
      `}</style>
    </section>
  );
}
