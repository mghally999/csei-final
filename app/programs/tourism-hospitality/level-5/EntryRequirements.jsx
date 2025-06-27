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
        <li>
          Relevant Level 4 Diploma qualification or equivalent qualification
        </li>
        <li>GCE Advanced level in 3 subjects or equivalent qualification</li>
        <li>
          Mature learners (over 21) with relevant management experience
          <div className="text-sm text-gray-600 pl-4">
            (Learners must check with the delivery centre regarding this
            experience prior to registering for the programme)
          </div>
        </li>
      </ul>

      <h3 className="mt-6 text-2xl font-semibold">Equivalences</h3>

      <p className="mt-2 text-base">
        OTHM qualifications at RQF Level 5 represent practical knowledge,
        skills, capabilities, and competences that are assessed in academic
        terms as being equivalent to <strong>Foundation Degrees</strong>,{" "}
        <strong>Higher National Diplomas (HND)</strong>, and{" "}
        <strong>Year 2 of a three-year UK Bachelor's degree</strong>.
      </p>
    </section>
  );
}
