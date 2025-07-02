// components/placements/Placements.jsx
"use client";
import React from "react";
import PlacementsCard from "../PlacementCards";
import { motion } from "framer-motion";

const Placements = () => {
  const placementsData = [
    {
      title: "Placement Objectives",
      description:
        "Our primary goal is to bridge the gap between academia and industry, ensuring 100% placement assistance for our students. We focus on developing industry-ready professionals through comprehensive training programs and direct corporate engagement.",
      link: "/placements/objectives",
      image: "/assets/img/placements/objectives.jpg",
      reverse: false,
    },
    {
      title: "Placement Overview",
      description:
        "With an impressive track record of placements across top companies, our placement cell works tirelessly to connect students with the right opportunities. Explore our placement statistics, top recruiters, and student success stories.",
      link: "/placements/overview",
      image: "/assets/img/placements/overview.jpg",
      reverse: true,
    },
    {
      title: "Why Recruit CSEI Students",
      description:
        "CSEI students stand out with their practical skills, problem-solving abilities, and industry exposure. Our curriculum is designed in collaboration with industry leaders to produce graduates who can contribute from day one.",
      link: "/placements/why-csei",
      image: "/assets/img/placements/why-recruit.jpg",
      reverse: false,
    },
    {
      title: "Our Services",
      description:
        "From campus recruitment drives to industry-academia partnerships, we offer a range of services to both students and recruiters. Discover how we facilitate seamless hiring processes and career development.",
      link: "/placements/services",
      image: "/assets/img/placements/services.jpg",
      reverse: true,
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Placements at CSEI
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connecting talent with opportunity through our comprehensive
            placement program
          </p>
        </motion.div>

        <div className="space-y-20">
          {placementsData.map((item, index) => (
            <PlacementsCard
              key={index}
              title={item.title}
              description={item.description}
              link={item.link}
              image={item.image}
              reverse={item.reverse}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Placements;
