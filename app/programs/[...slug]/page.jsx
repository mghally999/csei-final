"use client";

import { notFound } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";

const checkStyle = {
  width: "32px",
  height: "32px",
  backgroundColor: "#000000",
  color: "white",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "18px",
  fontWeight: "bold",
  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
  marginRight: "16px",
  flexShrink: 0,
};

const blogPagesData = [
  // ... (your existing blog data remains the same)
];

const SectionHeader = ({ children }) => (
  <motion.h2
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    style={{
      fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
      fontWeight: 800,
      textTransform: "uppercase",
      letterSpacing: "1px",
      background: "linear-gradient(90deg, #000, #2196f3, #000)",
      WebkitBackgroundClip: "text",
      backgroundClip: "text",
      color: "transparent",
      position: "relative",
      paddingBottom: "20px",
      margin: "60px 0 40px",
      textAlign: "center",
      width: "100%",
    }}
  >
    {children}
    <span
      style={{
        position: "absolute",
        bottom: 0,
        left: "50%",
        transform: "translateX(-50%)",
        width: "80px",
        height: "4px",
        background: "linear-gradient(90deg, #3b82f6, #000000)",
        borderRadius: "2px",
      }}
    />
  </motion.h2>
);

export default function BlogDetailsPage({ params }) {
  const pageData = blogPagesData.find((page) => page.slug === params.slug);
  if (!pageData) return notFound();

  return (
    <div style={{ width: "100%", overflowX: "hidden" }}>
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        style={{
          position: "relative",
          width: "100vw",
          height: "100vh",
          minHeight: "700px",
          marginLeft: "calc(-50vw + 50%)",
        }}
      >
        <Image
          src={pageData.image}
          alt={pageData.title}
          fill
          style={{
            objectFit: "cover",
            objectPosition: "center",
            zIndex: 1,
          }}
          priority
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.7) 100%)",
            zIndex: 2,
          }}
        />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          style={{
            position: "relative",
            zIndex: 3,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            padding: "0 5vw",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              fontSize: "clamp(2rem, 6vw, 4rem)",
              fontWeight: 900,
              color: "white",
              marginBottom: "2rem",
              lineHeight: 1.2,
              textShadow: "0 4px 12px rgba(0,0,0,0.5)",
              letterSpacing: "1px",
            }}
          >
            {pageData.title}
          </h1>
          <div
            style={{
              width: "100px",
              height: "5px",
              background: "linear-gradient(90deg, #3b82f6, #ffffff)",
              borderRadius: "5px",
              marginBottom: "2rem",
            }}
          />
        </motion.div>
      </motion.div>

      {/* Content Section */}
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "80px 5vw",
          position: "relative",
        }}
      >
        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {pageData.content?.map((paragraph, idx) => {
            // Check if paragraph looks like a heading
            const isHeading = paragraph.match(/^[A-Z][a-zA-Z ,:]+$/);

            return isHeading ? (
              <SectionHeader key={idx}>{paragraph}</SectionHeader>
            ) : (
              <motion.p
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                style={{
                  fontSize: "1.1rem",
                  lineHeight: 1.8,
                  marginBottom: "2rem",
                  color: "#333",
                  fontWeight: 400,
                }}
              >
                {paragraph}
              </motion.p>
            );
          })}
        </motion.div>

        {/* List Section */}
        {pageData.list && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ margin: "60px 0" }}
          >
            <SectionHeader>Key Highlights</SectionHeader>
            <ul style={{ listStyle: "none", paddingLeft: 0 }}>
              {pageData.list.map((item, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    marginBottom: "1.5rem",
                    padding: "1.5rem",
                    backgroundColor: idx % 2 === 0 ? "#f8f9fa" : "white",
                    borderRadius: "12px",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                  }}
                >
                  <div style={checkStyle}>{idx + 1}</div>
                  <div
                    style={{
                      fontSize: "1.1rem",
                      lineHeight: 1.6,
                      color: "#2d3748",
                      fontWeight: 500,
                      flex: 1,
                    }}
                  >
                    {item}
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}

        {/* More Content */}
        {pageData.moreContent && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {pageData.moreContent.map((paragraph, idx) => {
              const isHeading = paragraph.match(/^[A-Z][a-zA-Z ,:!]+$/);

              return isHeading ? (
                <SectionHeader key={idx}>{paragraph}</SectionHeader>
              ) : (
                <motion.p
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  style={{
                    fontSize: "1.1rem",
                    lineHeight: 1.8,
                    marginBottom: "2rem",
                    color: "#333",
                    fontWeight: 400,
                  }}
                >
                  {paragraph}
                </motion.p>
              );
            })}
          </motion.div>
        )}

        {/* Closing CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{
            textAlign: "center",
            marginTop: "80px",
            padding: "40px",
            backgroundColor: "#f8f9fa",
            borderRadius: "16px",
          }}
        >
          <SectionHeader>Enjoyed This Article?</SectionHeader>
          <p
            style={{
              fontSize: "1.2rem",
              lineHeight: 1.7,
              color: "#4a5568",
              marginBottom: "2rem",
              maxWidth: "700px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Share your thoughts with us and explore more exciting content on our
            blog!
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              backgroundColor: "#000000",
              color: "white",
              padding: "1rem 2.5rem",
              fontSize: "1.1rem",
              fontWeight: 600,
              borderRadius: "8px",
              border: "none",
              cursor: "pointer",
              boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
            }}
          >
            Explore More Articles
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
