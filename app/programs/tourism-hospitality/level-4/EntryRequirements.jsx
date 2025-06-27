export default function EntryRequirements() {
  return (
    <section className="px-4 py-6 text-gray-800">
      <h2 className="text-3xl font-bold mb-6">Entry Requirements</h2>

      <p className="mb-4 text-lg">
        These qualifications are designed for learners who are typically aged{" "}
        <strong>18 and above</strong>.
      </p>

      <p className="mb-4 text-lg">
        The entry profile for learners is likely to include at least one of the
        following:
      </p>

      <ul className="pl-6 space-y-3 text-base leading-relaxed list-[circle] marker:text-gray-500 marker:text-sm">
        <li>Relevant Level 3 Diploma or equivalent qualification</li>
        <li>GCE Advanced level in 2 subjects or equivalent qualification</li>
        <li>
          Mature learners (over 21) with relevant management experience
          <div className="text-sm text-gray-600 pl-4">
            (Learners must check with the delivery centre regarding this
            experience prior to registering for the programme)
          </div>
        </li>
        <li>
          English requirements:
          <div className="text-sm text-gray-600 pl-4">
            If a learner is not from a majority English-speaking country, they
            must provide evidence of English language competency.
          </div>
        </li>
      </ul>

      <p className="mt-6 text-base">
        For more information, visit the{" "}
        <strong>English Language Expectations</strong> page on this website.
      </p>
    </section>
  );
}
