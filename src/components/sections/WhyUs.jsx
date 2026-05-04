import React from 'react';
import useInView from '../../hooks/useInView';

const reasons = [
  {
    num: '01',
    title: 'Cross-discipline expertise',
    body: 'Software, data systems, and visual media — one team, no vendor juggling, no context lost in translation.',
    accent: 'brand-orange',
    tag: 'MULTI-STACK',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Built for Africa',
    body: 'We understand local markets, infrastructure realities, and the constraints that actually matter.',
    accent: '[#0099cc]',
    tag: 'CONTEXT-AWARE',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Radical transparency',
    body: 'No black boxes. You see progress, give feedback, and stay in control at every stage.',
    accent: 'brand-orange',
    tag: 'FULL-VISIBILITY',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Long-term thinking',
    body: 'We build systems that scale with you — not quick fixes that break in six months.',
    accent: '[#0099cc]',
    tag: 'SCALABLE',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
];

export default function WhyUs() {
  const [headerRef, headerInView] = useInView();
  const [gridRef, gridInView] = useInView();

  return (
    <section className="relative section-padding overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:60px_60px]" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />
      <div className="absolute top-1/2 -translate-y-1/2 left-0 w-[600px] h-[600px] bg-brand-orange/[0.03] rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#0099cc]/[0.03] rounded-full blur-[130px] pointer-events-none" />

      <div className="container-max relative z-10">

        {/* Header */}
        <div ref={headerRef} className={`fade-up ${headerInView ? 'in-view' : ''} mb-16`}>
          {/* Terminal badge */}
          <div className="flex justify-center lg:justify-start mb-8">
            <div className="inline-flex flex-col rounded-xl border border-white/[0.08] overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-2 bg-white/[0.04] border-b border-white/[0.06]">
                <span className="w-2 h-2 rounded-full bg-white/10" />
                <span className="w-2 h-2 rounded-full bg-white/10" />
                <span className="w-2 h-2 rounded-full bg-brand-orange/40" />
                <span className="text-white/20 text-[10px] font-mono ml-2">why-linkframe.sys</span>
              </div>
              <div className="px-4 py-2.5 bg-[#0a0a0a]">
                <span className="text-brand-orange text-[10px] font-mono">$ query --module=WHY_US --status=ACTIVE</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-end text-center lg:text-left">
            <h2 className="font-fraunces text-4xl sm:text-5xl font-bold text-text-light leading-[1.0]">
              Built to last.<br /><span className="text-brand-orange">Partnered to grow.</span>
            </h2>
            <p className="text-text-muted text-base leading-[1.85] max-w-sm mx-auto lg:mx-0 border-l-0 lg:border-l-2 lg:border-brand-orange/30 lg:pl-5">
              Most agencies hand you a product and disappear. We stay invested in your outcomes because your success is how we measure ours.
            </p>
          </div>
        </div>

        {/* Cards — 2×2 */}
        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {reasons.map(({ num, title, body, accent, tag, icon }, i) => {
            const isOrange = accent === 'brand-orange';
            const accentText = isOrange ? 'text-brand-orange' : 'text-[#0099cc]';
            const borderBase = isOrange ? 'border-brand-orange/15' : 'border-[#0099cc]/15';
            const borderHover = isOrange ? 'hover:border-brand-orange/45' : 'hover:border-[#0099cc]/45';
            const iconBg = isOrange ? 'bg-brand-orange/10 border-brand-orange/20 group-hover:bg-brand-orange/20' : 'bg-[#0099cc]/10 border-[#0099cc]/20 group-hover:bg-[#0099cc]/20';
            const scanLine = isOrange ? 'from-brand-orange/70' : 'from-[#0099cc]/60';
            const glowColor = isOrange ? 'bg-brand-orange/[0.06] group-hover:bg-brand-orange/[0.12]' : 'bg-[#0099cc]/[0.05] group-hover:bg-[#0099cc]/[0.1]';
            const hoverShadow = isOrange ? 'hover:shadow-[0_0_60px_-15px_rgba(242,102,34,0.28)]' : 'hover:shadow-[0_0_60px_-15px_rgba(0,153,204,0.24)]';

            return (
              <div
                key={num}
                className={`fade-up delay-${(i + 1) * 100} ${gridInView ? 'in-view' : ''} group relative rounded-2xl border ${borderBase} ${borderHover} bg-[#0b0b0b] overflow-hidden transition-all duration-500 ${hoverShadow} hover:-translate-y-0.5`}
              >
                <div className={`absolute top-0 left-0 w-0 group-hover:w-full h-px bg-gradient-to-r ${scanLine} to-transparent transition-all duration-700`} />
                <div className={`absolute -top-10 -right-10 w-44 h-44 ${glowColor} rounded-full blur-[60px] pointer-events-none transition-all duration-500`} />
                <span className={`absolute bottom-3 right-4 font-fraunces text-[5rem] font-bold leading-none select-none pointer-events-none ${accentText} opacity-[0.04] group-hover:opacity-[0.09] transition-opacity duration-500`}>{num}</span>

                <div className="relative z-10 p-7 lg:p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-10 h-10 rounded-xl border ${iconBg} flex items-center justify-center ${accentText} flex-shrink-0 transition-colors duration-300`}>
                      {icon}
                    </div>
                    <span className={`${accentText} text-[9px] font-mono tracking-[0.25em] opacity-50`}>{tag}</span>
                  </div>
                  <h3 className="font-fraunces text-lg font-bold text-text-light mb-2.5 leading-snug">{title}</h3>
                  <p className="text-text-muted text-sm leading-[1.85]">{body}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Accepting badge */}
        <div className={`fade-up delay-500 ${gridInView ? 'in-view' : ''} mt-6 flex justify-center lg:justify-start`}>
          <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-brand-orange/[0.06] border border-brand-orange/20">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse" />
            <span className="text-brand-orange text-xs font-medium">Currently accepting new projects</span>
          </div>
        </div>

      </div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />
    </section>
  );
}
