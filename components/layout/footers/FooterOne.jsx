"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import Socials from "@/components/common/Socials";
import FooterLinks from "../component/FooterLinks";
import Links from "../component/Links";

export default function FooterOne() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // Inline styles objects
  const accreditationContainerStyle = {
    marginTop: "160px",
    padding: "80px 0",
    borderTop: "1px solid rgba(0, 0, 0, 0.15)",
  };

  const logosWrapperStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "32px",
    flexWrap: "wrap",
  };

  const logoContainerStyle = {
    backgroundColor: "white",
    padding: "12px",
    borderRadius: "8px",
    width: "200px",
    height: "130px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
  };

  const logoImageStyle = {
    objectFit: "cover",
    height: "100%",
  };

  return (
    <footer className="footer -type-1 bg-white -green-links">
      <div className="container">
        {/* 1. Footer Columns + Links First */}
        <div className="footer-columns">
          <div className="row y-gap-30">
            <FooterLinks allClasses="text-17 fw-500 text-dark-1 uppercase mb-25" />

            <div className="col-xl-4 col-lg-4 col-md-6">
              <div className="text-17 fw-500 text-dark-1 uppercase mb-25">
                GET IN TOUCH
              </div>
              <div className="text-dark-1 footer-columns-form">
                <div>We don't send spam so don't worry.</div>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <input required type="text" placeholder="Email..." />
                    <button type="submit">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Accreditation Logos Section with inline styles */}
        <div style={accreditationContainerStyle}>
          <div style={logosWrapperStyle}>
            <div style={logoContainerStyle}>
              <Image
                src="/assets/img/logos/OTHM-logo.png"
                alt="OTHM Accredited"
                width={180}
                height={90}
                style={logoImageStyle}
              />
            </div>
            <div style={logoContainerStyle}>
              <Image
                src="/assets/img/logos/KHDA-logo.png"
                alt="KHDA Accredited"
                width={180}
                height={90}
                style={logoImageStyle}
              />
            </div>
          </div>
        </div>

        {/* 2. Footer Header with Logo */}
        <div className="footer-header mt-40">
          <div className="row y-gap-20 justify-between items-center">
            <div className="col-auto">
              <div className="footer-header__logo">
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

            <div className="col-auto">
              <div className="footer-header-socials">
                <div className="footer-header-socials__title text-dark-1">
                  Follow us on social media
                </div>
                <div className="footer-header-socials__list">
                  <Socials />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Footer Bottom Bar */}
        <div className="py-30 border-top-light-15 mt-30">
          <div className="row justify-between items-center y-gap-20">
            <div className="col-auto">
              <div className="d-flex items-center h-100 text-white">
                © {new Date().getFullYear()} CSEI. All Right Reserved.
              </div>
            </div>

            <div className="col-auto">
              <div className="d-flex x-gap-20 y-gap-20 items-center flex-wrap">
                <div>
                  <div className="d-flex x-gap-15 text-white">
                    <Links />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
