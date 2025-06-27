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

const academicCards = [
  {
    title: "School of Computing",
    description:
      "Explore modern programs in computer science, software engineering, and emerging tech fields.",
    link: "/academics/schools/computing",
    image:
      "https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "School of Health Sciences",
    description:
      "Train in healthcare, nursing, public health, and medical technology with hands-on experience.",
    link: "/academics/schools/health-sciences",
    image:
      "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "School of Culinary Arts",
    description:
      "Pursue excellence in culinary techniques, food safety, and hospitality services.",
    link: "/academics/schools/culinary-arts",
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "School of Business",
    description:
      "Master entrepreneurship, finance, and global strategy with real-world applications.",
    link: "/academics/schools/business",
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Scholarships",
    description:
      "Discover available scholarships, eligibility criteria, and how to apply for financial aid.",
    link: "/academics/scholarships",
    image:
      "https://images.unsplash.com/photo-1580894908361-967195033215?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Introduction & Why CSEI",
    description:
      "Learn about our academic philosophy and why students choose CSEI for their education.",
    link: "/academics/intro-why",
    image:
      "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "News & Updates",
    description:
      "Stay informed with the latest announcements, academic changes, and student news.",
    link: "/academics/news",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Academic Support",
    description:
      "Get access to tutoring, mentoring, and support resources to succeed in your studies.",
    link: "/academics/support",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Academic Calendar",
    description:
      "View important academic dates, holidays, exam schedules, and registration deadlines.",
    link: "/academics/calendar",
    image:
      "https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=800&q=80",
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

        <section className="layout-pt-lg layout-pb-lg bg-[#F9FAFB] text-[#160643]">
          <div className="container">
            <div className="row justify-center text-center mb-60">
              <div className="col-auto" data-aos="fade-up">
                <h1 className="text-40 fw-700 mb-20">
                  Explore Our Academic Areas
                </h1>
                <p className="text-16 max-w-600 mx-auto">
                  Navigate through all schools, resources, and essential
                  academic support at CSEI.
                </p>
              </div>
            </div>

            <div className="row y-gap-50">
              {academicCards.map((card, index) => (
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
