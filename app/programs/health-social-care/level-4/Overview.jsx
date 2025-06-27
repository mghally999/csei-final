export default function Overview() {
  return (
    <section className="px-4 py-6 text-gray-800">
      <h2 className="text-3xl font-bold mb-6">Overview</h2>

      <p className="mb-4 text-lg leading-relaxed">
        The objective of the{" "}
        <strong>
          OTHM Level 4 Diploma in Health and Social Care Management
        </strong>{" "}
        qualification is to equip learners with the underpinning knowledge,
        understanding, and skills required for a career or further study in the
        health and social care sector at a managerial level.
      </p>

      <p className="mb-4 text-lg leading-relaxed">
        The programme enables learners to demonstrate their skills by producing
        evidence from their work or training activities. The units combine both{" "}
        <strong>theoretical and practical knowledge</strong> in the sector and
        will develop and enhance competencies in the areas of:
      </p>

      {/* Dotted Bullet List 1 */}
      <ul className="pl-6 space-y-2 text-base leading-relaxed list-[circle] marker:text-gray-500 marker:text-sm">
        <li>Equality and Diversity</li>
        <li>Professional Development</li>
        <li>Patient Assessment</li>
        <li>Resource Management</li>
        <li>Communication</li>
        <li>Health and Safety</li>
      </ul>

      <p className="mt-6 text-base leading-relaxed">
        <strong>Successful completion</strong> of this qualification will equip
        learners with industry-specific and practical skills, enabling them to:
      </p>

      {/* Dotted Bullet List 2 */}
      <ul className="pl-6 space-y-2 text-base leading-relaxed list-[circle] marker:text-gray-500 marker:text-sm">
        <li>Apply their knowledge effectively in the workplace</li>
        <li>Enhance their career prospects</li>
        <li>Progress to further academic or professional study</li>
      </ul>
    </section>
  );
}
