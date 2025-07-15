export const slidesData = [
  {
    id: 1,
    bgImage: "/assets/img/home/september-intake-1.png",
    title: "September Intake 2025",
    subtitle: (
      <div className="category-grid-container">
        {["Healthcare", "Tourism", "Business", "IT", "Culinary Arts"].map(
          (item, index) => (
            <div key={index} className="category-chip">
              {item}
            </div>
          )
        )}
        <style jsx>{`
          .category-grid-container {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
            gap: 10px;
            width: 100%;
            max-width: 500px;
            margin: 0 auto;
            padding: 0 10px;
          }

          .category-chip {
            background-color: rgba(255, 255, 255, 0.2);
            padding: 8px 5px;
            border-radius: 20px;
            font-size: clamp(0.7rem, 2vw, 0.9rem);
            font-weight: 600;
            backdrop-filter: blur(4px);
            text-align: center;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            width: 100%;
            box-sizing: border-box;
            margin: 0 auto;
            transition: all 0.3s ease;
          }

          @media (max-width: 768px) {
            .category-grid-container {
              grid-template-columns: repeat(3, 1fr);
              max-width: 400px;
            }
          }

          @media (max-width: 480px) {
            .category-grid-container {
              grid-template-columns: repeat(2, 1fr);
              gap: 8px;
            }

            .category-chip {
              padding: 6px 4px;
              font-size: 0.75rem;
            }
          }

          @media (max-width: 360px) {
            .category-grid-container {
              grid-template-columns: 1fr;
              max-width: 200px;
            }
          }
        `}</style>
      </div>
    ),
    description:
      "CSEI Academy is proudly accredited by globally recognized institutions.",
    ctaText: "Explore Programs",
    ctaLink: "/programs",
  },
  {
    id: 2,
    bgImage: "/assets/img/home/september-intake-2.png",
    title: "Flexible Study Options",
    subtitle: "Evening, Weekend & Online Classes Available",
    description:
      "Balance your career with personal growth through industry-aligned programs.",
    ctaText: "Apply Now",
    ctaLink: "/admissions",
  },
  {
    id: 3,
    bgImage: "/assets/img/home/september-intake-3.jpg",
    title: "Life at CSEI Academy",
    subtitle: "World-Class Campus & Community",
    description:
      "Experience vibrant student life with academic and personal development support.",
    ctaText: "Take a Campus Tour",
    ctaLink: "/campus-tour",
  },
];
