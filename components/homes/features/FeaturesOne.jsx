"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { featureOne } from "../../../data/features";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export default function LearnNewSkill() {
  return (
    <section
      className="layout-pt-lg layout-pb-lg relative overflow-hidden"
      style={{
        position: "relative",
        isolation: "isolate",
      }}
    >
      {/* Dark Overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(359deg, #ffffff 0%, #dbeafe 25%, #86b3f7 50%, #3a5acb 75%, #0f1d56 100%)",
          zIndex: -1,
        }}
      />

      <div className="container relative z-10">
        <div className="row y-gap-30 justify-between items-center">
          {/* Left Column: Text */}
          <div className="col-xl-5 col-lg-6 col-md-10 order-2 order-lg-1">
            <div className="about-content">
              <h2
                className="about-content__title customSized text-black"
                data-aos="fade-up"
              >
                Why <span className="text-custom-orange"> CSEI Academy </span>?
              </h2>

              {/* Features with vertical line */}
              <div className="feature-list-wrapper">
                {featureOne.map((elm, i) => (
                  <div key={i} className="feature-item" data-aos="fade-up">
                    <div className="icon-wrapper">
                      <FontAwesomeIcon icon={faCheck} />
                    </div>
                    <div className="feature-text">{elm.title}</div>
                  </div>
                ))}
              </div>

              {/* Button */}
              <div className="d-inline-block mt-30">
                <Link
                  href="/admission"
                  className="button -md text-black fw-700 bg-custom-orange hover:bg-custom-orange-dark transition-all duration-300"
                >
                  Apply Now
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: Image */}
          <div
            className="col-xl-5 col-lg-6 order-1 order-lg-2"
            data-aos="fade-up"
          >
            <div className="about-image relative rounded-lg overflow-hidden shadow-xl">
              <div className="relative w-full h-full">
                <Image
                  width={750}
                  height={850}
                  style={{
                    height: "100%",
                    width: "100%",
                    objectFit: "cover",
                    borderRadius: "10px",
                    // filter: "brightness(0.7)",
                  }}
                  src="/assets/img/about/1.jpg"
                  alt="About CSEI Academy"
                  className="hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black opacity-50"></div>
                <div className="absolute inset-0 bg-black opacity-30"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .menu-link {
          display: block;
          padding: 10px 16px;
          color: black;
          font-weight: normal;
          border-radius: 6px;
          transition: all 0.3s;
        }

        .menu-link.active {
          color: #e05500 !important;
          font-weight: 900 !important;
        }

        .sub-link.active {
          color: #e05500 !important;
          font-weight: 900 !important;
        }
        .feature-list-wrapper {
          position: relative;
          margin-top: 30px;
          padding-left: 32px;
        }

        .feature-list-wrapper::before {
          content: "";
          position: absolute;
          top: 10px;
          bottom: 10px;
          left: 42px;
          width: 2px;
          background-color: white;
          z-index: 0;
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 12px;
          position: relative;
          margin-bottom: 24px;
          z-index: 1;
        }

        .icon-wrapper {
          width: 24px;
          height: 24px;
          background-color: #e05500;
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          position: relative;
          flex-shrink: 0;
        }

        .feature-text {
          color: #000000;
          font-size: 16px;
          font-weight: bold;
          line-height: 1.5;
        }

        .about-content__title span {
          color: #e05500;
          font-weight: 700;
        }
      `}</style>
    </section>
  );
}
