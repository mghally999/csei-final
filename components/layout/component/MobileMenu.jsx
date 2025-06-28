"use client";

import MobileFooter from "./MobileFooter";
import { menuList } from "../../../data/menu";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function MobileMenu({ setActiveMobileMenu, activeMobileMenu }) {
  const [showMenu, setShowMenu] = useState(false);
  const [menuNesting, setMenuNesting] = useState([]);
  const [menuItem, setMenuItem] = useState("");
  const [submenu, setSubmenu] = useState("");

  const pathname = usePathname();

  useEffect(() => {
    menuList.forEach((elm) => {
      if (elm?.href && elm.href === pathname) {
        setMenuItem(elm.title);
      }
      elm?.links?.forEach((elm2) => {
        if (elm2.href === pathname) {
          setMenuItem(elm.title);
          setSubmenu(elm2.title || "");
        } else {
          elm2?.links?.forEach((elm3) => {
            if (elm3.href === pathname) {
              setMenuItem(elm.title);
              setSubmenu(elm2.title);
            }
          });
        }
      });
    });
  }, [pathname]);

  useEffect(() => {
    setShowMenu(true);
  }, []);

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

        {showMenu && activeMobileMenu && (
          <div className="mobileMenu text-dark-1">
            {menuList.map((elm, i) => (
              <div key={i} className="submenuOne">
                <div className="title flex items-center justify-between">
                  {elm.href ? (
                    <Link
                      href={elm.href}
                      className={
                        elm.title === menuItem
                          ? "activeMenu w-full"
                          : "inActiveMenu w-full"
                      }
                      onClick={() => setActiveMobileMenu(false)}
                    >
                      {elm.title}
                    </Link>
                  ) : (
                    <span
                      className={
                        elm.title === menuItem
                          ? "activeMenu w-full"
                          : "inActiveMenu w-full"
                      }
                      onClick={() =>
                        setMenuNesting((pre) =>
                          pre[0] === elm.title ? [] : [elm.title]
                        )
                      }
                    >
                      {elm.title}
                    </span>
                  )}

                  {elm.links && (
                    <i
                      className={
                        menuNesting[0] === elm.title
                          ? "icon-chevron-right text-13 ml-10 active"
                          : "icon-chevron-right text-13 ml-10"
                      }
                      onClick={() =>
                        setMenuNesting((pre) =>
                          pre[0] === elm.title ? [] : [elm.title]
                        )
                      }
                    ></i>
                  )}
                </div>

                {elm.links &&
                  elm.links.map((itm, index) => (
                    <div
                      key={index}
                      className={
                        menuNesting[0] === elm.title
                          ? "toggle active"
                          : "toggle"
                      }
                    >
                      {itm.href && (
                        <Link
                          className={
                            pathname === itm.href
                              ? "activeMenu link"
                              : "link inActiveMenu"
                          }
                          href={itm.href}
                          onClick={() => setActiveMobileMenu(false)}
                        >
                          {itm.label}
                        </Link>
                      )}

                      {itm.links && (
                        <div className="submenuTwo">
                          <div className="title flex items-center justify-between">
                            <span
                              className={
                                itm.title === submenu
                                  ? "activeMenu w-full"
                                  : "inActiveMenu w-full"
                              }
                              onClick={() =>
                                setMenuNesting((pre) =>
                                  pre[1] === itm.title
                                    ? [pre[0]]
                                    : [pre[0], itm.title]
                                )
                              }
                            >
                              {itm.title}
                            </span>
                            <i
                              className={
                                menuNesting[1] === itm.title
                                  ? "icon-chevron-right text-13 ml-10 active"
                                  : "icon-chevron-right text-13 ml-10"
                              }
                              onClick={() =>
                                setMenuNesting((pre) =>
                                  pre[1] === itm.title
                                    ? [pre[0]]
                                    : [pre[0], itm.title]
                                )
                              }
                            ></i>
                          </div>

                          <div
                            className={
                              menuNesting[1] === itm.title
                                ? "toggle active"
                                : "toggle"
                            }
                          >
                            {itm.links.map((itm2, index3) =>
                              itm2.href ? (
                                <Link
                                  key={index3}
                                  className={
                                    pathname === itm2.href
                                      ? "activeMenu link"
                                      : "link inActiveMenu"
                                  }
                                  href={itm2.href}
                                  onClick={() => setActiveMobileMenu(false)}
                                >
                                  {itm2.label}
                                </Link>
                              ) : null
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
              </div>
            ))}
          </div>
        )}

        <MobileFooter />
      </div>

      <div
        className="header-menu-close"
        onClick={() => {
          setActiveMobileMenu(false);
        }}
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
