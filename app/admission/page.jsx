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

const admissionCards = [
  {
    title: "Online Application",
    description:
      "Begin your journey with a streamlined, online application process designed for convenience and clarity.",
    link: "/admission/online-application",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Admission Process",
    description:
      "Understand each step from application to acceptance in our well-structured admission process.",
    link: "/admission/admission-process",
    image:
      "https://images.unsplash.com/photo-1558021212-51b6ecfa0db9?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "International Students",
    description:
      "Support and resources tailored for students joining us from around the world.",
    link: "/admission/international-students",
    image:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Tuition and Fees",
    description:
      "Explore transparent fee structures and payment options suited to every program.",
    link: "/admission/tuition-and-fees",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Financial Aid & Scholarships",
    description:
      "Unlock your potential with our merit-based and need-based financial support programs.",
    link: "/admission/financial-aid-scholarships",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Student Voice",
    description:
      "Hear directly from our students about life, learning, and growth at CSEI.",
    link: "/admission/student-voice",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80",
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
                <h1 className="text-40 fw-700 mb-20">Admissions at CSEI</h1>
                <p className="text-16 max-w-600 mx-auto">
                  Navigate your path to excellence with our detailed admission
                  process, international support, and financial options.
                </p>
              </div>
            </div>

            <div className="row y-gap-50">
              {admissionCards.map((card, index) => (
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
