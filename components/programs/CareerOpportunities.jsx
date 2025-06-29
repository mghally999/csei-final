const CareerOpportunities = ({ data }) => {
  if (!data || !Array.isArray(data)) return null;

  return (
    <div className="space-y-20">
      <h3 className="text-24 fw-600">Career Opportunities</h3>
      <ul className="list-disc pl-5 space-y-2">
        {data.map((item, index) => (
          <li key={index} className="text-16 text-dark-1">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CareerOpportunities;
