import React from "react";

export default function Overview({ data }) {
  if (!data) return null;

  return (
    <section className="bg-white rounded-xl shadow-sm p-6 mb-15 border border-gray-100 custom-margin">
      <h3 className="tab-section-heading">Overview</h3>

      <div className="space-y-10">
        {Array.isArray(data) ? (
          data.map((para, index) => (
            <p key={index} className="tab-section-paragraph">
              {para}
            </p>
          ))
        ) : (
          <p className="tab-section-paragraph">{data}</p>
        )}
      </div>
    </section>
  );
}
