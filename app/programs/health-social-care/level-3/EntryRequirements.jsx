// level-4/EntryRequirements.jsx
export default function EntryRequirements() {
  return (
    <section className="px-4 py-6 text-gray-800">
      <h2 className="text-3xl font-bold mb-6">🎓 Entry Requirements</h2>

      <p className="mb-4 text-lg">
        These qualifications are designed for learners who are typically aged{" "}
        <strong>18 and above</strong>.
      </p>

      <p className="mb-4 text-lg">
        The entry profile for learners is likely to include at least one of the
        following:
      </p>

      <ul className="list-disc pl-6 space-y-3 text-base leading-relaxed">
        <li>
          ✅ Relevant Level 3 Diploma qualification or equivalent qualification
        </li>
        <li>✅ GCE Advanced level in 2 subjects or equivalent qualification</li>
        <li>
          ✅ Mature learners (over 21) with relevant management experience
          <br />
          <span className="text-sm text-gray-600">
            (Learners must check with the delivery centre regarding this
            experience prior to registering for the programme)
          </span>
        </li>
        <li>
          ✅ English requirements:
          <br />
          <span className="text-sm text-gray-600">
            If a learner is not from a majority English-speaking country, they
            must provide evidence of English language competency.
          </span>
        </li>
      </ul>

      <p className="mt-6 text-base">
        📄 For more information, visit the{" "}
        <strong>English Language Expectations</strong> page on this website.
      </p>
    </section>
  );
}
