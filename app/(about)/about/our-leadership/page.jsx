"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const leadershipTeam = [
  {
    id: 1,
    name: "Mr. Roshan Gautam",
    position: "General Manager",
    bio: `Since 2018, CSEI Academy has created a legacy of safe and vibrant learning, academic innovation, and positive student experiences. We believe that each learner has the potential to thrive in a nurturing environment guided by our values and high standards. Our sustained success over the years is a direct result of our strategic vision and execution. I invite you to explore our programs and offerings to see how we can be part of your academic and personal growth journey.`,
  },
  {
    id: 2,
    name: "Dr. Apollo Serafico",
    position: "Director of Academic Affairs",
    bio: `CSEI Academy is an excellent place for students from diverse backgrounds to grow intellectually, emotionally, and socially. As the Director of Academic Affairs, I am committed to ensuring a high-quality, inclusive, and student-centered learning experience. We uphold academic integrity, curriculum relevance, and teaching excellence. Together, we can nurture a culture of excellence, resilience, and mutual respect.`,
  },
  {
    id: 3,
    name: "Mr. Suhail Ahmed Mohammed",
    position: "Board Member",
    bio: `It is with great pride that I extend a warm welcome to you on behalf of CSEI Academy. Our mission is to empower learners with the skills and knowledge they need to thrive in a competitive and ever-changing world. We are confident that every student at CSEI Academy will find the tools, encouragement, and guidance they need to reach their full potential.`,
  },
];

export default function Leadership() {
  return (
    <section
      className="custom-padding"
      style={{
        backgroundColor: "#f8f9fc",
        padding: "120px 20px",
      }}
    >
      <div style={{ maxWidth: "1300px", margin: "0 auto" }}>
        <h2
          style={{
            fontSize: "clamp(2.2rem, 6vw, 3.5rem)",
            fontWeight: 800,
            marginBottom: "80px",
            textAlign: "center",
            background: "linear-gradient(90deg, #1e293b, #0f172a)",
            WebkitBackgroundClip: "text",
            color: "transparent",
            textTransform: "uppercase",
            position: "relative",
          }}
        >
          Our Leadership Team
          <span
            style={{
              position: "absolute",
              bottom: "-10px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "100px",
              height: "4px",
              background: "linear-gradient(to right, #1e293b, #0f172a)",
              borderRadius: "2px",
            }}
          />
        </h2>

        {/* Alternating Layout */}
        {leadershipTeam.map((member, index) => (
          <div
            key={member.id}
            style={{
              display: "flex",
              flexDirection: index % 2 === 1 ? "row-reverse" : "row",
              flexWrap: "wrap",
              gap: "40px",
              marginBottom: "80px",
              alignItems: "center",
            }}
          >
            <motion.div
              initial={{ opacity: 0, x: index % 2 === 1 ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              style={{
                flex: "0 0 500px",
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: "0 30px 60px rgba(0, 0, 0, 0.15)",
              }}
            >
              <Image
                src="/assets/img/leadership/Mr-Roshan.jpeg"
                alt={member.name}
                width={500}
                height={350}
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                }}
                priority
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: index % 2 === 1 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              style={{ flex: "1", minWidth: "300px" }}
            >
              <h3
                style={{
                  fontSize: "26px",
                  fontWeight: "bold",
                  color: "#111827",
                  marginBottom: "12px",
                }}
              >
                {member.name}
              </h3>
              <p
                style={{
                  fontSize: "16px",
                  fontWeight: "600",
                  color: "#2563eb",
                  marginBottom: "16px",
                }}
              >
                {member.position}
              </p>
              <p
                style={{
                  fontSize: "18px",
                  color: "#334155",
                  lineHeight: "1.8",
                  textAlign: "justify",
                }}
              >
                {member.bio}
              </p>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
