import React from "react";
import Image from "next/image";

const structureItems = [
  {
    title: "Board of Directors",
    description:
      "Our governing body provides strategic leadership and oversight, ensuring alignment with our mission and values.",
    icon: "/assets/img/structure/board.svg",
  },
  {
    title: "Academic Advisory Council",
    description:
      "A team of academic experts guiding the curriculum, assessments, and quality of education across all programs.",
    icon: "/assets/img/structure/advisory.svg",
  },
  {
    title: "Operations & Student Support",
    description:
      "Responsible for smooth daily functioning, student services, and ensuring an exceptional learner experience.",
    icon: "/assets/img/structure/operations.svg",
  },
  {
    title: "Marketing & Partnerships",
    description:
      "Focused on global outreach, partnerships, and building a strong brand presence in education.",
    icon: "/assets/img/structure/marketing.svg",
  },
];

export default function Structure() {
  return (
    <section className="layout-pt-md layout-pb-lg">
      <div className="container">
        <div className="row justify-center text-center">
          <div className="col-xl-8 col-lg-9 col-md-10">
            <h2 className="sectionTitle__title">Organization Structure</h2>
            <p className="sectionTitle__text mt-20">
              The backbone of CSEI – a dynamic team dedicated to quality,
              innovation, and student success.
            </p>
          </div>
        </div>

        <div className="row y-gap-40 pt-50">
          {structureItems.map((item, index) => (
            <div
              key={index}
              className="col-lg-6"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="d-flex items-center">
                <div className="mr-30">
                  <Image
                    src={item.icon}
                    alt={`${item.title} Icon`}
                    width={60}
                    height={60}
                  />
                </div>
                <div>
                  <h4 className="text-20 fw-600">{item.title}</h4>
                  <p className="text-15 mt-10">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
