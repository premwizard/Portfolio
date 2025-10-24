// === Education.jsx ===
import React, { useEffect } from "react";
import "../styles/Education.css";

const educationData = [
  {
    degree: "B.E Computer Science and Technology",
    institution: "SNS College of Engineering",
    year: "2022 – 2026",
    score: "CGPA: 8.16"
  },
  {
    degree: "HSC",
    institution: "Annai Violet Matric Hr. Sec. School",
    year: "2021 – 2022",
    score: "Percentage: 66%"
  },
  {
    degree: "SSLC",
    institution: "Brilliant Matric Hr. Sec. School",
    year: "2019 – 2020",
    score: "Percentage: 59%"
  },
];

const Education = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://unpkg.com/@dotlottie/player-component@2.7.12/dist/dotlottie-player.mjs";
    script.type = "module";
    document.body.appendChild(script);
  }, []);

  return (
    <div className="education-page">
      <h2 className="edu-title">My Education</h2>
      <div className="timeline">
        {educationData.map((edu, idx) => (
          <div key={idx} className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-content">
              <h3>{edu.degree}</h3>
              <p className="institution">{edu.institution}</p>
              <p className="year">{edu.year}</p>
              <p className="score">{edu.score}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
