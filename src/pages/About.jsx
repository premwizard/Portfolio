import React from "react";
import "../styles/About.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function About() {
  return (
    <section className="about-section">
      {/* Animated Background Layers */}
      <div className="background-layers">
        <div className="stars"></div>
        <div className="twinkling"></div>
        <div className="clouds"></div>
      </div>

      <div className="about-container">
        <h1 className="about-title slide-text">
          <i className="fas fa-user-circle"></i> About Me
        </h1>

        <p className="about-intro">
          I am <strong>PREM M</strong>, currently pursuing B.E. in Computer Science and Technology (Final Year)
          at <strong>SNS College of Engineering</strong>.
        </p>

        <h2 className="about-subtitle">
          UI/UX Designer & Full Stack Developer & ML Enthusiast
        </h2>

        <p className="about-vision">
           Building innovative tech solutions for the future of <strong>Healthcare</strong> and <strong>Agriculture</strong>.
        </p>

        <div className="about-details">
          <div className="about-col">
            <p><strong>🎂 Birthday:</strong> 26 May 2005</p>
            <p><strong>🌐 Website:</strong> <a href="https://beacons.ai/m_prem" target="_blank" rel="noopener noreferrer">beacons.ai/m_prem</a></p>
            <p><strong>📞 Phone:</strong> +91 9566535909</p>
            <p><strong>📍 City:</strong> Coimbatore, Tamil Nadu, India</p>
          </div>

          <div className="about-col">
            <p><strong>🎈 Age:</strong> 20</p>
            <p><strong>🎓 Degree:</strong> B.E. Computer Science and Technology</p>
            <p><strong>📧 Email:</strong> <a href="mailto:mprem5032@gmail.com">mprem5032@gmail.com</a></p>
            <p><strong>🟢 Freelance:</strong> Available</p>
          </div>
        </div>

        <div className="about-journey">
          <h3> My Journey</h3>
          <ul>
            <li> Started with HTML & CSS in 2024</li>
            <li> Learned Python, React, and Express in 2024</li>
            <li> ML Learning and ML Projects + UI/UX Freelancing in 2025</li>
            <li> Building a Startup and Exploring LLMs in 2025</li>
            <li> Building a Full Portfolio in 2025</li>
          </ul>
        </div>

        <div className="about-hobbies">
          <h3> Interests</h3>
          <p>Coding, Design, Gaming, Open Source</p>
        </div>

        <div className="about-socials">
          <h3>Explore My Work</h3>
          <div className="social-links">
            <a href="https://github.com/premwizard" target="_blank" rel="noreferrer" aria-label="GitHub">
              <i className="fab fa-github"></i> GitHub
            </a>
            <a href="https://www.linkedin.com/in/m-prem/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <i className="fab fa-linkedin"></i> LinkedIn
            </a>
            <a href="https://x.com/MPrem2222" target="_blank" rel="noreferrer" aria-label="Twitter/X">
              <i className="fab fa-x-twitter"></i> Twitter
            </a>
            <a href="https://www.youtube.com/@premm-gp8jz" target="_blank" rel="noreferrer" aria-label="YouTube">
              <i className="fab fa-youtube"></i> YouTube
            </a>
            <a href="https://leetcode.com/u/mprem5032/" target="_blank" rel="noreferrer" aria-label="LeetCode">
              <i className="fas fa-code"></i> LeetCode
            </a>
            <a href="https://unstop.com/u/mpre1228" target="_blank" rel="noreferrer" aria-label="Unstop">
              <i className="fas fa-award"></i> Unstop
            </a>
            <a href="https://www.hackerrank.com/profile/mprem5032" target="_blank" rel="noreferrer" aria-label="HackerRank">
              <i className="fas fa-terminal"></i> HackerRank
            </a>
            <a href="https://developers.google.com/profile/u/110091555633182967380" target="_blank" rel="noreferrer" aria-label="Google Developer">
              <i className="fab fa-google"></i> Google Dev
            </a>
            <a href="https://codesignal.com/learn/profile/cm4s8ekje0005z5tref5dg8a3" target="_blank" rel="noreferrer" aria-label="CodeSignal">
              <i className="fas fa-signal"></i> CodeSignal
            </a>
            <a href="https://stackoverflow.com/users/31202819/m-prem" target="_blank" rel="noreferrer" aria-label="Stack Overflow">
              <i className="fab fa-stack-overflow"></i> Stack Overflow
            </a>
            <a href="https://www.codechef.com/users/mprem2610" target="_blank" rel="noreferrer" aria-label="CodeChef">
              <i className="fas fa-utensils"></i> CodeChef
            </a>

          </div>
        </div>

        <blockquote className="about-quote">
          "Any product that needs a manual is broken." — Elon Musk
        </blockquote>
      </div>
    </section>
  );
}

export default About;