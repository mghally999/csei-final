"use client";

import { useEffect, useState } from "react";
import { programs } from "@/data/programs"; // Make sure this path is valid

export default function HeroSliderModal({ isOpen, onClose }) {
  const [programList, setProgramList] = useState([]);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleEsc);
      setProgramList(programs); // ✅ Fetch on open
    }

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="hero-slider-modal-overlay">
      <div className="hero-slider-modal-bg" onClick={onClose} />

      <div
        className="hero-slider-modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="hero-slider-close" onClick={onClose}>
          &times;
        </button>

        <h2 className="hero-modal-title">Enquiry Form</h2>

        <form className="hero-modal-form">
          <input type="text" placeholder="First name *" required />
          <input type="text" placeholder="Last name *" required />
          <input type="email" placeholder="Email *" required />
          <input type="tel" placeholder="Phone *" required />

          <select required>
            <option value="">Select Course *</option>
            {programList.map((program) => (
              <option
                key={program.id}
                value={`${program.title} - ${program.category}`}
              >
                {program.title} - {program.category}
              </option>
            ))}
          </select>

          <button type="submit">Submit Enquiry</button>
        </form>

        <p className="hero-modal-disclaimer">
          We’ll never share your information with anyone else.
        </p>
      </div>

      <style jsx>{`
        .hero-slider-modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.75);
          backdrop-filter: blur(6px);
          z-index: 999999;
        }

        .hero-slider-modal-bg {
          position: absolute;
          inset: 0;
          z-index: -1;
        }

        .hero-slider-modal-content {
          position: absolute;
          top: 60%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: white;
          padding: 2rem;
          border-radius: 16px;
          max-width: 480px;
          width: 90%;
          text-align: center;
          animation: fadeInUp 0.4s ease;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
        }

        .hero-slider-close {
          position: absolute;
          top: 12px;
          right: 20px;
          background: transparent;
          border: none;
          font-size: 2rem;
          cursor: pointer;
          color: #333;
        }

        .hero-modal-title {
          font-size: 1.8rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
          color: #0f172a;
        }

        .hero-modal-form {
          display: flex;
          flex-direction: column;
        }

        .hero-modal-form input,
        .hero-modal-form select {
          padding: 0.75rem 1rem;
          border: 1px solid #d1d5db;
          border-radius: 0.75rem;
          margin-bottom: 1rem;
          font-size: 1rem;
          background: white;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }

        .hero-modal-form input:focus,
        .hero-modal-form select:focus {
          outline: none;
          border-color: #f97316;
          box-shadow: 0 0 0 3px rgba(251, 146, 60, 0.4);
        }

        .hero-modal-form button {
          background: #0f172a;
          color: white;
          padding: 0.75rem 1.25rem;
          border: none;
          border-radius: 0.75rem;
          font-weight: 600;
          font-size: 1rem;
          cursor: pointer;
          transition: background 0.3s ease;
        }

        .hero-modal-form button:hover {
          background: #1e293b;
        }

        .hero-modal-disclaimer {
          margin-top: 1rem;
          font-size: 0.875rem;
          color: #6b7280;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translate(-50%, -45%);
          }
          to {
            opacity: 1;
            transform: translate(-50%, -50%);
          }
        }

        @media (max-width: 767px) {
          .hero-slider-modal-content {
            padding: 1.5rem;
          }

          .hero-modal-title {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
}
