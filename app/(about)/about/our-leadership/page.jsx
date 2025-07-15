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
    bio: `Since 2018, CSEI Academy has created a legacy of safe and vibrant learning, academic innovation, and positive student experiences...`,
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
    <section className="leadership-section">
      <div className="container">
        <h2 className="leadership-heading">
          Our Leadership Team
          <span className="underline" />
        </h2>

        {leadershipTeam.map((member, index) => (
          <div
            key={member.id}
            className={`leadership-card ${index % 2 === 1 ? "reverse" : ""}`}
          >
            <motion.div
              className="image-wrapper"
              initial={{ opacity: 0, x: index % 2 === 1 ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src={member.image}
                alt={member.name}
                width={500}
                height={350}
                className="leadership-image"
                priority
              />
            </motion.div>

            <motion.div
              className="text-wrapper"
              initial={{ opacity: 0, x: index % 2 === 1 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="name">{member.name}</h3>
              <p className="position">{member.position}</p>
              <p className="bio">{member.bio}</p>
            </motion.div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .leadership-section {
          background-color: #f8f9fc;
          padding: 120px 20px;
        }

        .container {
          max-width: 1300px;
          margin: 0 auto;
        }

        .leadership-heading {
          font-size: clamp(2.2rem, 6vw, 3.5rem);
          font-weight: 800;
          text-align: center;
          background: linear-gradient(90deg, #1e293b, #0f172a);
          -webkit-background-clip: text;
          color: transparent;
          position: relative;
          text-transform: uppercase;
          margin-bottom: 80px;
        }

        .underline {
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 100px;
          height: 4px;
          background: linear-gradient(to right, #1e293b, #0f172a);
          border-radius: 2px;
        }

        .leadership-card {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 40px;
          margin-bottom: 80px;
          flex-wrap: wrap;
        }

        .reverse {
          flex-direction: row-reverse;
        }

        .image-wrapper {
          flex: 0 0 500px;
          max-width: 500px;
          width: 100%;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.15);
        }

        .leadership-image {
          width: 100% !important;
          height: auto !important;
          object-fit: cover;
          display: block;
        }

        .text-wrapper {
          flex: 1;
          min-width: 280px;
        }

        .name {
          font-size: 26px;
          font-weight: bold;
          color: #111827;
          margin-bottom: 12px;
        }

        .position {
          font-size: 16px;
          font-weight: 600;
          color: #2563eb;
          margin-bottom: 16px;
        }

        .bio {
          font-size: 18px;
          color: #334155;
          line-height: 1.8;
          text-align: justify;
        }

        @media (max-width: 1024px) {
          .leadership-card {
            flex-direction: column !important;
            text-align: center;
          }

          .reverse {
            flex-direction: column !important;
          }

          .image-wrapper {
            width: 100% !important;
            max-width: 100% !important;
          }

          .text-wrapper {
            width: 100%;
          }

          .name {
            font-size: 22px;
          }

          .bio {
            font-size: 16px;
          }
        }

        @media (max-width: 480px) {
          .leadership-heading {
            font-size: 2rem;
          }

          .name {
            font-size: 20px;
          }

          .position {
            font-size: 14px;
          }

          .bio {
            font-size: 15px;
          }
        }
      `}</style>
    </section>
  );
}
