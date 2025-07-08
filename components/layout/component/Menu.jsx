"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import MobileFooter from "./MobileFooter";
import { menuList } from "@/data/menu";
import MegaMenuItem from "@/components/MegaMenuItem";

export default function Menu({
  allClasses,
  headerPosition,
  setActiveMobileMenu,
}) {
  const pathname = usePathname();
  const [activeMenu, setActiveMenu] = useState("");
  const [activeHref, setActiveHref] = useState("");

  useEffect(() => {
    let bestMatchHref = "";
    let bestMatchMenu = "";

    const matchDeep = (items, parentTitle) => {
      for (const item of items) {
        if (item.href && pathname.startsWith(item.href)) {
          if (item.href.length > bestMatchHref.length) {
            bestMatchHref = item.href;
            bestMatchMenu = parentTitle;
          }
        }
        if (item.links && item.links.length > 0) {
          matchDeep(item.links, parentTitle);
        }
      }
    };

    menuList.forEach((menu) => {
      const title = menu.title || menu.label || "Untitled";
      const links = menu.links || menu.dropdown || [];

      if (menu.href && pathname.startsWith(menu.href)) {
        if (menu.href.length > bestMatchHref.length) {
          bestMatchHref = menu.href;
          bestMatchMenu = title;
        }
      }

      if (links.length > 0) {
        matchDeep(links, title);
      }
    });

    setActiveMenu(bestMatchMenu);
    setActiveHref(bestMatchHref);
  }, [pathname]);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setActiveMobileMenu(false);
    window.location.href = href;
  };

  const noDropdownTitles = ["Home", "Student Life"];
  const singleDropdownTitles = [
    "About Us",
    "Academics",
    "Apply Now",
    "Life With CSEI",
    "Placements",
  ];

  return (
    <div
      className={`header-menu js-mobile-menu-toggle ${headerPosition || ""}`}
    >
      <div className="header-menu__content">
        <div className="mobile-bg js-mobile-bg" />

        <div className="d-none xl:d-flex items-center px-20 py-20 border-b border-gray-200">
          <a
            href="/login"
            onClick={(e) => handleLinkClick(e, "/login")}
            style={{ color: "black" }}
          >
            Log in
          </a>
          <a
            href="/signup"
            onClick={(e) => handleLinkClick(e, "/signup")}
            style={{ color: "black", marginLeft: 30 }}
          >
            Sign Up
          </a>
        </div>

        <div className="menu js-navList">
          <ul className={allClasses || ""}>
            {menuList.map((menu, index) => {
              const title = menu.title || menu.label || "Untitled";
              const links = menu.links || menu.dropdown || [];
              const hasDropdown =
                !noDropdownTitles.includes(title) &&
                (menu.mega || links.length > 0);
              const isSingleDropdown = singleDropdownTitles.includes(title);
              const isActiveParent = activeMenu === title;

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
                    style={{
                      display: "block",
                      padding: "10px 16px",
                      color: isActiveParent ? "#e05500 !important" : "black",
                      fontWeight: isActiveParent ? 900 : "normal",
                      borderRadius: "6px",
                      transition: "all 0.3s",
                    }}
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
                            style={{ color: "black" }}
                          >
                            <i className="icon-chevron-left text-13 mr-10 text-black"></i>
                            {title}
                          </a>
                        </div>
                        <ul>
                          {links.map((link, i) => (
                            <li key={i}>
                              <a
                                href={link.href}
                                onClick={(e) => handleLinkClick(e, link.href)}
                                style={{
                                  display: "block",
                                  padding: "8px 12px",
                                  color:
                                    activeHref === link.href
                                      ? "#e05500"
                                      : "black",
                                  fontWeight:
                                    activeHref === link.href ? 900 : "normal",
                                  borderRadius: "4px",
                                  transition: "all 0.3s",
                                }}
                              >
                                {link.label || link.title || "Unnamed"}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : (
                      <div className="mega absolute top-full left-0 w-full bg-dark shadow-lg z-50 transition-all duration-300 max-h-0 overflow-hidden opacity-0 invisible group-hover:max-h-[1000px] group-hover:opacity-100 group-hover:visible">
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
