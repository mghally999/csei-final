"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const LearningPathSix = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <section className="layout-pt-lg layout-pb-lg bg-light-4">
      <div className="container">
        <div className="row justify-center text-center">
          <div className="col-auto">
            <div className="sectionTitle" data-aos="fade-up">
              <h2 className="text-30 fw-700 text-dark-1">
                Student Values at CSEI
              </h2>
              <p className="text-16 text-dark-1 mt-20">
                CSEI cultivates a learning environment where students thrive not
                only through academics but through integrity, inclusiveness,
                innovation, and respect.
              </p>
              <p className="text-16 text-dark-1 mt-10">
                Our core values guide every student interaction, initiative, and
                achievement—ensuring a positive and empowering student
                experience.
              </p>
            </div>
          </div>
        </div>

        <div className="row y-gap-30 pt-60">
          {[
            {
              icon: "fas fa-hands-helping",
              title: "Inclusiveness",
              desc: "Every student feels seen, heard, and valued in our diverse, multicultural community.",
            },
            {
              icon: "fas fa-lightbulb",
              title: "Innovation",
              desc: "We encourage creative thinking and solutions beyond traditional boundaries.",
            },
            {
              icon: "fas fa-heart",
              title: "Integrity",
              desc: "Honesty, transparency, and accountability shape all student conduct.",
            },
            {
              icon: "fas fa-users",
              title: "Respect",
              desc: "We foster a culture of empathy, understanding, and mutual support.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="col-lg-3 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <div className="featureCard -type-1 px-30 py-40 text-center bg-white rounded-8 shadow-1 h-100">
                <div className="text-40 text-blue-1 mb-20">
                  <i className={item.icon}></i>
                </div>
                <h4 className="text-18 fw-600 mb-10">{item.title}</h4>
                <p className="text-14 text-dark-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningPathSix;
