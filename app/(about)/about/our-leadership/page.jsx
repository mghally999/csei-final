"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const leadershipTeam = [
  {
    id: 1,
    name: "Mr. Roshan Gautam",
    position: "General Manager",
    image: "/assets/img/leadership/Mr-Roshan.jpeg",
    bio: `Since 2018, CSEI Academy has created a legacy of safe and vibrant learning, academic innovation, and positive student experiences. We believe that each learner has the potential to thrive in a nurturing environment guided by our values and high standards...`,
  },
  {
    id: 2,
    name: "Dr. Apollo Serafico",
    position: "Director of Academic Affairs",
    image: "/assets/img/leadership/Dr-Apollo.jpeg",
    bio: `CSEI Academy is an excellent place for students from diverse backgrounds to grow intellectually, emotionally, and socially...`,
  },
  {
    id: 3,
    name: "Mr. Suhail Ahmed Mohammed",
    position: "Board Member",
    image: "/assets/img/leadership/Mr-Suhail.jpeg",
    bio: `It is with great pride that I extend a warm welcome to you on behalf of CSEI Academy...`,
  },
];

export default function Leadership() {
  return (
    <section
      className="custom-padding"
      style={{
        backgroundColor: "#f8f9fc",
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

        {leadershipTeam.map((member, index) => (
          <div
            key={member.id}
            style={{
              display: "flex",
              flexDirection: index % 2 === 1 ? "row-reverse" : "row",
              flexWrap: "wrap",
              gap: "40px",
              marginBottom: "80px",
              alignItems: "stretch", // ✅ Stretch both sides to equal height
              justifyContent: "center",
            }}
          >
            {/* IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: index % 2 === 1 ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              style={{
                flex: "1 1 400px",
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: "0 30px 60px rgba(0, 0, 0, 0.15)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                src={member.image}
                alt={member.name}
                width={600}
                height={400}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center", // ✅ Perfectly center subject
                  borderRadius: "20px",
                }}
                priority
              />
            </motion.div>

            {/* TEXT */}
            <motion.div
              initial={{ opacity: 0, x: index % 2 === 1 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              style={{
                flex: "1 1 400px",
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
