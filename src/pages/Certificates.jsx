import React, { useState } from "react";
import "./../styles/Certificates.css";
import CertificateCard from "../components/CertificateCard";
import CertificateFilter from "../components/CertificateFilter";
import { certificateData } from "../components/certificateData";

const Certificates = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // `certificateData` is already exported sorted by date (newest first).
  // Avoid re-sorting by title here so the date order is preserved.
  const sortedCertificates = [...certificateData];

  const filteredCertificates =
    selectedCategory === "All"
      ? sortedCertificates
      : sortedCertificates.filter((cert) => cert.category === selectedCategory);

  return (
    <div className="certificates-container">
      <h2 className="section-title2">My Certificates</h2>

      <CertificateFilter
        selected={selectedCategory}
        onSelect={(cat) => setSelectedCategory(cat)}
      />

      <div className="cert-grid">
        {filteredCertificates.map((cert, index) => (
          <CertificateCard cert={cert} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Certificates;
