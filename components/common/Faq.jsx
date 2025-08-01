"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { faq } from "@/data/faq";
import {
  faMinus,
  faPlus,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, AnimatePresence } from "framer-motion";

export default function Faq() {
  const router = useRouter();
  const [activeFaq, setActiveFaq] = useState(null);
  const [hoveredItem, setHoveredItem] = useState(null);

  // Group FAQ items into pairs for 2-column layout
  const groupedFaq = [];
  for (let i = 0; i < faq.length; i += 2) {
    groupedFaq.push(faq.slice(i, i + 2));
  }

  const handleContactClick = () => {
    router.push("/contact-us");
  };

  return (
    <section
      className="custom-padding"
      style={{
        background: "linear-gradient(135deg, #000C2D 0%, #001E6C 100%)",
        position: "relative",
        overflow: "hidden",
        padding: "80px 0",
      }}
    >
      {/* Decorative elements */}
      <div
        style={{
          position: "absolute",
          top: "-100px",
          right: "-100px",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(224, 85, 0, 0.15) 0%, rgba(224, 85, 0, 0) 70%)",
        }}
      />

      <div
        style={{
          position: "absolute",
          bottom: "-50px",
          left: "-50px",
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(224, 85, 0, 0.1) 0%, rgba(224, 85, 0, 0) 70%)",
        }}
      />

      <div
        className="container"
        style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}
      >
        <div className="text-center">
          <motion.div
            className="sectionTitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2
              style={{
                color: "#ffffff",
                fontSize: "clamp(32px, 5vw, 48px)",
                fontWeight: "800",
                marginBottom: "16px",
                position: "relative",
                display: "inline-block",
              }}
            >
              Frequently Asked Questions
              <motion.span
                style={{
                  position: "absolute",
                  bottom: "-8px",
                  left: "0",
                  width: "100%",
                  height: "4px",
                  backgroundColor: "#E05500",
                  borderRadius: "2px",
                }}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              />
            </h2>

            <motion.p
              style={{
                color: "rgba(255, 255, 255, 0.8)",
                fontSize: "18px",
                maxWidth: "700px",
                margin: "0 auto",
              }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              Find answers to common questions about our services, programs, and
              more.
            </motion.p>
          </motion.div>

          <motion.div
            className="faq-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
              gap: "20px",
              marginTop: "60px",
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {groupedFaq.map((pair, rowIndex) => (
              <div key={rowIndex} style={{ display: "contents" }}>
                {pair.map((elm, i) => (
                  <motion.div
                    key={elm.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: rowIndex * 0.1 + i * 0.05 }}
                    viewport={{ once: true }}
                    style={{ gridColumn: i === 0 ? "1" : "2" }}
                  >
                    <motion.div
                      onClick={() =>
                        setActiveFaq(activeFaq === elm.id ? null : elm.id)
                      }
                      onMouseEnter={() => setHoveredItem(elm.id)}
                      onMouseLeave={() => setHoveredItem(null)}
                      style={{
                        background:
                          activeFaq === elm.id
                            ? "rgba(255, 255, 255, 0.05)"
                            : "transparent",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        borderRadius: "12px",
                        padding: "24px",
                        marginBottom: "20px",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                        position: "relative",
                        overflow: "hidden",
                        height: "100%",
                      }}
                      whileHover={{
                        background: "rgba(255, 255, 255, 0.03)",
                        borderColor: "rgba(224, 85, 0, 0.5)",
                      }}
                    >
                      {/* Hover effect background */}
                      {hoveredItem === elm.id && (
                        <motion.div
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background:
                              "linear-gradient(90deg, rgba(224, 85, 0, 0.05) 0%, rgba(224, 85, 0, 0) 100%)",
                            zIndex: 0,
                          }}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                        />
                      )}

                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          position: "relative",
                          zIndex: 1,
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "16px",
                          }}
                        >
                          <motion.div
                            style={{
                              width: "32px",
                              height: "32px",
                              borderRadius: "50%",
                              background:
                                activeFaq === elm.id
                                  ? "#E05500"
                                  : "rgba(224, 85, 0, 0.2)",
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              color:
                                activeFaq === elm.id ? "#ffffff" : "#E05500",
                              flexShrink: 0,
                            }}
                            animate={{
                              rotate: activeFaq === elm.id ? 180 : 0,
                            }}
                            transition={{ duration: 0.3 }}
                          >
                            <FontAwesomeIcon
                              icon={activeFaq === elm.id ? faMinus : faPlus}
                            />
                          </motion.div>

                          <motion.span
                            style={{
                              color: "#ffffff",
                              fontSize: "18px",
                              fontWeight: "600",
                            }}
                            animate={{
                              color:
                                activeFaq === elm.id ? "#E05500" : "#ffffff",
                            }}
                          >
                            {elm.question}
                          </motion.span>
                        </div>

                        <motion.div
                          animate={{
                            x: hoveredItem === elm.id ? 5 : 0,
                            opacity: hoveredItem === elm.id ? 1 : 0.7,
                          }}
                          transition={{ duration: 0.2 }}
                          style={{
                            color: "#E05500",
                          }}
                        >
                          <FontAwesomeIcon icon={faArrowRight} />
                        </motion.div>
                      </div>

                      <AnimatePresence>
                        {activeFaq === elm.id && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{
                              height: "auto",
                              opacity: 1,
                              transition: {
                                height: { duration: 0.3 },
                                opacity: { duration: 0.2, delay: 0.1 },
                              },
                            }}
                            exit={{
                              height: 0,
                              opacity: 0,
                              transition: {
                                height: { duration: 0.2 },
                                opacity: { duration: 0.1 },
                              },
                            }}
                            style={{ overflow: "hidden" }}
                          >
                            <motion.div
                              style={{
                                padding: "16px 0 0 48px",
                                color: "rgba(255, 255, 255, 0.8)",
                                lineHeight: "1.7",
                              }}
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 0.2 }}
                            >
                              <p>{elm.answer}</p>

                              {elm.additionalInfo && (
                                <motion.div
                                  style={{
                                    marginTop: "16px",
                                    padding: "12px",
                                    background: "rgba(224, 85, 0, 0.1)",
                                    borderRadius: "8px",
                                    borderLeft: "3px solid #E05500",
                                  }}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: 0.3 }}
                                >
                                  <p
                                    style={{
                                      color: "#E05500",
                                      fontWeight: "500",
                                      marginBottom: "8px",
                                    }}
                                  >
                                    Pro Tip:
                                  </p>
                                  <p>{elm.additionalInfo}</p>
                                </motion.div>
                              )}
                            </motion.div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            ))}
          </motion.div>

          {/* CTA Section */}
          <motion.div
            style={{
              marginTop: "60px",
              background: "rgba(255, 255, 255, 0.03)",
              border: "1px solid rgba(224, 85, 0, 0.3)",
              borderRadius: "12px",
              padding: "30px",
              textAlign: "center",
              maxWidth: "800px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h3
              style={{
                color: "#ffffff",
                fontSize: "22px",
                fontWeight: "600",
                marginBottom: "16px",
              }}
            >
              Still have questions?
            </h3>
            <p
              style={{
                color: "rgba(255, 255, 255, 0.7)",
                marginBottom: "24px",
              }}
            >
              Contact our support team for more information and personalized
              assistance.
            </p>
            <motion.button
              onClick={handleContactClick}
              style={{
                background: "linear-gradient(90deg, #E05500 0%, #FF7B3A 100%)",
                color: "#ffffff",
                border: "none",
                padding: "12px 32px",
                borderRadius: "50px",
                fontWeight: "600",
                fontSize: "16px",
                cursor: "pointer",
                position: "relative",
                overflow: "hidden",
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 5px 15px rgba(224, 85, 0, 0.4)",
              }}
              whileTap={{ scale: 0.98 }}
            >
              <span style={{ position: "relative", zIndex: 2 }}>
                Contact Us
              </span>
              <motion.span
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background:
                    "linear-gradient(90deg, #FF7B3A 0%, #E05500 100%)",
                  zIndex: 1,
                  opacity: 0,
                }}
                whileHover={{ opacity: 1 }}
              />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
