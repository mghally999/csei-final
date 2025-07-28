"use client";

import React from "react";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";

export default function PlacementObjectivesPage() {
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
            margin: "-15px",
            alignItems: "start",
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
                  height: "auto",
                  display: "block",
                  objectFit: "cover",
                }}
                src="https://images.unsplash.com/photo-1581090700227-1e37b190418e?q=80&w=2070&auto=format&fit=crop"
                alt="Career Development"
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
          >
            <h2
              style={{
                fontSize: "36px",
                fontWeight: 700,
                lineHeight: "1.3",
                color: "#0f1d56",
                marginBottom: "30px",
                position: "relative",
                paddingBottom: "15px",
              }}
            >
              Foster Career-Ready Graduates
            </h2>

            <p
              style={{
                fontSize: "18px",
                lineHeight: "1.7",
                color: "#4a5568",
                marginBottom: "40px",
                fontWeight: 400,
              }}
            >
              At CSEI, we associate with faculty, industry experts and alumni to
              groom every individual student not just for jobs, but for
              long-term career success in evolving markets. We ensure equal
              opportunity and exposure for all students from CSEI, while
              encouraging diverse career interests across industries and roles.
            </p>

            <p
              style={{
                fontSize: "18px",
                lineHeight: "1.7",
                color: "#4a5568",
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

        {/* CTA */}
        <div
          style={{
            marginTop: "60px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {/* Optional CTA can go here */}
        </div>
      </div>
    </div>
  );
}
