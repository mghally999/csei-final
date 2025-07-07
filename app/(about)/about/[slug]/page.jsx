"use client";

import aboutPagesData from "@/data/about/aboutPagesData";
import { notFound } from "next/navigation";

export default function AboutSubPage({ params }) {
  const pageData = aboutPagesData.find((page) => page.slug === params.slug);
  if (!pageData) return notFound();

  return (
    <section className="about-subpage">
      <div
        className="hero-image"
        style={{ backgroundImage: `url(${pageData.image})` }}
      >
        <div className="overlay" />
        <h1 className="hero-title">{pageData.title}</h1>
      </div>

      <div className="content-wrapper">
        {pageData.content &&
          pageData.content.map((paragraph, idx) => (
            <p className="content-text" key={idx}>
              {paragraph}
            </p>
          ))}

        {pageData.list && (
          <ul className="bullet-list">
            {pageData.list.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        )}
      </div>

      <style jsx>{`
        .about-subpage {
          font-family: sans-serif;
        }

        .hero-image {
          height: 80vh;
          background-size: cover;
          background-position: center;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.55);
        }

        .hero-title {
          position: relative;
          z-index: 2;
          color: white;
          font-size: 42px;
          font-weight: 800;
          text-align: center;
        }

        .content-wrapper {
          max-width: 900px;
          margin: 60px auto;
          padding: 0 20px;
          animation: fadeInUp 1s ease-in-out;
        }

        .content-text {
          font-size: 18px;
          line-height: 1.8;
          margin-bottom: 20px;
        }

        .bullet-list {
          margin-top: 20px;
          padding-left: 20px;
        }

        .bullet-list li {
          margin-bottom: 10px;
          font-size: 17px;
          line-height: 1.6;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 30px;
          }

          .content-wrapper {
            padding: 0 16px;
          }
        }
      `}</style>
    </section>
  );
}
