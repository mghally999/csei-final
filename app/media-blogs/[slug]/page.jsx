"use client";

import { notFound } from "next/navigation";

// Reusable style for list check icon
const checkStyle = {
  width: "28px",
  height: "28px",
  backgroundColor: "#000000",
  color: "white",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "16px",
  fontWeight: "bold",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.3)",
  marginRight: "12px",
  flexShrink: 0,
};

export default function BlogDetailsPage({ params }) {
  const pageData = blogPagesData.find((page) => page.slug === params.slug);
  if (!pageData) return notFound();

  const renderContent = () => {
    return pageData.content?.map((text, idx) => {
      // Match if text starts with a number and period, and is short (like a title)
      const isTrueTitle = /^[0-9]+\.\s+[A-Z][^:]+$/.test(text.trim());
      const isMustDo = text.toLowerCase().includes("must-do:");

      if (isTrueTitle) {
        return (
          <h2 key={idx} className="section-title">
            {text}
          </h2>
        );
      }

      if (isMustDo) {
        return (
          <p key={idx} className="must-do">
            ✅ <strong>{text}</strong>
          </p>
        );
      }

      return (
        <p className="content-text" key={idx}>
          {text}
        </p>
      );
    });
  };

  return (
    <section className="blog-detail-page">
      <div
        className="hero-image"
        style={{ backgroundImage: `url(${pageData.image})` }}
      >
        <div className="overlay" />
        <h1 className="hero-title">{pageData.title}</h1>
      </div>

      <div className="content-wrapper">
        {renderContent()}

        {pageData.list && (
          <ul className="custom-bullet-list">
            {pageData.list.map((item, idx) => (
              <li key={idx}>
                <span style={checkStyle}>✓</span>
                <strong>{item}</strong>
              </li>
            ))}
          </ul>
        )}

        {pageData.moreContent && (
          <div className="more-content">
            {pageData.moreContent.map((text, idx) => (
              <p className="content-text" key={`more-${idx}`}>
                {text}
              </p>
            ))}
          </div>
        )}
      </div>

      <style jsx>{`
        .blog-detail-page {
          font-family: "Segoe UI", sans-serif;
          background-color: #fafafa;
          padding-bottom: 80px;
        }

        .hero-image {
          height: 100vh;
          background-size: cover;
          background-position: center;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 40px;
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
          font-size: 44px;
          font-weight: 800;
          text-align: center;
          padding: 0 30px;
          margin-top: 220px;
        }

        .content-wrapper {
          max-width: 1000px;
          margin: 0 auto;
          padding: 40px 32px;
          background: white;
          border-radius: 12px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
        }

        .more-content {
          margin-top: 40px;
        }

        .content-text,
        .more-content p,
        .must-do {
          font-size: 18px;
          line-height: 1.85;
          margin-bottom: 24px;
          color: #333;
        }

        .section-title {
          font-size: 24px;
          font-weight: bold;
          color: #4b2615;
          margin-top: 50px;
          margin-bottom: 20px;
          border-left: 5px solid #c19a6b;
          padding-left: 16px;
        }

        .must-do {
          background-color: #e6f4ea;
          border-left: 4px solid #28a745;
          padding: 14px 18px;
          font-weight: 500;
          border-radius: 6px;
        }

        .custom-bullet-list {
          list-style: none;
          padding-left: 0;
          margin-top: 50px;
        }

        .custom-bullet-list li {
          display: flex;
          align-items: center;
          font-size: 17px;
          line-height: 1.7;
          margin-bottom: 18px;
          background: #f9f9f9;
          padding: 12px 16px;
          border-radius: 8px;
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 30px;
            margin-top: 150px;
          }
          .content-wrapper {
            padding: 24px 16px;
          }
        }
      `}</style>
    </section>
  );
}
