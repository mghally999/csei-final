"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const leadershipTeam = [
  {
    id: 3,
    name: "Mr. Suhail Ahmed Mohammed",
    position: "Board Member",
    image: "/assets/img/leadership/Mr-Suhail.png",
    bio: `It is with great pride that I extend a warm welcome to all students, parents and visitors to the academy on behalf of the CSEI Academy leadership team.

As a Member of the Board of CSEI Academy, I am passionately committed to the pursuit of academic excellence, innovation and integrity. Education today must go beyond the classroom, it must empower students to think independently, act responsibly, and contribute meaningfully to the world around them.

This is made possible through the leading dedication of our faculty, the vision of our leadership, and the active partnership of our student community.

We are confident that every student at CSEI Academy will find the tools, encouragement, and guidance they need to reach their full potential.

Thank you for being a part of our journey.`,
  },
  {
    id: 1,
    name: "Mr. Roshan Gautam",
    position: "General Manager",
    image: "/assets/img/leadership/Mr-Roshan.png",
    bio: `Since 2018, CSEI Academy has created a legacy of safe and vibrant learning and ranks among educational institutions. Being constant fixture in the list of educational institution accredited by KHDA, we are proud to be a choice for all discerning individuals and parents.

You can look forward to encouraging a highly intensive challenging academic program that will ensure all students become critical thinkers, active problem-solvers, inquisitive readers, diligent researchers.

Each year we reflect on our achievements and rejoice at all that we have done in the past years. Though much has changed over the years, our promise remains the same. Our sustained success over the years is a direct result of our strategic vision and execution.`,
  },
  {
    id: 2,
    name: "Dr. Apollo Serafico",
    position: "Head of Academics",
    image: "/assets/img/leadership/Mr-Apolo.png",
    bio: `CSEI Academy is an excellent place for students from diverse backgrounds to grow educationally, get involved professionally and have a meaningful experience. We offer the best educational experience available today. More than qualifications, the CSEI promotes strong values and global leadership to our student community.

Our Mission is to provide a transformative educational experience that not only equips students with knowledge and skills but also fosters critical thinking, creativity and ethical values.

I believe that education is a partnership between the Academy, Individual, parents, and the community. Together, we can nurture a culture of excellence, resilience, and mutual respect that prepares our students for academic success and beyond.

Thank you for visiting our website. We invite you to explore more about our academic programs and the many opportunities available at CSEI Academy.`,
  },
];

export default function Leadership() {
  return (
    <section className="layout-pb-lg" style={{ backgroundColor: "#f8f9fc" }}>
      <div style={{ maxWidth: "1300px", margin: "0 auto", padding: "0 16px" }}>
        {/* Heading */}
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

        {/* Team Members */}
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
              justifyContent: "center",
            }}
          >
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: index % 2 === 1 ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              style={{
                flex: "1 1 450px",
                maxWidth: "500px",
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: "0 30px 60px rgba(0, 0, 0, 0.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                src={member.image}
                alt={member.name}
                width={500}
                height={500}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "20px",
                  backgroundColor: "#ddd",
                }}
                priority
              />
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: index % 2 === 1 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              style={{
                flex: "1 1 450px",
                minWidth: "300px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                padding: "20px",
              }}
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
                  maxWidth: "700px",
                  textAlign: "justify",
                  whiteSpace: "pre-line",
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
