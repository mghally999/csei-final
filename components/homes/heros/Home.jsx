"use client";

import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaWhatsapp } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { slidesData } from "@/data/home/home";
import { useState } from "react";
import HeroSliderModal from "@/components/HeroSliderModal";
import Link from "next/link";

export default function HomeHeroSlider() {
  const [showModal, setShowModal] = useState(false);
  const [hover, setHover] = useState(false);

  return (
    <section
      className="mainSlider -type-1 js-mainSlider"
      style={{
        position: "relative",
        height: "100vh",
        overflow: "hidden",
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
        style={{ width: "100%", height: "100vh" }}
      >
        {slidesData.map((item, i) => (
          <SwiperSlide key={i}>
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "100vh",
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
                style={{
                  position: "absolute",
                  top: "55%",
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
                    }}
                  >
                    {item.description}
                  </div>
                )}
                {item.ctaText && (
                  <Link
                    href="/programs"
                    style={{
                      padding: "clamp(12px, 2vw, 16px) clamp(24px, 4vw, 32px)",
                      backgroundColor: hover ? "#000" : "#f97316",
                      color: "#fff",
                      borderRadius: "8px",
                      fontWeight: "700",
                      cursor: "pointer",
                      fontSize: "clamp(1rem, 2vw, 1.2rem)",
                      border: "none",
                      boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                      transition: "background-color 0.3s ease",
                    }}
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                  >
                    {item.ctaText}
                  </Link>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Pagination Bullets */}
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

      {/* Navigation Arrows */}
      <button className="hero-slider-prev" style={arrowStyle("left")}>
        <i className="icon icon-arrow-left" />
      </button>
      <button className="hero-slider-next" style={arrowStyle("right")}>
        <i className="icon icon-arrow-right" />
      </button>

      {/* Enquiry Modal */}
      <HeroSliderModal isOpen={showModal} onClose={() => setShowModal(false)} />

      {/* Global Styling */}
      <style jsx global>{`
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
        @keyframes floatY {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
const arrowStyle = (side) => ({
  position: "absolute",
  top: "50%",
  [side]: "10px",
  transform: "translateY(-50%)",
  zIndex: 10,
  width: "clamp(40px, 8vw, 50px)",
  height: "clamp(40px, 8vw, 50px)",
  borderRadius: "50%",
  backgroundColor: "rgba(0,0,0,0.7)",
  color: "white",
  border: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  opacity: "0.9",
});
