export default function EntryRequirements() {
  return (
    <section className="px-4 py-6 text-gray-800">
      <h2 className="text-3xl font-bold mb-6">Entry Requirements</h2>

      <p className="mb-4 text-lg">
        These qualifications are designed for learners who are typically aged{" "}
        <strong>18 and above</strong>.
      </p>

      <p className="mb-4 text-lg">
        The entry profile for learners who wish to study this qualification is
        likely to include at least one of the following:
      </p>

      <ul className="list-disc pl-6 space-y-3 text-base leading-relaxed">
        <li>
          Relevant Level 4 Diploma qualification or equivalent qualification
        </li>
        <li>GCE Advanced level in 3 subjects or equivalent qualification</li>
        <li>
          Mature learners (over 21) with relevant management experience
          <br />
          <span className="text-sm text-gray-600">
            (Learners must check with the delivery centre regarding this
            experience prior to registering for the programme.)
          </span>
        </li>
      </ul>
    </section>
  );
}
