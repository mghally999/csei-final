"use client";
import Image from "next/image";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { testimonials } from "../../data/tesimonials";
import Link from "next/link";

export default function TestimonialsOne() {
  return (
    <section className="layout-pb-lg custom-linear-blue-top">
      <div className="container">
        {/* ✅ Custom Gradient Heading */}
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto 2rem",
            padding: "0 1rem",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(1.75rem, 5vw, 3.5rem)",
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: "1px",
              background: "linear-gradient(90deg, #000, #3b82f6, #000)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              position: "relative",
              paddingBottom: "1.5rem",
              margin: "0 0 0.5rem 0",
              lineHeight: 1.2,
              textShadow: "0 2px 4px rgba(0,0,0,0.1)",
              textAlign: "center",
            }}
          >
            What Students Say
          </h2>
        </div>

        {/* ✅ Testimonials Swiper */}
        <div className="js-section-slider pt-50">
          <Swiper
            className="overflow-visible"
            modules={[Navigation, Pagination, Autoplay]}
            navigation={{
              nextEl: ".icon-arrow-right",
              prevEl: ".icon-arrow-left",
            }}
            autoplay={{
              delay: 3000, // 3 seconds
              disableOnInteraction: false, // keep autoplay after user interacts
            }}
            loop={true}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              450: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1200: {
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

          {/* ✅ Navigation Buttons */}
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
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
