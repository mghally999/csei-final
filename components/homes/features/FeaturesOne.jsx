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
          <div className="col-xl-5 col-lg-6 col-md-10 order-2 order-lg-1">
            <div className="about-content">
              <h2
                className="about-content__title customSized text-white"
                data-aos="fade-up"
              >
                Why <span> CSEI Academy </span>?
              </h2>
              {/* <p
                className="about-content__text text-white fw-700"
                data-aos="fade-up"
              >
                Use the list below to bring attention to your product’s key
                <br /> differentiator.
              </p> */}
              <div className="y-gap-20 pt-30">
                {featureOne.map((elm, i) => (
                  <div
                    key={i}
                    className="d-flex items-center"
                    data-aos="fade-up"
                  >
                    <div className="about-content-list__icon">
                      <span
                        className="text-white"
                        style={{
                          fontSize: "13px",
                          fontWeight: "400",
                        }}
                        aria-hidden="true"
                      >
                        <FontAwesomeIcon icon={faCheck} />
                      </span>
                    </div>
                    <div className="about-content-list__title text-white">
                      {elm.title}
                    </div>
                  </div>
                ))}
              </div>

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
    </section>
  );
}
