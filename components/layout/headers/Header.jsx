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
    const handleScroll = () => setScrollPosition(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <style jsx global>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          transition: all 0.3s ease;
        }

        .header-container {
          margin: 0 auto !important;
          max-width: 100% !important;
          width: 100%;
        }

        @media (min-width: 1200px) and (max-width: 1400px) {
          .header-flex-wrapper {
            flex-wrap: nowrap !important;
          }

          .header-logo-text {
            font-size: 18px !important;
            letter-spacing: 0.2px !important;
          }
        }

        @media (max-width: 767px) {
          .header {
            padding: 0;
          }

          .header__logo span {
            display: none;
          }

          .top-links-bar {
            display: none;
            height: 100px !important;
          }

          .desktop-menu {
            display: none;
          }

          .mobile-menu-button {
            display: block;
          }

          .enquire-button {
            display: block !important;
            margin: 0 auto !important;
            font-size: 12px !important;
            margin-right: 12px !important;
          }
        }

        @media (min-width: 768px) and (max-width: 991px) {
          .header__logo span {
            display: none;
          }

          .top-links-bar {
            display: none;
          }

          .desktop-menu {
            display: none;
          }

          .mobile-menu-button {
            display: block;
          }
        }

        @media (min-width: 992px) and (max-width: 1199px) {
          .header__logo span {
            display: inline;
          }

          .top-links-bar {
            display: block;
          }

          .mobile-menu-button {
            display: none;
          }
        }

        @media (min-width: 1200px) {
          .mobile-menu-button {
            display: none;
          }
        }

        @media (max-width: 991px) {
          .header-right {
            width: 100%;
            justify-content: center !important;
          }

          .enquire-button {
            display: block !important;
            margin-right: 50px !important;
          }
        }

        @media (min-width: 1600px) {
          .header {
          }
        }

        @media print {
          .header {
            display: none;
          }
        }
      `}</style>

      <header
        className={`header -type-5 js-header ${
          scrollPosition > 40 ? "bg-dark-1" : ""
        }`}
      >
        {/* Top Bar */}
        <div className="top-links-bar d-flex items-center py-2 bg-black">
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

        {/* Border */}
        <div className="border-b border-gray-300 w-full"></div>

        {/* Main Header */}
        <div
          className="container py-4 header-container"
          style={{ paddingTop: "1.2rem", paddingBottom: "1.2rem" }}
        >
          <div
            className="header-flex-wrapper"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "20px",
              minWidth: 0,
              width: "100%",
            }}
          >
            {/* Logo */}
            <div
              style={{ display: "flex", alignItems: "center", flexShrink: 0 }}
            >
              <Link href="/" style={{ display: "flex", alignItems: "center" }}>
                <Image
                  width={140}
                  height={40}
                  src="/assets/img/general/logo.png"
                  alt="logo"
                  style={{ marginRight: "-20px" }}
                />
                <span
                  className="header-logo-text"
                  style={{
                    marginLeft: "2px",
                    fontWeight: 900,
                    color: "#E05500",
                    textTransform: "uppercase",
                    fontSize: "20px",
                    letterSpacing: "0.5px",
                    whiteSpace: "nowrap",
                  }}
                >
                  CSEI Academy
                </span>
              </Link>
            </div>

            {/* Menu */}
            <div
              className="header-right"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                flexGrow: 1,
                flexWrap: "wrap",
                minWidth: 0,
                gap: "20px",
              }}
            >
              <Menu
                allClasses={"desktop-menu menu__nav text-white -is-active"}
                setActiveMobileMenu={setActiveMobileMenu}
              />
              <MobileMenu
                activeMobileMenu={activeMobileMenu}
                setActiveMobileMenu={setActiveMobileMenu}
              />
              <div className="mobile-menu-button d-none xl:d-block">
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
      </header>

      {/* Enquiry Modal */}
      <EnquiryModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </>
  );
}
