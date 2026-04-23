import React from 'react';
import useInView from '../../hooks/useInView';

const reasons = [
  {
    title: 'Cross-discipline expertise',
    description: 'Software, data systems, and visual media — we handle the full stack of your digital presence without stitching together multiple vendors.',
  },
  {
    title: 'Built for your context',
    description: 'We understand African markets, local infrastructure, and the real constraints that matter — not just textbook solutions.',
  },
  {
    title: 'Radical transparency',
    description: 'No black boxes. You see progress, give feedback, and stay in control at every stage of the project.',
  },
  {
    title: 'Long-term thinking',
    description: 'We build systems that scale with you — not quick fixes that break in six months when your needs evolve.',
  },
];

export default function WhyUs() {
  const [headerRef, headerInView] = useInView();
  const [gridRef, gridInView] = useInView();

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:80px_80px]" />
      {/* Subtle background image */}
      <div className="absolute inset-0 opacity-[0.04]">
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&q=60"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="container-max relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div ref={headerRef} className={`fade-up ${headerInView ? 'in-view' : ''}`}>
            <p className="text-brand-orange text-xs font-medium uppercase tracking-widest mb-4">Why Linkframe</p>
            <h2 className="font-fraunces text-4xl sm:text-5xl font-bold text-text-light leading-tight mb-6">
              We don't just deliver —<br />we partner.
            </h2>
            <p className="text-text-muted text-base leading-relaxed mb-10">
              Most agencies hand you a product and disappear. We stay invested in your outcomes because your success is how we measure ours.
            </p>
            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-brand-orange/[0.08] border border-brand-orange/20">
              <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
              <span className="text-brand-orange text-sm font-medium">Currently accepting new projects</span>
            </div>
          </div>

          <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/[0.06] rounded-2xl overflow-hidden border border-white/[0.06]">
            {reasons.map(({ title, description }, i) => (
              <div
                key={title}
                className={`fade-up delay-${(i + 1) * 100} ${gridInView ? 'in-view' : ''} group bg-[#0a0a0a] p-6 hover:bg-white/[0.03] transition-colors duration-300`}
              >
                <span className="font-fraunces text-3xl font-bold text-brand-orange/20 group-hover:text-brand-orange/40 transition-colors duration-300 block mb-3">
                  0{i + 1}
                </span>
                <h3 className="text-text-light font-semibold text-sm mb-2">{title}</h3>
                <p className="text-text-muted text-xs leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
