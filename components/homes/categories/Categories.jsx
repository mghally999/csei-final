"use client";

import Image from "next/image";

const CategoriesHomeOne = () => {
  const categories = [
    {
      title: "Certificates",
      subtitle: "Certificates",
      text: "6+ Courses",
      iconSrc:
        "https://images.unsplash.com/photo-1589330694653-ded6df03f754?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80",
      description: "Official certificate being awarded to graduate",
    },
    {
      title: "Diplomas",
      subtitle: "Diplomas",
      text: "8+ Courses",
      iconSrc:
        "https://plus.unsplash.com/premium_photo-1682974403236-5c3f97d854d1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGlwbG9tYXxlbnwwfHwwfHx8MA%3D%3D",
      description: "Graduate holding diploma with pride",
    },
    {
      title: "Professional",
      subtitle: "Professional",
      text: "8+ Courses",
      iconSrc:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80",
      description: "Business professionals in a meeting",
    },
    {
      title: "University Progression",
      subtitle: "University Progression",
      text: "14+ Programs",
      iconSrc:
        "https://plus.unsplash.com/premium_photo-1713296255442-e9338f42aad8?q=80&w=844&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Students walking on university campus",
    },
  ];

  return (
    <section
      className="layout-pt-md layout-pb-md custom-linear-blue-top"
      style={{
        width: "100%",
        padding: "60px 5vw",
      }}
    >
      {/* Header Title */}
      <div style={{ textAlign: "center", marginBottom: "50px" }}>
        <h2
          style={{
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: "800",
            textTransform: "uppercase",
            letterSpacing: "2px",
            background: "linear-gradient(90deg, #000, #2196f3, #000)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            position: "relative",
            paddingBottom: "20px",
            margin: 0,
          }}
        >
          Program Types
          <span
            style={{
              position: "absolute",
              bottom: "0",
              left: "50%",
              transform: "translateX(-50%)",
              width: "80px",
              height: "4px",
              background: "linear-gradient(90deg, #3b82f6, #000000)",
              borderRadius: "2px",
            }}
          />
        </h2>
      </div>

      {/* Cards Grid */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "2.5rem",
          width: "100%",
        }}
      >
        {categories.map((item, i) => (
          <div
            key={i}
            style={{
              flex: "1 1 220px",
              maxWidth: "260px",
              minWidth: "200px",
            }}
          >
            <div
              className="featureCard -type-1 -featureCard-hover text-center"
              data-aos="fade-left"
              data-aos-duration={(i + 1) * 350}
              style={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                background: "#fff",
                borderRadius: "12px",
                boxShadow: "0 6px 18px rgba(0,0,0,0.06)",
              }}
            >
              <div
                className="featureCard__content"
                style={{
                  padding: "1.5rem",
                  display: "flex",
                  flexDirection: "column",
                  flexGrow: 1,
                }}
              >
                <div
                  className="featureCard__icon"
                  style={{
                    borderRadius: "12px",
                    overflow: "hidden",
                    width: "200px",
                    height: "200px",
                    margin: "0 auto 15px",
                    boxShadow: "0 6px 18px rgba(0,0,0,0.2)",
                  }}
                >
                  <Image
                    width={200}
                    height={200}
                    src={item.iconSrc}
                    alt={item.description}
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "100%",
                    }}
                    priority={i < 2}
                  />
                </div>

                <div
                  className="featureCard__title"
                  style={{
                    fontWeight: 600,
                    marginBottom: "0.5rem",
                    fontSize: "1.1rem",
                  }}
                >
                  {item.title}
                </div>

                <div
                  className="featureCard__text"
                  style={{
                    marginTop: "auto",
                    paddingTop: "0.5rem",
                    fontSize: "0.95rem",
                    color: "#444",
                    fontWeight: 500,
                  }}
                >
                  {item.text}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoriesHomeOne;
