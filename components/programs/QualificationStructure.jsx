export const QualificationStructure = ({ data }) => {
  if (!data) return null;

  return (
    <section className="bg-white rounded-xl shadow-sm p-6 mb-15 border border-gray-100 custom-margin">
      <h3 className="text-2xl font-semibold text-gray-900 mb-10">
        Qualification Structure
      </h3>
      <p className="text-18 font-semibold text-[#3a3a55] leading-[1.8] mb-10">
        {data}
      </p>
    </section>
  );
};
