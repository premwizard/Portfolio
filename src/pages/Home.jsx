import React, { useEffect, useState } from "react";
import "../styles/Home.css";
import { FaArrowDown } from "react-icons/fa";

const TEXT_LIST = [
  "ML Enthusiast",
  "Full Stack Developer",
  "UI/UX Designer",
];

function Home() {
  const [typedText, setTypedText] = useState("");
  const [loopIndex, setLoopIndex] = useState(0);

  useEffect(() => {
    let i = 0;
    let typingInterval;

    const type = () => {
      typingInterval = setInterval(() => {
        setTypedText(() => TEXT_LIST[loopIndex].substring(0, i + 1));
        i++;
  if (i === TEXT_LIST[loopIndex].length) {
          clearInterval(typingInterval);
          setTimeout(() => {
            i = 0;
            setLoopIndex((prev) => (prev + 1) % TEXT_LIST.length);
          }, 2000);
        }
      }, 70);
    };

    type();

    return () => clearInterval(typingInterval);
  }, [loopIndex]);

  return (
    <div className="home-container" id="home">
      <div className="animated-bg"></div>
      <h1 className="home-title">Welcome to My Space</h1>

      <div className="home-content fade-in-up">
        <img
          src="/images/my-profile-img.jpg"
          alt="My Avatar"
          className="hero-avatar"
        />
        <h1>
          Hi, I'm <span className="neon-text">Prem</span>
        </h1>
        <h2 className="typed-subtitle">
          {typedText}
          <span className="cursor">|</span>
        </h2>

        <div className="scroll-cue bounce">
          <FaArrowDown size={24} />
        </div>
      </div>
    </div>
  );
}

export default Home;
