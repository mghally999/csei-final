"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "@/components/layout/headers/Header";
import FooterOne from "@/components/layout/footers/FooterOne";
import Preloader from "@/components/common/Preloader";
import PageLinks from "@/components/common/PageLinks";
import Link from "next/link";

const computingPrograms = [
  {
    label: "Computer Science",
    href: "/programs/computer-science",
  },
  {
    label: "Information Technology",
    href: "/programs/information-technology",
  },
  {
    label: "Data Science",
    href: "/programs/data-science",
  },
  {
    label: "Cybersecurity",
    href: "/programs/cybersecurity",
  },
];

export default function Page() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <div className="main-content">
      <Preloader />
      <Header />
      <div className="content-wrapper js-content-wrapper">
        <PageLinks />
        <section className="layout-pt-lg layout-pb-lg bg-[#160643] text-dark-1">
          <div className="container">
            <div className="row justify-center text-center mb-60">
              <div className="col-auto" data-aos="fade-up">
                <h1 className="text-40 fw-700 mb-20">
                  School of Computing & IT - At a Glance
                </h1>
              </div>
            </div>

            <div className="row y-gap-40 justify-center">
              <div className="col-lg-10" data-aos="fade-up">
                <h3 className="text-24 fw-600 mb-20">Study With Us:</h3>
                <ul className="list-disc pl-20 text-16 leading-8">
                  <li>Flexible learning options to suit your schedule</li>
                  <li>Cutting-edge facilities with latest technology</li>
                  <li>Industry-experienced faculty members</li>
                  <li>Hands-on, project-based curriculum</li>
                </ul>
              </div>

              <div className="col-lg-10" data-aos="fade-up">
                <h3 className="text-24 fw-600 mb-20">News:</h3>
                <ul className="list-disc pl-20 text-16 leading-8">
                  <li>New AI research lab opening this semester</li>
                  <li>Our students win national coding competition</li>
                  <li>Industry partnerships with leading tech companies</li>
                  <li>Upcoming guest lectures from industry experts</li>
                </ul>
              </div>

              <div className="col-lg-10" data-aos="fade-up">
                <h3 className="text-24 fw-600 mb-20">Programmes:</h3>
                <ul className="list-disc pl-20 text-16 leading-8">
                  {/* School of Computing */}
                  <li>
                    <Link
                      href="/programs/information-technology"
                      className="text-blue-1"
                    >
                      School of Computing – Information Technology
                    </Link>
                  </li>

                  {/* School of Health Science – University Progression */}
                  <li>
                    <Link
                      href="/programs/health-social-care/university-progression/level-3"
                      className="text-blue-1"
                    >
                      Health & Social Care – Level 3 (University Progression)
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/programs/health-social-care/level-4"
                      className="text-blue-1"
                    >
                      Health & Social Care – Level 4
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/programs/health-social-care/level-5"
                      className="text-blue-1"
                    >
                      Health & Social Care – Level 5
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/programs/health-social-care/professional-courses/health-social-care-management"
                      className="text-blue-1"
                    >
                      Health & Social Care – Professional Course
                    </Link>
                  </li>

                  {/* School of Culinary Arts & Tourism – Tourism & Hospitality */}
                  <li>
                    <Link
                      href="/programs/tourism-hospitality/level-4"
                      className="text-blue-1"
                    >
                      Tourism & Hospitality – Level 4
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/programs/tourism-hospitality/level-5"
                      className="text-blue-1"
                    >
                      Tourism & Hospitality – Level 5
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/programs/tourism-hospitality/level-6"
                      className="text-blue-1"
                    >
                      Tourism & Hospitality – Level 6
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/programs/tourism-hospitality/level-7"
                      className="text-blue-1"
                    >
                      Tourism & Hospitality – Level 7
                    </Link>
                  </li>

                  {/* School of Culinary – Professional */}
                  <li>
                    <Link
                      href="/programs/tourism-hospitality/professional-courses/culinary-arts"
                      className="text-blue-1"
                    >
                      Culinary Arts Professional
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/programs/tourism-hospitality/professional-courses/housekeeping"
                      className="text-blue-1"
                    >
                      Training Diploma in Housekeeping
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/programs/tourism-hospitality/professional-courses/hr-management"
                      className="text-blue-1"
                    >
                      HR Management in Hospitality & Tourism
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/programs/tourism-hospitality/professional-courses/food-safety"
                      className="text-blue-1"
                    >
                      Food Safety & Sanitation
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/programs/tourism-hospitality/professional-courses/food-beverage"
                      className="text-blue-1"
                    >
                      Food & Beverage Service Training
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/programs/tourism-hospitality/professional-courses/front-desk-operations"
                      className="text-blue-1"
                    >
                      Front Desk Operations
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/programs/tourism-hospitality/professional-courses/barista-basic-advance"
                      className="text-blue-1"
                    >
                      Barista Professional / Basic / Advanced
                    </Link>
                  </li>

                  {/* School of Business – Business Management */}
                  <li>
                    <Link
                      href="/programs/business-management/level-3"
                      className="text-blue-1"
                    >
                      Business Management – Level 3
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/programs/business-management/level-4"
                      className="text-blue-1"
                    >
                      Business Management – Level 4
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/programs/business-management/level-5"
                      className="text-blue-1"
                    >
                      Business Management – Level 5
                    </Link>
                  </li>

                  {/* School of Business – Others */}
                  <li>
                    <Link
                      href="/programs/health-social-care/professional-courses/level-7"
                      className="text-blue-1"
                    >
                      Accounting & Finance – Level 7
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/programs/health-social-care/professional-courses/level-7"
                      className="text-blue-1"
                    >
                      Strategic Management & Leadership – Level 7
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="col-lg-10" data-aos="fade-up">
                <h3 className="text-24 fw-600 mb-20">Apply Now:</h3>
                <ul className="list-disc pl-20 text-16 leading-8">
                  <li>Applications open for next intake</li>
                  <li>Multiple start dates throughout the year</li>
                  <li>Scholarships and financial aid available</li>
                  <li>
                    <Link href="/apply" className="text-blue-1">
                      Start your online application
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <FooterOne />
      </div>
    </div>
  );
}
