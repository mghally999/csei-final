export const slidesData = [
  {
    id: 1,
    bgImage: "/assets/img/home/september-intake-1.png",
    title: "September Intake",
    subtitle: (
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "10px",
          width: "100%",
          maxWidth: "500px",
          margin: "0 auto",
        }}
      >
        {["Healthcare", "Tourism", "Business", "IT", "Culinary Arts"].map(
          (item, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "rgba(255,255,255,0.2)",
                padding: "8px 4px",
                borderRadius: "20px",
                fontSize: "0.9rem",
                fontWeight: "600",
                backdropFilter: "blur(4px)",
                textAlign: "center",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {item}
            </div>
          )
        )}
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
    title: "Flexible Study Options for All Students",
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
