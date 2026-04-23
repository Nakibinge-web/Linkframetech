import React from 'react';
import useInView from '../../hooks/useInView';

const steps = [
  {
    step: '01',
    title: 'Discovery',
    description: 'We learn your goals, constraints, and context before writing a single line of code.',
  },
  {
    step: '02',
    title: 'Design & Plan',
    description: 'Architecture, wireframes, and a clear roadmap — agreed before we build.',
  },
  {
    step: '03',
    title: 'Build & Iterate',
    description: 'Agile delivery with regular check-ins so you always know where things stand.',
  },
  {
    step: '04',
    title: 'Launch & Support',
    description: 'We deploy, monitor, and stay available long after go-live.',
  },
];

export default function Process() {
  const [headerRef, headerInView] = useInView();
  const [gridRef, gridInView] = useInView();

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:80px_80px]" />

      <div className="container-max relative z-10">
        <div ref={headerRef} className={`fade-up ${headerInView ? 'in-view' : ''} max-w-xl mb-16`}>
          <p className="text-brand-orange text-xs font-medium uppercase tracking-widest mb-3">How We Work</p>
          <h2 className="font-fraunces text-4xl sm:text-5xl font-bold text-text-light leading-tight">
            A process built<br />for clarity.
          </h2>
        </div>

        <div ref={gridRef} className="relative">
          {/* Connector */}
          <div className="hidden lg:block absolute top-7 left-[3.5rem] right-[3.5rem] h-px">
            <div className="w-full h-full bg-gradient-to-r from-brand-orange/30 via-white/10 to-brand-orange/30" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map(({ step, title, description }, i) => (
              <div
                key={step}
                className={`fade-up delay-${(i + 1) * 100} ${gridInView ? 'in-view' : ''} group flex flex-col gap-5`}
              >
                <div className="relative w-14 h-14 rounded-xl bg-[#0f0f0f] border border-white/[0.08] flex items-center justify-center transition-all duration-300 group-hover:border-brand-orange/40 group-hover:bg-brand-orange/[0.08] group-hover:-translate-y-1">
                  <span className="font-fraunces font-bold text-sm text-brand-orange">{step}</span>
                </div>
                <div>
                  <h3 className="text-text-light font-semibold text-base mb-2 group-hover:text-white transition-colors duration-300">{title}</h3>
                  <p className="text-text-muted text-sm leading-relaxed">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
