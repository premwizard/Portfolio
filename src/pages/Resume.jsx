import React from "react";
import { motion as Motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";
import "../styles/ResumePage.css";

const ResumePage = () => {
  return (
    <div className="resume-page">
  <Motion.div
        className="resume-wrapper"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Animated Title */}
  <Motion.h1
          className="resume-title"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          My Resume
  </Motion.h1>

        {/* Floating Download Button */}
  <Motion.a
    href="/images/GENERAL RESUME.pdf"
    download="/images/GENERAL RESUME.pdf"
          className="floating-download"
          title="Download Resume"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaDownload />
          <span>Download</span>
  </Motion.a>

        {/* Resume Image */}
  <Motion.img
    src="/images/image.png"
          alt="Resume"
          className="resume-iframe"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
        />
  </Motion.div>
    </div>
  );
};

export default ResumePage;
