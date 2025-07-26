"use client";

import React from "react";
import { locationData } from "@/data/officeLocation";

export default function PartnerWithUs() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit logic
  };

  return (
    <div className="content-wrapper js-content-wrapper overflow-hidden">
      {/* ✅ Hero Section */}
      <section
        style={{
          position: "relative",
          width: "100%",
          height: "100vh",
          backgroundImage: "url('/assets/img/placements/partner-with-us.jpg')",
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
            Partner With Us
          </h1>
          <p style={{ fontSize: "18px", maxWidth: "700px", margin: "0 auto" }}>
            Collaborate with CSEI Academy and become part of a transformative
            education network.
          </p>
        </div>
      </section>

      {/* ✅ Form & Office Info */}
      <section style={{ padding: "80px 20px", backgroundColor: "#f8f9fa" }}>
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
          {/* ✅ Partnership Form */}
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
              Partnership Inquiry
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
              <div>
                <label style={labelStyle}>Proposal</label>
                <textarea
                  name="proposal"
                  rows="4"
                  required
                  placeholder="Tell us about your idea"
                  style={textareaStyle}
                ></textarea>
              </div>
              <button
                type="submit"
                style={{
                  padding: "12px",
                  backgroundColor: "#000000",
                  color: "#fff",
                  border: "none",
                  borderRadius: "6px",
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                Request Partnership
              </button>
            </form>
          </div>

          {/* ✅ Office Details (Map + Full Info) */}
          <div style={{ flex: "1 1 400px" }}>
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

            {/* ✅ Google Map */}
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

      {/* ✅ Office Emails (Simple 2-column style like contact page) */}
      <section style={{ backgroundColor: "#fff", padding: "60px 20px" }}>
        <div
          style={{
            maxWidth: "1000px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "40px",
            textAlign: "left",
          }}
        >
          {locationData.map((item, idx) => (
            <div key={idx}>
              <div
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  color: "#153d59",
                  marginBottom: "8px",
                }}
              >
                {item.location}
              </div>
              <a
                href={`mailto:${item.email}`}
                style={{
                  color: "red",
                  textDecoration: "underline",
                  fontSize: "16px",
                  fontWeight: "500",
                }}
              >
                {item.email}
              </a>
            </div>
          ))}
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
