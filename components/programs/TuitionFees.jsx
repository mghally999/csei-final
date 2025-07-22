import React from "react";
import { motion } from "framer-motion";

export const TuitionFees = ({ program }) => {
  if (!program?.fees) return null;

  const {
    title,
    fees: { tuition, visa, registration, fee, duration, currency = "AED" },
    professional = false,
  } = program;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fee-wrapper"
    >
      <h2 className="section-title">Tuition & Fees</h2>
      <p className="disclaimer">
        All amounts are in UAE Dirhams (AED). Fees are subject to change.
      </p>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              {professional ? (
                <>
                  <th>Course</th>
                  <th>Duration</th>
                  <th>Fee</th>
                </>
              ) : (
                <>
                  <th>Program</th>
                  <th>Tuition Fee</th>
                  <th>Visa Fee</th>
                  <th>Registration</th>
                </>
              )}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{title}</td>
              {professional ? (
                <>
                  <td>{duration}</td>
                  <td>
                    {fee?.toLocaleString()} {currency}
                  </td>
                </>
              ) : (
                <>
                  <td>
                    {tuition?.toLocaleString()} {currency}
                  </td>
                  <td>
                    {visa?.toLocaleString()} {currency}
                  </td>
                  <td>
                    {registration?.toLocaleString()} {currency}
                  </td>
                </>
              )}
            </tr>
          </tbody>
        </table>
      </div>

      <style jsx>{`
        .fee-wrapper {
          margin: 3rem 0;
          padding: 2rem;
          background: white;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
        }

        .section-title {
          font-size: 28px;
          font-weight: 700;
          margin-bottom: 1rem;
          color: #111827;
        }

        .disclaimer {
          color: #6b7280;
          margin-bottom: 2rem;
          font-size: 0.95rem;
        }

        .table-container {
          overflow-x: auto;
          border-radius: 8px;
          border: 1px solid #e5e7eb;
        }

        table {
          width: 100%;
          border-collapse: collapse;
          min-width: 600px;
        }

        th,
        td {
          padding: 14px 20px;
          text-align: left;
          border-bottom: 1px solid #e5e7eb;
        }

        th {
          background: #f9fafb;
          font-weight: 600;
          color: #374151;
        }

        tr:last-child td {
          border-bottom: none;
        }

        .highlight-row {
          background-color: #f0fdf4;
          font-weight: 500;
        }

        .highlight-row td {
          border-top: 2px solid #86efac;
          border-bottom: 2px solid #86efac;
        }

        @media (max-width: 768px) {
          .fee-wrapper {
            padding: 1.5rem;
          }

          th,
          td {
            padding: 12px 16px;
          }
        }
      `}</style>
    </motion.div>
  );
};
