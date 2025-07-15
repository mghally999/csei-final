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
    <section className="layout-pt-lg layout-pb-lg custom-linear-white-top text-black">
      <div className="row justify-center text-center">
        <div className="col-auto">
          <div className="sectionTitle">
            <h2 className="title">
              Trending Programs for September Intake 2025
            </h2>
            <p className="subtitle">
              Explore our most popular programs across various disciplines
            </p>
          </div>
        </div>
      </div>

      <div className="tabs__controls flex-wrap pt-50 d-flex justify-center  js-tabs-controls">
        {categories.map((cat, i) => (
          <button
            key={i}
            onClick={() => setCategory(cat)}
            className={`tab-btn ${
              category === cat ? "active" : ""
            } transition-all`}
            type="button"
          >
            {cat}
          </button>
        ))}
      </div>

      <div
        className="pt-60 m-auto row y-gap-30 container pl-0 pr-0"
        data-aos="fade-right"
        data-aos-offset="80"
        data-aos-duration={800}
      >
        {filtered.map((course, index) => {
          const levelLabel = getLevelLabel(course.level);
          const displayTitle = getDisplayTitle(course);

          return (
            <div key={index} className="col-xl-3 col-lg-4 col-md-6">
              <div className="coursesCard -type-1 text-black">
                <div className="relative">
                  <div className="coursesCard__image overflow-hidden rounded-8">
                    <Image
                      width={530}
                      height={370}
                      className="w-1/1"
                      src={course.imageSrc}
                      alt={course.title}
                    />
                    <div className="coursesCard__image_overlay rounded-8" />
                  </div>
                  {course.professional && (
                    <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3">
                      <div className="px-15 rounded-200">
                        <span className="enhanced-badge text-11 lh-1 uppercase fw-900 text-white">
                          PROFESSIONAL
                        </span>
                      </div>
                    </div>
                  )}
                </div>

                <div className="h-100 pt-15">
                  <div className="text-14 lh-1 fw-600 mb-10 text-black">
                    {course.school}
                  </div>

                  <div className="text-17 lh-15 fw-800 text-black">
                    <Link
                      className="linkCustom text-black hover:underline"
                      href={course.href}
                    >
                      {displayTitle}
                    </Link>
                  </div>

                  <div className="row x-gap-10 y-gap-10 items-center pt-10">
                    <div className="col-auto">
                      <div className="d-flex items-center">
                        <Image
                          width={16}
                          height={17}
                          className="mr-8"
                          src="/assets/img/coursesCards/icons/2.svg"
                          alt="duration"
                        />
                        <div className="text-14 lh-1 text-black fw-500">
                          {course.duration}
                        </div>
                      </div>
                    </div>

                    <div className="col-auto">
                      <div className="d-flex items-center">
                        <Image
                          width={16}
                          height={17}
                          className="mr-8"
                          src="/assets/img/coursesCards/icons/3.svg"
                          alt="level"
                        />
                        <div className="text-14 lh-1 text-black fw-500">
                          {levelLabel}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Header + Tabs Styling */}
      <style jsx>{`
        .title {
          font-size: clamp(2rem, 5vw, 3.5rem);
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 2px;
          background: linear-gradient(90deg, #000, #2196f3, #000);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          position: relative;
          padding-bottom: 20px;
        }

        .title::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 4px;
          background: linear-gradient(90deg, #3b82f6, #000000);
          border-radius: 2px;
        }

        .subtitle {
          font-size: 18px;
          color: #666;
          max-width: 600px;
          margin: 30px auto;
        }

        .sectionTitle {
          max-width: 800px;
          margin: 0 auto;
          padding-bottom: 40px;
        }

        .tab-btn {
          position: relative;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid #ccc;
          backdrop-filter: blur(8px);
          padding: 10px 20px;
          font-weight: 600;
          font-size: 14px;
          color: #000;
          border-radius: 999px;
          cursor: pointer;
          transition: all 0.3s ease;
          overflow: hidden;
          z-index: 1;
        }

        .tab-btn::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 0;
          background: linear-gradient(90deg, #3b82f6, #000);
          transition: width 0.4s ease;
          z-index: -1;
        }

        .tab-btn:hover::before {
          width: 100%;
        }

        .tab-btn:hover {
          color: #fff;
        }

        .tab-btn.active {
          background: linear-gradient(90deg, #3b82f6, #000);
          color: white;
          border-color: transparent;
        }
      `}</style>
    </section>
  );
}
