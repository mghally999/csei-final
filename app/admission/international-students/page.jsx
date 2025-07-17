"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faPhoneAlt,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import ApplicationFormModal from "@/components/ApplicationFormModal";

const BrandColors = {
  primaryDark: "#000C2D",
  primaryBlue: "#001E6C",
  accent: "#E05500",
  lightText: "#F5F5F5",
  border: "#FFFFFF22",
};

const ListItem = ({ text }) => (
  <motion.li
    initial={{ opacity: 0, x: -10 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.3 }}
    style={{
      display: "flex",
      alignItems: "flex-start",
      marginBottom: "12px",
      fontSize: "16px",
      lineHeight: "1.6",
      color: BrandColors.lightText,
      fontWeight: 500,
    }}
  >
    <span
      style={{
        width: "24px",
        height: "24px",
        backgroundColor: BrandColors.accent,
        color: "#fff",
        borderRadius: "50%",
        display: "inline-flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "14px",
        marginRight: "10px",
        flexShrink: 0,
      }}
    >
      ✓
    </span>
    {text}
  </motion.li>
);

const Section = ({ title, children }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    style={{
      background: `linear-gradient(135deg, ${BrandColors.primaryDark} 0%, ${BrandColors.primaryBlue} 100%)`,
      padding: "40px",
      borderRadius: "16px",
      border: `2px solid ${BrandColors.accent}`,
      boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
      marginBottom: "50px",
    }}
  >
    <h3
      style={{
        fontSize: "28px",
        fontWeight: "700",
        color: BrandColors.lightText,
        marginBottom: "20px",
        borderBottom: `2px solid ${BrandColors.accent}`,
        paddingBottom: "10px",
      }}
    >
      {title}
    </h3>
    <ul style={{ paddingLeft: 0, listStyle: "none" }}>{children}</ul>
  </motion.div>
);

