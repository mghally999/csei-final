"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "@/components/layout/headers/Header";
import FooterOne from "@/components/layout/footers/FooterOne";
import Preloader from "@/components/common/Preloader";
import PageLinks from "@/components/common/PageLinks";
import Image from "next/image";

const partners = [
  {
    name: "Emirates Group",
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/dc/Emirates_logo.svg",
  },
  {
    name: "Dubai Health Authority",
    logo: "https://upload.wikimedia.org/wikipedia/en/0/0f/Dubai_Health_Authority_Logo.svg",
  },
  {
    name: "Microsoft",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  },
  {
    name: "Majid Al Futtaim",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/ff/Majid_Al_Futtaim_logo.svg",
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
      <div className="content-wrapper js-content-wrapper">
        <PageLinks />

        <section className="layout-pt-lg layout-pb-lg bg-[#160643] text-white">
          <div className="container">
            <div className="row justify-center text-center mb-60">
              <div className="col-auto" data-aos="fade-up">
                <h1 className="text-40 fw-700 mb-20">
                  Our Internship Partners
                </h1>
                <p className="text-16 max-w-600 mx-auto">
                  Collaborating with industry leaders to offer hands-on
                  professional experiences to our students.
                </p>
              </div>
            </div>

            <div className="row y-gap-40 justify-center items-center">
              {partners.map((partner, index) => (
                <div
                  className="col-lg-3 col-md-4 col-sm-6 text-center"
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="bg-white p-20 rounded-12 h-100 shadow-md hover:shadow-xl transition">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      width={160}
                      height={80}
                      className="mx-auto h-[80px] object-contain"
                    />
                    <h4 className="text-16 fw-600 mt-20 text-dark-1">
                      {partner.name}
                    </h4>
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
