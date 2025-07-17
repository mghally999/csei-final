"use client";

import React, { useState, useEffect } from "react";
import { programs } from "@/data/programs";
import Link from "next/link";
import Image from "next/image";

const categories = [
  "All Categories",
  "Health & Social Care",
  "Business & Management",
  "Travel & Tourism",
  "Culinary Arts",
  "Information Technology",
];

const getLevelLabel = (level) => {
  switch (level) {
    case "Level 3":
      return "Beginner";
    case "Level 4":
      return "Intermediate";
    case "Level 5":
    case "Level 6":
      return "Expert";
    default:
      return level;
  }
};

export default function Courses() {
  const [filtered, setFiltered] = useState([]);
  const [category, setCategory] = useState("All Categories");
  const [hoveredCard, setHoveredCard] = useState(null);

  const enhancedPrograms = programs.map((program) => ({
    ...program,
    professional: program.href.includes("/professional-courses/"),
    duration: program.duration || "Duration not specified",
    level: program.level || "Level not specified",
  }));

  useEffect(() => {
    if (category === "All Categories") {
      setFiltered(enhancedPrograms.slice(0, 8));
    } else {
      const filteredData = enhancedPrograms.filter((program) => {
        switch (category) {
          case "Health & Social Care":
            return program.school === "Health Science Discipline";
          case "Business & Management":
            return program.school === "Business Discipline";
          case "Travel & Tourism":
            return (
              program.school === "Culinary Arts & Tourism Discipline" &&
              (program.category?.includes("Tourism") ||
                program.category?.includes("Hospitality"))
            );
          case "Culinary Arts":
            return (
              program.school === "Culinary Arts & Tourism Discipline" &&
              program.category === "Professional Courses"
            );
          case "Information Technology":
            return program.school === "Computing Discipline";
          default:
            return true;
        }
      });
      setFiltered(filteredData);
    }
  }, [category]);

  const getDisplayTitle = (program) =>
    program.credentialTitle || `${program.title} - ${program.level}`;

  return (
    <section
      style={{
        padding: "6rem 0",
        position: "relative",
        overflow: "hidden",
      }}
      className="custom-linear-white-top"
    >
      {/* Animated background elements */}
      <div
        style={{
          position: "absolute",
          top: "-50%",
          left: "-10%",
          width: "120%",
          height: "200%",
          background:
            "radial-gradient(circle, rgba(59,130,246,0.05) 0%, rgba(255,255,255,0) 70%)",
          zIndex: 0,
          animation: "rotate 20s linear infinite",
        }}
      ></div>

      <div
        style={{
          width: "100%",
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "0 1.5rem",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Header Section */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            marginBottom: "3rem",
            position: "relative",
          }}
        >
          <div
            style={{
              maxWidth: "900px",
              margin: "0 auto 2rem",
              padding: "0 1rem",
            }}
          >
            <h2
              style={{
                fontSize: "clamp(1.75rem, 5vw, 3.5rem)",
                fontWeight: 800,
                textTransform: "uppercase",
                letterSpacing: "1px",
                background: "linear-gradient(90deg, #000, #3b82f6, #000)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
                position: "relative",
                paddingBottom: "1.5rem",
                margin: "0 0 0.5rem 0",
                lineHeight: 1.2,
                textShadow: "0 2px 4px rgba(0,0,0,0.1)",
              }}
            >
              Trending Programs for September Intake 2025
            </h2>
            <p
              style={{
                fontSize: "clamp(1rem, 2vw, 1.25rem)",
                color: "#64748b",
                margin: "1rem 0 0 0",
                lineHeight: 1.6,
                maxWidth: "700px",
                textAlign: "end",
              }}
            >
              Explore our most popular programs across various disciplines
            </p>
          </div>
        </div>

        {/* Category Tabs */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "0.75rem",
            padding: "1rem 0 3rem 0",
            margin: "0 auto",
            maxWidth: "100%",
            position: "relative",
            zIndex: 2,
          }}
        >
          {categories.map((cat, i) => (
            <button
              key={i}
              onClick={() => setCategory(cat)}
              style={{
                position: "relative",
                background:
                  category === cat
                    ? "linear-gradient(135deg, #3b82f6, #1e40af)"
                    : "rgba(255, 255, 255, 0.9)",
                border: category === cat ? "none" : "1px solid #e2e8f0",
                backdropFilter: "blur(8px)",
                padding: "0.75rem 1.5rem",
                fontWeight: 600,
                fontSize: "clamp(0.75rem, 2vw, 0.875rem)",
                color: category === cat ? "#fff" : "#1e293b",
                borderRadius: "50px",
                cursor: "pointer",
                transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                overflow: "hidden",
                zIndex: 1,
                whiteSpace: "nowrap",
                minWidth: "fit-content",
                boxShadow:
                  category === cat
                    ? "0 4px 6px rgba(59, 130, 246, 0.25)"
                    : "0 2px 4px rgba(0, 0, 0, 0.05)",
                transform: "translateY(0)",
                ":hover": {
                  transform: "translateY(-2px)",
                  boxShadow:
                    category === cat
                      ? "0 6px 12px rgba(59, 130, 246, 0.3)"
                      : "0 4px 8px rgba(0, 0, 0, 0.1)",
                },
              }}
              type="button"
            >
              {cat}
              {category === cat && (
                <span
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    height: "3px",
                    background:
                      "linear-gradient(90deg, #ffffff, rgba(255,255,255,0.5))",
                    animation: "pulse 2s infinite",
                  }}
                ></span>
              )}
            </button>
          ))}
        </div>

        {/* Course Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "2rem",
            padding: "1rem 0",
            margin: "0 auto",
            position: "relative",
            zIndex: 1,
          }}
        >
          {filtered.map((course, index) => {
            const levelLabel = getLevelLabel(course.level);
            const displayTitle = getDisplayTitle(course);

            return (
              <Link
                href={course.href}
                key={index}
                style={{
                  textDecoration: "none",
                  color: "inherit",
                }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div
                  style={{
                    background: "#fff",
                    borderRadius: "16px",
                    overflow: "hidden",
                    boxShadow:
                      "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)",
                    transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    position: "relative",
                    border: "1px solid rgba(226, 232, 240, 0.7)",
                    transform:
                      hoveredCard === index
                        ? "translateY(-8px)"
                        : "translateY(0)",
                    ":hover": {
                      boxShadow:
                        "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
                      borderColor: "rgba(59, 130, 246, 0.5)",
                    },
                  }}
                >
                  {/* Card Image */}
                  <div
                    style={{
                      position: "relative",
                      height: "220px",
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background:
                          "linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.5))",
                        zIndex: 1,
                        transition: "all 0.5s ease",
                        opacity: hoveredCard === index ? 0.7 : 0.5,
                      }}
                    ></div>

                    <Image
                      fill
                      style={{
                        objectFit: "cover",
                        transition:
                          "transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
                        transform:
                          hoveredCard === index ? "scale(1.05)" : "scale(1)",
                      }}
                      src={course.imageSrc}
                      alt={course.title}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />

                    {/* Professional Badge */}
                    {course.professional && (
                      <div
                        style={{
                          position: "absolute",
                          top: "1rem",
                          left: "1rem",
                          zIndex: 3,
                          transform:
                            hoveredCard === index
                              ? "translateY(0)"
                              : "translateY(-10px)",
                          opacity: hoveredCard === index ? 1 : 0,
                          transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                        }}
                      >
                        <div
                          style={{
                            padding: "0.5rem 1rem",
                            borderRadius: "50px",
                            background:
                              "linear-gradient(135deg, #3b82f6, #1e40af)",
                            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                          }}
                        >
                          <span
                            style={{
                              fontSize: "0.75rem",
                              lineHeight: 1,
                              textTransform: "uppercase",
                              fontWeight: 900,
                              letterSpacing: "0.5px",
                              color: "#fff",
                            }}
                          >
                            PROFESSIONAL
                          </span>
                        </div>
                      </div>
                    )}

                    {/* Hover Effect */}
                    <div
                      style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: "4px",
                        background: "linear-gradient(90deg, #3b82f6, #1e40af)",
                        transform:
                          hoveredCard === index ? "scaleX(1)" : "scaleX(0)",
                        transformOrigin: "left center",
                        transition:
                          "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                        zIndex: 2,
                      }}
                    ></div>
                  </div>

                  {/* Card Content */}
                  <div
                    style={{
                      padding: "1.5rem",
                      display: "flex",
                      flexDirection: "column",
                      flexGrow: 1,
                      position: "relative",
                    }}
                  >
                    {/* School/Category */}
                    <div
                      style={{
                        fontSize: "0.875rem",
                        lineHeight: 1,
                        fontWeight: 600,
                        marginBottom: "0.75rem",
                        color: "#3b82f6",
                        letterSpacing: "0.5px",
                        transition: "all 0.3s ease",
                        transform:
                          hoveredCard === index
                            ? "translateX(5px)"
                            : "translateX(0)",
                      }}
                    >
                      {course.school}
                    </div>

                    {/* Course Title */}
                    <h3
                      style={{
                        fontSize: "1rem",
                        lineHeight: 1.4,
                        fontWeight: 800,
                        margin: "0 0 1rem 0",
                        flexGrow: 1,
                        color: "#1e293b",
                        transition: "all 0.3s ease",
                        transform:
                          hoveredCard === index
                            ? "translateX(3px)"
                            : "translateX(0)",
                      }}
                    >
                      {displayTitle}
                    </h3>

                    {/* Course Meta */}
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "1rem",
                        alignItems: "center",
                        paddingTop: "0.75rem",
                        borderTop: "1px solid rgba(226, 232, 240, 0.7)",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          fontSize: "0.875rem",
                          lineHeight: 1,
                          fontWeight: 500,
                          color: "#64748b",
                        }}
                      >
                        <Image
                          width={16}
                          height={17}
                          style={{
                            marginRight: "0.5rem",
                            filter:
                              "invert(50%) sepia(13%) saturate(748%) hue-rotate(179deg) brightness(93%) contrast(88%)",
                            transition: "all 0.3s ease",
                            transform:
                              hoveredCard === index
                                ? "rotate(10deg)"
                                : "rotate(0)",
                          }}
                          src="/assets/img/coursesCards/icons/2.svg"
                          alt="duration"
                        />
                        {course.duration}
                      </div>

                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          fontSize: "0.875rem",
                          lineHeight: 1,
                          fontWeight: 500,
                          color: "#64748b",
                        }}
                      >
                        <Image
                          width={16}
                          height={17}
                          style={{
                            marginRight: "0.5rem",
                            filter:
                              "invert(50%) sepia(13%) saturate(748%) hue-rotate(179deg) brightness(93%) contrast(88%)",
                            transition: "all 0.3s ease",
                            transform:
                              hoveredCard === index
                                ? "rotate(10deg)"
                                : "rotate(0)",
                          }}
                          src="/assets/img/coursesCards/icons/3.svg"
                          alt="level"
                        />
                        {levelLabel}
                      </div>
                    </div>

                    {/* Hover Arrow */}
                    <div
                      style={{
                        position: "absolute",
                        right: "1.5rem",
                        bottom: "1.5rem",
                        width: "24px",
                        height: "24px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "50%",
                        background: "rgba(59, 130, 246, 0.1)",
                        transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                        opacity: hoveredCard === index ? 1 : 0,
                        transform:
                          hoveredCard === index
                            ? "translateX(0)"
                            : "translateX(-10px)",
                      }}
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#3b82f6"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Global Animations */}
      <style jsx global>{`
        @keyframes rotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes pulse {
          0% {
            opacity: 0.7;
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0.7;
          }
        }
      `}</style>
    </section>
  );
}
