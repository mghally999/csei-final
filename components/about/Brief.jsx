import React from "react";

export default function Brief() {
  return (
    <section className="brief-section">
      <div className="overlay"></div>

      <div className="content-wrapper">
        <h2 className="sectionTitle__title">CSEI at a Glance</h2>
        <p className="brief-paragraph">
          At CSEI Academy, we are proud to offer UK Ofqual-recognized and
          KHDA-approved programs with hands-on learning to help you thrive in
          IT, Healthcare, Tourism, Culinary Arts, and Business. Our flexible
          courses are designed around your life, supporting working
          professionals and students seeking placements. With strong industry
          connections and direct pathways to UK Bachelor’s degrees, we open
          doors to global opportunities. Join a community where your success
          comes first, and let us help you build the confidence, skills, and
          experience for a bright tomorrow.
        </p>
      </div>

      <style jsx>{`
        .brief-section {
          position: relative;
          background-image: url("https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
          background-size: cover;
          background-position: center;
          padding: 100px 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 600px;
          text-align: center;
        }

        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.6);
          z-index: 1;
        }

        .content-wrapper {
          position: relative;
          z-index: 2;
          max-width: 900px;
        }

        .sectionTitle__title {
          font-size: 42px;
          font-weight: 800;
          margin-bottom: 24px;
          color: white;
        }

        .brief-paragraph {
          font-size: 18px;
          font-weight: 500;
          line-height: 1.8;
          color: white;
        }

        @media (max-width: 768px) {
          .sectionTitle__title {
            font-size: 30px;
          }

          .brief-paragraph {
            font-size: 16px;
          }
        }
      `}</style>
    </section>
  );
}
