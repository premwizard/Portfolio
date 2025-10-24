import React, { useEffect, useRef } from "react";
import "../styles/GalaxyTrailCursor.css";

const GalaxyTrailCursor = () => {
  const canvasRef = useRef(null);
  const rafRef = useRef(null);
  const mouseRef = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2, visible: false });
  const particles = useRef([]);
  const lastTime = useRef(0);
  const devicePixelRatioRef = useRef(typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1);

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (typeof document === "undefined") return;

    const canvas = document.createElement("canvas");
    canvas.className = "galaxy-cursor-canvas";
    document.body.appendChild(canvas);
    canvasRef.current = canvas;

    const ctx = canvas.getContext("2d");

    function resize() {
      const dpr = (devicePixelRatioRef.current = window.devicePixelRatio || 1);
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();
    window.addEventListener("resize", resize);

    function spawnParticle(x, y, opts = {}) {
      const speed = opts.speed || 0.3 + Math.random() * 1.2;
      const angle = opts.angle || Math.random() * Math.PI * 2;
      const vx = Math.cos(angle) * speed;
      const vy = Math.sin(angle) * speed;
      particles.current.push({
        x,
        y,
        vx,
        vy,
        life: opts.life || 600 + Math.random() * 900,
        born: performance.now(),
        size: opts.size || 1 + Math.random() * 3,
        hue: opts.hue || 200 + Math.random() * 120,
      });
      if (particles.current.length > 600)
        particles.current.splice(0, particles.current.length - 600);
    }

    function clickBurst(x, y) {
      const n = 24 + Math.round(Math.random() * 20);
      const hueBase = 200 + Math.random() * 160;
      for (let i = 0; i < n; i++) {
        spawnParticle(x, y, {
          angle: (i / n) * Math.PI * 2 + (Math.random() - 0.5) * 0.6,
          speed: 2 + Math.random() * 3,
          life: 700 + Math.random() * 700,
          size: 1 + Math.random() * 3,
          hue: hueBase + Math.random() * 60,
        });
      }
    }

    function twinkleAt(x, y) {
      const hue = 200 + Math.random() * 160;
      spawnParticle(x + (Math.random() - 0.5) * 40, y + (Math.random() - 0.5) * 40, {
        size: 0.8 + Math.random() * 2,
        life: 600 + Math.random() * 600,
        hue,
        speed: 0.2 + Math.random() * 0.6,
      });
    }

    function onMove(e) {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
      mouseRef.current.visible = true;
      if (!prefersReducedMotion) {
        for (let i = 0; i < 3; i++)
          spawnParticle(
            e.clientX + (Math.random() - 0.5) * 12,
            e.clientY + (Math.random() - 0.5) * 12,
            { size: 0.6 + Math.random() * 2, life: 500 + Math.random() * 700, hue: 200 + Math.random() * 150 }
          );
      }
    }

    function onEnter() {
      mouseRef.current.visible = true;
      document.body.style.cursor = "none";
    }
    function onLeave() {
      mouseRef.current.visible = false;
      document.body.style.cursor = "default";
    }
    function onClick(e) {
      clickBurst(e.clientX, e.clientY);
    }

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseenter", onEnter);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("click", onClick);

    // --- Main animation ---
    function render(now) {
      const dt = Math.min(40, now - (lastTime.current || now));
      lastTime.current = now;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      if (mouseRef.current.visible) {
        const t = now / 1000;
        const pulse = 0.9 + 0.12 * Math.sin(t * 2.6);

        // === Cosmic nebula core ===
        ctx.save();
        ctx.globalCompositeOperation = "lighter";

        // Layer 1: soft inner glow
        const innerR = 6 + Math.sin(t * 2.2) * 1.6;
        const g1 = ctx.createRadialGradient(mx, my, 0, mx, my, innerR * 3.2);
        g1.addColorStop(0, `rgba(255,255,255,0.95)`);
        g1.addColorStop(0.18, `rgba(180,220,255,0.9)`);
        g1.addColorStop(0.5, `rgba(130,160,255,0.34)`);
        g1.addColorStop(1, `rgba(40,10,60,0)`);
        ctx.fillStyle = g1;
        ctx.beginPath();
        ctx.arc(mx, my, innerR * 3, 0, Math.PI * 2);
        ctx.fill();

        // Layer 2: colorful nebula blotches
        const blotches = 3;
        for (let b = 0; b < blotches; b++) {
          const angle = (b / blotches) * Math.PI * 2 + t * 0.6 * (b % 2 ? -1 : 1);
          const bx = mx + Math.cos(angle) * (4 + b * 2) * pulse;
          const by = my + Math.sin(angle) * (2 + b * 1.8) * pulse;
          const br = 6 + b * 3;
          const g2 = ctx.createRadialGradient(bx, by, 0, bx, by, br * 1.6);
          g2.addColorStop(0, `rgba(${200 - b * 30},${220 - b * 40},255,0.95)`);
          g2.addColorStop(0.35, `rgba(${140 - b * 20},${120 - b * 22},255,0.22)`);
          g2.addColorStop(1, `rgba(0,0,0,0)`);
          ctx.fillStyle = g2;
          ctx.beginPath();
          ctx.arc(bx, by, br * 1.1, 0, Math.PI * 2);
          ctx.fill();
        }

        // Layer 3: subtle inner core pulse
        ctx.beginPath();
        ctx.fillStyle = `rgba(255,255,255,${0.85 + 0.12 * Math.sin(t * 3)})`;
        ctx.arc(mx, my, 2.2 + Math.sin(t * 2.8) * 0.6, 0, Math.PI * 2);
        ctx.fill();

        // Rotating partial ring
        ctx.lineWidth = 1.6;
        ctx.strokeStyle = `rgba(170,120,255,0.22)`;
        ctx.beginPath();
        const ringR = 12 + Math.sin(t * 1.6) * 1.4;
        const startA = t * 1.8 % (Math.PI * 2);
        ctx.arc(mx, my, ringR, startA, startA + Math.PI * 0.9);
        ctx.stroke();

        // Orbiting sparkles
        for (let s = 0; s < 3; s++) {
          const sa = t * (1 + s * 0.6) + s * 2.1;
          const sr = ringR + 4 + s * 2;
          const sx = mx + Math.cos(sa) * sr;
          const sy = my + Math.sin(sa) * sr * 0.8;
          ctx.fillStyle = `rgba(255,255,255,${0.9 - s * 0.2})`;
          ctx.beginPath();
          ctx.arc(sx, sy, 1.1 + s * 0.6, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.restore();
      }

      const alive = [];
      for (let i = 0; i < particles.current.length; i++) {
        const p = particles.current[i];
        const age = now - p.born;
        if (age >= p.life) continue;
        p.vx *= 0.98;
        p.vy *= 0.98;
        p.x += p.vx * (dt / 16);
        p.y += p.vy * (dt / 16) + (0.02 * dt) / 16;
        const lifeRatio = 1 - age / p.life;
        const alpha = Math.pow(lifeRatio, 1.4);

        ctx.save();
        ctx.globalCompositeOperation = "lighter";
        ctx.fillStyle = `hsla(${p.hue}, 90%, 70%, ${0.18 * alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 2.8, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = `rgba(255,255,255,${0.9 * alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, Math.max(0.6, p.size * 0.6), 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        if (Math.random() < 0.002) twinkleAt(p.x, p.y);
        alive.push(p);
      }
      particles.current = alive;

      rafRef.current = requestAnimationFrame(render);
    }

    rafRef.current = requestAnimationFrame(render);

    const twinkleInterval = setInterval(() => {
      if (!prefersReducedMotion && mouseRef.current.visible && Math.random() < 0.6) {
        twinkleAt(
          mouseRef.current.x + (Math.random() - 0.5) * 120,
          mouseRef.current.y + (Math.random() - 0.5) * 120
        );
      }
    }, 300);

    return () => {
      cancelAnimationFrame(rafRef.current);
      clearInterval(twinkleInterval);
      window.removeEventListener("resize", resize);
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseenter", onEnter);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("click", onClick);
      if (canvasRef.current && canvasRef.current.parentNode) canvasRef.current.remove();
      document.body.style.cursor = "default";
    };
  }, []);

  return null;
};

export default GalaxyTrailCursor;
