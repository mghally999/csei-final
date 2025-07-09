// app/placements/[category]/partners/page.jsx

"use client";

import React from "react";
import Image from "next/image";

export default function PartnersSection() {
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
            alignItems: "center",
          }}
        >
          {/* Content Column - Left Side */}
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
              CSEI Industry Partners
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
              Discover our network of 300+ premier corporate partners including
              Fortune 500 companies that regularly recruit CSEI graduates across
              all disciplines.
            </p>

            {/* Stats Badges */}
            <div
              style={{
                display: "flex",
                gap: "10px",
                marginBottom: "30px",
                flexWrap: "wrap",
              }}
            >
              <span
                style={{
                  backgroundColor: "#f0f4ff",
                  padding: "8px 16px",
                  borderRadius: "20px",
                  fontSize: "14px",
                  fontWeight: 600,
                }}
              >
                45 Fortune 500 companies
              </span>
              <span
                style={{
                  backgroundColor: "#f0f4ff",
                  padding: "8px 16px",
                  borderRadius: "20px",
                  fontSize: "14px",
                  fontWeight: 600,
                }}
              >
                12 international recruiters
              </span>
              <span
                style={{
                  backgroundColor: "#f0f4ff",
                  padding: "8px 16px",
                  borderRadius: "20px",
                  fontSize: "14px",
                  fontWeight: 600,
                }}
              >
                85% repeat recruiters
              </span>
            </div>

            <h3
              style={{
                fontSize: "24px",
                fontWeight: 600,
                color: "#2d3748",
                marginBottom: "20px",
              }}
            >
              Why partner with CSEI Academy?
            </h3>

            <p
              style={{
                fontSize: "16px",
                color: "#4a5568",
                marginBottom: "30px",
              }}
            >
              CSEI Academy is not just a training provider — it's a growth
              partner. Partnering with CSEI institutes is more than just a
              recruitment strategy, it's an investment in the future of your
              company and the tech industry as a whole.
            </p>

            {/* Full Partner Benefits List */}
            <div
              style={{ display: "flex", flexDirection: "column", gap: "25px" }}
            >
              {[
                {
                  title: "Brand Visibility & Engagement",
                  items: [
                    "Employer branding on campus",
                    "Guest lectures and webinars",
                    "Early engagement through internships and events",
                  ],
                },
                {
                  title: "Tailored Recruitment Support",
                  items: [
                    "Role-specific candidate shortlisting",
                    "Campus hiring drives",
                    "Pre-assessed talent pools",
                  ],
                },
                {
                  title: "Strong Institutional Support",
                  items: [
                    "Continuous collaboration with our leadership and placement team",
                    "Follow-up support for recruitment partnerships",
                  ],
                },
                {
                  title: "Commitment to Long-Term Collaboration",
                  items: [
                    "We view placements not as a transaction, but a strategic partnership",
                    "Invested in delivering consistent value, quality candidates",
                    "Open channel for future hiring needs",
                  ],
                },
                {
                  title: "Diversity & Inclusion",
                  items: [
                    "Diverse pools of candidates supporting company goals",
                    "Access to talent from varied social, economic, and geographic backgrounds",
                  ],
                },
                {
                  title: "Faster Hiring Cycles",
                  items: [
                    "Structured and predictable campus placement seasons",
                    "Reduces time-to-hire compared to open-market hiring",
                  ],
                },
                {
                  title: "Loyalty and Retention",
                  items: [
                    "Graduates show higher loyalty and longer tenure",
                    "Especially effective when career development paths are clear",
                  ],
                },
              ].map((benefit, index) => (
                <div key={index}>
                  <h4
                    style={{
                      fontSize: "18px",
                      fontWeight: 600,
                      color: "#2d3748",
                      marginBottom: "10px",
                    }}
                  >
                    {index + 1}. {benefit.title}
                  </h4>
                  <ul style={{ marginLeft: "20px" }}>
                    {benefit.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        style={{
                          position: "relative",
                          paddingLeft: "25px",
                          marginBottom: "8px",
                          listStyleType: "none",
                          fontSize: "16px",
                          color: "#4a5568",
                        }}
                      >
                        <span
                          style={{
                            position: "absolute",
                            left: 0,
                            color: "#663399",
                            fontWeight: "bold",
                          }}
                        >
                          •
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Image Column - Right Side */}
          <div
            style={{
              flex: "0 0 50%",
              maxWidth: "50%",
              padding: "15px",
              position: "relative",
              "@media (max-width: 992px)": {
                flex: "0 0 100%",
                maxWidth: "100%",
                order: -1,
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
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                alt="Logos of top companies recruiting from CSEI"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
