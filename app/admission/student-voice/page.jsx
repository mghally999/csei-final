"use client";
import Image from "next/image";

import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// import 'swiper/swiper.min.css';
import { testimonials } from "@/data/tesimonials";
import { counters } from "@/data/count";
import Link from "next/link";
// SwiperCore.use([Pagination]);

export default function TestimonialsOne() {
  return (
    <section className="layout-pb-lg custom-linear-blue-top custom-padding">
      <div className="container ">
        <div className="row justify-center text-center">
          <div className="col-auto">
            <div className="sectionTitle ">
              <h2 className="sectionTitle__title text-black">
                What Students Say
              </h2>
            </div>
          </div>
        </div>

        <div className="js-section-slider pt-50">
          <Swiper
            className="overflow-visible"
            // {...setting}
            modules={[Navigation, Pagination]}
            navigation={{
              nextEl: ".icon-arrow-right",
              prevEl: ".icon-arrow-left",
            }}
            loop={true}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              // when window width is >= 576px
              450: {
                slidesPerView: 1,
              },
              // when window width is >= 768px
              768: {
                slidesPerView: 2,
              },
              1200: {
                // when window width is >= 992px
                slidesPerView: 3,
              },
            }}
          >
            {testimonials.map((elm, i) => (
              <SwiperSlide key={i} className="swiper-slide">
                <div
                  className="testimonials -type-1"
                  data-aos="fade-left"
                  data-aos-duration={(i + 1) * 550}
                >
                  <div className="testimonials__content">
                    <h4 className="testimonials__title">{elm.comment}</h4>
                    <p className="testimonials__text">
                      {`“${elm.description}”`}
                    </p>

                    <div className="testimonials-footer">
                      <div className="testimonials-footer__image">
                        <Image
                          width={60}
                          height={60}
                          src={elm.imageSrc}
                          alt="image"
                        />
                      </div>

                      <div className="testimonials-footer__content">
                        <div className="testimonials-footer__title">
                          {elm.name}
                        </div>
                        <div className="testimonials-footer__text">
                          {elm.position}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="d-flex x-gap-20 items-center justify-end pt-60 lg:pt-40">
            <div className="col-auto">
              <button
                className="-outline-white text-white size-50 rounded-full d-flex justify-center items-center  js-prev"
                style={{ backgroundColor: "#000000" }}
              >
                <i className="icon icon-arrow-left text-24"></i>
              </button>
            </div>
            <div className="col-auto">
              <button
                className="-outline-white text-white size-50 rounded-full d-flex justify-center items-center js-next"
                style={{ backgroundColor: "#000000" }}
              >
                <i className="icon icon-arrow-right text-24"></i>
                {/* button content here */}
              </button>
            </div>
          </div>
        </div>

        <div className="row y-gap-30 counter__row">
          {counters.map((elm, i) => (
            <div
              key={i}
              className="col-lg-3 col-sm-6"
              data-aos="fade-left"
              data-aos-duration={(i + 1) * 350}
            >
              <Link href="/placements" className="block cursor-pointer group">
                <div className="counter -type-1 transition duration-300 group-hover:scale-[1.03]">
                  <div className="counter__number text-white group-hover:text-yellow-300 text-black">
                    {elm.number}
                  </div>
                  <div className="counter__title text-white group-hover:text-yellow-300 text-black">
                    {elm.title}
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
