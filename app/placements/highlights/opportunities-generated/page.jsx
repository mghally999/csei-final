"use client";

import React from "react";
import Image from "next/image";

export default function OpportunitiesGeneratedSection() {
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
        <div className="wrapper">
          {/* Image Column */}
          <div className="col image-col">
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
                src="/assets/img/placements/opportunities.png"
                alt="Opportunities at CSEI Academy"
                priority
              />
            </div>
          </div>

          {/* Content Column */}
          <div className="col text-col">
            <h2
              style={{
                fontSize: "36px",
                fontWeight: 700,
                lineHeight: "1.3",
                color: "#2d3748",
                marginBottom: "30px",
                paddingBottom: "15px",
              }}
            >
              Opportunities Generated
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
              We provide comprehensive programs and support systems designed to
              maximize student potential and employability through targeted
              skill development and industry-aligned training.
            </p>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              {[
                "Skill Development Programs: Offer workshops and certifications in trending domains (e.g: Health and social care, Culinary arts, Tourism and hospitality and Digital Marketing, etc.) to improve student employability.",
                "Customized Placement Support: Provide targeted training and job opportunities based on different departments or student interests.",
                "Data-Driven Decision Making: Use feedback and placement statistics to improve strategies and align with industry trends.",
                "Soft Skills & Personality Development: Introduce communication, interview prep, and confidence-building sessions to enhance readiness.",
              ].map((item, index) => (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                  }}
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
                  <div
                    style={{
                      fontSize: "16px",
                      lineHeight: "1.6",
                      color: "#2d3748",
                      fontWeight: 500,
                    }}
                  >
                    {item}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Responsive CSS */}
      <style jsx>{`
        .wrapper {
          display: flex;
          flex-wrap: wrap;
          margin: -15px;
          align-items: stretch;
        }

        .col {
          flex: 0 0 50%;
          max-width: 50%;
          padding: 15px;
        }

        @media (max-width: 992px) {
          .col {
            flex: 0 0 100% !important;
            max-width: 100% !important;
          }

          .text-col {
            text-align: center;
          }

          h2 {
            font-size: 28px !important;
          }

          p {
            font-size: 16px !important;
          }
        }

        @media (max-width: 576px) {
          .text-col div,
          .text-col p {
            font-size: 15px !important;
          }
        }
      `}</style>
    </div>
  );
}
