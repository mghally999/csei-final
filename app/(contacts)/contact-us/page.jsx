"use client";

import React, { useState } from "react";
import Preloader from "@/components/common/Preloader";
import Header from "@/components/layout/headers/Header";

export default function ContactTwo() {
  const [activeTab, setActiveTab] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
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
              <div className="tabs__controls d-flex js-tabs-controls justify-center mb-30">
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

                    {/* ✅ Office Info with Location */}
                    <div className="col-xl-5 col-lg-6">
                      <h3 className="text-24 fw-500 mb-20">Our Office</h3>

                      <div className="row y-gap-30 mb-40">
                        <div className="col-12">
                          <div className="text-20 fw-500 text-dark-1 mb-10">
                            CSEI Academy Main Campus
                          </div>
                          <p className="mb-5">
                            Al Manama St - Academic City - DOC-Dubai Building 4
                            <br />
                            Campus No: 205, 104, 105 - Dubai
                          </p>
                          <a href="tel:045522469" className="d-block">
                            04 552 2469
                          </a>
                          <a
                            href="mailto:admission@cseiacademy.ae"
                            className="d-block"
                          >
                            admission@cseiacademy.ae
                          </a>
                        </div>
                      </div>

                      {/* ✅ Office Email Grid */}
                      <div className="row y-gap-20">
                        {[
                          {
                            title: "Registration Office",
                            email: "info@cseiacademy.ae",
                          },
                          {
                            title: "Admission Office",
                            email: "admission@cseiacademy.ae",
                          },
                          {
                            title: "Financial Aid Office",
                            email: "accounts@cseiacademy.ae",
                          },
                          {
                            title: "International Students Office",
                            email: "internationaladmission@cseiacademy.ae",
                          },
                        ].map((office, i) => (
                          <div className="col-sm-6" key={i}>
                            <h5 className="fw-600 text-16 text-dark-1 mb-5">
                              {office.title}
                            </h5>
                            <a
                              href={`mailto:${office.email}`}
                              className="text-red-1 text-14"
                            >
                              {office.email}
                            </a>
                          </div>
                        ))}
                      </div>

                      {/* ✅ Google Map */}
                      <div className="overflow-hidden rounded-8 border-light mt-40">
                        <iframe
                          src="https://www.google.com/maps?q=Al%20Manama%20St%20Academic%20City%20DOC-Dubai%20Building%204%20Campus%20No%20205,104,105%20Dubai&output=embed"
                          width="100%"
                          height="220"
                          style={{
                            border: 0,
                            borderRadius: "8px",
                          }}
                          allowFullScreen
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                      </div>
                    </div>
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
