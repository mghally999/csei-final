"use client";
import React from "react";

export default function Mission() {
  const missionPoints = [
    "Deliver internationally recognized programs",
    "Promote practical, career-oriented learning",
    "Support continuous professional development",
    "Foster innovation and critical thinking",
    "Encourage community engagement and impact",
    "Maintain high ethical and academic standards",
    "Adapt to the evolving demands of the workforce",
    "Ensure equal opportunities for all learners",
  ];

  return (
    <section className="mission-section layout-pt-lg layout-pb-lg bg-white text-[#1B0C4D]">
      <div className="container">
        <div className="row justify-center text-center mb-10">
          <div className="col-xl-8 col-lg-10">
            <h2 className="text-[36px] font-extrabold" data-aos="fade-up">
              Our Mission
            </h2>
            <p
              className="mt-4 text-lg text-[#1B0C4D]/80 leading-relaxed"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              To empower individuals through accessible, high-quality education
              that equips them with the skills and knowledge needed to thrive in
              their careers and contribute meaningfully to society.
            </p>
          </div>
        </div>

        <div className="row justify-center gap-y-6">
          {missionPoints.map((item, i) => (
            <div
              className="col-md-6"
              key={i}
              data-aos={i % 2 === 0 ? "fade-right" : "fade-left"}
              data-aos-delay={i * 100 + 200}
            >
              <div
                className={`mission-card p-6 rounded-2xl text-center h-full transition-all duration-300 ${
                  i % 2 === 0
                    ? "bg-white text-[#1B0C4D] border border-[#1B0C4D]"
                    : "bg-[#1B0C4D] text-white"
                } hover:scale-[1.03] hover:shadow-lg`}
              >
                <p className="text-lg font-medium leading-relaxed">{item}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
