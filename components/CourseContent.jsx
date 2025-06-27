export default function CourseContent() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Qualification Structure</h2>
      <p className="mb-4">
        This qualification consists of <strong>6 mandatory units</strong>,
        totaling <strong>120 credits</strong>, <strong>1200 hours</strong> Total
        Qualification Time (TQT), and a minimum of{" "}
        <strong>600 Guided Learning Hours (GLH)</strong>.
      </p>
      <ul className="list-disc ml-6 mb-6 space-y-2">
        <li>
          Promoting Equality, Diversity and Inclusion in Health and Social Care
          (20 credits)
        </li>
        <li>
          Professional Development and Academic Writing Skills (20 credits)
        </li>
        <li>Communication in the Caring Professions (20 credits)</li>
        <li>
          Principles of Health and Safety for Health Professions (20 credits)
        </li>
        <li>
          Assessment Processes in Health and Social Care Settings (20 credits)
        </li>
        <li>Resource Management in Health and Social Care (20 credits)</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-2">
        Assessment and Verification
      </h3>
      <p>
        All units are internally assessed by the centre and externally verified
        by OTHM. Learners must provide evidence that meets all specified
        learning outcomes and assessment criteria. The assessor must provide an
        audit trail of how the learner's overall achievement was determined.
      </p>
    </div>
  );
}
