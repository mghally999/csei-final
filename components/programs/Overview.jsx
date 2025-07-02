export default function Overview({ data }) {
  if (!data) return null;

  return (
    <section className="bg-white rounded-xl shadow-sm p-6 mb-15 border border-gray-100 custom-margin">
      <h3 className="text-2xl font-semibold text-gray-900 mb-10">Overview</h3>
      <div className="space-y-10">
        {Array.isArray(data) ? (
          data.map((para, index) => (
            <p
              key={index}
              className="text-18 font-semibold text-[#3a3a55] leading-[1.8] mb-10"
            >
              {para}
            </p>
          ))
        ) : (
          <p className="text-18 font-semibold text-[#3a3a55] leading-[1.8] mb-10">
            {data}
          </p>
        )}
      </div>
    </section>
  );
}
