"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import Image from "next/image";
import "aos/dist/aos.css";
import Header from "@/components/layout/headers/Header";
import FooterOne from "@/components/layout/footers/FooterOne";
import Preloader from "@/components/common/Preloader";
import PageLinks from "@/components/common/PageLinks";

export default function ClubsAndExperiences() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <div className="main-content">
      <div className="content-wrapper js-content-wrapper overflow-hidden">
        <PageLinks />

        <section className="layout-pt-lg layout-pb-md bg-[#F5F9FF]">
          <div className="container">
            <div className="row y-gap-40 items-center">
              <div className="col-lg-6" data-aos="fade-left">
                <h2 className="text-30 fw-700 text-[#160643] mb-30">LMSS</h2>
                <p className="text-16 text-[#160643] mb-20 leading-relaxed">
                  Life at CSEI is full of vibrant clubs and student-led
                  experiences that spark creativity, leadership, and lifelong
                  friendships.
                </p>
                <p className="text-16 text-[#160643] leading-relaxed">
                  From entrepreneurship circles and debate teams to art
                  collectives and volunteer programs, our students enjoy diverse
                  opportunities to grow beyond academics.
                </p>
              </div>

              <div className="col-lg-6" data-aos="fade-right">
                <Image
                  src="/assets/img/life/clubs.jpg" // make sure to upload the correct image
                  alt="Clubs & Experiences at CSEI"
                  width={520}
                  height={480}
                  className="rounded-16 w-full"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
