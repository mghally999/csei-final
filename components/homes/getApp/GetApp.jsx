"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function GetApp() {
  return (
    <section className="get-app-section">
      {/* AURORA BACKGROUND */}
      <div className="aurora-bg" />

      <div className="container">
        <div className="content-wrapper">
          {/* TEXT SECTION FIRST ON MOBILE */}
          <div className="text-content">
            <h2 className="app-title">
              <span>Engage, </span>
              <span>Create, </span>
              <span className="highlight">Transform.</span>
            </h2>

            <p className="app-subtitle">
              Download our app and elevate your learning experience. Access
              courses, track your progress, and engage anytime, anywhere.
            </p>

            <div className="app-buttons">
              <Link href="#" className="app-button">
                <Image
                  width={210}
                  height={60}
                  src="/assets/img/app/buttons/1.svg"
                  alt="App Store"
                  className="store-button"
                />
              </Link>
              <Link href="#" className="app-button">
                <Image
                  width={190}
                  height={60}
                  src="/assets/img/app/buttons/2.svg"
                  alt="Google Play"
                  className="store-button"
                />
              </Link>
            </div>
          </div>

          {/* IMAGE BELOW ON MOBILE, RIGHT SIDE ON DESKTOP */}
          <div className="image-container">
            <div className="glass-container">
              <Image
                width={600}
                height={400}
                src="/assets/img/app/website-mobile-app.png"
                alt="App preview"
                className="app-image"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Floating Glows */}
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />

      <style jsx>{`
        .get-app-section {
          position: relative;
          padding: clamp(3rem, 8vw, 6rem) 1rem;
          background: radial-gradient(
              circle at 20% 30%,
              rgba(255, 255, 255, 0.04),
              transparent 50%
            ),
            #0f172a;
          overflow: hidden;
        }

        .container {
          max-width: 1240px;
          margin: 0 auto;
          padding: 0 clamp(1rem, 5vw, 2rem);
          position: relative;
          z-index: 2;
        }

        .content-wrapper {
          display: flex;
          flex-direction: column;
          gap: clamp(2rem, 5vw, 4rem);
          align-items: center;
        }

        @media (min-width: 992px) {
          .content-wrapper {
            flex-direction: row;
            justify-content: space-between;
          }
        }

        .image-container {
          width: 100%;
          max-width: 600px;
          order: 1;
        }

        @media (min-width: 992px) {
          .image-container {
            width: 55%;
            order: 0;
          }
        }

        .text-content {
          width: 100%;
          max-width: 500px;
          display: flex;
          flex-direction: column;
          gap: clamp(1.5rem, 3vw, 2rem);
        }

        .app-title {
          font-size: clamp(2rem, 5vw, 3.5rem);
          font-weight: 900;
          line-height: 1.2;
          text-transform: uppercase;
          margin: 0;
        }

        .app-title span {
          display: inline-block;
          background: linear-gradient(90deg, #ffffff, #60a5fa);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .highlight {
          background: linear-gradient(90deg, #facc15, #f472b6);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .app-subtitle {
          font-size: clamp(1rem, 1.5vw, 1.125rem);
          color: rgba(255, 255, 255, 0.85);
          line-height: 1.6;
          margin: 0;
        }

        .app-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          margin-top: 0.5rem;
        }

        .store-button {
          width: 100%;
          height: auto;
          max-width: 200px;
        }

        .glass-container {
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 20px;
          padding: clamp(1rem, 2vw, 1.5rem);
          backdrop-filter: blur(14px);
          position: relative;
          overflow: hidden;
        }

        .app-image {
          width: 100%;
          height: auto;
          border-radius: 12px;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
            0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }

        .aurora-bg {
          position: absolute;
          top: -30%;
          left: -20%;
          width: 200%;
          height: 200%;
          background: radial-gradient(
            circle at 50% 50%,
            #9333ea 0%,
            #3b82f6 40%,
            #1e3a8a 100%
          );
          opacity: 0.15;
          filter: blur(140px);
          animation: rotate-bg 60s linear infinite;
          z-index: 1;
        }

        .orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(90px);
          opacity: 0.2;
          animation: float 8s ease-in-out infinite alternate;
          z-index: 1;
        }

        .orb-1 {
          width: clamp(200px, 30vw, 300px);
          height: clamp(200px, 30vw, 300px);
          top: 10%;
          left: 5%;
          background: #3b82f6;
        }

        .orb-2 {
          width: clamp(150px, 20vw, 220px);
          height: clamp(150px, 20vw, 220px);
          bottom: 5%;
          left: 35%;
          background: #9333ea;
        }

        .orb-3 {
          width: clamp(180px, 25vw, 260px);
          height: clamp(180px, 25vw, 260px);
          top: 30%;
          right: 10%;
          background: #facc15;
        }

        @keyframes float {
          0% {
            transform: translateY(0px) translateX(0px);
          }
          100% {
            transform: translateY(-25px) translateX(20px);
          }
        }

        @keyframes rotate-bg {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </section>
  );
}
