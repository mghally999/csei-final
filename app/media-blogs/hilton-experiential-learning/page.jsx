"use client";

export default function HiltonExperience() {
  const galleryImages = Array.from(
    { length: 13 },
    (_, i) => `/assets/img/media-blogs/hilton-gallery/${i + 1}.png`
  ).reverse(); // 👈 Reversing the array

  return (
    <section className="hilton-experience">
      {/* Hero */}
      <div
        className="hero-image"
        style={{ backgroundImage: `url(/assets/img/media-blogs/2.png)` }}
      >
        <div className="overlay" />
        <h1 className="hero-title">
          Experiential Learning with Canopy by Hilton Dubai Al Seef
        </h1>
      </div>

      {/* Content */}
      <div className="content-wrapper">
        <p>
          Our recent visit to Canopy by Hilton Dubai Al Seef truly brought our
          classroom lessons to life...
        </p>
        <p>
          Right from the start, the HR team, especially Ms. Aisha Moustafa,
          welcomed us warmly...
        </p>
        <p>
          Stepping into one of the world’s most renowned names in hospitality...
        </p>
        <p>
          The experience was further enriched with a hands-on mocktail-making
          session...
        </p>
        <p>
          We extend our heartfelt gratitude to the HR department of Canopy by
          Hilton...
        </p>
        <p>
          Learning beyond the classroom – our visit to Hilton ignited passion...
        </p>
        <p>
          <strong>
            24th July 2025
            <br />
            Placement Department
          </strong>
        </p>

        {/* Gallery */}
        <div className="gallery-grid">
          {galleryImages.map((src, index) => (
            <div className="gallery-item" key={index}>
              <img
                src={src}
                alt={`Hilton ${galleryImages.length - index}`}
                onError={(e) => (e.target.style.display = "none")}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
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
          background: rgba(0, 0, 0, 0.4);
        }

        .hero-title {
          position: relative;
          z-index: 2;
          color: white;
          font-size: 42px;
          font-weight: 800;
          text-align: center;
          padding: 0 20px;
        }

        .content-wrapper {
          max-width: 1140px;
          margin: 60px auto;
          padding: 0 20px;
        }

        .content-wrapper p {
          font-size: 18px;
          line-height: 1.8;
          margin-bottom: 20px;
          color: #333;
        }

        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 15px;
          margin-top: 40px;
        }

        .gallery-item img {
          width: 100%;
          border-radius: 10px;
          object-fit: cover;
          height: 100%;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .gallery-item img:hover {
          transform: scale(1.03);
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
        }

        @media (max-width: 1024px) {
          .gallery-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .gallery-grid {
            grid-template-columns: 1fr;
          }

          .hero-title {
            font-size: 28px;
          }
        }
      `}</style>
    </section>
  );
}
