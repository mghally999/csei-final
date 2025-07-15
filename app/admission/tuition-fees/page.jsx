"use client";
import React, { useState } from "react";
import { FiDownload, FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";
import ApplicationFormModal from "@/components/ApplicationFormModal";

const FeeCard = ({ title, children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    whileHover={{ y: -5 }}
    style={{
      backgroundColor: "#fff",
      padding: "30px",
      borderRadius: "12px",
      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
      marginBottom: "30px",
      border: "1px solid rgba(0, 0, 0, 0.05)",
    }}
  >
    <h4
      style={{
        fontSize: "22px",
        fontWeight: "700",
        color: "#000000",
        marginBottom: "20px",
        position: "relative",
        paddingBottom: "10px",
      }}
    >
      {title}
      <span
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "60px",
          height: "4px",
          backgroundColor: "#000000",
          borderRadius: "2px",
        }}
      />
    </h4>
    {children}
  </motion.div>
);

const thStyle = {
  padding: "12px 15px",
  textAlign: "left",
  fontWeight: "600",
  borderBottom: "2px solid #e2e8f0",
};

const tdStyle = {
  padding: "12px 15px",
  verticalAlign: "top",
};

const rowStyle = {
  borderBottom: "1px solid #e2e8f0",
};

export default function TuitionFeesFull() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div>
      {/* Scholarship Banner */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          backgroundColor: "#000000",
          color: "white",
          padding: "25px 20px",
          textAlign: "center",
          fontSize: "20px",
          fontWeight: "700",
          width: "100%",
          boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
        }}
      >
        Early payment discounts available until 31st July for September intake
      </motion.div>

      {/* Main Content */}
      <section
        style={{
          backgroundColor: "#f8f9fa",
          padding: "80px 20px",
          position: "relative",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            position: "relative",
            zIndex: 2,
          }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              fontSize: "clamp(28px, 4vw, 42px)",
              fontWeight: "800",
              color: "#000000",
              marginBottom: "60px",
              textAlign: "center",
              position: "relative",
            }}
          >
            Full Tuition Fee Structure
            <div
              style={{
                height: "4px",
                width: "100px",
                backgroundColor: "#000000",
                margin: "20px auto 0",
                borderRadius: "2px",
              }}
            />
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            style={{
              maxWidth: "800px",
              margin: "0 auto 60px",
              textAlign: "center",
            }}
          >
            <p
              style={{
                fontSize: "18px",
                color: "#4a5568",
                marginBottom: "20px",
                lineHeight: "1.7",
              }}
            >
              View the complete breakdown of tuition fees, visa costs, and
              registration charges across all our programs.
            </p>
            <p
              style={{
                fontSize: "18px",
                color: "#4a5568",
                marginBottom: "0",
                lineHeight: "1.7",
              }}
            >
              All amounts are in UAE Dirhams (AED).
            </p>
          </motion.div>

          {/* Fee Structure */}
          <FeeCard title="Programs For University Progression - Fee Structure">
            <div
              style={{
                overflowX: "auto",
                boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                borderRadius: "8px",
              }}
            >
              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                  backgroundColor: "white",
                }}
              >
                <thead>
                  <tr style={{ backgroundColor: "#f8f9fa" }}>
                    <th style={thStyle}>Program</th>
                    <th style={thStyle}>Tuition Fee</th>
                    <th style={thStyle}>Visa Fee</th>
                    <th style={thStyle}>Registration</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      program:
                        "OTHM Level 4 - Tourism and Hospitality Management",
                      tuition: "12,500",
                      visa: "3,500",
                      registration: "1,000",
                    },
                    {
                      program:
                        "OTHM Level 5 - Tourism and Hospitality Management",
                      tuition: "12,500",
                      visa: "3,500",
                      registration: "1,000",
                    },
                    {
                      program:
                        "OTHM Level 4 - Health and Social Care Management",
                      tuition: "12,500",
                      visa: "3,500",
                      registration: "1,000",
                    },
                    {
                      program:
                        "OTHM Level 5 - Health and Social Care Management",
                      tuition: "12,500",
                      visa: "3,500",
                      registration: "1,000",
                    },
                    {
                      program: "OTHM Level 4 - Business Management",
                      tuition: "12,500",
                      visa: "3,500",
                      registration: "1,000",
                    },
                    {
                      program: "OTHM Level 5 - Business Management",
                      tuition: "12,500",
                      visa: "3,500",
                      registration: "1,000",
                    },
                    {
                      program: "OTHM Level 4 - Information Technology",
                      tuition: "12,500",
                      visa: "3,500",
                      registration: "1,000",
                    },
                    {
                      program: "OTHM Level 5 - Information Technology",
                      tuition: "12,500",
                      visa: "3,500",
                      registration: "1,000",
                    },
                    {
                      program: "Postgraduate Programs",
                      tuition: "18,000",
                      visa: "3,500",
                      registration: "1,000",
                      highlight: true,
                    },
                  ].map((item, index) => (
                    <tr
                      key={index}
                      style={{
                        borderBottom: "1px solid #e2e8f0",
                        backgroundColor: item.highlight ? "#f0f9ff" : "white",
                        fontWeight: item.highlight ? "600" : "400",
                      }}
                    >
                      <td style={tdStyle}>{item.program}</td>
                      <td style={tdStyle}>{item.tuition}</td>
                      <td style={tdStyle}>{item.visa}</td>
                      <td style={tdStyle}>{item.registration}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FeeCard>

          <FeeCard title="Professional Programs - Fee Structure">
            <div
              style={{
                overflowX: "auto",
                boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                borderRadius: "8px",
              }}
            >
              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                  backgroundColor: "white",
                }}
              >
                <thead>
                  <tr style={{ backgroundColor: "#f8f9fa" }}>
                    <th style={thStyle}>Course</th>
                    <th style={thStyle}>Duration</th>
                    <th style={thStyle}>Fee (AED)</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      course: "Tourism & Hospitality Management - Level A",
                      duration: "3 months",
                      fee: "4000",
                    },
                    {
                      course: "Tourism & Hospitality Management - Level B",
                      duration: "6 months",
                      fee: "6000",
                    },

                    {
                      course: "Digital Marketing - Level A (Basic)",
                      duration: "3 months",
                      fee: "4000",
                    },
                    {
                      course: "Digital Marketing - Level B (Advance)",
                      duration: "6 months",
                      fee: "6000",
                    },

                    {
                      course: "Culinary Arts – Professional",
                      duration: "6 months + Internship",
                      fee: "15000",
                    },

                    {
                      course: "Food & Beverages Service Training",
                      duration: "1 month",
                      fee: "3000",
                    },

                    {
                      course: "Front Desk Operations",
                      duration: "1 month",
                      fee: "3000",
                    },

                    {
                      course: "Business Management",
                      duration: "3 months",
                      fee: "6000",
                    },

                    {
                      course:
                        "Training Diploma in Housekeeping - Level A (Basic)",
                      duration: "3 months",
                      fee: "4000",
                    },
                    {
                      course:
                        "Training Diploma in Housekeeping - Level B (Advance)",
                      duration: "6 months",
                      fee: "6000",
                    },

                    {
                      course:
                        "HR Management in Tourism & Management - Level A (Basic)",
                      duration: "3 months",
                      fee: "4000",
                    },
                    {
                      course:
                        "HR Management in Tourism & Management - Level B (Advance)",
                      duration: "6 months",
                      fee: "6000",
                    },

                    {
                      course: "Barista Training - Basic",
                      duration: "10 days",
                      fee: "1000",
                    },
                    {
                      course: "Barista Training - Advance",
                      duration: "20 days",
                      fee: "1700",
                    },
                    {
                      course: "Barista Training - Professional",
                      duration: "40 days",
                      fee: "2800",
                    },

                    {
                      course: "Food Safety & Sanitation",
                      duration: "1 day",
                      fee: "500",
                    },
                  ].map((item, index) => (
                    <tr key={index} style={rowStyle}>
                      <td style={tdStyle}>{item.course}</td>
                      <td style={tdStyle}>{item.duration}</td>
                      <td style={tdStyle}>{item.fee}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FeeCard>

          {/* Additional Information */}
          <FeeCard title="Payment Information">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "30px",
              }}
            >
              <div>
                <h5
                  style={{
                    fontSize: "18px",
                    fontWeight: "600",
                    marginBottom: "15px",
                  }}
                >
                  Payment Methods
                </h5>
                <ul style={{ listStyleType: "none", paddingLeft: "0" }}>
                  {[
                    "Bank Transfer (Details provided in offer letter)",
                    "Credit/Debit Card (Visa/Mastercard)",
                    "Cash Payment (On-campus only)",
                    "Installment Plans (Available for select programs)",
                  ].map((item, index) => (
                    <li
                      key={index}
                      style={{
                        marginBottom: "10px",
                        display: "flex",
                        alignItems: "flex-start",
                      }}
                    >
                      <div
                        style={{
                          width: "24px",
                          height: "24px",
                          backgroundColor: "#000000",
                          color: "white",
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          marginRight: "12px",
                          flexShrink: 0,
                          fontSize: "12px",
                        }}
                      >
                        {index + 1}
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h5
                  style={{
                    fontSize: "18px",
                    fontWeight: "600",
                    marginBottom: "15px",
                  }}
                >
                  Important Notes
                </h5>
                <ul style={{ listStyleType: "none", paddingLeft: "0" }}>
                  {[
                    "All fees are subject to change without prior notice",
                    "Visa fees include medical insurance and processing",
                    "Registration fee is non-refundable",
                    "Additional charges may apply for late payments",
                  ].map((item, index) => (
                    <li
                      key={index}
                      style={{
                        marginBottom: "10px",
                        display: "flex",
                        alignItems: "flex-start",
                      }}
                    >
                      <div
                        style={{
                          width: "24px",
                          height: "24px",
                          backgroundColor: "#000000",
                          color: "white",
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          marginRight: "10px",
                          flexShrink: 0,
                          fontSize: "12px",
                        }}
                      >
                        !
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FeeCard>

          {/* PDF Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              textAlign: "center",
              marginTop: "40px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <motion.a
              href="/pdfs/TuitionFeesBreakdown.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "12px",
                padding: "16px 32px",
                backgroundColor: "#1d4ed8",
                color: "white",
                borderRadius: "10px",
                textDecoration: "none",
                fontSize: "18px",
                fontWeight: "600",
                maxWidth: "400px",
                width: "100%",
                justifyContent: "center",
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download Full Fee Breakdown
              <FiDownload style={{ fontSize: "20px" }} />
            </motion.a>

            <motion.a
              href="/pdfs/PaymentProcedure.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "12px",
                padding: "16px 32px",
                backgroundColor: "#059669",
                color: "white",
                borderRadius: "10px",
                textDecoration: "none",
                fontSize: "18px",
                fontWeight: "600",
                maxWidth: "400px",
                width: "100%",
                justifyContent: "center",
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Payment Schedule
              <FiDownload style={{ fontSize: "20px" }} />
            </motion.a>
            <motion.a
              href="/pdfs/RefundPolicy.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "12px",
                padding: "16px 32px",
                backgroundColor: "#dc2626",
                color: "white",
                borderRadius: "10px",
                textDecoration: "none",
                fontSize: "18px",
                fontWeight: "600",
                maxWidth: "400px",
                width: "100%",
                justifyContent: "center",
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download Refund Policy
              <FiDownload style={{ fontSize: "20px" }} />
            </motion.a>
          </motion.div>

          {/* Start Application Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              textAlign: "center",
              marginTop: "40px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <motion.button
              onClick={handleOpenModal}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                backgroundColor: "#000000",
                color: "white",
                padding: "16px 32px",
                borderRadius: "10px",
                border: "none",
                fontSize: "18px",
                fontWeight: "600",
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                gap: "12px",
              }}
            >
              Start Your Application
              <FiArrowRight style={{ fontSize: "24px" }} />
            </motion.button>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              backgroundColor: "#fff",
              padding: "40px",
              borderRadius: "12px",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
              marginTop: "60px",
            }}
          >
            <h3
              style={{
                fontSize: "32px",
                fontWeight: "700",
                color: "#000000",
                marginBottom: "30px",
                textAlign: "center",
              }}
            >
              Need Financial Guidance?
            </h3>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "40px",
              }}
            >
              <div>
                <p
                  style={{
                    fontSize: "18px",
                    lineHeight: "1.7",
                    color: "#4a5568",
                    marginBottom: "20px",
                  }}
                >
                  Our financial advisors are available to help you understand
                  payment options, scholarships, and installment plans.
                </p>
              </div>

              <div
                style={{
                  backgroundColor: "#f8f9fa",
                  padding: "25px",
                  borderRadius: "8px",
                  borderLeft: "4px solid #000000",
                }}
              >
                <h4
                  style={{
                    fontSize: "20px",
                    fontWeight: "700",
                    marginBottom: "15px",
                    color: "#000000",
                  }}
                >
                  Contact Finance Office
                </h4>
                <p
                  style={{
                    fontSize: "16px",
                    marginBottom: "10px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      width: "24px",
                      height: "24px",
                      backgroundColor: "#000000",
                      color: "white",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginRight: "10px",
                      fontSize: "12px",
                    }}
                  >
                    C
                  </span>
                  <strong>Call:</strong> +971-45522469
                </p>
                <p
                  style={{
                    fontSize: "16px",
                    marginBottom: "10px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      width: "24px",
                      height: "24px",
                      backgroundColor: "#000000",
                      color: "white",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginRight: "10px",
                      fontSize: "12px",
                    }}
                  >
                    E
                  </span>
                  <strong>Email:</strong> finance@cseiacademy.ae
                </p>
                <p
                  style={{
                    fontSize: "16px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      width: "24px",
                      height: "24px",
                      backgroundColor: "#000000",
                      color: "white",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginRight: "10px",
                      fontSize: "12px",
                    }}
                  >
                    H
                  </span>
                  <strong>Hours:</strong> Sun-Thu, 9AM - 5PM
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modal Component */}
      <ApplicationFormModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
}
