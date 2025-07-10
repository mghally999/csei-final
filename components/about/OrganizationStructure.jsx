"use client";
import React from "react";

const OrganizationStructure = () => {
  return (
    <section className="layout-pt-lg layout-pb-lg bg-custom-grey">
      <div className="container">
        <div className="row justify-center text-center mb-50">
          <div className="col-auto">
            <h1 className="text-30 md:text-40 font-bold text-dark-1">
              Organization Structure
            </h1>
            <p className="text-16 md:text-18 text-gray-1 mt-10">
              Clear hierarchy and reporting structure of our institution
            </p>
          </div>
        </div>

        <div className="org-chart-container">
          {/* Board of Management */}
          <div className="org-level org-top">
            <div className="org-node main-node">
              <div className="org-position">Board of Management</div>
              <div className="org-connector vertical"></div>
            </div>
          </div>

          {/* Leadership Level */}
          <div className="org-level org-leadership">
            {[
              "Head of the Academy",
              "Lead Internal Assurer",
              "Examination",
              "Academics",
            ].map((title, i) => (
              <div className="org-node leadership-node" key={i}>
                <div className="org-position">{title}</div>
                <div className="org-connector vertical-down"></div>
              </div>
            ))}
          </div>

          {/* Faculty Level */}
          <div className="org-level org-faculty">
            {[
              "Health Care Faculty/Assessor",
              "Computing Faculty/Assessor",
              "Culinary Arts and Tourism Faculty/Assessor",
              "Business Faculty/Assessor",
            ].map((title, i) => (
              <div className="org-node faculty-node" key={i}>
                <div className="org-position">{title}</div>
              </div>
            ))}
          </div>

          {/* Administration Level */}
          <div className="org-level org-admin">
            <div className="org-node admin-lead">
              <div className="org-position">General Manager</div>
              <div className="org-sub">
                {[
                  "Finance",
                  "Internal Auditor",
                  "Admission",
                  "Student Support",
                  "Human Resources",
                  "Information Technology",
                ].map((item, idx) => (
                  <div className="org-node admin-node" key={idx}>
                    <div className="org-position">{item}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Styles */}
        <style jsx>{`
          .org-chart-container {
            width: 100%;
            overflow-x: auto;
            padding: 20px 0;
          }

          .org-level {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            margin-bottom: 30px;
            position: relative;
            gap: 15px;
          }

          .org-node {
            background: white;
            border: 2px solid #e5e7eb;
            border-radius: 8px;
            padding: 15px 20px;
            text-align: center;
            min-width: 180px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
            position: relative;
            z-index: 2;
          }

          /* Connector styles */
          .org-connector {
            position: absolute;
            background: #d1d5db;
            z-index: 1;
          }

          .vertical {
            width: 2px;
            height: 30px;
            left: 50%;
            top: 100%;
            transform: translateX(-50%);
          }

          .vertical-down {
            width: 2px;
            height: 30px;
            left: 50%;
            bottom: -30px;
            transform: translateX(-50%);
          }

          /* Node colors */
          .main-node {
            background: #f3f4f6;
            border-color: #d1d5db;
            font-weight: 600;
            min-width: 220px;
          }

          .leadership-node {
            background: #eff6ff;
            border-color: #bfdbfe;
          }

          .faculty-node {
            background: #f5f3ff; /* Purple theme */
            border-color: #ddd6fe;
          }

          .admin-lead {
            background: #f9fafb;
            border-color: #d1d5db;
            width: 100%;
            padding: 20px;
          }

          .org-sub {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            margin-top: 20px;
            gap: 12px;
          }

          .admin-node {
            background: #f9fafb;
            border-color: #d1d5db;
          }

          .org-position {
            font-weight: 600;
            color: #111827;
            font-size: 14px;
            white-space: nowrap;
          }

          /* Responsive adjustments */
          @media (max-width: 1200px) {
            .org-node {
              min-width: 160px;
              padding: 12px 15px;
            }
          }

          @media (max-width: 992px) {
            .org-level {
              gap: 12px;
            }

            .org-node {
              min-width: 140px;
            }
          }

          @media (max-width: 768px) {
            .org-node {
              min-width: 120px;
              padding: 10px 12px;
            }

            .org-position {
              font-size: 13px;
            }

            .org-sub {
              flex-direction: column;
              align-items: center;
            }
          }

          @media (max-width: 576px) {
            .org-level {
              justify-content: flex-start;
              padding: 0 15px;
            }

            .org-node {
              min-width: calc(50% - 15px);
              margin-bottom: 15px;
            }

            .org-connector.vertical-down {
              display: none;
            }
          }

          @media (max-width: 400px) {
            .org-node {
              min-width: 100%;
            }
          }
        `}</style>
      </div>
    </section>
  );
};

export default OrganizationStructure;
