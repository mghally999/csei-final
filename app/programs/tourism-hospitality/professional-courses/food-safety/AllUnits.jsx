export default function AllUnits() {
  return (
    <section className="px-4 py-6 text-gray-800">
      <h2 className="text-3xl font-bold mb-4">Course Modules</h2>
      <p className="mb-6 text-base">
        <strong>
          All modules are mandatory and designed to ensure mastery of safe food
          handling and sanitation.
        </strong>
      </p>
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
