"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

export default function Mission() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const particlesRef = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

    particlesRef.current = Array.from({ length: 20 }, (_, i) => {
      const p = document.createElement("div");
      p.className = "floating-particle";
      p.style.setProperty("--i", i);
      sectionRef.current.appendChild(p);
      return p;
    });

    particlesRef.current.forEach((p, i) => {
      gsap.to(p, {
        x: gsap.utils.random(-80, 80),
        y: gsap.utils.random(-80, 80),
        duration: gsap.utils.random(5, 10),
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: i * 0.1,
      });
    });

    gsap.from(headingRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
      },
      y: 80,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });

    gsap.from([imageRef.current, textRef.current], {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
      },
      y: 60,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "back.out(1.2)",
    });

    gsap.to(".decorative-circle", {
      rotation: 360,
      duration: 120,
      repeat: -1,
      ease: "none",
    });

    return () => {
      particlesRef.current.forEach((p) => p.remove());
      ScrollTrigger.getAll().forEach((s) => s.kill());
    };
  }, []);

  return (
    <section className="mission-section" ref={sectionRef}>
      <div className="decorative-circle large" />
      <div className="decorative-circle medium" />
      <div className="decorative-circle small" />

      <div className="container">
        <h2 className="mission-heading" ref={headingRef}>
          <span className="heading-main">OUR MISSION</span>
          <span className="heading-shadow">OUR MISSION</span>
          <span className="heading-underline" />
        </h2>

        <div className="mission-content">
          <div className="mission-image-container" ref={imageRef}>
            <div className="image-frame">
              <div className="image-inner">
                <Image
                  src="/assets/img/about/mission/mission.jpg"
                  alt="Empowering Future Leaders"
                  width={800}
                  height={600}
                  priority
                  className="mission-image"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div className="image-overlay" />
              <div className="image-caption">
                <span>Empowering Future Leaders</span>
              </div>
            </div>
          </div>

          <div className="mission-text-container" ref={textRef}>
            <div className="text-background">
              <p className="mission-statement">
                At <span className="highlight">CSEI Academy</span>, we{" "}
                <span className="bold-italic">ignite</span> potential through{" "}
                <span className="underline-accent">accessible education</span>{" "}
                and an{" "}
                <span className="underline-accent">inclusive environment</span>{" "}
                that celebrates diversity.
              </p>

              <div className="mission-points">
                {[
                  "Our dedicated mentors provide personalized support to learners from all backgrounds.",
                  "Through hands-on experiences and industry partnerships, we bridge academia and real-world success.",
                  "We cultivate global citizens equipped to lead and innovate in an evolving world.",
                ].map((text, index) => (
                  <div className="point" key={index}>
                    <div className="point-check">
                      <svg viewBox="0 0 24 24" width="20" height="20">
                        <path
                          fill="currentColor"
                          d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"
                        />
                      </svg>
                    </div>
                    <div className="point-text">{text}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Global particles animation */}
      <style jsx global>{`
        @keyframes particle-float {
          0%,
          100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(15px, -15px);
          }
        }

        .floating-particle {
          position: absolute;
          width: 5px;
          height: 5px;
          background: rgba(255, 255, 255, 0.7);
          border-radius: 50%;
          filter: blur(1px);
          top: calc(var(--i) * 5%);
          left: calc(var(--i) * 5%);
          opacity: calc(var(--i) * 0.03);
          animation: particle-float 5s infinite ease-in-out;
          animation-delay: calc(var(--i) * 0.2s);
        }
      `}</style>

      {/* Component Styles */}
      <style jsx>{`
        .mission-section {
          padding: clamp(60px, 8vw, 120px) 5vw;
          position: relative;
          background: linear-gradient(135deg, #0a0e23, #1a1f3a);
          color: white;
          overflow: hidden;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .decorative-circle {
          position: absolute;
          border-radius: 50%;
          filter: blur(50px);
          opacity: 0.15;
          z-index: 0;
        }

        .large {
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, #e05500, transparent 70%);
          top: -250px;
          right: -250px;
        }

        .medium {
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, #0070f3, transparent 70%);
          bottom: -150px;
          left: -150px;
        }

        .small {
          width: 200px;
          height: 200px;
          background: radial-gradient(circle, #7928ca, transparent 70%);
          top: 30%;
          left: 10%;
        }

        .mission-heading {
          position: relative;
          text-align: center;
          font-weight: 900;
          font-size: clamp(2.5rem, 6vw, 5rem);
          text-transform: uppercase;
          color: transparent;
          -webkit-text-stroke: 2px white;
        }

        .heading-main {
          position: relative;
          z-index: 2;
        }

        .heading-shadow {
          position: absolute;
          top: 6px;
          left: 0;
          width: 100%;
          color: transparent;
          -webkit-text-stroke: 2px rgba(255, 255, 255, 0.2);
          z-index: 1;
        }

        .heading-underline {
          display: block;
          width: 100px;
          height: 6px;
          margin: 20px auto 0;
          background: linear-gradient(90deg, #e05500, #0070f3);
          border-radius: 3px;
        }

        .mission-content {
          display: flex;
          flex-wrap: wrap;
          gap: 40px;
          align-items: center;
          margin-top: 40px;
          flex-direction: row;
        }

        .mission-image-container,
        .mission-text-container {
          flex: 1 1 45%;
          min-width: 300px;
        }

        .image-frame {
          position: relative;
          border-radius: 16px;
          overflow: hidden;
          height: 100%;
          box-shadow: 0 0 0 8px rgba(255, 255, 255, 0.05),
            0 20px 40px rgba(0, 0, 0, 0.4);
        }

        .image-caption {
          position: absolute;
          bottom: 0;
          width: 100%;
          text-align: center;
          padding: 1rem;
          background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
          opacity: 0;
          transition: all 0.4s ease;
        }

        .mission-image-container:hover .image-caption {
          opacity: 1;
        }

        .image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            45deg,
            rgba(224, 85, 0, 0.1),
            rgba(0, 112, 243, 0.1)
          );
          mix-blend-mode: overlay;
        }

        .text-background {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(12px);
          border-radius: 16px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 40px;
        }

        .mission-statement {
          font-size: 1.2rem;
          line-height: 1.6;
          margin-bottom: 30px;
          border-left: 3px solid #e05500;
          padding-left: 1rem;
        }

        .highlight {
          color: #e05500;
          font-weight: 700;
        }

        .bold-italic {
          font-weight: 700;
          font-style: italic;
        }

        .underline-accent {
          position: relative;
        }

        .underline-accent::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -2px;
          height: 2px;
          width: 100%;
          background: linear-gradient(90deg, #e05500, #0070f3);
        }

        .mission-points .point {
          display: flex;
          gap: 16px;
          margin-bottom: 1rem;
          align-items: flex-start;
        }

        .point-check {
          width: 24px;
          height: 24px;
          background: #e05500;
          color: white;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .point-text {
          font-size: 1rem;
          line-height: 1.6;
        }

        /* ✅ Mobile & Tablet layout */
        @media (max-width: 992px) {
          .mission-content {
            flex-direction: column;
            gap: 60px;
          }

          .mission-image-container {
            width: 100%;
            aspect-ratio: 16 / 9;
          }

          .mission-text-container {
            width: 100%;
          }

          .text-background {
            padding: 24px;
          }

          .mission-statement {
            font-size: 1rem;
          }

          .point-text {
            font-size: 0.95rem;
          }
        }

        @media (max-width: 480px) {
          .mission-section {
            padding: 40px 20px;
          }
        }
      `}</style>
    </section>
  );
}
