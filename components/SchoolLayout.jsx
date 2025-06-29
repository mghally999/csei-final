// components/SchoolLayout.jsx
"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Head from "next/head";
import Link from "next/link";

export default function SchoolLayout({
  title,
  description,
  features,
  programs,
  careers,
  applyInfo,
  meta = {},
}) {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const renderSection = (title, content, isList = false) => {
    if (!content) return null;

    return (
      <div className="row y-gap-40 justify-center mt-40" data-aos="fade-up">
        <div className="col-lg-10">
          <h2 className="text-24 fw-600 mb-20">{title}</h2>
          {isList ? (
            <ul className="list-disc pl-20 text-16 leading-8">
              {content.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-30">
              {content.map((item, index) => (
                <div key={index} className="bg-white p-30 rounded-16 shadow-sm">
                  <h3 className="text-18 fw-600 mb-10">
                    {item.href ? (
                      <Link
                        href={item.href}
                        className="text-blue-1 hover:underline"
                      >
                        {item.label}
                      </Link>
                    ) : (
                      item.label
                    )}
                  </h3>
                  {item.description && (
                    <p className="text-14 text-gray-600">{item.description}</p>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <>
      <Head>
        <title>{meta.title || title}</title>
        <meta name="description" content={meta.description || description} />
        <meta name="keywords" content={meta.keywords} />
      </Head>

      <div className="content-wrapper js-content-wrapper custom-flex-margin">
        <section className="layout-pt-lg layout-pb-lg bg-[#160643] text-dark-1">
          <div className="container">
            <div className="row justify-center text-center mb-60">
              <div className="col-auto" data-aos="fade-up">
                <h1 className="text-40 fw-700 mb-20">{title}</h1>
                {description && (
                  <p className="text-16 max-w-600 mx-auto">{description}</p>
                )}
              </div>
            </div>

            {features &&
              renderSection("Why Choose Our Program?", features, true)}
            {programs && renderSection("Our Programs", programs)}
            {careers && renderSection("Career Outcomes", careers, true)}

            {applyInfo && (
              <div
                className="row y-gap-40 justify-center mt-40"
                data-aos="fade-up"
              >
                <div className="col-lg-10">
                  <h2 className="text-24 fw-600 mb-20">
                    Application Information
                  </h2>
                  <ul className="list-disc pl-20 text-16 leading-8">
                    {applyInfo.map((info, index) => (
                      <li key={index}>
                        {info.href ? (
                          <Link
                            href={info.href}
                            className="text-blue-1 hover:underline"
                          >
                            {info.label}
                          </Link>
                        ) : (
                          info.label
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
}
