"use client";

import React from "react";
import {
  FaWhatsapp,
  FaPhone,
  FaTelegramPlane,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function FloatingSocialBar() {
  // Contact data from your image
  const contactInfo = {
    address: "Office 205, Dubai Outsource City, United Arab Emirates",
    phone: "+971543185454",
    email: "admission@cseiacademy.ae",
    whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "971543185454",
    telegram: "https://t.me/cseiacademy",
    location:
      "https://maps.google.com/?q=Office+205,+Dubai+Outsource+City,+United+Arab+Emirates",
  };

  const iconStyle = {
    backgroundColor: "#fff",
    color: "#e05500",
    borderRadius: "50%",
    width: "48px",
    height: "48px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
    transition: "all 0.3s ease",
    cursor: "pointer",
    "&:hover": {
      transform: "scale(1.1)",
      backgroundColor: "#e05500",
      color: "#fff",
    },
  };

  const barStyle = {
    position: "fixed",
    top: "50%",
    right: "20px",
    transform: "translateY(-50%)",
    zIndex: 9999,
    display: "flex",
    flexDirection: "column",
    gap: "14px",
  };

  const openLink = (url) => {
    if (typeof window !== "undefined") {
      window.open(url, "_blank", "noopener noreferrer");
    }
  };

  const whatsappMessage = encodeURIComponent(
    "Hi CSEI Academy! I'm interested in your programs."
  );
  const whatsappLink = `https://wa.me/${contactInfo.whatsapp}?text=${whatsappMessage}`;

  return (
    <div style={barStyle}>
      {/* WhatsApp */}
      <div
        onClick={() => openLink(whatsappLink)}
        style={iconStyle}
        title="Chat on WhatsApp"
        className="social-icon"
      >
        <FaWhatsapp size={20} />
      </div>

      {/* Phone */}
      <div
        onClick={() => openLink(`tel:${contactInfo.phone}`)}
        style={iconStyle}
        title={`Call Us: ${contactInfo.phone}`}
        className="social-icon"
      >
        <FaPhone size={18} />
      </div>

      {/* Telegram */}
      <div
        onClick={() => openLink(contactInfo.telegram)}
        style={iconStyle}
        title="Message us on Telegram"
        className="social-icon"
      >
        <FaTelegramPlane size={18} />
      </div>

      {/* Email */}
      <div
        onClick={() => openLink(`mailto:${contactInfo.email}`)}
        style={iconStyle}
        title={`Email Us: ${contactInfo.email}`}
        className="social-icon"
      >
        <FaEnvelope size={18} />
      </div>

      {/* Location */}
      <div
        onClick={() => openLink(contactInfo.location)}
        style={iconStyle}
        title={`Our Location: ${contactInfo.address}`}
        className="social-icon"
      >
        <FaMapMarkerAlt size={18} />
      </div>

      {/* Global hover styles */}
      <style jsx global>{`
        .social-icon:hover {
          transform: scale(1.1);
          background-color: #e05500 !important;
          color: white !important;
        }
      `}</style>
    </div>
  );
}
