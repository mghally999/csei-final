"use client";
import React from "react";

export default function AboutCSEI() {
  return (
    <section className="py-20 bg-white text-gray-800">
      <div className="container mx-auto px-6 max-w-5xl">
        <h2
          className="text-3xl md:text-4xl font-bold text-center mb-6 text-[#160643]"
          data-aos="fade-up"
        >
          About CSEI Academy
        </h2>

        <p
          className="text-lg text-center max-w-4xl mx-auto text-gray-600 leading-relaxed mb-6"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          CSEI Academy is a dynamic and future-focused institution committed to
          delivering internationally recognized education and professional
          training programs. We empower students and professionals with the
          knowledge, skills, and credentials needed to thrive in a competitive
          global environment.
        </p>

        <p
          className="text-lg text-center max-w-4xl mx-auto text-gray-600 leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          With a strong emphasis on academic excellence, innovation, and
          industry alignment, our programs are tailored to meet the evolving
          demands of the modern workforce. Whether you're pursuing higher
          education, skill enhancement, or career advancement, CSEI provides a
          supportive and inclusive learning environment where success is
          nurtured.
        </p>
      </div>
    </section>
  );
}
