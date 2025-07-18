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
    particlesRef.current = Array.from({ length: 30 }, (_, i) => {
      const particle = document.createElement("div");
      particle.className = "floating-particle";
      particle.style.setProperty("--i", i);
      sectionRef.current.appendChild(particle);
      return particle;
    });

    // Animate particles
    particlesRef.current.forEach((particle, i) => {
      gsap.to(particle, {
        x: gsap.utils.random(-100, 100),
        y: gsap.utils.random(-100, 100),
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
      y: 100,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
    });

    // Image and text stagger
    gsap.from([imageRef.current, textRef.current], {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
      y: 80,
      opacity: 0,
      duration: 1,
      stagger: 0.3,
      ease: "back.out(1.4)",
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

      {/* Diagonal accent */}
      <div className="diagonal-accent" />

      <div className="container">
        {/* Ultra-bold heading */}
        <h2 className="mission-heading" ref={headingRef}>
          <span className="heading-main">OUR MISSION</span>
          <span className="heading-shadow">OUR MISSION</span>
          <span className="heading-underline" />
        </h2>

        <div className="mission-content">
          {/* Hero image with creative frame */}
          <div className="mission-image-container" ref={imageRef}>
            <div className="image-frame">
              <div className="image-inner">
                <Image
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2070&auto=format&fit=crop"
                  alt="Diverse team collaborating"
                  width={800}
                  height={600}
                  priority
                  className="mission-image"
                />
              </div>
              <div className="image-overlay" />
              <div className="image-caption">
                <span>Empowering Future Leaders</span>
              </div>
            </div>
          </div>

          {/* Mission text with dramatic styling */}
          <div className="mission-text-container" ref={textRef}>
            <div className="text-background">
              <div className="text-content">
                <p className="mission-statement">
                  At <span className="highlight">CSEI Academy</span>, we{" "}
                  <span className="bold-italic">ignite</span> potential through{" "}
                  <span className="underline-accent">accessible education</span>{" "}
                  and an{" "}
                  <span className="underline-accent">
                    inclusive environment
                  </span>{" "}
                  that celebrates diversity.
                </p>

                <div className="mission-points">
                  <div className="point">
                    <div className="point-number">01</div>
                    <div className="point-text">
                      Our dedicated mentors provide
                      <strong>personalized support</strong> to learners from all
                      backgrounds.
                    </div>
                  </div>

                  <div className="point">
                    <div className="point-number">02</div>
                    <div className="point-text">
                      Through <strong>hands-on experiences</strong> and{" "}
                      <strong>industry partnerships</strong>, we bridge academia
                      and real-world success.
                    </div>
                  </div>

                  <div className="point">
                    <div className="point-number">03</div>
                    <div className="point-text">
                      We cultivate <strong>global citizens</strong> equipped to
                      lead and innovate in an evolving world.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Global styles */}
      <style jsx global>{`
        @keyframes particle-float {
          0%,
          100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(20px, -20px);
          }
        }

        .floating-particle {
          position: absolute;
          width: 6px;
          height: 6px;
          background: rgba(255, 255, 255, 0.8);
          border-radius: 50%;
          filter: blur(1px);
          top: calc(var(--i) * 5%);
          left: calc(var(--i) * 5%);
          opacity: calc(var(--i) * 0.03);
          animation: particle-float 5s infinite ease-in-out;
          animation-delay: calc(var(--i) * 0.2s);
        }
      `}</style>

      {/* Component styles */}
      <style jsx>{`
        .mission-section {
          position: relative;
          padding: 180px 20px 200px;
          overflow: hidden;
          background: linear-gradient(135deg, #0a0e23, #1a1f3a);
          color: white;
          isolation: isolate;
        }

        .container {
          position: relative;
          max-width: 1400px;
          margin: 0 auto;
          z-index: 2;
        }

        /* Decorative elements */
        .decorative-circle {
          position: absolute;
          border-radius: 50%;
          filter: blur(60px);
          opacity: 0.15;
          z-index: -1;
        }

        .decorative-circle.large {
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, #e05500, transparent 70%);
          top: -300px;
          right: -300px;
        }

        .decorative-circle.medium {
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, #0070f3, transparent 70%);
          bottom: -200px;
          left: -200px;
        }

        .decorative-circle.small {
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, #7928ca, transparent 70%);
          top: 50%;
          left: 10%;
        }

        .diagonal-accent {
          position: absolute;
          width: 200%;
          height: 150px;
          background: linear-gradient(
            45deg,
            rgba(224, 85, 0, 0.15) 0%,
            transparent 50%,
            rgba(0, 112, 243, 0.15) 100%
          );
          top: 50%;
          left: -50%;
          transform: rotate(-5deg);
          z-index: -1;
        }

        /* Ultra-bold heading */
        .mission-heading {
          position: relative;
          margin: 0 auto 100px;
          text-align: center;
          font-family: "Montserrat", sans-serif;
          font-weight: 900;
          font-size: clamp(3.5rem, 8vw, 7rem);
          text-transform: uppercase;
          letter-spacing: 2px;
          color: transparent;
          -webkit-text-stroke: 2px white;
          line-height: 1;
        }

        .heading-main {
          position: relative;
          display: block;
          z-index: 2;
        }

        .heading-shadow {
          position: absolute;
          top: 8px;
          left: 0;
          width: 100%;
          color: transparent;
          -webkit-text-stroke: 2px rgba(255, 255, 255, 0.2);
          z-index: 1;
        }

        .heading-underline {
          display: block;
          width: 150px;
          height: 8px;
          margin: 30px auto 0;
          background: linear-gradient(90deg, #e05500, #0070f3);
          border-radius: 4px;
          box-shadow: 0 0 20px rgba(224, 85, 0, 0.5);
        }

        /* Content layout */
        .mission-content {
          display: flex;
          flex-wrap: wrap;
          gap: 60px;
          align-items: center;
        }

        /* Image container with creative frame */
        .mission-image-container {
          flex: 1 1 50%;
          position: relative;
          perspective: 1000px;
        }

        .image-frame {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          transform-style: preserve-3d;
          box-shadow: 0 0 0 10px rgba(255, 255, 255, 0.05),
            0 0 0 20px rgba(255, 255, 255, 0.03), 0 30px 60px rgba(0, 0, 0, 0.5);
          transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .mission-image-container:hover .image-frame {
          transform: rotateY(5deg) rotateX(2deg) scale(1.02);
        }

        .image-inner {
          position: relative;
          overflow: hidden;
          border-radius: 10px;
        }

        .mission-image {
          width: 100%;
          height: auto;
          display: block;
          transition: transform 1s ease;
        }

        .mission-image-container:hover .mission-image {
          transform: scale(1.05);
        }

        .image-overlay {
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
          padding: 20px;
          background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
          font-weight: 600;
          letter-spacing: 1px;
          text-align: center;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.5s ease;
        }

        .mission-image-container:hover .image-caption {
          opacity: 1;
          transform: translateY(0);
        }

        /* Mission text container */
        .mission-text-container {
          flex: 1 1 40%;
        }

        .text-background {
          position: relative;
          padding: 50px;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(15px);
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
          overflow: hidden;
        }

        .text-background::before {
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

        .mission-statement {
          font-size: 1.5rem;
          line-height: 1.6;
          margin-bottom: 40px;
          position: relative;
          padding-left: 30px;
          border-left: 4px solid #e05500;
        }

        .mission-statement .highlight {
          color: #e05500;
          font-weight: 700;
        }

        .mission-statement .bold-italic {
          font-weight: 700;
          font-style: italic;
          color: #fff;
          text-shadow: 0 0 10px rgba(224, 85, 0, 0.5);
        }

        .mission-statement .underline-accent {
          position: relative;
          display: inline-block;
        }

        .mission-statement .underline-accent::after {
          content: "";
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 100%;
          height: 3px;
          background: linear-gradient(90deg, #e05500, #0070f3);
          border-radius: 2px;
        }

        /* Mission points */
        .mission-points {
          margin-bottom: 50px;
        }

        .point {
          display: flex;
          gap: 20px;
          margin-bottom: 30px;
          align-items: flex-start;
        }

        .point-number {
          font-size: 1.2rem;
          font-weight: 800;
          color: #e05500;
          min-width: 50px;
          padding-top: 5px;
        }

        .point-text {
          font-size: 1.1rem;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.9);
        }

        .point-text strong {
          color: white;
          font-weight: 600;
          position: relative;
        }

        .point-text strong::after {
          content: "";
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 100%;
          height: 2px;
          background: currentColor;
          opacity: 0.5;
        }

        /* CTA Button */
        .cta-button {
          display: inline-flex;
          align-items: center;
          gap: 15px;
          padding: 18px 35px;
          background: linear-gradient(135deg, #e05500, #c04a00);
          color: white;
          border: none;
          border-radius: 50px;
          font-size: 1.1rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          cursor: pointer;
          box-shadow: 0 5px 15px rgba(224, 85, 0, 0.4),
            0 0 0 2px rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .cta-button::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.2),
            transparent
          );
          transition: 0.5s;
        }

        .cta-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(224, 85, 0, 0.6),
            0 0 0 2px rgba(255, 255, 255, 0.2);
        }

        .cta-button:hover::before {
          left: 100%;
        }

        .arrow-icon {
          width: 20px;
          height: 20px;
          fill: none;
          stroke: currentColor;
          stroke-width: 2;
          stroke-linecap: round;
          stroke-linejoin: round;
          transition: transform 0.3s ease;
        }

        .cta-button:hover .arrow-icon {
          transform: translateX(5px);
        }

        /* Responsive adjustments */
        @media (max-width: 1200px) {
          .mission-section {
            padding: 150px 20px;
          }

          .mission-content {
            gap: 40px;
          }

          .text-background {
            padding: 40px;
          }
        }

        @media (max-width: 992px) {
          .mission-section {
            padding: 120px 20px;
          }

          .mission-content {
            flex-direction: column;
          }

          .mission-image-container,
          .mission-text-container {
            flex: 1 1 100%;
            width: 100%;
          }

          .mission-heading {
            margin-bottom: 80px;
          }
        }

        @media (max-width: 768px) {
          .mission-section {
            padding: 100px 20px;
          }

          .text-background {
            padding: 30px;
          }

          .mission-statement {
            font-size: 1.3rem;
            padding-left: 20px;
          }

          .point {
            flex-direction: column;
            gap: 10px;
          }

          .cta-button {
            padding: 15px 30px;
          }
        }

        @media (max-width: 480px) {
          .mission-section {
            padding: 80px 15px;
          }

          .mission-heading {
            -webkit-text-stroke: 1px white;
          }

          .heading-shadow {
            -webkit-text-stroke: 1px rgba(255, 255, 255, 0.2);
          }

          .text-background {
            padding: 25px 20px;
          }

          .mission-statement {
            font-size: 1.1rem;
            padding-left: 15px;
            border-left-width: 3px;
          }

          .point-text {
            font-size: 1rem;
          }
        }
      `}</style>
    </section>
  );
}
