import React from "react";
import skillCategories from "../components/skillsData";
const StarsCanvas = React.lazy(() => import("../components/StarsCanvas"));
import "../styles/skills.css";
import { motion as Motion } from "framer-motion";

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-background">
        <React.Suspense fallback={null}>
          <StarsCanvas />
        </React.Suspense>
        <video
          className="skills-video"
          preload="auto"
          playsInline
          loop
          muted
          autoPlay
          src="/videos/public_blackhole.webm"
          type="video/webm"
        />
      </div>


      {/* === Skills Content === */}
      <div className="skills-content">
        {skillCategories.map((category, index) => (
          <Motion.div
            className="skills-group"
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.4 }} // 👈 delay by index
          >
            <h3 className="skills-heading">{category.name}</h3>

            <div className="skills-grid">
              {category.skills.map((skill, i) => (
                <Motion.div
                  className="skill-item"
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.4 + i * 0.1 }}
                >
                  {skill.icon &&
                    React.createElement(skill.icon, { className: "skill-icon" })}
                  <p className="skill-name">{skill.name}</p>
                </Motion.div>
              ))}
            </div>
          </Motion.div>
        ))}
      </div>
    </section>
  );
};


export default Skills;


