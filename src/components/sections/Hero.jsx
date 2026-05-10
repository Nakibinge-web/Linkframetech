import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

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
      dots = Array.from({ length: 40 }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 0.8 + 0.2,
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.15,
        alpha: Math.random() * 0.18 + 0.04,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      dots.forEach((d) => {
        d.x += d.vx; d.y += d.vy;
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
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(242,102,34,${0.025 * (1 - dist / 100)})`;
            ctx.lineWidth = 0.4;
            ctx.stroke();
          }
        });
      });
      animId = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener('resize', resize);
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize); };
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-[#060606]">

      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1800&q=80"
          alt=""
          className="w-full h-full object-cover opacity-[0.32]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#060606]/70 via-[#060606]/30 to-[#060606]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#060606]/80 via-transparent to-[#060606]/50" />
      </div>

      {/* Particle canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-10" />

      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:80px_80px] z-10" />

      {/* Glows */}
      <div className="absolute top-1/3 left-1/4 w-[700px] h-[500px] bg-brand-orange/[0.04] rounded-full blur-[180px] pointer-events-none z-10" />
      <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[400px] bg-[#0099cc]/[0.04] rounded-full blur-[150px] pointer-events-none z-10" />

      {/* Top edge */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent z-20" />

      {/* Corner brackets */}
      <div className="absolute top-24 left-8 lg:left-16 z-20 hidden lg:block opacity-40">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M0 32V0h32" stroke="#F26622" strokeWidth="1" />
        </svg>
      </div>
      <div className="absolute bottom-28 right-8 lg:right-16 z-20 hidden lg:block opacity-30">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M32 0v32H0" stroke="#F26622" strokeWidth="1" />
        </svg>
      </div>

      {/* Content */}
      <div className="container-max section-padding relative z-20 flex flex-col flex-1 pt-32 pb-16 w-full">

        {/* Top — badge + sub copy side by side on desktop */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-auto">
          {/* Badge */}
          <div className="flex justify-center lg:justify-start">
            <div className="inline-flex items-center gap-3 border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm rounded-full px-5 py-2.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-orange" />
              </span>
              <span className="text-text-muted text-xs font-medium tracking-[0.2em] uppercase">Software · IMS · VFX</span>
            </div>
          </div>

          {/* Sub copy — top right on desktop */}
          <p className="text-text-muted text-sm leading-[1.8] max-w-xs text-center lg:text-right hidden lg:block">
            One team. Three disciplines.<br />Built for organizations that refuse to settle.
          </p>
        </div>

        {/* Centre — main headline */}
        <div className="flex-1 flex flex-col justify-center py-12 lg:py-16">
          <h1 className="hero-title font-fraunces font-bold text-text-light leading-[0.92] tracking-tight text-center lg:text-left">
            <span className="block text-[clamp(3.5rem,9vw,8rem)]">Engineering.</span>
            <span className="block text-[clamp(3.5rem,9vw,8rem)] text-brand-orange lg:pl-[5vw]">Systems.</span>
            <span className="block text-[clamp(3.5rem,9vw,8rem)] text-text-light/35 lg:pl-[10vw]">Visuals.</span>
          </h1>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 pt-8 border-t border-white/[0.06]">

          {/* Discipline pills */}
          <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
            {[
              { label: 'Software Engineering', isOrange: true },
              { label: 'Infrastructure Management Solutions', isOrange: false },
              { label: 'Visual Effects & Media', isOrange: true },
            ].map(({ label, isOrange }) => (
              <div
                key={label}
                className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border bg-white/[0.02] ${isOrange ? 'border-brand-orange/20' : 'border-[#0099cc]/20'}`}
              >
                <span className={`w-1 h-1 rounded-full ${isOrange ? 'bg-brand-orange' : 'bg-[#0099cc]'}`} />
                <span className={`text-[10px] font-mono tracking-widest uppercase ${isOrange ? 'text-brand-orange' : 'text-[#0099cc]'}`}>{label}</span>
              </div>
            ))}
          </div>

          {/* Right — stats + CTA */}
          <div className="flex flex-col sm:flex-row items-center gap-8 justify-center lg:justify-end">
            {/* Stats */}
            <div className="flex gap-8">
              {[
                { value: '50+', label: 'Projects' },
                { value: '5+', label: 'Years' },
                { value: '100%', label: 'Focused' },
              ].map(({ value, label }) => (
                <div key={label} className="text-center">
                  <p className="font-fraunces text-xl font-bold text-text-light">{value}</p>
                  <p className="text-text-muted text-[10px] mt-0.5 tracking-widest uppercase">{label}</p>
                </div>
              ))}
            </div>

            {/* Single CTA */}
            <Link
              to="/portfolio"
              className="group inline-flex items-center gap-2 border border-white/[0.12] text-text-muted px-6 py-3 rounded-xl font-medium text-sm transition-all duration-300 hover:border-brand-orange/40 hover:text-text-light whitespace-nowrap"
            >
              View Our Work
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

        </div>

        {/* Mobile sub copy */}
        <p className="text-text-muted text-sm leading-[1.8] text-center mt-6 lg:hidden">
          One team. Three disciplines. Built for organizations that refuse to settle.
        </p>

      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#060606] to-transparent pointer-events-none z-10" />
    </section>
  );
}
