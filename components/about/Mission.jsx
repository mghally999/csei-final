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
        {/* Title */}
        <div className="row justify-center text-center mb-10">
          <div className="col-xl-8 col-lg-10">
            <h2 className="text-[36px] font-extrabold" data-aos="fade-up">
              Our Mission
            </h2>
          </div>
        </div>

        {/* Full Paragraph from Screenshot */}
        <div className="row justify-center mb-10">
          <div className="col-xl-10">
            <p
              className="text-lg text-[#1B0C4D]/90 leading-loose text-center"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              At CSEI Academy in Dubai, our mission is to ignite every student’s
              potential through affordable, internationally recognized education
              and an inclusive campus environment. Our dedicated staff actively
              support, mentor, and inspire students from all backgrounds,
              ensuring every student feels valued and empowered throughout their
              journey.
              <br />
              <br />
              By blending hands-on learning with strong academic foundations and
              connecting students to real-world opportunities, we prepare future
              leaders to thrive and make a meaningful impact, both locally and
              globally.
            </p>
          </div>
        </div>

        {/* Mission Cards */}
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
