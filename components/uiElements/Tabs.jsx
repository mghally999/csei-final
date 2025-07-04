"use client";

import React, { useState } from "react";
import { locationData } from "@/data/officeLocation";
import Faq from "@/components/common/Faq";
import Preloader from "@/components/common/Preloader";
import FooterOne from "@/components/layout/footers/FooterOne";
import Header from "@/components/layout/headers/Header";

export default function ContactTwo() {
  const [activeTab, setActiveTab] = useState("student");
  const [tabHover, setTabHover] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // Full control layout variables
  const layout = {
    spacing: {
      sectionPadding: "60px 0",
      containerMaxWidth: "1200px",
      columnGap: "50px",
      tabGap: "20px",
      formPadding: "40px",
      inputPadding: "15px 20px",
    },
    typography: {
      titleSize: "2rem",
      subtitleSize: "1rem",
      tabFontSize: "1rem",
      labelSize: "1rem",
    },
    borders: {
      radius: {
        small: "8px",
        medium: "30px",
        large: "50px",
      },
      width: {
        thin: "1px",
        thick: "2px",
      },
    },
    transitions: {
      fast: "0.2s ease",
      medium: "0.3s ease",
      slow: "0.5s ease",
    },
    shadows: {
      light: "0 2px 10px rgba(0,0,0,0.1)",
      medium: "0 4px 20px rgba(0,0,0,0.15)",
      heavy: "0 8px 30px rgba(0,0,0,0.2)",
    },
    zIndex: {
      base: 1,
      tabs: 10,
      modal: 1000,
    },
  };

  return (
    <div className="main-content">
      <Preloader />
      <Header />

      <div className="content-wrapper js-content-wrapper overflow-hidden">
        {/* Hero Header */}
        <section
          className="page-header -type-4 bg-beige-1"
          style={{
            padding: layout.spacing.sectionPadding,
          }}
        >
          <div
            className="container"
            style={{
              maxWidth: layout.spacing.containerMaxWidth,
              margin: "0 auto",
            }}
          >
            <div className="page-header__content">
              <div className="row">
                <div className="col-auto">
                  <h1
                    className="page-header__title"
                    style={{
                      fontSize: layout.typography.titleSize,
                      marginBottom: "20px",
                    }}
                  >
                    Contact Us
                  </h1>
                  <p
                    className="page-header__text"
                    style={{
                      fontSize: layout.typography.subtitleSize,
                    }}
                  >
                    We're on a mission to deliver engaging, curated
                    <br /> courses at a reasonable price.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tabs Section */}
        <div
          style={{
            backgroundColor: "#f8f8f8",
            padding: "20px 0",
            borderBottom: `${layout.borders.width.thin} solid #e0e0e0`,
            position: "relative",
            zIndex: layout.zIndex.tabs,
          }}
        >
          <div
            className="container"
            style={{
              maxWidth: layout.spacing.containerMaxWidth,
              margin: "0 auto",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: layout.spacing.tabGap,
                flexWrap: "wrap",
              }}
            >
              {["student", "partner"].map((tab) => (
                <button
                  key={tab}
                  style={{
                    padding: "12px 30px",
                    borderRadius: layout.borders.radius.medium,
                    border: "none",
                    background:
                      activeTab === tab
                        ? "#f97316"
                        : tabHover === tab
                        ? "#e0e0e0"
                        : "#e0e0e0",
                    color: activeTab === tab ? "white" : "#333",
                    fontWeight: "600",
                    cursor: "pointer",
                    transition: layout.transitions.medium,
                    fontSize: layout.typography.tabFontSize,
                    transform: activeTab === tab ? "scale(1.05)" : "scale(1)",
                    boxShadow:
                      activeTab === tab ? layout.shadows.medium : "none",
                    outline: "none",
                  }}
                  onClick={() => setActiveTab(tab)}
                  onMouseEnter={() => setTabHover(tab)}
                  onMouseLeave={() => setTabHover(null)}
                  onFocus={() => setTabHover(tab)}
                  onBlur={() => setTabHover(null)}
                >
                  {tab === "student" ? "Student" : "Partner With Us"}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <section
          className="layout-pt-md layout-pb-lg"
          style={{
            padding: layout.spacing.sectionPadding,
            position: "relative",
          }}
        >
          <div
            className="container"
            style={{
              maxWidth: layout.spacing.containerMaxWidth,
              margin: "0 auto",
            }}
          >
            <div
              className="row y-gap-50 justify-between"
              style={{
                gap: layout.spacing.columnGap,
              }}
            >
              {/* Contact Info */}
              <div
                className="col-xl-5 col-lg-6"
                style={{
                  flex: "1 1 45%",
                  minWidth: "300px",
                }}
              >
                <h3
                  className="text-24 lh-1 fw-500"
                  style={{
                    fontSize: "1.5rem",
                    marginBottom: "30px",
                  }}
                >
                  Our offices
                </h3>
                <div
                  className="row y-gap-30 pt-40"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                    gap: "30px",
                  }}
                >
                  {locationData.map((elm, i) => (
                    <div
                      key={i}
                      className="col-sm-6"
                      style={{
                        padding: "20px",
                        backgroundColor: "white",
                        borderRadius: layout.borders.radius.small,
                        boxShadow: layout.shadows.light,
                      }}
                    >
                      <div
                        className="text-20 fw-500 text-dark-1"
                        style={{
                          fontSize: "1.25rem",
                          marginBottom: "15px",
                        }}
                      >
                        {elm.location}
                      </div>
                      <div
                        className="y-gap-10 pt-15"
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "10px",
                        }}
                      >
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

              {/* Contact Form */}
              <div
                className="col-lg-6"
                style={{
                  flex: "1 1 45%",
                  minWidth: "300px",
                }}
              >
                <div
                  className="px-40 py-40 bg-white border-light shadow-1 rounded-8 contact-form-to-top"
                  style={{
                    padding: layout.spacing.formPadding,
                    borderRadius: layout.borders.radius.small,
                    boxShadow: layout.shadows.medium,
                  }}
                >
                  <h3
                    className="text-24 fw-500"
                    style={{
                      fontSize: "1.5rem",
                      marginBottom: "25px",
                    }}
                  >
                    {activeTab === "student"
                      ? "Student Contact"
                      : "Partner Contact"}
                  </h3>
                  <p
                    className="mt-25"
                    style={{
                      marginBottom: "40px",
                    }}
                  >
                    Neque convallis a cras semper auctor. Libero id faucibus
                    nisl
                    <br /> tincidunt egetnvallis.
                  </p>

                  <form
                    className="contact-form row y-gap-30 pt-60 lg:pt-40"
                    onSubmit={handleSubmit}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "30px",
                    }}
                  >
                    <div className="col-12">
                      <label
                        className="text-16 lh-1 fw-500 text-dark-1 mb-10"
                        style={{
                          display: "block",
                          fontSize: layout.typography.labelSize,
                          marginBottom: "10px",
                          fontWeight: "500",
                        }}
                      >
                        Name
                      </label>
                      <input
                        required
                        type="text"
                        name="title"
                        placeholder="Name..."
                        style={{
                          width: "100%",
                          padding: layout.spacing.inputPadding,
                          borderRadius: layout.borders.radius.small,
                          border: `${layout.borders.width.thin} solid #e0e0e0`,
                          transition: layout.transitions.fast,
                        }}
                      />
                    </div>
                    <div className="col-12">
                      <label
                        className="text-16 lh-1 fw-500 text-dark-1 mb-10"
                        style={{
                          display: "block",
                          fontSize: layout.typography.labelSize,
                          marginBottom: "10px",
                          fontWeight: "500",
                        }}
                      >
                        Email Address
                      </label>
                      <input
                        required
                        type="email"
                        name="email"
                        placeholder="Email..."
                        style={{
                          width: "100%",
                          padding: layout.spacing.inputPadding,
                          borderRadius: layout.borders.radius.small,
                          border: `${layout.borders.width.thin} solid #e0e0e0`,
                          transition: layout.transitions.fast,
                        }}
                      />
                    </div>
                    <div className="col-12">
                      <label
                        className="text-16 lh-1 fw-500 text-dark-1 mb-10"
                        style={{
                          display: "block",
                          fontSize: layout.typography.labelSize,
                          marginBottom: "10px",
                          fontWeight: "500",
                        }}
                      >
                        Message...
                      </label>
                      <textarea
                        name="comment"
                        placeholder="Message"
                        rows="8"
                        required
                        style={{
                          width: "100%",
                          padding: layout.spacing.inputPadding,
                          borderRadius: layout.borders.radius.small,
                          border: `${layout.borders.width.thin} solid #e0e0e0`,
                          transition: layout.transitions.fast,
                          minHeight: "150px",
                        }}
                      ></textarea>
                    </div>
                    <div className="col-12">
                      <button
                        type="submit"
                        name="submit"
                        id="submit"
                        className="button -md -purple-1 text-white"
                        style={{
                          padding: "15px 30px",
                          borderRadius: layout.borders.radius.medium,
                          backgroundColor: "#f97316",
                          color: "white",
                          border: "none",
                          cursor: "pointer",
                          fontWeight: "600",
                          fontSize: "1rem",
                          transition: layout.transitions.medium,
                          boxShadow: layout.shadows.light,
                          width: "100%",
                          maxWidth: "200px",
                        }}
                      >
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Faq />
        <FooterOne />
      </div>
    </div>
  );
}
