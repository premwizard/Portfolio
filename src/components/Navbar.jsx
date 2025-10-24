import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Education", path: "/education" },
  { label: "Skills", path: "/skills" },
  { label: "Certificates", path: "/certificates" },
  { label: "Projects", path: "/projects" },
  { label: "Resume", path: "/resume" },
  { label: "Contact", path: "/contact" },
];

// Optional: you can assign a different icon/logo per page
const pageLogos = {
  "/": "🌌",
  "/about": "👤",
  "/resume": "📄",
  "/education": "🎓",
  "/certificates": "🏅",
  "/skills": "🛠️",
  "/projects": "💻",
  "/contact": "📬",
};

function Navbar() {
  const location = useLocation();
  const currentPath = location.pathname;

  const getNavbarTheme = () => {
    if (currentPath === "/") return "navbar-home";
    if (currentPath === "/about") return "navbar-about";
    if (currentPath === "/resume") return "navbar-resume";
    if (currentPath === "/education") return "navbar-education";
    if (currentPath === "/certificates") return "navbar-certificates";
    if (currentPath === "/skills") return "navbar-skills";
    if (currentPath === "/projects") return "navbar-projects";
    if (currentPath === "/contact") return "navbar-contact";
    return "navbar-default";
  };



  return (
    <nav className={`navbar ${getNavbarTheme()}`}>
      <div className="navbar-left">
        <span className="navbar-logo">
          {pageLogos[currentPath] || "🚀"} <span className="logo-text">MySite</span>
        </span>
      </div>

      <ul className="navbar-links">
        {navItems.map((item) => (
          <li key={item.path}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>

      <div className="navbar-right">

      </div>
    </nav>
  );
}

export default Navbar;
