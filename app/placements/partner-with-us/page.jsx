"use client";

import React from "react";
import { locationData } from "@/data/officeLocation";
import Preloader from "@/components/common/Preloader";
import Header from "@/components/layout/headers/Header";

export default function PartnerWithUs() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle partnership form submission here
  };

  return (
    <div className="content-wrapper js-content-wrapper overflow-hidden">
      {/* ✅ Hero */}
      <section className="page-header -type-4 bg-beige-1 pt-60 pb-60 custom-padding custom-linear-blue-top">
        <div className="container">
          <div className="page-header__content">
            <div className="row">
              <div className="col-auto">
                <h1 className="page-header__title">Partner With Us</h1>
                <p className="page-header__text mt-10">
                  Collaborate with CSEI Academy and become part of a
                  transformative education network.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Form Section */}
      <section className="layout-pt-md layout-pb-lg">
        <div className="container">
          <div className="row y-gap-40 justify-between">
            {/* ✅ Partnership Form */}
            <div className="col-lg-6">
              <div className="px-30 py-30 bg-white border-light shadow-1 rounded-8">
                <h3 className="text-20 fw-500 mb-5">Partnership Inquiry</h3>
                <form
                  className="contact-form row y-gap-20 pt-16"
                  onSubmit={handleSubmit}
                >
                  <div className="col-12">
                    <label className="text-14 fw-500 mb-5">Name</label>
                    <input
                      type="text"
                      required
                      name="name"
                      placeholder="Full name"
                    />
                  </div>

                  <div className="col-12">
                    <label className="text-14 fw-500 mb-5">Company</label>
                    <input
                      type="text"
                      required
                      name="company"
                      placeholder="Company name"
                    />
                  </div>

                  <div className="col-12">
                    <label className="text-14 fw-500 mb-5">Email</label>
                    <input
                      type="email"
                      required
                      name="email"
                      placeholder="Email address"
                    />
                  </div>

                  <div className="col-12">
                    <label className="text-14 fw-500 mb-5">Proposal</label>
                    <textarea
                      name="proposal"
                      rows="4"
                      required
                      placeholder="Tell us about your idea"
                    ></textarea>
                  </div>

                  <div className="col-12">
                    <button
                      type="submit"
                      className="button -sm bg-black text-white w-100"
                    >
                      Request Partnership
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* ✅ Office Info */}
            <div className="col-xl-5 col-lg-6">
              <h3 className="text-24 fw-500">Our Offices</h3>
              <div className="row y-gap-30 pt-40">
                {locationData.map((elm, i) => (
                  <div key={i} className="col-sm-6">
                    <div className="text-20 fw-500 text-dark-1">
                      {elm.location}
                    </div>
                    <div className="y-gap-10 pt-15">
                      <a href="#" className="d-block">
                        {elm.address}
                      </a>
                      <a href="#" className="d-block">
                        {elm.phoneNumber}
                      </a>
                      <a href="#" className="d-block">
                        {elm.email}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
