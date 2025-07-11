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

import { motion, AnimatePresence } from "framer-motion";
import Preloader from "@/components/common/Preloader";
import Header from "@/components/layout/headers/Header";
import FooterOne from "@/components/layout/footers/FooterOne";
import HeroSliderModal from "@/components/HeroSliderModal";

config.autoAddCss = false;

export default function RootLayout({ children }) {
  const [showModal, setShowModal] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

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
  const instagramLink = "https://www.instagram.com/cseiacademydubaifz/";

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

            {/* 🔹 Floating Social Icons */}
            <div className="floating-social-icons">
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

            {/* 🔹 Quick Enquiry Button */}
            <button
              onClick={() => setShowModal(true)}
              className="quick-enquiry-btn"
            >
              Quick Enquiry
            </button>

            {/* 🔹 Enquiry Modal */}
            <HeroSliderModal
              isOpen={showModal}
              onClose={() => setShowModal(false)}
            />

            {/* 🔹 AI Chatbot Widget */}
            <div className="chatbot-container" data-aos="fade-up">
              <AnimatePresence>
                {!isChatOpen ? (
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="chatbot-toggle"
                    onClick={() => setIsChatOpen(true)}
                  >
                    💬
                  </motion.button>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 40 }}
                    transition={{ duration: 0.4 }}
                    className="chatbot-box"
                  >
                    <div className="chatbot-header">
                      <span>Chat with us</span>
                      <button
                        className="chatbot-close"
                        onClick={() => setIsChatOpen(false)}
                      >
                        ✖
                      </button>
                    </div>
                    <div className="chatbot-body">
                      <p>Hello 👋 I'm here to help. How can I assist you?</p>
                      <ul>
                        <li>📚 Tell me about programs</li>
                        <li>💸 What’s the tuition fee?</li>
                        <li>📅 Book a callback</li>
                        <li>📝 I want to apply now</li>
                      </ul>
                    </div>
                    <div className="chatbot-footer">
                      <input type="text" placeholder="Type a message..." />
                      <button>Send</button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* 🔹 Global Styles */}
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

              .floating-social-icons {
                position: fixed;
                top: 75%;
                right: 20px;
                transform: translateY(-50%);
                z-index: 9999;
                display: flex;
                flex-direction: column;
                gap: 12px;
              }

              .quick-enquiry-btn {
                position: fixed;
                top: 35%;
                right: 20px;
                z-index: 9999;
                background-color: #2563eb;
                color: white;
                padding: 14px 20px;
                border-radius: 50px;
                font-weight: 600;
                font-size: 1rem;
                border: none;
                cursor: pointer;
                animation: floatY 3s ease-in-out infinite;
              }

              .chatbot-container {
                position: fixed;
                bottom: 20px;
                right: 50px;
                z-index: 99999;
              }

              .chatbot-toggle {
                background: #0f172a;
                color: #fff;
                border-radius: 50%;
                width: 60px;
                height: 60px;
                font-size: 24px;
                border: none;
                cursor: pointer;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
              }

              .chatbot-box {
                width: 300px;
                background: #ffffff;
                border-radius: 16px;
                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
                overflow: hidden;
              }

              .chatbot-header {
                background: #0f172a;
                color: #fff;
                padding: 12px 16px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                font-weight: bold;
              }

              .chatbot-close {
                background: transparent;
                color: #fff;
                border: none;
                font-size: 16px;
                cursor: pointer;
              }

              .chatbot-body {
                padding: 16px;
              }

              .chatbot-body p {
                margin-bottom: 10px;
                color: #333;
              }

              .chatbot-body ul {
                padding-left: 18px;
                color: #555;
              }

              .chatbot-body li {
                margin-bottom: 8px;
              }

              .chatbot-footer {
                display: flex;
                border-top: 1px solid #eee;
              }

              .chatbot-footer input {
                flex: 1;
                border: none;
                padding: 12px;
                font-size: 14px;
              }

              .chatbot-footer button {
                background: #2563eb;
                color: white;
                padding: 0 16px;
                border: none;
                font-weight: bold;
                cursor: pointer;
              }

              @media (max-width: 768px) {
                .floating-social-icons {
                  top: auto;
                  bottom: 90px;
                  right: 50%;
                  transform: translateX(50%);
                  flex-direction: row;
                }
                .quick-enquiry-btn {
                  // bottom: 20px;
                  // top: auto;
                  // right: 20px;
                }
              }
            `}</style>
          </div>
        </Context>
      </body>
    </html>
  );
}

// 🔹 Shared Style for Floating Icons
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
