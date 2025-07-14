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
      <style jsx global>{`
        /* Default styles for all devices */
        .header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          transition: all 0.3s ease;
        }

        /* Mobile Phones (portrait and landscape) - up to 767px */
        @media (max-width: 767px) {
          .header {
            /* Add your mobile-specific header styles here */
            padding: 0;
          }

          .header__logo span {
            /* Hide "CSEI Academy" text on mobile */
            display: none;
          }

          .top-links-bar {
            /* Hide top links bar on mobile */
            display: none;
            height: 100px !important;
          }

          .enquire-button {
            /* Smaller button for mobile */
            display: block !important;
            margin: 0 auto !important;
            font-size: 12px !important;
            margin-right: 12px !important;
          }

          .desktop-menu {
            /* Hide desktop menu on mobile */
            display: none;
          }

          .mobile-menu-button {
            /* Show mobile menu button */
            display: block;
          }
        }

        /* Tablets (portrait) - 768px to 991px */
        @media (min-width: 768px) and (max-width: 991px) {
          .header {
            /* Add your tablet portrait styles here */
            // padding: 12px 0;
          }

          .header__logo span {
            /* Hide "CSEI Academy" text on tablet */
            display: none;
          }

          .top-links-bar {
            /* Hide top links bar on tablet */
            display: none;
          }

          .desktop-menu {
            /* Hide desktop menu on tablet */
            display: none;
          }

          .mobile-menu-button {
            /* Show mobile menu button */
            display: block;
          }
        }

        /* Tablets (landscape) and small laptops - 992px to 1199px */
        @media (min-width: 992px) and (max-width: 1199px) {
          .header {
            /* Add your tablet landscape/small laptop styles here */
          }

          .header__logo span {
            /* Show "CSEI Academy" text */
            display: inline;
          }

          .top-links-bar {
            /* Show top links bar */
            display: block;
          }

          .mobile-menu-button {
            /* Hide mobile menu button */
            display: none;
          }
        }

        /* Desktops and laptops - 1200px and up */
        @media (min-width: 1200px) {
          .header {
            /* Add your desktop styles here */
          }

          .mobile-menu-button {
            /* Hide mobile menu button */
            display: none;
          }
        }

        /* Special cases for very large screens */
        @media (min-width: 1600px) {
          .header {
            /* Add your large desktop styles here */
          }
        }

        /* High-density (Retina) displays */
        @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
          /* Add your retina display optimizations here */
        }

        /* Print styles */
        @media print {
          .header {
            /* Add your print-specific styles here */
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
      `}</style>

      <header
        className={`header -type-5 js-header ${
          scrollPosition > 40 ? "bg-dark-1" : ""
        }`}
      >
        {/* Top Links Bar - Hidden on mobile/tablet */}
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

        {/* Border Separator - Hidden on mobile/tablet */}
        <div className="border-b border-gray-300 w-full"></div>

        {/* Main Header Section */}
        <div className="container py-4">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "nowrap",
            }}
          >
            {/* Left: Logo + Text */}
            <div
              style={{ display: "flex", alignItems: "center", flexShrink: 0 }}
            >
              <Link href="/" style={{ display: "flex", alignItems: "center" }}>
                <Image
                  width={140}
                  height={40}
                  src="/assets/img/general/logo.png"
                  alt="logo"
                  style={{ marginRight: "-20px" }} // Negative margin pulls text closer
                />
                <span
                  style={{
                    marginLeft: "2px", // Reduced to minimum
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

            {/* Right: Menu + Mobile */}
            <div
              className="header-right"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                gap: "20px",
                flexGrow: 1,
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
