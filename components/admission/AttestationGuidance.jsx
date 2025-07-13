"use client";
import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";

export default function AttestationGuidance() {
  return (
    <section className="layout-pt-lg layout-pb-lg bg-custom-grey text-black custom-linear-blue-top">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-30 fw-700 text-dark-1 mb-30"
        >
          Attestation & Translation Guidance
        </motion.h2>

        <div className="row y-gap-30">
          <div className="col-lg-6">
            <div className="text-18 lh-1 text-dark-1 fw-500 mb-20">
              Documents That May Require Attestation
            </div>
            <div className="table-container h-[440px]">
              <table className="table w-1/1">
                <thead>
                  <tr>
                    <th>Document Type</th>
                    <th>Required For</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>High School Certificate</td>
                    <td>Diploma / Advanced Diploma admission</td>
                  </tr>
                  <tr>
                    <td>Bachelor's Degree</td>
                    <td>Postgraduate or licensing courses</td>
                  </tr>
                  <tr>
                    <td>Mark Sheets / Transcripts</td>
                    <td>Academic verification</td>
                  </tr>
                  <tr>
                    <td>Birth Certificate</td>
                    <td>For certain visa types (minors)</td>
                  </tr>
                  <tr>
                    <td>Marriage Certificate</td>
                    <td>If spouse visa is involved</td>
                  </tr>
                  <tr>
                    <td>Police clearance Certificate</td>
                    <td>Healthcare licensing, if required</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-20 text-15 text-gray-1">
              For healthcare-related courses like DHA/ MOH/ HAAD, additional
              document checks
            </div>
          </div>

          <div className="col-lg-6">
            <div className="text-18 lh-1 text-dark-1 fw-500 mb-20">
              When Attestation is Mandatory
            </div>
            <div className="table-container h-[500px]">
              <table className="table w-1/1">
                <thead>
                  <tr>
                    <th>Course Type</th>
                    <th>Is Attestation Required?</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Short-Term Courses (DHA/MOH)</td>
                    <td>Yes (mainly academic/license docs)</td>
                  </tr>
                  <tr>
                    <td>Diploma / Advanced Diploma</td>
                    <td>Yes (12th grade or equivalent)</td>
                  </tr>
                  <tr>
                    <td>Postgraduate Diplomas</td>
                    <td>Yes (Bachelor's Degree)</td>
                  </tr>
                  <tr>
                    <td>University Pathway Programs</td>
                    <td>Yes (10+2 or UG degree)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-20 text-15 text-gray-1">
              CSEI may allow provisional admission, but visa or final
              registration requires attested documents.
            </div>
          </div>
        </div>

        <div className="row y-gap-30 mt-30">
          <div className="col-lg-6">
            <div className="text-18 lh-1 text-dark-1 fw-500 mb-20">
              Translation Requirements
            </div>
            <div className="table-container h-[440px]">
              <table className="table w-1/1">
                <thead>
                  <tr>
                    <th>Requirement</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Documents not in English/Arabic must be translated</td>
                  </tr>
                  <tr>
                    <td>Must use a certified translator</td>
                  </tr>
                  <tr>
                    <td>Attach both original + translated versions</td>
                  </tr>
                  <tr>
                    <td>Translation must be accurate and legally stamped</td>
                  </tr>
                  <tr>
                    <td>
                      Some cases may require attestation of the translated copy
                      too
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="text-18 lh-1 text-dark-1 fw-500 mb-20">
              Attestation Process (General Steps)
            </div>
            <div className="table-container h-[440px]">
              <table className="table w-1/1">
                <thead>
                  <tr>
                    <th>Step</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>
                      Notarization in Home Country from a local notary public or
                      educational board
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Attestation by Education Ministry / Foreign Affairs</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>UAE Embassy Attestation (in your home country)</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>
                      Final MOFA Attestation (in the UAE) after arriving in
                      Dubai
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="row mt-30">
          <div className="col-lg-12">
            <div className="bg-blue-1-05 p-30 rounded-8">
              <div className="text-18 lh-1 text-dark-1 fw-500 mb-20">
                CSEI Support for Students
              </div>
              <div className="row y-gap-20">
                {[
                  "Guidance on required documents",
                  "Support through visa and admission consultants",
                  "Reference to trusted attestation & translation agencies",
                  "Help with MOFA attestation in the UAE",
                ].map((item, index) => (
                  <div key={index} className="col-md-3 col-6">
                    <div className="d-flex items-center">
                      <div className="icon-check text-blue-1 mr-10"></div>
                      <div className="text-15">{item}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <motion.div
          className="mt-40 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <a
            href="/contact"
            className="button -md -dark-1 bg-blue-1 text-white"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "12px",
              padding: "16px 32px",
            }}
          >
            Need Attestation Help? Contact Us{" "}
            <FiArrowRight style={{ fontSize: "24px" }} />
          </a>
        </motion.div>

        <style jsx>{`
          .table-container {
            overflow: auto;
            border-radius: 12px;
            box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);
            margin: 24px 0;
            position: relative;
            background: white;
            border: 1px solid rgba(0, 0, 0, 0.05);
          }

          .table-container table {
            width: 100%;
            border-collapse: separate;
            border-spacing: 0;
            min-width: 600px;
            font-size: 0.95rem;
          }

          .table-container th {
            position: sticky;
            top: 0;
            background: linear-gradient(135deg, #000000 0%, #2d3748 100%);
            color: white;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            font-size: 0.85rem;
            padding: 16px 20px;
            text-align: left;
            border-bottom: 2px solid rgba(255, 255, 255, 0.1);
          }

          .table-container td {
            padding: 14px 20px;
            border-bottom: 1px solid rgba(0, 0, 0, 0.05);
            vertical-align: middle;
            color: #2d3748;
          }

          .table-container tr:last-child td {
            border-bottom: none;
          }

          .table-container tr:hover td {
            background: rgba(0, 0, 0, 0.015);
          }

          .table-container th:first-child {
            border-top-left-radius: 11px;
          }

          .table-container th:last-child {
            border-top-right-radius: 11px;
          }

          .table-container tr:last-child td:first-child {
            border-bottom-left-radius: 11px;
          }

          .table-container tr:last-child td:last-child {
            border-bottom-right-radius: 11px;
          }

          /* Zebra striping for better readability */
          .table-container.striped tr:nth-child(even) td {
            background: rgba(0, 0, 0, 0.02);
          }

          /* Responsive adjustments */
          @media (max-width: 768px) {
            .table-container {
              border-radius: 8px;
            }
            .table-container th,
            .table-container td {
              padding: 12px 14px;
            }
          }
        `}</style>
      </div>
    </section>
  );
}
