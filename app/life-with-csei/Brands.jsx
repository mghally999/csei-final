"use client";
import Image from "next/image";
import { brands } from "../../../data/brands"; // Make sure your logos are updated here

const Brands = ({ backgroundColorComponent, brandsTwo }) => {
  return (
    <section
      className={`${brandsTwo ? "layout-pt-md" : "layout-pt-lg"} layout-pb-md ${
        backgroundColorComponent || ""
      }`}
    >
      <div className="container">
        <div className="row justify-center text-center">
          <div className="col-auto">
            <h2 className="text-30 fw-700 text-dark-1">
              Our Accreditation & Partners
            </h2>
            <p className="text-16 text-dark-1 mt-10">
              CSEI Academy is proudly accredited by globally recognized
              institutions.
            </p>
          </div>
        </div>

        <div className="row y-gap-30 justify-between sm:justify-start items-center pt-60 md:pt-50">
          {brands.map((logo, i) => (
            <div
              data-aos="fade-up"
              data-aos-duration={300}
              key={i}
              className="col-lg-auto col-md-3 col-sm-4 col-6"
            >
              <div className="d-flex justify-center items-center px-4">
                <Image
                  className="w-1/1"
                  src={logo}
                  alt={`Accreditation logo ${i + 1}`}
                  width={140}
                  height={90}
                  style={{ objectFit: "contain" }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
