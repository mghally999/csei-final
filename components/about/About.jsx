"use client";
import React from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <section className="layout-pt-lg layout-pb-md bg-light-2">
      <div className="container">
        <div className="row y-gap-30 items-center">
          <div className="col-lg-6" data-aos="fade-right" data-aos-delay="100">
            <Image
              width={520}
              height={480}
              src="/assets/img/life/overview.jpg" // Replace with a matching image if needed
              alt="Life with CSEI - Overview"
              className="rounded-16 w-1/1"
            />
          </div>

          <div className="col-lg-6" data-aos="fade-left" data-aos-delay="100">
            <h2 className="text-30 fw-700 text-dark-1 mb-30">
              Life with CSEI: Overview
            </h2>
            <p className="text-16 text-dark-1 mb-20">
              At CSEI, life extends beyond the classroom. Our vibrant campus
              offers students a blend of academic excellence and real-life
              experience. We’re not just focused on learning, but on living —
              empowering our students to build skills, friendships, and memories
              that last a lifetime.
            </p>
            <p className="text-16 text-dark-1">
              Whether it’s student clubs, interactive workshops, or hands-on
              campus tours, every moment at CSEI is designed to enrich both
              personal and professional growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
