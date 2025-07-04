"use client";

import React from "react";

export default function MegaMenuItem({ section, pathname, handleLinkClick }) {
  const isActive = (href) => pathname.startsWith(href);

  const renderLinks = (links = []) => {
    return links.map((item, i) => {
      const label = item.label || item.title || "Unnamed";

      // If this item has nested links, recurse
      if (item.links && item.links.length > 0) {
        return (
          <React.Fragment key={i}>{renderLinks(item.links)}</React.Fragment>
        );
      }

      // Otherwise, it's a final clickable item
      return (
        <li key={i} className="mb-5 custom-li fw-600">
          <a
            href={item.href}
            onClick={(e) => handleLinkClick(e, item.href)}
            className={`text-sm text-black ${
              isActive(item.href) ? "font-bold" : ""
            }`}
          >
            {label}
          </a>
        </li>
      );
    });
  };

  return (
    <div className="col-auto">
      <div className="mega__title">
        {section.href ? (
          <a
            href={section.href}
            onClick={(e) => handleLinkClick(e, section.href)}
            className={`text-black fw-500 ${
              isActive(section.href) ? "border-b border-black" : ""
            }`}
          >
            {section.title || section.label || "Untitled"}
          </a>
        ) : (
          <span className="text-black fw-900">
            {section.title || section.label || "Untitled"}
          </span>
        )}
      </div>
      <ul className="mt-10">{renderLinks(section.links)}</ul>
    </div>
  );
}
