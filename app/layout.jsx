"use client";

import "../public/assets/sass/styles.scss";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "react-calendar/dist/Calendar.css";
import "aos/dist/aos.css";

import { useEffect, useState } from "react";
import AOS from "aos";

import Context from "@/context/Context";
import Link from "next/link";
import {
  FaWhatsapp,
  FaPhone,
  FaTelegramPlane,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

import Preloader from "@/components/common/Preloader";
import Header from "@/components/layout/headers/Header";
import FooterOne from "@/components/layout/footers/FooterOne";
import HeroSliderModal from "@/components/HeroSliderModal";

config.autoAddCss = false;

export default function RootLayout({ children }) {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 700,
      offset: 120,
      easing: "ease-out",
      once: true,
    });
  }, []);

  const whatsappNumber =
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "971543185454";
  const whatsappMessage = encodeURIComponent(
    "Hi CSEI Academy! I’m interested in your programs."
  );
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
  const phoneLink = `tel:+${whatsappNumber}`;
  const telegramLink = "https://t.me/cseiacademy";
  const emailLink = "mailto:admission@cseiacademy.ae";
  const instagramLink = "https://www.instagram.com/cseiacademydubaifz/"; // optional

  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <meta name="theme-color" content="#ffffff" />
        <title>CSEI Academy</title>
      </head>

      <body>
        <Context>
          <div className="main-content">
            <Preloader />
            <Header />

            <div className="content-wrapper js-content-wrapper overflow-hidden">
              {children}
            </div>

            <FooterOne />

            {/* 🔹 Bottom Left WhatsApp Button */}
            <Link
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                position: "fixed",
                bottom: "65px",
                left: "20px",
                zIndex: 9999,
                backgroundColor: "#25D366",
                color: "white",
                padding: "12px 18px",
                borderRadius: "50px",
                fontWeight: "600",
                fontSize: "1rem",
                border: "none",
                boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                textDecoration: "none",
              }}
            >
              <FaWhatsapp size={30} />
            </Link>

            {/* 🔹 Right-Center Floating Social Bar */}
            <div
              style={{
                position: "fixed",
                top: "75%",
                right: "20px",
                transform: "translateY(-50%)",
                zIndex: 9999,
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              <div
                onClick={() => window.open(whatsappLink, "_blank")}
                style={socialIconStyle}
                title="Chat on WhatsApp"
              >
                <FaWhatsapp size={18} />
              </div>
              <div
                onClick={() => window.open(phoneLink, "_blank")}
                style={socialIconStyle}
                title="Call Us"
              >
                <FaPhone size={16} />
              </div>
              <div
                onClick={() => window.open(telegramLink, "_blank")}
                style={socialIconStyle}
                title="Telegram"
              >
                <FaTelegramPlane size={16} />
              </div>
              <div
                onClick={() => window.open(emailLink, "_blank")}
                style={socialIconStyle}
                title="Email"
              >
                <FaEnvelope size={16} />
              </div>
              <div
                onClick={() => window.open(instagramLink, "_blank")}
                style={socialIconStyle}
                title="Instagram"
              >
                <FaInstagram size={16} />
              </div>
            </div>

            {/* 🔹 Top Right Quick Enquiry Button */}
            <button
              onClick={() => setShowModal(true)}
              style={{
                position: "fixed",
                top: "35%",
                right: "20px",
                zIndex: 9999,
                backgroundColor: "#2563eb",
                color: "white",
                padding: "14px 20px",
                borderRadius: "50px",
                fontWeight: "600",
                fontSize: "1rem",
                border: "none",
                cursor: "pointer",
                animation: "floatY 3s ease-in-out infinite",
              }}
            >
              Quick Enquiry
            </button>

            {/* 🔹 Enquiry Modal */}
            <HeroSliderModal
              isOpen={showModal}
              onClose={() => setShowModal(false)}
            />

            {/* 🔹 Global Animations */}
            <style jsx global>{`
              @keyframes floatY {
                0% {
                  transform: translateY(0);
                }
                50% {
                  transform: translateY(-10px);
                }
                100% {
                  transform: translateY(0);
                }
              }
            `}</style>
          </div>
        </Context>
      </body>
    </html>
  );
}

// 🔹 Floating Icon Style
const socialIconStyle = {
  backgroundColor: "#fff",
  color: "#e05500",
  borderRadius: "50%",
  width: "42px",
  height: "42px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: "0 0 8px rgba(0,0,0,0.15)",
  transition: "transform 0.3s ease",
  cursor: "pointer",
};
