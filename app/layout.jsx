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
  const [showCookieBanner, setShowCookieBanner] = useState(false);
  const [isCookieHovered, setIsCookieHovered] = useState(false);

  // 🔹 Cookie check on mount
  useEffect(() => {
    AOS.init({
      duration: 700,
      offset: 120,
      easing: "ease-out",
      once: true,
    });

    const cookieAccepted = localStorage.getItem("csei_cookie_accepted");
    if (!cookieAccepted) {
      setShowCookieBanner(true);
    }
  }, []);

  const handleAcceptCookies = () => {
    localStorage.setItem("csei_cookie_accepted", "true");
    setShowCookieBanner(false);
  };

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

            {/* 🔹 Cookie Banner (Persistent Logic Included) */}
            <AnimatePresence>
              {showCookieBanner && (
                <motion.div
                  className="cookie-overlay"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
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
                            onClick={handleAcceptCookies}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            Accept All
                          </motion.button>
                          <motion.button
                            className="customize-btn"
                            onClick={handleAcceptCookies}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            Customize
                          </motion.button>
                          <motion.button
                            className="decline-btn"
                            onClick={handleAcceptCookies}
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
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </Context>
      </body>
    </html>
  );
}

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
