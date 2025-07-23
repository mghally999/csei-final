"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import FooterLinks from "../component/FooterLinks";
import Links from "../component/Links";

export default function FooterOne() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <style jsx global>{`
        .full-width-footer {
          width: 100%;
          margin: 0;
          padding: 0;
        }

        .footer-container {
          max-width: 100%;
          width: 100%;
          margin: 0 auto;
          padding-left: 15px;
          padding-right: 15px;
        }

        @media (min-width: 1200px) {
          .footer-container {
            padding-left: 30px;
            padding-right: 30px;
          }
        }

        .social-section {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
          padding: 20px 0;
        }

        .social-section__title {
          margin-bottom: 15px;
          color: #000;
          font-weight: 500;
        }

        .social-links-container {
          display: flex;
          gap: 20px;
        }

        .logo-box-container {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 40px;
          margin: 20px 0;
        }

        .logo-box {
          background-color: #fff;
          padding: 10px;
          border-radius: 0.75rem;
          border: 1px solid #eee;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.06);
          width: 180px;
          height: 100px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>

      <footer className="footer -type-1 -green-links full-width-footer">
        {/* 1. Footer Columns */}
        <div className="full-width-footer">
          <div className="footer-container">
            <div className="footer-columns">
              <div className="row y-gap-30">
                <FooterLinks allClasses="text-17 fw-500 text-white uppercase mb-25" />
                <div className="col-xl-4 col-lg-4 col-md-6">
                  <div className="text-17 fw-500 text-white uppercase mb-25">
                    GET IN TOUCH
                  </div>
                  <div className="text-dark-1 footer-columns-form">
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
          </div>
        </div>

        {/* 2. Footer Header with Logos */}
        <div className="full-width-footer">
          <div className="footer-container">
            <div className="footer-header mt-40">
              <div className="row justify-between items-center y-gap-20">
                <div className="col-12 d-flex justify-between align-items-center flex-wrap gap-4">
                  {/* Left: CSEI Academy Logo */}
                  <div className="d-flex align-items-center gap-2">
                    <Link
                      href="/"
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <Image
                        src="/assets/img/general/logo.png"
                        alt="CSEI Academy"
                        width={140}
                        height={40}
                        style={{ objectFit: "cover" }}
                      />
                      <span
                        style={{
                          marginLeft: "6px",
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

                  {/* Center: KHDA + OTHM Logos */}
                  <div className="logo-box-container">
                    <div className="logo-box">
                      <Image
                        src="/assets/img/logos/KHDA-logo.png"
                        alt="KHDA Logo"
                        width={140}
                        height={70}
                        style={{
                          objectFit: "contain",
                          width: "100%",
                          height: "100%",
                        }}
                      />
                    </div>

                    <div className="logo-box">
                      <Image
                        src="/assets/img/logos/OTHM-logo.png"
                        alt="OTHM Logo"
                        width={140}
                        height={70}
                        style={{
                          objectFit: "contain",
                          width: "100%",
                          height: "100%",
                        }}
                      />
                    </div>
                    <div className="logo-box">
                      <Image
                        src="/assets/img/logos/medical-college.png"
                        alt="OTHM Logo"
                        width={140}
                        height={70}
                        style={{
                          objectFit: "contain",
                          width: "100%",
                          height: "100%",
                        }}
                      />
                    </div>
                    <div className="logo-box">
                      <Image
                        src="/assets/img/logos/northwood-university.jpeg"
                        alt="OTHM Logo"
                        width={140}
                        height={70}
                        style={{
                          objectFit: "contain",
                          width: "100%",
                          height: "100%",
                        }}
                      />
                    </div>
                  </div>

                  {/* Empty div to maintain layout */}
                  <div style={{ width: "140px" }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links Section - Centered at Bottom */}
        <div
          className="full-width-footer"
          style={{ backgroundColor: "#f8f8f8" }}
        >
          <div className="footer-container">
            <div className="social-section">
              <div className="social-section__title">
                Follow us on social media
              </div>
              <div className="social-links-container">
                <Link
                  href="https://www.facebook.com/studyindubaidegree"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookF style={{ color: "#000000", fontSize: "20px" }} />
                </Link>
                <Link
                  href="https://www.instagram.com/cseiacademydubaifz/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram style={{ color: "#000000", fontSize: "20px" }} />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/csei-academy-04701a370/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn
                    style={{ color: "#000000", fontSize: "20px" }}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Footer Bottom */}
        <div className="full-width-footer" style={{ backgroundColor: "#000" }}>
          <div className="footer-container">
            <div className="py-30">
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
        </div>
      </footer>
    </>
  );
}
