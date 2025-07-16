"use client";

import aboutPagesData from "@/data/about/aboutPagesData";
import { notFound } from "next/navigation";

const blogPagesData = [
  {
    slug: "happy-holi",
    image: "/assets/blogs/holi.png",
    title: "Happy Holi: Celebrating the Vibrant Colors of Life",
    content: [
      "Holi, the festival of colors, is here! This joyous occasion is a time to celebrate the arrival of spring, the victory of good over evil, and the vibrant colors of life.",
      "As we gear up to splash colors and revel in the festive spirit, let's delve into the significance and traditions surrounding Holi.",
      "Holi is rooted in Hindu mythology, specifically the legend of Hiranyakashyap, a demon king who forbade his son, Prahlad, from worshiping Lord Vishnu. When Hiranyakashyap's sister, Holika, tried to burn Prahlad alive, Lord Vishnu intervened, saving Prahlad and burning Holika instead. This triumph of good over evil is celebrated as Holi.",
      "Holi is a two-day celebration, with the first day known as Holika Dahan, where bonfires are lit to symbolize the burning of evil. The second day is Rangwali Holi, where people gather to play with colors, dance, and feast.",
      "Colors play a vital role in Holi, each representing a different aspect of life:",
    ],
    list: [
      "Red symbolizes love and fertility",
      "Yellow represents sunshine and happiness",
      "Green signifies nature and harmony",
      "Blue represents tranquility and peace",
      "Gather with loved ones",
      "Play with colors using natural gulal, abir, and haldi",
      "Enjoy traditional foods like gujiyas, thandai, and malpua",
      "Dance and sing with festive spirit",
      "Wishing You a Happy Holi!",
    ],
  },
  {
    slug: "film-festival-abu-dhabi",
    image: "/assets/blogs/film-festival.png",
    title: "2nd Film Festival in Abu Dhabi: A Celebration of Cinema",
    content: [
      "We are thrilled to announce that the 2nd Film Festival is coming to Abu Dhabi, UAE, on April 11-13! This highly anticipated event promises to be an unforgettable celebration of cinema, with a spectacular lineup of films, workshops, and special appearances.",
      "We are honored to have the renowned Bollywood actor, Shri Anil Kapoor, as our festival ambassador. His presence at the festival is sure to draw in crowds and add to the excitement.",
      "Entry is FREE! Join us for three days of film screenings, workshops, and interactive sessions with industry experts.",
      "Mark your calendars and get ready to immerse yourself in the magic of cinema.",
      "Stay tuned for more updates on the festival schedule, film lineup, and special events. Follow us on social media to get the latest news and behind-the-scenes insights.",
    ],
    list: [
      "Dates: April 11-13",
      "Location: Abu Dhabi, UAE",
      "Entry: FREE",
      "Festival Ambassador: Shri Anil Kapoor",
      "U.A.E Cultural Ambassador",
      "Various University and Institutions",
      "International Media Coverage",
    ],
  },
];

export default function AboutSubPage({ params }) {
  const pageData = blogPagesData.find((page) => page.slug === params.slug);
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
