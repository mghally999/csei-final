"use client";
import Image from "next/image";

export default function UniversityProgression() {
  return (
    <section className="bg-[#140342] py-20 text-white">
      <div className="container">
        <div className="row y-gap-30 justify-center align-center flex-row-reverse lg:flex-col mb-20">
          <div className="col-xl-5 col-lg-6">
            <Image
              width={690}
              height={342}
              className="w-1/1 rounded-lg shadow-md"
              src="/assets/img/othm/university-progression.jpg"
              alt="Progression"
            />
          </div>
          <div className="col-xl-6 col-lg-6 d-flex flex-column justify-center">
            <div className="bg-white text-black p-8 rounded-lg shadow-lg">
              <div className="badge px-15 py-8 text-11 bg-blue-1 text-white fw-600 mb-4 inline-block enhanced-badge">
                Certification & Opportunities
              </div>
              <h2 className="mb-4 text-26 fw-600">
                Certification & Career Pathways
              </h2>
              <p className="text-16 mb-3 leading-relaxed">
                On completion, learners receive an{" "}
                <strong>accredited certificate</strong> in health & social care
                management.
              </p>
              <p className="text-16 mb-3 leading-relaxed">
                Opens doors to leadership roles, regulatory compliance work, and
                further education opportunities.
              </p>
              <a
                href="#"
                className="inline-block bg-[#140342] hover:bg-[#1f045c] text-dark-1 px-5 py-2 rounded text-sm font-semibold mt-4"
              >
                📄 Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
