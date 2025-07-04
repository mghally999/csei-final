"use client";

import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { slidesData } from "@/data/home/home";
import { useState } from "react";
import EnquiryModal from "@/components/EnquiryModal";

export default function HomeHeroSlider() {
  const [showModal, setShowModal] = useState(false);

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
          el: ".swiper-pagination",
          bulletClass: "custom-bullet",
          bulletActiveClass: "custom-bullet-active",
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
                <p
                  style={{
                    fontSize: "clamp(1rem, 2.5vw, 1.5rem)",
                    color: "rgba(255,255,255,0.95)",
                    fontWeight: "600",
                    marginBottom: "1.2rem",
                  }}
                >
                  {item.subtitle}
                </p>
                {item.description && (
                  <p
                    style={{
                      fontSize: "clamp(0.9rem, 2vw, 1.1rem)",
                      color: "rgba(255,255,255,0.85)",
                      marginBottom: "2rem",
                    }}
                  >
                    {item.description}
                  </p>
                )}
                {item.ctaText && (
                  <button
                    onClick={() => setShowModal(true)}
                    style={{
                      padding: "clamp(12px, 2vw, 16px) clamp(24px, 4vw, 32px)",
                      backgroundColor: "#f97316",
                      color: "#fff",
                      borderRadius: "8px",
                      fontWeight: "700",
                      cursor: "pointer",
                      fontSize: "clamp(1rem, 2vw, 1.2rem)",
                      border: "none",
                      boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                    }}
                  >
                    {item.ctaText}
                  </button>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        .custom-bullet {
          width: 12px;
          height: 12px;
          background: #000 !important;
          margin: 0 6px !important;
        }
        .custom-bullet-active {
          background: #000 !important;
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

      <div
        className="swiper-pagination"
        style={{
          position: "absolute",
          bottom: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 10,
        }}
      />

      {/* Arrows */}
      <button className="hero-slider-prev" style={arrowStyle("left")}>
        <i className="icon icon-arrow-left" />
      </button>
      <button className="hero-slider-next" style={arrowStyle("right")}>
        <i className="icon icon-arrow-right" />
      </button>

      {/* Floating Enquiry Button */}
      <button
        onClick={() => setShowModal(true)}
        style={{
          position: "fixed",
          top: "30%",
          right: "20px",
          zIndex: 9999,
          backgroundColor: "#2563eb",
          color: "white",
          padding: "14px 20px",
          borderRadius: "50px",
          fontWeight: "600",
          fontSize: "1rem",
          border: "none",
          cursor: "pointer",
          animation: "floatY 3s ease-in-out infinite",
        }}
      >
        Quick Enquiry
      </button>

      {/* ✅ Floating WhatsApp CTA */}
      <a
        href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: "fixed",
          bottom: "65px",
          left: "20px",
          zIndex: 9999,
          backgroundColor: "#25D366",
          color: "white",
          padding: "12px 18px",
          borderRadius: "50px",
          fontWeight: "600",
          fontSize: "1rem",
          border: "none",
          boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          textDecoration: "none",
        }}
      >
        <span>Chat on WhatsApp</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="20"
          width="20"
          viewBox="0 0 448 512"
          fill="white"
        >
          <path d="M380.9 97.1C339-5.9 226.9-26.5 149.1 41.5 70.4 108.6 56.3 231 128.3 301.9c25 24.4 47.8 41.1 82.3 54.1 44.3 17.1 84.4 15.2 124.1-5.3 31.2-16.2 57.3-44.8 68.2-82.8 9.5-33.1 3.6-72.8-22-116.8zM215.9 461.2c-19.8-2.3-39.2-7.7-57.6-15.7l-96.6 25.5 25.8-94.6c-39.3-59.1-38.8-138.8 1.2-198.8 37.4-56.1 98.7-92.6 168.2-94.3 65.5-1.6 127.4 35.1 163.2 90.7 45.8 72.2 33.2 171.3-34.2 230.1-49.7 42.5-121.4 61.8-195.4 56.1z" />
        </svg>
      </a>

      {/* Enquiry Modal */}
      <EnquiryModal isOpen={showModal} onClose={() => setShowModal(false)} />
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
