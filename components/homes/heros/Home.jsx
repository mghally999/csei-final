"use client";

import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { slidesData } from "@/data/home/home";
import { useRouter } from "next/navigation";

export default function HomeHeroSlider() {
  const router = useRouter();

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
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
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

              {/* Dark Overlay */}
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

              {/* Content Box */}
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
                    marginBottom: "1rem",
                    fontWeight: "800",
                    lineHeight: 1.2,
                    color: "#ffffff",
                    textShadow: "0 2px 4px rgba(0,0,0,0.3)",
                    width: "100%",
                  }}
                >
                  {item.title}
                </h1>

                <div
                  style={{
                    width: "100%",
                    marginBottom: "1.5rem",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  {typeof item.subtitle === "string" ? (
                    <p
                      style={{
                        fontSize: "clamp(1rem, 2.5vw, 1.5rem)",
                        color: "rgba(255,255,255,0.95)",
                        fontWeight: "600",
                        lineHeight: 1.4,
                        margin: 0,
                      }}
                    >
                      {item.subtitle}
                    </p>
                  ) : (
                    item.subtitle
                  )}
                </div>

                {item.description && (
                  <p
                    style={{
                      fontSize: "clamp(0.9rem, 2vw, 1.1rem)",
                      marginBottom: "2rem",
                      color: "rgba(255,255,255,0.85)",
                      lineHeight: 1.6,
                      fontWeight: "500",
                      width: "100%",
                    }}
                  >
                    {item.description}
                  </p>
                )}

                {item.ctaText && (
                  <button
                    onClick={() => router.push(item.ctaLink)}
                    style={{
                      padding: "clamp(12px, 2vw, 16px) clamp(24px, 4vw, 32px)",
                      backgroundColor: "#f97316",
                      color: "white",
                      border: "none",
                      borderRadius: "8px",
                      cursor: "pointer",
                      fontSize: "clamp(1rem, 2vw, 1.2rem)",
                      fontWeight: "700",
                      transition: "all 0.3s ease",
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

      {/* Custom Bullet Points */}
      <style jsx global>{`
        .custom-bullet {
          width: 12px;
          height: 12px;
          background: #000000 !important;
          opacity: 1;
          margin: 0 6px !important;
        }
        .custom-bullet-active {
          background: #000000 !important;
          transform: scale(1.2);
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
      <button
        className="hero-slider-prev"
        style={{
          position: "absolute",
          top: "50%",
          left: "10px",
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
        }}
      >
        <i className="icon icon-arrow-left" style={{ fontSize: "20px" }}></i>
      </button>

      <button
        className="hero-slider-next"
        style={{
          position: "absolute",
          top: "50%",
          right: "10px",
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
        }}
      >
        <i className="icon icon-arrow-right" style={{ fontSize: "20px" }}></i>
      </button>
    </section>
  );
}
