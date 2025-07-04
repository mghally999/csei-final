"use client";

import { useEffect } from "react";
import LeadForm from "@/components/common/LeadForm";

export default function EnquiryModal({ isOpen, onClose }) {
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
        <LeadForm />
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
          max-width: 720px;
          padding: 1rem;
          animation: fadeIn 0.3s ease-out forwards;
          margin-top: 100px;
        }

        .modal-close-button {
          position: absolute;
          top: -40px;
          right: -10px;
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
      `}</style>
    </div>
  );
}
