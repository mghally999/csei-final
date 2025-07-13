"use client";

import React, { useState } from "react";
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

const DocumentTable = ({ title, items }) => (
  <div style={{ margin: "20px 0 30px" }}>
    <h5 style={{ fontSize: "18px", fontWeight: "600", marginBottom: "15px" }}>
      {title}
    </h5>
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
            <th
              style={{
                padding: "12px 15px",
                textAlign: "left",
                fontWeight: "600",
                borderBottom: "2px solid #e2e8f0",
              }}
            >
              Document
            </th>
            <th
              style={{
                padding: "12px 15px",
                textAlign: "left",
                fontWeight: "600",
                borderBottom: "2px solid #e2e8f0",
              }}
            >
              Description
            </th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr
              key={index}
              style={{
                borderBottom: "1px solid #e2e8f0",
                "&:last-child": { borderBottom: "none" },
              }}
            >
              <td
                style={{
                  padding: "12px 15px",
                  fontWeight: "500",
                  verticalAlign: "top",
                }}
              >
                {item.document}
              </td>
              <td style={{ padding: "12px 15px" }}>{item.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default function ApplyNowGuide() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const allDocuments = [
    {
      document: "1. Passport Copy",
      description: "Clear color scan, valid for at least 6 months",
    },
    {
      document: "2. Passport-Size Photograph",
      description: "White background, recent (JPEG or PNG format)",
    },
    {
      document: "3. Academic Certificates",
      description: "High school, diploma, bachelor's (depending on program)",
    },
    {
      document: "4. Academic Transcripts/Mark Sheets",
      description: "Related to submitted certificates",
    },
    {
      document: "5. Statement of Purpose (SOP)",
      description: "Required for PG and diploma-level applicants",
    },
    {
      document: "6. Curriculum Vitae (CV)",
      description: "For postgraduate or professional course applicants",
    },
    {
      document: "7. English Language Test (if applicable)",
      description:
        "IELTS / TOEFL / PTE score (optional for some nationalities)",
    },
    {
      document: "8. Experience Letter (if applicable)",
      description: "For working professionals or healthcare licensing courses",
    },
    {
      document: "9. National ID (if applicable)",
      description: "For UAE residents or GCC nationals only",
    },
  ];

  const healthcareDocuments = [
    {
      document: "Professional License (if held)",
      description: "Any healthcare registration/license from your country",
    },
    {
      document: "Good Standing Certificate",
      description: "From relevant health authority or employer",
    },
    {
      document: "Police Clearance Certificate",
      description: "May be required during licensing or DHA Dataflow",
    },
    {
      document: "Attested Academic Certificates",
      description: "If applying for licensing support through CSEI",
    },
  ];

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

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
        Scholarships valid until 31st July for September intake
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
            Online Application Guide
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
              We've streamlined our application process to make it simple and
              straightforward.
            </p>
            <p
              style={{
                fontSize: "18px",
                color: "#4a5568",
                marginBottom: "0",
                lineHeight: "1.7",
              }}
            >
              Follow the steps below to complete your application successfully:
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
              Complete Application Process
            </motion.h3>

            {/* Step-by-Step Guide */}
            <StepCard title="Step 1: Visit the Official Website">
              <div style={{ marginBottom: "20px" }}>
                <p style={{ marginBottom: "15px", fontWeight: "500" }}>
                  Go to:{" "}
                  <a
                    href="https://www.cseiacademy.ae"
                    style={{ color: "#000000", fontWeight: "600" }}
                  >
                    https://www.cseiacademy.ae
                  </a>
                </p>
              </div>
            </StepCard>

            <StepCard title="Step 2: Navigate to 'Apply Now'">
              <ul style={{ listStyleType: "none", paddingLeft: "0" }}>
                <ListItem text="On the homepage, click on the 'Apply Now' or 'Admissions' tab" />
                <ListItem text="Choose your desired program:" />
                <div
                  style={{
                    marginLeft: "40px",
                    marginTop: "10px",
                    marginBottom: "15px",
                  }}
                >
                  <ListItem text="• Undergraduate / Diploma" />
                  <ListItem text="• Postgraduate Diploma" />
                  <ListItem text="• Short-term Professional Courses (e.g., DHA/MOH/HRM)" />
                </div>
              </ul>
            </StepCard>

            <StepCard title="Step 3: Fill in Personal Details">
              <ul style={{ listStyleType: "none", paddingLeft: "0" }}>
                {[
                  "Full name (as per passport)",
                  "Date of birth, nationality, gender",
                  "Contact number & email address (use personal email)",
                  "Passport number",
                ].map((item, index) => (
                  <ListItem key={index} text={item} />
                ))}
              </ul>
            </StepCard>

            <StepCard title="Step 4: Choose Your Program">
              <ul style={{ listStyleType: "none", paddingLeft: "0" }}>
                {[
                  "Select the intake month (e.g., Feb, June, September, November)",
                  "Choose the course/program from the dropdown list",
                  "Mention any scholarship interest or referral source (if applicable)",
                ].map((item, index) => (
                  <ListItem key={index} text={item} />
                ))}
              </ul>
            </StepCard>

            <StepCard title="Step 5: Upload Documents">
              <ul style={{ listStyleType: "none", paddingLeft: "0" }}>
                {[
                  "Upload all required files in PDF or JPG format",
                  "Ensure your academic records and passport are readable",
                  "Max file size per document: 2–5MB",
                ].map((item, index) => (
                  <ListItem key={index} text={item} />
                ))}
              </ul>
              <p
                style={{
                  marginTop: "20px",
                  fontWeight: "500",
                  color: "#4a5568",
                }}
              >
                See complete document requirements below.
              </p>
            </StepCard>

            <StepCard title="Step 6: Review & Submit">
              <ul style={{ listStyleType: "none", paddingLeft: "0" }}>
                {[
                  "Double-check all fields and uploads",
                  "Click 'Submit Application'",
                ].map((item, index) => (
                  <ListItem key={index} text={item} />
                ))}
              </ul>
              <p style={{ marginTop: "15px", fontWeight: "500" }}>
                You'll receive an email confirmation with your application
                ID/reference number.
              </p>
            </StepCard>

            <StepCard title="Step 7: Wait for Admission Team Response">
              <ul style={{ listStyleType: "none", paddingLeft: "0" }}>
                {[
                  "Processing time: 2–5 business days",
                  "You may be contacted regarding:",
                ].map((item, index) => (
                  <ListItem key={index} text={item} />
                ))}
                <div
                  style={{
                    marginLeft: "40px",
                    marginTop: "10px",
                    marginBottom: "15px",
                  }}
                >
                  <ListItem text="• Any missing documents" />
                  <ListItem text="• Interview (if required)" />
                  <ListItem text="• Offer Letter & tuition details" />
                </div>
              </ul>
            </StepCard>

            <StepCard title="Step 8: Accept Offer & Begin Visa Process">
              <ul style={{ listStyleType: "none", paddingLeft: "0" }}>
                {[
                  "Once you receive your Conditional Offer Letter:",
                  "Confirm your acceptance",
                  "Make initial tuition fee payment",
                  "Begin visa application (with CSEI assistance)",
                ].map((item, index) => (
                  <ListItem key={index} text={item} />
                ))}
              </ul>
            </StepCard>

            {/* Document Requirements */}
            <StepCard title="Document Requirements">
              <DocumentTable
                title="For All Applicants (UG, PG & Short-Term)"
                items={allDocuments}
              />
              <DocumentTable
                title="Additional Documents for Healthcare Programs (e.g., DHA/MOH/HAAD)"
                items={healthcareDocuments}
              />

              <div style={{ marginTop: "30px" }}>
                <h5
                  style={{
                    fontSize: "18px",
                    fontWeight: "600",
                    marginBottom: "15px",
                  }}
                >
                  Document Format Guidelines
                </h5>
                <ul style={{ listStyleType: "none", paddingLeft: "0" }}>
                  {[
                    "File Types: PDF, JPG, or PNG",
                    "Max Size per File: Typically 2–5 MB",
                    "Ensure all scans are clear and legible",
                  ].map((item, index) => (
                    <ListItem key={index} text={item} />
                  ))}
                </ul>
              </div>
            </StepCard>

            {/* Tips Section */}
            <StepCard title="Tips for a Smooth Application">
              <ul style={{ listStyleType: "none", paddingLeft: "0" }}>
                {[
                  "Use a personal email (avoid school/office addresses)",
                  "Ensure your passport is valid for at least 6 months",
                  "If you face technical issues, take a screenshot and email our support team",
                  "Check your email & WhatsApp regularly for updates",
                ].map((item, index) => (
                  <ListItem key={index} text={item} />
                ))}
              </ul>
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
              Important Notes
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
                    "Ensure all documents are clear and legible before uploading",
                    "Application processing typically takes 2-5 business days",
                    "Incomplete applications may delay the process",
                    "Our team will contact you if additional documents are needed",
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
                  <strong>Email:</strong> studentsupport@cseiacademy.ae
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
                    A
                  </span>
                  <strong>Admissions:</strong> admissionmanager@cseiacademy.ae
                </p>
              </div>
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
