"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import FooterLinks from "../component/FooterLinks";
import Links from "../component/Links";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

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

        .footer-header-socials {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
        }

        .footer-header-socials__title {
          margin-bottom: 10px;
        }

        .social-links-container {
          display: flex;
          gap: 20px;
        }
      `}</style>

      <footer className="footer -type-1 -green-links full-width-footer">
        {/* 1. Footer Columns + Links First - Full width with inner container */}
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

        {/* 2. Footer Header with Logo and Social Media - Full width with inner container */}
        <div className="full-width-footer">
          <div className="footer-container">
            <div className="footer-header mt-40">
              <div className="row y-gap-20 justify-between items-center">
                <div className="col-auto">
                  <div className="footer-logo-container">
                    <div className="footer-header__logo">
                      <Link
                        href="/"
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        <Image
                          width={140}
                          height={40}
                          src="/assets/img/general/logo.png"
                          alt="logo"
                          style={{ marginRight: "-20px" }}
                        />
                        <span
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
                  </div>
                </div>

                <div className="col-auto">
                  <div className="footer-header-socials">
                    <div className="footer-header-socials__title text-black mb-2">
                      Follow us on social media
                    </div>
                    <div className="social-links-container">
                      <Link
                        href="https://www.facebook.com/studyindubaidegree"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaFacebookF />
                      </Link>
                      <Link
                        href="https://www.instagram.com/cseiacademydubaifz/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "#000000", fontSize: "20px" }}
                      >
                        <FaInstagram />
                      </Link>
                      <Link
                        href="https://www.linkedin.com/in/csei-academy-04701a370/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "#000000", fontSize: "20px" }}
                      >
                        <FaLinkedinIn />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Footer Bottom Bar - Full width with inner container */}
        <div className="full-width-footer" style={{ backgroundColor: "#000" }}>
          <div className="footer-container">
            <div className="py-30 mt-30">
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
