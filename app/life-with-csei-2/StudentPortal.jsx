"use client";

import React from "react";

export default function StudentPortal() {
  return (
    <section
      className="relative z-10 bg-gradient-to-br from-white via-gray-50 to-gray-100 py-20 px-6 lg:px-0"
      data-aos="fade-up"
    >
      <div className="max-w-4xl mx-auto text-center rounded-3xl shadow-2xl bg-white border border-gray-200 p-10">
        <h2 className="text-4xl font-extrabold text-dark-1 mb-6">
          Student Portal
        </h2>
        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          Seamlessly manage your courses, grades, schedules, and communication
          tools — all in one secure place. Your academic journey, simplified.
        </p>

        <a
          href="/portal-login"
          className="inline-flex items-center justify-center gap-3 px-8 py-3 text-lg font-medium text-dark-1 bg-orange-600 hover:bg-orange-700 transition-all duration-300 rounded-full shadow-md"
        >
          Go to Portal <span className="text-xl">↗</span>
        </a>
      </div>

      {/* Decorative Blob Background */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-60 h-60 bg-orange-200 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-pulse"></div>
    </section>
  );
}
