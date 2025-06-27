"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function AdmissionPage() {
  return (
    <>
      <section className="page-header -type-3">
        <div className="page-header__bg bg-purple-1"></div>
        <div className="container">
          <div className="row justify-center">
            <div className="col-xl-8 col-lg-9 col-md-11">
              <div className="page-header__content text-center">
                <h1 className="text-30 lh-14 fw-700 text-white">Admission</h1>
                <p className="text-white mt-10">
                  Start your academic journey with us. Apply now or explore our
                  wide range of programs.
                </p>
                <div className="d-flex justify-center mt-30 gap-20">
                  <Link
                    href="/apply"
                    className="button -md -green-1 text-dark-1"
                  >
                    Apply Now
                  </Link>
                  <Link
                    href="/programs"
                    className="button -md -white text-purple-1"
                  >
                    See All Programs
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="layout-pt-md layout-pb-lg">
        <div className="container">
          <div className="row justify-center">
            <div className="col-xl-8 col-lg-9 col-md-11">
              <div className="tabs -active-purple-2 js-tabs">
                <div className="tabs__controls d-flex js-tabs-controls justify-center">
                  <button className="tabs__button is-active" type="button">
                    How to Apply
                  </button>
                </div>

                <div className="tabs__content pt-60 lg:pt-40 js-tabs-content">
                  <div className="tabs__pane is-active">
                    <h4 className="text-20">Application Steps</h4>
                    <ol className="text-light-1 mt-30 list-decimal pl-20 space-y-10">
                      <li>Choose your preferred academic program.</li>
                      <li>Fill in the online application form completely.</li>
                      <li>
                        Upload all required documents (transcripts, ID, etc).
                      </li>
                      <li>Submit the application before the deadline.</li>
                      <li>
                        Wait for the admission team to review and respond.
                      </li>
                    </ol>

                    <div className="mt-40">
                      <h5 className="text-18 fw-600">Need Assistance?</h5>
                      <p className="text-light-1 mt-10">
                        If you have any questions or need help with the
                        application process, feel free to
                        <Link
                          href="/contact"
                          className="text-purple-1 underline ml-1"
                        >
                          contact our admissions team
                        </Link>
                        .
                      </p>
                    </div>

                    <div className="mt-40 text-center">
                      <Link
                        href="/apply"
                        className="button -md -green-1 text-dark-1"
                      >
                        Start Application
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
