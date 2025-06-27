"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function PlacementHighlightsPage() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <section className="layout-pt-md layout-pb-md bg-light-1">
      <div className="container">
        <h1 className="text-30 fw-700 text-dark-1 mb-20" data-aos="fade-down">
          Placement Highlights
        </h1>
        <div className="grid md:grid-cols-2 gap-6" data-aos="fade-up">
          <div className="bg-white p-6 rounded-12 shadow-md border">
            <h3 className="text-18 fw-600 mb-2">Top Recruiters</h3>
            <p className="text-dark-2 text-14">
              Google, Emirates, Amazon, Dubai Health Authority, IBM, Nestlé and
              many more.
            </p>
          </div>
          <div className="bg-white p-6 rounded-12 shadow-md border">
            <h3 className="text-18 fw-600 mb-2">Highest Package</h3>
            <p className="text-dark-2 text-14">
              AED 36,000/month secured by a Computing graduate in 2024.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
