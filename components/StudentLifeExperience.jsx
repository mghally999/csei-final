"use client";
import React from "react";
import Image from "next/image";

const clubs = [
  {
    title: "Innovation & Technology",
    description:
      "Collaborate on the latest tech trends, projects, and student-led innovations that shape the future.",
    image:
      "https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Arts & Culture",
    description:
      "Express creativity through music, visual arts, dance, and cultural celebrations from around the world.",
    image:
      "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Sports & Fitness",
    description:
      "Engage in physical activities and team sports to promote health, well-being, and camaraderie.",
    image:
      "https://images.unsplash.com/photo-1554290673-1c67150b33f9?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Business & Entrepreneurship",
    description:
      "Develop leadership, innovation, and enterprise skills through workshops, competitions, and startup support.",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Environment & Sustainability",
    description:
      "Promote eco-conscious thinking and lead green initiatives that impact our campus and community.",
    image:
      "https://images.unsplash.com/photo-1504198453319-5ce911bafcde?q=80&w=2070&auto=format&fit=crop",
  },
];

export default function StudentClubs() {
  return (
    <section className="layout-pt-lg layout-pb-lg bg-[#f8f9fa]">
      <div className="container">
        <h2 className="text-30 fw-700 text-[#160643] mb-50 text-center">
          Student Clubs & Communities
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clubs.map((club, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-md"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="relative h-[240px] w-full">
                <Image
                  src={club.image}
                  alt={club.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-2xl"
                />
              </div>
              <div className="p-6">
                <h3 className="text-20 fw-600 text-[#160643] mb-3">
                  {club.title}
                </h3>
                <p className="text-14 text-[#4a5568]">{club.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
