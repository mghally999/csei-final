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

                    <div className="col-xl-5 col-lg-6">
                      <h3 className="text-24 fw-500">Our offices</h3>
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
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
