import React from "react";

const categories = ["All", "AI/ML", "Web Development", "Cloud", "Python", "UI/UX", "Others"];

const CertificateFilter = ({ selected, onSelect }) => {
  return (
    <div className="filter-tabs">
      {categories.map((cat) => (
        <button
          key={cat}
          className={`tab ${selected === cat ? "active" : ""}`}
          onClick={() => onSelect(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default CertificateFilter;
