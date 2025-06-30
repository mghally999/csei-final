"use client";

import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import React from "react";
import { slidesData } from "@/data/home/home";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <section className="mainSlider -type-1 js-mainSlider customizedHeroBackground">
      <div className="swiper-wrapper-two">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          autoplay={{
            // delay: 4000, // ✅ 3 seconds
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: ".hero-slider-next",
            prevEl: ".hero-slider-prev",
          }}
          pagination={{ clickable: true }}
          spaceBetween={0}
          style={{ maxWidth: "100vw", height: "100%" }}
          slidesPerView={1}
          breakpoints={{
            450: { slidesPerView: 1 },
            768: { slidesPerView: 1 },
            1200: { slidesPerView: 1 },
          }}
          speed={1200}
        >
          {slidesData.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="swiper-slide hightFull relative">
                <div className="mainSlider__bg relative">
                  {/* ✅ Background Image */}
                  <div
                    className="bg-image js-lazy customedBg absolute inset-0 z-0"
                    style={{
                      backgroundImage: `url(${item.bgImage})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  ></div>

                  {/* ✅ Black Overlay */}
                  <div className="absolute inset-0 bg-black/60 z-10"></div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="container">
        <div className="row justify-center text-center">
          <div className="col-xl-6 col-lg-8">
            <div
              className="mainSlider__content"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <h1 className="mainSlider__title text-white">
                Accredited UK Diplomas and KHDA Approved Programmes
              </h1>
              <p className="mainSlider__text text-black-1">
                Healthcare, Tourism, Business, IT and Culinary Arts
              </p>
              <p className="mainSlider__text text-black-1 mt-10">
                CSEI Academy is proudly accredited by globally recognized
                institutions.
              </p>
              {/* Optional search form */}
              {/* <div className="mainSlider__form">
                <input
                  required
                  type="text"
                  placeholder="What do you want to learn today?"
                />
                <button
                  className="button -md -purple-1 text-white"
                  onClick={() => router.push("/courses-list-1")}
                >
                  <i className="icon icon-search mr-15"></i>
                  Search
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      <button className="swiper-prev hero-slider-prev button -white-20 text-white size-60 rounded-full d-flex justify-center items-center js-prev">
        <i className="icon icon-arrow-left text-24"></i>
      </button>

      <button className="swiper-next hero-slider-next button -white-20 text-white size-60 rounded-full d-flex justify-center items-center js-next">
        <i className="icon icon-arrow-right text-24"></i>
      </button>
    </section>
  );
}
