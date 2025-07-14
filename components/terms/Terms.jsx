"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { useRouter } from "next/navigation";

const TermsPage = () => {
  const [activeTab, setActiveTab] = useState("terms");
  const [hoveredItem, setHoveredItem] = useState(null);

  const content = {
    terms: {
      title: "Terms of Service",
      description:
        "Please read these terms carefully before using our services.",
      highlights: [
        "By accessing our services, you agree to these terms",
        "You must be at least 13 years old to use our services",
        "You are responsible for maintaining the confidentiality of your account",
        "We reserve the right to modify these terms at any time",
      ],
    },
    privacy: {
      title: "Privacy Policy",
      description:
        "How we collect, use, and protect your personal information.",
      highlights: [
        "We collect information you provide directly to us",
        "We use cookies and similar tracking technologies",
        "We implement security measures to protect your data",
        "We do not sell your personal information to third parties",
      ],
    },
    cookies: {
      title: "Cookie Policy",
      description:
        "How we use cookies and similar technologies on our website.",
      highlights: [
        "Cookies help us provide and improve our services",
        "You can control cookies through your browser settings",
        "Essential cookies are necessary for the website to function",
        "Analytics cookies help us understand how visitors use our site",
      ],
    },
  };

  const HighlightCard = ({ icon, text, index, isLast }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className={`highlight-card ${isLast ? "last-highlight" : ""}`}
      onHoverStart={() => setHoveredItem(index)}
      onHoverEnd={() => setHoveredItem(null)}
    >
      <div className="highlight-icon">{icon}</div>
      <p>{text}</p>
      {hoveredItem === index && (
        <motion.div
          className="highlight-backdrop"
          layoutId="highlightBackdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
        />
      )}
    </motion.div>
  );

  const router = useRouter();

  return (
    <section className="terms-section custom-padding">
      <div className="gradient-overlay" />
      <div className="particle-background">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="particle"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 0.6, 0],
              y: [0, -100],
              x: [0, Math.random() * 100 - 50],
            }}
            transition={{
              duration: 5 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="content-container">
        <motion.div
          className="text-content"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Legal <span className="text-gradient">Information</span>
          </motion.h2>
          <motion.div className="tab-container">
            {Object.keys(content).map((tab) => (
              <button
                key={tab}
                className={`tab-button ${activeTab === tab ? "active" : ""}`}
                onClick={() => setActiveTab(tab)}
              >
                {content[tab].title}
                {activeTab === tab && (
                  <motion.div
                    className="tab-indicator"
                    layoutId="tabIndicator"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </motion.div>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="tab-content"
            >
              <p>{content[activeTab].description}</p>

              <div className="highlights-grid">
                {content[activeTab].highlights.map((item, index) => (
                  <HighlightCard
                    key={index}
                    icon={
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M5 13L9 17L19 7"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    }
                    text={item}
                    index={index}
                    isLast={index === content[activeTab].highlights.length - 1}
                  />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            style={{ marginTop: "40px" }}
          >
            <motion.button
              onClick={() => router.push("/")}
              whileHover={{
                scale: 1.05,
                backgroundColor: "#111111",
                boxShadow: "0 8px 25px rgba(0, 0, 0, 0.6)",
              }}
              whileTap={{ scale: 0.95 }}
              style={{
                backgroundColor: "#000000",
                color: "white",
                padding: "18px 48px",
                fontSize: "18px",
                fontWeight: "600",
                borderRadius: "10px",
                border: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "12px",
                boxShadow: "0 6px 20px rgba(0, 0, 0, 0.5)",
                transition: "all 0.3s ease",
              }}
            >
              Return to Homepage
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              >
                <FiArrowRight style={{ fontSize: "20px" }} />
              </motion.span>
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div
          className="legal-text-container"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="legal-text-wrapper">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="legal-text-content"
              >
                <h3>Full {content[activeTab].title}</h3>
                <div className="legal-text-scroll">
                  {activeTab === "terms" && (
                    <>
                      <p>
                        <strong>1. Acceptance of Terms</strong>
                      </p>
                      <p>
                        By accessing or using our services, you agree to be
                        bound by these Terms of Service.
                      </p>

                      <p>
                        <strong>2. User Responsibilities</strong>
                      </p>
                      <p>
                        You are responsible for maintaining the confidentiality
                        of your account and password.
                      </p>

                      <p>
                        <strong>3. Content</strong>
                      </p>
                      <p>
                        All content provided on our platform is for
                        informational purposes only.
                      </p>

                      <p>
                        <strong>4. Modifications</strong>
                      </p>
                      <p>
                        We reserve the right to modify or replace these terms at
                        any time.
                      </p>
                    </>
                  )}
                  {activeTab === "privacy" && (
                    <>
                      <p>
                        <strong>1. Information Collection</strong>
                      </p>
                      <p>
                        We collect information you provide directly when you
                        create an account or use our services.
                      </p>

                      <p>
                        <strong>2. Use of Information</strong>
                      </p>
                      <p>
                        We use the information we collect to provide, maintain,
                        and improve our services.
                      </p>

                      <p>
                        <strong>3. Data Security</strong>
                      </p>
                      <p>
                        We implement appropriate technical and organizational
                        measures to protect your data.
                      </p>

                      <p>
                        <strong>4. Third Parties</strong>
                      </p>
                      <p>
                        We do not sell your personal information to third
                        parties.
                      </p>
                    </>
                  )}
                  {activeTab === "cookies" && (
                    <>
                      <p>
                        <strong>1. What Are Cookies</strong>
                      </p>
                      <p>
                        Cookies are small text files stored on your device when
                        you visit websites.
                      </p>

                      <p>
                        <strong>2. How We Use Cookies</strong>
                      </p>
                      <p>
                        We use cookies to authenticate users, remember
                        preferences, and analyze trends.
                      </p>

                      <p>
                        <strong>3. Managing Cookies</strong>
                      </p>
                      <p>
                        You can control cookies through your browser settings
                        and other tools.
                      </p>

                      <p>
                        <strong>4. Types of Cookies</strong>
                      </p>
                      <p>
                        We use both session cookies and persistent cookies on
                        our website.
                      </p>
                    </>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="floating-shapes">
            <motion.div
              className="shape shape-1"
              animate={{
                y: [0, -20, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="shape shape-2"
              animate={{
                y: [0, 15, 0],
                rotate: [0, -8, 0],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            />
          </div>
        </motion.div>
      </div>

      <style jsx global>{`
        .terms-section {
          position: relative;
          padding: 80px 20px;
          overflow: hidden;
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          min-height: 100vh;
        }

        .gradient-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(
            circle at 20% 50%,
            rgba(22, 6, 67, 0.08) 0%,
            transparent 40%
          );
          z-index: 1;
        }

        .particle-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: 0;
        }

        .particle {
          position: absolute;
          width: 6px;
          height: 6px;
          background: rgba(75, 0, 130, 0.4);
          border-radius: 50%;
          bottom: 0;
        }

        .content-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          gap: 40px;
          align-items: flex-start;
          position: relative;
          z-index: 2;
        }

        .text-content {
          flex: 1;
        }

        .text-content h2 {
          font-size: clamp(32px, 5vw, 48px);
          font-weight: 800;
          color: #160643;
          margin-bottom: 30px;
          line-height: 1.2;
        }

        .text-gradient {
          background: linear-gradient(90deg, #0000000 0%, #000000 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: #e26933 !important;
        }

        .tab-container {
          gap: 10px;
          margin-bottom: 25px;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
        }

        .tab-button {
          position: relative;
          padding: 10px 16px;
          background: transparent;
          border: none;
          font-size: 14px;
          font-weight: 600;
          color: #4a5568;
          cursor: pointer;
          transition: all 0.3s ease;
          border-radius: 50px;
        }

        .tab-button:hover {
          color: #160643;
        }

        .tab-button.active {
          color: white;
        }

        .tab-indicator {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, #000000 0%, #000000 100%);
          border-radius: 50px;
          z-index: -1;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
        }

        .tab-content {
          margin-bottom: 25px;
        }

        .tab-content p {
          font-size: 16px;
          line-height: 1.6;
          color: #4a5568;
          margin-bottom: 25px;
        }

        .highlights-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 15px;
          margin-bottom: 30px;
        }

        .highlight-card {
          position: relative;
          padding: 16px;
          background: white;
          border-radius: 12px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
          z-index: 1;
          cursor: default;
        }

        .highlight-backdrop {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            135deg,
            rgba(75, 0, 130, 0.05) 0%,
            rgba(22, 6, 67, 0.1) 100%
          );
          border-radius: 12px;
          z-index: -1;
        }

        .highlight-icon {
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #000000 0%, #000000 100%);
          color: white;
          border-radius: 8px;
          margin-bottom: 12px;
        }

        .highlight-card p {
          font-size: 15px;
          line-height: 1.5;
          color: #4a5568;
          margin: 0;
        }

        .legal-text-container {
          flex: 1;
          position: relative;
        }

        .legal-text-wrapper {
          position: relative;
          width: 100%;
          height: 500px;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
          background: white;
          padding: 30px;
        }

        .legal-text-content h3 {
          font-size: 24px;
          margin-bottom: 20px;
          color: #160643;
        }

        .legal-text-scroll {
          height: calc(100% - 50px);
          overflow-y: auto;
          padding-right: 15px;
        }

        .legal-text-scroll p {
          margin-bottom: 15px;
          line-height: 1.6;
          color: #4a5568;
        }

        .legal-text-scroll strong {
          color: #160643;
        }

        .floating-shapes {
          position: absolute;
          top: -20px;
          right: -20px;
          width: 150px;
          height: 150px;
          pointer-events: none;
        }

        .shape {
          position: absolute;
          border-radius: 50%;
          background: linear-gradient(
            135deg,
            rgba(75, 0, 130, 0.1) 0%,
            rgba(22, 6, 67, 0.2) 100%
          );
          backdrop-filter: blur(5px);
        }

        .shape-1 {
          width: 100px;
          height: 100px;
          top: 0;
          right: 0;
        }

        .shape-2 {
          width: 60px;
          height: 60px;
          bottom: 0;
          left: 0;
        }

        @media (max-width: 992px) {
          .content-container {
            flex-direction: column;
            gap: 30px;
          }

          .legal-text-wrapper {
            height: 400px;
          }

          .floating-shapes {
            display: none;
          }
        }

        @media (max-width: 768px) {
          .terms-section {
            padding: 60px 20px;
          }

          .highlights-grid {
            grid-template-columns: 1fr;
          }

          .highlight-card.last-highlight {
            grid-column: 1 / -1;
          }

          .tab-container {
            gap: 8px;
          }

          .tab-button {
            padding: 8px 12px;
            font-size: 13px;
          }
        }
      `}</style>
    </section>
  );
};

export default TermsPage;
