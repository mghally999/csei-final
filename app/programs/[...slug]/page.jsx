"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";

import StickyTabsSection from "@/components/StickyTabsSection";
import ModalVideoComponent from "@/components/common/ModalVideo";
import ProgramHighlightsBox from "@/components/ProgramHighlightsBox";

import allPrograms from "@/data/programs/allPrograms";

export default function Page() {
  const { slug } = useParams();
  const [pageItem, setPageItem] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (slug && Array.isArray(slug)) {
      const category = slug[0];
      const levelSlug =
        slug.length === 3 ? `${slug[1]}/${slug[2]}` : slug[1] || "default";

      const program = allPrograms.find((item) => {
        const normalizedItemLevel = item.level
          ?.toLowerCase()
          .replace(/\s+/g, "-");
        const normalizedSlugLevel = levelSlug.toLowerCase();

        return (
          item.category.toLowerCase() === category.toLowerCase() &&
          normalizedItemLevel === normalizedSlugLevel
        );
      });

      setPageItem(program || null);
    }
  }, [slug]);

  if (!pageItem) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-600 text-lg font-semibold">
        Program not found.
      </div>
    );
  }

  return (
    <>
      {/* Header Section */}
      <section className="page-header -type-5 bg-dark-1 layout-pb-lg custom-padding custom-linear-blue-top">
        <div className="container">
          <div className="row y-gap-30 justify-center align-center">
            {/* Left Content */}
            <div className="col-xl-6 col-lg-6 d-flex flex-column justify-center">
              <h1 className="mb-10 text-30 lh-14 text-white pr-60 lg:pr-0 text-black">
                {pageItem.title}
              </h1>

              {/* Accreditation Logos */}
              <div
                className="flex px-6"
                style={{
                  display: "flex",
                  alignItems: "center",
                  maxWidth: "1000px",
                  gap: "20px",
                  borderRadius: "10px",
                  marginTop: "20px",
                  flexWrap: "wrap",
                }}
              >
                {pageItem.professional ? (
                  <div
                    className="bg-white rounded-lg shadow-md"
                    style={{
                      width: "220px",
                      height: "150px",
                      padding: "20px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "10px",
                    }}
                  >
                    <Image
                      src="/assets/img/logos/KHDA-logo.png"
                      alt="KHDA Accredited"
                      width={200}
                      height={100}
                      style={{ objectFit: "contain", maxHeight: "100%" }}
                    />
                  </div>
                ) : (
                  <>
                    <div
                      className="bg-white rounded-lg shadow-md"
                      style={{
                        width: "220px",
                        height: "150px",
                        padding: "20px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "10px",
                      }}
                    >
                      <Image
                        src="/assets/img/logos/OTHM-logo.png"
                        alt="OTHM Accredited"
                        width={200}
                        height={100}
                        style={{ objectFit: "contain", maxHeight: "100%" }}
                      />
                    </div>
                    <div
                      className="bg-white rounded-lg shadow-md"
                      style={{
                        width: "220px",
                        height: "150px",
                        padding: "20px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "10px",
                      }}
                    >
                      <Image
                        src="/assets/img/logos/KHDA-logo.png"
                        alt="KHDA Accredited"
                        width={200}
                        height={100}
                        style={{ objectFit: "contain", maxHeight: "100%" }}
                      />
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Right Image */}
            <div className="col-xl-5 col-lg-6">
              <div className="relative">
                <Image
                  width={690}
                  height={500}
                  className="w-full course-img rounded-xl object-cover"
                  src={pageItem.imageSrc}
                  alt="Course Image"
                />
              </div>
            </div>
          </div>

          {/* FULL-WIDTH Highlights Box Under Logos + Image */}
          <div className="row mt-5">
            <div className="col-12">
              <ProgramHighlightsBox data={pageItem} layout="horizontal" />
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <div className="container">
        <StickyTabsSection program={pageItem} />
      </div>

      {/* Video Modal */}
      <ModalVideoComponent
        videoId="LlCwHnp3kL4"
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </>
  );
}
