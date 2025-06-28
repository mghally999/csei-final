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
    <section className="layout-pt-lg layout-pb-md bg-white text-dark-1">
      <div className="container">
        <div className="row y-gap-30 items-center">
          {/* LEFT SIDE - TEXT */}
          <div className="col-lg-6" data-aos="fade-right">
            <h2 className="text-30 fw-700 text-[#160643] mb-30">
              About CSEI Academy
            </h2>
            <p className="text-16 mb-20 custom-styling">
              CSEI Academy is a dynamic and future-focused institution committed
              to delivering internationally recognized education and
              professional training programs. We empower students and
              professionals with the knowledge, skills, and credentials needed
              to thrive in a competitive global environment.
            </p>
            <p className="text-16 custom-styling">
              With a strong emphasis on academic excellence, innovation, and
              industry alignment, our programs are tailored to meet the evolving
              demands of the modern workforce. Whether you're pursuing higher
              education, skill enhancement, or career advancement, CSEI provides
              a supportive and inclusive learning environment where success is
              nurtured.
            </p>
          </div>

          {/* RIGHT SIDE - IMAGE */}
          <div className="col-lg-6" data-aos="fade-left">
            <Image
              src="/assets/img/about/csei-building4.jpeg"
              alt="About CSEI Academy"
              width={520}
              height={480}
              className="rounded-16 w-1/1 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
