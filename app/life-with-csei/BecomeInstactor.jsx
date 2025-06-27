"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

const BecomeInstactor = () => {
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
          <div className="col-xl-5 col-lg-6 col-md-10">
            <div className="sectionTitle">
              <h2 className="text-30 fw-700 text-dark-1">
                Comfortable Accommodation at CSEI
              </h2>
              <p className="text-16 text-dark-1 mt-20">
                Our student accommodation provides a safe, clean, and inclusive
                environment designed for convenience and comfort. Whether you're
                staying short- or long-term, we make it feel like home.
              </p>
              <ul className="list-disc mt-20 text-dark-1 text-14 space-y-10 pl-20">
                <li>Furnished private/shared rooms</li>
                <li>High-speed internet and study areas</li>
                <li>24/7 security and maintenance support</li>
                <li>Access to campus facilities</li>
              </ul>

              <Link
                href="/contact"
                className="button -md -blue-1 text-white mt-30"
              >
                Request Accommodation Info
              </Link>
            </div>
          </div>

          <div className="col-xl-6 col-lg-6">
            <img
              src="/assets/images/about/accommodation.jpg"
              alt="CSEI Accommodation"
              className="rounded-8 w-100"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BecomeInstactor;
