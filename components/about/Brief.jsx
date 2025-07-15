"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { useRouter } from "next/navigation";

export default function Brief() {
  const headingRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    if (headingRef.current) {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
      );
    }
  }, []);

  return (
    <section className="brief-section custom-padding">
      <div className="overlay-gradient"></div>
      <div className="particles"></div>

      <div className="content-wrapper">
        <div className="header-decoration">
          <div className="decoration-line"></div>
          <h2 ref={headingRef} className="sectionTitle__title">
            CSEI At A Glance
            <span className="underline" />
          </h2>
          <div className="decoration-line"></div>
        </div>

        <p className="brief-paragraph">
          At CSEI Academy, we are proud to offer UK Ofqual-recognized and
          KHDA-approved programs with hands-on learning to help you thrive in
          IT, Healthcare, Tourism, Culinary Arts, and Business. <br /> Our
          flexible courses are designed around your life, supporting working
          professionals and students seeking placements. With strong industry
          connections and direct pathways to UK Bachelor's degrees, we open
          doors to global opportunities. <br /> Join a community where your
          success comes first, and let us help you build the confidence, skills,
          and experience for a bright tomorrow.
        </p>

        <div className="cta-buttons">
          <button
            onClick={() => router.push("/programs")}
            className="cta-button primary"
          >
            Explore Programs
          </button>
          <button
            onClick={() => router.push("/contact-us")}
            className="cta-button secondary"
          >
            Contact Us
          </button>
        </div>
      </div>

      <style jsx>{`
        .brief-section {
          position: relative;
          background-image: url("https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.1.0&auto=format&fit=crop&w=2070&q=80");
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          padding: 120px 20px;
          text-align: center;
          overflow: hidden;
        }

        .overlay-gradient {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            135deg,
            rgba(0, 40, 85, 0.85) 0%,
            rgba(0, 20, 60, 0.9) 100%
          );
          z-index: 1;
        }

        .particles {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: radial-gradient(
            circle,
            rgba(255, 255, 255, 0.07) 1px,
            transparent 1px
          );
          background-size: 24px 24px;
          z-index: 2;
          animation: particleMove 100s linear infinite;
        }

        .content-wrapper {
          position: relative;
          z-index: 3;
          max-width: 900px;
          padding: 40px 20px;
          margin: 0 auto;
          backdrop-filter: blur(2px);
        }

        .header-decoration {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 40px;
        }

        .decoration-line {
          height: 2px;
          width: 80px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.5),
            transparent
          );
          margin: 0 20px;
        }

        .sectionTitle__title {
          font-size: clamp(2rem, 5vw, 3.5rem);
          font-weight: 800;
          text-align: center;
          text-transform: uppercase;
          letter-spacing: 2px;
          background: linear-gradient(90deg, #ffffff, #a7c3ff);
          -webkit-background-clip: text;
          background-clip: text;
          color: #ffffff;
          position: relative;
          padding-bottom: 20px;
        }

        .sectionTitle__title .underline {
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 4px;
          background: linear-gradient(90deg, #3b82f6, #000000);
          border-radius: 2px;
        }

        .brief-paragraph {
          font-size: 1.25rem;
          font-weight: 400;
          line-height: 1.8;
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: 40px;
        }

        .cta-buttons {
          display: flex;
          justify-content: center;
          gap: 20px;
          margin-top: 30px;
        }

        .cta-button {
          padding: 12px 30px;
          border-radius: 30px;
          font-size: 1rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          transition: all 0.3s ease;
          cursor: pointer;
          border: none;
        }

        .cta-button.primary {
          background: linear-gradient(90deg, #0066ff, #00aaff);
          color: white;
          box-shadow: 0 4px 15px rgba(0, 102, 255, 0.4);
        }

        .cta-button.secondary {
          background: transparent;
          color: white;
          border: 2px solid rgba(255, 255, 255, 0.3);
        }

        .cta-button.primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 6px 20px rgba(0, 102, 255, 0.6);
        }

        .cta-button.secondary:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.5);
        }

        @keyframes particleMove {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 1000px 1000px;
          }
        }

        @media (max-width: 768px) {
          .header-decoration {
            flex-direction: column;
          }

          .decoration-line {
            width: 100px;
            margin: 10px 0;
          }

          .cta-buttons {
            flex-direction: column;
            gap: 15px;
          }

          .sectionTitle__title {
            background: none !important;
            color: white !important;
            -webkit-background-clip: unset !important;
            background-clip: unset !important;
            text-shadow: none !important;
          }
        }

        @media (max-width: 480px) {
          .brief-section {
            padding: 80px 16px;
          }

          .brief-paragraph {
            font-size: 1rem;
            line-height: 1.6;
          }

          .cta-button {
            padding: 10px 24px;
            font-size: 0.95rem;
          }
        }
      `}</style>
    </section>
  );
}
