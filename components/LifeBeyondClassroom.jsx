"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
import { useRouter } from "next/navigation";

const LifeBeyondClassroom = () => {
  const [activeTab, setActiveTab] = useState("cultural");
  const [hoveredItem, setHoveredItem] = useState(null);

  const content = {
    cultural: {
      title: "Cultural Vibrancy",
      description:
        "Our campus comes alive with celebrations that honor diversity through festivals, talent shows, and art exhibitions that showcase our students' rich backgrounds.",
      image: "assets/img/life-with-csei/life-beyond-classroom.jpg",
      highlights: [
        "Annual international culture festival",
        "Student-led art exhibitions",
        "Multicultural talent showcases",
        "Heritage celebration weeks",
      ],
    },
    sports: {
      title: "Athletic Excellence",
      description:
        "State-of-the-art facilities and competitive programs foster teamwork, discipline, and healthy lifestyles through both recreational and varsity sports.",
      image:
        "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1000&auto=format&fit=crop",
      highlights: [
        "Intramural sports leagues",
        "Fitness and wellness programs",
        "Championship-winning teams",
        "Adventure sports clubs",
      ],
    },
    community: {
      title: "Community Building",
      description:
        "From student organizations to volunteer initiatives, we create meaningful connections that extend beyond graduation.",
      image:
        "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=1000&auto=format&fit=crop",
      highlights: [
        "100+ student organizations",
        "Community service programs",
        "Leadership development",
        "Alumni mentorship network",
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
    <section className="life-beyond-section">
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
            Life Beyond <span className="text-gradient">the Classroom</span>
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
              onClick={() => router.push("/about/our-values")}
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
              Discover Our Core Values
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
          className="image-container"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="image-wrapper">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="image-content"
              >
                <Image
                  src={content[activeTab].image}
                  alt={content[activeTab].title}
                  fill
                  // width={400}
                  // height={200}
                  objectFit="cover"
                  className="image"
                  priority
                />
                <div className="image-overlay" />
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
        .life-beyond-section {
          position: relative;
          padding: 80px 20px;
          overflow: hidden;
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          min-height: auto;
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
          align-items: center;
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

        .link-container {
          margin-top: 15px;
        }

        .core-values-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 15px;
          font-weight: 600;
          color: #4b0082;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .core-values-link:hover {
          color: #2a005c;
          transform: translateX(5px);
        }

        .core-values-link svg {
          transition: transform 0.3s ease;
        }

        .core-values-link:hover svg {
          transform: translateX(5px);
        }

        .image-container {
          flex: 1;
          position: relative;
        }

        .image-wrapper {
          position: relative;
          width: 100%;
          height: 400px;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
        }

        .image-content {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .image {
          object-fit: cover;
        }

        .image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            135deg,
            rgba(22, 6, 67, 0.2) 0%,
            transparent 100%
          );
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

          .image-wrapper {
            height: 350px;
          }

          .floating-shapes {
            display: none;
          }
        }

        @media (max-width: 768px) {
          .life-beyond-section {
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

export default LifeBeyondClassroom;
