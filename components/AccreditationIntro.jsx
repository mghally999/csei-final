"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const LogoCard = ({ src, alt }) => (
  <div
    style={{
      backgroundColor: "#fff",
      padding: "1.5rem",
      borderRadius: "0.75rem",
      border: "1px solid #eee",
      boxShadow: "0 4px 10px rgba(0,0,0,0.06)",
      width: "200px",
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <Image
      src={src}
      alt={alt}
      width={120}
      height={60}
      style={{
        objectFit: "contain",
        width: "100%",
        height: "auto",
      }}
    />
  </div>
);

export default function AccreditationIntro() {
  return (
    <section
      className="layout-pb-lg relative custom-linear-white-top"
      style={{
        background:
          "linear-gradient(359deg, #ffffff 0%, #dbeafe 25%, #86b3f7 50%, #3a5acb 75%, #0f1d56 100%)",
      }}
    >
      <div className="container">
        <div className="row items-center">
          {/* Logos - Left side (2 rows × 2 columns) */}
          <motion.div
            className="col-lg-8"
            data-aos="fade-right"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div
              className="grid"
              style={{
                display: "grid",
                gridTemplateColumns: "0.5fr 1fr",
                rowGap: "2rem",
                columnGap: "0rem",
                justifyItems: "center",
                alignItems: "center",
              }}
            >
              <LogoCard
                src="/assets/img/logos/KHDA-logo.png"
                alt="KHDA Accredited"
              />
              <LogoCard
                src="/assets/img/logos/OTHM-logo.png"
                alt="OTHM Accredited"
              />
              <LogoCard
                src="/assets/img/logos/university-bolton.png"
                alt="University of Bolton"
              />
              <LogoCard
                src="/assets/img/logos/medical-college.png"
                alt="Medical College"
              />
            </div>
          </motion.div>

          {/* Text Column */}
          <motion.div
            className="col-lg-4"
            data-aos="fade-left"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{
              paddingLeft: "3rem",
              marginTop: "2rem",
              borderLeft: "1px solid rgba(0,0,0,0.1)",
            }}
          >
            <h2 className="text-30 fw-700 text-black mb-20 leading-snug">
              CSEI Academy – Where Your Performance Ignites with the Best
              Education
            </h2>

            <p className="text-16 text-black mb-20 leading-relaxed">
              Creative Star Education Institutes Academy (CSEI Academy) in Dubai
              is committed to delivering education of the highest calibre,
              rigorously aligned with both local and international standards.
              Our programmes are officially approved by the Dubai Knowledge and
              Human Development Authority (KHDA), ensuring that qualifications
              awarded are recognised and respected throughout the UAE.
            </p>

            <p className="text-16 text-black mb-20 leading-relaxed">
              Complementing this, CSEI Academy offers qualifications accredited
              by the United Kingdom’s{" "}
              <strong>
                Office of Qualifications and Examinations Regulation (Ofqual)
              </strong>{" "}
              through a strategic partnership with OTHM. This dual accreditation
              framework affords students globally recognised certifications,
              enhancing their prospects for further academic pursuits and
              professional advancement internationally.
            </p>

            <p className="text-16 fw-700 text-black leading-relaxed">
              Our unwavering commitment to academic excellence is embodied in
              our distinguished faculty, Internal Quality Assurance, and
              state-of-the-art facilities. We prioritize critical thinking,
              professional competencies, and accountability—equipping students
              to thrive in an interconnected, competitive world.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Decorative Orb */}
      <div
        className="hidden md:block absolute right-[-60px] top-[-60px] w-[180px] h-[180px] rounded-full bg-[#4b0082]/10 z-0"
        style={{ filter: "blur(20px)" }}
      />
    </section>
  );
}
