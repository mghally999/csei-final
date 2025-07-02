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
    <section className="csei-section">
      <div className="container">
        <div className="row items-center">
          {/* LEFT SIDE - TEXT */}
          <div className="col-lg-6 pe-lg-10" data-aos="fade-right">
            <h2 className="csei-heading">About CSEI Academy</h2>
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
          padding: 80px 0;
          background-color: #fff;
        }

        .csei-heading {
          font-size: 2.5rem;
          font-weight: 700;
          color: #2d3748;
          margin-bottom: 1.5rem;
        }

        .sectionTitle__text {
          text-align: justify !important;
          word-spacing: normal;
          letter-spacing: normal;
          line-height: 1.8;
          font-size: 18px;
          font-weight: 600;
          color: #3a3a55;
          margin-bottom: 1.5rem;
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
        }
      `}</style>
    </section>
  );
}
