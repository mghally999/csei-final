"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, AnimatePresence } from "framer-motion";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const CheckItem = ({ text }) => (
  <motion.div
    initial={{ opacity: 0, x: -10 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.3 }}
    style={{ display: "flex", alignItems: "flex-start", marginBottom: "12px" }}
  >
    <div
      style={{
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
      }}
    >
      ✓
    </div>
    <div
      style={{
        fontSize: "16px",
        lineHeight: "1.6",
        color: "#ffffff",
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
  const formRef = useRef(null);
  const [formData, setFormData] = useState({});
  const [submissionState, setSubmissionState] = useState({
    isSubmitting: false,
    isSuccess: false,
    isError: false,
    message: "",
  });

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      if (card) {
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
      }
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmissionState({
      isSubmitting: true,
      isSuccess: false,
      isError: false,
      message: "Submitting your application...",
    });

    try {
      const formDataToSend = new FormData();

      // Append all fields
      Object.entries(formData).forEach(([key, value]) => {
        if (value instanceof File) {
          formDataToSend.append(key, value, value.name);
        } else if (value !== undefined && value !== null) {
          formDataToSend.append(key, value);
        }
      });

      const response = await fetch("/api/accommodation", {
        method: "POST",
        body: formDataToSend, // No headers needed for FormData
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Submission failed");
      }

      setSubmissionState({
        isSubmitting: false,
        isSuccess: true,
        isError: false,
        message: result.message || "Application submitted successfully!",
      });

      // Reset form
      if (formRef.current) formRef.current.reset();
      setFormData({});
    } catch (error) {
      setSubmissionState({
        isSubmitting: false,
        isSuccess: false,
        isError: true,
        message:
          error.message || "Failed to submit application. Please try again.",
      });
    }
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
    { name: "fullName", label: "Full Name", type: "text", required: true },
    { name: "studentId", label: "Student ID", type: "text", required: true },
    {
      name: "contactNumber",
      label: "Contact Number",
      type: "tel",
      required: true,
    },
    { name: "email", label: "Email Address", type: "email", required: true },
    {
      name: "accommodationType",
      label: "Accommodation Type",
      type: "select",
      options: ["Shared Room", "Private Room", "Married Couple"],
      required: true,
    },
    { name: "moveInDate", label: "Move-in Date", type: "date", required: true },
    {
      name: "moveOutDate",
      label: "Move-out Date",
      type: "date",
      required: false,
    },
    {
      name: "lengthOfStay",
      label: "Length of Stay",
      type: "text",
      required: true,
    },
    {
      name: "passportCopy",
      label: "Passport Copy",
      type: "file",
      required: true,
    },
    {
      name: "enrollmentConfirmation",
      label: "Enrollment Confirmation",
      type: "file",
      required: true,
    },
    { name: "visaCopy", label: "Visa Copy", type: "file", required: true },
    { name: "photograph", label: "Photograph", type: "file", required: true },
    {
      name: "emergencyContactName",
      label: "Emergency Contact Name",
      type: "text",
      required: true,
    },
    {
      name: "emergencyContactRelationship",
      label: "Emergency Contact Relationship",
      type: "text",
      required: true,
    },
    {
      name: "emergencyContactNumber",
      label: "Emergency Contact Number",
      type: "tel",
      required: true,
    },
    {
      name: "paymentMethod",
      label: "Payment Method",
      type: "select",
      options: ["Credit Card", "Bank Transfer", "Cash"],
      required: true,
    },
    {
      name: "paymentReceipt",
      label: "Payment Receipt",
      type: "file",
      required: true,
    },
    {
      name: "specialRequirements",
      label: "Special Requirements",
      type: "textarea",
      required: false,
    },
    {
      name: "additionalNotes",
      label: "Additional Notes",
      type: "textarea",
      required: false,
    },
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
          Accommodation
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
            marginBottom: "40px",
          }}
        >
          <div style={{ color: "#ddd", lineHeight: "1.7" }}>
            <p style={{ marginBottom: "20px" }}>
              Residential facilities at CSEI Academy offers students the
              convenience and community, the library, dining facilities, and
              sports amenities. Living at the heart of Dubai means you can fully
              immerse yourself in student life while working, participate in a
              variety of active and make the most of your university experience.
            </p>

            <CheckItem
              text="Know about on-campus living, available activities, room types, and
              facilities"
            />
            <CheckItem
              text="Application process to reserve, cancel, or change
              your housing assignment"
            />
            <CheckItem
              text="Application process to reserve, cancel, or change
              your housing assignment"
            />
            <CheckItem
              text="Providing official Proof of Residence
              letters for any administrative or visa requirements"
            />
          </div>
          <div style={{ color: "#ddd", lineHeight: "1.7" }}>
            <p style={{ marginBottom: "20px" }}>
              For more information or personalized assistance, please contact
              our student support services.
            </p>
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
                    width: "28px",
                    height: "28px",
                    backgroundColor: "#4a4a4a",
                    color: "white",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "14px",
                    fontWeight: "bold",
                    marginRight: "12px",
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

          <AnimatePresence>
            {(submissionState.isSubmitting || submissionState.message) && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                style={{
                  marginBottom: "30px",
                  padding: "20px",
                  borderRadius: "8px",
                  backgroundColor: submissionState.isSubmitting
                    ? "rgba(255, 255, 0, 0.1)"
                    : submissionState.isSuccess
                    ? "rgba(0, 255, 0, 0.1)"
                    : "rgba(255, 0, 0, 0.1)",
                  border: `1px solid ${
                    submissionState.isSubmitting
                      ? "rgba(255, 255, 0, 0.5)"
                      : submissionState.isSuccess
                      ? "rgba(0, 255, 0, 0.5)"
                      : "rgba(255, 0, 0, 0.5)"
                  }`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                }}
              >
                {submissionState.isSubmitting ? (
                  <>
                    <div
                      style={{
                        width: "24px",
                        height: "24px",
                        border: "3px solid rgba(255, 255, 0, 0.3)",
                        borderTopColor: "yellow",
                        borderRadius: "50%",
                        animation: "spin 1s linear infinite",
                      }}
                    />
                    <span style={{ color: "#fff" }}>
                      {submissionState.message}
                    </span>
                  </>
                ) : submissionState.isSuccess ? (
                  <>
                    <div
                      style={{
                        width: "24px",
                        height: "24px",
                        backgroundColor: "green",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "white",
                        fontWeight: "bold",
                      }}
                    >
                      ✓
                    </div>
                    <span style={{ color: "#fff" }}>
                      {submissionState.message}
                    </span>
                  </>
                ) : (
                  <>
                    <div
                      style={{
                        width: "24px",
                        height: "24px",
                        backgroundColor: "red",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "white",
                        fontWeight: "bold",
                      }}
                    >
                      !
                    </div>
                    <span style={{ color: "#fff" }}>
                      {submissionState.message}
                    </span>
                  </>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          <motion.form
            ref={formRef}
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
                  {field.label}{" "}
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
                    <option value="">Select {field.label}</option>
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
                disabled={submissionState.isSubmitting}
                style={{
                  backgroundColor: submissionState.isSubmitting
                    ? "#ffffff30"
                    : "#ffffff10",
                  color: "white",
                  padding: "14px 28px",
                  fontSize: "16px",
                  fontWeight: "600",
                  borderRadius: "8px",
                  border: "1px solid #fff",
                  cursor: submissionState.isSubmitting
                    ? "not-allowed"
                    : "pointer",
                  transition: "all 0.3s ease",
                  position: "relative",
                  overflow: "hidden",
                }}
                onMouseOver={(e) => {
                  if (!submissionState.isSubmitting) {
                    e.target.style.backgroundColor = "#ffffff30";
                    e.target.style.transform = "translateY(-2px)";
                  }
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = submissionState.isSubmitting
                    ? "#ffffff30"
                    : "#ffffff10";
                  e.target.style.transform = "translateY(0)";
                }}
              >
                {submissionState.isSubmitting ? (
                  <>
                    <span style={{ opacity: 0 }}>Submit Application</span>
                    <div
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      <div
                        style={{
                          width: "16px",
                          height: "16px",
                          border: "2px solid rgba(255, 255, 255, 0.3)",
                          borderTopColor: "white",
                          borderRadius: "50%",
                          animation: "spin 1s linear infinite",
                        }}
                      />
                      <span>Submitting...</span>
                    </div>
                  </>
                ) : (
                  "Submit Application"
                )}
              </button>
            </div>
          </motion.form>
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

        @keyframes spin {
          to {
            transform: rotate(360deg);
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
