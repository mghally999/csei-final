export default function EntryRequirements() {
  return (
    <section className="px-4 py-6 text-gray-800">
      <h2 className="text-3xl font-bold mb-6">Entry Requirements</h2>

      <p className="mb-4 text-lg">
        This course is suitable for individuals aged{" "}
        <strong>18 years and above</strong> working or aspiring to work in food
        preparation or service.
      </p>

      <p className="mb-4 text-lg">
        Ideal candidates should meet at least one of the following criteria:
      </p>

      <ul className="pl-6 space-y-3 text-base leading-relaxed list-[circle] marker:text-gray-500 marker:text-sm">
        <li>Basic education (high school or equivalent)</li>
        <li>Currently employed or planning to work in foodservice</li>
        <li>Working knowledge of English (reading & writing)</li>
        <li>
          Mature learners (21+) with relevant experience are welcome
          <div className="text-sm text-gray-600 pl-4">
            (Work experience may be accepted in lieu of formal qualifications)
          </div>
        </li>
        <li>
          English proficiency:
          <div className="text-sm text-gray-600 pl-4">
            Non-native speakers may need to demonstrate English competency.
          </div>
        </li>
      </ul>

      <p className="mt-6 text-base">
        For full eligibility criteria, contact our admissions office.
      </p>
    </section>
  );
}
