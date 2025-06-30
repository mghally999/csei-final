"use client";

import PageLinks from "@/components/common/PageLinks";

export default function ServicesPage() {
  return (
    <div className="main-content">
      <div className="content-wrapper js-content-wrapper overflow-hidden">
        <PageLinks />

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
                  Our Services
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
                    <strong>Placement Training:</strong> Soft skills training,
                    aptitude test preparation, resume writing workshops, mock
                    interviews, and group discussion sessions to enhance
                    employability.
                  </li>
                  <li style={{ marginBottom: "22px" }}>
                    <strong>Internship Opportunities:</strong> Assistance in
                    securing internships that provide practical exposure and
                    build professional experience.
                  </li>
                  <li style={{ marginBottom: "22px" }}>
                    <strong>Career Guidance Counselling:</strong> One-on-one or
                    group counselling sessions to help students choose suitable
                    career paths based on their strengths and interests.
                  </li>
                  <li style={{ marginBottom: "22px" }}>
                    <strong>Alumni Network Support:</strong> Engagement with
                    alumni for mentoring, networking, and job referrals.
                  </li>
                  <li>
                    <strong>Corporate Tie-Ups:</strong> Building and maintaining
                    relationships with various industries and organizations to
                    create more placement opportunities.
                  </li>
                </ul>
              </div>

              {/* Right Column: Image */}
              <div className="col-lg-6" data-aos="fade-left">
                <img
                  src="https://plus.unsplash.com/premium_photo-1682787494977-d013bb5a8773?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Services"
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
