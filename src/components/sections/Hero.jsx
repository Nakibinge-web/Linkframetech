import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const heroImages = [
  {
    src: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80',
    alt: 'Developer coding',
    className: 'col-span-2 row-span-2',
  },
  {
    src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80',
    alt: 'Data dashboard',
    className: 'col-span-1 row-span-1',
  },
  {
    src: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&q=80',
    alt: 'Video production',
    className: 'col-span-1 row-span-1',
  },
];

export default function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    let w, h, dots;

    const resize = () => {
      w = canvas.width = canvas.offsetWidth;
      h = canvas.height = canvas.offsetHeight;
      dots = Array.from({ length: 50 }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1 + 0.3,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        alpha: Math.random() * 0.35 + 0.08,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      dots.forEach((d) => {
        d.x += d.vx;
        d.y += d.vy;
        if (d.x < 0 || d.x > w) d.vx *= -1;
        if (d.y < 0 || d.y > h) d.vy *= -1;
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(242,102,34,${d.alpha})`;
        ctx.fill();
      });
      dots.forEach((a, i) => {
        dots.slice(i + 1).forEach((b) => {
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist < 110) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(242,102,34,${0.05 * (1 - dist / 110)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });
      animId = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener('resize', resize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#080808]">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:80px_80px]" />
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[700px] h-[500px] bg-brand-orange/[0.04] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#004D66]/[0.08] rounded-full blur-[100px] pointer-events-none" />

      <div className="container-max section-padding relative z-10 pt-[90px] pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left — text */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="hero-badge inline-flex items-center gap-2.5 border border-brand-orange/25 bg-brand-orange/[0.06] rounded-full px-4 py-2 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-orange" />
              </span>
              <span className="text-brand-orange text-xs font-medium tracking-widest uppercase">
                Software · IMS · VFX
              </span>
            </div>

            <h1 className="hero-title font-fraunces text-5xl sm:text-6xl lg:text-[68px] font-bold leading-[1.05] tracking-tight text-text-light mb-6">
              We Build<br />
              Digital{' '}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-brand-orange via-[#ff8c42] to-brand-orange bg-clip-text text-transparent">
                  Experiences
                </span>
                <span className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-brand-orange/0 via-brand-orange/50 to-brand-orange/0" />
              </span>
              <br />
              That Last.
            </h1>

            <p className="hero-sub text-base sm:text-lg text-text-muted leading-relaxed max-w-lg mb-10 font-light">
              Custom software, intelligent management systems, and stunning visual media —
              all crafted under one roof for organizations.
            </p>

            <div className="hero-cta flex flex-col sm:flex-row flex-wrap gap-3 mb-16 justify-center lg:justify-start">
              <Link
                to="/contact"
                className="group relative inline-flex items-center justify-center gap-2 bg-brand-orange text-white px-6 py-3.5 rounded-xl font-medium text-sm overflow-hidden transition-all duration-300 hover:shadow-[0_0_28px_rgba(242,102,34,0.45)] hover:scale-[1.02]"
              >
                <span className="relative z-10">Start a Project</span>
                <svg className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
                <div className="absolute inset-0 bg-gradient-to-r from-brand-orange to-[#ff7a2e] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
              <Link
                to="/portfolio"
                className="inline-flex items-center justify-center gap-2 border border-white/10 text-text-light px-6 py-3.5 rounded-xl font-medium text-sm transition-all duration-300 hover:border-white/20 hover:bg-white/[0.04]"
              >
                View Our Work
              </Link>
            </div>

            <div className="hero-stats flex flex-wrap gap-8 pt-8 border-t border-white/[0.06] justify-center lg:justify-start">
              {[
                { value: '50+', label: 'Projects' },
                { value: '3', label: 'Disciplines' },
                { value: '5+', label: 'Years' },
                { value: '100%', label: 'Client Focused' },
              ].map(({ value, label }) => (
                <div key={label} className="group cursor-default">
                  <p className="font-fraunces text-2xl font-bold text-text-light group-hover:text-brand-orange transition-colors duration-300">{value}</p>
                  <p className="text-text-muted text-xs mt-0.5 tracking-wide uppercase">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — image collage */}
          <div className="hero-images hidden lg:grid grid-cols-2 grid-rows-2 gap-3 h-[520px]">
            {/* Large image top-left spanning 2 rows */}
            <div className="row-span-2 rounded-2xl overflow-hidden border border-white/[0.07] relative group">
              <img
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=700&q=80"
                alt="Developer coding"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="text-xs font-medium text-white/70 bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10">
                  Software Engineering
                </span>
              </div>
            </div>

            {/* Top-right */}
            <div className="rounded-2xl overflow-hidden border border-white/[0.07] relative group">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&q=80"
                alt="Data dashboard"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3">
                <span className="text-xs font-medium text-white/70 bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-full border border-white/10">
                  Infrastructure Management Solutions
                </span>
              </div>
            </div>

            {/* Bottom-right */}
            <div className="rounded-2xl overflow-hidden border border-white/[0.07] relative group">
              <img
                src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=500&q=80"
                alt="Video production"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3">
                <span className="text-xs font-medium text-white/70 bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-full border border-white/10">
                  Visual Effects & Media
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#080808] to-transparent pointer-events-none" />
    </section>
  );
}
