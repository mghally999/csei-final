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

const facilities = [
  {
    title: "Career Center",
    image: "assets/img/life/career-center.jpg",
    description:
      "Comprehensive career services including resume building, interview preparation, and job placement assistance.",
  },
  {
    title: "Academics",
    image:
      "https://images.unsplash.com/photo-1558021212-51b6ecfa0db9?q=80&w=2070&auto=format&fit=crop",
    description:
      "State-of-the-art learning facilities with modern classrooms, labs, and research centers.",
  },
  {
    title: "Quality Assurance",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
    description:
      "Dedicated unit ensuring the highest standards of education through continuous evaluation.",
  },
];

export default function Facilities() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const headingsRef = useRef([]);

  useEffect(() => {
    if (cardsRef.current.length > 0) {
      cardsRef.current.forEach((card, index) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none none",
          },
          y: 50,
          opacity: 0,
          duration: 0.8,
          delay: index * 0.1,
          ease: "power3.out",
        });
      });
    }

    if (headingsRef.current.length > 0) {
      headingsRef.current.forEach((heading, index) => {
        gsap.from(heading, {
          scrollTrigger: {
            trigger: heading,
            start: "top 90%",
            toggleActions: "play none none none",
          },
          x: index % 2 === 0 ? -50 : 50,
          opacity: 0,
          duration: 0.6,
          delay: index * 0.15,
          ease: "back.out(1.7)",
        });
      });
    }

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

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="facilities-section custom-padding"
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
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          position: "relative",
        }}
      >
        {/* Section Title */}
        <h2
          ref={(el) => (headingsRef.current[0] = el)}
          style={{
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: "800",
            marginBottom: "60px",
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
          Facilities at CSEI Academy
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
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "30px",
            marginBottom: "80px",
          }}
        >
          {facilities.map((item, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
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
                  height: "250px",
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
                <div
                  style={{
                    position: "absolute",
                    bottom: "0",
                    left: "0",
                    width: "100%",
                    padding: "20px",
                    background:
                      "linear-gradient(transparent, rgba(0, 0, 0, 0.8))",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: "700",
                      margin: "0",
                      color: "white",
                    }}
                  >
                    {index + 1}. {item.title}
                  </h3>
                </div>
              </div>
              <div style={{ padding: "25px" }}>
                <p
                  style={{
                    margin: "0",
                    color: "rgba(255, 255, 255, 0.8)",
                    lineHeight: "1.6",
                  }}
                >
                  {item.description}
                </p>
                <Link
                  href="/placements/objectives"
                  style={{
                    display: "inline-block",
                    marginTop: "20px",
                    padding: "10px 20px",
                    background: "linear-gradient(90deg, #3b82f6, #000000)",
                    color: "white",
                    borderRadius: "50px",
                    textDecoration: "none",
                    fontWeight: "600",
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
                  Learn More
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
          ))}
        </div>

        {/* Descriptions with Animated Accordion Effect */}
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
          {[
            {
              title: "Disability Support",
              content:
                "CSEI Academy is dedicated to providing an inclusive and accessible learning environment for all students. We offer comprehensive disability support services to ensure that students with disabilities can fully participate in academic and campus life. Our services include personalized accommodations, assistive technologies, academic support, and accessibility resources. We work closely with students to identify their needs and provide tailored solutions, fostering a supportive environment where every student has the opportunity to succeed.",
            },
            {
              title: "Health Services",
              content:
                "At CSEI Academy, we believe in fostering a supportive and inclusive learning environment where students' rights are respected, upheld, and protected. We are committed to providing all students with a fair, respectful, and empowering academic experience.",
            },
            {
              title: "Wellness Center",
              content:
                "CSEI Academy Dubai is committed to promoting the overall well-being of its students through its dedicated Wellness Center. The center offers a range of services focused on mental, physical, and emotional health, ensuring that students can thrive both academically and personally. Services include stress management workshops, counseling and psychological support, fitness programs, and wellness resources. Our goal is to provide a holistic support system that fosters a balanced and healthy lifestyle, helping students navigate their academic journey with confidence and resilience.",
            },
          ].map((item, index) => (
            <div
              key={index}
              ref={(el) => (headingsRef.current[index + 1] = el)}
              style={{
                marginBottom: index < 2 ? "40px" : "0",
                position: "relative",
              }}
            >
              <h3
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "700",
                  marginBottom: "15px",
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  gsap.to(e.currentTarget, {
                    color: "#a7c3ff",
                    duration: 0.2,
                  });
                }}
                onMouseLeave={(e) => {
                  gsap.to(e.currentTarget, {
                    color: "white",
                    duration: 0.2,
                  });
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
                  {index + 4}
                </span>
                {item.title}
              </h3>
              <div
                style={{
                  position: "relative",
                  paddingLeft: "45px",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    left: "22px",
                    top: "0",
                    bottom: "0",
                    width: "2px",
                    background: "linear-gradient(to bottom, #3b82f6, #8b5cf6)",
                    borderRadius: "2px",
                  }}
                />
                <p
                  style={{
                    margin: "0",
                    color: "rgba(255, 255, 255, 0.8)",
                    lineHeight: "1.7",
                    fontSize: "1.1rem",
                  }}
                >
                  {item.content}
                </p>
              </div>
            </div>
          ))}
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

        .facilities-section a {
          position: relative;
          overflow: hidden;
        }

        .facilities-section img {
          transition: transform 0.5s ease !important;
        }

        .facilities-section img:hover {
          transform: scale(1.05) !important;
        }
      `}</style>
    </section>
  );
}
