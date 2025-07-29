"use client";
import React from "react";
import { FiArrowRight } from "react-icons/fi";
import Image from "next/image";

export default function TuitionFeesBrief() {
  return (
    <section
      id="tuition-fees"
      className="relative py-24 md:py-32 layout-pb-lg text-white overflow-hidden custom-padding"
      style={{
        background:
          "linear-gradient(359deg, #ffffff 0%, #dbeafe 25%, #86b3f7 50%, #3a5acb 75%, #0f1d56 100%)",
      }}
    >
      {/* Background Image with subtle dark overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/img/about/csei-building4.jpeg"
          alt="Tuition Background"
          fill
          priority
          style={{ objectFit: "cover", opacity: 0.2 }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: "rgba(0, 0, 0, 0.4)",
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container max-w-screen-md mx-auto px-6 text-center">
        <h2
          className="text-3xl md:text-4xl font-extrabold text-black mb-6"
          data-aos="fade-up"
        >
          Tuition & Fees | Clear and Structured
        </h2>

        <p
          className="text-lg text-black mb-10 leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Transparent fee breakdown with flexible payment options and dedicated
          financial guidance throughout your academic journey.
        </p>

        <a
          href="/admission/tuition-fees"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "12px",
            color: "#fff",
            background: "linear-gradient(to right, #2563eb, #4338ca)",
            padding: "16px 32px",
            borderRadius: "12px",
            fontSize: "18px",
            fontWeight: 600,
            textDecoration: "none",
            border: "1px solid rgba(255, 255, 255, 0.3)",
            boxShadow: "0 10px 25px rgba(0, 0, 0, 0.3)",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background =
              "linear-gradient(to right, #1d4ed8, #3730a3)";
            e.currentTarget.style.transform = "scale(1.05)";
            e.currentTarget.style.boxShadow =
              "0 15px 35px rgba(67, 56, 202, 0.5)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background =
              "linear-gradient(to right, #2563eb, #4338ca)";
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "0 10px 25px rgba(0, 0, 0, 0.3)";
          }}
        >
          View Fee Structure
          <FiArrowRight style={{ fontSize: "24px" }} />
        </a>

        <p className="mt-4 text-20 text-black fw-800">
          Clarity from enrollment to graduation.
        </p>
      </div>
    </section>
  );
}
