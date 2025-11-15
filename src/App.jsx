import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import GalaxyTrailCursor from './components/GalaxyTrailCursor';
import GalaxyLoader from './components/GalaxyLoader'; // ✅ New galaxy loader
import { waitForCriticalImages, waitForVideo, preloadImages } from './utils/assetOptimizer'; // ✅ Asset loading utils

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
  // ✅ Loading state for galaxy loader
  const [isLoading, setIsLoading] = useState(true);

  useScrollAnimation();

  useEffect(() => {
    // Initialize AOS animations
    AOS.init({ once: true, duration: 800, easing: 'ease-in-out' });

    // ✅ Smart loading: wait for critical assets before hiding loader
    const loadAssets = async () => {
      // Define critical images and videos to wait for
      const criticalImages = [
        '/images/my-profile-img.jpg', // Small hero avatar
        '/images/Home.png', // Large home background
      ];

      const homeVideo = '/videos/153813-806526698.mp4';

      // Preload other images in the background
      preloadImages([
        '/images/404-bg.jpg',
        '/images/certificate.jpg',
        '/images/contact.jpg',
      ]);

      // Wait for critical assets (with max timeouts)
      await Promise.all([
        waitForCriticalImages(criticalImages, 12000), // Wait max 12 seconds for images
        waitForVideo(homeVideo, 8000), // Wait max 8 seconds for video metadata
      ]);

      // Ensure minimum load time for visual effect
      await new Promise(resolve => setTimeout(resolve, 500));

      setIsLoading(false);
    };

    loadAssets();
  }, []);

  return (
    <>
      {/* ✅ GalaxyLoader - shows during initial load */}
      <GalaxyLoader show={isLoading} duration={1.8} />

      {/* ✅ Main portfolio content */}
      <Router>
        <div className="app-container">
          <GalaxyTrailCursor /> {/* ✅ New animated cursor */}
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
