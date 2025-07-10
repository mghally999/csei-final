"use client";
import React from "react";

const OrganizationStructure = () => {
  return (
    <section className="layout-pt-lg layout-pb-lg bg-custom-grey">
      <div className="container">
        <div className="row justify-center text-center mb-32">
          <div className="col-auto">
            <h1 className="text-30 md:text-40 font-bold text-dark-1">
              Organization Structure
            </h1>
            <p className="text-16 md:text-18 text-gray-1 mt-8">
              Clear hierarchy and reporting structure of our institution
            </p>
          </div>
        </div>

        <div className="org-chart-container">
          {/* Board of Management - Top Level */}
          <div className="org-level">
            <div className="org-node main-node">
              <div className="org-position">Board of Management</div>
              <div className="org-connector vertical"></div>
            </div>
          </div>

          {/* Head of Academy and General Manager */}
          <div className="org-level">
            <div className="org-node leadership-node">
              <div className="org-position">Head of Academy</div>
              <div className="org-connector vertical-down"></div>
              <div className="org-connector horizontal-left"></div>
            </div>
            <div className="org-node leadership-node">
              <div className="org-position">General Manager</div>
              <div className="org-connector vertical-down"></div>
            </div>
          </div>

          {/* Lead Internal Assurer and Finance */}
          <div className="org-level">
            <div className="org-node department-node">
              <div className="org-position">Lead Internal Assurer</div>
              <div className="org-connector vertical-down"></div>
            </div>
            <div className="org-node admin-node">
              <div className="org-position">Finance</div>
              <div className="org-connector vertical-down"></div>
            </div>
          </div>

          {/* Examination and Internal Auditor */}
          <div className="org-level">
            <div className="org-node department-node">
              <div className="org-position">Examination</div>
              <div className="org-connector vertical-down"></div>
            </div>
            <div className="org-node admin-node">
              <div className="org-position">Internal Auditor</div>
              <div className="org-connector vertical-down"></div>
            </div>
          </div>

          {/* Academics with Admission */}
          <div className="org-level">
            <div className="org-node department-node">
              <div className="org-position">Academics</div>
              <div className="org-connector vertical-down"></div>
            </div>
            <div className="org-node admin-node">
              <div className="org-position">Admission</div>
              <div className="org-connector vertical-down"></div>
            </div>
          </div>

          {/* Support Departments */}
          <div className="org-level">
            <div className="org-node department-node">
              <div className="org-position">Academics</div>
              <div className="org-connector vertical-down"></div>
            </div>
            <div className="flex flex-col gap-10">
              <div className="org-node admin-node">
                <div className="org-position">Student Support</div>
                <div className="org-connector vertical-down"></div>
              </div>
              <div className="org-node admin-node">
                <div className="org-position">Human Resources</div>
                <div className="org-connector vertical-down"></div>
              </div>
              <div className="org-node admin-node">
                <div className="org-position">Information Technology</div>
              </div>
            </div>
          </div>

          {/* Faculties */}
          <div className="org-level">
            {[
              { title: "Health Care Faculty/Assessor", type: "faculty" },
              { title: "Computing Faculty/Assessor", type: "faculty" },
              {
                title: "Culinary Arts and Tourism Faculty/Assessor",
                type: "faculty",
              },
              { title: "Business Faculty/Assessor", type: "faculty" },
              { title: "Placement", type: "faculty" },
            ].map((item, i) => (
              <div
                key={i}
                className={`org-node ${
                  item.type === "admin" ? "admin-node" : "faculty-node"
                }`}
              >
                <div className="org-position">{item.title}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Slightly Compacted Styles */}
        <style jsx global>{`
          .org-chart-container {
            width: 100%;
            overflow-x: auto;
            padding: 20px 0;
          }

          .org-level {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            margin-bottom: 20px;
            position: relative;
            gap: 20px;
          }

          .org-node {
            background: white;
            border: 1px solid #e5e7eb;
            border-radius: 8px;
            padding: 14px;
            text-align: center;
            min-width: 180px;
            max-width: 200px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
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

          .horizontal-left {
            width: calc(50% - 10px);
            height: 2px;
            left: 50%;
            bottom: -20px;
            transform: translateX(-100%);
          }

          /* Node colors */
          .main-node {
            background: #f3f4f6;
            border-color: #d1d5db;
            font-weight: 600;
            min-width: 200px;
            max-width: 220px;
          }

          .leadership-node {
            background: #eff6ff;
            border-color: #bfdbfe;
          }

          .department-node {
            background: #f0fdf4;
            border-color: #bbf7d0;
          }

          .faculty-node {
            background: #f5f3ff;
            border-color: #ddd6fe;
          }

          .admin-node {
            background: #f9fafb;
            border-color: #d1d5db;
          }

          .org-position {
            font-weight: 600;
            color: #111827;
            font-size: 14px;
            white-space: normal;
            word-break: break-word;
            line-height: 1.4;
          }

          /* Responsive adjustments */
          @media (max-width: 768px) {
            .org-level {
              flex-direction: column;
              align-items: center;
              gap: 14px;
              margin-bottom: 14px;
            }

            .org-node {
              min-width: calc(100% - 28px);
              max-width: 100%;
              margin-bottom: 0;
            }

            .org-connector.vertical-down,
            .org-connector.horizontal-left {
              display: none;
            }

            .flex-col.gap-10 {
              gap: 14px;
            }
          }
        `}</style>
      </div>
    </section>
  );
};

export default OrganizationStructure;
