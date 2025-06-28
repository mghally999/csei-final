"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import MobileFooter from "./MobileFooter";
import { menuList } from "@/data/menu";
import { usePathname } from "next/navigation";

export default function Menu({ allClasses, headerPosition }) {
  const pathname = usePathname();
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

  const noDropdownTitles = ["Home", "Student Life", "About Us"];
  const singleDropdownTitles = ["Academics", "Admission", "Life With CSEI"];

  const renderNestedLinks = (links) => (
    <ul className="mega__list min-w-[200px] whitespace-nowrap">
      {links.map((item, i) => {
        const isParent = !item.href && item.links?.length > 0;
        const label = item.label || item.title || "Unnamed";

        return (
          <li key={i} className="group relative px-10 py-2 text-dark-1">
            {item.href ? (
              <Link
                href={item.href}
                className={`block fw-600 text-sm hover:text-primary ${
                  isActive(item.href) ? "activeMenu" : ""
                }`}
              >
                {label}
              </Link>
            ) : (
              <span className="block fw-600 text-md text-gray-900">
                {label}
              </span>
            )}

            {isParent && (
              <ul className="submenu absolute top-0 left-full min-w-[220px] bg-white shadow-md border rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible z-50 transition">
                {item.links.map((child, j) => (
                  <li key={j} className="px-3 py-2 hover:bg-gray-100">
                    <Link
                      href={child.href}
                      className={`text-sm hover:text-primary ${
                        isActive(child.href) ? "activeMenu" : ""
                      }`}
                    >
                      {child.label || child.title || "Unnamed"}
                    </Link>
                  </li>
                ))}
              </ul>
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
        <div className="d-none xl:d-flex items-center px-20 py-20 border-bottom-light">
          <Link href="/login" className="text-dark-1">
            Log in
          </Link>
          <Link href="/signup" className="text-dark-1 ml-30">
            Sign Up
          </Link>
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
                  className={`${hasDropdown ? "menu-item-has-children" : ""} ${
                    menu.mega && !isSingleDropdown ? "-has-mega-menu" : ""
                  }`}
                >
                  <Link
                    href={menu.href || "#"}
                    className={`block hover:text-primary transition ${
                      activeMenu === title ? "activeMenu" : ""
                    }`}
                  >
                    {title}
                    {hasDropdown && (
                      <i className="icon-chevron-right text-13 ml-10"></i>
                    )}
                  </Link>

                  {hasDropdown &&
                    (isSingleDropdown ? (
                      <div className="subnav">
                        <div className="menu__backButton js-nav-list-back">
                          <Link href="#">
                            <i className="icon-chevron-left text-13 mr-10"></i>
                            {title}
                          </Link>
                        </div>
                        <ul>
                          {links.map((section, i) => (
                            <li key={i}>
                              <Link
                                href={section.href}
                                className={`${
                                  isActive(section.href)
                                    ? "activeMenu"
                                    : "inActiveMenu"
                                }`}
                              >
                                {section.label || section.title || "Unnamed"}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : (
                      <div className="mega absolute top-full left-0 w-full bg-white shadow z-50 transition-all duration-300 opacity-0 invisible group-hover:opacity-100 group-hover:visible">
                        <div className="mega__menu content-center-wrapper">
                          <div className="row x-gap-40 justify-center">
                            {links.map((col, i) => (
                              <div key={i} className="col relative group">
                                {col.href ? (
                                  <Link
                                    href={col.href}
                                    className="text-17 fw-500 mb-20 block text-gray-900 hover:text-primary"
                                  >
                                    {col.title || col.label || "Unnamed"}
                                  </Link>
                                ) : (
                                  <h4 className="text-17 fw-500 mb-20 text-gray-900">
                                    {col.title || col.label || "Unnamed"}
                                  </h4>
                                )}
                                {col.links &&
                                  col.links.length > 0 &&
                                  renderNestedLinks(col.links)}
                              </div>
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
      >
        <div className="size-40 d-flex items-center justify-center rounded-full bg-white">
          <div className="icon-close text-dark-1 text-16"></div>
        </div>
      </div>

      <div className="header-menu-bg" />
    </div>
  );
}
