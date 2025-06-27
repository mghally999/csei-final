export default function EntryRequirements() {
  return (
    <section className="px-4 py-6 text-gray-800">
      <h2 className="text-3xl font-bold mb-6">Entry Requirements</h2>
      <p className="mb-4 text-lg">
        This course is intended for individuals aged{" "}
        <strong>18 years and above</strong> with an interest in leadership roles
        within health and social care.
      </p>
      <p className="mb-4 text-lg">
        Candidates should typically meet at least one of the following:
      </p>
      <ul className="pl-6 space-y-3 text-base leading-relaxed list-[circle] marker:text-gray-500 marker:text-sm">
        <li>Relevant academic qualification (e.g., high school diploma)</li>
        <li>Prior experience in health, social care, or community services</li>
        <li>
          Basic competence in English language (reading, writing, speaking)
        </li>
        <li>
          Aspiring or existing supervisors/managers in care settings
          <div className="text-sm text-gray-600 pl-4">
            (Experience may substitute formal qualifications)
          </div>
        </li>
      </ul>
      <p className="mt-6 text-base">
        For specific queries or guidance, please contact our admissions team.
      </p>
    </section>
  );
}
