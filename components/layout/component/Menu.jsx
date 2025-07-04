"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import MobileFooter from "./MobileFooter";
import { menuList } from "@/data/menu";
import { usePathname } from "next/navigation";
import MegaMenuItem from "@/components/MegaMenuItem";

export default function Menu({
  allClasses,
  headerPosition,
  setActiveMobileMenu,
}) {
  const pathname = usePathname();
  const router = useRouter();
  const [activeMenu, setActiveMenu] = useState("");

  useEffect(() => {
    const pathSection = pathname.split("/")[1];

    const findMatch = (items, parentTitle) => {
      for (const item of items) {
        if (item.href && item.href.split("/")[1] === pathSection) {
          setActiveMenu(parentTitle);
          return true;
        }

        if (item.links && item.links.length > 0) {
          if (findMatch(item.links, parentTitle)) return true;
        }
      }
      return false;
    };

    for (const menu of menuList) {
      if (menu.href && menu.href.split("/")[1] === pathSection) {
        setActiveMenu(menu.title || menu.label || "Untitled");
        break;
      }

      const links = menu.links || menu.dropdown || [];
      if (findMatch(links, menu.title || menu.label || "Untitled")) break;
    }
  }, [pathname]);

  const isActive = (href) => pathname.startsWith(href);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setActiveMobileMenu(false);
    // Force a full page refresh
    window.location.href = href;
  };

  const noDropdownTitles = ["Home", "Student Life", "About Us"];
  const singleDropdownTitles = [
    "Academics",
    "Apply Now",
    "Life With CSEI",
    "Placements",
  ];

  const renderNestedLinks = (links) => (
    <ul className="mega__list min-w-[200px] whitespace-nowrap">
      {links.map((item, i) => {
        const isParent = !item.href && item.links?.length > 0;
        const label = item.label || item.title || "Unnamed";

        return (
          <li key={i} className="group relative px-10 py-2 hover:bg-gray-50">
            {/* Label or Link */}
            {item.href ? (
              <a
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href)}
                className={`block fw-600 text-sm text-black ${
                  isActive(item.href) ? "border-b border-black" : ""
                }`}
              >
                {label}
              </a>
            ) : (
              <span className="block fw-600 text-sm text-black cursor-default">
                {label}
                {isParent && (
                  <i className="icon-chevron-right text-13 ml-2 text-black"></i>
                )}
              </span>
            )}

            {/* Nested Submenu */}
            {isParent && (
              <div className="absolute left-full top-0 z-50 hidden group-hover:block">
                <ul className="bg-dark border border-gray-300 shadow-md rounded w-[240px] ml-2">
                  {item.links.map((child, j) => (
                    <li key={j} className="px-4 py-2 hover:bg-gray-100">
                      <a
                        href={child.href}
                        onClick={(e) => handleLinkClick(e, child.href)}
                        className={`text-sm text-black ${
                          isActive(child.href) ? "font-bold" : ""
                        }`}
                      >
                        {child.label || child.title || "Unnamed"}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );

  return (
    <div
      className={`header-menu js-mobile-menu-toggle ${headerPosition || ""}`}
    >
      <div className="header-menu__content">
        <div className="mobile-bg js-mobile-bg" />

        {/* Mobile login links */}
        <div className="d-none xl:d-flex items-center px-20 py-20 border-b border-gray-200">
          <a
            href="/login"
            onClick={(e) => handleLinkClick(e, "/login")}
            className="text-black"
          >
            Log in
          </a>
          <a
            href="/signup"
            onClick={(e) => handleLinkClick(e, "/signup")}
            className="text-black ml-30"
          >
            Sign Up
          </a>
        </div>

        <div className="menu js-navList">
          <ul className={allClasses || ""}>
            {menuList.map((menu, index) => {
              const links = menu.links || menu.dropdown || [];
              const hasDropdown =
                !noDropdownTitles.includes(menu.title) &&
                (menu.mega || (Array.isArray(links) && links.length > 0));
              const isSingleDropdown = singleDropdownTitles.includes(
                menu.title
              );
              const title = menu.title || menu.label || "Untitled";

              return (
                <li
                  key={index}
                  className={`relative group ${
                    hasDropdown ? "menu-item-has-children" : ""
                  } ${menu.mega && !isSingleDropdown ? "-has-mega-menu" : ""}`}
                >
                  <a
                    href={menu.href || "#"}
                    onClick={(e) => handleLinkClick(e, menu.href || "#")}
                    className={`block text-black ${
                      activeMenu === title ? "border-b border-black" : ""
                    }`}
                  >
                    {title}
                    {hasDropdown && (
                      <i className="icon-chevron-right text-13 ml-10 text-black"></i>
                    )}
                  </a>

                  {hasDropdown &&
                    (isSingleDropdown ? (
                      <div className="subnav">
                        <div className="menu__backButton js-nav-list-back">
                          <a
                            href="#"
                            onClick={(e) => handleLinkClick(e, "#")}
                            className="text-black"
                          >
                            <i className="icon-chevron-left text-13 mr-10 text-black"></i>
                            {title}
                          </a>
                        </div>
                        <ul>
                          {links.map((section, i) => (
                            <li key={i}>
                              <a
                                href={section.href}
                                onClick={(e) =>
                                  handleLinkClick(e, section.href)
                                }
                                className={`text-black ${
                                  isActive(section.href) ? "font-bold" : ""
                                }`}
                              >
                                {section.label || section.title || "Unnamed"}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : (
                      <div
                        className="mega absolute top-full left-0 w-full bg-dark shadow-lg z-50 
                                  transition-all duration-300 max-h-0 overflow-hidden opacity-0 invisible 
                                  group-hover:max-h-[1000px] group-hover:opacity-100 group-hover:visible"
                      >
                        <div className="mega__menu content-center-wrapper py-8">
                          <div className="row x-gap-40 justify-center">
                            {links.map((section, i) => (
                              <MegaMenuItem
                                key={i}
                                section={section}
                                pathname={pathname}
                                handleLinkClick={handleLinkClick}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                </li>
              );
            })}
          </ul>
        </div>

        <MobileFooter />
      </div>

      <div
        className="header-menu-close"
        data-el-toggle=".js-mobile-menu-toggle"
        onClick={() => setActiveMobileMenu(false)}
      >
        <div className="size-40 d-flex items-center justify-center rounded-full bg-dark">
          <div className="icon-close text-black text-16"></div>
        </div>
      </div>

      <div className="header-menu-bg" />
    </div>
  );
}
