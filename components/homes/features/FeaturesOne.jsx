"use client";

import React from "react";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const features = [
  "Academic Support",
  "Professional Development",
  "Academic Mentoring",
  "Accommodation & Transport",
  "Migration Support",
  "Student Services",
];

export default function WhyCSEIWithVideo() {
  return (
    <section
      style={{
        backgroundColor: "#000",
        padding: "clamp(60px, 8vw, 100px) 0",
      }}
    >
      <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 20px" }}>
        {/* Section Title */}
        <h2
          style={{
            fontSize: "clamp(28px, 5vw, 42px)",
            fontWeight: "800",
            color: "#ffffff",
            marginBottom: "clamp(40px, 6vw, 70px)",
            textAlign: "center",
            lineHeight: "1.4",
          }}
        >
          Why CSEI Academy & Student Support
        </h2>

        <div className="why-csei-wrapper">
          {/* LEFT TEXT */}
          <div className="why-csei-text">
            <h3
              style={{
                fontSize: "clamp(20px, 4vw, 28px)",
                fontWeight: "800",
                marginBottom: "30px",
                color: "#ffffff",
              }}
            >
              Why <span style={{ color: "#e05500" }}>CSEI Academy</span>?
            </h3>

            {features.map((text, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "clamp(16px, 2vw, 24px)",
                }}
              >
                <div
                  style={{
                    width: "clamp(26px, 5vw, 34px)",
                    height: "clamp(26px, 5vw, 34px)",
                    backgroundColor: "#e05500",
                    color: "#fff",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "clamp(12px, 3vw, 16px)",
                    fontWeight: "bold",
                    marginRight: "clamp(10px, 3vw, 18px)",
                    boxShadow: "0 4px 8px rgba(224, 85, 0, 0.4)",
                    flexShrink: 0,
                  }}
                >
                  <FontAwesomeIcon icon={faCheck} />
                </div>
                <div
                  style={{
                    fontSize: "clamp(14px, 4vw, 18px)",
                    fontWeight: "700",
                    color: "#f1f1f1",
                    lineHeight: "1.7",
                  }}
                >
                  {text}
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT VIDEO */}
          <div className="why-csei-video">
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              disableRemotePlayback
              onCanPlayThrough={(e) => {
                e.currentTarget.play().catch(() => {});
              }}
              className="video-fill"
            >
              <source src="/videos/why-csei.mp4" type="video/mp4" />
              <track kind="captions" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* CSS */}
        <style jsx>{`
          .why-csei-wrapper {
            display: flex;
            flex-direction: column;
            background-color: #111;
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 0 12px 24px rgba(0, 0, 0, 0.6);
          }

          .why-csei-text {
            padding: clamp(30px, 5vw, 50px);
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          }

          .why-csei-video {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #000;
          }

          .video-fill {
            width: 100%;
            height: auto;
            max-height: 550px;
            object-fit: cover;
            object-position: center;
          }

          @media (min-width: 768px) {
            .why-csei-wrapper {
              flex-direction: row;
            }

            .why-csei-text {
              width: 50%;
              padding: clamp(40px, 6vw, 60px);
              border-bottom: none;
              border-right: 1px solid rgba(255, 255, 255, 0.1);
            }

            .why-csei-video {
              width: 50%;
            }
          }
        `}</style>
      </div>
    </section>
  );
}
