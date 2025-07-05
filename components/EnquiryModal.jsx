"use client";

import { useEffect } from "react";
import { getGroupedPrograms } from "@/utils/getProgramGroups";

export default function EnquiryModal({ isOpen, onClose }) {
  const { professionalPrograms, regularPrograms } = getGroupedPrograms();

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleEsc);
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="enquiry-modal-overlay">
      {/* Clickable overlay */}
      <div className="modal-background" onClick={onClose} />

      {/* Modal content */}
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-button" onClick={onClose}>
          &times;
        </button>

        <form className="modal-form">
          <h2 className="modal-title">Enquiry Form</h2>

          <input type="text" placeholder="First name *" required />
          <input type="text" placeholder="Last name *" required />
          <input type="email" placeholder="Email *" required />
          <input type="tel" placeholder="Phone *" required />

          <select required>
            <option value="">Select Course *</option>

            {regularPrograms.length > 0 && (
              <optgroup label="Programs">
                {regularPrograms.map((program) => (
                  <option
                    key={program.id}
                    value={`${program.title} - ${program.level}`}
                  >
                    {program.credentialTitle ||
                      `${program.title} - ${program.level}`}
                  </option>
                ))}
              </optgroup>
            )}

            {professionalPrograms.length > 0 && (
              <optgroup label="Professional Courses">
                {professionalPrograms.map((program) => (
                  <option
                    key={program.id}
                    value={`${program.title} - ${program.level}`}
                  >
                    {program.credentialTitle ||
                      `${program.title} - ${program.level}`}
                  </option>
                ))}
              </optgroup>
            )}
          </select>

          <button type="submit">Submit Enquiry</button>
          <p className="modal-disclaimer">
            We’ll never share your information with anyone else.
          </p>
        </form>
      </div>

      <style jsx>{`
        .enquiry-modal-overlay {
          position: fixed;
          inset: 0;
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0, 0, 0, 0.7);
          backdrop-filter: blur(4px);
        }

        .modal-background {
          position: absolute;
          inset: 0;
          cursor: pointer;
          z-index: -1;
        }

        .modal-container {
          position: relative;
          width: 100%;
          max-width: 600px;
          padding: 1.5rem;
          background: white;
          border-radius: 1rem;
          animation: fadeIn 0.3s ease-out forwards;
        }

        .modal-close-button {
          position: absolute;
          top: -30px;
          right: 0;
          font-size: 2rem;
          color: white;
          background: transparent;
          border: none;
          cursor: pointer;
          z-index: 50;
          transition: color 0.2s ease;
        }

        .modal-close-button:hover {
          color: #ff4d4f;
        }

        .modal-title {
          font-size: 1.75rem;
          font-weight: 700;
          text-align: center;
          margin-bottom: 1rem;
        }

        .modal-form {
          display: flex;
          flex-direction: column;
        }

        .modal-form input,
        .modal-form select {
          margin-bottom: 1rem;
          padding: 0.75rem 1rem;
          border: 1px solid #ccc;
          border-radius: 0.5rem;
          font-size: 1rem;
        }

        .modal-form button {
          background: #0f172a;
          color: white;
          padding: 0.75rem 1.25rem;
          border: none;
          border-radius: 0.5rem;
          font-weight: 600;
          font-size: 1rem;
          cursor: pointer;
          transition: background 0.3s ease;
        }

        .modal-form button:hover {
          background: #1e293b;
        }

        .modal-disclaimer {
          margin-top: 1rem;
          font-size: 0.875rem;
          color: #6b7280;
          text-align: center;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 767px) {
          .modal-container {
            max-width: 90%;
            padding: 1rem;
          }

          .modal-title {
            font-size: 1.5rem;
          }

          .modal-close-button {
            top: -25px;
            font-size: 1.75rem;
          }
        }
      `}</style>
    </div>
  );
}
