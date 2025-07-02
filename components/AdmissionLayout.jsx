"use client";
import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function AdmissionLayout({
  title,
  description,
  contentSections,
  timeline,
}) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.csei.edu/admissions/${params.category}`}
        />
      </Head>

      <main className="admission-page">
        <section className="hero-section bg-[#160643] text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">{title}</h1>
            <p className="text-xl max-w-3xl">{description}</p>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12">
          {contentSections.map((section, index) => (
            <section key={index} className="mb-16">
              <h2 className="text-2xl font-semibold mb-6 text-[#160643] border-b pb-2">
                {section.title}
              </h2>
              <ul className="space-y-3">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}

          {timeline && (
            <section className="timeline-section mb-16">
              <h2 className="text-2xl font-semibold mb-6 text-[#160643] border-b pb-2">
                Important Dates
              </h2>
              <div className="space-y-10">
                {timeline.map((event, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-lg ${
                      event.deadline ? "bg-[#160643] text-white" : "bg-gray-100"
                    }`}
                  >
                    <h3 className="font-medium">{event.event}</h3>
                    <p>{event.date}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          <section className="cta-section bg-gray-50 p-8 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Ready to Apply?</h2>
            <Link
              href="/apply"
              className="inline-block bg-[#160643] text-white px-6 py-3 rounded-lg hover:bg-[#1F2A64] transition"
            >
              Start Your Application
            </Link>
          </section>
        </div>
      </main>
    </>
  );
}
