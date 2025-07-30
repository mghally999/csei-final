"use client";

import React, { useState, useEffect } from "react";
import { programs } from "@/data/programs";
import Link from "next/link";
import Image from "next/image";

const categories = [
  "All Categories",
  "Health & Social Care",
  "Business & Management",
  "Culinary Arts & Tourism",
  // "Information Technology",
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
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    // Set initial width
    setWindowWidth(window.innerWidth);

    // Handle window resize
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
          case "Culinary Arts & Tourism":
            return program.school === "Culinary Arts & Tourism Discipline";
          // case "Information Technology":
          //   return program.school === "Computing Discipline";
          default:
            return true;
        }
      });
      setFiltered(filteredData);
    }
  }, [category]);

  const getDisplayTitle = (program) =>
    program.credentialTitle || `${program.title} - ${program.level}`;

  // Determine grid columns based on screen width
  const getGridColumns = () => {
    if (windowWidth < 640) return "1fr";
    if (windowWidth < 768) return "1fr 1fr";
    if (windowWidth < 1024) return "1fr 1fr 1fr";
    return "1fr 1fr 1fr 1fr";
  };

  return (
    <section
      style={{
        padding: windowWidth < 768 ? "3rem 0" : "6rem 0",
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
            marginBottom: windowWidth < 768 ? "1.5rem" : "3rem",
            position: "relative",
          }}
        >
          <div
            style={{
              maxWidth: "900px",
              margin: "0 auto",
              padding: "0 1rem",
              marginBottom: windowWidth < 768 ? "1rem" : "2rem",
            }}
          >
            <h2
              style={{
                fontSize:
                  windowWidth < 640
                    ? "1.75rem"
                    : windowWidth < 768
                    ? "2rem"
                    : "clamp(1.75rem, 5vw, 3.5rem)",
                fontWeight: 800,
                textTransform: "uppercase",
                letterSpacing: "1px",
                background: "linear-gradient(90deg, #000, #3b82f6, #000)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
                position: "relative",
                paddingBottom: windowWidth < 768 ? "1rem" : "1.5rem",
                margin: "0 0 0.5rem 0",
                lineHeight: 1.2,
                textShadow: "0 2px 4px rgba(0,0,0,0.1)",
              }}
            >
              Trending Programs for September Intake 2025
            </h2>
            <p
              style={{
                fontSize:
                  windowWidth < 640
                    ? "0.875rem"
                    : windowWidth < 768
                    ? "1rem"
                    : "clamp(1rem, 2vw, 1.25rem)",
                color: "#64748b",
                margin: windowWidth < 768 ? "0.5rem 0 0 0" : "1rem 0 0 0",
                lineHeight: 1.6,
                maxWidth: "700px",
                textAlign: windowWidth < 640 ? "center" : "end",
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
            justifyContent: windowWidth < 640 ? "center" : "center",
            gap: "0.75rem",
            padding: windowWidth < 768 ? "0.5rem 0 1.5rem 0" : "1rem 0 3rem 0",
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
                padding: windowWidth < 640 ? "0.5rem 1rem" : "0.75rem 1.5rem",
                fontWeight: 600,
                fontSize:
                  windowWidth < 640
                    ? "0.7rem"
                    : "clamp(0.75rem, 2vw, 0.875rem)",
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
            gridTemplateColumns:
              windowWidth < 640
                ? "1fr"
                : windowWidth < 768
                ? "1fr 1fr"
                : windowWidth < 1024
                ? "1fr 1fr 1fr"
                : "1fr 1fr 1fr 1fr",
            gap: windowWidth < 640 ? "1.5rem" : "2rem",
            padding: "1rem 0",
            margin: "0 auto",
            position: "relative",
            zIndex: 1,
            paddingLeft: windowWidth < 640 ? "0" : "5vw",
            paddingRight: windowWidth < 640 ? "0" : "5vw",
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
                      height: windowWidth < 640 ? "180px" : "220px",
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
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
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
                      padding: windowWidth < 640 ? "1rem" : "1.5rem",
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
                        marginBottom: windowWidth < 640 ? "0.5rem" : "0.75rem",
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
                        fontSize: windowWidth < 640 ? "0.9375rem" : "1rem",
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
                        gap: windowWidth < 640 ? "0.75rem" : "1rem",
                        alignItems: "center",
                        paddingTop: "0.75rem",
                        borderTop: "1px solid rgba(226, 232, 240, 0.7)",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          fontSize:
                            windowWidth < 640 ? "0.8125rem" : "0.875rem",
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
                          fontSize:
                            windowWidth < 640 ? "0.8125rem" : "0.875rem",
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
                        right: windowWidth < 640 ? "1rem" : "1.5rem",
                        bottom: windowWidth < 640 ? "1rem" : "1.5rem",
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
