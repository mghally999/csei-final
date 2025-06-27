"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function PlacementPartnersPage() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <section className="layout-pt-md layout-pb-md bg-light-1">
      <div className="container">
        <h1 className="text-30 fw-700 text-dark-1 mb-20" data-aos="fade-down">
          Our Industry Partners
        </h1>
        <p className="text-dark-2 text-16 mb-6" data-aos="fade-up">
          We proudly collaborate with world-class employers across various
          sectors to provide students with valuable real-world exposure and
          career opportunities.
        </p>
        <div
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-6"
          data-aos="fade-up"
        >
          {[
            "Amazon",
            "Microsoft",
            "Dubai Health Authority",
            "Google",
            "FlyDubai",
            "Nestlé",
          ].map((partner, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-12 shadow-sm border text-center text-14 text-dark-2 fw-500"
            >
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
