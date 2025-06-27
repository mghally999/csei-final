"use client";

import React from "react";

export default function Alumni() {
  return (
    <section style={{ background: "lightblue", padding: "40px" }}>
      <h2 style={{ fontSize: "24px", fontWeight: "bold" }}>Alumni Network</h2>
      <p className="text-16 text-dark-1 max-w-[700px] mb-20">
        Stay connected beyond graduation. The CSEI Alumni Network brings
        together past students to share career journeys, explore mentorship
        opportunities, and build a thriving professional community across the
        globe.
      </p>{" "}
      <ul className="list-disc list-inside text-16 text-dark-1 mb-20">
        <li>Discover alumni success stories and career milestones</li>
        <li>Connect with fellow graduates for networking and support</li>
        <li>Stay updated on alumni events, meetups, and news</li>
        <li>Unlock exclusive job opportunities and collaborations</li>
      </ul>
      <a
        href="/alumni"
        className="inline-block mt-6 px-6 py-3 text-dark-1 bg-primary rounded hover:bg-primary-dark transition-all duration-300"
      >
        Explore the Alumni Portal ↗
      </a>
    </section>
  );
}
