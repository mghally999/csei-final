"use client";
import { useState, useEffect } from "react";
import { programs } from "@/data/programs";

export default function LeadForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    course: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    return () => setIsVisible(false);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const res = await fetch("/api/zoho", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (res.ok) {
        document.getElementById("form-container").classList.add("success");
        setTimeout(() => {
          document.getElementById("form-container").classList.remove("success");
        }, 3000);

        setForm({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          course: "",
        });
      } else {
        console.error(data);
        shakeButton();
      }
    } catch (err) {
      console.error(err);
      shakeButton();
    } finally {
      setSubmitting(false);
    }
  };

  const shakeButton = () => {
    const btn = document.getElementById("submit-btn");
    btn.classList.add("shake");
    setTimeout(() => {
      btn.classList.remove("shake");
    }, 1000);
  };

  return (
    <div
      id="form-container"
      className={`form-container ${isVisible ? "show" : ""}`}
    >
      <h2 className="title">Enquiry Form</h2>

      <form onSubmit={handleSubmit} className="form">
        <div className="grid">
          <div className="input-container">
            <input
              type="text"
              name="firstName"
              placeholder=" "
              value={form.firstName}
              onChange={handleChange}
              required
            />
            <span className="floating-label">First name *</span>
            <div className="input-highlight"></div>
          </div>

          <div className="input-container">
            <input
              type="text"
              name="lastName"
              placeholder=" "
              value={form.lastName}
              onChange={handleChange}
              required
            />
            <span className="floating-label">Last name *</span>
            <div className="input-highlight"></div>
          </div>
        </div>

        <div className="input-container">
          <input
            type="email"
            name="email"
            placeholder=" "
            value={form.email}
            onChange={handleChange}
            required
          />
          <span className="floating-label">Email *</span>
          <div className="input-highlight"></div>
        </div>

        <div className="input-container">
          <input
            type="tel"
            name="phone"
            placeholder=" "
            value={form.phone}
            onChange={handleChange}
            required
          />
          <span className="floating-label">Phone *</span>
          <div className="input-highlight"></div>
        </div>

        <div className="input-container">
          <select
            name="course"
            value={form.course}
            onChange={handleChange}
            required
          >
            <option value=""></option>
            {programs.map((p) => (
              <option key={p.id} value={p.title}>
                {p.title} - {p.category}
              </option>
            ))}
          </select>
          <span className="floating-label">Select Course *</span>
          <div className="input-highlight"></div>
        </div>

        <button id="submit-btn" type="submit" disabled={submitting}>
          {submitting ? "Processing..." : "Submit Enquiry"}
        </button>
      </form>

      <p className="note">
        We’ll never share your information with anyone else.
      </p>

      <style jsx>{`
        .form-container {
          background: linear-gradient(to bottom right, #fff, #f9fafb);
          padding: 2rem;
          border-radius: 1rem;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
          max-width: 720px;
          margin: 2.5rem auto;
          border: 1px solid #f3f4f6;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.6s ease;
        }

        .form-container.show {
          opacity: 1;
          transform: translateY(0);
        }

        .form-container.success {
          animation: success 1.5s ease-out;
        }

        .title {
          font-size: 2rem;
          font-weight: 800;
          text-align: center;
          margin-bottom: 2rem;
          background: linear-gradient(to right, #04044e, #000);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: float 3s infinite ease-in-out;
        }

        .form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1.5rem;
        }

        .input-container {
          position: relative;
        }

        input,
        select {
          width: 100%;
          padding: 1rem;
          border: 1px solid #e5e7eb;
          border-radius: 0.5rem;
          background-color: #f9fafb;
          transition: all 0.3s ease;
        }

        input:focus,
        select:focus {
          background-color: #fff;
          outline: none;
          animation: inputFocus 0.3s ease-out forwards;
        }

        .floating-label {
          position: absolute;
          left: 1rem;
          top: 1rem;
          color: #9ca3af;
          transition: 0.3s;
          pointer-events: none;
        }

        input:focus + .floating-label,
        input:not(:placeholder-shown) + .floating-label,
        select:focus + .floating-label,
        select:valid + .floating-label {
          top: -0.6rem;
          left: 0.8rem;
          font-size: 0.75rem;
          color: #e26933 !important;
          background: white;
          padding: 0 0.2rem;
        }

        .input-highlight {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: #e26933 !important;
          transition: width 0.4s ease;
        }

        .input-container:focus-within .input-highlight {
          width: 100%;
        }

        button {
          background: linear-gradient(to right, #000000, #04044e);
          color: white;
          font-weight: bold;
          padding: 1rem;
          border-radius: 0.75rem;
          transition: all 0.3s;
          cursor: pointer;
        }

        button:hover {
          // background: #e26933 !important;
          transform: scale(1.01);
        }

        button:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        button.shake {
          animation: shake 0.5s ease-in-out;
        }

        .note {
          margin-top: 1.5rem;
          text-align: center;
          font-size: 0.875rem;
          color: #6b7280;
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        @keyframes shake {
          0%,
          100% {
            transform: translateX(0);
          }
          10%,
          30%,
          50%,
          70%,
          90% {
            transform: translateX(-5px);
          }
          20%,
          40%,
          60%,
          80% {
            transform: translateX(5px);
          }
        }

        @keyframes success {
          0% {
            box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.7);
          }
          70% {
            box-shadow: 0 0 0 20px rgba(34, 197, 94, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(34, 197, 94, 0);
          }
        }

        @keyframes inputFocus {
          from {
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(226, 105, 51, 0);
          }
          to {
            transform: scale(1.01);
            box-shadow: 0 0 0 5px rgba(226, 105, 51, 0.1);
          }
        }
      `}</style>
    </div>
  );
}
