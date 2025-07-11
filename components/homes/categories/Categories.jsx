"use client";
import Image from "next/image";
import { topCategories } from "../../../data/topCategories";

const CategoriesHomeOne = () => {
  return (
    <section className="layout-pt-md layout-pb-md custom-linear-blue-top">
      <div className="container">
        <div className="row justify-center text-center">
          <div className="col-auto">
            <div className="sectionTitle">
              <h2 className="sectionTitle__title text-black">Top Categories</h2>
            </div>
          </div>
        </div>

        <div className="pt-50">
          <div className="row x-gap-80 justify-content-center g-4">
            {topCategories.map((item, i) => (
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
                        width={45}
                        height={45}
                        src={item.iconSrc}
                        alt="icon"
                      />
                    </div>
                    <div className="featureCard__title">
                      {item.title.split(" ")[0]} <br />
                      {item.title.split(" ")[1] || ""}
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
