"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const OrganizationStructure = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <section className="layout-pb-lg custom-linear-white-top custom-padding">
      <div className="container">
        {/* Section Heading */}
        <div className="text-center mb-32" data-aos="fade-up">
          <h2 className="org-heading">Organization Structure</h2>
          <div className="header-underline mx-auto"></div>
          <p className="section-subtext mt-4 max-w-2xl mx-auto">
            Clear hierarchy and reporting structure of our institution
          </p>
        </div>

        {/* Org Chart */}
        <div className="org-chart-container">
          {/* Level 1 */}
          <div className="org-level">
            <div className="org-node main-node">
              <div className="org-position">Board of Trustees</div>
              <div className="org-connector vertical"></div>
            </div>
          </div>

          {/* Level 2 */}
          <div className="org-level">
            <div className="org-node admin-node">
              <div className="org-position">Legal & Compliance</div>
            </div>
            <div className="org-node leadership-node">
              <div className="org-position">Head of Academy</div>
              <div className="org-connector vertical-down"></div>
            </div>
            <div className="org-node leadership-node">
              <div className="org-position">General Manager</div>
              <div className="org-connector vertical-down"></div>
            </div>
          </div>

          {/* Level 3 */}
          <div className="org-level">
            <div className="org-node department-node">
              <div className="org-position">Lead Internal Assurer</div>
              <div className="org-connector vertical-down"></div>
            </div>
            <div className="org-node admin-node">
              <div className="org-position">Finance</div>
            </div>
          </div>

          {/* Level 4 */}
          <div className="org-level">
            <div className="org-node department-node">
              <div className="org-position">Examination</div>
              <div className="org-connector vertical-down"></div>
            </div>
            <div className="org-node admin-node">
              <div className="org-position">Internal Auditor</div>
            </div>
          </div>

          {/* Level 5 */}
          <div className="org-level">
            <div className="org-node department-node">
              <div className="org-position">Academics</div>
              <ul className="org-sublist">
                <li>HSCM</li>
                <li>Com</li>
                <li>Tourism</li>
                <li>Business</li>
              </ul>
              <div className="org-connector vertical-down"></div>
            </div>

            <div className="flex flex-col gap-4">
              {["Admissions", "Student Support", "HR", "IT"].map(
                (title, idx) => (
                  <div key={idx} className="org-node admin-node">
                    <div className="org-position">{title}</div>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Level 6 */}
          <div className="org-level">
            <div className="org-node leadership-node">
              <div className="org-position">Academic Coordinator</div>
              <div className="org-connector vertical-down"></div>
            </div>
          </div>

          {/* Level 7 */}
          <div className="org-level">
            <div className="org-node faculty-node">
              <div className="org-position">Placement Officer</div>
            </div>
          </div>
        </div>

        {/* STYLES */}
        <style jsx>{`
          .org-heading {
            font-size: 2.75rem;
            font-weight: 800;
            color: #001c48;
            line-height: 1.2;
            margin-bottom: 0;
          }

          .header-underline {
            width: 80px;
            height: 5px;
            background: linear-gradient(90deg, #3b82f6, #000000);
            border-radius: 3px;
            margin-top: 12px;
          }

          .section-subtext {
            font-size: 1.1rem;
            font-weight: 500;
            color: #000;
            line-height: 1.7;
          }

          .org-chart-container {
            width: 100%;
            overflow-x: auto;
            padding: 20px 0;
          }

          .org-level {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 20px;
            margin-bottom: 32px;
            position: relative;
          }

          .org-node {
            background: white;
            border: 1px solid #e5e7eb;
            border-radius: 8px;
            padding: 7px;
            text-align: center;
            min-width: 180px;
            max-width: 220px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
            position: relative;
            z-index: 2;
          }

          .org-position {
            font-weight: 700;
            color: #111827;
            font-size: 14px;
            line-height: 1.5;
            margin-bottom: 4px;
          }

          .org-sublist {
            margin-top: 14px;
            padding-left: 0;
            list-style: none;
            font-size: 14px;
            line-height: 1.8;
            color: #111827;
            font-weight: 600;
            display: flex;
            flex-direction: column;
            gap: 6px;
            text-align: center;
          }

          .org-sublist li {
            font-weight: 600;
          }

          .org-connector {
            position: absolute;
            background: #d1d5db;
            z-index: 1;
          }

          .vertical {
            width: 2px;
            height: 20px;
            left: 50%;
            top: 100%;
            transform: translateX(-50%);
          }

          .vertical-down {
            width: 2px;
            height: 20px;
            left: 50%;
            bottom: -20px;
            transform: translateX(-50%);
          }

          .main-node {
            background: #f3f4f6;
            border-color: #d1d5db;
          }

          .leadership-node {
            background: #eff6ff;
            border-color: #bfdbfe;
          }

          .department-node {
            background: #ecfdf5;
            border-color: #34d399;
          }

          .faculty-node {
            background: #f5f3ff;
            border-color: #ddd6fe;
          }

          .admin-node {
            background: #f9fafb;
            border-color: #d1d5db;
          }

          @media (max-width: 768px) {
            .org-heading {
              font-size: 2rem;
            }

            .section-subtext {
              font-size: 1rem;
            }

            .org-level {
              flex-direction: column;
              align-items: center;
              gap: 16px;
              margin-bottom: 20px;
            }

            .org-node {
              min-width: 100%;
              max-width: 100%;
              margin-bottom: 0;
            }

            .org-sublist {
              padding-left: 0;
              text-align: center;
              gap: 4px;
            }

            .org-connector.vertical,
            .org-connector.vertical-down {
              display: none;
            }
          }
        `}</style>
      </div>
    </section>
  );
};

export default OrganizationStructure;
