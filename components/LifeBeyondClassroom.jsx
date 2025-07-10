"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function LifeBeyondClassroom() {
  return (
    <section className="layout-pt-lg layout-pb-lg bg-white text-black">
      <div className="container">
        <div className="row y-gap-40 items-center">
          {/* Right Side Image */}
          <div className="col-lg-6 order-lg-2" data-aos="fade-left">
            <Image
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b"
              alt="Beyond the Classroom"
              width={520}
              height={400}
              className="rounded-16 w-full shadow-lg object-cover border-4 border-[#f0f0f0]"
            />
          </div>

          {/* Left Side Text */}
          <div className="col-lg-6 order-lg-1" data-aos="fade-right">
            <h2 className="text-30 fw-700 text-[#160643] mb-20 leading-snug">
              Life Beyond the Classroom
            </h2>

            <p className="text-16 text-[#4a5568] mb-5 leading-relaxed">
              Our student life is vibrant and full of opportunities to connect
              beyond academics. Our cultural events warmly celebrate the diverse
              backgrounds of our students, inviting everyone to share their
              unique traditions and talents through festivals, talent shows, and
              art exhibitions.
            </p>

            <p className="text-16 text-[#4a5568] mb-20 leading-relaxed">
              Alongside this, we prioritize your well-being with a variety of
              sports and fitness activities that promote a healthy{" "}
              <span className="text-blue-600 font-medium">
                lifestyle and teamwork
              </span>
              .
              <span className="text-blue-600">
                {" "}
                Whether you’re competing in a friendly match
              </span>{" "}
              or joining a wellness session, our inclusive environment and
              excellent facilities ensure you stay active, build friendships,
              and enjoy a truly balanced college experience.
            </p>

            <ul className="list-disc pl-5 text-16 text-[#4a5568] leading-relaxed mb-20">
              <li>
                Photos of sports meets, student events, and wellness sessions
              </li>
              <li>
                <Link
                  href="/about"
                  className="fw-700 text-[#4b0082] underline hover:text-[#2a005c] transition"
                >
                  Our Core Values
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
