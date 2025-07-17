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
  const [showCookieBanner, setShowCookieBanner] = useState(true);
  const [isCookieHovered, setIsCookieHovered] = useState(false);

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
    "Hi CSEI Academy! I'm interested in your programs."
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
                        <li>💸 What's the tuition fee?</li>
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

            {/* 🔹 Ultimate Creative Cookie Banner */}
            {/* {showCookieBanner && (
              <div className="cookie-overlay">
                <motion.div
                  className="cookie-banner"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 100, damping: 15 }}
                >
                  <div className="cookie-content">
                    <motion.div
                      className="cookie-jar"
                      animate={{
                        rotate: isCookieHovered ? [0, 10, -10, 0] : 0,
                        y: isCookieHovered ? [0, -10, 0] : 0,
                      }}
                      transition={{ duration: 0.6 }}
                      onHoverStart={() => setIsCookieHovered(true)}
                      onHoverEnd={() => setIsCookieHovered(false)}
                    >
                      <div className="jar-top"></div>
                      <div className="jar-glass">
                        <div className="cookie cookie1">🍪</div>
                        <div className="cookie cookie2">🍪</div>
                        <div className="cookie cookie3">🍪</div>
                        <div className="cookie cookie4">🍪</div>
                      </div>
                      <div className="jar-label">COOKIES</div>
                    </motion.div>

                    <div className="cookie-text">
                      <h3>We Value Your Privacy</h3>
                      <p>
                        We use cookies to make your experience sweeter! They
                        help us understand how you interact with our site and
                        improve it for everyone.
                      </p>
                      <div className="cookie-buttons">
                        <motion.button
                          className="accept-btn"
                          onClick={() => setShowCookieBanner(false)}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Accept All
                        </motion.button>
                        <motion.button
                          className="customize-btn"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Customize
                        </motion.button>
                        <motion.button
                          className="decline-btn"
                          onClick={() => setShowCookieBanner(false)}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          No Thanks
                        </motion.button>
                      </div>
                      <div className="cookie-links">
                        <a href="/privacy">Privacy Policy</a>
                        <a href="/cookies">Cookie Policy</a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            )} */}

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

              @keyframes cookieFloat {
                0%,
                100% {
                  transform: translateY(0) rotate(0deg);
                }
                50% {
                  transform: translateY(-5px) rotate(5deg);
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

              /* 🔹 Ultimate Cookie Banner Styles */
              .cookie-overlay {
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background-color: rgba(0, 0, 0, 0.7);
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 999999;
                backdrop-filter: blur(5px);
              }

              .cookie-banner {
                background: linear-gradient(135deg, #fff9f0 0%, #fff 100%);
                border-radius: 20px;
                box-shadow: 0 15px 50px rgba(0, 0, 0, 0.3);
                width: 800px;
                max-width: 90%;
                overflow: hidden;
                border: 2px solid #f8e8d0;
                position: relative;
              }

              .cookie-content {
                display: flex;
                padding: 30px;
                align-items: center;
              }

              .cookie-jar {
                width: 200px;
                height: 250px;
                position: relative;
                margin-right: 30px;
                flex-shrink: 0;
              }

              .jar-top {
                width: 180px;
                height: 30px;
                background: #e05500;
                border-radius: 10px 10px 0 0;
                position: absolute;
                top: 0;
                left: 10px;
                z-index: 2;
                box-shadow: inset 0 -5px 10px rgba(0, 0, 0, 0.1);
              }

              .jar-glass {
                width: 200px;
                height: 220px;
                background: rgba(255, 255, 255, 0.7);
                border-radius: 15px;
                position: absolute;
                bottom: 0;
                border: 3px solid #e05500;
                overflow: hidden;
                backdrop-filter: blur(2px);
                box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.1);
              }

              .jar-label {
                position: absolute;
                bottom: -25px;
                left: 0;
                right: 0;
                text-align: center;
                font-weight: bold;
                color: #e05500;
                font-size: 18px;
                text-transform: uppercase;
                letter-spacing: 2px;
              }

              .cookie {
                position: absolute;
                font-size: 30px;
                animation: cookieFloat 3s ease-in-out infinite;
              }

              .cookie1 {
                top: 30px;
                left: 30px;
                animation-delay: 0s;
              }

              .cookie2 {
                top: 60px;
                right: 40px;
                animation-delay: 0.5s;
              }

              .cookie3 {
                bottom: 50px;
                left: 50px;
                animation-delay: 1s;
              }

              .cookie4 {
                bottom: 30px;
                right: 30px;
                animation-delay: 1.5s;
              }

              .cookie-text {
                flex: 1;
              }

              .cookie-text h3 {
                color: #e05500;
                font-size: 24px;
                margin-bottom: 15px;
                font-weight: 700;
              }

              .cookie-text p {
                color: #5a4a42;
                font-size: 16px;
                line-height: 1.6;
                margin-bottom: 25px;
              }

              .cookie-buttons {
                display: flex;
                gap: 15px;
                flex-wrap: wrap;
                margin-bottom: 20px;
              }

              .accept-btn,
              .customize-btn,
              .decline-btn {
                padding: 12px 20px;
                border-radius: 50px;
                font-weight: 600;
                cursor: pointer;
                font-size: 14px;
                border: none;
                transition: all 0.3s ease;
              }

              .accept-btn {
                background: linear-gradient(135deg, #e05500 0%, #ff8c42 100%);
                color: white;
                box-shadow: 0 4px 15px rgba(224, 85, 0, 0.3);
              }

              .customize-btn {
                background: white;
                color: #e05500;
                border: 2px solid #e05500;
              }

              .decline-btn {
                background: transparent;
                color: #5a4a42;
                border: 2px solid #ddd;
              }

              .cookie-links {
                display: flex;
                gap: 20px;
              }

              .cookie-links a {
                color: #e05500;
                text-decoration: none;
                font-size: 14px;
                font-weight: 500;
                position: relative;
              }

              .cookie-links a:hover {
                text-decoration: underline;
              }

              @media (max-width: 768px) {
                .floating-social-icons {
                  top: auto;
                  bottom: 70px;
                  right: 50%;
                  transform: translateX(50%);
                  flex-direction: row;
                }

                .quick-enquiry-btn {
                  rotate: 90deg;
                  z-index: 9999;
                  right: -15px;
                  top: 40%;
                  padding: 8px 12px;
                  font-size: 12px;
                  width: auto;
                  height: auto;
                }

                .cookie-content {
                  flex-direction: column;
                  padding: 20px;
                }

                .cookie-jar {
                  margin-right: 0;
                  margin-bottom: 20px;
                  width: 150px;
                  height: 200px;
                }

                .jar-top {
                  width: 135px;
                  left: 7.5px;
                }

                .jar-glass {
                  width: 150px;
                }

                .cookie-text {
                  text-align: center;
                }

                .cookie-buttons {
                  justify-content: center;
                }

                .cookie-links {
                  justify-content: center;
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
