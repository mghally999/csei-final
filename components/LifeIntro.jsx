"use client";
import React from "react";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";

export default function LifeIntro() {
  return (
    <section className="layout-pt-lg layout-pb-lg relative text-black bg-custom-grey">
      <div className="container relative z-10">
        <div className="row y-gap-40 items-center">
          {/* Left Side Image */}
          <div className="col-lg-6" data-aos="fade-right">
            <Image
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b"
              alt="Life at CSEI"
              width={520}
              height={400}
              className="rounded-16 w-full shadow-2xl object-cover border-4 border-white"
            />
          </div>

          {/* Right Side Content */}
          <div className="col-lg-6" data-aos="fade-left">
            <h2 className="text-36 fw-700 text-black mb-8 leading-snug drop-shadow-md">
              Life with CSEI Academy
            </h2>

            <h4 className="text-20 font-medium text-[#1a202c] mb-10">
              Life with CSEI
            </h4>

            <p className="text-16 text-black/90 mb-5 leading-relaxed">
              CSEI Academy stands as a premier destination in Dubai for
              education, where ambitious students are empowered and inspired to
              pursue endless opportunities.
            </p>

            <p className="text-16 text-black/90 mb-30 leading-relaxed">
              Join CSEI community where your ambitions are nurtured, your
              talents recognized, and your future possibilities endless.
              Discover how life with CSEI Academy transforms education into a
              pathway for lifelong achievement and opportunity.
            </p>

            {/* Updated Button */}
            <a
              className="text-white"
              href="/life-with-csei/campus-life"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "12px",
                color: "#ffffff",
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
                e.currentTarget.style.boxShadow =
                  "0 10px 25px rgba(0, 0, 0, 0.3)";
              }}
            >
              Explore Student Life
              <FiArrowRight style={{ fontSize: "24px" }} />
            </a>
          </div>
        </div>
      </div>

      {/* Decorative Blob */}
      <div
        className="hidden md:block absolute right-[-60px] bottom-[-60px] w-[180px] h-[180px] rounded-full bg-white/20 z-0"
        style={{ filter: "blur(40px)" }}
      />
    </section>
  );
}
