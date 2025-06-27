// ✅ 1. LifeWithCSEI.jsx (replaces StepsOne)

import React from "react";
import { stepsTwo } from "@/data/steps";
import Link from "next/link";

export default function LifeWithCSEI() {
  return (
    <section className="layout-pt-md layout-pb-md bg-light-4">
      <div className="container">
        <div className="row justify-center text-center">
          <div className="col-xl-6 col-lg-8 col-md-10">
            <div
              className="sectionTitle "
              data-aos="fade-up"
              data-aos-delay="0"
            >
              {/* <h2 className="text-3xl fw-700 text-dark-1">Life with CSEI</h2> */}
              <h3 className="mt-20">
                Discover the full experience of student life at CSEI—from
                accommodation and clubs to LMS access and student support.
              </h3>
            </div>
          </div>
        </div>

        <div className="row y-gap-30 justify-between pt-60 sm:pt-40">
          {stepsTwo.map((step, index) => (
            <div
              key={step.id}
              className="col-lg-3 col-md-4 col-sm-6"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="featureCard -type-1 rounded-16 px-30 py-40 h-100">
                <div className="featureCard__icon bg-white border-light rounded-full size-70 flex-center">
                  <img src={step.imageSrc} alt={step.text} />
                </div>
                <h4 className="text-lg lh-1 fw-500 mt-30">{step.text}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
