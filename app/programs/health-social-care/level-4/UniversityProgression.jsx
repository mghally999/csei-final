"use client";

import Image from "next/image";

export default function UniversityProgression() {
  return (
    <section className="bg-[#140342] py-20 text-white">
      <div className="container">
        <div className="row y-gap-30 justify-center align-center flex-row-reverse lg:flex-col mb-20">
          {/* IMAGE */}
          <div className="col-xl-5 col-lg-6">
            <div className="relative">
              <Image
                width={690}
                height={342}
                className="w-1/1 rounded-lg shadow-md"
                src="/assets/img/othm/university-progression.jpg"
                alt="University Progression"
              />
            </div>
          </div>

          {/* TEXT BLOCK */}
          <div className="col-xl-6 col-lg-6 d-flex flex-column justify-center">
            <div className="bg-white text-black p-8 rounded-lg shadow-lg">
              <div className="badge px-15 py-8 text-11 bg-blue-1 text-white fw-600 mb-4 inline-block enhanced-badge">
                University Progression
              </div>

              <h2 className="mb-4 text-26 fw-600 flex items-center gap-2">
                Unlock Your Future with a UK Bachelor's Degree
              </h2>

              <p className="text-16 mb-3 leading-relaxed">
                <strong>Successful completion</strong> of the{" "}
                <strong>
                  OTHM Level 4 Diploma in Health and Social Care Management
                </strong>{" "}
                qualification provides learners with opportunities for a wide
                range of academic progressions — including direct entry into
                relevant Level 5 Diplomas.
              </p>

              <p className="text-16 mb-3 leading-relaxed">
                As this qualification is approved and regulated by{" "}
                <strong>Ofqual</strong> (Office of the Qualifications and
                Examinations Regulation), learners are eligible to gain direct
                entry into <strong>Year 2 of a UK Bachelor's Degree</strong>{" "}
                programme.
              </p>

              <p className="text-16 mb-3 leading-relaxed">
                For more details on available pathways, visit the official
                University Progressions page.
              </p>

              <a
                href="https://othm.org.uk/university-progression"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#140342] hover:bg-[#1f045c] text-dark-1 transition px-5 py-2 rounded text-sm font-semibold mt-4"
              >
                🔗 View More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
