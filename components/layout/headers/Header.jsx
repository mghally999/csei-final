"use client";

import SearchToggle from "../component/SearchToggle";
import CartToggle from "../component/CartToggle";
import MobileMenu from "../component/MobileMenu";
import Menu from "../component/Menu";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Socials from "@/components/common/Socials";

export default function Header() {
  const [activeMobileMenu, setActiveMobileMenu] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className={`header -type-5 js-header ${
        scrollPosition > 40 ? "bg-dark-1" : ""
      } `}
    >
      <div className="d-flex items-center py-10 bg-custom-navyblue">
        <div className="container">
          <div className="row y-gap-5 justify-between items-center">
            <div className="col-auto">
              <div className="d-flex x-gap-40 y-gap-10 items-center">
                <div className="d-flex items-center text-white md:d-none">
                  <div className="icon-email mr-10"></div>
                  <div className="text13 lh-1">(+971)543185454</div>
                </div>
                <div className="d-flex items-center text-white">
                  <div className="icon-email mr-10"></div>
                  <div className="text13 lh-1">admission@cseiacademy.ae</div>
                </div>
              </div>
            </div>

            <div className="col-auto">
              <div className="d-flex x-gap-30 y-gap-10">
                <div className="text-white">
                  <div className="d-flex x-gap-20 items-center text-white">
                    <Socials
                      componentsClass="text-white hover:text-orange-500 mr-4"
                      textSize="text-11"
                    />{" "}
                  </div>
                </div>

                <div className="d-flex items-center text-white text-13 sm:d-none">
                  English <i className="icon-chevron-down text-9 ml-10"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-10">
        <div className="row justify-center items-center flex-nowrap overflow-x-auto">
          {/* Logo */}
          <div className="col-auto flex items-center flex-nowrap">
            <div className="header-left">
              <div className="header__logo d-flex items-center">
                <Link href="/" className="d-flex items-center">
                  <Image
                    width={140}
                    height={40}
                    src="/assets/img/general/logo.png"
                    alt="logo"
                  />
                  <span
                    className="text-[24px] leading-none"
                    style={{
                      fontWeight: 900,
                      color: "#E05500",
                      textTransform: "uppercase",
                      letterSpacing: "0.5px",
                      fontSize: "20px",
                      marginRight: "10px",
                    }}
                  >
                    CSEI Academy
                  </span>
                </Link>
              </div>
            </div>
            {/* Orange Separator */}
            <div className="mx-30 h-40 w-1 bg-[#f60] rounded-full xl:mx-20 lg:mx-10"></div>
          </div>

          {/* Right side (Menu, Search, Cart, Log in, Sign up) */}
          <div className="col-auto flex items-center justify-end flex-nowrap">
            <div className="header-right d-flex items-center gap-x-6">
              <Menu allClasses={"menu__nav text-white -is-active"} />
              <MobileMenu
                activeMobileMenu={activeMobileMenu}
                setActiveMobileMenu={setActiveMobileMenu}
              />
              <div className="header-right__icons text-white d-flex items-center gap-x-4">
                <SearchToggle />
                <CartToggle
                  parentClassess={"relative"}
                  allClasses={"d-flex items-center text-white"}
                />
              </div>

              <div className="d-none xl:d-block">
                <button
                  className="text-white items-center"
                  onClick={() => setActiveMobileMenu(true)}
                  data-el-toggle=".js-mobile-menu-toggle"
                >
                  <i className="text-11 icon icon-mobile-menu"></i>
                </button>
              </div>

              <div className="header-right__buttons d-flex items-center gap-x-4 md:d-none">
                <Link href="/login" className="button -underline text-dark-1">
                  Log in
                </Link>
                <Link
                  href="/signup"
                  className="button px-25 h-50 -white text-dark-1 -rounded"
                >
                  Sign up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
