"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Mission() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section
      className="layout-pb-lg"
      style={{
        paddingTop: "100px",
        paddingBottom: "100px",
        background: "linear-gradient(145deg, #0f172a, #1e293b)",
        color: "#ffffff",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            margin: "-20px",
            alignItems: "center",
          }}
        >
          {/* Image Column */}
          <div
            style={{
              flex: "0 0 50%",
              maxWidth: "50%",
              padding: "20px",
            }}
            data-aos="fade-right"
          >
            <div
              style={{
                borderRadius: "14px",
                overflow: "hidden",
                boxShadow: "0 12px 40px rgba(0,0,0,0.4)",
              }}
            >
              <Image
                src="https://media.istockphoto.com/id/2186780950/photo/software-engineers-collaborating-on-a-project-analyzing-code-on-computer-monitors-in-office.jpg?s=1024x1024&w=is&k=20&c=Q87wEHkCfeUfJywu7umqCCDx469iwXsV35i9f3N2NpE="
                alt="Mission Visual"
                width={700}
                height={480}
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                  display: "block",
                }}
                priority
              />
            </div>
          </div>

          {/* Text Column */}
          <div
            style={{
              flex: "0 0 50%",
              maxWidth: "50%",
              padding: "40px 20px 20px 40px",
            }}
            data-aos="fade-left"
          >
            <h2
              style={{
                fontSize: "42px",
                fontWeight: "800",
                lineHeight: "1.3",
                marginBottom: "35px",
                color: "#f1f5f9",
              }}
            >
              Our Mission
            </h2>
            <p
              style={{
                fontSize: "19px",
                lineHeight: "1.9",
                fontWeight: "500",
                color: "#e2e8f0",
                textAlign: "justify",
                marginBottom: "20px",
              }}
            >
              At <strong>CSEI Academy</strong>, our mission is to ignite every
              student’s potential through affordable, globally recognized
              education and an inclusive environment.
            </p>
            <p
              style={{
                fontSize: "19px",
                lineHeight: "1.9",
                fontWeight: "500",
                color: "#e2e8f0",
                textAlign: "justify",
              }}
            >
              Our dedicated staff support, mentor, and inspire learners from all
              backgrounds, ensuring they feel valued and empowered. Through
              hands-on experiences, strong academic foundations, and
              industry-driven opportunities, we prepare future leaders to
              succeed and impact the world — locally and globally.
            </p>
          </div>
        </div>
      </div>

      {/* Responsive Spacing Fix */}
      <style jsx>{`
        @media (max-width: 992px) {
          div[style*="flex: 0 0 50%"] {
            flex: 0 0 100% !important;
            max-width: 100% !important;
          }

          div[style*="padding: 40px"] {
            padding: 30px 20px !important;
          }

          h2 {
            text-align: center;
            font-size: 32px !important;
            margin-top: 30px;
          }

          p {
            font-size: 16px !important;
          }
        }
      `}</style>
    </section>
  );
}
