"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiArrowRight } from "react-icons/fi";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function StudentPortalShowcase() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const featuresRef = useRef([]);
  const ctaRef = useRef(null);

  useEffect(() => {
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
        },
      }
    );

    featuresRef.current.forEach((el, i) => {
      gsap.fromTo(
        el,
        { x: -20, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          delay: i * 0.15,
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
          },
        }
      );
    });

    gsap.to(ctaRef.current, {
      y: 10,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }, []);

  const features = [
    "Academic Dashboard: Grades, schedules, and notifications",
    "Course Enrollment: Register and track academic sessions",
    "Finance: View invoices, scholarships, and payment status",
    "Digital ID: Access services with QR-based student ID",
    "Support: Raise tickets or reach helpdesk directly",
  ];

  return (
    <section
      ref={sectionRef}
      style={{
        background: "linear-gradient(135deg, #001E6C 0%, #000C2D 100%)",
        position: "relative",
        overflow: "hidden",
      }}
      className="layout-pb-lg"
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "20%",
            left: "10%",
            width: "300px",
            height: "300px",
            background: "#E05500",
            borderRadius: "50%",
            filter: "blur(80px)",
            opacity: 0.1,
          }}
        />
      </div>

      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexWrap: "wrap",
          gap: "40px",
          alignItems: "center",
        }}
      >
        {/* Left Image */}
        <div ref={imageRef} style={{ flex: "1", minWidth: "300px" }}>
          <Image
            src="assets/img/life/student-portal.jpeg"
            width={600}
            height={400}
            alt="Student Portal"
            style={{
              borderRadius: "24px",
              boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
              width: "100%",
              height: "auto",
            }}
          />
        </div>

        {/* Right Content */}
        <div
          ref={contentRef}
          style={{
            flex: "1",
            minWidth: "300px",
            background: "rgba(255,255,255,0.05)",
            backdropFilter: "blur(10px)",
            borderRadius: "20px",
            padding: "40px",
            boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
            color: "#fff",
          }}
        >
          <h2
            style={{
              fontSize: "36px",
              fontWeight: 800,
              marginBottom: "20px",
              textTransform: "uppercase",
              color: "#F5F5F5",
            }}
          >
            Student Portal
          </h2>
          <p
            style={{ fontSize: "18px", marginBottom: "30px", lineHeight: 1.8 }}
          >
            Access personalized academic services, monitor your progress, and
            manage university life—all in one place.
          </p>

          <ul style={{ padding: 0, listStyle: "none", margin: 0 }}>
            {features.map((feature, idx) => (
              <li
                key={idx}
                ref={(el) => (featuresRef.current[idx] = el)}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  marginBottom: "20px",
                }}
              >
                <div
                  style={{
                    width: "28px",
                    height: "28px",
                    background: "#E05500",
                    borderRadius: "50%",
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "bold",
                    marginRight: "12px",
                  }}
                >
                  ✓
                </div>
                <div style={{ fontSize: "16px", lineHeight: 1.6 }}>
                  {feature}
                </div>
              </li>
            ))}
          </ul>

          <div style={{ marginTop: "40px" }}>
            <Link
              href="https://canvas.instructure.com/login/canvas"
              target="_blank"
              ref={ctaRef}
              style={{
                display: "inline-flex",
                alignItems: "center",
                background: "#E05500",
                color: "white",
                padding: "16px 32px",
                borderRadius: "50px",
                fontSize: "18px",
                fontWeight: 600,
                textDecoration: "none",
                boxShadow: "0 8px 20px rgba(224,85,0,0.4)",
              }}
            >
              Access Portal <FiArrowRight style={{ marginLeft: "10px" }} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
