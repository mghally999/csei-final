"use client";
import React from "react";
import Image from "next/image";

export default function CulturalDiversity() {
  return (
    <section className="layout-pt-lg layout-pb-lg bg-white">
      <div className="container">
        <div className="row y-gap-40 items-center">
          <div className="col-lg-6" data-aos="fade-right">
            <h2 className="text-30 fw-700 text-[#160643] mb-30">
              A Truly Diverse Community
            </h2>
            <p className="text-16 text-[#4a5568] mb-20 leading-relaxed">
              At CSEI Academy, we celebrate the rich cultural tapestry that our
              international students bring to campus. You'll find a vibrant
              community built on respect, understanding, and global unity.
            </p>
            <ul className="list-disc pl-5 text-16 text-[#4a5568] leading-relaxed">
              <li>Students from 30+ nationalities</li>
              <li>Multilingual support and events</li>
              <li>Inclusive campus policies and student councils</li>
              <li>Cross-cultural awareness workshops</li>
              <li>Global exposure and lifelong friendships</li>
            </ul>
          </div>
          <div className="col-lg-6" data-aos="fade-left">
            <Image
              src="https://images.unsplash.com/photo-1542727316-43b66c0a4035"
              alt="Cultural Diversity at CSEI"
              width={520}
              height={400}
              className="rounded-16 w-full shadow-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