export default function InternationalStudentsGuide() {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fullParagraph = `Begin your admission process by completing and submitting the official application form online or via email. Make sure to provide all required personal and academic information accurately.\n\nOnce your application is reviewed, you may receive a conditional or official offer letter if you meet the CSEI Academy eligibility criteria. This offer letter confirms your selection for further admission steps and outlines any additional requirements or next actions.`;

  const footerNote = `\n\nPlease note that visa charges are set by Government Authorities and may be subject to change. All charges are inclusive of VAT. Fees are subject to change dependent on the exchange rate at the time of payment.`;

  const assistanceNote = `Need any assistance for Visa Support?\n\n📞 Whatsapp: +971- 50 294 8349\n📧 Email: studentsupport@cseiacademy.ae`;

  const docSections = [
    {
      title: "Admission Requirements for International Applicants",
      points: [
        fullParagraph,
        "Complete the online application.",
        "Upload all supporting documents (Transcripts, certificates, and proof of English proficiency)",
        "Applications are assessed based on academic qualifications and program capacity.",
        "Submit all documents via email and receive guidance from Counsellor.",
        "Credential evaluation and certificate equivalency process",
      ],
    },
    {
      title: "CSEI Support for Students",
      points: [
        "Guidance on required documents",
        "Support through visa and admission consultants",
        "Reference to trusted attestation & translation agencies",
        "Help with MOFA attestation in the UAE",
        "If you need support during the application process, please contact the counsellors through the website or email at admission@cseiacademy.ae for personalized assistance and guidance.",
      ],
    },
    {
      title: "Visa Application Support and Requirements",
      points: [
        "CSEI Academy provides complete assistance for international students to apply for a UAE study visa both short-term and long-term options. Our Visa Team will assist you with:",
        "UAE student visa application",
        "Medical insurance & travel documentation",
        "Arrival and airport pickup arrangements",
      ],
    },
    {
      title: "Visa Types Available",
      points: [
        "Short-Term Student Visa (up to 90 days)\nIdeal for short courses like:\n• DHA / MOH / HAAD licensing programs\n• Crash courses, language training, or certifications",
        "Long-Term Student Visa (1 year)\nSuitable for:\n• Diploma, Advanced Diploma, or Degree programs",
      ],
    },
    {
      title: "Visa Support Services",
      points: [
        "CSEI’s dedicated Visa Coordinator will help with:",
        "Preparing and checking documents",
        "Applying through immigration portals",
        "Following up with visa approvals",
        "Arranging medical insurance",
        "Optional: Airport pickup & accommodation guidance",
      ],
    },
    {
      title: "Visa Application Requirements",
      points: [
        "1. Personal Documents",
        "Passport (valid for at least 6 months)",
        "Passport-size photo (white background)",
        "Birth certificate (for some nationalities)",
        "2. Academic Documents",
        "Educational Certificates (scanned copies)",
        "Admission/Offer Letter from CSEI Academy",
        "3. Payment & Fees",
        "Visa processing fee (paid to CSEI Academy)",
      ],
    },
    {
      title: "Visa Processing Time",
      points: [
        "Short-term visa: 7–10 working days",
        "Long-term visa: 10–14 working days (after medical & ID processing)",
      ],
    },
    {
      title: "Important Notes",
      points: [
        "Visa must be applied at least 1 month before the course start date.",
        "Arrival must be 2 weeks before the orientation.",
        "Medical test and Emirates ID (for long-term visa) must be completed after arrival.",
        "CSEI Academy cannot guarantee visa approval — subject to UAE Immigration rules.",
        assistanceNote,
      ],
    },
    {
      title: "Student Visa Cancellation",
      points: [
        "Students who wish to defer, interrupt, or withdraw from their studies are required to cancel their visa immediately by personally submitting their original passport and emirates ID card to the CSEI admin office.",
        "This procedure also applies to graduating students.",
        "Students whose visa is expiring and will not be renewed for any reason, need to compulsorily cancel their visa.",
        "The student visa cancellation paper will not be shared with the student until and unless all fees outstanding is fully paid by the student including the visa cancellation charges.",
        "Upon cancellation of the student visa, student is supposed to submit the status change or immigration stamped country exit paper as desired and advised by CSEI College admin officer.",
        "Failure to do so will authorize CSEI to charge a penal AED 5,000 to the student and take legal recourse.",
      ],
    },
    {
      title: "Student Visa Renewal",
      points: [
        "The Student Visa renewal process is for those students who are already sponsored by college.",
        "Students who are required to renew their visa under the College’s sponsorship must initiate the process with college admin office at least one month before the expiration date.",
        "The process takes approximately 15–20 days and student presence will be required during the entire renewal process.",
        "If the student visa is not being renewed then after expiry of the visa, it needs to be cancelled and the cancellation charges for cancellation of the visa will have to be paid by the student.",
        "A Visa renewal form needs to be filled along with signing the visa terms and conditions and student undertaking forms",
        "The Student Visa Renewal fees of AED 3,500 is inclusive of: Visa renewal fees, Medical fees, Emirates ID and Medical Insurance",
      ],
    },
    {
      title: "Visa Cancellation Charges (AED & USD)",
      points: [
        "• Entry Permit Cancellation – 1200 AED, 330 USD.",
        "• Residence Visa Cancellation – if in country – 1500 AED, 410 USD.",
        "• Residence Visa Cancellation – Out of UAE with Passport – 2000 AED, 550 USD.",
        "• Residence Visa Cancellation – Out of UAE without Passport – 4400 AED, 1200 USD.",
        footerNote,
      ],
    },
  ];

  return (
    <section style={{ backgroundColor: "#0a1445" }} className="custom-padding">
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            fontSize: "clamp(28px, 4vw, 42px)",
            textAlign: "center",
            marginBottom: "60px",
            fontWeight: "800",
            color: BrandColors.lightText,
          }}
        >
          International Students – Admission & Visa Guide
        </motion.h2>

        {docSections.map((section, idx) => (
          <Section key={idx} title={section.title}>
            {section.points.map((point, i) => (
              <ListItem key={i} text={point} />
            ))}
          </Section>
        ))}

        <ApplicationFormModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </div>
    </section>
  );
}
