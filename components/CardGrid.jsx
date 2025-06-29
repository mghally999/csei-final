"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import Link from "next/link";

export default function CardGrid({
  title,
  description,
  cards,
  bgColor = "bg-[#160643]",
  textColor = "text-dark-1",
}) {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <section className={`layout-pt-lg layout-pb-lg ${bgColor} ${textColor}`}>
      <div className="container">
        <div className="row justify-center text-center mb-60">
          <div className="col-auto" data-aos="fade-up">
            <h1 className="text-40 fw-700 mb-20">{title}</h1>
            <p className="text-16 max-w-600 mx-auto">{description}</p>
          </div>
        </div>

        <div className="row y-gap-50">
          {cards.map((card, index) => (
            <div
              className="col-lg-6 col-md-6"
              key={index}
              data-aos="fade-up"
              data-aos-delay={(index % 2) * 100}
            >
              <div className="border border-[#1F2A64] bg-white text-[#160643] rounded-16 p-30 h-100 shadow-md hover:shadow-xl transition-all duration-300">
                <div className="row y-gap-30 items-center">
                  <div className="col-md-6">
                    <Image
                      src={card.image}
                      alt={card.title}
                      width={400}
                      height={300}
                      className="rounded-8 w-full h-[200px] object-cover"
                    />
                  </div>
                  <div className="col-md-6">
                    <h3 className="text-20 fw-700 mb-10">{card.title}</h3>
                    <p className="text-14 mb-20">{card.description}</p>
                    <Link
                      href={card.link}
                      className="inline-block bg-[#160643] text-dark-1 text-14 fw-600 px-20 py-10 rounded-full hover:bg-[#1F2A64] transition"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
