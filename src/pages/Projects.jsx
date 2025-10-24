import React, { useState, useEffect, useRef } from "react";
import "../styles/Projects.css";

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);
  const tileRefs = useRef([]);

  const allProjects = [
    {
      title: "AI-Dietitian System",
      image: "https://cdn.pixabay.com/photo/2024/10/04/12/47/ai-generated-9096288_1280.jpg",
      domain: "AI / Machine Learning",
      description:
        "An AI-powered virtual dietitian designed to recommend personalized meal plans and nutritional guidance.",
      date: "Dec 2024",
      github: "https://github.com/yourusername/ai-dietitian-system",
      website: "https://ai-dietitian-demo.vercel.app/",
    },
    {
      title: "Early Symptoms Detection System",
      image:
        "https://img.freepik.com/free-vector/arabic-doctor-with-medical-icon-hand-drawn-sketch-vector-background_460848-15109.jpg?t=st=1751204599~exp=1751208199~hmac=c064cbe5b7eb6ae14274b888c55a65383b727875525260e740073bb45e6950d8&w=1380",
      domain: "AI / Machine Learning",
      description:
        "Detect diseases from symptoms via text, image, or voice with confidence score and recommendations.",
      date: "May 2025",
      github: "https://github.com/yourusername/symptom-detector",
      website: "https://symptom-detector-app.vercel.app/",
    },
    {
      title: "Stress Prediction System",
      image: "https://images.pexels.com/photos/2914753/pexels-photo-2914753.jpeg",
      domain: "AI / Machine Learning",
      description:
        "Predicts stress levels based on survey and lifestyle indicators with real-time ML-based classification.",
      date: "Feb 2025",
      github: "https://github.com/yourusername/stress-prediction",
      website: "https://stress-predictor.vercel.app/",
    },
    {
      title: "Stock Price Prediction",
      image:
        "https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg",
      domain: "AI / Machine Learning",
      description:
        "LSTM RNN-based model to forecast stock market trends with time-series graphs and UI dashboard.",
      date: "Jan 2025",
      github: "https://github.com/yourusername/stock-price-predictor",
      website: "https://stock-ai-dashboard.vercel.app/",
    },
    {
      title: "Liver Disease Detection",
      image: "https://www.cdc.gov/diabetes/images/library/features/liver.jpg",
      domain: "AI / Machine Learning",
      description:
        "Uses OCR and ML to detect liver diseases from scanned blood test reports or data forms.",
      date: "Apr 2025",
      github: "https://github.com/yourusername/liver-disease-detection",
      website: "https://liver-ml-detector.vercel.app/",
    },
    {
      title: "Mental Analysis Tool",
      image:
        "https://images.pexels.com/photos/4100679/pexels-photo-4100679.jpeg",
      domain: "AI / Machine Learning",
      description:
        "Real-time prediction of anxiety and depression using ML models trained on survey data.",
      date: "Feb 2025",
      github: "https://github.com/yourusername/mental-analysis-tool",
      website: "https://mental-analysis-tool.vercel.app/",
    },
    {
      title: "Blog Platform",
      image:
        "https://www.upskillist.com/blog/content/images/wordpress/2022/01/New-Project-61-768x334.png",
      domain: "Full Stack (Python / Django)",
      description:
        "Full-stack blog platform with user auth, Markdown editor, and Django ORM-based CRUD features.",
      date: "Nov 2024",
      github: "https://github.com/yourusername/django-blog-platform",
      website: "https://django-blog-ui.vercel.app/",
    },
    {
      title: "PulseArchive",
      image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg",
      domain: "Full Stack (MERN)",
      description:
        "Encrypted cloud-based medical record storage and sharing platform with JWT-auth.",
      date: "Mar 2025",
      github: "https://github.com/premwizard/PulseArchive-Frontend-",
      website: "https://pulse-archive-frontend.vercel.app/",
    },
    {
      title: "Pet Finder",
      image: "https://images.pexels.com/photos/1254140/pexels-photo-1254140.jpeg",
      domain: "Full Stack (MERN)",
      description:
        "Adoption app for pets with filtering, favorites, live chat, and profile view options.",
      date: "Feb 2025",
      github: "https://github.com/yourusername/pet-finder",
      website: "https://petfinder-app.vercel.app/",
    },
  ];

  useEffect(() => {
    let frame = 0;
    const animate = () => {
      tileRefs.current.forEach((tile, i) => {
        if (!tile) return;
        const x = Math.sin((frame + i * 10) / 80) * 2;
        const y = Math.cos((frame + i * 10) / 100) * 2;
        const hover = tile.dataset.hover || "";
        tile.style.transform = `translate(${x}px, ${y}px)` + hover;
      });
      frame++;
      requestAnimationFrame(animate);
    };
    animate();
  }, []);

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateX = ((y / rect.height) - 0.5) * 24;
    const rotateY = ((x / rect.width) - 0.5) * -24;
    const hoverTransform = ` perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.2)`;
    card.dataset.hover = hoverTransform;
  };

  const handleMouseLeave = (e) => {
    const card = e.currentTarget;
    card.dataset.hover = "";
  };

  return (
    <div className="projects-showcase">
      {/* 🔁 Video Background Layer */}
      <video
        className="bg-video"
        autoPlay
        muted
        loop
        playsInline
        src="https://www.pexels.com/download/video/6961824/"
        type="video/mp4"
      />

      <h2 className="section-title">My Projects</h2>

      <div className="floating-grid">
        {allProjects.map((project, index) => (
          <div className="floating-wrapper" key={index}>
            <div
              className="floating-tile"
              ref={(el) => (tileRefs.current[index] = el)}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              onClick={() => setActiveProject(project)}
            >
              <img src={project.image} alt={project.title} className="tile-img" />
            </div>
            <div className="tile-caption">
              <h3>{project.title}</h3>
              <p>{project.domain}</p>
            </div>
          </div>
        ))}
      </div>

      {activeProject && (
        <div
          className="modal"
          onClick={() => setActiveProject(null)}
          onTouchStart={(e) => (window.touchStartX = e.changedTouches[0].screenX)}
          onTouchEnd={(e) => {
            const deltaX = e.changedTouches[0].screenX - window.touchStartX;
            if (Math.abs(deltaX) > 100) setActiveProject(null);
          }}
        >
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={activeProject.image} alt={activeProject.title} />
            <h2>{activeProject.title}</h2>
            <p><strong>Domain:</strong> {activeProject.domain}</p>
            <p><strong>Date:</strong> {activeProject.date}</p>
            <p>{activeProject.description}</p>

            {/* 🌐 Added Links Section */}
            <div className="project-links">
              <a href={activeProject.github} target="_blank" rel="noopener noreferrer" className="project-btn github-btn">
                <i className="fab fa-github"></i> View Code
              </a>
              <a href={activeProject.website} target="_blank" rel="noopener noreferrer" className="project-btn live-btn">
                <i className="fas fa-globe"></i> Visit Site
              </a>
            </div>

            <button onClick={() => setActiveProject(null)} className="close-btn">Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
