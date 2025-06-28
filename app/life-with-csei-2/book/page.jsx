"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function BookAppointmentPage() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <section className="layout-pt-md layout-pb-md bg-light-1">
      <div className="container max-w-xl">
        <h1 className="text-30 fw-700 text-dark-1 mb-20" data-aos="fade-down">
          Book an Appointment
        </h1>
        <p className="text-16 text-dark-2 mb-6" data-aos="fade-up">
          Connect with our placement advisor for personalized guidance.
        </p>

        <form className="space-y-4" data-aos="fade-up">
          <input
            type="text"
            placeholder="Full Name"
            className="form-input"
            required
          />
          <input
            type="email"
            placeholder="Email Address"
            className="form-input"
            required
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="form-input"
            required
          />
          <textarea
            placeholder="Your Questions"
            className="form-input h-32 resize-none"
            required
          ></textarea>
          <button
            type="submit"
            className="button -md -dark-1 text-white w-full"
          >
            Submit Request
          </button>
        </form>
      </div>
    </section>
  );
}
