const QualificationStructure = ({ data }) => {
  if (!data) return null;

  return (
    <div className="space-y-20">
      <h3 className="text-24 fw-600">Qualification Structure</h3>
      <p className="text-16 text-dark-1">{data}</p>
    </div>
  );
};

export default QualificationStructure;
