import React from 'react';
import { Link } from 'react-router-dom';
import useInView from '../../hooks/useInView';

export default function CtaBanner() {
  const [ref, inView] = useInView();

  return (
    <section className="section-padding bg-[#080808]">
      <div className="container-max">
        <div
          ref={ref}
          className={`fade-up ${inView ? 'in-view' : ''} relative rounded-3xl overflow-hidden border border-white/[0.07] p-12 lg:p-20 text-center`}
        >
          {/* Background layers */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/[0.07] via-transparent to-[#004D66]/[0.07]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:48px_48px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brand-orange/[0.06] rounded-full blur-[80px] pointer-events-none" />

          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-32 h-32 border-t border-l border-brand-orange/20 rounded-tl-3xl" />
          <div className="absolute bottom-0 right-0 w-32 h-32 border-b border-r border-brand-orange/20 rounded-br-3xl" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 border border-brand-orange/25 bg-brand-orange/[0.06] rounded-full px-4 py-1.5 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse" />
              <span className="text-brand-orange text-xs font-medium tracking-widest uppercase">Ready to build?</span>
            </div>

            <h2 className="font-fraunces text-4xl sm:text-5xl lg:text-6xl font-bold text-text-light mb-6 max-w-3xl mx-auto leading-tight">
              Let's turn your idea into something real.
            </h2>
            <p className="text-text-muted text-base leading-relaxed max-w-lg mx-auto mb-10">
              Whether it's a web app, a management system, or a visual campaign — we're ready to start.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/contact"
                className="group relative inline-flex items-center gap-2 bg-brand-orange text-white px-8 py-4 rounded-xl font-medium text-sm overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(242,102,34,0.4)] hover:scale-[1.02]"
              >
                Start a Project
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                to="/portfolio"
                className="inline-flex items-center gap-2 border border-white/10 text-text-light px-8 py-4 rounded-xl font-medium text-sm transition-all duration-300 hover:border-white/25 hover:bg-white/[0.04]"
              >
                See Our Work
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
