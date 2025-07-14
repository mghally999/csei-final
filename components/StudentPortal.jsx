"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function StudentPortalSection() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardRefs = useRef([]);
  const contentRefs = useRef([]);
  const listItemRefs = useRef([]);

  useEffect(() => {
    // Parallax effect for the section background
    gsap.to(sectionRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
      backgroundPosition: "50% 20%",
      ease: "none",
    });

    // Animate the main heading
    gsap.from(headingRef.current, {
      scrollTrigger: {
        trigger: headingRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    });

    // Animate cards
    if (cardRefs.current.length > 0) {
      cardRefs.current.forEach((card, index) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 75%",
            toggleActions: "play none none none",
          },
          y: 60,
          opacity: 0,
          duration: 0.8,
          delay: index * 0.1,
          ease: "back.out(1.2)",
        });
      });
    }

    // Animate content sections
    if (contentRefs.current.length > 0) {
      contentRefs.current.forEach((content, index) => {
        gsap.from(content, {
          scrollTrigger: {
            trigger: content,
            start: "top 80%",
            toggleActions: "play none none none",
          },
          y: 40,
          opacity: 0,
          duration: 0.6,
          delay: index * 0.15,
          ease: "power2.out",
        });
      });
    }

    // Animate list items
    if (listItemRefs.current.length > 0) {
      listItemRefs.current.forEach((item, index) => {
        gsap.from(item, {
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            toggleActions: "play none none none",
          },
          x: index % 2 === 0 ? -20 : 20,
          opacity: 0,
          duration: 0.5,
          delay: index * 0.05,
          ease: "power2.out",
        });
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const ListItem = ({ text, index }) => (
    <div
      ref={(el) => (listItemRefs.current[index] = el)}
      style={{
        display: "flex",
        alignItems: "flex-start",
        marginBottom: "16px",
      }}
    >
      <div
        style={{
          width: "28px",
          height: "28px",
          background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
          color: "white",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "16px",
          fontWeight: "bold",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.3)",
          marginRight: "12px",
          flexShrink: 0,
        }}
      >
        ✓
      </div>
      <div
        style={{
          fontSize: "16px",
          lineHeight: "1.6",
          color: "rgba(255, 255, 255, 0.9)",
          fontWeight: 500,
        }}
      >
        {text}
      </div>
    </div>
  );

  return (
    <section
      ref={sectionRef}
      className="student-portal-section"
      style={{
        position: "relative",
        padding: "120px 20px",
        overflow: "hidden",
        background: `
          linear-gradient(
            135deg,
            rgba(8, 28, 64, 0.95) 0%,
            rgba(15, 82, 186, 0.9) 100%
          ),
          url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')
        `,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundPosition: "50% 50%",
        color: "white",
        isolation: "isolate",
      }}
    >
      {/* Animated background elements */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          overflow: "hidden",
          zIndex: -1,
        }}
      >
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              background: "rgba(255, 255, 255, 0.1)",
              borderRadius: "50%",
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              filter: "blur(40px)",
              opacity: 0,
              animation: `float ${
                Math.random() * 20 + 10
              }s infinite alternate ease-in-out`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div
        style={{ maxWidth: "1400px", margin: "0 auto", position: "relative" }}
      >
        {/* Section Title */}
        <h2
          ref={headingRef}
          style={{
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: "800",
            marginBottom: "80px",
            textAlign: "center",
            textTransform: "uppercase",
            letterSpacing: "2px",
            background: "linear-gradient(90deg, #fff, #a7c3ff)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            position: "relative",
            paddingBottom: "20px",
          }}
        >
          Student Portal at CSEI Academy
          <span
            style={{
              position: "absolute",
              bottom: "0",
              left: "50%",
              transform: "translateX(-50%)",
              width: "80px",
              height: "4px",
              background: "linear-gradient(90deg, #3b82f6, #000000)",
              borderRadius: "2px",
            }}
          />
        </h2>

        {/* Cards Grid */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "30px",
            justifyContent: "center",
            marginBottom: "80px",
          }}
        >
          {[
            {
              title: "1. Academic Dashboard",
              image:
                "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=2070&auto=format&fit=crop",
            },
            {
              title: "2. Registration & Enrollment",
              image:
                "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=2070&auto=format&fit=crop",
            },
            {
              title: "3. Financial Information",
              image:
                "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=2070&auto=format&fit=crop",
            },
          ].map((item, index) => (
            <Link
              href="#"
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              style={{
                textDecoration: "none",
                color: "inherit",
                maxWidth: "300px",
                width: "100%",
              }}
            >
              <div
                style={{
                  position: "relative",
                  borderRadius: "16px",
                  overflow: "hidden",
                  boxShadow: "0 30px 50px rgba(0, 0, 0, 0.3)",
                  transform: "translateY(0)",
                  transition: "transform 0.4s ease, box-shadow 0.4s ease",
                  willChange: "transform",
                  background: "rgba(255, 255, 255, 0.1)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                }}
                onMouseEnter={(e) => {
                  gsap.to(e.currentTarget, {
                    y: -10,
                    boxShadow: "0 40px 60px rgba(0, 0, 0, 0.4)",
                    duration: 0.3,
                  });
                }}
                onMouseLeave={(e) => {
                  gsap.to(e.currentTarget, {
                    y: 0,
                    boxShadow: "0 30px 50px rgba(0, 0, 0, 0.3)",
                    duration: 0.3,
                  });
                }}
              >
                <div
                  style={{
                    position: "relative",
                    height: "200px",
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src={item.image}
                    fill
                    alt={item.title}
                    style={{
                      objectFit: "cover",
                      transition: "transform 0.5s ease",
                    }}
                    className="hover:scale-105"
                  />
                </div>
                <div
                  style={{
                    padding: "20px",
                    textAlign: "center",
                    fontWeight: "600",
                    color: "white",
                  }}
                >
                  {item.title}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Content Sections */}
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            background: "rgba(255, 255, 255, 0.05)",
            backdropFilter: "blur(10px)",
            borderRadius: "16px",
            padding: "40px",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)",
          }}
        >
          {/* Key Services */}
          <div ref={(el) => (contentRefs.current[0] = el)}>
            <h3
              style={{
                fontWeight: "700",
                fontSize: "1.5rem",
                marginBottom: "20px",
                color: "white",
                display: "flex",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  display: "inline-block",
                  width: "30px",
                  height: "30px",
                  background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
                  borderRadius: "8px",
                  marginRight: "15px",
                  color: "white",
                  textAlign: "center",
                  lineHeight: "30px",
                  fontWeight: "800",
                  fontSize: "0.9rem",
                }}
              >
                4
              </span>
              Key Services in the Portal
            </h3>
            {[
              "Communication Tools to connect with faculty and classmates.",
              "Event Calendar for all academic and extracurricular schedules.",
              "Student Support Services: request academic or technical help.",
              "Profile Management: update emergency contacts and details.",
              "Mobile Application Access: log in on the go, any time, any device.",
              "Secure login and privacy compliance for all user data.",
            ].map((text, idx) => (
              <ListItem key={idx} text={text} index={idx} />
            ))}
          </div>

          {/* Get Started */}
          <div
            ref={(el) => (contentRefs.current[1] = el)}
            style={{ marginTop: "40px" }}
          >
            <h3
              style={{
                fontWeight: "700",
                fontSize: "1.5rem",
                marginBottom: "20px",
                color: "white",
                display: "flex",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  display: "inline-block",
                  width: "30px",
                  height: "30px",
                  background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
                  borderRadius: "8px",
                  marginRight: "15px",
                  color: "white",
                  textAlign: "center",
                  lineHeight: "30px",
                  fontWeight: "800",
                  fontSize: "0.9rem",
                }}
              >
                5
              </span>
              Get Started
            </h3>
            {[
              "Visit studentportal.csei.ac.ae or download from App Store / Play Store.",
              "Log in using your student credentials (ID & password).",
              "Explore all features, notifications, and updates in one place.",
            ].map((text, idx) => (
              <ListItem key={idx + 6} text={text} index={idx + 6} />
            ))}
          </div>

          {/* Portal Access Button */}
          <div
            style={{
              marginTop: "40px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Link
              href="#"
              style={{
                display: "inline-block",
                padding: "14px 32px",
                background: "linear-gradient(90deg, #3b82f6, #000000)",
                color: "white",
                borderRadius: "50px",
                textDecoration: "none",
                fontWeight: "600",
                fontSize: "16px",
                transition: "all 0.3s ease",
                boxShadow: "0 4px 15px rgba(59, 130, 246, 0.4)",
                position: "relative",
                overflow: "hidden",
              }}
              onMouseEnter={(e) => {
                gsap.to(e.currentTarget, {
                  boxShadow: "0 6px 20px rgba(59, 130, 246, 0.6)",
                  y: -2,
                  duration: 0.2,
                });
              }}
              onMouseLeave={(e) => {
                gsap.to(e.currentTarget, {
                  boxShadow: "0 4px 15px rgba(59, 130, 246, 0.4)",
                  y: 0,
                  duration: 0.2,
                });
              }}
            >
              Access Student Portal
              <span
                style={{
                  position: "absolute",
                  top: "-50%",
                  left: "-60%",
                  width: "200%",
                  height: "200%",
                  background:
                    "linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.2) 50%, rgba(255, 255, 255, 0) 100%)",
                  transform: "rotate(30deg)",
                  transition: "all 0.6s ease",
                  opacity: 0,
                }}
                className="hover:opacity-100 hover:left-100%"
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Global styles for this component */}
      <style jsx global>{`
        @keyframes float {
          0% {
            transform: translate(0, 0) rotate(0deg);
            opacity: 0;
          }
          50% {
            opacity: 0.3;
          }
          100% {
            transform: translate(20px, -20px) rotate(5deg);
            opacity: 0;
          }
        }

        .student-portal-section img {
          transition: transform 0.5s ease !important;
        }

        .student-portal-section img:hover {
          transform: scale(1.05) !important;
        }
      `}</style>
    </section>
  );
}
