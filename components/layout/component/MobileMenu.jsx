"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { menuList } from "@/data/menu";
import MobileFooter from "./MobileFooter";

export default function MobileMenu({ setActiveMobileMenu, activeMobileMenu }) {
  const pathname = usePathname();
  const [expandedPaths, setExpandedPaths] = useState(new Set());

  const togglePath = (pathKey) => {
    setExpandedPaths((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(pathKey)) {
        newSet.delete(pathKey);
      } else {
        newSet.add(pathKey);
      }
      return newSet;
    });
  };

  const isPathExpanded = (pathKey) => expandedPaths.has(pathKey);

  // Expand current path on load
  useEffect(() => {
    const findPaths = (items, basePath = "") => {
      for (const item of items) {
        const fullPath = `${basePath} > ${item.title || item.label}`;
        if (item.href && pathname.startsWith(item.href)) {
          setExpandedPaths(
            new Set(
              fullPath
                .split(" > ")
                .map((_, i, arr) => arr.slice(0, i + 1).join(" > "))
            )
          );
          break;
        }
        if (item.links) findPaths(item.links, fullPath);
      }
    };
    findPaths(menuList);
  }, [pathname]);

  const renderMenu = (items, pathPrefix = "") => {
    return items.map((item, i) => {
      const title = item.title || item.label || "Untitled";
      const links = item.links || item.dropdown || [];
      const hasChildren = links.length > 0;
      const pathKey = pathPrefix ? `${pathPrefix} > ${title}` : title;
      const isExpanded = isPathExpanded(pathKey);
      const isActive = item.href && pathname.startsWith(item.href);

      return (
        <div key={pathKey + i} className="menu-item mb-2">
          <div className="title flex items-center justify-between">
            {item.href && !hasChildren ? (
              <Link
                href={item.href}
                className={`w-full ${isActive ? "activeMenu" : "inActiveMenu"}`}
                onClick={() => setActiveMobileMenu(false)}
              >
                {title}
              </Link>
            ) : (
              <span
                className={`w-full ${isActive ? "activeMenu" : "inActiveMenu"}`}
                onClick={() => hasChildren && togglePath(pathKey)}
              >
                {title}
              </span>
            )}

            {hasChildren && (
              <i
                className={`icon-chevron-right text-13 ml-10 transition-transform ${
                  isExpanded ? "rotate-90" : ""
                }`}
                onClick={() => togglePath(pathKey)}
              />
            )}
          </div>

          {hasChildren && isExpanded && (
            <div className="ml-4 mt-2">{renderMenu(links, pathKey)}</div>
          )}
        </div>
      );
    });
  };

  return (
    <div
      className={`header-menu js-mobile-menu-toggle ${
        activeMobileMenu ? "-is-el-visible" : ""
      }`}
    >
      <div className="header-menu__content">
        <div className="mobile-bg js-mobile-bg" />
        <div className="mobileMenu text-dark-1">{renderMenu(menuList)}</div>
        <MobileFooter />
      </div>

      <div
        className="header-menu-close"
        data-el-toggle=".js-mobile-menu-toggle"
        onClick={() => setActiveMobileMenu(false)}
      >
        <div className="size-40 d-flex items-center justify-center rounded-full bg-white">
          <div className="icon-close text-dark-1 text-16" />
        </div>
      </div>

      <div
        className="header-menu-bg"
        onClick={() => setActiveMobileMenu(false)}
      />
    </div>
  );
}
