"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import PageLinks from "@/components/common/PageLinks";
import Image from "next/image";
import Link from "next/link";

export default function CardGridLayout({
  title,
  description,
  cards,
  bgColor = "bg-[#160643]",
  textColor = "text-dark-1",
  showPageLinks = true,
  className = "",
  cta = {
    text: "Need more information?",
    link: "/contact",
    label: "Contact Us",
  },
}) {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <div className={`main-content ${className}`}>
      <div className="content-wrapper js-content-wrapper overflow-hidden">
        {showPageLinks && <PageLinks />}

        <section
          className={`layout-pt-lg layout-pb-lg ${bgColor} ${textColor}`}
        >
          <div className="container">
            <div className="row justify-center text-center mb-60">
              <div className="col-auto" data-aos="fade-up">
                <h1 className="text-40 fw-700 mb-20">{title}</h1>
                <p className="text-16 max-w-600 mx-auto">{description}</p>
              </div>
            </div>

            <div className="row y-gap-50">
              {cards.map((card, index) => {
                // Create a unique key combining id and index as fallback
                const uniqueKey = card.id
                  ? `${card.id}-${index}`
                  : `card-${index}`;

                return (
                  <div
                    className="col-lg-6 col-md-6"
                    key={uniqueKey} // Use the unique key here
                    data-aos="fade-up"
                    data-aos-delay={(index % 2) * 100}
                  >
                    <div className="border border-[#1F2A64] bg-white text-[#160643] rounded-16 p-30 h-100 shadow-md hover:shadow-xl transition-all duration-300">
                      <div className="row y-gap-30 items-center">
                        <div className="col-md-6">
                          <Image
                            src={card.image.url}
                            alt={card.image.alt}
                            width={400}
                            height={300}
                            className="rounded-8 w-full h-[200px] object-cover"
                            priority={index < 4}
                          />
                        </div>
                        <div className="col-md-6">
                          <h2 className="text-20 fw-700 mb-10">{card.title}</h2>
                          <p className="text-14 mb-15">{card.description}</p>

                          {card.stats && (
                            <ul className="text-12 mb-15 space-y-1">
                              {card.stats.map((stat, i) => (
                                <li
                                  key={`${uniqueKey}-stat-${i}`}
                                  className="flex items-center"
                                >
                                  <span className="inline-block w-2 h-2 bg-[#160643] rounded-full mr-2"></span>
                                  {stat}
                                </li>
                              ))}
                            </ul>
                          )}

                          <Link
                            href={card.link}
                            className="inline-block bg-[#160643] text-white text-14 fw-600 px-20 py-10 rounded-full hover:bg-[#1F2A64] transition"
                            aria-label={`Learn more about ${card.title}`}
                          >
                            Learn More
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {cta && (
              <div className="row justify-center mt-60" data-aos="fade-up">
                <div className="col-auto text-center">
                  <p className="text-16 mb-20">{cta.text}</p>
                  <Link
                    href={cta.link}
                    className="inline-block bg-white text-[#160643] text-14 fw-600 px-30 py-12 rounded-full hover:bg-gray-100 transition"
                  >
                    {cta.label}
                  </Link>
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
