export const UniversityProgression = ({ data }) => {
  if (!data || !Array.isArray(data)) return null;

  return (
    <section className="bg-white rounded-xl shadow-sm p-6 mb-15 border border-gray-100 custom-margin">
      <h3 className="text-2xl font-semibold text-gray-900 mb-10">
        University Progression
      </h3>
      <ul className="space-y-10">
        {data.map((item, index) => (
          <li
            key={index}
            className="text-18 font-semibold text-[#3a3a55] leading-[1.8] mb-10"
          >
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
};
