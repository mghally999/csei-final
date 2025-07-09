"use client";

import React from "react";
import Image from "next/image";

export default function StudentSupportSection() {
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
          {/* Image Column */}
          <div
            style={{
              flex: "0 0 50%",
              maxWidth: "50%",
              padding: "15px",
              position: "relative",
              "@media (maxWidth: 992px)": {
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
                alt="Student Support at CSEI Academy"
                priority
              />
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  //   background:
                  //     "linear-gradient(135deg, rgba(102,51,153,0.3) 0%, rgba(75,0,130,0.3) 100%)",
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
              "@media (maxWidth: 992px)": {
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
                ":after": {
                  content: '""',
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "80px",
                  height: "4px",
                  background:
                    "linear-gradient(90deg, #663399 0%, #4b0082 100%)",
                  borderRadius: "2px",
                },
              }}
            >
              Our Student Support System
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
              At CSEI Academy, we are dedicated to mentoring and supporting our
              students every step of the way to help them unlock their full
              potential as a newcomer in Dubai. Our support system provides
              personalized guidance, career planning, and academic support
              tailored to each student's unique needs.
            </p>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              {[
                "Personalized mentoring from experienced faculty and industry professionals",
                "Career guidance and support to help students plan their future paths",
                "Workshops and skill-building sessions to enhance academic and professional growth",
                "Continuous encouragement fostering confidence and resilience",
                "Access to industry connections and real-world opportunities for practical learning",
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
                    }}
                  >
                    <div
                      style={{
                        width: "32px",
                        height: "32px",
                        backgroundColor: "#000000",
                        color: "white",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "16px",
                        fontWeight: "bold",
                        boxShadow: "0 4px 6px rgba(102, 51, 153, 0.3)",
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

            {/* Additional Decorative Elements */}
            <div
              style={{
                position: "absolute",
                top: "-50px",
                right: "-50px",
                width: "200px",
                height: "200px",
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, rgba(102,51,153,0.1) 0%, rgba(102,51,153,0) 70%)",
                zIndex: 0,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
