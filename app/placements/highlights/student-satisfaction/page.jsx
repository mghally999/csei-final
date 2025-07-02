"use client";

export default function StudentSatisfaction() {
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
                  Common Satisfaction Factors
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
                    Good support from the placement team
                  </li>
                  <li style={{ marginBottom: "22px" }}>
                    Availability of reputed recruiters
                  </li>
                  <li style={{ marginBottom: "22px" }}>
                    Adequate training and preparation sessions
                  </li>
                  <li style={{ marginBottom: "22px" }}>
                    Limited job role variety in certain departments
                  </li>
                  <li style={{ marginBottom: "22px" }}>
                    Expectations of higher salary packages
                  </li>
                  <li style={{ marginBottom: "22px" }}>
                    Desire for more industry-specific placement opportunities
                  </li>
                </ul>
              </div>

              {/* Right Column: Image */}
              <div className="col-lg-6" data-aos="fade-left">
                <img
                  src="/assets/images/satisfaction.jpg"
                  alt="Satisfaction"
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
