"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const leadershipTeam = [
  {
    id: 1,
    name: "Mr. Suhail Ahmed Mohammed",
    position: "Board of Directors",
    image: "/assets/img/leadership/Mr-Suhail.png",
    bio: `It is with great pride that I extend a warm welcome to all students, parents and visitors to the academy on behalf of the CSEI Academy leadership team.

As a Member of the Board of CSEI Academy, I am passionately committed to the pursuit of academic excellence, innovation and integrity. Education today must go beyond the classroom, it must empower students to think independently, act responsibly, and contribute meaningfully to the world around them.

This is made possible through the leading dedication of our faculty, the vision of our leadership, and the active partnership of our student community.

We are confident that every student at CSEI Academy will find the tools, encouragement, and guidance they need to reach their full potential.

Thank you for being a part of our journey.`,
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
  {
    id: 3,
    name: "Mr. Roshan Gautam",
    position: "General Manager",
    image: "/assets/img/leadership/Mr-Roshan.png",
    bio: `Since 2018, CSEI Academy has created a legacy of safe and vibrant learning and ranks among educational institutions. Being constant fixture in the list of educational institution accredited by KHDA, we are proud to be a choice for all discerning individuals and parents.

You can look forward to encouraging a highly intensive challenging academic program that will ensure all students become critical thinkers, active problem-solvers, inquisitive readers, diligent researchers.

Each year we reflect on our achievements and rejoice at all that we have done in the past years. Though much has changed over the years, our promise remains the same. Our sustained success over the years is a direct result of our strategic vision and execution.`,
  },
  {
    id: 4,
    name: "Dr. Khaled Anwar",
    position: "Lead Internal Verifier",
    image: "/assets/img/leadership/Dr-Khaled.jpeg",
    bio: `At CSEI, we take pride in delivering UK vocational qualifications that promote both academic excellence and the development of practical skills across diverse professional sectors. As the Lead Internal Verifier within the Management Team, I am committed to ensuring the integrity, quality, and consistency of our assessment and verification processes.

Internal verification is critical to maintaining the high standards set by UK awarding bodies. It ensures fair, transparent, and compliant assessment practices. Through regular monitoring, standardisation, and collaboration with assessors and quality assurance teams, we uphold a rigorous internal quality assurance framework that supports learner achievement and institutional credibility.

CSEI works in close partnership with awarding bodies, employers, and academic institutions to ensure our qualifications align with industry standards and evolving workforce needs. Our goal is to equip every learner with the knowledge, skills, and confidence to succeed in their chosen career.

Thank you for being part of our learning community. We remain steadfast in our commitment to quality, compliance, and learner success.`,
  },
];

export default function Leadership() {
  return (
    <section className="layout-pb-lg" style={{ backgroundColor: "#f8f9fc" }}>
      <div style={{ maxWidth: "1300px", margin: "0 auto", padding: "0 16px" }}>
        {/* Section Title */}
        <h2
          style={{
            fontSize: "clamp(2.2rem, 6vw, 3.5rem)",
            fontWeight: 800,
            marginBottom: "80px",
            textAlign: "center",
            WebkitBackgroundClip: "text",
            color: "transparent",
            textTransform: "uppercase",
            position: "relative",
            color: "#000000",
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

        {/* Leadership Cards */}
        {leadershipTeam.map((member, index) => (
          <div
            key={member.id}
            style={{
              display: "flex",
              flexDirection: index % 2 === 1 ? "row-reverse" : "row",
              flexWrap: "wrap",
              alignItems: "center",
              gap: "40px",
              marginBottom: "80px",
              justifyContent: "space-between",
            }}
          >
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: index % 2 === 1 ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              style={{
                flex: "1 1 500px",
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: "0 20px 50px rgba(0,0,0,0.1)",
                maxWidth: "500px",
              }}
            >
              <Image
                src={member.image}
                alt={member.name}
                width={500}
                height={500}
                style={{
                  width: "100%",
                  height: "500px",
                  objectFit: "cover",
                  borderRadius: "20px",
                  backgroundColor: "#e0e0e0",
                }}
              />
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: index % 2 === 1 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              style={{
                flex: "1 1 500px",
                minWidth: "300px",
                textAlign: "left",
                padding: "0 10px",
              }}
            >
              <h3
                style={{
                  fontSize: "24px",
                  fontWeight: "700",
                  color: "#1e293b",
                  marginBottom: "8px",
                  textAlign: "center",
                }}
              >
                {member.name}
              </h3>
              <p
                style={{
                  fontSize: "16px",
                  fontWeight: "600",
                  color: "#E05500",
                  marginBottom: "16px",
                  textAlign: "center",
                }}
              >
                {member.position}
              </p>
              <p
                style={{
                  fontSize: "17px",
                  lineHeight: "1.7",
                  color: "#334155",
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
