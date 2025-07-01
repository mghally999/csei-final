"use client";

import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import React from "react";
import { useRouter } from "next/navigation";

export default function HomeBannerSlider() {
  const router = useRouter();

  // Using direct image paths - make sure these match your actual image files
  const slidesData = [
    {
      id: 1,
      bgImage: "/public/assets/img/september-intake-1.jpg",
      title: "Top Categories",
      stats: [
        { label: "Certificates", value: "573+ Courses" },
        { label: "Diplomas", value: "565+ Courses" },
        { label: "Bachelors", value: "126+ Courses" },
        { label: "Professional", value: "35+ Courses" },
      ],
      trendingTitle: "Trending Programs for September Intake 2025",
      trendingText:
        "Explore our most popular programs across various disciplines",
      ctaText: "View All Programs",
      ctaLink: "/programs",
    },
    {
      id: 2,
      bgImage: "/public/assets/img/september-intake-2.jpg",
      title: "Healthcare Programs",
      stats: [
        { label: "Nursing", value: "42 Programs" },
        { label: "Pharmacy", value: "18 Programs" },
        { label: "Physiotherapy", value: "15 Programs" },
        { label: "Medical Lab", value: "12 Programs" },
      ],
      trendingTitle: "Healthcare Specializations",
      trendingText:
        "Start your career in the medical field with our accredited programs",
      ctaText: "Explore Healthcare",
      ctaLink: "/healthcare",
    },
    {
      id: 3,
      bgImage: "/img/september-intake-3.jpg",
      title: "Business Programs",
      stats: [
        { label: "Management", value: "58 Programs" },
        { label: "Marketing", value: "32 Programs" },
        { label: "Finance", value: "24 Programs" },
        { label: "Entrepreneurship", value: "18 Programs" },
      ],
      trendingTitle: "Business Degrees",
      trendingText: "Develop skills for the modern business world",
      ctaText: "View Business Courses",
      ctaLink: "/business",
    },
  ];

  return (
    <div className="relative w-full h-[80vh] min-h-[500px] bg-gray-100">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        autoplay={{ delay: 7000, disableOnInteraction: false }}
        navigation={{
          nextEl: ".hero-slider-next",
          prevEl: ".hero-slider-prev",
        }}
        pagination={{ clickable: true }}
        spaceBetween={0}
        slidesPerView={1}
        speed={1200}
        className="h-full w-full"
      >
        {slidesData.map((slide) => (
          <SwiperSlide key={slide.id} className="relative">
            {/* Fallback background color if image fails to load */}
            <div className="absolute inset-0 bg-blue-900 z-0"></div>

            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center z-0"
              style={{
                backgroundImage: `url(${slide.bgImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/50 z-10"></div>

            {/* Content */}
            <div className="relative z-20 h-full flex items-center justify-center p-4">
              <div className="max-w-6xl mx-auto w-full px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  {/* Left Column - Stats */}
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
                    <h2 className="text-2xl font-bold text-white mb-6">
                      {slide.title}
                    </h2>
                    <div className="grid grid-cols-2 gap-4">
                      {slide.stats.map((stat, index) => (
                        <div key={index} className="bg-white/5 p-4 rounded-lg">
                          <div className="text-2xl font-bold text-white">
                            {stat.value}
                          </div>
                          <div className="text-sm text-white/80">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right Column - Trending Programs */}
                  <div className="text-white">
                    <h3 className="text-xl md:text-2xl font-bold mb-4">
                      {slide.trendingTitle}
                    </h3>
                    <p className="text-lg mb-6">{slide.trendingText}</p>
                    <button
                      onClick={() => router.push(slide.ctaLink)}
                      className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
                    >
                      {slide.ctaText}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Arrows */}
      <button className="hero-slider-prev absolute left-4 top-1/2 z-30 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white size-12 rounded-full flex justify-center items-center transition-colors duration-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button className="hero-slider-next absolute right-4 top-1/2 z-30 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white size-12 rounded-full flex justify-center items-center transition-colors duration-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
}
