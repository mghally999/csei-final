"use client";

export default function HiltonExperience() {
  const galleryImages = Array.from(
    { length: 13 },
    (_, i) => `/assets/img/media-blogs/hilton-gallery/${i + 1}.png`
  );

  return (
    <section className="hilton-experience">
      <div
        className="hero-image"
        style={{ backgroundImage: `url(/assets/img/media-blogs/hilton.png)` }}
      >
        <div className="overlay" />
        <h1 className="hero-title">
          Experiential Learning with Canopy by Hilton Dubai Al Seef
        </h1>
      </div>

      <div className="content-wrapper">
        <p>
          Our recent visit to Canopy by Hilton Dubai Al Seef truly brought our
          classroom lessons to life. The experience blended what we have been
          learning in theory with the real-world atmosphere of Canopy by Hilton,
          helping our students see how their studies connect to hospitality.
        </p>

        <p>
          Right from the start, the HR team, especially Ms. Aisha Moustafa,
          welcomed us warmly and made us feel part of the Hilton family. This
          genuine hospitality stayed with us throughout the day, as every member
          of the team from front desk to top, shared their expertise and showed
          us what professionalism and passion look like in action.
        </p>

        <p>
          Stepping into one of the world’s most renowned names in hospitality,
          we experienced firsthand the professionalism, precision, and passion
          that drive the industry. From front desk operations to
          behind-the-scenes management, every detail reflected a commitment to
          excellence. We had the privilege to explore the elegance and
          efficiency of hotel operations, and more excitingly, to take part in
          interactive bakery and pastry sessions that showcased creativity,
          precision, and culinary excellence.
        </p>

        <p>
          The experience was further enriched with a hands-on mocktail-making
          session, where we learned the art of blending flavours with flair and
          professionalism. One of the highlights of the visit was exploring the
          housekeeping department, where we gained insights into the amazing
          standards, organization, and attention to detail that ensure guest
          satisfaction and uphold the Hilton brand.
        </p>

        <p>
          We extend our heartfelt gratitude to the HR department of Canopy by
          Hilton, especially to Ms. Aisha Moustafa, for her warm welcome,
          exceptional guidance, and generous support throughout the visit. Her
          dedication to nurturing young talent and sharing real-world knowledge
          made this visit truly impactful. We are grateful for the opportunity
          and look forward to applying what we’ve learned as we step confidently
          toward our future careers.
        </p>

        <p>
          Learning beyond the classroom – our visit to Hilton ignited passion,
          sharpened skills, and reminded us that greatness begins with curiosity
          and the courage to explore.
        </p>

        <p>
          <strong>
            24th July 2025
            <br />
            Placement Department
          </strong>
        </p>

        <div className="gallery-grid">
          {galleryImages.map((src, index) => (
            <div className="gallery-item" key={index}>
              <img
                src={src}
                alt={`Hilton ${index + 1}`}
                onError={(e) => (e.target.style.display = "none")}
              />
            </div>
          ))}
        </div>
      </div>

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
          grid-template-columns: repeat(auto-fit, minmax(700px, 1fr));
          gap: 20px;
          margin-top: 40px;
        }

        .gallery-item img {
          width: 100%;
          height: 100%;
          border-radius: 8px;
          object-fit: cover;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 30px;
          }

          .gallery-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
