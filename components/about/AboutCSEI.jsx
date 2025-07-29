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
      <div className="content-wrapper">
        {/* LEFT SIDE - TEXT */}
        <div className="text-content" data-aos="fade-right">
          <div className="section-header">
            <h2 className="csei-heading">About CSEI Academy</h2>
            <div className="header-underline"></div>
          </div>

          <p className="sectionTitle__text">
            CSEI Academy is a dynamic and future-focused institution committed
            to delivering internationally recognized education and professional
            training programs. We empower students and professionals with the
            knowledge, skills, and credentials needed to thrive in a competitive
            global environment.
          </p>
          <p className="sectionTitle__text">
            With a strong emphasis on academic excellence, innovation, and
            industry alignment, our programs are tailored to meet the evolving
            demands of the modern workforce. Whether you're pursuing higher
            education, skill enhancement, or career advancement, CSEI provides a
            supportive and inclusive learning environment where success is
            nurtured.
          </p>
        </div>

        {/* RIGHT SIDE - IMAGE */}
        <div className="image-content" data-aos="fade-left">
          <Image
            src="/assets/img/about/csei-building4.jpeg"
            alt="About CSEI Academy"
            width={800}
            height={600}
            className="csei-image"
          />
        </div>
      </div>

      <style jsx>{`
        .csei-section {
          background-color: #fff;
          padding: 80px 5vw;
        }

        .content-wrapper {
          max-width: 1400px;
          margin: 0 auto;
          display: flex;
          gap: 5vw;
          align-items: center;
        }

        .text-content {
          flex: 1;
          min-width: 40%;
        }

        .image-content {
          flex: 1;
          min-width: 50%;
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
          text-align: left;
          line-height: 1.7;
          font-size: 1.1rem;
          font-weight: 500;
          color: #000;
          margin-bottom: 1.5rem;
        }

        .csei-image {
          width: 100%;
          height: auto;
          border-radius: 10px;
          object-fit: cover;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        }

        @media (max-width: 992px) {
          .content-wrapper {
            flex-direction: column;
            gap: 40px;
          }

          .text-content,
          .image-content {
            width: 100%;
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
            text-align: left;
          }

          .csei-image {
            height: 400px;
          }
        }

        @media (max-width: 768px) {
          .csei-section {
            padding: 60px 5vw;
          }

          .csei-image {
            height: 350px;
          }
        }

        @media (max-width: 576px) {
          .csei-heading {
            font-size: 1.8rem;
          }

          .csei-image {
            height: 300px;
          }
        }
      `}</style>
    </section>
  );
}
