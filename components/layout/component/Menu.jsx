"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import MobileFooter from "./MobileFooter";
import { menuList } from "@/data/menu";
import { usePathname } from "next/navigation";

export default function Menu({ allClasses, headerPosition }) {
  const [menuItem, setMenuItem] = useState("");
  const [submenu, setSubmenu] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    menuList.forEach((elm) => {
      const links = elm.links || elm.dropdown || [];
      links.forEach((elm2) => {
        if (elm2.href?.split("/")[1] == pathname.split("/")[1]) {
          setMenuItem(elm.title);
        } else {
          elm2?.links?.forEach((elm3) => {
            if (elm3.href?.split("/")[1] == pathname.split("/")[1]) {
              setMenuItem(elm.title);
              setSubmenu(elm2.title);
            }
          });
        }
      });
    });
  }, [pathname]);

  const isActive = (href) => {
    if (!href || !pathname) return false;
    return pathname.startsWith(href);
  };

  const noDropdownTitles = ["Home", "Student Life", "About Us"];
  const singleDropdownTitles = ["Academics", "Admission", "Life With CSEI"];

  const renderNestedLinks = (links) => (
    <ul className="mega__list whitespace-nowrap min-w-[200px] text-gray-900">
      {links.map((item, index) => {
        const isParent = !item.href && item.links?.length > 0;
        return (
          <li
            key={index}
            className="relative group px-10 py-2 hover-trigger text-dark-1 cursor-pointer"
          >
            <div className="flex items-center justify-between text-dark-1 cursor-pointer">
              {item.href ? (
                <Link
                  href={item.href}
                  className={`block fw-600 text-sm hover:text-primary transition cursor-pointer ${
                    isActive(item.href) ? "activeMenu" : "inActiveMenu"
                  }`}
                >
                  {item.label || item.title}
                </Link>
              ) : (
                <span className="block fw-600 text-md text-gray-900 cursor-pointer transition-colors duration-300 hover:text-primary">
                  {item.label || item.title}
                </span>
              )}
              {isParent && (
                <i className="icon-chevron-down text-10 ml-4 text-gray-600 ml-10 cursor-pointer" />
              )}
            </div>

            {isParent && (
              <ul className="submenu absolute top-0 left-full min-w-[220px] bg-white text-gray-800 shadow-md border rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                {item.links.map((sub, subIndex) => {
                  const isSubParent = !sub.href && sub.links?.length > 0;
                  return (
                    <li
                      key={subIndex}
                      className="py-1 px-1 hover:bg-gray-100 group/sub"
                    >
                      {sub.href ? (
                        <Link
                          href={sub.href}
                          className={`block text-md fw-500 text-gray-800 hover:text-primary transition ${
                            isActive(sub.href) ? "activeMenu" : "inActiveMenu"
                          }`}
                        >
                          {sub.label || sub.title}
                        </Link>
                      ) : isSubParent ? (
                        <div className="relative">
                          <span className="block text-xs font-medium text-gray-900">
                            {sub.title}
                          </span>
                          <ul className="absolute top-0 left-full mt-0 ml-1 w-40 bg-white shadow-md rounded border opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-300 z-50">
                            {sub.links.map((child, childIndex) => (
                              <li
                                key={childIndex}
                                className="px-2 py-1 hover:bg-gray-100"
                              >
                                <Link
                                  href={child.href}
                                  className={`block text-xs text-gray-800 hover:text-primary transition ${
                                    isActive(child.href)
                                      ? "activeMenu"
                                      : "inActiveMenu"
                                  }`}
                                >
                                  {child.label || child.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ) : null}
                    </li>
                  );
                })}
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
        <div className="mobile-bg js-mobile-bg"></div>

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
                (menu.mega || links.length);
              const isSingleDropdown = singleDropdownTitles.includes(
                menu.title
              );
              const topHref = menu.href || "#";

              return (
                <li
                  key={index}
                  className={`${hasDropdown ? "menu-item-has-children" : ""} ${
                    menu.mega && !isSingleDropdown ? "-has-mega-menu" : ""
                  }`}
                >
                  <Link
                    href={topHref}
                    className={`block hover:text-primary transition ${
                      menuItem === menu.title ? "activeMenu" : ""
                    }`}
                  >
                    {menu.title}
                    {hasDropdown && (
                      <i className="icon-chevron-right text-13 ml-10"></i>
                    )}
                  </Link>

                  {hasDropdown && (
                    <>
                      {isSingleDropdown ? (
                        <div className="subnav">
                          <div className="menu__backButton js-nav-list-back">
                            <Link href="#">
                              <i className="icon-chevron-left text-13 mr-10"></i>{" "}
                              {menu.title}
                            </Link>
                          </div>
                          {links.map((section, sectionIndex) => (
                            <li
                              key={sectionIndex}
                              className={
                                isActive(section.href)
                                  ? "activeMenu"
                                  : "inActiveMenu"
                              }
                            >
                              <Link href={section.href}>
                                {section.label || section.title}
                              </Link>
                            </li>
                          ))}
                        </div>
                      ) : (
                        <div className="mega absolute top-full left-0 w-full bg-white shadow z-50 transition-all duration-300 opacity-0 invisible group-hover:opacity-100 group-hover:visible">
                          <div className="mega__menu content-center-wrapper">
                            <div className="row x-gap-40 justify-center">
                              {links.map((col, colIndex) => (
                                <div
                                  className="col relative group"
                                  key={colIndex}
                                >
                                  {col.href ? (
                                    <Link
                                      href={col.href}
                                      className="text-17 fw-500 mb-20 text-gray-900 hover:text-primary transition block"
                                    >
                                      {col.title || col.label}
                                    </Link>
                                  ) : (
                                    <h4 className="text-17 fw-500 mb-20 text-gray-900">
                                      {col.title || col.label}
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
                      )}
                    </>
                  )}
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

      <div className="header-menu-bg"></div>
    </div>
  );
}
