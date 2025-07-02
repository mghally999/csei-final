import React from "react";
import Image from "next/image";

const structureItems = [
  {
    title: "Board of Directors",
    description:
      "Our governing body provides strategic leadership and oversight, ensuring alignment with our mission and values.",
    image:
      "https://plus.unsplash.com/premium_photo-1682432517956-9c3c4f26ec0b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Academic Advisory Council",
    description:
      "A team of academic experts guiding the curriculum, assessments, and quality of education across all programs.",
    image:
      "https://plus.unsplash.com/premium_photo-1682432517956-9c3c4f26ec0b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Operations & Student Support",
    description:
      "Responsible for smooth daily functioning, student services, and ensuring an exceptional learner experience.",
    image:
      "https://plus.unsplash.com/premium_photo-1682432517956-9c3c4f26ec0b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Marketing & Partnerships",
    description:
      "Focused on global outreach, partnerships, and building a strong brand presence in education.",
    image:
      "https://plus.unsplash.com/premium_photo-1682432517956-9c3c4f26ec0b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function Structure() {
  return (
    <section className="layout-pt-md layout-pb-lg">
      <div className="container">
        <div className="row justify-center text-center">
          <div className="col-xl-8 col-lg-9 col-md-10">
            <h2 className="sectionTitle__title text-black">
              Organization Structure
            </h2>
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
                    src={item?.image}
                    alt={`${item?.title} Icon`}
                    width={60}
                    height={60}
                    className="rounded-full object-cover"
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
