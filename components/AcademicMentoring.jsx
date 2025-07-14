"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AcademicMentoringSection() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const ctaRef = useRef(null);
  const bulletRefs = useRef([]);

  useEffect(() => {
    // Animate image entrance
    gsap.from(imageRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
        toggleActions: "play none none none",
      },
      x: -100,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
    });

    // Animate content entrance
    gsap.from(contentRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
        toggleActions: "play none none none",
      },
      x: 100,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
      delay: 0.2,
    });

    // Stagger bullet points
    gsap.from(bulletRefs.current, {
      scrollTrigger: {
        trigger: bulletRefs.current[0],
        start: "top 80%",
        toggleActions: "play none none none",
      },
      y: 30,
      opacity: 0,
      duration: 0.6,
      stagger: 0.15,
      ease: "back.out",
    });

    // CTA animation
    gsap.from(ctaRef.current, {
      scrollTrigger: {
        trigger: ctaRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "elastic.out(1, 0.5)",
    });

    // Floating particles background
    const particles = [];
    const particleCount = 20;

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement("div");
      particle.style.position = "absolute";
      particle.style.width = `${Math.random() * 10 + 5}px`;
      particle.style.height = particle.style.width;
      particle.style.backgroundColor = "#3a5acb";
      particle.style.borderRadius = "50%";
      particle.style.opacity = Math.random() * 0.3 + 0.1;
      particle.style.filter = "blur(1px)";
      sectionRef.current.appendChild(particle);

      gsap.to(particle, {
        x: `${Math.random() * 200 - 100}px`,
        y: `${Math.random() * 200 - 100}px`,
        duration: Math.random() * 10 + 10,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      particles.push(particle);
    }

    return () => {
      particles.forEach((particle) => particle.remove());
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="academic-mentoring-section"
      style={{
        padding: "120px 0",
        backgroundColor: "#f8f9fa",
        position: "relative",
        overflow: "hidden",
        isolation: "isolate",
      }}
    >
      {/* Glow effects */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "10%",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(58,90,203,0.15) 0%, rgba(58,90,203,0) 70%)",
          filter: "blur(20px)",
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          right: "15%",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(15,29,86,0.1) 0%, rgba(15,29,86,0) 70%)",
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
          {/* Image Column */}
          <div
            ref={imageRef}
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
                borderRadius: "16px",
                overflow: "hidden",
                boxShadow: "0 20px 40px rgba(15,29,86,0.2)",
                transform: "perspective(1000px) rotateY(-5deg)",
                transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
                willChange: "transform",
              }}
              onMouseEnter={(e) => {
                gsap.to(e.currentTarget, {
                  y: -10,
                  boxShadow: "0 30px 60px rgba(15,29,86,0.3)",
                  transform: "perspective(1000px) rotateY(0deg)",
                  duration: 0.5,
                });
              }}
              onMouseLeave={(e) => {
                gsap.to(e.currentTarget, {
                  y: 0,
                  boxShadow: "0 20px 40px rgba(15,29,86,0.2)",
                  transform: "perspective(1000px) rotateY(-5deg)",
                  duration: 0.5,
                });
              }}
            >
              <Image
                width={600}
                height={600}
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                  objectFit: "cover",
                }}
                src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=2070&auto=format&fit=crop"
                alt="Academic Mentoring"
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
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "100%",
                  padding: "30px",
                  background:
                    "linear-gradient(0deg, rgba(15,29,86,0.8) 0%, transparent 100%)",
                  color: "white",
                  fontSize: "18px",
                  fontWeight: 600,
                }}
              >
                "The mentoring program transformed my academic journey"
              </div>
            </div>
          </div>

          {/* Content Column */}
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
                display: "inline-block",
                backgroundColor: "rgba(15,29,86,0.1)",
                color: "#3a5acb",
                padding: "8px 16px",
                borderRadius: "50px",
                fontSize: "14px",
                fontWeight: 600,
                marginBottom: "20px",
                letterSpacing: "1px",
              }}
            >
              ACADEMIC SUPPORT
            </div>

            <h2
              style={{
                fontSize: "clamp(2rem, 5vw, 3rem)",
                fontWeight: 800,
                lineHeight: "1.2",
                color: "#0f1d56",
                marginBottom: "30px",
                position: "relative",
                background: "linear-gradient(90deg, #0f1d56, #3a5acb)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Transformative Academic Mentoring
            </h2>

            <p
              style={{
                fontSize: "18px",
                lineHeight: "1.8",
                color: "#4a5568",
                marginBottom: "40px",
                fontWeight: 400,
              }}
            >
              Unlock your full potential with CSEI Academy's Academic Mentoring
              Program — customized to support, guide, and empower you every step
              of the way. By joining mentoring sessions, you'll gain valuable
              skills, boost your confidence, and build a strong foundation for
              academic and personal success.
            </p>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              {[
                "Personalized academic coaching sessions with expert mentors",
                "Confidence-building and strategic goal-setting frameworks",
                "Proven time management and exam preparation techniques",
                "Comprehensive guidance for academic and career pathways",
                "Tailored support for overcoming study obstacles",
              ].map((item, index) => (
                <div
                  key={index}
                  ref={(el) => (bulletRefs.current[index] = el)}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    gsap.to(e.currentTarget, {
                      x: 5,
                      duration: 0.3,
                    });
                  }}
                  onMouseLeave={(e) => {
                    gsap.to(e.currentTarget, {
                      x: 0,
                      duration: 0.3,
                    });
                  }}
                >
                  <div style={{ marginRight: "15px", flexShrink: 0 }}>
                    <div
                      style={{
                        width: "28px",
                        height: "28px",
                        backgroundColor: "#0f1d56",
                        color: "white",
                        borderRadius: "8px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "16px",
                        fontWeight: "bold",
                        boxShadow: "0 4px 12px rgba(15,29,86,0.3)",
                        transform: "rotate(45deg)",
                      }}
                    >
                      <span style={{ transform: "rotate(-45deg)" }}>✓</span>
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

        {/* Premium CTA */}
        <div
          ref={ctaRef}
          style={{
            marginTop: "80px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              padding: "40px",
              borderRadius: "20px",
              background: "linear-gradient(135deg, #0f1d56 0%, #3a5acb 100%)",
              color: "#fff",
              textAlign: "center",
              maxWidth: "800px",
              width: "100%",
              boxShadow: "0 20px 50px rgba(15,29,86,0.3)",
              position: "relative",
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            {/* CTA Glow effect */}
            <div
              style={{
                position: "absolute",
                top: "-50%",
                left: "-50%",
                width: "200%",
                height: "200%",
                background:
                  "radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)",
                animation: "rotate 20s linear infinite",
                zIndex: 0,
              }}
            />

            <div
              style={{
                position: "relative",
                zIndex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "25px",
              }}
            >
              <h3
                style={{
                  fontSize: "clamp(1.5rem, 3vw, 2rem)",
                  fontWeight: 700,
                  margin: 0,
                  letterSpacing: "0.5px",
                  color: "#ffffff",
                }}
              >
                Ready to Elevate Your Academic Journey?
              </h3>
              <p
                style={{
                  fontSize: "18px",
                  opacity: 0.9,
                  maxWidth: "600px",
                  margin: 0,
                }}
              >
                Book your personalized mentoring session now through our student
                portal and take the first step toward academic excellence.
              </p>
              <a
                href="/student-portal"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  backgroundColor: "#ffffff",
                  color: "#0f1d56",
                  padding: "16px 32px",
                  fontSize: "16px",
                  fontWeight: 700,
                  borderRadius: "12px",
                  boxShadow: "0 10px 30px rgba(255,255,255,0.2)",
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                  position: "relative",
                  overflow: "hidden",
                }}
                onMouseEnter={(e) => {
                  gsap.to(e.currentTarget, {
                    boxShadow: "0 15px 40px rgba(255,255,255,0.4)",
                    y: -3,
                    duration: 0.3,
                  });
                }}
                onMouseLeave={(e) => {
                  gsap.to(e.currentTarget, {
                    boxShadow: "0 10px 30px rgba(255,255,255,0.2)",
                    y: 0,
                    duration: 0.3,
                  });
                }}
              >
                <span style={{ position: "relative", zIndex: 2 }}>
                  Access Student Portal
                </span>
                <FiArrowRight
                  style={{
                    marginLeft: "10px",
                    position: "relative",
                    zIndex: 2,
                  }}
                />
                <span
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background: "linear-gradient(90deg, #ffffff, #f0f4ff)",
                    zIndex: 1,
                  }}
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .academic-mentoring-section .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        @media (max-width: 768px) {
          .academic-mentoring-section .container > div > div {
            flex: 0 0 100% !important;
            max-width: 100% !important;
          }
        }
      `}</style>
    </div>
  );
}
