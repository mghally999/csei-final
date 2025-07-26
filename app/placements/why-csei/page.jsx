"use client";

import React from "react";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";

export default function WhyCSEI() {
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
          {/* Left Image */}
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
                  height: "500px",
                  display: "block",
                  objectFit: "cover",
                }}
                src="/assets/img/placements/why-recruit.png"
                alt="Why Recruit CSEI Students"
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

          {/* Right Content */}
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
              Why Recruit CSEI Students?
            </h2>

            <p
              style={{
                fontSize: "18px",
                lineHeight: "1.7",
                color: "#4a5568",
                marginBottom: "20px",
              }}
            >
              CSEI students represent a blend of academic excellence, practical
              experience, vocational theory classes and a positive attitude
              towards learning and growth.
            </p>

            <p
              style={{
                fontSize: "18px",
                lineHeight: "1.7",
                color: "#4a5568",
                marginBottom: "20px",
              }}
            >
              They undergo precise coursework and continuous assessments that
              ensure they are not only theoretically trained but also capable of
              solving real-world problems.
            </p>

            <p
              style={{
                fontSize: "18px",
                lineHeight: "1.7",
                color: "#4a5568",
                marginBottom: "20px",
              }}
            >
              In addition to expertise, our students are trained in soft skills
              such as communication, teamwork, and adaptability, preparing them
              to contribute effectively in a professional environment.
            </p>

            <p
              style={{
                fontSize: "18px",
                lineHeight: "1.7",
                color: "#4a5568",
              }}
            >
              We at CSEI follow a culture that encourages innovation, critical
              thinking, and ethical responsibility. Our students bring fresh
              perspectives, a strong work ethic, and the potential to grow
              within your organization.
            </p>

            {/* Background Bubble */}
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

        {/* CTA Section */}
        <div
          style={{
            marginTop: "60px",
            display: "flex",
            justifyContent: "center",
          }}
        ></div>
      </div>
    </div>
  );
}
