"use client";
import { useRef, useEffect } from "react";
import Image from "next/image";
import { brands } from "@/data/brands";

const containerStyle = {
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "0 1rem",
};

const headerStyle = {
  textAlign: "center",
  marginBottom: "2rem",
};

const titleStyle = {
  fontSize: "2rem",
  fontWeight: 700,
  color: "#1f2937",
};

const subtitleStyle = {
  fontSize: "1rem",
  color: "#1f2937",
  marginTop: "0.75rem",
};

const logosWrapperOuter = {
  position: "relative",
  paddingBottom: "2.5rem",
};

const logosWrapperStyle = {
  display: "flex",
  flexWrap: "nowrap",
  gap: "1.5rem",
  overflowX: "auto",
  scrollBehavior: "smooth",
  padding: "1.5rem 0",
};

const logoItemStyle = {
  flexShrink: 0,
  width: "180px",
  height: "180px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "1rem",
  backgroundColor: "#fff",
  borderRadius: "0.5rem",
  boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
  transition: "box-shadow 0.3s ease",
};

const logoImageStyle = {
  objectFit: "contain",
  width: "100%",
  height: "100%",
  transition: "transform 0.3s ease",
};

const arrowStyle = {
  position: "absolute",
  bottom: "0",
  zIndex: 10,
  backgroundColor: "#000",
  color: "#fff",
  border: "none",
  borderRadius: "50%",
  width: "40px",
  height: "40px",
  cursor: "pointer",
  display: "none", // only via media query
  alignItems: "center",
  justifyContent: "center",
  fontSize: "1.25rem",
  opacity: 0.85,
};

const Brands = ({ backgroundColorComponent, brandsTwo }) => {
  const scrollRef = useRef(null);

  // Auto-scroll to right initially (like peeking cards)
  useEffect(() => {
    if (scrollRef.current && window.innerWidth < 1024) {
      scrollRef.current.scrollLeft = 100;
    }
  }, []);

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const amount = direction === "left" ? -300 : 300;
    scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <section className="custom-padding custom-linear-blue-top">
      <div style={containerStyle}>
        {/* Header */}
        <div style={headerStyle}>
          <h2 style={titleStyle}>Industrial Partners</h2>
          <p style={subtitleStyle}>
            CSEI Academy is proudly accredited by globally recognized
            institutions.
          </p>
        </div>

        {/* Scrollable Logos with Mobile Arrows */}
        <div style={logosWrapperOuter}>
          {/* Left arrow */}
          <button
            className="brand-arrow brand-arrow-left"
            onClick={() => scroll("left")}
            style={{ ...arrowStyle, left: "calc(50% - 60px)" }}
          >
            <i
              className="icon icon-arrow-left"
              style={{ fontSize: "16px" }}
            ></i>
          </button>

          {/* Logos */}
          <div
            ref={scrollRef}
            style={logosWrapperStyle}
            data-aos="fade-up"
            data-aos-duration={300}
          >
            {brands.map((logo, i) => (
              <div
                key={i}
                style={logoItemStyle}
                onMouseEnter={(e) =>
                  (e.currentTarget.firstChild.style.transform = "scale(1.05)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.firstChild.style.transform = "scale(1)")
                }
              >
                <Image
                  src={logo}
                  alt={`Accreditation logo ${i + 1}`}
                  width={100}
                  height={60}
                  style={logoImageStyle}
                />
              </div>
            ))}
          </div>

          {/* Right arrow */}
          <button
            className="brand-arrow brand-arrow-right"
            onClick={() => scroll("right")}
            style={{ ...arrowStyle, right: "calc(50% - 60px)" }}
          >
            <i
              className="icon icon-arrow-right"
              style={{ fontSize: "16px" }}
            ></i>
          </button>
        </div>
      </div>

      {/* Scrollbar and responsive arrow visibility */}
      <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }

        @media (max-width: 1024px) {
          .brand-arrow {
            display: flex !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Brands;
