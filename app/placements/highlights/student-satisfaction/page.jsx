"use client";

import React from "react";
import Image from "next/image";

export default function StudentSatisfactionSection() {
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
                src="/assets/img/placements/placements-main.jpeg"
                alt="Student Satisfaction at CSEI Academy"
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
              Student Satisfaction
            </h2>

            <p
              style={{
                fontSize: "18px",
                lineHeight: "1.7",
                color: "#4a5568",
                marginBottom: "30px",
              }}
            >
              Based on internal feedback reports and student surveys, over{" "}
              <strong>80% of students</strong> expressed high satisfaction with
              the placement experience at CSEI Academy. They highlighted smooth
              communication with the placement team, the relevance of job
              opportunities provided, and professional development support as
              key strengths of the process.
            </p>

            <h3
              style={{
                fontSize: "22px",
                fontWeight: 600,
                color: "#2d3748",
                marginBottom: "20px",
              }}
            >
              Positive Satisfaction Drivers:
            </h3>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "15px",
                marginBottom: "30px",
              }}
            >
              {[
                "Helpful communication and support from the placement team",
                "Timely updates about placement drives and company visits",
                "Skill development workshops and training sessions",
                "Access to internship and job opportunities with real employers",
              ].map((item, index) => (
                <div
                  key={`positive-${index}`}
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
                  <div
                    style={{
                      fontSize: "16px",
                      lineHeight: "1.6",
                      color: "#2d3748",
                      fontWeight: 500,
                      flex: 1,
                    }}
                  >
                    {item}
                  </div>
                </div>
              ))}
            </div>

            <h3
              style={{
                fontSize: "22px",
                fontWeight: 600,
                color: "#2d3748",
                marginBottom: "20px",
                fontStyle: "italic",
              }}
            >
              Suggested Improvements from the Remaining 20%:
            </h3>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "15px",
              }}
            >
              {[
                "Desire for more industry-specific placement sessions",
                "More personalized career guidance for niche fields",
                "Higher frequency of recruiter interactions and job drives",
              ].map((item, index) => (
                <div
                  key={`negative-${index}`}
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
                      backgroundColor: "#e05500",
                      borderRadius: "50%",
                      color: "white",
                      fontSize: "14px",
                    }}
                  >
                    •
                  </div>
                  <div
                    style={{
                      fontSize: "16px",
                      lineHeight: "1.6",
                      color: "#2d3748",
                      fontWeight: 500,
                      flex: 1,
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

      {/* Responsive Styles */}
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

          h2 {
            font-size: 28px !important;
            text-align: center;
          }

          h3 {
            font-size: 20px !important;
            text-align: center;
          }

          .text-col {
            text-align: center;
          }

          .text-col strong {
            display: block;
            margin-bottom: 5px;
          }
        }

        @media (max-width: 576px) {
          .text-col strong,
          .text-col span,
          .text-col div {
            font-size: 15px !important;
          }
        }
      `}</style>
    </div>
  );
}
