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

  return (
    <div
      className={`header-menu js-mobile-menu-toggle ${
        activeMobileMenu ? "-is-el-visible" : ""
      }`}
    >
      <div className="header-menu__content">
        <div className="mobile-bg js-mobile-bg" />

        <div className="mobileMenu text-dark-1">
          {menuList.map((menu, i) => {
            const title = menu.title || menu.label || "Untitled";
            const links = menu.links || menu.dropdown || [];
            const hasDropdown = links.length > 0;

            return (
              <div key={i} className="submenuOne">
                <div className="title flex items-center justify-between">
                  {menu.href ? (
                    <Link
                      href={menu.href}
                      className={`w-full ${
                        activeMenu === title ? "activeMenu" : "inActiveMenu"
                      }`}
                      onClick={() => setActiveMobileMenu(false)}
                    >
                      {title}
                    </Link>
                  ) : (
                    <span
                      className={`w-full ${
                        activeMenu === title ? "activeMenu" : "inActiveMenu"
                      }`}
                      onClick={() =>
                        setMenuNesting((prev) =>
                          prev[0] === title ? [] : [title]
                        )
                      }
                    >
                      {title}
                    </span>
                  )}

                  {hasDropdown && (
                    <i
                      className={`icon-chevron-right text-13 ml-10 ${
                        menuNesting[0] === title ? "active" : ""
                      }`}
                      onClick={() =>
                        setMenuNesting((prev) =>
                          prev[0] === title ? [] : [title]
                        )
                      }
                    />
                  )}
                </div>

                {hasDropdown && (
                  <div
                    className={`toggle ${
                      menuNesting[0] === title ? "active" : ""
                    }`}
                  >
                    {links.map((section, j) => {
                      const hasSubLinks = section.links?.length > 0;
                      const label = section.label || section.title || "Unnamed";

                      return (
                        <div key={j} className="submenuTwo">
                          <div className="title flex items-center justify-between">
                            {section.href ? (
                              <Link
                                href={section.href}
                                className={`w-full ${
                                  activeHref === section.href
                                    ? "activeMenu"
                                    : "inActiveMenu"
                                }`}
                                onClick={() => setActiveMobileMenu(false)}
                              >
                                {label}
                              </Link>
                            ) : (
                              <span
                                className={`w-full ${
                                  menuNesting[1] === label
                                    ? "activeMenu"
                                    : "inActiveMenu"
                                }`}
                                onClick={() =>
                                  setMenuNesting((prev) =>
                                    prev[1] === label
                                      ? [prev[0]]
                                      : [prev[0], label]
                                  )
                                }
                              >
                                {label}
                              </span>
                            )}

                            {hasSubLinks && (
                              <i
                                className={`icon-chevron-right text-13 ml-10 ${
                                  menuNesting[1] === label ? "active" : ""
                                }`}
                                onClick={() =>
                                  setMenuNesting((prev) =>
                                    prev[1] === label
                                      ? [prev[0]]
                                      : [prev[0], label]
                                  )
                                }
                              />
                            )}
                          </div>

                          {hasSubLinks && (
                            <div
                              className={`toggle ${
                                menuNesting[1] === label ? "active" : ""
                              }`}
                            >
                              {section.links.map((child, k) => {
                                const href = child.href;
                                const childLabel =
                                  child.label || child.title || "Unnamed";

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
                                    {childLabel}
                                  </Link>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <MobileFooter />
      </div>

      <div
        className="header-menu-close"
        data-el-toggle=".js-mobile-menu-toggle"
        onClick={() => setActiveMobileMenu(false)}
      >
        <div className="size-40 d-flex items-center justify-center rounded-full bg-white">
          <div className="icon-close text-dark-1 text-16"></div>
        </div>
      </div>

      <div
        className="header-menu-bg"
        onClick={() => setActiveMobileMenu(false)}
      />
    </div>
  );
}
