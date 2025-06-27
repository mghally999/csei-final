export default function EntryRequirements() {
  return (
    <section className="px-4 py-6 text-gray-800">
      <h2 className="text-3xl font-bold mb-6">Entry Requirements</h2>

      <p className="mb-4 text-lg">
        This course is open to individuals aged{" "}
        <strong>18 years and above</strong> with a passion for coffee, service
        excellence, or café operations.
      </p>

      <p className="mb-4 text-lg">
        Candidates should meet at least one of the following:
      </p>

      <ul className="pl-6 space-y-3 text-base leading-relaxed list-[circle] marker:text-gray-500 marker:text-sm">
        <li>High school diploma or equivalent qualification</li>
        <li>Basic proficiency in English (reading & speaking)</li>
        <li>Interest in specialty coffee or café service industry</li>
        <li>
          Prior hospitality or customer-facing experience
          <div className="text-sm text-gray-600 pl-4">
            (Experience may be considered in lieu of formal qualifications)
          </div>
        </li>
      </ul>

      <p className="mt-6 text-base">
        For personalized eligibility guidance, please reach out to our
        admissions team.
      </p>
    </section>
  );
}
