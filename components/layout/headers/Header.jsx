"use client";

import React, { useState, useEffect } from "react";
import MobileMenu from "../component/MobileMenu";
import Menu from "../component/Menu";
import Image from "next/image";
import Link from "next/link";
import EnquiryModal from "../../../components/EnquiryModal";

export default function Header() {
  const [activeMobileMenu, setActiveMobileMenu] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`header -type-5 js-header ${
          scrollPosition > 40 ? "bg-dark-1" : ""
        }`}
      >
        {/* Top Links Bar */}
        <div className="d-flex items-center py-2 bg-custom-navyblue">
          <div className="container">
            <div className="row y-gap-5 justify-between items-center">
              <div className="col-auto">
                <div className="d-flex x-gap-40 y-gap-10 items-center">
                  <div className="d-flex items-center text-white md:d-none"></div>
                  <div className="d-flex items-center text-white"></div>
                </div>
              </div>

              <div className="col-auto">
                <div className="d-flex x-gap-20 items-center">
                  <Link
                    href="/life-with-csei/lms"
                    className="text-white text13 lh-1 hover:text-orange-1"
                  >
                    LMS
                  </Link>
                  <span className="text-white mx-10">|</span>
                  <Link
                    href="/life-with-csei/alumni"
                    className="text-white text13 lh-1 hover:text-orange-1"
                  >
                    Alumni
                  </Link>
                  <span className="text-white mx-10">|</span>
                  <Link
                    href="/life-with-csei/student-portal"
                    className="text-white text13 lh-1 hover:text-orange-1"
                  >
                    Student Portal
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Border Separator */}
        <div className="border-b border-gray-300 w-full"></div>

        {/* Main Header Section */}
        <div className="container py-4">
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
              <div className="mx-10 h-32 w-1 bg-[#f60] rounded-full"></div>
            </div>

            {/* Right side (Menu) */}
            <div className="col-auto flex items-center justify-end flex-nowrap">
              <div className="header-right d-flex items-center gap-x-3">
                <Menu
                  allClasses={"menu__nav text-white -is-active"}
                  setActiveMobileMenu={setActiveMobileMenu}
                />
                <MobileMenu
                  activeMobileMenu={activeMobileMenu}
                  setActiveMobileMenu={setActiveMobileMenu}
                />

                {/* Enquire Now Button */}
                <button
                  onClick={() => setShowModal(true)}
                  style={{
                    backgroundColor: "#04044e",
                    color: "white",
                    padding: "0.5rem 1.25rem",
                    borderRadius: "8px",
                    fontWeight: "800",
                    transition: "background-color 0.3s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.target.style.backgroundColor = "#000030")
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.backgroundColor = "#04044e")
                  }
                >
                  Enquire Now
                </button>

                <div className="d-none xl:d-block">
                  <button
                    className="text-dark-1 items-center"
                    onClick={() => setActiveMobileMenu(true)}
                  >
                    <i className="text-11 icon icon-mobile-menu"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Enquiry Modal */}
      <EnquiryModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </>
  );
}
