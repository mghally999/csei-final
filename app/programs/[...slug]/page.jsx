"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";

import StickyTabsSection from "@/components/StickyTabsSection";
import ModalVideoComponent from "@/components/common/ModalVideo";
import ProgramHighlightsBox from "@/components/ProgramHighlightsBox";
import ApplicationFormModal from "@/components/ApplicationFormModal";

import allPrograms from "@/data/programs/allPrograms";

export default function Page() {
  const { slug } = useParams();
  const [pageItem, setPageItem] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (slug && Array.isArray(slug)) {
      const category = slug[0];
      const levelSlug =
        slug.length === 3 ? `${slug[1]}/${slug[2]}` : slug[1] || "default";

      const program = allPrograms.find((item) => {
        const normalizedItemLevel = item.level
          ?.toLowerCase()
          .replace(/\s+/g, "-");
        const normalizedSlugLevel = levelSlug.toLowerCase();

        return (
          item.category.toLowerCase() === category.toLowerCase() &&
          normalizedItemLevel === normalizedSlugLevel
        );
      });

      setPageItem(program || null);
    }
  }, [slug]);

  if (!pageItem) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-600 text-lg font-semibold">
        Program not found.
      </div>
    );
  }

  return (
    <>
      {/* Header Section */}
      <section
        className="page-header -type-5 bg-dark-1 layout-pb-lg custom-padding custom-linear-blue-top"
        style={{
          width: "100%",
          padding: "60px 5vw",
          background: "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.7))",
          position: "relative",
        }}
      >
        <div style={{ width: "100%", maxWidth: "1200px", margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "2rem",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {/* Left Content */}
            <div style={{ flex: "1 1 50%", minWidth: "300px" }}>
              <h1
                style={{
                  fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
                  fontWeight: 800,
                  color: "#ffffff",
                  marginBottom: "1rem",
                  lineHeight: 1.3,
                }}
              >
                {pageItem.title}
              </h1>

              {/* Accreditation Logos */}
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  flexWrap: "wrap",
                  marginTop: "2rem",
                }}
              >
                {pageItem.professional ? (
                  <div
                    style={{
                      background: "white",
                      borderRadius: "10px",
                      padding: "1rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                      width: "200px",
                      height: "100px",
                    }}
                  >
                    <Image
                      src="/assets/img/logos/KHDA-logo.png"
                      alt="KHDA Accredited"
                      width={180}
                      height={80}
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                ) : (
                  <div
                    style={{
                      background: "white",
                      borderRadius: "10px",
                      padding: "1rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                      width: "200px",
                      height: "100px",
                    }}
                  >
                    <Image
                      src="/assets/img/logos/OTHM-logo.png"
                      alt="OTHM Accredited"
                      width={180}
                      height={80}
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                )}
              </div>

              {/* Apply Now Button */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                style={{ marginTop: "2.5rem" }}
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
                    padding: "1rem 2.5rem",
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    borderRadius: "10px",
                    border: "none",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
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
                    <FiArrowRight style={{ fontSize: "1.25rem" }} />
                  </motion.span>
                </motion.button>
              </motion.div>
            </div>

            {/* Right Image */}
            <div
              style={{
                flex: "1 1 45%",
                minWidth: "300px",
                position: "relative",
                aspectRatio: "16/9",
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
              }}
            >
              <Image
                fill
                src={pageItem.imageSrc}
                alt="Course Image"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>

          {/* FULL-WIDTH Highlights Box */}
          <div style={{ width: "100%", marginTop: "3rem" }}>
            <ProgramHighlightsBox data={pageItem} layout="horizontal" />
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <div style={{ width: "100%", padding: "0 5vw" }}>
        <StickyTabsSection program={pageItem} />
      </div>

      {/* Video Modal */}
      <ModalVideoComponent
        videoId="LlCwHnp3kL4"
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />

      {/* Application Form Modal */}
      <ApplicationFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
