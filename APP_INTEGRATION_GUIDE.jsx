/**
 * INTEGRATION GUIDE: GalaxyLoader in App.jsx
 * 
 * This example shows how to wrap your portfolio with the GalaxyLoader component.
 * The loader will display for 2 seconds on initial page load, then fade out and show your portfolio.
 * 
 * TWO INTEGRATION APPROACHES:
 * 
 * 1. SIMPLE: Always show loader for N seconds on mount (no dependencies)
 * 2. ADVANCED: Show loader while fetching data/assets, then auto-hide
 */

import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import GalaxyTrailCursor from './components/GalaxyTrailCursor';
import GalaxyLoader from './components/GalaxyLoader'; // ✅ Import loader

import Home from './pages/Home';
import About from './pages/About';
import Resume from './pages/Resume';
import Education from './pages/Education';
import Certificates from './pages/Certificates';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

// ✅ Custom Scroll Animation Hook
function useScrollAnimation() {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.fade-in-up, .slide-in-left, .slide-in-right');
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          el.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
}

function App() {
  // ========================================
  // APPROACH 1: SIMPLE TIME-BASED LOADING
  // ========================================
  // Uncomment below and comment out Approach 2 if you want a fixed loading time
  
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setIsLoading(false);
  //   }, 2500); // Show loader for 2.5 seconds

  //   return () => clearTimeout(timer);
  // }, []);

  // ========================================
  // APPROACH 2: SMART LOADING (RECOMMENDED)
  // ========================================
  // Show loader while content is being mounted and animations are ready.
  // Automatically hides when dependencies are loaded.

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initialize AOS animations
    AOS.init({ once: true, duration: 800, easing: 'ease-in-out' });

    // Simulate a minimum loading time of 1.5 seconds (for visual effect)
    // In a real app, you'd wait for API calls, asset loading, etc.
    const minLoadTime = new Promise(resolve => setTimeout(resolve, 1500));

    // Wait for document to be fully interactive
    const domReady = document.readyState === 'complete' 
      ? Promise.resolve()
      : new Promise(resolve => window.addEventListener('load', resolve));

    // Wait for both conditions
    Promise.all([minLoadTime, domReady]).then(() => {
      setIsLoading(false);
    });
  }, []);

  // ========================================
  // HOOK: Scroll animations
  // ========================================
  useScrollAnimation();

  return (
    <>
      {/* ✅ GalaxyLoader - shows while isLoading is true */}
      <GalaxyLoader show={isLoading} duration={1.8} />

      {/* ✅ Main portfolio content - shown once loading is false */}
      <Router>
        <div className="app-container">
          <GalaxyTrailCursor />
          <Navbar />
          <div className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/education" element={<Education />} />
              <Route path="/certificates" element={<Certificates />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;

/**
 * ========================================
 * USAGE NOTES
 * ========================================
 * 
 * GalaxyLoader Props:
 *   - show: boolean (default: true) - Controls visibility
 *   - duration: number in seconds (default: 2) - Animation speed
 * 
 * Example with custom props:
 *   <GalaxyLoader show={isLoading} duration={1.5} />
 * 
 * The loader covers the full screen with z-index: 9999, so it will
 * appear on top of everything until isLoading is false.
 * 
 * CUSTOMIZATION:
 * - To adjust animation speed globally, change the duration prop
 * - To change colors, edit src/styles/galaxyLoader.css (look for rgba values)
 * - To hide the loading text, remove or comment out <div className="loader-text">
 *   in GalaxyLoader.jsx
 * 
 * PERFORMANCE:
 * - The component uses pure CSS animations (no JS animation loops)
 * - GPU-accelerated with transform and opacity animations
 * - Very lightweight (no external animation libraries)
 * - Smooth on desktop and mobile (respects prefers-reduced-motion)
 */
