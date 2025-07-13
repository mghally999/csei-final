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
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            margin: "-15px",
            alignItems: "stretch",
          }}
        >
          {/* Image Column */}
          <div
            style={{
              flex: "0 0 50%",
              maxWidth: "50%",
              padding: "15px",
              position: "relative",
              "@media (max-width: 992px)": {
                flex: "0 0 100%",
                maxWidth: "100%",
              },
            }}
          >
            <div
              style={{
                position: "relative",
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                transition: "transform 0.3s ease",
                ":hover": {
                  transform: "translateY(-5px)",
                },
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
                src="https://images.unsplash.com/photo-1462536943532-57a629f6cc60?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Opportunities at CSEI Academy"
                priority
              />
            </div>
          </div>

          {/* Content Column */}
          <div
            style={{
              flex: "0 0 50%",
              maxWidth: "50%",
              padding: "15px",
              "@media (max-width: 992px)": {
                flex: "0 0 100%",
                maxWidth: "100%",
              },
            }}
          >
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
    </div>
  );
}
