"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

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
        backgroundColor: "#000",
        color: "#fff",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "16px",
        fontWeight: "bold",
        marginRight: "12px",
        flexShrink: 0,
      }}
    >
      ✓
    </div>
    <div style={{ fontSize: "16px", color: "#fff" }}>{text}</div>
  </motion.div>
);

const AccommodationCards = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    cardsRef.current.forEach((card, i) => {
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
          delay: i * 0.1,
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
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData((prev) => ({ ...prev, [name]: files[0] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage("");

    const form = new FormData();
    for (const key in formData) {
      form.append(key, formData[key]);
    }

    try {
      const res = await fetch("/api/accommodation", {
        method: "POST",
        body: form,
      });

      if (res.ok) {
        setSuccessMessage(
          "✅ Your application has been submitted. We will get back to you shortly."
        );
        setFormData({});
        e.target.reset(); // clear form
      } else {
        setSuccessMessage("❌ Submission failed. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setSuccessMessage(
        "❌ Error occurred. Please check your inputs and try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const fields = [
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
      style={{ padding: "60px 20px", background: "#111", color: "#fff" }}
    >
      <h2
        style={{ textAlign: "center", fontSize: "2rem", marginBottom: "30px" }}
      >
        Accommodation Application Form
      </h2>

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "20px",
        }}
      >
        {fields.map((field, i) => (
          <div key={i}>
            <label
              style={{ color: "#fff", display: "block", marginBottom: "6px" }}
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
                  padding: "10px",
                  width: "100%",
                  background: "#222",
                  color: "#fff",
                }}
              >
                <option value="">Select {field.label}</option>
                {field.options.map((opt, j) => (
                  <option key={j} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            ) : field.type === "textarea" ? (
              <textarea
                name={field.name}
                onChange={handleChange}
                required={field.required}
                style={{
                  padding: "10px",
                  width: "100%",
                  background: "#222",
                  color: "#fff",
                  minHeight: "80px",
                }}
              />
            ) : field.type === "file" ? (
              <input
                type="file"
                name={field.name}
                onChange={handleFileChange}
                required={field.required}
                style={{ color: "#fff", width: "100%" }}
              />
            ) : (
              <input
                type={field.type}
                name={field.name}
                onChange={handleChange}
                required={field.required}
                style={{
                  padding: "10px",
                  width: "100%",
                  background: "#222",
                  color: "#fff",
                }}
              />
            )}
          </div>
        ))}

        <div style={{ gridColumn: "1 / -1" }}>
          <label
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              fontSize: "14px",
            }}
          >
            <input type="checkbox" required />I agree to the rules and
            guidelines of CSEI Hostel
          </label>
        </div>

        <div
          style={{
            gridColumn: "1 / -1",
            textAlign: "center",
            marginTop: "20px",
          }}
        >
          <button
            type="submit"
            disabled={loading}
            style={{
              padding: "12px 30px",
              backgroundColor: "#0f0",
              color: "#000",
              fontWeight: "bold",
              borderRadius: "6px",
              cursor: loading ? "not-allowed" : "pointer",
            }}
          >
            {loading ? "Submitting..." : "Submit Application"}
          </button>

          {successMessage && (
            <p
              style={{
                marginTop: "20px",
                color: successMessage.startsWith("✅") ? "#0f0" : "red",
              }}
            >
              {successMessage}
            </p>
          )}
        </div>
      </motion.form>
    </section>
  );
};

export default AccommodationCards;
