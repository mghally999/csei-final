"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const formFields = [
  "Full Name",
  "Student ID / Identity Number",
  "Contact Number",
  "Email Address",
  "Pick-up Location",
  "Drop-off Location",
  "Date of Travel",
  "Time of Pick-up",
  "Type of Transportation : One-way or Round-trip",
  "Special Requirements",
];

export default function TransportationSection() {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Transportation request submitted!");
  };

  return (
    <section
      className="custom-padding"
      style={{
        background: `
          linear-gradient(135deg, rgba(15, 15, 35, 0.95) 0%, rgba(30, 0, 60, 0.9) 100%),
          url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop')
        `,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        padding: "120px 20px",
        color: "white",
        position: "relative",
        isolation: "isolate",
      }}
    >
      <div style={{ maxWidth: "1300px", margin: "0 auto" }}>
        <h2
          style={{
            fontSize: "clamp(2.2rem, 6vw, 3.5rem)",
            fontWeight: 800,
            marginBottom: "80px",
            textAlign: "center",
            background: "linear-gradient(90deg, #ffffff, #ffccff)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            textTransform: "uppercase",
            position: "relative",
          }}
        >
          Get On Board
          <span
            style={{
              position: "absolute",
              bottom: "-10px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "100px",
              height: "4px",
              background: "linear-gradient(to right, #ffffff, #ffccff)",
              borderRadius: "2px",
            }}
          />
        </h2>

        {/* Top visual: image + message */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "40px",
            marginBottom: "60px",
            alignItems: "center",
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              flex: "0 0 500px",
              borderRadius: "20px",
              overflow: "hidden",
              boxShadow: "0 30px 60px rgba(0, 0, 0, 0.5)",
            }}
          >
            <Image
              src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=2070&auto=format&fit=crop"
              alt="Transportation"
              width={500}
              height={350}
              style={{ width: "100%", height: "auto", objectFit: "cover" }}
              priority
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            style={{ flex: "1", minWidth: "300px" }}
          >
            <p
              style={{
                fontSize: "18px",
                color: "#ddd",
                marginBottom: "20px",
                lineHeight: "1.8",
              }}
            >
              CSEI Academy’s transport service simplifies your commute with
              access to public transportation, private partner rides, and Nol
              card assistance.
            </p>
            <p style={{ fontSize: "18px", color: "#ccc", lineHeight: "1.8" }}>
              Whether it’s daily classes or weekend events, our transport
              solutions are safe, budget-friendly, and personalized to your
              needs.
            </p>
          </motion.div>
        </div>

        {/* Stunning Form Layout */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            background: "rgba(255, 255, 255, 0.05)",
            padding: "50px",
            borderRadius: "20px",
            boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "30px",
          }}
        >
          {formFields.map((field, index) => (
            <div key={index}>
              <label
                htmlFor={`field-${index}`}
                style={{
                  fontWeight: 600,
                  color: "#fff",
                  marginBottom: "8px",
                  display: "block",
                }}
              >
                {field}
              </label>
              <input
                type="text"
                name={field}
                id={`field-${index}`}
                onChange={handleChange}
                required={index < 5}
                style={{
                  width: "100%",
                  padding: "12px 16px",
                  borderRadius: "12px",
                  border: "1px solid #999",
                  fontSize: "16px",
                  backgroundColor: "#111827",
                  color: "white",
                }}
              />
            </div>
          ))}
          <div
            style={{
              gridColumn: "1 / -1",
              textAlign: "center",
              marginTop: "20px",
            }}
          >
            <button
              type="submit"
              style={{
                background: "linear-gradient(90deg, #4f46e5, #9333ea)",
                color: "white",
                padding: "16px 40px",
                fontSize: "16px",
                fontWeight: "bold",
                borderRadius: "999px",
                border: "none",
                cursor: "pointer",
                boxShadow: "0 10px 20px rgba(147, 51, 234, 0.3)",
              }}
            >
              Submit Transportation Form
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
