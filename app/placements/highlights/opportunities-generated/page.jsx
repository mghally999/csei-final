"use client";

export default function OpportunitiesGenerated() {
  return (
    <div className="main-content">
      <div className="content-wrapper js-content-wrapper overflow-hidden">
        <section className="layout-pt-lg layout-pb-md bg-[#F5F9FF]">
          <div className="container">
            <div className="row y-gap-40 items-center">
              {/* Left Column: Title + List */}
              <div className="col-lg-6" data-aos="fade-up">
                <h2
                  style={{
                    fontSize: "30px",
                    fontWeight: "700",
                    color: "#160643",
                    marginBottom: "30px",
                  }}
                >
                  Opportunities Generated
                </h2>
                <ul
                  style={{
                    listStyleType: "disc",
                    paddingLeft: "1.5rem",
                    fontSize: "16px",
                    color: "#160643",
                    lineHeight: "1.75rem",
                  }}
                >
                  <li style={{ marginBottom: "22px" }}>
                    <strong>Skill Development Programs:</strong> Workshops and
                    certifications in trending domains like Health & Social
                    Care, Culinary Arts, Tourism, and Digital Marketing.
                  </li>
                  <li style={{ marginBottom: "22px" }}>
                    <strong>Customized Placement Support:</strong> Tailored
                    training and job opportunities per department or interest.
                  </li>
                  <li style={{ marginBottom: "22px" }}>
                    <strong>Data-Driven Decision Making:</strong> Feedback and
                    placement statistics to improve strategies.
                  </li>
                  <li style={{ marginBottom: "22px" }}>
                    <strong>Soft Skills & Personality Development:</strong>{" "}
                    Communication, interview prep, and confidence-building
                    sessions.
                  </li>
                </ul>
              </div>

              {/* Right Column: Image */}
              <div className="col-lg-6" data-aos="fade-left">
                <img
                  src="/assets/images/opportunities.jpg"
                  alt="Opportunities"
                  className="rounded-16 w-full"
                  width="520"
                  height="480"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
