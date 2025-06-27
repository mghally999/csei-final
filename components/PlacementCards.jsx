// components/placements/PlacementsCard.jsx
"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const PlacementsCard = ({
  title,
  description,
  link,
  image,
  reverse = false,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`mb-16 ${reverse ? "lg:flex-row-reverse" : ""}`}
    >
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          <div className="lg:w-1/2 w-full">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden h-full">
              <Image
                src={image}
                alt={title}
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
            <Link href={link} className="inline-block">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300">
                View More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PlacementsCard;
