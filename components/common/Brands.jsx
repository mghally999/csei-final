"use client";
import Image from "next/image";
import { brands } from "../../data/brands";

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

        <div
          className="overflow-x-auto hide-scrollbar py-8"
          data-aos="fade-up"
          data-aos-duration={300}
        >
          <div className="row justify-between sm:justify-start items-center pt-60 md:pt-50 flex flex-nowrap gap-6 px-4 items-center min-w-max">
            {brands.map((logo, i) => (
              <div
                key={i}
                className="flex-shrink-0"
                style={{ width: "150px", height: "150px" }}
              >
                <Image
                  src={logo}
                  alt={`Accreditation logo ${i + 1}`}
                  width={80}
                  height={50}
                  style={{
                    objectFit: "contain",
                    width: "100%",
                    height: "100%",
                  }}
                  className="transition-transform duration-300 hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default Brands;
