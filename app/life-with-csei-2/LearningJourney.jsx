"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const LearningJourney = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <section className="layout-pt-lg layout-pb-lg bg-white">
      <div className="container">
        <div className="row y-gap-40 items-center">
          <div className="col-xl-6 col-lg-6" data-aos="fade-right">
            <div className="sectionTitle ">
              <h2 className="text-30 fw-700 text-dark-1">
                Clubs & Experiences at CSEI
              </h2>
              <p className="text-16 text-dark-1 mt-20">
                Life at CSEI is full of vibrant clubs and student-led
                experiences that spark creativity, leadership, and lifelong
                friendships.
              </p>
              <p className="text-16 text-dark-1 mt-10">
                From entrepreneurship circles and debate teams to art
                collectives and volunteer programs, our students enjoy diverse
                opportunities to grow beyond academics.
              </p>
            </div>
          </div>

          <div className="col-xl-6 col-lg-6" data-aos="fade-left">
            <div className="bg-image ratio ratio-3:2 rounded-8 overflow-hidden">
              <img
                src="/assets/img/life/club-experience.jpg" // Replace with actual image
                alt="Student Clubs and Experience"
                className="img-ratio rounded-8 w-1/1"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningJourney;
