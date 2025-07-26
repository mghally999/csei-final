"use client";

import React from "react";
import Image from "next/image";

export default function PlacementServices() {
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
        <div className="flex-wrapper">
          {/* Left: Image */}
          <div className="image-col">
            <div
              style={{
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
              }}
            >
              <Image
                width={600}
                height={420}
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                  objectFit: "cover",
                }}
                src="https://plus.unsplash.com/premium_photo-1682787494977-d013bb5a8773?q=80&w=2070&auto=format&fit=crop"
                alt="CSEI Placement Services"
                priority
              />
            </div>
          </div>

          {/* Right: Content */}
          <div className="text-col">
            <h2
              style={{
                fontSize: "36px",
                fontWeight: 700,
                lineHeight: "1.3",
                color: "#2d3748",
                marginBottom: "30px",
                position: "relative",
                paddingBottom: "15px",
              }}
            >
              Our Services
            </h2>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "18px",
                marginBottom: "10px",
              }}
            >
              {[
                {
                  title: "Placement Training",
                  desc: "Soft skills training, aptitude test preparation, resume writing workshops, mock interviews, and group discussion sessions to enhance employability.",
                },
                {
                  title: "Internship Opportunities",
                  desc: "Assistance in securing internships that provide practical exposure and build professional experience.",
                },
                {
                  title: "Career Guidance Counselling",
                  desc: "One-on-one or group counselling sessions to help students choose suitable career paths based on their strengths and interests.",
                },
                {
                  title: "Alumni Network Support",
                  desc: "Engagement with alumni for mentoring, networking, and job referrals.",
                },
                {
                  title: "Corporate Tie-Ups",
                  desc: "Building and maintaining relationships with various industries and organizations to create more placement opportunities.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  style={{ display: "flex", alignItems: "flex-start" }}
                >
                  <div
                    style={{
                      marginRight: "15px",
                      flexShrink: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "24px",
                      height: "24px",
                      backgroundColor: "#000000",
                      borderRadius: "50%",
                      color: "white",
                      fontSize: "14px",
                    }}
                  >
                    ✓
                  </div>
                  <div style={{ flex: 1 }}>
                    <strong
                      style={{
                        fontSize: "16px",
                        color: "#2d3748",
                        fontWeight: 600,
                      }}
                    >
                      {item.title}:
                    </strong>{" "}
                    <span
                      style={{
                        fontSize: "16px",
                        lineHeight: "1.6",
                        color: "#4a5568",
                        fontWeight: 400,
                      }}
                    >
                      {item.desc}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Responsive Styles */}
      <style jsx>{`
        .flex-wrapper {
          display: flex;
          flex-wrap: wrap;
          margin: -15px;
          align-items: center;
        }

        .image-col,
        .text-col {
          flex: 0 0 50%;
          max-width: 50%;
          padding: 15px;
        }

        @media (max-width: 992px) {
          .image-col,
          .text-col {
            flex: 0 0 100% !important;
            max-width: 100% !important;
          }

          h2 {
            font-size: 28px !important;
            text-align: center;
          }

          .text-col {
            text-align: center;
          }

          .text-col strong {
            display: block;
            margin-bottom: 4px;
          }
        }

        @media (max-width: 576px) {
          .text-col strong {
            font-size: 15px;
          }

          .text-col span {
            font-size: 15px;
          }
        }
      `}</style>
    </div>
  );
}
