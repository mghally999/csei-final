"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Mission() {
  const missionPoints = [
    "Deliver internationally recognized programs",
    "Promote practical, career-oriented learning",
    "Support continuous professional development",
    "Foster innovation and critical thinking",
    "Encourage community engagement and impact",
    "Maintain high ethical and academic standards",
    "Adapt to the evolving demands of the workforce",
    "Ensure equal opportunities for all learners",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <section className="layout-pt-md layout-pb-md bg-gradient-to-b from-[#f8f9ff] to-[#e9eeff] relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-40 -left-40 w-[30rem] h-[30rem] bg-purple-200 rounded-full blur-[120px] opacity-30"></div>
        <div className="absolute bottom-0 -right-40 w-[35rem] h-[35rem] bg-blue-200 rounded-full blur-[120px] opacity-30"></div>
      </div>

      <div className="container">
        <div className="row justify-center">
          <div className="col-xl-8 col-lg-9 col-md-10">
            {/* Title Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-50px" }}
              className="text-center mb-12"
            >
              <h2 className="sectionTitle__title text-black mb-6">
                Our <span className="text-blue-600">Mission</span>
              </h2>

              <div className="space-y-5">
                <p className="brief-paragraph">
                  At CSEI Academy in Dubai, our mission is to ignite every
                  student's potential through affordable, internationally
                  recognized education and an inclusive campus environment.
                </p>
                <p className="brief-paragraph">
                  Through hands-on learning and real-world exposure, we equip
                  future leaders to thrive and create lasting impact—both
                  locally and globally.
                </p>
              </div>
            </motion.div>

            {/* Mission Points Grid */}
            <motion.ul
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="grid gap-5 sm:grid-cols-2 mt-12"
            >
              {missionPoints.map((point, i) => (
                <motion.li
                  key={i}
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.2)",
                  }}
                  className="flex items-start p-6 rounded-xl bg-white border border-blue-100 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="flex-shrink-0 mt-1 mr-4">
                    <div className="w-4 h-4 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 shadow-xs"></div>
                  </div>
                  <p className="brief-paragraph !text-left !font-semibold !text-[#1a0c46] !leading-relaxed">
                    {point}
                  </p>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>
      </div>

      <style jsx>{`
        .brief-paragraph {
          font-size: 18px;
          font-weight: 500;
          color: #3a3a55;
          line-height: 1.75;
          letter-spacing: 0.2px;
          text-align: center;
        }

        @media (min-width: 768px) {
          .brief-paragraph {
            font-size: 19px;
          }
        }
      `}</style>
    </section>
  );
}
