"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function LearningManagementSystemSection() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const featuresRef = useRef([]);
  const ctaRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Parallax and fade-in effects
    gsap.fromTo(
      imageRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(
      contentRef.current,
      { x: 50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      }
    );

    // Staggered feature animations
    featuresRef.current.forEach((feature, i) => {
      gsap.fromTo(
        feature,
        { x: -20, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          delay: i * 0.15,
          scrollTrigger: {
            trigger: feature,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    // Floating CTA animation
    gsap.to(ctaRef.current, {
      y: 10,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }, []);

  return (
    <div
      ref={sectionRef}
      className="layout-pb-lg custom-padding"
      style={{
        paddingTop: "80px",
        background: "linear-gradient(135deg, #f8f9fa 0%, #eef2ff 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Floating abstract shapes */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "5%",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(58,90,203,0.1) 0%, rgba(58,90,203,0) 70%)",
          filter: "blur(40px)",
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "15%",
          right: "5%",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(15,29,86,0.08) 0%, rgba(15,29,86,0) 70%)",
          filter: "blur(50px)",
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "30%",
          right: "15%",
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 70%)",
          filter: "blur(30px)",
          zIndex: 0,
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            margin: "-15px",
            alignItems: "center",
          }}
        >
          {/* Image Column - 3D Perspective */}
          <div
            ref={imageRef}
            style={{
              flex: "0 0 50%",
              maxWidth: "50%",
              padding: "15px",
              position: "relative",
              perspective: "1000px",
            }}
          >
            <div
              style={{
                position: "relative",
                borderRadius: "24px",
                overflow: "hidden",
                boxShadow: "0 30px 60px -15px rgba(15,29,86,0.3)",
                transform: "rotateY(-5deg) rotateX(5deg)",
                transformStyle: "preserve-3d",
                transition: "transform 0.5s ease, box-shadow 0.5s ease",
                willChange: "transform",
                cursor: "pointer",
                ":hover": {
                  transform: "rotateY(0deg) rotateX(0deg) scale(1.02)",
                  boxShadow: "0 40px 80px -10px rgba(15,29,86,0.4)",
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
                    "linear-gradient(135deg, rgba(15,29,86,0.3) 0%, rgba(58,90,203,0.3) 100%)",
                }}
              />
            </div>
          </div>

          {/* Content Column - Glass Morphism */}
          <div
            ref={contentRef}
            style={{
              flex: "0 0 50%",
              maxWidth: "50%",
              padding: "15px",
              position: "relative",
            }}
          >
            <div
              style={{
                background: "rgba(255, 255, 255, 0.7)",
                backdropFilter: "blur(12px)",
                borderRadius: "24px",
                padding: "40px",
                boxShadow: "0 8px 32px rgba(15, 29, 86, 0.1)",
                border: "1px solid rgba(255, 255, 255, 0.3)",
              }}
            >
              <h2
                style={{
                  fontSize: "42px",
                  fontWeight: 800,
                  lineHeight: "1.2",
                  color: "transparent",
                  background:
                    "linear-gradient(90deg, #0f1d56 0%, #3a5acb 100%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  marginBottom: "30px",
                  position: "relative",
                  paddingBottom: "20px",
                }}
              >
                Learning Management System
                <span
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "80px",
                    height: "4px",
                    background:
                      "linear-gradient(90deg, #3a5acb 0%, #0f1d56 100%)",
                    borderRadius: "2px",
                  }}
                />
              </h2>

              <p
                style={{
                  fontSize: "20px",
                  lineHeight: "1.7",
                  color: "#4a5568",
                  marginBottom: "40px",
                  fontWeight: 400,
                }}
              >
                Our{" "}
                <span style={{ fontWeight: 600, color: "#0f1d56" }}>
                  cutting-edge platform
                </span>{" "}
                transforms digital learning into an immersive experience where
                students thrive.
              </p>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
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
                    ref={(el) => (featuresRef.current[index] = el)}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      background: "rgba(255,255,255,0.6)",
                      borderRadius: "12px",
                      padding: "16px",
                      boxShadow: "0 4px 12px rgba(15,29,86,0.05)",
                      transition: "transform 0.3s ease, box-shadow 0.3s ease",
                      ":hover": {
                        transform: "translateY(-3px)",
                        boxShadow: "0 8px 16px rgba(15,29,86,0.1)",
                      },
                    }}
                  >
                    <div style={{ marginRight: "15px", flexShrink: 0 }}>
                      <div
                        style={{
                          width: "36px",
                          height: "36px",
                          background:
                            "linear-gradient(135deg, #3a5acb 0%, #0f1d56 100%)",
                          color: "white",
                          borderRadius: "12px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "16px",
                          fontWeight: "bold",
                          boxShadow: "0 4px 8px rgba(58,90,203,0.3)",
                        }}
                      >
                        {index + 1}
                      </div>
                    </div>
                    <div
                      style={{
                        fontSize: "17px",
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

        {/* Floating CTA with Holographic Effect */}
        <div
          ref={ctaRef}
          style={{
            marginTop: "80px",
            display: "flex",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <div
            style={{
              padding: "32px 48px",
              borderRadius: "24px",
              background:
                "linear-gradient(135deg, rgba(58,90,203,0.9) 0%, rgba(15,29,86,0.9) 100%)",
              color: "#fff",
              textAlign: "center",
              maxWidth: "800px",
              width: "100%",
              boxShadow: "0 20px 50px rgba(15,29,86,0.3)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "20px",
              border: "1px solid rgba(255,255,255,0.2)",
              backdropFilter: "blur(8px)",
              position: "relative",
              overflow: "hidden",
              zIndex: 1,
            }}
          >
            {/* Holographic effect */}
            <div
              style={{
                position: "absolute",
                top: "-50%",
                left: "-50%",
                width: "200%",
                height: "200%",
                background:
                  "linear-gradient(45deg, transparent 45%, rgba(255,255,255,0.1) 50%, transparent 55%)",
                backgroundSize: "10px 10px",
                animation: "holographic 6s linear infinite",
                opacity: 0.3,
                zIndex: -1,
              }}
            />

            <div style={{ fontSize: "24px", fontWeight: 600 }}>
              Ready to transform your learning experience?
            </div>
            <div style={{ fontSize: "18px", opacity: 0.9, maxWidth: "600px" }}>
              Access our state-of-the-art platform and unlock your educational
              potential
            </div>
            <a
              href="https://canvas.instructure.com/login/canvas"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                background: "linear-gradient(90deg, #ffffff 0%, #f0f4ff 100%)",
                color: "#0f1d56",
                padding: "16px 32px",
                fontSize: "18px",
                fontWeight: 700,
                borderRadius: "12px",
                boxShadow: "0 8px 20px rgba(15,29,86,0.3)",
                textDecoration: "none",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                ":hover": {
                  transform: "translateY(-3px) scale(1.02)",
                  boxShadow: "0 12px 25px rgba(15,29,86,0.4)",
                },
              }}
            >
              Launch Learning Portal{" "}
              <FiArrowRight
                style={{
                  marginLeft: "12px",
                  transition: "transform 0.3s ease",
                }}
              />
            </a>
          </div>
        </div>
      </div>

      {/* Global styles for animations */}
      <style jsx global>{`
        @keyframes holographic {
          0% {
            transform: translateX(0) translateY(0);
          }
          100% {
            transform: translateX(-10px) translateY(-10px);
          }
        }
      `}</style>
    </div>
  );
}
