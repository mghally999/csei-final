"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Mission() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <section className="mission-section">
      <div className="container">
        <div className="row justify-center">
          <div className="col-lg-8" data-aos="fade-up">
            <h2 className="mission-heading text-center">Our Mission</h2>
            <p className="sectionTitle__text">
              At CSEI Academy in Dubai, our mission is to ignite every student’s
              potential through affordable, internationally recognized education
              and inclusive campus environment. Our dedicated staff actively
              support, mentor, and inspire students from all backgrounds,
              ensuring every student feels valued and empowered throughout their
              journey. By blending hands-on learning with strong academic
              foundations and connecting students to real- world opportunities,
              we prepare future leaders to thrive and make a meaningful impact,
              both locally and globally.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .mission-section {
          // min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #fff;
          padding: 80px 20px;
          text-align: center;
        }

        .mission-heading {
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

        @media (max-width: 768px) {
          .mission-heading {
            font-size: 2rem;
          }

          .sectionTitle__text {
            font-size: 16px;
          }
        }
      `}</style>
    </section>
  );
}
