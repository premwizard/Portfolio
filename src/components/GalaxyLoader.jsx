import React, { useEffect, useState } from "react";
import "../styles/galaxyLoader.css";

/**
 * GalaxyLoader Component
 * 
 * A premium, full-screen galaxy spinning animation loader.
 * Shows rotating stars, sparkles, and a swirling spiral galaxy effect.
 * 
 * Props:
 *   - duration: animation duration in seconds (default: 2)
 *   - show: boolean to conditionally render (optional, defaults to true if not provided)
 */
function GalaxyLoader({ duration = 2, show = true }) {
  const [isVisible, setIsVisible] = useState(show);

  useEffect(() => {
    setIsVisible(show);
  }, [show]);

  if (!isVisible) return null;

  return (
    <div className="galaxy-loader-container">
      {/* Main Galaxy Background */}
      <div className="galaxy-background">
        {/* Outer rotating ring of stars */}
        <div className="galaxy-ring outer-ring" style={{ "--duration": `${duration}s` }}>
          {[...Array(8)].map((_, i) => (
            <div key={`outer-${i}`} className="galaxy-star star-large"></div>
          ))}
        </div>

        {/* Middle rotating ring of stars */}
        <div className="galaxy-ring middle-ring" style={{ "--duration": `${duration * 1.1}s` }}>
          {[...Array(12)].map((_, i) => (
            <div key={`middle-${i}`} className="galaxy-star star-medium"></div>
          ))}
        </div>

        {/* Inner rotating ring of stars */}
        <div className="galaxy-ring inner-ring" style={{ "--duration": `${duration * 0.9}s` }}>
          {[...Array(16)].map((_, i) => (
            <div key={`inner-${i}`} className="galaxy-star star-small"></div>
          ))}
        </div>

        {/* Spiral galaxy core effect */}
        <div className="galaxy-core">
          <div className="core-glow"></div>
          <div className="core-sparkle sparkle-1"></div>
          <div className="core-sparkle sparkle-2"></div>
          <div className="core-sparkle sparkle-3"></div>
        </div>

        {/* Floating nebula clouds */}
        <div className="nebula nebula-1"></div>
        <div className="nebula nebula-2"></div>
        <div className="nebula nebula-3"></div>

        {/* Random floating dust particles */}
        <div className="dust-layer">
          {[...Array(20)].map((_, i) => (
            <div key={`dust-${i}`} className="dust-particle" style={{
              "--delay": `${i * 0.1}s`,
              "--left": `${Math.random() * 100}%`,
              "--top": `${Math.random() * 100}%`,
            }}></div>
          ))}
        </div>
      </div>

      {/* Optional loading text */}
      <div className="loader-text">Loading your portfolio...</div>
    </div>
  );
}

export default GalaxyLoader;
