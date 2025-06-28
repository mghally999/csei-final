"use client";

import React, { useState, useEffect } from "react";
import { programs } from "@/data/programs";
import Header from "@/components/layout/headers/Header";
import FooterOne from "@/components/layout/footers/FooterOne";
import Preloader from "@/components/common/Preloader";
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
      return "Expert";
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
      let filteredData = [];

      switch (category) {
        case "Health & Social Care":
          filteredData = enhancedPrograms.filter(
            (program) => program.school === "School of Health Science"
          );
          break;
        case "Business & Management":
          filteredData = enhancedPrograms.filter(
            (program) => program.school === "School of Business"
          );
          break;
        case "Travel & Tourism":
          filteredData = enhancedPrograms.filter(
            (program) =>
              program.school === "School of Culinary Arts & Tourism" &&
              (program.category?.includes("Tourism") ||
                program.category?.includes("Hospitality"))
          );
          break;
        case "Culinary Arts":
          filteredData = enhancedPrograms.filter(
            (program) =>
              program.school === "School of Culinary Arts & Tourism" &&
              program.category === "Professional Courses"
          );
          break;
        case "Information Technology":
          filteredData = enhancedPrograms.filter(
            (program) => program.school === "School of Computing"
          );
          break;
        default:
          filteredData = enhancedPrograms;
      }

      setFiltered(filteredData);
    }
  }, [category]);

  return (
    <>
      <div className="main-content">
        <Preloader />
      </div>

      <Header />

      <section className="layout-pt-lg layout-pb-lg">
        <div className="row justify-center text-center">
          <div className="col-auto">
            <div className="sectionTitle">
              <h2 className="sectionTitle__title sm:text-24">
                Trending Programs for September Intake 2025
              </h2>
              <p className="sectionTitle__text">
                Explore our most popular programs across various disciplines
              </p>
            </div>
          </div>
        </div>

        <div className="tabs__controls flex-wrap pt-50 d-flex justify-center x-gap-10 js-tabs-controls">
          {categories.map((cat, i) => (
            <div onClick={() => setCategory(cat)} key={i}>
              <button
                className={`tabs__button px-15 py-8 rounded-8 js-tabs-button ${
                  category === cat ? "tabActive" : ""
                }`}
                data-tab-target=".-tab-item-2"
                type="button"
              >
                {cat}
              </button>
            </div>
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
            return (
              <div key={index} className="col-xl-3 col-lg-4 col-md-6">
                <div className="coursesCard -type-1">
                  <div className="relative">
                    <div className="coursesCard__image overflow-hidden rounded-8">
                      <Image
                        width={530}
                        height={370}
                        className="w-1/1"
                        src={course.imageSrc}
                        alt={course.title}
                      />
                      <div className="coursesCard__image_overlay rounded-8"></div>
                    </div>
                    <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3">
                      {course.professional && (
                        <div>
                          <div className="px-15 rounded-200 bg-custom-navyblue">
                            <span className="text-11 lh-1 uppercase fw-500 text-white">
                              PROFESSIONAL
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="h-100 pt-15">
                    <div className="text-14 lh-1 text-dark-1 fw-500 mb-10">
                      {course.school}
                    </div>

                    <div className="text-17 lh-15 fw-500 text-dark-1">
                      <Link className="linkCustom" href={course.href}>
                        {course.category}
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
                          <div className="text-14 lh-1">{course.duration}</div>
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
                          <div className="text-14 lh-1">{levelLabel}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <FooterOne />
    </>
  );
}
