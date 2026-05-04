import React from 'react';
import useInView from '../../hooks/useInView';

const steps = [
  {
    step: '01',
    title: 'Discovery',
    tag: 'INIT',
    description: 'We learn your goals, constraints, and context before writing a single line of code. No assumptions — just deep listening.',
    accent: 'brand-orange',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
  },
  {
    step: '02',
    title: 'Design & Plan',
    tag: 'ARCH',
    description: 'Architecture, wireframes, and a clear roadmap — agreed before we build. You see the full picture before a single component is written.',
    accent: '[#0099cc]',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" />
      </svg>
    ),
  },
  {
    step: '03',
    title: 'Build & Iterate',
    tag: 'BUILD',
    description: 'Agile delivery with regular check-ins so you always know where things stand. Feedback loops are built into every sprint.',
    accent: 'brand-orange',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
  },
  {
    step: '04',
    title: 'Launch & Support',
    tag: 'DEPLOY',
    description: 'We deploy, monitor, and stay available long after go-live. Your success is the metric we track — not just delivery.',
    accent: '[#0099cc]',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
      </svg>
    ),
  },
];

export default function Process() {
  const [headerRef, headerInView] = useInView();
  const [stepsRef, stepsInView] = useInView();

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:60px_60px]" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[700px] bg-brand-orange/[0.025] rounded-full blur-[180px] pointer-events-none" />

      <div className="container-max relative z-10">

        {/* Header */}
        <div ref={headerRef} className={`fade-up ${headerInView ? 'in-view' : ''} grid grid-cols-1 lg:grid-cols-2 gap-10 items-end mb-20 text-center lg:text-left`}>
          <div>
            <div className="inline-flex items-center gap-3 mb-6 justify-center lg:justify-start">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-white/[0.15]" />
              <span className="text-text-muted text-xs font-medium tracking-[0.25em] uppercase">How We Work</span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-white/[0.15]" />
            </div>
            <h2 className="font-fraunces text-4xl sm:text-5xl font-bold text-text-light leading-[1.0]">
              A process built<br /><span className="text-brand-orange">for clarity.</span>
            </h2>
          </div>
          <p className="text-text-muted text-base leading-[1.85] max-w-sm mx-auto lg:mx-0 lg:text-right">
            Four intentional phases — from first conversation to long-term support. Every step is transparent, every decision is yours.
          </p>
        </div>

        {/* Timeline */}
        <div ref={stepsRef} className="relative max-w-4xl mx-auto">

          {/* Vertical spine — desktop only */}
          <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-brand-orange/50 via-white/[0.08] to-transparent" />

          <div className="flex flex-col gap-0">
            {steps.map((s, i) => {
              const isLeft = i % 2 === 0;
              const isOrange = s.accent === 'brand-orange';
              const accentText = isOrange ? 'text-brand-orange' : 'text-[#0099cc]';
              const borderClass = isOrange ? 'border-brand-orange/25' : 'border-[#0099cc]/25';
              const borderHover = isOrange ? 'hover:border-brand-orange/55' : 'hover:border-[#0099cc]/55';
              const shadowClass = isOrange
                ? 'shadow-[0_0_60px_-15px_rgba(242,102,34,0.2)] hover:shadow-[0_0_80px_-10px_rgba(242,102,34,0.35)]'
                : 'shadow-[0_0_60px_-15px_rgba(0,153,204,0.18)] hover:shadow-[0_0_80px_-10px_rgba(0,153,204,0.3)]';
              const lineFrom = isOrange ? 'from-brand-orange/70' : 'from-[#0099cc]/60';
              const bottomLine = isOrange ? 'from-brand-orange/35' : 'from-[#0099cc]/30';
              const glowBg = isOrange ? 'bg-brand-orange/[0.06]' : 'bg-[#0099cc]/[0.05]';
              const iconBg = isOrange ? 'bg-brand-orange/10 border-brand-orange/25' : 'bg-[#0099cc]/10 border-[#0099cc]/25';
              const dotColor = isOrange ? 'bg-brand-orange ring-brand-orange/15' : 'bg-[#0099cc] ring-[#0099cc]/15';

              return (
                <div
                  key={s.step}
                  className={`relative flex items-center mb-12 lg:mb-16 ${isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                >
                  {/* Card */}
                  <div className={`fade-up delay-${(i + 1) * 100} ${stepsInView ? 'in-view' : ''} w-full lg:w-[45%] group`}>
                    <div className={`relative rounded-2xl border ${borderClass} ${borderHover} bg-[#0c0c0c]/95 backdrop-blur-md p-7 lg:p-8 overflow-hidden ${shadowClass} transition-all duration-300 hover:-translate-y-1`}>
                      <div className={`absolute top-0 left-0 w-0 group-hover:w-full h-px bg-gradient-to-r ${lineFrom} to-transparent transition-all duration-500`} />
                      <div className={`absolute ${isLeft ? '-top-10 -right-10' : '-top-10 -left-10'} w-36 h-36 ${glowBg} rounded-full blur-[50px] pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity duration-500`} />

                      <div className="relative z-10">
                        {/* Top row */}
                        <div className="flex items-center justify-between mb-5">
                          <div className={`w-10 h-10 rounded-xl border ${iconBg} flex items-center justify-center ${accentText} flex-shrink-0`}>
                            {s.icon}
                          </div>
                          <div className="flex items-center gap-2">
                            <span className={`${accentText} text-[9px] font-mono tracking-[0.25em] opacity-50`}>{s.tag}</span>
                            <span className={`font-fraunces text-3xl font-bold ${accentText} opacity-20 group-hover:opacity-50 transition-opacity duration-300 leading-none`}>{s.step}</span>
                          </div>
                        </div>

                        <h3 className="font-fraunces text-xl font-bold text-text-light mb-2 leading-snug">{s.title}</h3>
                        <p className="text-text-muted text-sm leading-[1.9]">{s.description}</p>
                        <div className={`mt-5 h-px w-full bg-gradient-to-r ${bottomLine} to-transparent`} />
                      </div>
                    </div>
                  </div>

                  {/* Spine node — desktop */}
                  <div className="hidden lg:flex w-[10%] justify-center items-center flex-shrink-0 relative z-10">
                    <div className={`w-3 h-3 rounded-full ${dotColor} ring-4 shadow-[0_0_20px_-4px_rgba(242,102,34,0.6)]`} />
                  </div>

                  {/* Spacer */}
                  <div className="hidden lg:block w-[45%]" />
                </div>
              );
            })}
          </div>

          {/* Spine end dot */}
          <div className="hidden lg:flex justify-center mt-2">
            <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
          </div>
        </div>

      </div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />
    </section>
  );
}
