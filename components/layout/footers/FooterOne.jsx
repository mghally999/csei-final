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

        {/* 2. Footer Header with Logo and Accreditation Logos */}
        <div className="footer-header mt-40">
          <div className="row y-gap-20 justify-between items-center">
            <div className="col-auto">
              <div className="footer-logo-container">
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

                {/* Accreditation Logos - Updated with larger size and spacing */}
                <div className="footer-accreditation-logos">
                  <div className="footer-logo-item">
                    <Image
                      src="/assets/img/logos/OTHM-logo.png"
                      alt="OTHM Accredited"
                      width={180}
                      height={90}
                      className="footer-logo-img"
                    />
                  </div>
                  <div className="footer-logo-item">
                    <Image
                      src="/assets/img/logos/KHDA-logo.png"
                      alt="KHDA Accredited"
                      width={180}
                      height={90}
                      className="footer-logo-img"
                    />
                  </div>
                </div>
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

        {/* Global Styles */}
        <style jsx>{`
          .footer-logo-container {
            display: flex;
            align-items: center;
            gap: 40px; /* Increased gap */
            flex-wrap: wrap;
          }

          .footer-accreditation-logos {
            display: flex;
            gap: 30px; /* Increased gap between logos */
            align-items: center;
            flex-grow: 1; /* Allow to fill available space */
            justify-content: space-between; /* Spread logos evenly */
          }

          .footer-logo-item {
            background-color: white;
            padding: 12px; /* Increased padding */
            border-radius: 8px;
            width: 220px; /* Increased width */
            height: 110px; /* Increased height */
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
            flex: 1; /* Allow items to grow */
            max-width: 240px; /* Maximum size */
            margin: 0 10px; /* Additional spacing */
          }

          .footer-logo-img {
            object-fit: contain;
            width: 100%;
            height: 100%;
          }

          @media (max-width: 1200px) {
            .footer-logo-item {
              width: 200px;
              height: 100px;
            }
          }

          @media (max-width: 1024px) {
            .footer-logo-container {
              flex-direction: column;
              align-items: flex-start;
              gap: 30px;
            }

            .footer-accreditation-logos {
              width: 100%;
              margin-top: 20px;
              gap: 20px;
            }
          }

          @media (max-width: 768px) {
            .footer-logo-item {
              width: 180px;
              height: 90px;
              padding: 10px;
            }
          }

          @media (max-width: 600px) {
            .footer-accreditation-logos {
              flex-direction: column;
              gap: 15px;
            }

            .footer-logo-item {
              width: 160px;
              height: 80px;
              margin: 0;
            }
          }

          @media (max-width: 480px) {
            .footer-logo-container {
              align-items: center;
              text-align: center;
            }

            .footer-logo-item {
              width: 140px;
              height: 70px;
            }
          }
        `}</style>
      </div>
    </footer>
  );
}
