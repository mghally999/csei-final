"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

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

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully!");
  };

  const rules = [
    "Rooms are assigned on a shared basis. Unauthorized switching is not allowed.",
    "Married couples may be assigned separate rooms with proper documentation.",
    "Hostel premises are secured with access cards/keys for authorized individuals only.",
    "Proof of marriage/legal partnership required for couple accommodation.",
    "Staying outside overnight without informing is strictly prohibited.",
    "Maintain quiet environment, especially during designated quiet hours.",
    "Visitors have restrictions and are not allowed in rooms or overnight stays.",
    "Keep rooms and common areas clean. Periodic inspections may occur.",
    "Prohibited items: drugs, alcohol, weapons, or hazardous materials.",
    "Students are responsible for any damage to hostel property.",
    "Compliance with fire safety regulations is mandatory.",
    "Must follow UAE laws and campus regulations.",
    "Residents must behave responsibly and respectfully.",
    "Inform accommodation in-charge 15 days to 1 month before leaving.",
    "Complete accommodation shifting procedure before leaving.",
    "Timely payment of room rent is required.",
    "Late payments subject to penalties as per hostel rules.",
  ];

  const formFields = [
    { name: "Full Name", type: "text", required: true },
    { name: "Student ID", type: "text", required: true },
    { name: "Contact Number", type: "tel", required: true },
    { name: "Email Address", type: "email", required: true },
    {
      name: "Accommodation Type",
      type: "select",
      options: ["Shared Room", "Private Room", "Married Couple"],
      required: true,
    },
    { name: "Move-in Date", type: "date", required: true },
    { name: "Move-out Date", type: "date", required: false },
    { name: "Length of Stay", type: "text", required: true },
    { name: "Passport Copy", type: "file", required: true },
    { name: "Enrollment Confirmation", type: "file", required: true },
    { name: "Visa Copy", type: "file", required: true },
    { name: "Photograph", type: "file", required: true },
    { name: "Emergency Contact Name", type: "text", required: true },
    { name: "Emergency Contact Relationship", type: "text", required: true },
    { name: "Emergency Contact Number", type: "tel", required: true },
    {
      name: "Payment Method",
      type: "select",
      options: ["Credit Card", "Bank Transfer", "Cash"],
      required: true,
    },
    { name: "Payment Receipt", type: "file", required: true },
    { name: "Special Requirements", type: "textarea", required: false },
    { name: "Additional Notes", type: "textarea", required: false },
  ];

  return (
    <section
      ref={sectionRef}
      className="accommodation-section custom-padding"
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
          Accommodation Rules & Application
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

        {/* Rules and Regulations Section */}
        <div
          ref={(el) => (cardsRef.current[0] = el)}
          style={{
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            backgroundColor: "rgba(255, 255, 255, 0.05)",
            borderRadius: "16px",
            overflow: "hidden",
            boxShadow: "0 20px 40px rgba(0, 0, 0, 0.4)",
            padding: "30px",
            marginBottom: "40px",
          }}
        >
          <h3
            style={{
              fontSize: "1.8rem",
              fontWeight: "700",
              marginBottom: "20px",
              color: "#ffffff",
              textAlign: "center",
            }}
          >
            Campus Accommodation Rules and Guidelines
          </h3>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "20px",
            }}
          >
            {rules.map((rule, index) => (
              <div key={index} style={{ display: "flex" }}>
                <div
                  style={{
                    ...checkStyle,
                    backgroundColor: "#4a4a4a",
                    marginRight: "10px",
                    flexShrink: 0,
                  }}
                >
                  {index + 1}
                </div>
                <p
                  style={{
                    color: "#ddd",
                    lineHeight: "1.6",
                    fontSize: "15px",
                  }}
                >
                  {rule}
                </p>
              </div>
            ))}
          </div>

          <div
            style={{
              marginTop: "30px",
              paddingTop: "20px",
              borderTop: "1px solid rgba(255,255,255,0.1)",
              textAlign: "center",
            }}
          >
            <p style={{ color: "#aaa", fontStyle: "italic" }}>
              For any questions or clarifications, please contact the
              accommodation office.
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "20px",
                marginTop: "15px",
              }}
            >
              <a
                href="tel:+97143368064"
                style={{ color: "#fff", textDecoration: "none" }}
              >
                +971 43368064
              </a>
              <a
                href="mailto:admission@csei.academy"
                style={{ color: "#fff", textDecoration: "none" }}
              >
                admission@csei.academy
              </a>
            </div>
          </div>
        </div>

        {/* Application Form Section */}
        <div
          ref={(el) => (cardsRef.current[1] = el)}
          style={{
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            backgroundColor: "rgba(255, 255, 255, 0.05)",
            borderRadius: "16px",
            overflow: "hidden",
            boxShadow: "0 20px 40px rgba(0, 0, 0, 0.4)",
            padding: "40px",
            marginBottom: "40px",
          }}
        >
          <h3
            style={{
              fontSize: "1.8rem",
              fontWeight: "700",
              marginBottom: "30px",
              color: "#ffffff",
              textAlign: "center",
            }}
          >
            Accommodation Application Form
          </h3>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "20px",
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
                  {field.name}{" "}
                  {field.required && <span style={{ color: "red" }}>*</span>}
                </label>

                {field.type === "select" ? (
                  <select
                    name={field.name}
                    onChange={handleChange}
                    required={field.required}
                    style={{
                      width: "100%",
                      padding: "10px 14px",
                      borderRadius: "8px",
                      border: "1px solid #666",
                      fontSize: "15px",
                      backgroundColor: "#111",
                      color: "#fff",
                    }}
                  >
                    <option value="">Select {field.name}</option>
                    {field.options.map((option, i) => (
                      <option key={i} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                ) : field.type === "textarea" ? (
                  <textarea
                    name={field.name}
                    onChange={handleChange}
                    required={field.required}
                    style={{
                      width: "100%",
                      padding: "10px 14px",
                      borderRadius: "8px",
                      border: "1px solid #666",
                      fontSize: "15px",
                      backgroundColor: "#111",
                      color: "#fff",
                      minHeight: "100px",
                    }}
                  />
                ) : field.type === "file" ? (
                  <div>
                    <input
                      type="file"
                      name={field.name}
                      onChange={handleFileChange}
                      required={field.required}
                      style={{
                        width: "100%",
                        padding: "10px 0",
                        fontSize: "15px",
                        color: "#fff",
                      }}
                    />
                    <small
                      style={{
                        color: "#aaa",
                        display: "block",
                        marginTop: "5px",
                      }}
                    >
                      Accepted formats: PDF, JPG, PNG (Max 5MB)
                    </small>
                  </div>
                ) : field.type === "date" ? (
                  <input
                    type="date"
                    name={field.name}
                    onChange={handleChange}
                    required={field.required}
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
                ) : (
                  <input
                    type={field.type}
                    name={field.name}
                    onChange={handleChange}
                    required={field.required}
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
                )}
              </div>
            ))}

            <div
              style={{
                gridColumn: "1/-1",
                marginTop: "20px",
                padding: "20px",
                backgroundColor: "rgba(0,0,0,0.3)",
                borderRadius: "8px",
                border: "1px solid #333",
              }}
            >
              <label
                style={{
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <input
                  type="checkbox"
                  name="policyAgreement"
                  required
                  style={{ marginRight: "10px" }}
                />
                <span style={{ color: "#ddd" }}>
                  I acknowledge that I have read and agree to the Accommodation
                  Rules and Guidelines above. I understand that violation of
                  these rules may result in disciplinary action.
                </span>
              </label>
            </div>

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
                  transition: "all 0.3s ease",
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = "#ffffff30";
                  e.target.style.transform = "translateY(-2px)";
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = "#ffffff10";
                  e.target.style.transform = "translateY(0)";
                }}
              >
                Submit Application
              </button>
            </div>
          </motion.form>
        </div>

        {/* Additional Information Section */}
        <div
          ref={(el) => (cardsRef.current[2] = el)}
          style={{
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            backgroundColor: "rgba(255, 255, 255, 0.05)",
            borderRadius: "16px",
            overflow: "hidden",
            boxShadow: "0 20px 40px rgba(0, 0, 0, 0.4)",
            padding: "30px",
          }}
        >
          <h3
            style={{
              fontSize: "1.8rem",
              fontWeight: "700",
              marginBottom: "20px",
              color: "#ffffff",
              textAlign: "center",
            }}
          >
            Additional Information
          </h3>

          <div style={{ color: "#ddd", lineHeight: "1.7" }}>
            <p style={{ marginBottom: "20px" }}>
              The residential facilities at CSEI Academy offer students the
              convenience and community of living near campus facilities. Our
              accommodation services team is available to assist with any
              questions regarding on-campus living.
            </p>

            <div style={{ marginBottom: "20px" }}>
              <h4 style={{ color: "#fff", marginBottom: "10px" }}>
                Important Notes:
              </h4>
              <ul style={{ paddingLeft: "20px" }}>
                <li style={{ marginBottom: "8px" }}>
                  Applications are processed in the order they are received
                </li>
                <li style={{ marginBottom: "8px" }}>
                  Confirmation will be sent via email within 5 business days
                </li>
                <li style={{ marginBottom: "8px" }}>
                  Payment must be completed within 48 hours of approval
                </li>
                <li>
                  Room assignments are final unless approved by management
                </li>
              </ul>
            </div>

            <p>
              For urgent accommodation inquiries, please contact the
              accommodation office directly at{" "}
              <a href="tel:+971522175877" style={{ color: "#fff" }}>
                +971 522175877
              </a>{" "}
              or visit our website at{" "}
              <a href="http://www.csei.academy" style={{ color: "#fff" }}>
                www.csei.academy
              </a>
              .
            </p>
          </div>
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

        select option {
          background: #333;
        }

        input[type="date"]::-webkit-calendar-picker-indicator {
          filter: invert(1);
        }

        input[type="file"]::file-selector-button {
          background: #333;
          color: white;
          border: 1px solid #666;
          padding: 8px 12px;
          border-radius: 4px;
          margin-right: 10px;
          cursor: pointer;
        }
      `}</style>
    </section>
  );
}
