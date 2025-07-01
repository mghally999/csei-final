"use client";
import { useState } from "react";
import Link from "next/link";

export default function MegaMenuItem({ section, pathname }) {
  const [hoveredTitle, setHoveredTitle] = useState(null);
  const isActive = (href) => pathname.startsWith(href);

  const brandColors = {
    primary: "#000000", // Brand black
    secondary: "#1e40af", // Optional darker blue
    accent: "#f59e0b", // Amber
    dark: "#1f2937", // Dark gray
    light: "#f3f4f6", // Light gray
  };

  return (
    <div className="col relative px-5 text-black cursor-pointer">
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
                    : "text-gray-800 hover:text-[#2563eb]"
                }`}
              >
                {label}
                {isParent && (
                  <span className="ml-2 text-black opacity-70 group-hover:opacity-100 transition-opacity">
                    <i className="icon-chevron-down text-xs"></i>
                  </span>
                )}
              </span>
              <span
                className={`absolute bottom-0 left-0 h-0.5 bg-[#2563eb] transition-all duration-300 ${
                  hoveredTitle === label ? "w-full" : "w-0"
                }`}
              />
            </div>

            {/* Nested Dropdown */}
            {isParent && hoveredTitle === label && (
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
