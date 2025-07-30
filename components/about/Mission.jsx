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

    // Initialize floating particles
    particlesRef.current = Array.from({ length: 20 }, (_, i) => {
      const particle = document.createElement("div");
      particle.className = "floating-particle";
      particle.style.setProperty("--i", i);
      sectionRef.current.appendChild(particle);
      return particle;
    });

    // Animate particles
    particlesRef.current.forEach((particle, i) => {
      gsap.to(particle, {
        x: gsap.utils.random(-80, 80),
        y: gsap.utils.random(-80, 80),
        duration: gsap.utils.random(5, 10),
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: i * 0.1,
      });
    });

    // Heading animation
    gsap.from(headingRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        toggleActions: "play none none none",
      },
      y: 80,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });

    // Image and text stagger
    gsap.from([imageRef.current, textRef.current], {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
      y: 60,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "back.out(1.2)",
    });

    // Continuous rotation for decorative elements
    gsap.to(".decorative-circle", {
      rotation: 360,
      duration: 120,
      repeat: -1,
      ease: "none",
    });

    return () => {
      particlesRef.current.forEach((particle) => particle.remove());
      ScrollTrigger.getAll().forEach((instance) => instance.kill());
    };
  }, []);

  return (
    <section className="mission-section" ref={sectionRef}>
      {/* Decorative background elements */}
      <div className="decorative-circle large" />
      <div className="decorative-circle medium" />
      <div className="decorative-circle small" />

      <h2 className="mission-heading" ref={headingRef}>
        <span className="heading-main">OUR MISSION</span>
        <span className="heading-shadow">OUR MISSION</span>
        <span className="heading-underline" />
      </h2>

      <div className="mission-content">
        <div className="mission-text-container" ref={textRef}>
          <p className="mission-statement">
            At <span className="highlight">CSEI Academy</span>, we{" "}
            <span className="bold-italic">ignite</span> potential through{" "}
            <span className="underline-accent">accessible education</span> and
            an <span className="underline-accent">inclusive environment</span>{" "}
            that celebrates diversity.
          </p>

          <div className="mission-points">
            <div className="point">
              <div className="point-check">
                <svg viewBox="0 0 24 24" width="24" height="24">
                  <path
                    fill="currentColor"
                    d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"
                  />
                </svg>
              </div>
              <div className="point-text">
                Our dedicated mentors provide
                <strong> personalized support</strong> to learners from all
                backgrounds.
              </div>
            </div>

            <div className="point">
              <div className="point-check">
                <svg viewBox="0 0 24 24" width="24" height="24">
                  <path
                    fill="currentColor"
                    d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"
                  />
                </svg>
              </div>
              <div className="point-text">
                Through <strong>hands-on experiences</strong> and{" "}
                <strong>industry partnerships</strong>, we bridge academia and
                real-world success.
              </div>
            </div>

            <div className="point">
              <div className="point-check">
                <svg viewBox="0 0 24 24" width="24" height="24">
                  <path
                    fill="currentColor"
                    d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"
                  />
                </svg>
              </div>
              <div className="point-text">
                We cultivate <strong>global citizens</strong> equipped to lead
                and innovate in an evolving world.
              </div>
            </div>
          </div>
        </div>

        <div className="mission-image-container" ref={imageRef}>
          <Image
            src="/assets/img/about/mission/mission.jpg"
            alt="Diverse team collaborating"
            width={1000}
            height={750}
            priority
            className="mission-image"
          />
          <div className="image-caption">
            <span>Empowering Future Leaders</span>
          </div>
        </div>
      </div>

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

      <style jsx>{`
        .mission-section {
          position: relative;
          padding: 100px 5vw;
          overflow: hidden;
          background: linear-gradient(135deg, #0a0e23, #1a1f3a);
          color: white;
        }

        /* Decorative elements */
        .decorative-circle {
          position: absolute;
          border-radius: 50%;
          filter: blur(50px);
          opacity: 0.15;
          z-index: 0;
        }
        .decorative-circle.large {
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, #e05500, transparent 70%);
          top: -250px;
          right: -250px;
        }
        .decorative-circle.medium {
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, #0070f3, transparent 70%);
          bottom: -150px;
          left: -150px;
        }
        .decorative-circle.small {
          width: 200px;
          height: 200px;
          background: radial-gradient(circle, #7928ca, transparent 70%);
          top: 30%;
          left: 10%;
        }

        /* Heading */
        .mission-heading {
          position: relative;
          margin: 0 auto 60px;
          text-align: center;
          font-family: "Montserrat", sans-serif;
          font-weight: 900;
          font-size: clamp(2.5rem, 6vw, 5rem);
          text-transform: uppercase;
          letter-spacing: 1px;
          color: transparent;
          -webkit-text-stroke: 2px white;
          line-height: 1.1;
          max-width: 1200px;
        }
        .heading-main {
          position: relative;
          display: block;
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
          box-shadow: 0 0 15px rgba(224, 85, 0, 0.4);
        }

        /* Content layout */
        .mission-content {
          display: flex;
          gap: 5vw;
          max-width: 1400px;
          margin: 0 auto;
        }

        /* Text container */
        .mission-text-container {
          flex: 1;
          min-width: 40%;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(12px);
          border-radius: 16px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.25);
          padding: 5vw;
          position: relative;
        }
        .mission-text-container::before {
          content: "";
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(
            circle at center,
            rgba(224, 85, 0, 0.1) 0%,
            transparent 70%
          );
          z-index: -1;
        }

        /* Image container */
        .mission-image-container {
          flex: 1;
          min-width: 50%;
          position: relative;
          border-radius: 16px;
          overflow: hidden;
          aspect-ratio: 4/3;
          box-shadow: 0 0 0 8px rgba(255, 255, 255, 0.05),
            0 0 0 16px rgba(255, 255, 255, 0.03), 0 20px 40px rgba(0, 0, 0, 0.4);
          transition: transform 0.3s ease;
        }
        .mission-image-container:hover {
          transform: scale(1.01);
        }
        .mission-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .mission-image-container::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            45deg,
            rgba(224, 85, 0, 0.1) 0%,
            rgba(0, 112, 243, 0.1) 100%
          );
          mix-blend-mode: overlay;
        }
        .image-caption {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          padding: 16px;
          background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
          font-weight: 600;
          text-align: center;
          opacity: 0;
          transform: translateY(15px);
          transition: all 0.4s ease;
        }
        .mission-image-container:hover .image-caption {
          opacity: 1;
          transform: translateY(0);
        }

        /* Mission statement */
        .mission-statement {
          font-size: clamp(1rem, 1.5vw, 1.5rem);
          line-height: 1.5;
          margin-bottom: 30px;
          padding-left: 20px;
          border-left: 3px solid #e05500;
        }
        .mission-statement .highlight {
          color: #e05500;
          font-weight: 700;
        }
        .mission-statement .bold-italic {
          font-weight: 700;
          font-style: italic;
          color: #fff;
        }
        .mission-statement .underline-accent {
          position: relative;
        }
        .mission-statement .underline-accent::after {
          content: "";
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, #e05500, #0070f3);
        }

        /* Mission points */
        .mission-points {
          margin-bottom: 30px;
        }
        .point {
          display: flex;
          gap: 16px;
          margin-bottom: 20px;
          align-items: flex-start;
        }
        .point-check {
          width: 24px;
          height: 24px;
          background-color: #e05500;
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);
        }
        .point-check svg {
          width: 14px;
          height: 14px;
        }
        .point-text {
          font-size: clamp(0.9rem, 1.2vw, 1.1rem);
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.9);
        }
        .point-text strong {
          color: white;
          font-weight: 600;
        }

        /* Responsive adjustments */
        @media (max-width: 992px) {
          .mission-section {
            padding: 80px 5vw;
          }
          .mission-content {
            flex-direction: column;
            gap: 40px;
          }
          .mission-heading {
            margin-bottom: 40px;
          }
        }

        @media (max-width: 768px) {
          // .mission-section {
          //   padding: 60px 5vw;
          // }
          .mission-text-container {
            padding: 30px;
          }
          .mission-statement {
            padding-left: 15px;
          }
          .point {
            gap: 12px;
            margin-bottom: 16px;
          }
        }

        @media (max-width: 480px) {
          .mission-heading {
            -webkit-text-stroke: 1px white;
          }
          .heading-shadow {
            -webkit-text-stroke: 1px rgba(255, 255, 255, 0.2);
          }
          .mission-text-container {
            padding: 25px 20px;
          }
        }
      `}</style>
    </section>
  );
}
