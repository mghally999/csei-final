"use client";

import React from "react";

export default function MegaMenuItem({ section, pathname, handleLinkClick }) {
  const isActive = (href) => pathname.startsWith(href);

  const renderLinks = (links = []) => {
    return links.map((item, i) => {
      const label = item.label || item.title || "Unnamed";

      if (item.links && item.links.length > 0) {
        return (
          <div key={i} className="mb-6">
            <div className="text-sm font-semibold text-black mb-2 border-b border-gray-200 pb-1">
              {label}
            </div>
            <ul>
              {item.links.map((child, j) => (
                <li key={j} className="mb-2 custom-li">
                  <a
                    href={child.href}
                    onClick={(e) => handleLinkClick(e, child.href)}
                    style={{
                      color: pathname.startsWith(child.href)
                        ? "#e05500"
                        : "black",
                      fontWeight: pathname.startsWith(child.href)
                        ? "900"
                        : "normal",
                      padding: "6px 10px",
                      display: "inline-block",
                      borderRadius: "4px",
                      transition: "all 0.3s",
                    }}
                  >
                    {child.title || child.label || "Untitled"}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        );
      }

      return (
        <li key={i} className="mb-5">
          <a
            href={item.href}
            onClick={(e) => handleLinkClick(e, item.href)}
            style={{
              color: isActive(item.href) ? "#e05500" : "black",
              fontWeight: isActive(item.href) ? "900" : "normal",
              padding: "6px 0",
              display: "inline-block",
              transition: "all 0.3s",
            }}
          >
            {label}
          </a>
        </li>
      );
    });
  };

  return (
    <div
      className="px-6"
      style={{
        flex: 1,
        minWidth: "0",
        maxWidth: "100%",
      }}
    >
      <div className="mb-4">
        {section.href ? (
          <a
            href={section.href}
            onClick={(e) => handleLinkClick(e, section.href)}
            style={{
              color: pathname.startsWith(section.href) ? "#e05500" : "black",
              fontWeight: pathname.startsWith(section.href) ? "900" : "600",
            }}
          >
            {section.title || section.label || "Untitled"}
          </a>
        ) : (
          <span className="text-base font-bold text-black">
            {section.title || section.label || "Untitled"}
          </span>
        )}
      </div>

      <div>{renderLinks(section.links)}</div>
    </div>
  );
}
