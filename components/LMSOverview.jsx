"use client";

import React from "react";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";

export default function LearningManagementSystemSection() {
  return (
    <div
      className="layout-pb-lg"
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
                src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=2070&auto=format&fit=crop"
                alt="LMS background"
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
              Learning Management System (LMS)
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
              Our LMS is a secure, user-friendly platform where students can
              learn, connect, and grow — anytime, anywhere.
            </p>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              {[
                "Access all course materials and resources in one place.",
                "Submit assignments, take quizzes, and complete exams online.",
                "Watch recorded lectures and interactive video sessions anytime.",
                "Track course progress, deadlines, and completion statuses.",
                "Engage in discussion forums and message instructors directly.",
              ].map((item, index) => (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                  }}
                >
                  <div style={{ marginRight: "15px", flexShrink: 0 }}>
                    <div
                      style={{
                        width: "32px",
                        height: "32px",
                        backgroundColor: "#0f1d56",
                        color: "white",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "16px",
                        fontWeight: "bold",
                        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.3)",
                      }}
                    >
                      ✓
                    </div>
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

        {/* Fully Centered CTA */}
        <div
          style={{
            marginTop: "60px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              padding: "24px 36px",
              borderRadius: "12px",
              background: "linear-gradient(90deg, #3a5acb 0%, #0f1d56 100%)",
              color: "#fff",
              textAlign: "center",
              maxWidth: "700px",
              width: "100%",
              boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <div style={{ fontSize: "20px", fontWeight: 500 }}>
              Ready to learn? Access the LMS now →
            </div>
            <a
              href="https://canvas.instructure.com/login/canvas"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                backgroundColor: "#ffffff",
                color: "#0f1d56",
                padding: "12px 24px",
                fontSize: "16px",
                fontWeight: 600,
                borderRadius: "8px",
                boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
                textDecoration: "none",
              }}
            >
              Access Canvas LMS <FiArrowRight style={{ marginLeft: "10px" }} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
