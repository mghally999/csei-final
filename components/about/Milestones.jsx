"use client";
import React from "react";

export default function Milestones() {
  const milestones = [
    {
      year: "2015",
      title: "Our Foundation",
      description:
        "CSEI was founded with the vision to empower learners with industry-driven education.",
    },
    {
      year: "2018",
      title: "Global Recognition",
      description:
        "Accredited by leading global awarding bodies and expanded into professional training programs.",
    },
    {
      year: "2023",
      title: "International Expansion",
      description:
        "Launched advanced diploma programs and international university progression pathways.",
    },
  ];

  return (
    <section className="milestones-section layout-pt-lg layout-pb-lg">
      <div className="container">
        <div className="row justify-center text-center">
          <div className="col-auto">
            <h2 className="sectionTitle__title text-white" data-aos="fade-up">
              Milestones
            </h2>
            <p
              className="sectionTitle__text mt-20 text-white/80"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Our journey of growth and innovation in education
            </p>
          </div>
        </div>

        <div className="row y-gap-30 pt-50">
          {milestones.map((item, i) => (
            <div
              className="col-md-4"
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 150 + 200}
            >
              <div className="milestone-box" role="region">
                <div className="text-[38px] font-extrabold mb-3">
                  {item.year}
                </div>
                <h4 className="text-lg font-semibold italic mb-3">
                  {item.title}
                </h4>
                <p className="text-base leading-relaxed text-center">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
