"use client";

import { notFound } from "next/navigation";

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

const blogPagesData = [
  {
    slug: "happy-holi",
    image: "/assets/img/media-blogs/happy-holi.jpeg",
    title: "Happy Holi: Celebrating the Vibrant Colors of Life",
    content: [
      "Holi, the festival of colors, is here! This joyous occasion is a time to celebrate the arrival of spring, the victory of good over evil, and the vibrant colors of life.",
      "As we gear up to splash colors and revel in the festive spirit, let's delve into the significance and traditions surrounding Holi.",
      "Holi is rooted in Hindu mythology, specifically the legend of Hiranyakashyap...",
    ],
    list: [
      "Red symbolizes love and fertility",
      "Yellow represents sunshine and happiness",
      "Green signifies nature and harmony",
      "Blue represents tranquility and peace",
    ],
  },
  {
    slug: "film-festival-abu-dhabi",
    image: "/assets/img/media-blogs/film-festival.png",
    title: "2nd Film Festival in Abu Dhabi: A Celebration of Cinema",
    content: [
      "We are thrilled to announce that the 2nd Film Festival is coming to Abu Dhabi...",
    ],
    list: [
      "Dates: April 11-13",
      "Location: Abu Dhabi, UAE",
      "Entry: FREE",
      "Festival Ambassador: Shri Anil Kapoor",
    ],
  },
  {
    slug: "hilton-experiential-learning",
    image: "/assets/img/media-blogs/hilton.png",
    title: "Experiential Learning with Canopy by Hilton Dubai Al Seef",
    content: [
      "Our recent visit to Canopy by Hilton Dubai Al Seef truly brought our classroom lessons to life...",
      "The experience blended what we have been learning in theory with the real-world atmosphere of Hilton...",
      "From the front desk to housekeeping, we experienced every layer of operational excellence...",
      "Interactive bakery sessions and mocktail-making gave us practical exposure to real hospitality skills...",
      "We thank Ms. Aisha Moustafa for her hospitality and guidance, and for giving us a day to remember.",
    ],
    list: [
      "Date: 24th July 2025",
      "Department: Placement Department",
      "Location: Canopy by Hilton Dubai Al Seef",
      "HR Host: Ms. Aisha Moustafa",
      "Hands-on: Mocktail Making, Pastry Sessions, Housekeeping Tour",
      "Learning Outcome: Practical hospitality exposure",
    ],
  },
];

export default function BlogDetailsPage({ params }) {
  const pageData = blogPagesData.find((page) => page.slug === params.slug);
  if (!pageData) return notFound();

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
        {pageData.content?.map((paragraph, idx) => (
          <p className="content-text" key={idx}>
            {paragraph}
          </p>
        ))}

        {pageData.list && (
          <ul className="custom-bullet-list">
            {pageData.list.map((item, idx) => (
              <li key={idx}>
                <span style={checkStyle}>✓</span>
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>

      <style jsx>{`
        .blog-detail-page {
          font-family: "Segoe UI", sans-serif;
        }

        .hero-image {
          height: 100vh;
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
          padding: 0 20px;
          margin-top: 200px;
        }

        .content-wrapper {
          max-width: 900px;
          margin: 60px auto;
          padding: 0 20px;
          animation: fadeInUp 0.8s ease-in-out;
        }

        .content-text {
          font-size: 18px;
          line-height: 1.8;
          margin-bottom: 20px;
          color: #333;
        }

        .custom-bullet-list {
          list-style: none;
          padding-left: 0;
          margin-top: 40px;
        }

        .custom-bullet-list li {
          display: flex;
          align-items: center;
          font-size: 17px;
          line-height: 1.6;
          margin-bottom: 16px;
          color: #333;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 28px;
          }
          .content-wrapper {
            padding: 0 16px;
          }
        }
      `}</style>
    </section>
  );
}
