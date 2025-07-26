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
                position: "relative",
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
                fontWeight: 400,
              }}
            >
              A recent analysis of student feedback reveals that{" "}
              <strong>80% of students</strong> are satisfied with the placement
              services provided by CSEI Placement Team. This includes
              satisfaction with the quality of job offers, the recruitment
              process, and the support provided by the placement team.
            </p>

            <h3
              style={{
                fontSize: "22px",
                fontWeight: 600,
                color: "#2d3748",
                marginBottom: "20px",
              }}
            >
              Common Satisfaction Factors:
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
                "Good support from the placement Team",
                "Availability of reputed recruiters",
                "Adequate training and preparation sessions",
              ].map((item, index) => (
                <div
                  key={`positive-${index}`}
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
              Based on feedback from the remaining 20%:
            </h3>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "15px",
              }}
            >
              {[
                "Limited job role variety in certain departments",
                "Expectations of higher salary packages",
                "Desire for more industry-specific placement opportunities",
              ].map((item, index) => (
                <div
                  key={`negative-${index}`}
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

      {/* Custom Responsive Styles */}
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
