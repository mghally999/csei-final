"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";
import ApplicationFormModal from "@/components/ApplicationFormModal";

const checkStyle = {
  width: "28px",
  height: "28px",
  backgroundColor: "#000000",
  color: "white",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "16px",
  fontWeight: "bold",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.3)",
  marginRight: "12px",
  flexShrink: 0,
};

const ListItem = ({ text }) => (
  <motion.div
    initial={{ opacity: 0, x: -10 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.3 }}
    style={{ display: "flex", alignItems: "flex-start", marginBottom: "12px" }}
  >
    <div style={checkStyle}>✓</div>
    <div
      style={{
        fontSize: "16px",
        lineHeight: "1.6",
        color: "#2d3748",
        fontWeight: 500,
      }}
    >
      {text}
    </div>
  </motion.div>
);

const StepCard = ({ title, children }) => (
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

export default function AdmissionProcess() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      {/* Hero Banner */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "81vh",
          minHeight: "700px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          color: "white",
          padding: "20px",
        }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            fontSize: "clamp(36px, 5vw, 64px)",
            fontWeight: "800",
            marginBottom: "20px",
            textShadow: "0 2px 10px rgba(0,0,0,0.5)",
            color: "#ffffff",
          }}
        >
          Online Admission
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          style={{
            fontSize: "clamp(20px, 2.5vw, 28px)",
            fontWeight: "600",
            marginTop: "20px",
            maxWidth: "800px",
            textShadow: "0 1px 5px rgba(0,0,0,0.3)",
          }}
        >
          Conquer your dream in UAE with CSEI Academy
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          style={{ marginTop: "40px" }}
        >
          <motion.button
            onClick={() => setIsModalOpen(true)}
            whileHover={{
              scale: 1.05,
              backgroundColor: "#111111",
              boxShadow: "0 8px 25px rgba(0, 0, 0, 0.6)",
            }}
            whileTap={{ scale: 0.95 }}
            style={{
              backgroundColor: "#04044e",
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
            Apply Now
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
        Scholarships valid until 31st July for September intake
      </motion.div>

      {/* Main Content */}
      <section
        className="custom-linear-white-top"
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
            Admission Process
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

          {/* Intro Paragraphs */}
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
              We welcome international students to join CSEI Academy, Dubai, and
              become part of a global learning community.
            </p>
            <p
              style={{
                fontSize: "18px",
                color: "#4a5568",
                marginBottom: "0",
                lineHeight: "1.7",
              }}
            >
              Follow these simple steps to begin your academic journey with us:
            </p>
          </motion.div>

          {/* Steps with Details */}
          <div style={{ marginBottom: "60px" }}>
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              style={{
                fontSize: "32px",
                fontWeight: "700",
                color: "#000000",
                marginBottom: "40px",
                textAlign: "center",
              }}
            >
              Steps for Applying Your Qualification
            </motion.h3>

            {/* Step 1 */}
            <StepCard title="Step 1: Submit Your Application online with required documents">
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
                      color: "#000000",
                    }}
                  >
                    Documents Required:
                  </h5>
                  <ul style={{ listStyleType: "none", paddingLeft: "0" }}>
                    {[
                      "Completed Application Form (online or PDF)",
                      "Passport Copy (valid for at least 6 months)",
                      "Academic Certificates & Transcripts",
                      "Passport-sized Photograph",
                      "English Proficiency (if required)",
                      "Updated CV (for professional or postgraduate courses)",
                      "Seek guidance by contacting counsellor for personalized assistance and support.",
                    ].map((item, index) => (
                      <ListItem key={index} text={item} />
                    ))}
                  </ul>
                </div>
              </div>
            </StepCard>

            {/* Step 2 */}
            <StepCard title="Step 2: Application Review & Virtual Interview">
              <p
                style={{
                  fontSize: "16px",
                  lineHeight: "1.7",
                  color: "#4a5568",
                }}
              >
                Our Admissions Team will review your application and schedule a
                virtual interview to assess your motivation, communication, and
                program suitability.
              </p>
            </StepCard>

            {/* Step 3 */}
            <StepCard title="Step 3: Receive Admission Offer Letter">
              <p
                style={{
                  fontSize: "16px",
                  lineHeight: "1.7",
                  color: "#4a5568",
                  marginBottom: "20px",
                }}
              >
                Upon successful Interview done, you will receive a Admission
                Offer Letter outlining which included the major parts to cover
                like:
              </p>
              <ul style={{ listStyleType: "none", paddingLeft: "0" }}>
                {[
                  "Program details",
                  "Tuition fees",
                  "Visa & accommodation guidance",
                  "Additional document requirements (if any)",
                ].map((item, index) => (
                  <ListItem key={index} text={item} />
                ))}
              </ul>
            </StepCard>

            {/* Step 4 */}
            <StepCard title="Step 4: Accept Offer & Make Initial Payment">
              <p
                style={{
                  fontSize: "16px",
                  lineHeight: "1.7",
                  color: "#4a5568",
                  marginBottom: "20px",
                }}
              >
                Secure your seat by:
              </p>
              <ul style={{ listStyleType: "none", paddingLeft: "0" }}>
                {[
                  "Signing and returning the acceptance form",
                  "Paying the initial Visa and Registration amount deposit to the bank account (as mentioned in the offer letter)",
                  "After getting the Visa within 20 days student need to deposit the Tuition Fees (as mentioned in the offer letter)",
                ].map((item, index) => (
                  <ListItem key={index} text={item} />
                ))}
              </ul>
              <p
                style={{
                  fontSize: "16px",
                  lineHeight: "1.7",
                  color: "#4a5568",
                  marginTop: "20px",
                }}
              >
                A Payment Receipt and Confirmation of Acceptance will be issued.
              </p>
            </StepCard>

            {/* Step 5 */}
            <StepCard title="Step 5: Final Enrollment & Orientation">
              <p
                style={{
                  fontSize: "16px",
                  lineHeight: "1.7",
                  color: "#4a5568",
                  marginBottom: "20px",
                }}
              >
                Once you arrive in Dubai:
              </p>
              <ul style={{ listStyleType: "none", paddingLeft: "0" }}>
                {[
                  "Attend your orientation session",
                  "Complete final registration formalities",
                  "Collect your student ID and course timetable",
                ].map((item, index) => (
                  <ListItem key={index} text={item} />
                ))}
              </ul>
              <p
                style={{
                  fontSize: "18px",
                  fontWeight: "600",
                  color: "#000000",
                  marginTop: "20px",
                }}
              >
                Start your academic journey at CSEI Academy, Dubai!
              </p>
            </StepCard>
          </div>

          {/* Additional Notes Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              backgroundColor: "#fff",
              padding: "40px",
              borderRadius: "12px",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
              marginBottom: "60px",
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
              Additional Notes
            </h3>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "40px",
              }}
            >
              <div>
                <ul style={{ listStyleType: "none", paddingLeft: "0" }}>
                  {[
                    "Scholarships may be available for eligible students",
                    "We offer academic, career, and visa counseling throughout the process",
                    "Accommodation assistance is available upon request",
                  ].map((item, index) => (
                    <ListItem key={index} text={item} />
                  ))}
                </ul>
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
                  Need any assistance?
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
                  <strong>Call On:</strong> +971-45522469
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
                    E
                  </span>
                  <strong>Email:</strong> studentsupport@cseiacademy.ae
                </p>
              </div>
            </div>
          </motion.div>

          {/* Document Requirements Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              backgroundColor: "#fff",
              padding: "40px",
              borderRadius: "12px",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
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
              Documents Required for Application
            </h3>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
                gap: "20px",
              }}
            >
              {[
                "Completed Application Form",
                "Passport Copy (valid 6+ months)",
                "Academic Certificates & Transcripts",
                "Passport-sized Photograph",
                "English Proficiency (if required)",
                "Updated CV (for PG courses)",
              ].map((doc, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.03 }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    backgroundColor: "#f8f9fa",
                    padding: "15px",
                    borderRadius: "8px",
                  }}
                >
                  <div style={checkStyle}>{idx + 1}</div>
                  <div
                    style={{
                      fontSize: "16px",
                      lineHeight: "1.6",
                      color: "#2d3748",
                    }}
                  >
                    {doc}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              textAlign: "center",
              marginTop: "40px",
            }}
          >
            <motion.button
              onClick={() => setIsModalOpen(true)}
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
              Start Your Application{" "}
              <FiArrowRight style={{ fontSize: "24px" }} />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Application Form Modal */}
      <ApplicationFormModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
}
