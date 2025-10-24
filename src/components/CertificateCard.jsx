import React from "react";

const CertificateCard = ({ cert }) => (
  <div className="cert-card">
    <h3>{cert.title}</h3>
    <p><strong>Issuer:</strong> {cert.issuer}</p>
    <p><strong>Date:</strong> {cert.date}</p>
    <a
      href={cert.link}
      target="_blank"
      rel="noopener noreferrer"
      className="view-button"
    >
      View Certificate
    </a>
  </div>
);

export default CertificateCard;
