"use client";

import { usePathname } from "next/navigation";
import { prices } from "@/data/courses";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useContextElement } from "@/context/Context";
import PaginationTwo from "../../components/common/PaginationTwo";
import { programs } from "@/data/programs";
import { motion, AnimatePresence } from "framer-motion";
import { FiCompass, FiAward, FiStar, FiLayers, FiFilter } from "react-icons/fi";

const categories = [
  "All Categories",
  "Health & Social Care",
  "Business & Management",
  "Travel & Tourism",
  "Culinary Arts",
  "Information Technology",
];

const CourseListOne = () => {
  const pathname = usePathname();
  const isProfessionalRoute = pathname.includes("/professional-courses");

  // Enhanced programs data
  const enhancedPrograms = programs.map((program) => ({
    ...program,
    professional: program.href.includes("/professional-courses/"),
    duration: program.duration || "Duration not specified",
    level: program.level || "Level not specified",
  }));

  const [coursesData] = useState(() => {
    return enhancedPrograms.map((program) => ({
      id: program.id,
      title: program.credentialTitle || program.title,
      href: program.href,
      category: program.category || program.school,
      authorName: program.authorName,
      rating: program.rating,
      paid: program.paid,
      level: program.level,
      duration: program.duration,
      imageSrc: program.imageSrc,
      discountedPrice: program.discountedPrice,
      lessonCount: program.lessonCount,
      popular: program.popular,
      school: program.school,
      professional: program.professional,
    }));
  });

  // State management
  const [activeFilter, setActiveFilter] = useState("all");
  const [filterCategories, setFilterCategories] = useState([]);
  const [filterPrice, setFilterPrice] = useState("All");
  const [filterLevels, setFilterLevels] = useState([]);
  const [filterProfessional, setFilterProfessional] =
    useState(isProfessionalRoute);
  const [currentSortingOption, setCurrentSortingOption] = useState("Default");
  const [filteredData, setFilteredData] = useState([]);
  const [sortedFilteredData, setSortedFilteredData] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [hoveredCourse, setHoveredCourse] = useState(null);
  const [viewMode, setViewMode] = useState("grid");
  const [activeCategory, setActiveCategory] = useState("All Categories");

  // Calculate professional count
  const professionalCount = enhancedPrograms.filter(
    (p) => p.professional
  ).length;

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

  // Filtering logic
  useEffect(() => {
    let refItems = coursesData
      .filter((elm) => {
        if (filterPrice == "All") return true;
        if (filterPrice == "Free") return !elm.paid;
        if (filterPrice == "Paid") return elm.paid;
        return true;
      })
      .filter((elm) => {
        if (isProfessionalRoute || filterProfessional) {
          return elm.professional === true;
        }
        return true;
      });

    // Apply category filter
    if (activeCategory !== "All Categories") {
      refItems = refItems.filter((program) => {
        switch (activeCategory) {
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
    }

    let filteredArrays = [];

    if (filterCategories.length > 0) {
      const filtered = refItems.filter(
        (elm) =>
          filterCategories.includes(elm.category) ||
          filterCategories.includes(elm.school)
      );
      filteredArrays.push(filtered);
    }
    if (filterLevels.length > 0) {
      const filtered = refItems.filter((elm) =>
        filterLevels.some((level) => elm.level.includes(level))
      );
      filteredArrays.push(filtered);
    }

    const commonItems =
      filteredArrays.length > 0
        ? refItems.filter((item) =>
            filteredArrays.every((array) => array.includes(item))
          )
        : refItems;

    setFilteredData(commonItems);
    setPageNumber(1);
  }, [
    filterCategories,
    filterPrice,
    filterLevels,
    filterProfessional,
    coursesData,
    isProfessionalRoute,
    activeCategory,
  ]);

  // Sorting logic
  useEffect(() => {
    let sortedData = [...filteredData];

    switch (currentSortingOption) {
      case "Rating (asc)":
        sortedData.sort((a, b) => a.rating - b.rating);
        break;
      case "Rating (dsc)":
        sortedData.sort((a, b) => b.rating - a.rating);
        break;
      case "Price (asc)":
        sortedData.sort((a, b) => a.discountedPrice - b.discountedPrice);
        break;
      case "Price (dsc)":
        sortedData.sort((a, b) => b.discountedPrice - a.discountedPrice);
        break;
      case "Duration (asc)":
        sortedData.sort((a, b) => a.duration - b.duration);
        break;
      case "Duration (dsc)":
        sortedData.sort((a, b) => b.duration - a.duration);
        break;
      default:
        // Default sorting (perhaps by popularity or newest)
        break;
    }

    setSortedFilteredData(sortedData);
  }, [currentSortingOption, filteredData]);

  // Filter handlers
  const handleFilterCategories = (item) => {
    if (filterCategories.includes(item)) {
      setFilterCategories(filterCategories.filter((elm) => elm !== item));
    } else {
      setFilterCategories([...filterCategories, item]);
    }
  };

  const handleFilterProfessional = () => {
    if (!isProfessionalRoute) {
      setFilterProfessional(!filterProfessional);
    }
  };

  const programLevels = [
    ...new Set(
      enhancedPrograms.map((p) =>
        p.level.includes("Level")
          ? p.level.split(" ")[0] + " " + p.level.split(" ")[1]
          : p.level
      )
    ),
  ].map((level) => ({
    title: level,
    count: enhancedPrograms.filter((p) => p.level.includes(level)).length,
  }));

  // Constellation view calculations
  const constellationCourses = sortedFilteredData.slice(0, 12);
  const constellationPositions = constellationCourses.map((_, i) => {
    const angle = (i / constellationCourses.length) * Math.PI * 2;
    const distance = 150 + Math.random() * 50;
    return {
      x: Math.cos(angle) * distance,
      y: Math.sin(angle) * distance,
      size:
        8 +
        (constellationCourses[i].popular ? 4 : 0) +
        (constellationCourses[i].professional ? 4 : 0),
    };
  });

  return (
    <div className="cosmic-explorer custom-padding">
      {/* Animated cosmic background */}
      <div className="cosmic-bg">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="star"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 0.8, 0],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 5 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${1 + Math.random() * 3}px`,
              height: `${1 + Math.random() * 3}px`,
            }}
          />
        ))}
      </div>

      {/* Header */}
      <motion.header
        className="cosmic-header"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container">
          <motion.div className="title-wrapper" whileHover={{ scale: 1.02 }}>
            <h1 className="cosmic-title">
              <span className="title-gradient">Explore</span> Our Programs
              Universe
            </h1>
            <p className="cosmic-subtitle">
              Navigate through constellations of learning opportunities
            </p>
          </motion.div>

          {/* Category tabs */}
          <div className="tabs__controls flex-wrap pt-40 d-flex justify-center js-tabs-controls">
            {categories.map((cat, i) => (
              <motion.button
                key={i}
                onClick={() => {
                  setActiveCategory(cat);
                  setActiveFilter("all");
                }}
                className={`cosmic-tab-btn ${
                  activeCategory === cat ? "active" : ""
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="button"
              >
                {cat}
              </motion.button>
            ))}
          </div>

          {/* Quick filters */}
          <div className="cosmic-quick-filters">
            <motion.button
              className={`cosmic-filter-btn ${
                activeFilter === "all" ? "active" : ""
              }`}
              onClick={() => {
                setFilterCategories([]);
                setFilterProfessional(false);
                setFilterPrice("All");
                setFilterLevels([]);
                setActiveFilter("all");
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiCompass className="filter-icon" />
              All Courses
            </motion.button>

            <motion.button
              className={`cosmic-filter-btn ${
                activeFilter === "professional" ? "active" : ""
              }`}
              onClick={() => {
                setFilterProfessional(true);
                setActiveFilter("professional");
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiAward className="filter-icon" />
              Professional ({professionalCount})
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Main content */}
      <main className="cosmic-main">
        <div className="container">
          {/* Constellation View */}
          {viewMode === "constellation" && (
            <div className="constellation-view">
              <div className="constellation-container">
                {constellationCourses.map((course, i) => (
                  <motion.div
                    key={course.id}
                    className="constellation-node"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      x: constellationPositions[i].x,
                      y: constellationPositions[i].y,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 30,
                      delay: i * 0.1,
                    }}
                    whileHover={{ scale: 1.2 }}
                    onHoverStart={() => setHoveredCourse(course.id)}
                    onHoverEnd={() => setHoveredCourse(null)}
                    style={{
                      width: `${constellationPositions[i].size}px`,
                      height: `${constellationPositions[i].size}px`,
                      background: course.professional
                        ? "linear-gradient(135deg, #000000, #000000)"
                        : "linear-gradient(135deg, #00BFFF, #1E90FF)",
                    }}
                  >
                    {hoveredCourse === course.id && (
                      <motion.div
                        className="node-tooltip"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                      >
                        <h4>{course.title}</h4>
                        <p>{course.school}</p>
                        <Link href={course.href} className="node-link">
                          Explore →
                        </Link>
                      </motion.div>
                    )}
                  </motion.div>
                ))}

                {/* Constellation lines */}
                <svg className="constellation-lines" width="100%" height="100%">
                  {constellationPositions.map((pos1, i) => {
                    return constellationPositions
                      .slice(i + 1)
                      .map((pos2, j) => {
                        if (Math.random() > 0.7) {
                          // Only connect some nodes
                          return (
                            <line
                              key={`${i}-${j + i + 1}`}
                              x1={pos1.x + 150}
                              y1={pos1.y + 150}
                              x2={pos2.x + 150}
                              y2={pos2.y + 150}
                              stroke="rgba(138, 43, 226, 0.3)"
                              strokeWidth="1"
                            />
                          );
                        }
                        return null;
                      });
                  })}
                </svg>
              </div>
            </div>
          )}

          {/* Grid View */}
          {viewMode === "grid" && (
            <>
              {/* Course grid */}
              <div className="cosmic-grid">
                {sortedFilteredData
                  .slice((pageNumber - 1) * 12, pageNumber * 12)
                  .map((course, i) => (
                    <motion.div
                      key={course.id}
                      className="cosmic-course-card"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05 }}
                      whileHover={{
                        y: -5,
                        boxShadow: "0 15px 30px rgba(0,0,0,0.3)",
                      }}
                    >
                      <div className="course-card-inner">
                        <div className="course-image-wrapper">
                          <Image
                            width={400}
                            height={250}
                            src={course.imageSrc}
                            alt={course.title}
                            className="course-image"
                          />

                          {course.professional && (
                            <div className="professional-badge">
                              <FiAward />
                              Pro
                            </div>
                          )}
                        </div>

                        <div className="course-content">
                          <div className="course-school">{course.school}</div>
                          <h3 className="course-title">
                            <Link href={course.href}>{course.title}</Link>
                          </h3>
                          <div className="course-meta">
                            <span className="course-level">
                              {getLevelLabel(course.level)}
                            </span>
                            <span className="course-duration">
                              {course.duration}
                            </span>
                          </div>

                          <div className="course-footer">
                            <Link href={course.href} className="explore-btn">
                              Explore
                            </Link>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
              </div>
            </>
          )}

          {/* Pagination */}
          {sortedFilteredData.length > 0 && (
            <div className="cosmic-pagination">
              <PaginationTwo
                pageNumber={pageNumber}
                setPageNumber={setPageNumber}
                data={sortedFilteredData}
                pageCapacity={12}
              />
            </div>
          )}
        </div>
      </main>

      {/* Global styles */}
      <style jsx global>{`
        .cosmic-explorer {
          position: relative;
          min-height: 100vh;
          background: linear-gradient(135deg, #000000 0%, #000000 100%);
          color: #fff;
          font-family: "Inter", sans-serif;
          overflow-x: hidden;
        }

        .cosmic-bg {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
          overflow: hidden;
        }

        .star {
          position: absolute;
          background-color: #fff;
          border-radius: 50%;
          filter: blur(0.5px);
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          position: relative;
          z-index: 1;
        }

        .cosmic-header {
          padding: 60px 0 40px;
          text-align: center;
          position: relative;
        }

        .title-wrapper {
          display: inline-block;
          margin-bottom: 30px;
          cursor: default;
        }

        .cosmic-title {
          font-size: clamp(2rem, 5vw, 3.5rem);
          font-weight: 800;
          margin-bottom: 10px;
          line-height: 1.2;
          background: linear-gradient(90deg, #8a2be2, #00bfff);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .title-gradient {
          background: linear-gradient(90deg, #00bfff, #8a2be2);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .cosmic-subtitle {
          font-size: 1.2rem;
          opacity: 0.8;
          margin: 0;
        }

        /* Tab buttons */
        .tabs__controls {
          margin-bottom: 30px;
          gap: 15px;
        }

        .cosmic-tab-btn {
          position: relative;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(8px);
          padding: 12px 20px;
          font-weight: 600;
          color: white;
          border-radius: 50px;
          cursor: pointer;
          transition: all 0.3s ease;
          overflow: hidden;
          z-index: 1;
          font-size: 14px;
        }

        .cosmic-tab-btn::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 0;
          background: linear-gradient(90deg, #8a2be2, #00bfff);
          transition: width 0.4s ease;
          z-index: -1;
        }

        .cosmic-tab-btn:hover::before {
          width: 100%;
        }

        .cosmic-tab-btn:hover {
          color: #fff;
          border-color: transparent;
        }

        .cosmic-tab-btn.active {
          background: linear-gradient(90deg, #8a2be2, #00bfff);
          color: white;
          border-color: transparent;
          box-shadow: 0 5px 15px rgba(138, 43, 226, 0.4);
        }

        .cosmic-quick-filters {
          display: flex;
          justify-content: center;
          gap: 15px;
          flex-wrap: wrap;
          margin-top: 30px;
        }

        .cosmic-filter-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 20px;
          border-radius: 50px;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: white;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          backdrop-filter: blur(5px);
        }

        .cosmic-filter-btn:hover {
          background: rgba(255, 255, 255, 0.2);
        }

        .cosmic-filter-btn.active {
          background: linear-gradient(90deg, #8a2be2, #00bfff);
          border-color: transparent;
          box-shadow: 0 5px 15px rgba(138, 43, 226, 0.4);
        }

        .filter-icon {
          font-size: 1.1rem;
        }

        .cosmic-main {
          padding: 40px 0 80px;
        }

        .view-mode-toggle {
          display: flex;
          justify-content: center;
          gap: 15px;
          margin-bottom: 40px;
        }

        .view-mode-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          border-radius: 50px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: white;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .view-mode-btn:hover {
          background: rgba(255, 255, 255, 0.1);
        }

        .view-mode-btn.active {
          background: linear-gradient(90deg, #8a2be2, #00bfff);
          border-color: transparent;
          box-shadow: 0 5px 15px rgba(138, 43, 226, 0.4);
        }

        /* Constellation View Styles */
        .constellation-view {
          margin: 60px 0;
        }

        .constellation-container {
          position: relative;
          width: 100%;
          height: 400px;
          margin: 0 auto;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .constellation-node {
          position: absolute;
          border-radius: 50%;
          cursor: pointer;
          z-index: 2;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: all 0.3s ease;
          box-shadow: 0 0 10px rgba(138, 43, 226, 0.5);
        }

        .node-tooltip {
          position: absolute;
          bottom: calc(100% + 15px);
          left: 50%;
          transform: translateX(-50%);
          background: rgba(15, 5, 36, 0.9);
          padding: 15px;
          border-radius: 10px;
          width: 200px;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
          z-index: 10;
        }

        .node-tooltip h4 {
          margin: 0 0 8px;
          font-size: 1rem;
          color: #fff;
        }

        .node-tooltip p {
          margin: 0 0 12px;
          font-size: 0.9rem;
          opacity: 0.8;
        }

        .node-link {
          display: inline-block;
          padding: 5px 10px;
          background: rgba(138, 43, 226, 0.2);
          border-radius: 5px;
          color: #8a2be2;
          font-weight: 600;
          font-size: 0.9rem;
          transition: all 0.3s ease;
        }

        .node-link:hover {
          background: rgba(138, 43, 226, 0.4);
          color: #fff;
        }

        .constellation-lines {
          position: absolute;
          top: 0;
          left: 0;
        }

        /* Grid View Styles */
        .cosmic-sorting {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 30px;
          justify-content: flex-end;
        }

        .sorting-label {
          display: flex;
          align-items: center;
          gap: 8px;
          opacity: 0.8;
        }

        .cosmic-sort-select {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: white;
          padding: 8px 15px;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .cosmic-sort-select:hover {
          background: rgba(255, 255, 255, 0.2);
        }

        .cosmic-sort-select:focus {
          outline: none;
          box-shadow: 0 0 0 2px rgba(138, 43, 226, 0.5);
        }

        .cosmic-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 25px;
        }

        .cosmic-course-card {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 15px;
          overflow: hidden;
          transition: all 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(5px);
        }

        .course-card-inner {
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .course-image-wrapper {
          position: relative;
          height: 180px;
          overflow: hidden;
        }

        .course-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .cosmic-course-card:hover .course-image {
          transform: scale(1.05);
        }

        .popular-badge,
        .professional-badge {
          position: absolute;
          top: 15px;
          display: flex;
          align-items: center;
          gap: 5px;
          padding: 5px 10px;
          border-radius: 50px;
          font-size: 0.8rem;
          font-weight: 600;
        }

        .popular-badge {
          left: 15px;
          background: rgba(255, 215, 0, 0.2);
          color: gold;
          border: 1px solid rgba(255, 215, 0, 0.3);
        }

        .professional-badge {
          right: 15px;
          background: rgba(138, 43, 226, 0.2);
          color: #8a2be2;
          border: 1px solid rgba(138, 43, 226, 0.3);
        }

        .course-content {
          padding: 20px;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
        }

        .course-school {
          font-size: 0.9rem;
          color: #ffffff;
          margin-bottom: 8px;
          font-weight: 600;
        }

        .course-title {
          font-size: 1.2rem;
          margin: 0 0 15px;
          line-height: 1.4;
        }

        .course-title a {
          color: white;
          text-decoration: none;
          background: linear-gradient(90deg, white, white);
          background-size: 0% 2px;
          background-repeat: no-repeat;
          background-position: left bottom;
          transition: background-size 0.3s ease;
        }

        .course-title a:hover {
          background-size: 100% 2px;
        }

        .course-meta {
          display: flex;
          gap: 15px;
          margin-bottom: 20px;
          font-size: 0.9rem;
          opacity: 0.8;
        }

        .course-footer {
          margin-top: auto;
          margin-left: auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .course-price {
          font-weight: 700;
        }

        .current-price {
          color: #00bfff;
        }

        .original-price {
          text-decoration: line-through;
          opacity: 0.6;
          margin-left: 8px;
          font-size: 0.9rem;
        }

        .free-price {
          color: #7cfc00;
        }

        .explore-btn {
          padding: 8px 15px;
          background: linear-gradient(90deg, #8a2be2, #00bfff);
          border-radius: 8px;
          color: white;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .explore-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(138, 43, 226, 0.4);
        }

        .cosmic-pagination {
          margin-top: 50px;
          display: flex;
          justify-content: center;
        }

        /* Responsive styles */
        @media (max-width: 768px) {
          .cosmic-quick-filters,
          .tabs__controls {
            gap: 10px;
          }

          .cosmic-filter-btn,
          .cosmic-tab-btn {
            padding: 10px 15px;
            font-size: 0.9rem;
          }

          .cosmic-grid {
            grid-template-columns: 1fr;
          }

          .constellation-container {
            height: 300px;
          }
        }
      `}</style>
    </div>
  );
};

export default CourseListOne;
