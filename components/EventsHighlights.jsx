"use client";
import React from "react";
import Image from "next/image";

const eventHighlights = [
  {
    title: "Annual Talent Fest",
    description:
      "A colorful celebration of student creativity, music, fashion, and performance arts held every spring.",
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Industry Connect Week",
    description:
      "A week-long event featuring guest speakers, recruiters, and hands-on workshops with leading companies.",
    image:
      "https://images.unsplash.com/photo-1633113210408-dc126c0cde93?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Wellness & Sustainability Day",
    description:
      "Promoting mental health, mindfulness, and eco-awareness through yoga sessions, green campaigns, and wellness talks.",
    image:
      "https://images.unsplash.com/photo-1618005198919-d3d4b3bcee4e?q=80&w=2070&auto=format&fit=crop",
  },
];

export default function EventsHighlights() {
  return (
    <section className="layout-pt-lg layout-pb-lg bg-white">
      <div className="container">
        <h2 className="text-30 fw-700 text-[#160643] mb-50 text-center">
          Student Events & Highlights
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {eventHighlights.map((event, index) => (
            <div
              key={index}
              className="bg-[#f9f9f9] rounded-2xl overflow-hidden shadow-lg"
              data-aos="zoom-in-up"
            >
              <div className="relative h-[240px] w-full">
                <Image
                  src={event.image}
                  alt={event.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-2xl"
                />
              </div>
              <div className="p-6">
                <h3 className="text-20 fw-600 text-[#160643] mb-3">
                  {event.title}
                </h3>
                <p className="text-14 text-[#4a5568]">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
