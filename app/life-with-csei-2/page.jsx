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

const lifeWithCSEICards = [
  {
    title: "Student Life Overview",
    description:
      "Experience a campus culture designed to inspire growth, creativity, and lifelong connections.",
    link: "/life-with-csei/overview",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Student Clubs",
    description:
      "Join vibrant student-led clubs that cultivate leadership, innovation, and community engagement.",
    link: "/life-with-csei/student-clubs",
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Accommodation",
    description:
      "Live in comfort with our fully equipped and secure student housing options.",
    link: "/life-with-csei/accommodation",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Transportation",
    description:
      "Convenient access to campus via metro, shuttle services, and public transportation.",
    link: "/life-with-csei/transportation",
    image:
      "https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Alumni Network",
    description:
      "Stay connected with fellow graduates through events, mentorships, and job opportunities.",
    link: "/life-with-csei/alumni-network",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Student Portal",
    description:
      "Access your academic resources, schedules, and grades in one secure portal.",
    link: "/life-with-csei/student-portal",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Mentoring Support",
    description:
      "Receive one-on-one guidance and career mentorship from experienced faculty and industry professionals.",
    link: "/life-with-csei/mentoring-support",
    image:
      "https://images.unsplash.com/photo-1596495577886-d920f1fb7238?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "LMS & Academic Systems",
    description:
      "Seamlessly access learning materials, submit assignments, and track progress through our advanced LMS.",
    link: "/life-with-csei/lms-portal",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
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
                <h1 className="text-40 fw-700 mb-20">Life With CSEI</h1>
                <p className="text-16 max-w-600 mx-auto">
                  Explore a holistic student experience that blends learning,
                  living, and leadership at CSEI Academy.
                </p>
              </div>
            </div>

            <div className="row y-gap-50">
              {lifeWithCSEICards.map((card, index) => (
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
