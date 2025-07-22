"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const BrandColors = {
  primaryDark: "#000C2D",
  primaryBlue: "#001E6C",
  accent: "#E05500",
  lightText: "#F5F5F5",
  border: "#FFFFFF22",
};

export default function TransportationSection() {
  const [formData, setFormData] = useState({
    "Full Name": "",
    "Student ID / Identity Number": "",
    "Contact Number": "",
    "Email Address": "",
    "Pick-up Location": "",
    "Drop-off Location": "",
    "Date of Travel": "",
    "Time of Pick-up": "",
    "Type of Transportation": "One-way",
    "Special Requirements": "",
  });

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
      style={{
        background: `
          linear-gradient(135deg, ${BrandColors.primaryDark} 0%, ${BrandColors.primaryBlue} 100%),
          url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop')
        `,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        padding: "120px 20px",
        color: BrandColors.lightText,
        position: "relative",
        isolation: "isolate",
      }}
      className="custom-padding"
    >
      <div style={{ maxWidth: "1300px", margin: "0 auto" }}>
        <h2
          style={{
            fontSize: "clamp(2.2rem, 6vw, 3.5rem)",
            fontWeight: 800,
            marginBottom: "80px",
            textAlign: "center",
            color: BrandColors.lightText,
            textTransform: "uppercase",
            position: "relative",
          }}
        >
          Transportation
          <span
            style={{
              position: "absolute",
              bottom: "-12px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "100px",
              height: "4px",
              background: BrandColors.accent,
              borderRadius: "2px",
            }}
          />
        </h2>

        {/* Visual Section */}
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
              src="/assets/img/life/transport.png"
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
                color: BrandColors.lightText,
                marginBottom: "20px",
                lineHeight: "1.8",
              }}
            >
              CSEI Academy's transport service simplifies your commute with
              access to public transportation, private partner rides, and Nol
              card assistance.
            </p>
            <p
              style={{
                fontSize: "18px",
                color: "#ccc",
                lineHeight: "1.8",
              }}
            >
              Whether it's daily classes or weekend events, our transport
              solutions are safe, budget-friendly, and personalized to your
              needs.
            </p>
          </motion.div>
        </div>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            background: "rgba(255, 255, 255, 0.04)",
            padding: "50px",
            borderRadius: "20px",
            boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "30px",
            position: "relative",
          }}
        >
          {/* Regular Fields */}
          <div>
            <label
              htmlFor="Full Name"
              style={{
                fontWeight: 600,
                color: BrandColors.lightText,
                marginBottom: "8px",
                display: "block",
              }}
            >
              Full Name
            </label>
            <input
              type="text"
              name="Full Name"
              id="Full Name"
              value={formData["Full Name"]}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "12px 16px",
                borderRadius: "12px",
                border: `1px solid ${BrandColors.border}`,
                fontSize: "16px",
                backgroundColor: "#111827",
                color: BrandColors.lightText,
              }}
            />
          </div>

          <div>
            <label
              htmlFor="Student ID / Identity Number"
              style={{
                fontWeight: 600,
                color: BrandColors.lightText,
                marginBottom: "8px",
                display: "block",
              }}
            >
              Student ID / Identity Number
            </label>
            <input
              type="text"
              name="Student ID / Identity Number"
              id="Student ID / Identity Number"
              value={formData["Student ID / Identity Number"]}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "12px 16px",
                borderRadius: "12px",
                border: `1px solid ${BrandColors.border}`,
                fontSize: "16px",
                backgroundColor: "#111827",
                color: BrandColors.lightText,
              }}
            />
          </div>

          <div>
            <label
              htmlFor="Contact Number"
              style={{
                fontWeight: 600,
                color: BrandColors.lightText,
                marginBottom: "8px",
                display: "block",
              }}
            >
              Contact Number
            </label>
            <input
              type="tel"
              name="Contact Number"
              id="Contact Number"
              value={formData["Contact Number"]}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "12px 16px",
                borderRadius: "12px",
                border: `1px solid ${BrandColors.border}`,
                fontSize: "16px",
                backgroundColor: "#111827",
                color: BrandColors.lightText,
              }}
            />
          </div>

          <div>
            <label
              htmlFor="Email Address"
              style={{
                fontWeight: 600,
                color: BrandColors.lightText,
                marginBottom: "8px",
                display: "block",
              }}
            >
              Email Address
            </label>
            <input
              type="email"
              name="Email Address"
              id="Email Address"
              value={formData["Email Address"]}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "12px 16px",
                borderRadius: "12px",
                border: `1px solid ${BrandColors.border}`,
                fontSize: "16px",
                backgroundColor: "#111827",
                color: BrandColors.lightText,
              }}
            />
          </div>

          {/* Location Fields */}
          <div>
            <label
              htmlFor="Pick-up Location"
              style={{
                fontWeight: 600,
                color: BrandColors.lightText,
                marginBottom: "8px",
                display: "block",
              }}
            >
              Pick-up Location (Exact Address)
            </label>
            <input
              type="text"
              name="Pick-up Location"
              id="Pick-up Location"
              value={formData["Pick-up Location"]}
              onChange={handleChange}
              required
              placeholder="Example: 123 Main Street, Dubai Marina, Dubai, UAE"
              style={{
                width: "100%",
                padding: "12px 16px",
                borderRadius: "12px",
                border: `1px solid ${BrandColors.border}`,
                fontSize: "16px",
                backgroundColor: "#111827",
                color: BrandColors.lightText,
              }}
            />
          </div>

          <div>
            <label
              htmlFor="Drop-off Location"
              style={{
                fontWeight: 600,
                color: BrandColors.lightText,
                marginBottom: "8px",
                display: "block",
              }}
            >
              Drop-off Location (Exact Address)
            </label>
            <input
              type="text"
              name="Drop-off Location"
              id="Drop-off Location"
              value={formData["Drop-off Location"]}
              onChange={handleChange}
              required
              placeholder="Example: CSEI Academy, Academic City, Dubai, UAE"
              style={{
                width: "100%",
                padding: "12px 16px",
                borderRadius: "12px",
                border: `1px solid ${BrandColors.border}`,
                fontSize: "16px",
                backgroundColor: "#111827",
                color: BrandColors.lightText,
              }}
            />
          </div>

          {/* Date and Time Fields */}
          <div>
            <label
              htmlFor="Date of Travel"
              style={{
                fontWeight: 600,
                color: BrandColors.lightText,
                marginBottom: "8px",
                display: "block",
              }}
            >
              Date of Travel
            </label>
            <input
              type="date"
              name="Date of Travel"
              id="Date of Travel"
              value={formData["Date of Travel"]}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "12px 16px",
                borderRadius: "12px",
                border: `1px solid ${BrandColors.border}`,
                fontSize: "16px",
                backgroundColor: "#111827",
                color: BrandColors.lightText,
              }}
            />
          </div>

          <div>
            <label
              htmlFor="Time of Pick-up"
              style={{
                fontWeight: 600,
                color: BrandColors.lightText,
                marginBottom: "8px",
                display: "block",
              }}
            >
              Time of Pick-up
            </label>
            <input
              type="time"
              name="Time of Pick-up"
              id="Time of Pick-up"
              value={formData["Time of Pick-up"]}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "12px 16px",
                borderRadius: "12px",
                border: `1px solid ${BrandColors.border}`,
                fontSize: "16px",
                backgroundColor: "#111827",
                color: BrandColors.lightText,
              }}
            />
          </div>

          {/* Transportation Type */}
          <div>
            <label
              htmlFor="Type of Transportation"
              style={{
                fontWeight: 600,
                color: BrandColors.lightText,
                marginBottom: "8px",
                display: "block",
              }}
            >
              Type of Transportation
            </label>
            <select
              name="Type of Transportation"
              id="Type of Transportation"
              value={formData["Type of Transportation"]}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "12px 16px",
                borderRadius: "12px",
                border: `1px solid ${BrandColors.border}`,
                fontSize: "16px",
                backgroundColor: "#111827",
                color: BrandColors.lightText,
              }}
            >
              <option value="One-way">One-way</option>
              <option value="Round-trip">Round-trip</option>
            </select>
          </div>

          {/* Special Requirements */}
          <div style={{ gridColumn: "1 / -1" }}>
            <label
              htmlFor="Special Requirements"
              style={{
                fontWeight: 600,
                color: BrandColors.lightText,
                marginBottom: "8px",
                display: "block",
              }}
            >
              Special Requirements
            </label>
            <textarea
              name="Special Requirements"
              id="Special Requirements"
              value={formData["Special Requirements"]}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "12px 16px",
                borderRadius: "12px",
                border: `1px solid ${BrandColors.border}`,
                fontSize: "16px",
                backgroundColor: "#111827",
                color: BrandColors.lightText,
                minHeight: "100px",
              }}
            />
          </div>

          {/* Submit Button */}
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
                backgroundColor: BrandColors.accent,
                color: "white",
                padding: "16px 40px",
                fontSize: "18px",
                fontWeight: "600",
                borderRadius: "10px",
                border: "none",
                cursor: "pointer",
                boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
                transition: "all 0.3s ease",
              }}
              onMouseOver={(e) => {
                e.target.style.transform = "translateY(-2px)";
                e.target.style.boxShadow = "0 12px 35px rgba(0,0,0,0.4)";
              }}
              onMouseOut={(e) => {
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "0 10px 30px rgba(0,0,0,0.3)";
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
