"use client";

import React, { useState } from "react";
import { locationData } from "@/data/officeLocation";

export default function ContactPage() {
  const [activeTab, setActiveTab] = useState(1);
  const [loading, setLoading] = useState(false);
  const [messageSent, setMessageSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessageSent(false);
    const form = e.target;
    const formData = new FormData(form);

    const payload = {
      formType: activeTab === 1 ? "student" : "partner",
      name: formData.get("name"),
      email: formData.get("email"),
    };

    if (activeTab === 1) {
      payload.phone = formData.get("phone");
      payload.subject = formData.get("subject");
      payload.message = formData.get("message");
    } else {
      payload.company = formData.get("company");
      payload.proposal = formData.get("proposal");
    }

    try {
      setLoading(true);
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        form.reset();
        setMessageSent(true);
      }
    } catch (err) {
      console.error("Form error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="content-wrapper js-content-wrapper overflow-hidden">
      {/* ✅ Hero Section */}
      <section
        style={{
          position: "relative",
          width: "100%",
          height: "100vh",
          backgroundImage: "url('/assets/img/contact/csei-building.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.5)",
            zIndex: 1,
          }}
        />
        <div
          style={{
            position: "relative",
            zIndex: 2,
            color: "white",
            textAlign: "center",
            padding: "20px",
          }}
        >
          <h1
            style={{
              fontSize: "42px",
              fontWeight: "bold",
              marginBottom: "10px",
            }}
          >
            Contact Us
          </h1>
          <p style={{ fontSize: "18px", maxWidth: "700px", margin: "0 auto" }}>
            Get in touch with CSEI Academy. We're here to answer your questions
            and help you with your educational journey.
          </p>
        </div>
      </section>

      {/* ✅ Tabs Section */}
      <section style={{ padding: "60px 20px 0", backgroundColor: "#f8f9fa" }}>
        <div
          style={{ maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "30px",
              marginBottom: "40px",
            }}
          >
            <button
              onClick={() => setActiveTab(1)}
              style={{
                padding: "12px 24px",
                backgroundColor: activeTab === 1 ? "#000" : "transparent",
                color: activeTab === 1 ? "#fff" : "#000",
                border: "1px solid #000",
                borderRadius: "6px",
                fontWeight: 600,
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
            >
              Student Form
            </button>
            <button
              onClick={() => setActiveTab(2)}
              style={{
                padding: "12px 24px",
                backgroundColor: activeTab === 2 ? "#000" : "transparent",
                color: activeTab === 2 ? "#fff" : "#000",
                border: "1px solid #000",
                borderRadius: "6px",
                fontWeight: 600,
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
            >
              Partner With Us
            </button>
          </div>
        </div>
      </section>

      {/* ✅ Form & Office Info */}
      <section style={{ padding: "0 20px 80px", backgroundColor: "#f8f9fa" }}>
        <div
          className="container"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: "40px",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          {/* ✅ Contact Form */}
          <div
            style={{
              flex: "1 1 400px",
              backgroundColor: "#fff",
              padding: "30px",
              borderRadius: "12px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
            }}
          >
            <h3
              style={{
                fontSize: "20px",
                fontWeight: 500,
                marginBottom: "20px",
              }}
            >
              {activeTab === 1 ? "Student Contact" : "Partnership Inquiry"}
            </h3>
            <form
              onSubmit={handleSubmit}
              style={{ display: "flex", flexDirection: "column", gap: "20px" }}
            >
              <div>
                <label style={labelStyle}>Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Full name"
                  style={inputStyle}
                />
              </div>

              {activeTab === 2 && (
                <div>
                  <label style={labelStyle}>Company</label>
                  <input
                    type="text"
                    name="company"
                    required
                    placeholder="Company name"
                    style={inputStyle}
                  />
                </div>
              )}

              <div>
                <label style={labelStyle}>Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Email address"
                  style={inputStyle}
                />
              </div>

              {activeTab === 1 && (
                <>
                  <div>
                    <label style={labelStyle}>Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone number"
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Subject</label>
                    <select name="subject" style={inputStyle}>
                      <option value="general">General Inquiry</option>
                      <option value="admissions">Admissions</option>
                      <option value="courses">Course Information</option>
                      <option value="feedback">Feedback</option>
                    </select>
                  </div>
                </>
              )}

              <div>
                <label style={labelStyle}>
                  {activeTab === 1 ? "Message" : "Proposal"}
                </label>
                <textarea
                  name={activeTab === 1 ? "message" : "proposal"}
                  rows="4"
                  required
                  placeholder={
                    activeTab === 1
                      ? "How can we help you?"
                      : "Tell us about your idea"
                  }
                  style={textareaStyle}
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                style={{
                  padding: "12px",
                  backgroundColor: loading ? "#999" : "#000000",
                  color: "#fff",
                  border: "none",
                  borderRadius: "6px",
                  fontWeight: 600,
                  cursor: loading ? "not-allowed" : "pointer",
                }}
              >
                {loading
                  ? "Sending..."
                  : activeTab === 1
                  ? "Send Message"
                  : "Request Partnership"}
              </button>

              {messageSent && (
                <p
                  style={{ marginTop: "10px", color: "green", fontWeight: 500 }}
                >
                  ✅ Your message has been sent!
                </p>
              )}
            </form>
          </div>

          {/* ✅ Office Info */}
          <div style={{ flex: "1 1 400px", padding: "20px" }}>
            <h3
              style={{
                fontSize: "24px",
                fontWeight: 600,
                marginBottom: "20px",
              }}
            >
              Our Campus
            </h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "30px" }}>
              {locationData.map((elm, i) => (
                <div key={i} style={{ flex: "1 1 200px" }}>
                  <div
                    style={{
                      fontSize: "20px",
                      fontWeight: 600,
                      color: "#2d3748",
                      marginBottom: "10px",
                    }}
                  >
                    {elm.location}
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "6px",
                    }}
                  >
                    <span style={infoStyle}>{elm.address}</span>
                    <span style={infoStyle}>{elm.phoneNumber}</span>
                    <span style={infoStyle}>
                      <a
                        href={`mailto:${elm.email}`}
                        style={{ color: "red", textDecoration: "underline" }}
                      >
                        {elm.email}
                      </a>
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div
              style={{
                marginTop: "40px",
                borderRadius: "8px",
                overflow: "hidden",
              }}
            >
              <iframe
                src="https://www.google.com/maps?q=Al%20Manama%20St%20Academic%20City%20DOC-Dubai%20Building%204%20Campus%20No%20205,104,105%20Dubai&output=embed"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// ✅ Reusable Styles
const labelStyle = {
  fontSize: "14px",
  fontWeight: 500,
  marginBottom: "6px",
  display: "block",
  color: "#2d3748",
};

const inputStyle = {
  width: "100%",
  padding: "10px 14px",
  border: "1px solid #e2e8f0",
  borderRadius: "6px",
  fontSize: "16px",
};

const textareaStyle = {
  width: "100%",
  padding: "10px 14px",
  border: "1px solid #e2e8f0",
  borderRadius: "6px",
  fontSize: "16px",
  resize: "vertical",
};

const infoStyle = {
  fontSize: "16px",
  color: "#4a5568",
};
