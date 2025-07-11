"use client";

import { useEffect, useState } from "react";
import { getGroupedPrograms } from "@/utils/getProgramGroups";

export default function HeroSliderModal({ isOpen, onClose }) {
  const [programList, setProgramList] = useState({
    professionalPrograms: [],
    regularPrograms: [],
  });

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    course: "",
  });

  const [status, setStatus] = useState("");

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleEsc);
      setProgramList(getGroupedPrograms());
    }

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen, onClose]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Submitting...");

    try {
      const res = await fetch("/api/zoho", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("✅ Enquiry submitted successfully.");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          course: "",
        });
        setTimeout(() => {
          setStatus("");
          onClose();
        }, 3000);
      } else {
        setStatus("❌ Error: " + (data?.error || "Submission failed"));
      }
    } catch (err) {
      setStatus("❌ Request failed: " + err.message);
    }
  };

  if (!isOpen) return null;

  const { professionalPrograms, regularPrograms } = programList;

  const getLabel = (program) =>
    program.credentialTitle || `${program.title} - ${program.level}`;

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

        <form className="hero-modal-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="firstName"
            placeholder="First name *"
            required
            value={formData.firstName}
            onChange={(e) =>
              setFormData({ ...formData, firstName: e.target.value })
            }
          />

          <input
            type="text"
            name="lastName"
            placeholder="Last name *"
            required
            value={formData.lastName}
            onChange={(e) =>
              setFormData({ ...formData, lastName: e.target.value })
            }
          />

          <input
            type="email"
            name="email"
            placeholder="Email *"
            required
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone *"
            required
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
          />

          <select
            name="course"
            required
            value={formData.course}
            onChange={(e) =>
              setFormData({ ...formData, course: e.target.value })
            }
          >
            <option value="">Select Course *</option>

            {regularPrograms.length > 0 && (
              <optgroup label="University Progression">
                {regularPrograms.map((program) => (
                  <option key={program.id} value={getLabel(program)}>
                    {getLabel(program)}
                  </option>
                ))}
              </optgroup>
            )}

            {professionalPrograms.length > 0 && (
              <optgroup label="Professional Courses">
                {professionalPrograms.map((program) => (
                  <option key={program.id} value={getLabel(program)}>
                    {getLabel(program)}
                  </option>
                ))}
              </optgroup>
            )}
          </select>

          <button type="submit">Submit Enquiry</button>
        </form>

        {status && (
          <p
            style={{
              marginTop: "1rem",
              fontSize: "0.95rem",
              color: status.includes("✅") ? "green" : "red",
              fontWeight: 500,
            }}
          >
            {status}
          </p>
        )}

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
