"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { brands } from "../../data/brands";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Brands() {
  const scrollRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current && window.innerWidth < 1024) {
      scrollRef.current.scrollLeft = 100;
    }

    // Animate title
    gsap.from(titleRef.current, {
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 85%",
      },
      x: -50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  const scroll = (dir) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -300 : 300,
      behavior: "smooth",
    });
  };

  return (
    <section className="brands-section relative overflow-hidden">
      {/* Background floaters */}
      <div className="floating-blobs">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="floating-blob"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              width: `${Math.random() * 150 + 80}px`,
              height: `${Math.random() * 150 + 80}px`,
            }}
          />
        ))}
      </div>

      <div className="brands-container">
        <h2 ref={titleRef} className="brands-title">
          Industrial Partners
          <span className="underline" />
        </h2>
        <p className="brands-subtitle">
          CSEI Academy is proudly accredited by globally recognized
          institutions.
        </p>

        <div className="brands-wrapper">
          <button className="brand-arrow left" onClick={() => scroll("left")}>
            ‹
          </button>

          <div className="logos-container" ref={scrollRef}>
            {brands.map((logo, i) => (
              <div key={i} className="logo-card">
                <Image
                  src={logo}
                  alt={`Partner ${i + 1}`}
                  width={100}
                  height={60}
                  className="logo-image"
                />
              </div>
            ))}
          </div>

          <button className="brand-arrow right" onClick={() => scroll("right")}>
            ›
          </button>
        </div>
      </div>

      <style jsx>{`
        .brands-section {
          background: linear-gradient(135deg, #020617 0%, #0f172a 100%);
          padding: 120px 20px;
          position: relative;
          z-index: 1;
          color: white;
        }

        .floating-blobs {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: 0;
        }

        .floating-blob {
          position: absolute;
          background: rgba(255, 255, 255, 0.06);
          border-radius: 50%;
          filter: blur(30px);
          animation: float 12s infinite alternate ease-in-out;
        }

        @keyframes float {
          0% {
            transform: translateY(0px);
            opacity: 0.2;
          }
          100% {
            transform: translateY(-60px);
            opacity: 0.5;
          }
        }

        .brands-container {
          max-width: 1200px;
          margin: 0 auto;
          text-align: center;
          position: relative;
          z-index: 2;
        }

        .brands-title {
          font-size: clamp(2rem, 5vw, 3.5rem);
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 2px;
          background: linear-gradient(90deg, #fff, #a7c3ff);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          margin-bottom: 20px;
          position: relative;
          padding-bottom: 20px;
        }

        .underline {
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 4px;
          background: linear-gradient(90deg, #3b82f6, #000000);
          border-radius: 2px;
        }

        .brands-subtitle {
          font-size: 1.125rem;
          color: #e0e7ff;
          margin-bottom: 2.5rem;
        }

        .brands-wrapper {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .logos-container {
          display: flex;
          gap: 2rem;
          overflow-x: auto;
          scroll-behavior: smooth;
          padding: 2rem 1rem;
          scrollbar-width: none;
        }

        .logos-container::-webkit-scrollbar {
          display: none;
        }

        .logo-card {
          flex-shrink: 0;
          width: 180px;
          height: 180px;
          background: #ffffff !important;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
          position: relative;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
          overflow: hidden;
        }

        .logo-card::after {
          content: "";
          position: absolute;
          top: -100%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(
            135deg,
            transparent,
            rgba(255, 255, 255, 0.08),
            transparent
          );
          transform: rotate(25deg);
          animation: shine 4s linear infinite;
        }

        @keyframes shine {
          0% {
            top: -100%;
            left: -50%;
          }
          100% {
            top: 100%;
            left: 100%;
          }
        }

        .logo-image {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .brand-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(255, 255, 255, 0.05);
          border: none;
          color: #fff;
          font-size: 2rem;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          cursor: pointer;
          z-index: 3;
          backdrop-filter: blur(4px);
          transition: background 0.3s;
        }

        .brand-arrow:hover {
          background: rgba(255, 255, 255, 0.1);
        }

        .brand-arrow.left {
          left: -24px;
        }

        .brand-arrow.right {
          right: -24px;
        }

        @media (max-width: 768px) {
          .brands-title {
            font-size: 2rem;
          }

          .brand-arrow {
            display: none;
          }

          .logos-container {
            gap: 1rem;
            padding: 1rem 0;
          }

          .logo-card {
            width: 140px;
            height: 140px;
          }
        }
      `}</style>
    </section>
  );
}
