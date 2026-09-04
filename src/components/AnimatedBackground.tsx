import React, { useEffect, useRef, useState } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseRadius: number;
  alpha: number;
  color: string;
  pulseSpeed: number;
}

export const AnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef<{ x: number | null; y: number | null }>({ x: null, y: null });
  const [animationMode, setAnimationMode] = useState<'constellation' | 'nebula' | 'cyber'>('constellation');
  const [isInteractive, setIsInteractive] = useState(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initParticles();
    };

    window.addEventListener('resize', handleResize);

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouseRef.current.x = null;
      mouseRef.current.y = null;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    // Color palette aligned with Obsidian Vision theme
    const colors = [
      'rgba(123, 208, 255,', // Cyan / Secondary #7bd0ff
      'rgba(192, 193, 255,', // Primary Titanium Indigo #c0c1ff
      'rgba(221, 183, 255,', // Tertiary Violet #ddb7ff
      'rgba(99, 102, 241,',  // Deep Indigo
      'rgba(56, 189, 248,',  // Aurora Sky
    ];

    let particles: Particle[] = [];

    const initParticles = () => {
      particles = [];
      // Dynamic count based on screen width
      const count = Math.min(Math.floor((width * height) / 14000), 90);

      for (let i = 0; i < count; i++) {
        const baseRadius = Math.random() * 1.8 + 0.8;
        const colorPrefix = colors[Math.floor(Math.random() * colors.length)];
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.45,
          vy: (Math.random() - 0.5) * 0.45,
          radius: baseRadius,
          baseRadius,
          alpha: Math.random() * 0.6 + 0.2,
          color: colorPrefix,
          pulseSpeed: Math.random() * 0.02 + 0.01,
        });
      }
    };

    initParticles();

    let step = 0;

    const render = () => {
      step += 0.01;
      ctx.clearRect(0, 0, width, height);

      const mouse = mouseRef.current;
      const connectionDist = Math.min(width * 0.12, 130);
      const mouseDistThreshold = 160;

      // Draw constellation filaments
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDist) {
            const filamentOpacity = (1 - dist / connectionDist) * 0.22;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(147, 153, 230, ${filamentOpacity})`;
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }
        }
      }

      // Update and render particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around boundaries smoothly
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;
        if (p.y < -10) p.y = height + 10;
        if (p.y > height + 10) p.y = -10;

        // Subtle pulsing radius
        p.radius = p.baseRadius + Math.sin(step * 2 + p.x) * 0.4;

        // Mouse interaction: subtle gravitational attraction / bloom
        if (isInteractive && mouse.x !== null && mouse.y !== null) {
          const mdx = mouse.x - p.x;
          const mdy = mouse.y - p.y;
          const mdist = Math.sqrt(mdx * mdx + mdy * mdy);

          if (mdist < mouseDistThreshold) {
            // Draw connector line to cursor
            const mouseLineAlpha = (1 - mdist / mouseDistThreshold) * 0.35;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(123, 208, 255, ${mouseLineAlpha})`;
            ctx.lineWidth = 0.9;
            ctx.stroke();

            // Slightly nudge particle
            const force = (1 - mdist / mouseDistThreshold) * 0.6;
            p.x += (mdx / mdist) * force;
            p.y += (mdy / mdist) * force;
          }
        }

        // Draw particle node
        ctx.beginPath();
        ctx.arc(p.x, p.y, Math.max(p.radius, 0.5), 0, Math.PI * 2);
        ctx.fillStyle = `${p.color} ${p.alpha})`;
        ctx.shadowColor = p.color + ' 0.8)';
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0; // Reset
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isInteractive, animationMode]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      {/* Dynamic Cosmic Gradient Orbs */}
      <div
        className="ambient-glow bg-[#6366f1]/15 -top-32 -left-24 animate-subtle-pulse transition-all duration-1000"
        style={{
          transform: animationMode === 'cyber' ? 'scale(1.3)' : 'scale(1)',
        }}
      />
      <div
        className="ambient-glow bg-[#38bdf8]/12 top-1/4 -right-32 animate-subtle-pulse transition-all duration-1000"
        style={{
          animationDelay: '2.5s',
          transform: animationMode === 'nebula' ? 'scale(1.4)' : 'scale(1)',
        }}
      />
      <div
        className="ambient-glow bg-[#a855f7]/12 bottom-12 left-1/3 animate-subtle-pulse transition-all duration-1000"
        style={{ animationDelay: '5s' }}
      />

      {/* Futuristic Subtle Isometric Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }}
      />

      {/* Floating Interactive Canvas for Constellations & Cosmic Filaments */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      {/* Floating Subtle Animation Control Pill (Interactive Experience Widget) */}
      <aside aria-label="Visual Effects Control" className="absolute top-20 right-4 md:right-8 z-30 pointer-events-auto flex items-center gap-1.5 p-1 rounded-full glass-surface border border-[#464554]/30 shadow-lg text-[11px] font-mono transition-opacity opacity-75 hover:opacity-100">
        <button
          onClick={() => setIsInteractive((prev) => !prev)}
          className={`flex items-center gap-1 px-2.5 py-1 rounded-full transition-all cursor-pointer ${
            isInteractive
              ? 'text-[#7bd0ff] bg-[#7bd0ff]/15 border border-[#7bd0ff]/30'
              : 'text-[#908fa0] hover:text-white'
          }`}
          title="Toggle cursor particle interaction"
        >
          <span className="material-symbols-outlined text-[14px]">
            {isInteractive ? 'auto_awesome' : 'motion_photos_off'}
          </span>
          <span className="hidden sm:inline">
            {isInteractive ? 'Interactive FX' : 'Static FX'}
          </span>
        </button>

        <button
          onClick={() => {
            const modes: ('constellation' | 'nebula' | 'cyber')[] = ['constellation', 'nebula', 'cyber'];
            const nextIndex = (modes.indexOf(animationMode) + 1) % modes.length;
            setAnimationMode(modes[nextIndex]);
          }}
          className="flex items-center gap-1 px-2.5 py-1 rounded-full hover:bg-white/10 text-[#c7c4d7] hover:text-white transition-all cursor-pointer"
          title="Switch ambient animation mode"
        >
          <span className="material-symbols-outlined text-[14px]">palette</span>
          <span className="capitalize">{animationMode}</span>
        </button>
      </aside>
    </div>
  );
};
