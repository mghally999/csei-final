"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "@/components/layout/headers/Header";
import FooterOne from "@/components/layout/footers/FooterOne";
import Preloader from "@/components/common/Preloader";
import PageLinks from "@/components/common/PageLinks";
import Image from "next/image";
import Link from "next/link";

const placementCards = [
  {
    title: "Placement Objectives",
    description:
      "Discover our strategic goals for student career success and industry alignment.",
    link: "/placements/objectives",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Placement Overview",
    description:
      "See how we connect students with top employers through our comprehensive programs.",
    link: "/placements/overview",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Why Recruit CSEI Students",
    description:
      "Learn what makes our graduates stand out in the competitive job market.",
    link: "/placements/why-csei",
    image:
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Our Services",
    description:
      "Explore the range of placement services we offer to students and recruiters.",
    link: "/placements/services",
    image:
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=800&q=80",
  },
];

export default function Page() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <div className="main-content">
      <Preloader />
      <Header />

      <div className="content-wrapper js-content-wrapper overflow-hidden">
        <PageLinks />

        <section className="layout-pt-lg layout-pb-lg bg-[#160643] text-dark-1">
          <div className="container">
            <div className="row justify-center text-center mb-60">
              <div className="col-auto" data-aos="fade-up">
                <h1 className="text-40 fw-700 mb-20">Placement Programs</h1>
                <p className="text-16 max-w-600 mx-auto">
                  Bridging academic excellence with career success through our
                  comprehensive placement initiatives.
                </p>
              </div>
            </div>

            <div className="row y-gap-50">
              {placementCards.map((card, index) => (
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

        <FooterOne />
      </div>
    </div>
  );
}
