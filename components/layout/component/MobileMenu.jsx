"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { menuList } from "@/data/menu";
import MobileFooter from "./MobileFooter";

export default function MobileMenu({ setActiveMobileMenu, activeMobileMenu }) {
  const pathname = usePathname();
  const [menuNesting, setMenuNesting] = useState([]);
  const [activeMenu, setActiveMenu] = useState("");
  const [activeSubmenu, setActiveSubmenu] = useState("");

  // ✅ Detect active item (any depth)
  useEffect(() => {
    const findMatch = (items, topTitle = "", midTitle = "") => {
      for (const item of items) {
        if (item.href && pathname.startsWith(item.href)) {
          setActiveMenu(topTitle || item.title || item.label);
          setActiveSubmenu(midTitle || "");
        }

        if (item.links?.length) {
          findMatch(
            item.links,
            topTitle || item.title || item.label,
            item.title || item.label
          );
        }
      }
    };

    menuList.forEach((menu) => {
      if (menu.href && pathname.startsWith(menu.href)) {
        setActiveMenu(menu.title);
        setActiveSubmenu("");
      }
      if (menu.links?.length) {
        findMatch(menu.links, menu.title);
      }
    });
  }, [pathname]);

  return (
    <div
      className={`header-menu js-mobile-menu-toggle ${
        activeMobileMenu ? "-is-el-visible" : ""
      }`}
    >
      <div className="header-menu__content">
        <div className="mobile-bg js-mobile-bg"></div>

        <div className="d-none xl:d-flex items-center px-20 py-20 border-bottom-light">
          <Link
            href="/login"
            className={`text-dark-1 ${
              pathname === "/login" ? "activeMenu" : "inActiveMenu"
            }`}
          >
            Log in
          </Link>
          <Link
            href="/signup"
            className={`text-dark-1 ml-30 ${
              pathname === "/signup" ? "activeMenu" : "inActiveMenu"
            }`}
          >
            Sign Up
          </Link>
        </div>

        <div className="mobileMenu text-dark-1">
          {menuList.map((menu, i) => (
            <div key={i} className="submenuOne">
              <div className="title flex items-center justify-between">
                {menu.href ? (
                  <Link
                    href={menu.href}
                    className={`w-full ${
                      activeMenu === menu.title ? "activeMenu" : "inActiveMenu"
                    }`}
                    onClick={() => setActiveMobileMenu(false)}
                  >
                    {menu.title}
                  </Link>
                ) : (
                  <span
                    className={`w-full ${
                      activeMenu === menu.title ? "activeMenu" : "inActiveMenu"
                    }`}
                    onClick={() =>
                      setMenuNesting((prev) =>
                        prev[0] === menu.title ? [] : [menu.title]
                      )
                    }
                  >
                    {menu.title}
                  </span>
                )}

                {menu.links && (
                  <i
                    className={`icon-chevron-right text-13 ml-10 ${
                      menuNesting[0] === menu.title ? "active" : ""
                    }`}
                    onClick={() =>
                      setMenuNesting((prev) =>
                        prev[0] === menu.title ? [] : [menu.title]
                      )
                    }
                  ></i>
                )}
              </div>

              {menu.links &&
                menu.links.map((section, j) => (
                  <div
                    key={j}
                    className={`toggle ${
                      menuNesting[0] === menu.title ? "active" : ""
                    }`}
                  >
                    {section.href && (
                      <Link
                        href={section.href}
                        className={`link ${
                          pathname.startsWith(section.href)
                            ? "activeMenu"
                            : "inActiveMenu"
                        }`}
                        onClick={() => setActiveMobileMenu(false)}
                      >
                        {section.label || section.title}
                      </Link>
                    )}

                    {section.links && (
                      <div className="submenuTwo">
                        <div className="title flex items-center justify-between">
                          <span
                            className={`w-full ${
                              activeSubmenu === section.title
                                ? "activeMenu"
                                : "inActiveMenu"
                            }`}
                            onClick={() =>
                              setMenuNesting((prev) =>
                                prev[1] === section.title
                                  ? [prev[0]]
                                  : [prev[0], section.title]
                              )
                            }
                          >
                            {section.title}
                          </span>
                          <i
                            className={`icon-chevron-right text-13 ml-10 ${
                              menuNesting[1] === section.title ? "active" : ""
                            }`}
                            onClick={() =>
                              setMenuNesting((prev) =>
                                prev[1] === section.title
                                  ? [prev[0]]
                                  : [prev[0], section.title]
                              )
                            }
                          ></i>
                        </div>

                        <div
                          className={`toggle ${
                            menuNesting[1] === section.title ? "active" : ""
                          }`}
                        >
                          {section.links.map((child, k) => {
                            const href = child.href;
                            const label =
                              child.label || child.title || "Unnamed";

                            // ✅ Skip if href is missing
                            if (!href) return null;

                            return (
                              <Link
                                key={k}
                                href={href}
                                className={`link ${
                                  pathname.startsWith(href)
                                    ? "activeMenu"
                                    : "inActiveMenu"
                                }`}
                                onClick={() => setActiveMobileMenu(false)}
                              >
                                {label}
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
            </div>
          ))}
        </div>

        <MobileFooter />
      </div>

      <div
        className="header-menu-close"
        onClick={() => setActiveMobileMenu(false)}
        data-el-toggle=".js-mobile-menu-toggle"
      >
        <div className="size-40 d-flex items-center justify-center rounded-full bg-white">
          <div className="icon-close text-dark-1 text-16"></div>
        </div>
      </div>

      <div
        className="header-menu-bg"
        onClick={() => setActiveMobileMenu(false)}
      ></div>
    </div>
  );
}
