"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Leadership team data
const leadershipTeam = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    position: "Academic Director",
    bio: "With over 15 years in higher education, Dr. Johnson leads our academic strategy with a focus on innovative learning methodologies.",
    image:
      "https://plus.unsplash.com/premium_photo-1713296255442-e9338f42aad8?q=80&w=844&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "Operations Director",
    bio: "Michael brings 12 years of operational excellence, ensuring smooth campus operations and student support services.",
    image:
      "https://plus.unsplash.com/premium_photo-1713296255442-e9338f42aad8?q=80&w=844&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    name: "Aisha Al-Mansoori",
    position: "Industry Partnerships",
    bio: "Aisha connects our students with top employers through her extensive network in Dubai's business community.",
    image:
      "https://plus.unsplash.com/premium_photo-1713296255442-e9338f42aad8?q=80&w=844&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
                      width={96}
                      height={96}
                      className="object-cover"
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
