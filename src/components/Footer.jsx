import React from "react";
import { useLocation } from "react-router-dom";
import "./Footer.css";

function Footer() {
  const location = useLocation();
  const path = (location.pathname || "/").toLowerCase();

  const getPageClass = () => {
    switch (path) {
      case "/": return "footer--home";
      case "/resume": return "footer--resume";
      case "/about": return "footer--about";
      case "/skills": return "footer--skills";
      case "/education": return "footer--education";
      case "/certificates": return "footer--certificates";
      case "/contact": return "footer--contact";
      case "/projects": return "footer--projects";
      default: return "footer--default";
    }
  };


  const social = [
      { href: "https://www.linkedin.com/", label: "LinkedIn", svg: (
          <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" focusable="false"><path fill="currentColor" d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.22 8.5h4.55V24H.22V8.5zM8.98 8.5h4.37v2.08h.06c.61-1.16 2.1-2.38 4.33-2.38 4.63 0 5.48 3.04 5.48 6.99V24h-4.56v-7.31c0-1.74-.03-3.98-2.42-3.98-2.42 0-2.79 1.89-2.79 3.85V24H8.98V8.5z"/></svg>
        )},
              { href: "https://github.com/", label: "GitHub", svg: (
          <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" focusable="false"><path fill="currentColor" d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.92.57.1.78-.25.78-.55 0-.27-.01-1.16-.02-2.11-3.2.7-3.88-1.54-3.88-1.54-.53-1.35-1.3-1.71-1.3-1.71-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.76.41-1.27.74-1.56-2.56-.29-5.26-1.28-5.26-5.69 0-1.26.45-2.29 1.2-3.1-.12-.29-.52-1.46.11-3.04 0 0 .98-.31 3.2 1.18.93-.26 1.93-.39 2.92-.39.99 0 1.99.13 2.92.39 2.21-1.5 3.19-1.18 3.19-1.18.63 1.58.23 2.75.11 3.04.75.81 1.2 1.84 1.2 3.1 0 4.42-2.71 5.39-5.29 5.67.42.36.79 1.08.79 2.18 0 1.57-.01 2.83-.01 3.22 0 .31.2.66.79.55C20.71 21.39 24 17.08 24 12 24 5.65 18.35.5 12 .5z"/></svg>
        )},
  ];



  return (
    <footer
      className={`footer footer-unique ${getPageClass()}`}
      role="contentinfo"
      style={{ minHeight: '64px', padding: '14px 0' }}
    >
      <div className="footer-inner">
        <div className="inline-row">
          {/* keep footer-inner available for centered content or links in future */}
        </div>
      </div>

      {/* move social and center out so absolute positioning is always relative to footer */}
      <div
        className="footer-social"
        aria-label="Social links"
        style={{ position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)', paddingLeft: '12px' }}
      >
        {social.map((s) => (
          <a key={s.href} className="social-link" href={s.href} target="_blank" rel="noreferrer noopener" aria-label={s.label}>
            {s.svg}
          </a>
        ))}
      </div>

      <div className="center-col" style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}>
        <div className="footer-copyright">
          © 2025 M. Prem. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
