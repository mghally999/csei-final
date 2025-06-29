"use client";

import React from "react";

export default function Overview({ data }) {
  if (!data) return null;

  return (
    <section className="bg-white rounded-xl shadow-sm p-6 mb-8 border border-gray-100">
      <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
        Overview
      </h3>

      <div className="space-y-4">
        {Array.isArray(data) ? (
          data.map((para, index) => (
            <p
              key={index}
              className="text-gray-700 leading-relaxed text-base md:text-lg"
              style={{
                fontWeight: index === 0 ? 500 : 400,
                lineHeight: "1.7",
              }}
            >
              {para}
            </p>
          ))
        ) : (
          <p className="text-gray-700 leading-relaxed text-base md:text-lg">
            {data}
          </p>
        )}
      </div>
    </section>
  );
}
