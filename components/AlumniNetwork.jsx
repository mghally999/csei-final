"use client";
import React from "react";
import { FiArrowRight } from "react-icons/fi";
import Image from "next/image";

export default function AlumniNetwork() {
  return (
    <section
      id="alumni-network"
      className="relative py-24 md:py-32 layout-pb-lg text-white overflow-hidden"
      style={{
        background:
          "linear-gradient(359deg, #ffffff 0%, #dbeafe 25%, #86b3f7 50%, #3a5acb 75%, #0f1d56 100%)",
      }}
    >
      {/* Background Image with subtle dark overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=2070&auto=format&fit=crop"
          alt="Alumni Background"
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
          CSEI Alumni Network | Lifelong Connections
        </h2>

        <p
          className="text-lg text-black mb-10 leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Join our network of alumni with exclusive career services and
          mentorship programs.
        </p>

        <a
          href="/alumni-registration"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "12px",
            color: "#fff",
            background: "linear-gradient(to right, #2563eb, #4338ca)", // from-blue-600 to-indigo-700
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
              "linear-gradient(to right, #1d4ed8, #3730a3)"; // hover: from-blue-700 to-indigo-800
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
          Register Yourself
          <FiArrowRight style={{ fontSize: "24px" }} />
        </a>

        <p className="mt-4 text-20 text-black fw-800">
          Stay connected. Stay empowered.
        </p>
      </div>
    </section>
  );
}
