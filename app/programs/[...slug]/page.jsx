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

              {/* Accreditation Logos - Responsive Container */}
              <div className="logos-container">
                {pageItem.professional ? (
                  <div className="logo-wrapper single-logo">
                    <div className="logo-box">
                      <Image
                        src="/assets/img/logos/KHDA-logo.png"
                        alt="KHDA Accredited"
                        width={200}
                        height={100}
                        className="logo-image"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="logo-wrapper multiple-logos">
                    <div className="logo-box">
                      <Image
                        src="/assets/img/logos/OTHM-logo.png"
                        alt="OTHM Accredited"
                        width={200}
                        height={100}
                        className="logo-image"
                      />
                    </div>
                    <div className="logo-box">
                      <Image
                        src="/assets/img/logos/KHDA-logo.png"
                        alt="KHDA Accredited"
                        width={200}
                        height={100}
                        className="logo-image"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Right Image */}
            <div className="col-xl-5 col-lg-6">
              <div className="course-image-wrapper">
                <Image
                  width={690}
                  height={500}
                  className="course-image"
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

      {/* CSS Styles with Media Queries */}
      <style jsx>{`
        /* Base Styles */
        .logos-container {
          display: flex;
          justify-content: start;
          align-items: center;
          margin-top: 20px;
          width: 100%;
        }

        .logo-wrapper {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
          justify-content: center;
        }

        .logo-box {
          background: white;
          border-radius: 10px;
          padding: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .logo-image {
          object-fit: contain;
          max-height: 100%;
          width: auto;
          height: auto;
        }

        .course-image-wrapper {
          position: relative;
          width: 100%;
        }

        .course-image {
          width: 100%;
          height: auto;
          border-radius: 12px;
          object-fit: cover;
        }

        /* Mobile Styles (up to 767px) */
        @media (max-width: 767px) {
          .logo-wrapper {
            flex-direction: column;
            align-items: center;
            gap: 15px;
          }

          .logo-box {
            width: 180px;
            height: 120px;
            padding: 15px;
          }

          .course-image-wrapper {
            margin-top: 20px;
          }
        }

        /* Tablet Styles (768px to 1023px) */
        @media (min-width: 768px) and (max-width: 1023px) {
          .logo-wrapper {
            flex-direction: row;
            justify-content: center;
            gap: 20px;
          }

          .logo-box {
            width: 200px;
            height: 130px;
          }

          .course-image-wrapper {
            margin-top: 0;
          }
        }

        /* Desktop Styles (1024px and up) */
        @media (min-width: 1024px) {
          .logo-wrapper {
            flex-direction: row;
            justify-content: flex-start;
            gap: 20px;
          }

          .logo-box {
            width: 220px;
            height: 150px;
          }

          .single-logo {
            justify-content: flex-start;
          }
        }
      `}</style>
    </>
  );
}
