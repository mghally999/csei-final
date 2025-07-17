"use client";

import React, { useState } from "react";
import { locationData } from "@/data/officeLocation";
import Preloader from "@/components/common/Preloader";
import Header from "@/components/layout/headers/Header";

export default function ContactTwo() {
  const [activeTab, setActiveTab] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // Function to generate Google Maps embed URL
  const generateMapUrl = (address) => {
    const encodedAddress = encodeURIComponent(address);
    return `https://www.google.com/maps?q=${encodedAddress}&output=embed`;
  };

  return (
    <div className="main-content">
      <Preloader />
      <Header />

      <div className="content-wrapper js-content-wrapper overflow-hidden">
        {/* ✅ Hero */}
        <section className="page-header -type-4 bg-beige-1 pt-60 pb-60 custom-padding">
          <div className="container">
            <div className="page-header__content">
              <div className="row">
                <div className="col-auto">
                  <h1 className="page-header__title">Contact Us</h1>
                  <p className="page-header__text mt-10">
                    We're on a mission to deliver engaging, curated
                    <br /> courses at a reasonable price.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ✅ Tabs */}
        <section className="layout-pt-md">
          <div className="container">
            <div className="tabs -active-purple-2 js-tabs">
              <div className="tabs__controls d-flex js-tabs-controls justify-center">
                <button
                  onClick={() => setActiveTab(1)}
                  className={`tabs__button js-tabs-button ${
                    activeTab === 1 ? "is-active" : ""
                  }`}
                >
                  Student Form
                </button>
                <button
                  onClick={() => setActiveTab(2)}
                  className={`tabs__button js-tabs-button ml-30 ${
                    activeTab === 2 ? "is-active" : ""
                  }`}
                >
                  Partner With Us
                </button>
              </div>

              <div className="tabs__content pt-20 js-tabs-content">
                <div className="tabs__pane is-active">
                  <div className="row y-gap-40 justify-between">
                    {/* ✅ Contact Form */}
                    <div className="col-lg-6">
                      <div className="px-30 py-30 bg-white border-light shadow-1 rounded-8">
                        <h3 className="text-20 fw-500 mb-5">
                          {activeTab === 1
                            ? "Student Contact"
                            : "Partnership Inquiry"}
                        </h3>
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

                          {activeTab === 2 && (
                            <div className="col-12">
                              <label className="text-14 fw-500 mb-5">
                                Company
                              </label>
                              <input
                                type="text"
                                required
                                name="company"
                                placeholder="Company name"
                              />
                            </div>
                          )}

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
                            <label className="text-14 fw-500 mb-5">
                              {activeTab === 1 ? "Message" : "Proposal"}
                            </label>
                            <textarea
                              name={activeTab === 1 ? "message" : "proposal"}
                              rows="3"
                              placeholder={
                                activeTab === 1
                                  ? "Write your message..."
                                  : "Tell us about your idea"
                              }
                              required
                            ></textarea>
                          </div>

                          <div className="col-12">
                            <button
                              type="submit"
                              className="button -sm bg-black text-white w-100"
                            >
                              {activeTab === 1
                                ? "Send Message"
                                : "Request Partnership"}
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>

                    {/* ✅ Office + Map */}
                    <div className="col-xl-5 col-lg-6">
                      <h3 className="text-24 fw-500">Our Office</h3>
                      <div className="row y-gap-40 pt-40">
                        {locationData.map((office) => (
                          <div key={office.id} className="col-12">
                            <div className="text-20 fw-500 text-dark-1">
                              {office.location}
                            </div>
                            <div className="y-gap-10 pt-15 mb-10">
                              <p>{office.address}</p>
                              <a
                                href={`tel:${office.phoneNumber}`}
                                className="d-block"
                              >
                                {office.phoneNumber}
                              </a>
                              <a
                                href={`mailto:${office.email}`}
                                className="d-block"
                              >
                                {office.email}
                              </a>
                            </div>

                            {/* ✅ Google Maps Embed */}
                            <div className="overflow-hidden rounded-8 border-light">
                              <iframe
                                src={generateMapUrl(office.address)}
                                width="100%"
                                height="220"
                                style={{
                                  border: 0,
                                  borderRadius: "8px",
                                  width: "100%",
                                }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                              ></iframe>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    {/* End office map */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
