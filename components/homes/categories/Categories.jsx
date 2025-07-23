"use client";

import Image from "next/image";
import { topCategories } from "../../../data/topCategories";
import { getGroupedPrograms } from "@/utils/getProgramGroups";

const CategoriesHomeOne = () => {
  const { professionalPrograms, regularPrograms } = getGroupedPrograms();

  const universityProgressionCount =
    professionalPrograms.length + regularPrograms.length;

  const updatedCategories = [
    ...topCategories,
    {
      title: "University Progression",
      text: `${universityProgressionCount}+ Programs`,
      iconSrc: "/assets/img/featureCards/3.svg",
    },
  ];

  return (
    <section className="layout-pt-md layout-pb-md custom-linear-blue-top">
      <div className="container">
        <div className="row justify-center text-center">
          <div className="col-auto">
            <div className="sectionTitle">
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
                }}
              >
                Top Categories
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
          </div>
        </div>

        <div className="pt-50">
          <div className="row x-gap-80 justify-content-center g-4">
            {updatedCategories.map((item, i) => (
              <div
                key={i}
                className="col-6 col-sm-4 col-md-3 col-lg-2 d-flex justify-content-center"
              >
                <div
                  className="featureCard -type-1 -featureCard-hover text-center"
                  data-aos="fade-left"
                  data-aos-duration={(i + 1) * 350}
                >
                  <div className="featureCard__content">
                    <div className="featureCard__icon">
                      <Image
                        width={48}
                        height={48}
                        src={item.iconSrc}
                        alt={item.title}
                      />
                    </div>
                    <div className="featureCard__title">
                      {item.title.split(" ")[0]} <br />
                      {item.title.split(" ").slice(1).join(" ")}
                    </div>
                    <div className="featureCard__text">{item.text}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoriesHomeOne;
