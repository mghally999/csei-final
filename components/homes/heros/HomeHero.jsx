"use client";
import Image from "next/image";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import React from "react";
import { featureTwo } from "../../../data/features";
import { slidesData } from "../../../data/hero";
import { useRouter } from "next/navigation";
import About from "@/components/about/About";

export default function HomeHero() {
  const router = useRouter();

  return (
    <section className="mainSlider -type-1 js-mainSlider customizedHeroBackground">
      <div className="swiper-wrapper-two">
        <Swiper
          // {...setting}
          modules={[Navigation, Pagination]}
          navigation={{
            nextEl: ".hero-slider-next",
            prevEl: ".hero-slider-prev",
          }}
          spaceBetween={0}
          style={{ maxWidth: "100vw", height: "100%" }}
          slidesPerView={1}
          breakpoints={{
            // when window width is >= 576px
            450: {
              slidesPerView: 1,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 1,
            },
            1200: {
              // when window width is >= 992px
              slidesPerView: 1,
            },
          }}
          speed={1200}
        >
          {slidesData.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="swiper-slide hightFull">
                <div className="mainSlider__bg">
                  <div
                    className="bg-image js-lazy customedBg"
                    style={{ backgroundImage: `url(${item.bgImage})` }}
                  ></div>
                </div>
              </div>
            </SwiperSlide>
            // 140,90
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
              {/* <h1 className="mainSlider__title text-white">
                Accredited UK Diplomas and KHDA Approved Programmes
              </h1> */}
              {/* <p className="mainSlider__text text-white">
                Healthcare, Tourism, Business, IT and Culinary Arts
              </p>
              <p className="text-16 text-white mt-10">
                CSEI Academy is proudly accredited by globally recognized
                institutions.
              </p> */}
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
