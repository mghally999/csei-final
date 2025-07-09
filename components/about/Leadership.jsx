"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Leadership team data
const leadershipTeam = [
  {
    id: 1,
    name: "Mr Roshan",
    position: "General Manager",
    bio: "With over 15 years in higher education, Dr. Johnson leads our academic strategy with a focus on innovative learning methodologies.",
    image: "/assets/img/leadership/Mr-Roshan.jpeg",
  },
  {
    id: 2,
    name: "Mr Roshan",
    position: "General Manager",
    bio: "Michael brings 12 years of operational excellence, ensuring smooth campus operations and student support services.",
    image: "/assets/img/leadership/Mr-Roshan.jpeg",
  },
  {
    id: 3,
    name: "Mr Roshan",
    position: "General Manager",
    bio: "Michael brings 12 years of operational excellence, ensuring smooth campus operations and student support services.",
    image: "/assets/img/leadership/Mr-Roshan.jpeg",
  },
];

export default function Leadership() {
  return (
    <section className="layout-pt-md layout-pb-lg">
      <div className="container">
        {/* Title Section */}
        <div className="row justify-center text-center">
          <div className="col-xl-8 col-lg-9 col-md-10">
            <h2 className="sectionTitle__title text-black">
              Our Leadership Team
            </h2>
            <p className="sectionTitle__text mt-20">
              Meet the visionary team guiding CSEI Academy's strategic direction
              and daily operations, committed to delivering exceptional
              education in Dubai.
            </p>
          </div>
        </div>

        {/* Grid Section */}
        <div className="row y-gap-40 pt-50">
          {leadershipTeam.map((member, index) => (
            <div
              key={member.id}
              className="col-lg-6 col-md-6"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <motion.div
                whileHover={{
                  y: -6,
                  scale: 1.02,
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
                className="d-flex items-center bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="mr-30">
                  <div className="relative w-24 h-24 rounded-md overflow-hidden border shadow-md">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={500}
                      height={500}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        borderRadius: "10px",
                      }}
                      priority
                    />
                    <span className="absolute bottom-1 right-1 bg-blue-500 text-white text-[10px] px-1 rounded">
                      {member.position.split(" ")[0]}
                    </span>
                  </div>
                </div>
                <div>
                  <h4 className="text-20 fw-600 text-black">{member.name}</h4>
                  <p className="text-blue-500 text-14 font-semibold mt-5 mb-2">
                    {member.position}
                  </p>
                  <p className="text-15 text-black/80 leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
