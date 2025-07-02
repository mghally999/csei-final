import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import PageLinks from "@/components/common/PageLinks";
import {
  admissionRequirements,
  admissionCards,
} from "@/data/admissions/admissions";

const pathToCategoryMap = {
  "apply-now": "undergraduate",
  "admission-process": "undergraduate",
  "international-students": "international",
  "tuition-and-fees": "scholarships",
  "financial-aid-scholarships": "scholarships",
  "student-voice": "undergraduate",
};

export default function AdmissionCategoryPage({ params }) {
  const slug = params.category;
  const categoryKey = pathToCategoryMap[slug] || slug;
  const content = admissionRequirements[categoryKey];
  const card = admissionCards.find((c) => c.id === categoryKey);

  if (!content || !card) return notFound();

  return (
    <div className="main-content">
      <div className="content-wrapper js-content-wrapper overflow-hidden">
        <section className="layout-pt-lg layout-pb-md bg-[#F5F9FF]">
          <div className="container">
            <div className="row y-gap-40 items-center">
              <div className="col-lg-6" data-aos="fade-left">
                <h2 className="text-30 fw-700 text-[#160643] mb-30">
                  {content.title}
                </h2>
                <p className="text-16 text-[#160643] mb-20 leading-relaxed">
                  {content.description}
                </p>
                {content.contentSections?.[0]?.items?.map((item, index) => (
                  <p
                    key={index}
                    className="text-16 text-[#160643] leading-relaxed"
                  >
                    • {item}
                  </p>
                ))}
              </div>

              <div className="col-lg-6" data-aos="fade-right">
                <Image
                  src={card.image.url}
                  alt={card.image.alt}
                  width={520}
                  height={480}
                  className="rounded-16 w-full"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
