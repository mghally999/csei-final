"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const blogPosts = [
  {
    slug: "hilton-experiential-learning",
    title: "Experiential Learning with Canopy by Hilton Dubai Al Seef",
    image: "/assets/img/media-blogs/2.png",
    description:
      "Our recent visit to Canopy by Hilton Dubai Al Seef brought classroom theory to life through hands-on hospitality experience...",
    writer: "Placement Department",
    views: 0,
    date: "Jul 24",
    readTime: "3 min read",
    likes: 0,
  },
  {
    slug: "happy-holi",
    title: "Happy Holi: Celebrating the Vibrant Colors of Life",
    image: "assets/img/media-blogs/happy-holi.jpeg",
    description:
      "Holi, the festival of colors, is here! This joyous occasion is a time to celebrate the arrival of spring, the victory of good over evil...",
    writer: "CSEI Academy",
    views: 10,
    date: "Mar 13",
    readTime: "2 min read",
    likes: 0,
  },
  {
    slug: "film-festival-abu-dhabi",
    title: "2nd Film Festival in Abu Dhabi: A Celebration of Cinema",
    image:
      "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    description:
      "We are thrilled to announce that the 2nd Film Festival is coming to Abu Dhabi, UAE, on April 11-13! This highly anticipated event...",
    writer: "CSEI Academy",
    views: 43,
    date: "Feb 22",
    readTime: "1 min read",
    likes: 0,
  },
  {
    slug: "uae-destinations",
    title: "Top Must-Visit Destinations in the UAE",
    image:
      "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80",
    description:
      "The United Arab Emirates (UAE) is known for its dazzling skyscrapers, opulent shopping malls, and...",
    writer: "CSEI Academy",
    views: 14,
    date: "Feb 9",
    readTime: "4 min read",
    likes: 0,
  },
  {
    slug: "uae-new-year-fireworks",
    title: "UAE Welcome 2025 with Record Breaking Firework and Drone Show",
    image:
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    description:
      "The first few minutes of New Year 2025 in the United Arab Emirates are being illuminated by fireworks from more than 60 locations...",
    writer: "CSEI Academy",
    views: 8,
    date: "Jan 7",
    readTime: "1 min read",
    likes: 0,
  },
  {
    slug: "online-learning-strategies",
    title:
      "What are the Key Strategies for Success in Digital Age Online Learning?",
    image:
      "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
    description:
      "In today's fast-paced educational world, online learning has become a game-changer. It opens up a wealth of opportunities, allowing...",
    writer: "CSEI Academy",
    views: 7,
    date: "Dec 13, 2024",
    readTime: "4 min read",
    likes: 0,
  },
  {
    slug: "study-in-dubai",
    title: "Why Study in Dubai?",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    description:
      "Dubai, a vibrant metropolis known for its futuristic skyline, luxurious lifestyle, and thriving economy, is quickly becoming one of the...",
    writer: "CSEI Academy",
    views: 12,
    date: "Dec 12, 2024",
    readTime: "4 min read",
    likes: 1,
  },
];

export default function NewsCards() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          toggleActions: "play none none none",
        },
        y: 60,
        opacity: 0,
        duration: 0.8,
        delay: index * 0.1,
        ease: "power3.out",
      });
    });

    gsap.to(sectionRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
      backgroundPosition: "50% 30%",
      ease: "none",
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        position: "relative",
        padding: "250px 20px",
        background:
          "linear-gradient(135deg, rgba(0,0,0,0.95), rgba(20,20,20,0.9))",
        color: "#fff",
      }}
    >
      <div style={{ maxWidth: "1300px", margin: "0 auto" }}>
        <h2
          style={{
            textAlign: "center",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 800,
            marginBottom: "60px",
            textTransform: "uppercase",
            letterSpacing: "1px",
            background: "linear-gradient(to right, #fff, #aaa)",
            WebkitBackgroundClip: "text",
            color: "transparent",
            position: "relative",
          }}
        >
          CSEI News & Highlights
          <span
            style={{
              position: "absolute",
              bottom: "-10px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "80px",
              height: "4px",
              background: "linear-gradient(to right, #fff, #666)",
              borderRadius: "2px",
            }}
          />
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "30px",
          }}
        >
          {blogPosts.map((item, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              style={{
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                borderRadius: "16px",
                overflow: "hidden",
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.4)",
                transition: "transform 0.3s ease",
              }}
              className="hover:scale-[1.02]"
            >
              <Link href={`/media-blogs/${item.slug}`} passHref>
                <div style={{ cursor: "pointer" }}>
                  <div style={{ position: "relative", height: "220px" }}>
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      style={{ objectFit: "cover" }}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div style={{ padding: "24px" }}>
                    <h3
                      style={{
                        fontSize: "1.4rem",
                        fontWeight: 700,
                        marginBottom: "12px",
                        color: "#fff",
                      }}
                    >
                      {item.title}
                    </h3>
                    <p
                      style={{
                        fontSize: "0.95rem",
                        color: "rgba(255,255,255,0.85)",
                        lineHeight: "1.6",
                        marginBottom: "16px",
                      }}
                    >
                      {item.description}
                    </p>
                    <div style={{ marginBottom: "16px" }}>
                      <p style={{ fontSize: "0.9rem", color: "#aaa" }}>
                        Writer: {item.writer}
                      </p>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        fontSize: "0.85rem",
                        color: "#ccc",
                      }}
                    >
                      <span>
                        {item.date} • {item.readTime}
                      </span>
                      <span>{item.views} views</span>
                    </div>
                    <div style={{ marginTop: "12px" }}>
                      <span style={{ fontSize: "0.85rem", color: "#ccc" }}>
                        {item.likes > 0
                          ? `${item.likes} like`
                          : "Post not marked as liked"}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
