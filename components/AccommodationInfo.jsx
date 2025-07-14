"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const accommodations = [
  {
    title: "Premium Student Suites",
    image:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=2070&auto=format&fit=crop",
    description:
      "Private rooms with ensuite bathrooms, study areas, and premium amenities in our newest residence hall.",
    price: "$1,200/month",
  },
  {
    title: "Shared Apartments",
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070&auto=format&fit=crop",
    description:
      "Economical living with shared kitchen and lounge, ideal for community-oriented students.",
    price: "$750/month",
  },
  {
    title: "Off-Campus Residences",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
    description:
      "Independent housing options close to campus, providing flexibility and privacy.",
    price: "$950/month",
  },
];

const checkStyle = {
  width: "28px",
  height: "28px",
  backgroundColor: "#000000",
  color: "white",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "16px",
  fontWeight: "bold",
  boxShadow: "0 4px 6px rgba(102, 51, 153, 0.3)",
  marginRight: "12px",
  flexShrink: 0,
};

const listItem = (text, index) => (
  <motion.div
    initial={{ opacity: 0, x: -10 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.3, delay: index * 0.05 }}
    key={index}
    style={{ display: "flex", alignItems: "flex-start", marginBottom: "12px" }}
  >
    <div style={checkStyle}>✓</div>
    <div
      style={{
        fontSize: "16px",
        lineHeight: "1.6",
        color: "#fff",
        fontWeight: 500,
      }}
    >
      {text}
    </div>
  </motion.div>
);

