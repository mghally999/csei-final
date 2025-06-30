import React from "react";

const values = [
  {
    title: "Empowerment",
    description: "Ignite every student’s potential.",
  },
  {
    title: "Inclusivity",
    description: "Emphasis on diversity, belonging, and equal opportunity.",
  },
  {
    title: "Support & Mentorship",
    description:
      "Prioritizing personalized guidance and holistic student development.",
  },
  {
    title: "Excellence",
    description: "Dedication to novelty, quality and rigor.",
  },
  {
    title: "Leadership",
    description:
      "Focus on cultivating changemakers who drive positive change globally.",
  },
  {
    title: "Community & Collaboration",
    description:
      "Building a shared environment where growth is nurtured together.",
  },
];

export default function Values() {
  return (
    <section className="layout-pt-md layout-pb-md bg-custom-navyblue">
      <div className="container">
        <div className="row justify-center text-center">
          <div className="col-xl-8 col-lg-9 col-md-10">
            <h2 className="sectionTitle__title text-white">Our Core Values</h2>
            <p className="sectionTitle__text text-white mt-20">
              The principles that shape our culture, guide our mission, and
              define our identity.
            </p>
          </div>
        </div>

        <div className="row y-gap-30 pt-50">
          {values.map((item, index) => (
            <div
              key={index}
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="stepCard -type-1 -stepCard-hover h-[300px] flex flex-col justify-between">
                <div className="stepCard__content grow">
                  <h4 className="stepCard__title text-white">{item.title}</h4>
                  <p className="stepCard__text text-white">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
