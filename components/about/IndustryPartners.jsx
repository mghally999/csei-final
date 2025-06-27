import React from "react";
import Image from "next/image";

const partners = [
  { logo: "/assets/img/partners/partner-1.png", name: "Pearson" },
  { logo: "/assets/img/partners/partner-2.png", name: "OTHM" },
  { logo: "/assets/img/partners/partner-3.png", name: "Qualifi" },
  { logo: "/assets/img/partners/partner-4.png", name: "CPD" },
  { logo: "/assets/img/partners/partner-5.png", name: "ATHE" },
  { logo: "/assets/img/partners/partner-6.png", name: "Ofqual" },
];

export default function Partners() {
  return (
    <section className="layout-pt-md layout-pb-md bg-light-2">
      <div className="container">
        <div className="row justify-center text-center">
          <div className="col-auto">
            <h2 className="sectionTitle__title">Accreditation & Partners</h2>
            <p className="sectionTitle__text mt-10">
              We collaborate with globally recognized accrediting bodies to
              deliver quality education.
            </p>
          </div>
        </div>

        <div className="row y-gap-30 pt-50 justify-center">
          {partners.map((partner, i) => (
            <div
              key={i}
              className="col-lg-2 col-md-3 col-4 d-flex justify-center"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <Image
                src={partner.logo}
                alt={`${partner.name} logo`}
                width={120}
                height={80}
                style={{ objectFit: "contain" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
