"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const BacomeStudent = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <section className="layout-pt-lg layout-pb-lg">
      <div className="container">
        <div
          className="row y-gap-30 items-center justify-between"
          data-aos="fade-up"
        >
          <div className="col-xl-5 col-lg-6">
            <img
              src="/assets/images/about/transportation.jpg"
              alt="CSEI Transportation"
              className="rounded-8 w-100"
            />
          </div>

          <div className="col-xl-5 col-lg-6">
            <h2 className="text-30 fw-700 text-dark-1">
              Getting to CSEI is Easy
            </h2>
            <p className="text-16 text-dark-1 mt-20">
              Located in a prime area of Dubai, CSEI is accessible through
              multiple transportation methods.
            </p>
            <ul className="list-disc mt-20 text-dark-1 text-14 space-y-10 pl-20">
              <li>Close to Metro stations and public bus routes</li>
              <li>Ample parking space for student vehicles</li>
              <li>Shuttle service for partnered accommodations</li>
              <li>Accessible for walking and cycling</li>
            </ul>
            <a href="/contact" className="button -md -dark-2 text-white mt-30">
              Contact for Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BacomeStudent;
