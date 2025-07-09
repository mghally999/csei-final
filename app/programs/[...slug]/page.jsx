"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";

import StickyTabsSection from "@/components/StickyTabsSection";
import ModalVideoComponent from "@/components/common/ModalVideo";

import allPrograms from "@/data/programs/allPrograms";

export default function Page() {
  const { slug } = useParams();
  const [pageItem, setPageItem] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (slug && Array.isArray(slug)) {
      const category = slug[0];
      const level =
        slug.length === 3 ? `${slug[1]}/${slug[2]}` : slug[1] || "default";
      const program = allPrograms.find(
        (item) => item.category === category && item.level === level
      );
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
      {/* Main content container with consistent padding */}
      <div className="layout-pt-md layout-pb-lg">
        {/* Hero Section - now inside the padding container */}
        <section className="page-header -type-5 bg-dark-1">
          <div className="page-header__bg">
            <div
              className="bg-image js-lazy"
              data-bg="img/event-single/bg.png"
            />
          </div>
          <div className="container">
            <div className="page-header__content">
              <div className="row y-gap-30 justify-center align-center custom-flex-margin">
                <div className="col-xl-6 col-lg-6 d-flex flex-column justify-center">
                  <div className="d-flex x-gap-15 y-gap-10 pb-20">
                    <div>
                      <div className="badge px-15 py-8 text-11 bg-black text-white fw-600">
                        {pageItem.category.toUpperCase()}
                      </div>
                    </div>
                    <div>
                      <div className="badge px-15 py-8 text-11 bg-black text-white fw-600">
                        {pageItem.level.toUpperCase().replaceAll("-", " ")}
                      </div>
                    </div>
                  </div>

                  <h1 className="mb-10 text-30 lh-14 text-white pr-60 lg:pr-0">
                    {pageItem.title}
                  </h1>

                  <div className="badge px-15 py-8 text-11 bg-purple-1 text-white fw-600 qualification-badge mt-20 enhanced-badge">
                    Qualification Structure: {pageItem.qualificationStructure}
                  </div>
                  <div className="badge px-15 py-8 text-11 bg-purple-1 text-white fw-600 qualification-badge mt-20 enhanced-badge">
                    Duration: {pageItem.duration}
                  </div>

                  {/* Accreditation Logos */}
                  <div
                    className="flex px-6"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      maxWidth: "1000px",
                      gap: "20px",
                      borderRadius: "10px",
                      marginTop: "50px",
                    }}
                  >
                    <div
                      className="bg-white rounded-lg shadow-md"
                      style={{
                        width: "220px",
                        height: "150px",
                        padding: "20px",
                        display: "flex",
                        alignItems: "center",
                        borderRadius: "10px",
                      }}
                    >
                      <Image
                        src="/assets/img/logos/OTHM-logo.png"
                        alt="OTHM Accredited"
                        width={200}
                        height={100}
                        style={{ objectFit: "cover", maxHeight: "100%" }}
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
                        borderRadius: "10px",
                      }}
                    >
                      <Image
                        src="/assets/img/logos/KHDA-logo.png"
                        alt="KHDA Accredited"
                        width={200}
                        height={100}
                        style={{ objectFit: "cover", maxHeight: "100%" }}
                      />
                    </div>
                  </div>
                </div>

                <div className="col-xl-5 col-lg-6">
                  <div className="relative">
                    <Image
                      width={690}
                      height={342}
                      className="w-1/1 course-img"
                      src={pageItem.imageSrc}
                      alt="Course Image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sticky Tabs Section - now properly spaced */}
        <div className="container">
          <StickyTabsSection program={pageItem} />
        </div>
      </div>

      <ModalVideoComponent
        videoId="LlCwHnp3kL4"
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </>
  );
}
