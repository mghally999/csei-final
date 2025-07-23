"use client";

import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { slidesData } from "@/data/home/home";
import HeroSliderModal from "@/components/HeroSliderModal";

export default function HomeHeroSlider() {
  const [showModal, setShowModal] = useState(false);
  const [hover, setHover] = useState(false);

  return (
    <section
      className="mainSlider -type-1 js-mainSlider"
      style={{
        position: "relative",
        height: "100vh",
        minHeight: "600px",
        width: "100vw",
        overflow: "hidden",
        left: "50%",
        right: "50%",
        marginLeft: "-50vw",
        marginRight: "-50vw",
      }}
    >
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        autoplay={{ delay: 10000, disableOnInteraction: false }}
        navigation={{
          nextEl: ".hero-slider-next",
          prevEl: ".hero-slider-prev",
        }}
        pagination={{
          clickable: true,
          el: ".hero-slider-pagination",
          bulletClass: "custom-bullet",
          bulletActiveClass: "custom-bullet-active",
          renderBullet: (index, className) => {
            return `<span class="${className}"></span>`;
          },
        }}
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          left: 0,
          top: 0,
        }}
      >
        {slidesData.map((item, i) => (
          <SwiperSlide key={i}>
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "100vh",
                minHeight: "600px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {/* Background Image */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundImage: `url(${item.bgImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  zIndex: 1,
                }}
              />
              {/* Overlay */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(0,0,0,0.5)",
                  zIndex: 2,
                }}
              />
              {/* Content */}
              <div
                className="hero-content-container"
                style={{
                  position: "absolute",
                  top: "60%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: "90%",
                  maxWidth: "750px",
                  zIndex: 3,
                  color: "white",
                  textAlign: "center",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  padding: "clamp(20px, 4vw, 40px)",
                  borderRadius: "12px",
                  backdropFilter: "blur(4px)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <h1
                  style={{
                    fontSize: "clamp(1.8rem, 5vw, 3rem)",
                    fontWeight: "800",
                    marginBottom: "1rem",
                    color: "#fff",
                    lineHeight: "1.2",
                  }}
                >
                  {item.title}
                </h1>
                <div
                  style={{
                    fontSize: "clamp(1rem, 2.5vw, 1.5rem)",
                    color: "rgba(255,255,255,0.95)",
                    fontWeight: "600",
                    marginBottom: "1.2rem",
                    lineHeight: "1.3",
                  }}
                >
                  {item.subtitle}
                </div>
                {item.description && (
                  <div
                    style={{
                      fontSize: "clamp(0.9rem, 2vw, 1.1rem)",
                      color: "rgba(255,255,255,0.85)",
                      marginBottom: "2rem",
                      lineHeight: "1.5",
                    }}
                  >
                    {item.description}
                  </div>
                )}
                {item.ctaText && (
                  <>
                    <Link
                      href="/programs"
                      className="hero-cta-button"
                      style={{
                        padding:
                          "clamp(12px, 2vw, 16px) clamp(24px, 4vw, 32px)",
                        backgroundColor: hover ? "#000" : "#f97316",
                        color: "#fff",
                        borderRadius: "8px",
                        fontWeight: "700",
                        cursor: "pointer",
                        fontSize: "clamp(1rem, 2vw, 1.2rem)",
                        border: "none",
                        boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                        transition: "background-color 0.3s ease",
                        marginBottom: "20px",
                        textDecoration: "none",
                        display: "inline-block",
                      }}
                      onMouseEnter={() => setHover(true)}
                      onMouseLeave={() => setHover(false)}
                    >
                      {item.ctaText}
                    </Link>
                  </>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Pagination */}
      <div
        className="hero-slider-pagination"
        style={{
          position: "absolute",
          bottom: "30px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 10,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
        }}
      />

      {/* Navigation */}
      <button
        className={`
    hero-slider-prev absolute top-1/2 transform -translate-y-1/2 z-10
    left-2 sm:left-6 w-[35px] h-[35px] sm:w-[45px] sm:h-[45px]
    rounded-full bg-black/70 text-white border-none
    flex items-center justify-center cursor-pointer
    opacity-90 hover:opacity-100 transition-opacity duration-300
  `}
      >
        <i className="icon icon-arrow-left" />
      </button>

      <button
        className={`
    hero-slider-next absolute top-1/2 transform -translate-y-1/2 z-10
    right-2 sm:right-6 w-[35px] h-[35px] sm:w-[45px] sm:h-[45px]
    rounded-full bg-black/70 text-white border-none
    flex items-center justify-center cursor-pointer
    opacity-90 hover:opacity-100 transition-opacity duration-300
  `}
      >
        <i className="icon icon-arrow-right" />
      </button>

      {/* Modal */}
      <HeroSliderModal isOpen={showModal} onClose={() => setShowModal(false)} />

      {/* GLOBAL STYLES */}
      <style jsx global>{`
        html,
        body {
          overflow-x: hidden;
          width: 100%;
        }

        .custom-bullet {
          width: 12px;
          height: 12px;
          background: rgba(255, 255, 255, 0.5) !important;
          border-radius: 50%;
          margin: 0 6px !important;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .custom-bullet-active {
          background: #fff !important;
          transform: scale(1.2);
        }

        /* Wrapper that becomes column on phones */
        .responsive-logo-wrapper {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 16px;
          margin-top: 10px;
          width: 100%;
        }

        /* Base logo container */
        .responsive-logo-container {
          background-color: rgba(255, 255, 255, 0.9);
          padding: 8px;
          border-radius: 8px;
          width: 200px;
          height: 130px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
        }

        .responsive-logo-img {
          object-fit: contain;
          width: 100%;
          height: 100%;
        }

        /* Tablet view */
        @media (max-width: 1024px) {
          .hero-content-container {
            padding: 30px !important;
            top: 40% !important;
          }

          .responsive-logo-container {
            width: 160px;
            height: 100px;
          }
        }

        /* Small tablet view */
        @media (max-width: 768px) {
          .hero-content-container {
            width: 95% !important;
            padding: 25px !important;
          }

          .responsive-logo-container {
            width: 140px;
            height: 90px;
          }
        }

        /* Phone view: column layout */
        @media (max-width: 640px) {
          .hero-content-container {
            top: 38% !important;
            padding: 20px !important;
            backdrop-filter: blur(2px);
          }

          .responsive-logo-wrapper {
            flex-direction: column;
            align-items: center;
            gap: 12px;
            display: flex;
            flex-direction: row;
          }

          .responsive-logo-container {
            width: 120px;
            height: 80px;
            padding: 6px;
          }

          .hero-cta-button {
            width: 100%;
            text-align: center;
          }
        }

        /* Small phone view */
        @media (max-width: 480px) {
          .hero-content-container {
            padding: 15px !important;
          }

          .responsive-logo-container {
            width: 100px;
            height: 70px;
          }
        }

        /* Extra small phone view */
        @media (max-width: 360px) {
          .responsive-logo-container {
            width: 90px;
            height: 60px;
          }
        }
      `}</style>
    </section>
  );
}
