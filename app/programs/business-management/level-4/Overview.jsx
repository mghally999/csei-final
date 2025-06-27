export default function Overview() {
  return (
    <section className="px-4 py-6 text-gray-800">
      <h2 className="text-3xl font-bold mb-6">Overview</h2>

      <p className="mb-4 text-lg leading-relaxed">
        The objective of the{" "}
        <strong>OTHM Level 4 Diploma in Business Management</strong>{" "}
        qualification is to provide learners with an excellent foundation for
        building a career in a range of organisations. It is designed to ensure
        each learner is ‘business ready’: a confident, independent thinker with
        a detailed knowledge of business and management and equipped with the
        skills to adapt rapidly to change.
      </p>

      <p className="mb-4 text-lg leading-relaxed">
        The qualification will provide learners with the underpinning{" "}
        <strong>knowledge, understanding, and skills</strong> associated with
        the business activities, policies, procedures and processes required to
        work effectively in a business environment. The units combine both{" "}
        <strong>theoretical and practical knowledge</strong> in the areas of:
      </p>

      {/* Dotted Bullet List 1 */}
      <ul className="pl-6 space-y-2 text-base leading-relaxed list-[circle] marker:text-gray-500 marker:text-sm">
        <li>Academic and Research Skills</li>
        <li>Business and Global Operations</li>
        <li>Finance and Accounting</li>
        <li>Business Communication</li>
        <li>Leadership and Team Working</li>
      </ul>

      <p className="mt-6 text-base leading-relaxed">
        <strong>Successful completion</strong> of this qualification will equip
        learners with industry-relevant skills, enabling them to:
      </p>

      {/* Dotted Bullet List 2 */}
      <ul className="pl-6 space-y-2 text-base leading-relaxed list-[circle] marker:text-gray-500 marker:text-sm">
        <li>Apply their business knowledge effectively in the workplace</li>
        <li>Enter the world of work in their chosen sector</li>
        <li>Progress to university or further academic qualifications</li>
      </ul>
    </section>
  );
}
