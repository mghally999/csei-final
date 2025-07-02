"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// Leadership team data
const leadershipTeam = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    position: "Academic Director",
    bio: "With over 15 years in higher education, Dr. Johnson leads our academic strategy with a focus on innovative learning methodologies.",
    image: "/images/about/leadership/sarah-johnson.jpg",
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "Operations Director",
    bio: "Michael brings 12 years of operational excellence, ensuring smooth campus operations and student support services.",
    image: "/images/about/leadership/michael-chen.jpg",
  },
  {
    id: 3,
    name: "Aisha Al-Mansoori",
    position: "Industry Partnerships",
    bio: "Aisha connects our students with top employers through her extensive network in Dubai's business community.",
    image: "/images/about/leadership/aisha-mansoori.jpg",
  },
  {
    id: 4,
    name: "Professor David Wilson",
    position: "Head of Faculty",
    bio: "With publications in top journals, Professor Wilson ensures our curriculum meets international standards.",
    image: "/images/about/leadership/david-wilson.jpg",
  },
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

export default function Leadership() {
  return (
    <section className="layout-pt-md layout-pb-md relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-40 -left-40 w-[30rem] h-[30rem] bg-purple-200 rounded-full blur-[120px] opacity-20"></div>
        <div className="absolute bottom-0 -right-40 w-[35rem] h-[35rem] bg-blue-200 rounded-full blur-[120px] opacity-20"></div>
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
                Our <span className="text-blue-400">Leadership</span>
              </h2>

              <p className="brief-paragraph text-white/80">
                Meet the visionary team guiding CSEI Academy's strategic
                direction and daily operations, committed to delivering
                exceptional education in Dubai.
              </p>
            </motion.div>

            {/* Leadership Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 mt-12"
            >
              {leadershipTeam.map((member) => (
                <motion.div
                  key={member.id}
                  variants={itemVariants}
                  whileHover={{
                    y: -5,
                    boxShadow: "0 10px 25px -5px rgba(99, 102, 241, 0.2)",
                  }}
                  className="flex flex-col items-center text-center bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-blue-400/30 transition-all duration-300"
                >
                  <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white/10 mb-5">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-blue-300 text-sm font-medium mb-3">
                    {member.position}
                  </p>
                  <p className="brief-paragraph !text-left !text-white/70 !text-base !font-normal">
                    {member.bio}
                  </p>
                </motion.div>
              ))}
            </motion.div>
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
