"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function MegaMenuItem({ section, pathname }) {
  const [hoveredTitle, setHoveredTitle] = useState(null);
  const [clickedTitle, setClickedTitle] = useState(null);
  const dropdownRef = useRef(null);
  const isActive = (href) => pathname.startsWith(href);

  const brandColors = {
    primary: "#000000",
    secondary: "#1e40af",
    accent: "#f59e0b",
    dark: "#1f2937",
    light: "#f3f4f6",
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setClickedTitle(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleTitleClick = (label) => {
    setClickedTitle(clickedTitle === label ? null : label);
    setHoveredTitle(null);
  };

  return (
    <div
      className="col relative px-5 text-black cursor-pointer"
      ref={dropdownRef}
    >
      {/* Main Section Title */}
      <h4
        className="text-md font-bold mb-4 transition-colors duration-200 hover:text-[#2563eb]"
        style={{ color: brandColors.dark }}
      >
        {section.title || section.label}
      </h4>

      {/* Loop through section items */}
      {section.links?.map((item, i) => {
        const isParent = item.links?.length > 0;
        const label = item.title || item.label;

        return (
          <div
            key={i}
            className="relative mb-4 group"
            onMouseEnter={() => setHoveredTitle(label)}
            onMouseLeave={() => setHoveredTitle(null)}
          >
            {/* Top-Level Item */}
            <div className="relative inline-block">
              <span
                className={`block text-md font-medium transition-all duration-300 ${
                  isActive(item.href)
                    ? "text-[#2563eb]"
                    : "text-gray-800 hover:text-[#2563eb] custom-cursor"
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  if (isParent) {
                    handleTitleClick(label);
                  }
                }}
              >
                {label}
                {isParent && (
                  <span className="ml-10 text-black opacity-70 group-hover:opacity-100 transition-opacity">
                    <i className="icon-chevron-down text-xs"></i>
                  </span>
                )}
              </span>
              <span
                className={`absolute bottom-0 left-0 h-0.5 bg-[#2563eb] transition-all duration-300 ${
                  hoveredTitle === label || clickedTitle === label
                    ? "w-full"
                    : "w-0"
                }`}
              />
            </div>

            {/* Nested Dropdown */}
            {isParent && (hoveredTitle === label || clickedTitle === label) && (
              <ul
                className="absolute top-0 left-full ml-2 bg-white border border-gray-200 shadow-xl rounded-md w-[220px] z-50 overflow-hidden"
                style={{ animation: "slideIn 0.2s ease-out forwards" }}
              >
                {item.links.map((lvl, k) => (
                  <li
                    key={k}
                    className="px-4 py-2 transition-colors duration-150 text-md hover:font-semibold"
                    style={{
                      borderBottom: `1px solid ${brandColors.light}`,
                      cursor: "pointer",
                      backgroundColor: "white",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.backgroundColor =
                        brandColors.primary)
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.backgroundColor = "white")
                    }
                  >
                    <Link
                      href={lvl.href}
                      className={`block transition-colors duration-200 ${
                        isActive(lvl.href)
                          ? "text-white font-semibold"
                          : "text-gray-700 hover:text-white"
                      }`}
                      onClick={() => {
                        setClickedTitle(null);
                        setHoveredTitle(null);
                      }}
                    >
                      {lvl.label || lvl.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        );
      })}

      {/* Slide-in Animation */}
      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}
