"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

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

  const formRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const resizeTimeout = useRef(null);

  const [submissionState, setSubmissionState] = useState({
    isSubmitting: false,
    isSuccess: false,
    isError: false,
    message: "",
  });

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    checkScreen();
    window.addEventListener("resize", () => {
      clearTimeout(resizeTimeout.current);
      resizeTimeout.current = setTimeout(checkScreen, 100);
    });

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmissionState({
      isSubmitting: true,
      isSuccess: false,
      isError: false,
      message: "Submitting your request...",
    });

    try {
      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });

      const response = await fetch("/api/transportation", {
        method: "POST",
        body: formDataToSend,
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Submission failed");
      }

      setSubmissionState({
        isSubmitting: false,
        isSuccess: true,
        isError: false,
        message: result.message || "Request submitted successfully!",
      });

      formRef.current?.reset();
      setFormData({
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
    } catch (error) {
      setSubmissionState({
        isSubmitting: false,
        isSuccess: false,
        isError: true,
        message: error.message || "Failed to submit request. Please try again.",
      });
    }
  };

  return (
    <section
      className="custom-padding"
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
      }}
    >
      <div style={{ maxWidth: "1300px", margin: "0 auto" }}>
        <h2
          style={{
            fontSize: "clamp(2.2rem, 6vw, 3.5rem)",
            fontWeight: 800,
            marginBottom: "80px",
            textAlign: "center",
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
            flexDirection: isMobile ? "column" : "row",
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
              width: isMobile ? "100%" : "500px",
              margin: isMobile ? "0 auto" : "unset",
              height: "auto",
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
            style={{
              flex: "1",
              minWidth: "300px",
              textAlign: isMobile ? "center" : "left",
            }}
          >
            <p
              style={{
                fontSize: "18px",
                marginBottom: "20px",
                lineHeight: "1.8",
              }}
            >
              CSEI Academy's transport service simplifies your commute with
              access to public transportation, private partner rides, and Nol
              card assistance.
            </p>
            <p style={{ fontSize: "18px", color: "#ccc", lineHeight: "1.8" }}>
              Whether it's daily classes or weekend events, our transport
              solutions are safe, budget-friendly, and personalized to your
              needs.
            </p>
          </motion.div>
        </div>

        {/* Live Submission Feedback */}
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
              <span>{submissionState.message}</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Form */}
        <motion.form
          ref={formRef}
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
          }}
        >
          {Object.entries(formData).map(([key, value]) => {
            const isTextArea = key === "Special Requirements";
            const isSelect = key === "Type of Transportation";

            return (
              <div key={key} style={isTextArea ? { gridColumn: "1 / -1" } : {}}>
                <label
                  htmlFor={key}
                  style={{
                    fontWeight: 600,
                    color: BrandColors.lightText,
                    marginBottom: "8px",
                    display: "block",
                  }}
                >
                  {key}
                </label>

                {isTextArea ? (
                  <textarea
                    name={key}
                    id={key}
                    value={value}
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
                ) : isSelect ? (
                  <select
                    name={key}
                    id={key}
                    value={value}
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
                ) : (
                  <input
                    type={
                      key.includes("Email")
                        ? "email"
                        : key.includes("Contact") || key.includes("Number")
                        ? "tel"
                        : key.includes("Date")
                        ? "date"
                        : key.includes("Time")
                        ? "time"
                        : "text"
                    }
                    name={key}
                    id={key}
                    value={value}
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
                )}
              </div>
            );
          })}

          <div
            style={{
              gridColumn: "1 / -1",
              textAlign: "center",
              marginTop: "20px",
            }}
          >
            <button
              type="submit"
              disabled={submissionState.isSubmitting}
              style={{
                backgroundColor: BrandColors.accent,
                color: "white",
                padding: "16px 40px",
                fontSize: "18px",
                fontWeight: "600",
                borderRadius: "10px",
                border: "none",
                cursor: submissionState.isSubmitting
                  ? "not-allowed"
                  : "pointer",
                boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
                transition: "all 0.3s ease",
              }}
            >
              {submissionState.isSubmitting
                ? "Submitting..."
                : "Submit Transportation Form"}
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
