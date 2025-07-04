"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { featureOne } from "../../../data/features";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export default function LearnNewSkill() {
  return (
    <section className="layout-pt-lg layout-pb-lg bg-custom-navyblue">
      <div className="container">
        <div className="row y-gap-30 justify-between items-center">
          {/* Left Column: Text */}
          <div className="col-xl-5 col-lg-6 col-md-10 order-2 order-lg-1">
            <div className="about-content">
              <h2
                className="about-content__title customSized text-white"
                data-aos="fade-up"
              >
                Why <span> CSEI Academy </span>?
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
                  className="button -md text-white fw-700 bg-custom-orange"
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
            <div className="about-image">
              <Image
                width={750}
                height={850}
                style={{ height: "100%", width: "100%" }}
                src="/assets/img/about/1.png"
                alt="image"
              />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
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
        }

        .feature-text {
          color: white;
          font-size: 15px;
          font-weight: 500;
        }
      `}</style>
    </section>
  );
}
