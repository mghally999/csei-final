import React from "react";

const values = [
  {
    icon: "icon-star",
    title: "Excellence",
    description:
      "We pursue the highest standards in education, service, and performance.",
  },
  {
    icon: "icon-handshake",
    title: "Integrity",
    description:
      "We act with honesty, fairness, and accountability in everything we do.",
  },
  {
    icon: "icon-users",
    title: "Inclusivity",
    description:
      "We value diversity and foster a respectful, supportive environment for all.",
  },
  {
    icon: "icon-lightbulb",
    title: "Innovation",
    description:
      "We embrace new ideas, technologies, and teaching methods to enhance learning.",
  },
  {
    icon: "icon-heart",
    title: "Empowerment",
    description:
      "We inspire students to reach their full potential and impact their communities.",
  },
  {
    icon: "icon-globe",
    title: "Global Perspective",
    description:
      "We prepare learners to thrive in a connected, multicultural world.",
  },
];

export default function Values() {
  return (
    <section className="layout-pt-md layout-pb-md bg-purple-1">
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
              <div className="stepCard -type-1 -stepCard-hover">
                <div className="stepCard__content">
                  <div className="stepCard__icon text-white">
                    <i className={`${item.icon}`}></i>
                  </div>
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
