export default function QualificationStructure() {
  return (
    <section className="px-4 py-6 text-gray-800">
      <h2 className="text-3xl font-bold mb-6">Course Structure</h2>

      <p className="mb-4 text-lg leading-relaxed">
        The <strong>Food Safety and Sanitation</strong> course spans{" "}
        <strong>36 hours</strong>, blending theory with practical activities and
        regulatory guidance.
      </p>

      <p className="mt-4 text-lg leading-relaxed">Modules include:</p>

      <ul className="list-disc pl-6 space-y-3 text-base leading-relaxed">
        <li>
          <strong>Module 1:</strong> Principles of Food Hygiene & Safety
        </li>
        <li>
          <strong>Module 2:</strong> Temperature Control & Storage
        </li>
        <li>
          <strong>Module 3:</strong> Cross-Contamination & Allergen Management
        </li>
        <li>
          <strong>Module 4:</strong> Cleaning, Sanitizing & Pest Control
        </li>
        <li>
          <strong>Module 5:</strong> HACCP Foundations
        </li>
        <li>
          <strong>Module 6:</strong> Regulatory Compliance & Auditing
        </li>
      </ul>
    </section>
  );
}