export default function AccommodationCards() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          toggleActions: "play none none none",
        },
        y: 60,
        opacity: 0,
        duration: 0.8,
        delay: index * 0.1,
        ease: "power3.out",
      });
    });

    gsap.to(sectionRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
      backgroundPosition: "50% 30%",
      ease: "none",
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully!");
  };

  const formFields = [
    "Full Name",
    "Student ID",
    "Contact Number",
    "Email Address",
    "Accommodation Type",
    "Preferred Features",
    "Special Requirements",
    "Move-in Date",
    "Length of Stay",
    "Passport Copy URL",
    "Enrollment Confirmation",
    "Visa Copy",
    "Photograph URL",
    "Emergency Contact Name",
    "Relationship",
    "Emergency Contact Number",
    "Payment Method",
    "Deposit Confirmation",
    "Policy Acknowledgement",
    "Consent to Data Processing",
    "Additional Notes",
  ];

  return (
    <section
      ref={sectionRef}
      className="accommodation-section"
      style={{
        position: "relative",
        padding: "120px 20px",
        background: `
          linear-gradient(135deg, rgba(0,0,0,0.95) 0%, rgba(20,20,20,0.9) 100%),
          url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop')
        `,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundPosition: "center center",
        color: "#fff",
        overflow: "hidden",
        isolation: "isolate",
      }}
    >
      {/* Floating Glow Orbs */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: -1,
        }}
      >
        {[...Array(16)].map((_, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              background: "rgba(255,255,255,0.1)",
              borderRadius: "50%",
              width: `${Math.random() * 240 + 60}px`,
              height: `${Math.random() * 240 + 60}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              filter: "blur(30px)",
              animation: `float ${
                Math.random() * 20 + 12
              }s infinite alternate ease-in-out`,
              animationDelay: `${Math.random() * 6}s`,
              opacity: 0,
            }}
          />
        ))}
      </div>

      <div style={{ maxWidth: "1300px", margin: "0 auto" }}>
        <h2
          style={{
            textAlign: "center",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 800,
            marginBottom: "60px",
            textTransform: "uppercase",
            letterSpacing: "1px",
            background: "linear-gradient(to right, #fff, #aaa)",
            WebkitBackgroundClip: "text",
            color: "transparent",
            position: "relative",
          }}
        >
          Accommodation Plans
          <span
            style={{
              position: "absolute",
              bottom: "-10px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "80px",
              height: "4px",
              background: "linear-gradient(to right, #fff, #666)",
              borderRadius: "2px",
            }}
          />
        </h2>

        {/* Accommodation Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "30px",
            marginTop: "60px",
            marginBottom: "80px",
          }}
        >
          {accommodations.map((item, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              style={{
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                borderRadius: "16px",
                overflow: "hidden",
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.4)",
                transition: "transform 0.3s ease",
              }}
            >
              <div style={{ position: "relative", height: "220px" }}>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div style={{ padding: "24px" }}>
                <h3
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: 700,
                    marginBottom: "12px",
                    color: "#fff",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontSize: "1rem",
                    color: "rgba(255,255,255,0.85)",
                    lineHeight: "1.6",
                    marginBottom: "16px",
                  }}
                >
                  {item.description}
                </p>
                <div
                  style={{
                    fontWeight: "600",
                    color: "#ccc",
                    fontSize: "1rem",
                    marginTop: "8px",
                    letterSpacing: "0.5px",
                  }}
                >
                  Starting from{" "}
                  <span style={{ color: "#fff" }}>{item.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Injected Section: Residential Info, Form, Final Note */}
        <div style={{ marginTop: "60px" }}>
          <h3
            style={{
              fontSize: "1.8rem",
              fontWeight: "700",
              marginBottom: "20px",
              color: "#ffffff",
            }}
          >
            4. Residential Experience
          </h3>
          <p style={{ marginBottom: "40px", color: "#ddd" }}>
            Residential facilities at CSEI Academy offer students the
            convenience and community of living near the library, dining
            facilities, and sports amenities.
          </p>

          <h3
            style={{
              fontSize: "1.8rem",
              fontWeight: "700",
              marginBottom: "20px",
              color: "#ffffff",
            }}
          >
            5. Student Services Support
          </h3>
          {[
            "Know about on-campus living...",
            "Application process...",
            "Proof of Residence...",
          ].map((item, index) => listItem(item, index))}

          <h3
            style={{
              fontSize: "1.8rem",
              fontWeight: "700",
              margin: "60px 0 20px",
              color: "#ffffff",
            }}
          >
            6. Book Your Accommodation Plan
          </h3>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{
              background: "rgba(255,255,255,0.05)",
              padding: "40px",
              borderRadius: "16px",
              boxShadow: "0 15px 40px rgba(0,0,0,0.3)",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "20px",
              marginBottom: "40px",
            }}
          >
            {formFields.map((field, index) => (
              <div key={index}>
                <label
                  style={{
                    fontWeight: 600,
                    color: "#fff",
                    marginBottom: "6px",
                    display: "block",
                  }}
                >
                  {field}
                </label>
                <input
                  type="text"
                  name={field}
                  onChange={handleChange}
                  required={index < 10}
                  style={{
                    width: "100%",
                    padding: "10px 14px",
                    borderRadius: "8px",
                    border: "1px solid #666",
                    fontSize: "15px",
                    backgroundColor: "#111",
                    color: "#fff",
                  }}
                />
              </div>
            ))}
            <div
              style={{
                gridColumn: "1/-1",
                textAlign: "center",
                marginTop: "20px",
              }}
            >
              <button
                type="submit"
                style={{
                  backgroundColor: "#ffffff10",
                  color: "white",
                  padding: "14px 28px",
                  fontSize: "16px",
                  fontWeight: "600",
                  borderRadius: "8px",
                  border: "1px solid #fff",
                  cursor: "pointer",
                }}
              >
                Submit Application
              </button>
            </div>
          </motion.form>

          <h3
            style={{
              fontSize: "1.8rem",
              fontWeight: "700",
              marginBottom: "20px",
              color: "#ffffff",
            }}
          >
            7. Final Note
          </h3>
          {[
            "Support for housing questions",
            "Photos, policies, schedules on request",
          ].map((item, index) => listItem(item, index))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes float {
          0% {
            transform: translate(0, 0);
            opacity: 0;
          }
          50% {
            opacity: 0.3;
          }
          100% {
            transform: translate(20px, -20px);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
}
