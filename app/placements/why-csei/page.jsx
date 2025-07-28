"use client";

import React from "react";
import Image from "next/image";

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
          className="responsive-flex"
          style={{
            display: "flex",
            flexWrap: "wrap",
            margin: "-15px",
            alignItems: "flex-start",
          }}
        >
          {/* Left Image */}
          <div
            className="image-col"
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
                  height: "550px",
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
            className="text-col"
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
              CSEI students represent a unique blend of academic rigor, hands-on
              training, and a growth mindset. They are groomed with the
              technical knowledge and practical skills required to succeed in
              dynamic workplaces.
            </p>

            <p
              style={{
                fontSize: "18px",
                lineHeight: "1.7",
                color: "#4a5568",
                marginBottom: "20px",
              }}
            >
              Our programs are curated in collaboration with industry experts to
              ensure that every graduate is workplace-ready from day one. This
              includes vocational theory, real-world simulations, and case-based
              learning that enhances their problem-solving abilities.
            </p>

            <p
              style={{
                fontSize: "18px",
                lineHeight: "1.7",
                color: "#4a5568",
                marginBottom: "20px",
              }}
            >
              Beyond academics, we place a strong emphasis on personality
              development, communication skills, teamwork, and
              adaptability—ensuring that our students can lead, collaborate, and
              innovate effectively.
            </p>

            <p
              style={{
                fontSize: "18px",
                lineHeight: "1.7",
                color: "#4a5568",
              }}
            >
              When you hire a CSEI graduate, you're investing in a professional
              who is eager to contribute, quick to learn, and aligned with the
              values of integrity, excellence, and innovation.
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

        {/* CTA Section (optional) */}
        <div
          style={{
            marginTop: "60px",
            display: "flex",
            justifyContent: "center",
          }}
        ></div>
      </div>

      {/* RESPONSIVE STYLES */}
      <style jsx>{`
        @media (max-width: 992px) {
          .image-col,
          .text-col {
            flex: 0 0 100% !important;
            max-width: 100% !important;
            text-align: center;
          }

          .text-col h2 {
            font-size: 28px !important;
          }

          .text-col p {
            font-size: 16px !important;
          }

          .image-col img {
            height: auto !important;
          }
        }
      `}</style>
    </div>
  );
}
