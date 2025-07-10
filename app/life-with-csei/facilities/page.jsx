"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const facilities = [
  {
    title: "1.  Career Center",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "2.  Academics",
    image:
      "https://images.unsplash.com/photo-1558021212-51b6ecfa0db9?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "3.  Internal Quality Assurance Unit",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
  },
];

export default function Facilities() {
  return (
    <section style={{ backgroundColor: "#f8f9fa" }} className="custom-padding">
      <div style={{ maxWidth: "1140px", margin: "0 auto" }}>
        {/* Section Title */}
        <h2
          style={{
            fontSize: "32px",
            fontWeight: "700",
            color: "#1a202c",
            marginBottom: "40px",
            textAlign: "center",
          }}
        >
          Facilities at CSEI Academy
        </h2>

        {/* Horizontal Images */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            justifyContent: "center",
            marginBottom: "60px",
          }}
        >
          {facilities.map((item, index) => (
            <Link
              href="/placements/objectives"
              key={index}
              style={{
                textDecoration: "none",
                color: "inherit",
                maxWidth: "300px",
                width: "100%",
              }}
            >
              <div
                style={{
                  textAlign: "center",
                  borderRadius: "12px",
                  overflow: "hidden",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
                  backgroundColor: "#fff",
                }}
              >
                <Image
                  src={item.image}
                  width={300}
                  height={200}
                  alt={item.title}
                  style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "cover",
                    transition: "transform 0.3s ease",
                  }}
                />
                <div style={{ padding: "16px", fontWeight: "600" }}>
                  {item.title}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Descriptions */}
        <div style={{ color: "#2d3748", fontSize: "17px", lineHeight: "1.7" }}>
          {/* Disability Support */}
          <h3 style={{ fontWeight: "700", marginBottom: "10px" }}>
            4. Disability Support
          </h3>
          <p style={{ marginBottom: "30px" }}>
            CSEI Academy is dedicated to providing an inclusive and accessible
            learning environment for all students. We offer comprehensive
            disability support services to ensure that students with
            disabilities can fully participate in academic and campus life. Our
            services include personalized accommodations, assistive
            technologies, academic support, and accessibility resources. We work
            closely with students to identify their needs and provide tailored
            solutions, fostering a supportive environment where every student
            has the opportunity to succeed.
          </p>

          {/* Health Services */}
          <h3 style={{ fontWeight: "700", marginBottom: "10px" }}>
            5. Health Services
          </h3>
          <p style={{ marginBottom: "30px" }}>
            At CSEI Academy, we believe in fostering a supportive and inclusive
            learning environment where students' rights are respected, upheld,
            and protected. We are committed to providing all students with a
            fair, respectful, and empowering academic experience.
          </p>

          {/* Wellness Center */}
          <h3 style={{ fontWeight: "700", marginBottom: "10px" }}>
            6. Wellness Center
          </h3>
          <p>
            CSEI Academy Dubai is committed to promoting the overall well-being
            of its students through its dedicated Wellness Center. The center
            offers a range of services focused on mental, physical, and
            emotional health, ensuring that students can thrive both
            academically and personally. Services include stress management
            workshops, counseling and psychological support, fitness programs,
            and wellness resources. Our goal is to provide a holistic support
            system that fosters a balanced and healthy lifestyle, helping
            students navigate their academic journey with confidence and
            resilience.
          </p>
        </div>
      </div>
    </section>
  );
}
