"use client";

import React from "react";
import Image from "next/image";

export default function PlacementBriefingPage() {
  return (
    <div
      className="layout-pb-lg custom-padding"
      style={{
        paddingTop: "80px",
        backgroundColor: "#f8f9fa",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "row",
            margin: "-15px",
            alignItems: "flex-start",
          }}
        >
          {/* Image Column */}
          <div
            style={{
              flex: "0 0 50%",
              maxWidth: "50%",
              padding: "15px",
              position: "relative",
            }}
            className="image-col"
          >
            <div
              style={{
                position: "relative",
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                transition: "transform 0.3s ease",
              }}
            >
              <Image
                width={600}
                height={400}
                style={{
                  width: "100%",
                  height: "550px",
                  display: "block",
                  objectFit: "cover",
                }}
                src="/assets/img/placements/briefing.png"
                alt="CSEI Briefing"
                priority
              />
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  background:
                    "linear-gradient(135deg, rgba(15,29,86,0.2) 0%, rgba(58,90,203,0.2) 100%)",
                }}
              />
            </div>
          </div>

          {/* Content Column */}
          <div
            style={{
              flex: "0 0 50%",
              maxWidth: "50%",
              padding: "15px",
              position: "relative",
            }}
            className="text-col"
          >
            <h2
              style={{
                fontSize: "36px",
                fontWeight: 700,
                lineHeight: "1.3",
                color: "#0f1d56",
                marginBottom: "30px",
                paddingBottom: "15px",
              }}
            >
              CSEI Institute – Empowering Lifelong Learning
            </h2>

            <p
              style={{
                fontSize: "18px",
                lineHeight: "1.7",
                color: "#4a5568",
                marginBottom: "30px",
                fontWeight: 400,
              }}
            >
              CSEI Institutes is a centre for academic excellence, committed to
              empowering individuals through quality education and skill
              development. Established with the vision to nurture talent and
              inspire lifelong learning, CSEI offers a diverse range of programs
              designed to meet the evolving needs of students, professionals,
              and industries.
            </p>

            <p
              style={{
                fontSize: "18px",
                lineHeight: "1.7",
                color: "#4a5568",
                marginBottom: "30px",
              }}
            >
              Our experienced faculty, modern infrastructure, and
              industry-relevant curriculum ensure that every learner receives a
              well-rounded education that opens doors to global opportunities.
            </p>

            <p
              style={{
                fontSize: "18px",
                lineHeight: "1.7",
                color: "#4a5568",
              }}
            >
              With a strong focus on industry collaboration and career
              readiness, CSEI continues to empower students to achieve academic
              excellence and become professionals who thrive in dynamic global
              environments.
            </p>

            {/* Decorative Element */}
            <div
              style={{
                position: "absolute",
                bottom: "-50px",
                left: "-50px",
                width: "200px",
                height: "200px",
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, rgba(15,29,86,0.1) 0%, rgba(15,29,86,0) 70%)",
                zIndex: 0,
              }}
            />
          </div>
        </div>

        {/* CTA if needed */}
        <div
          style={{
            marginTop: "60px",
            display: "flex",
            justifyContent: "center",
          }}
        ></div>
      </div>

      {/* Responsive Styles */}
      <style jsx>{`
        @media (max-width: 992px) {
          .image-col,
          .text-col {
            flex: 0 0 100% !important;
            max-width: 100% !important;
            text-align: center;
          }

          .text-col h2 {
            font-size: 28px !important;
          }

          .text-col p {
            font-size: 16px !important;
          }
        }
      `}</style>
    </div>
  );
}
