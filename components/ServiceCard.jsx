// components/common/CourseCard.jsx
"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const cardStyles = {
  container: {
    position: "relative",
    overflow: "hidden",
    borderRadius: "12px",
    backgroundColor: "#fff",
    boxShadow: "0 0 20px rgba(0,0,0,0.05)",
    transition: "transform 0.3s ease",
    cursor: "pointer",
  },
  imageWrapper: {
    overflow: "hidden",
    height: "220px",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "transform 0.4s ease",
  },
  content: {
    padding: "16px",
    borderTop: "2px solid #eee",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: "18px",
    fontWeight: "600",
    marginBottom: "4px",
    color: "#1c1c1c",
  },
  subtitle: {
    fontSize: "14px",
    color: "#555",
  },
  hoverOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
    background:
      "linear-gradient(rgba(30,64,175,0.75), rgba(30,64,175,0.75)), url('/images/services/service-bg.png') center/cover",
    color: "#fff",
    padding: "20px",
    transform: "translateY(100%)",
    transition: "all 0.4s ease",
    display: "flex",
    alignItems: "flex-end",
    zIndex: 10,
  },
};

const CourseCard = ({
  title,
  subtitle,
  image,
  href,
  description,
  lessonCount,
  duration,
  level,
  professional,
}) => {
  return (
    <Link href={href} passHref legacyBehavior>
      <a
        style={cardStyles.container}
        className="card-hover group"
        onMouseEnter={(e) => {
          e.currentTarget.querySelector(".hoverText").style.transform =
            "translateY(0)";
          e.currentTarget.querySelector(".hoverText").style.opacity = "1";
          e.currentTarget.querySelector("img").style.transform = "scale(1.05)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.querySelector(".hoverText").style.transform =
            "translateY(100%)";
          e.currentTarget.querySelector(".hoverText").style.opacity = "0";
          e.currentTarget.querySelector("img").style.transform = "scale(1)";
        }}
      >
        <div style={cardStyles.imageWrapper}>
          <Image
            src={image}
            alt={title}
            layout="responsive"
            width={500}
            height={300}
          />
        </div>

        <div style={cardStyles.content}>
          <h3 style={cardStyles.title}>{title}</h3>
          <p style={cardStyles.subtitle}>{subtitle}</p>
          <div className="mt-2 text-sm text-gray-600">
            <p>{level}</p>
            <p>{lessonCount} Lessons</p>
            <p>
              {Math.floor(duration / 60)}h {duration % 60}m
            </p>
            {professional && (
              <p className="mt-2 inline-block px-2 py-1 bg-blue-600 text-white text-xs rounded">
                PROFESSIONAL
              </p>
            )}
          </div>
        </div>

        <div className="hoverText" style={cardStyles.hoverOverlay}>
          <p>{description}</p>
        </div>
      </a>
    </Link>
  );
};

export default CourseCard;
