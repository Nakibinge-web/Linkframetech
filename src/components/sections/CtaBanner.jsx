import React from 'react';
import { Link } from 'react-router-dom';
import useInView from '../../hooks/useInView';

export default function CtaBanner() {
  const [ref, inView] = useInView();

  return (
    <section className="relative overflow-hidden bg-[#080808] py-24 lg:py-36">
      {/* Full-section background layers */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
      {/* Large orange glow — left-anchored */}
      <div className="absolute top-1/2 -translate-y-1/2 -left-40 w-[700px] h-[700px] bg-brand-orange/[0.06] rounded-full blur-[150px] pointer-events-none" />
      {/* Blue counter-glow — right */}
      <div className="absolute top-1/2 -translate-y-1/2 right-[-100px] w-[500px] h-[500px] bg-brand-blue/[0.07] rounded-full blur-[130px] pointer-events-none" />
      {/* Top edge */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />

      <div className="container-max relative z-10">
        <div
          ref={ref}
          className={`fade-up ${inView ? 'in-view' : ''} relative rounded-3xl overflow-hidden border border-white/[0.06] bg-white/[0.015]`}
        >
          {/* Inner card background */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/[0.05] via-transparent to-brand-blue/[0.04] pointer-events-none" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

          {/* Corner accent lines */}
          <div className="absolute top-0 left-0 w-24 h-24 border-t border-l border-brand-orange/30 rounded-tl-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-24 h-24 border-b border-r border-brand-orange/20 rounded-br-3xl pointer-events-none" />

          {/* Asymmetric vertical divider — desktop */}
          <div className="hidden lg:block absolute top-0 bottom-0 left-[58%] w-px bg-gradient-to-b from-transparent via-white/[0.07] to-transparent pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[420px]">

            {/* ── Left — bold statement ── */}
            <div className="lg:col-span-7 relative flex flex-col justify-center p-10 lg:p-16">
              {/* Overline */}
              <div className="inline-flex items-center gap-2.5 mb-8 w-fit">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse" />
                <span className="text-brand-orange text-xs font-medium tracking-[0.25em] uppercase">Ready to build?</span>
              </div>

              {/* Main headline */}
              <h2 className="font-fraunces font-bold text-text-light leading-[1.0] tracking-tight mb-6">
                <span className="block text-4xl sm:text-5xl lg:text-[3.8rem] xl:text-[4.2rem]">Your vision.</span>
                <span className="block text-4xl sm:text-5xl lg:text-[3.8rem] xl:text-[4.2rem] text-brand-orange">Our systems.</span>
                <span className="block text-4xl sm:text-5xl lg:text-[3.8rem] xl:text-[4.2rem] text-text-light/50">One outcome.</span>
              </h2>

              <p className="text-text-muted text-base leading-[1.8] max-w-md">
                From architecture to final frame — we build the software, systems, and visuals that move organizations forward.
              </p>

              {/* Decorative bottom line */}
              <div className="mt-10 h-px w-32 bg-gradient-to-r from-brand-orange/50 to-transparent" />
            </div>

            {/* ── Right — CTA panel ── */}
            <div className="lg:col-span-5 relative flex flex-col justify-center p-10 lg:p-14 border-t lg:border-t-0 border-white/[0.05] overflow-hidden">
              {/* Background image */}
              <div className="absolute inset-0">
                <img
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80"
                  alt=""
                  className="w-full h-full object-cover opacity-[0.08]"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#080808]/80 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/60 to-transparent" />
              </div>
              {/* Right panel glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-brand-orange/[0.05] rounded-full blur-[80px] pointer-events-none" />

              <div className="relative z-10">
                {/* Supporting text */}
                <p className="text-text-muted text-sm leading-[1.85] mb-8 max-w-xs">
                  Whether it's a web platform, an immersive media system, or a full VFX pipeline — we're ready to start.
                </p>

                {/* CTA */}
                <Link
                  to="/portfolio"
                  className="group inline-flex items-center justify-center gap-2 border border-white/[0.1] text-text-muted px-8 py-4 rounded-xl font-medium text-sm w-fit transition-all duration-300 hover:border-white/25 hover:text-text-light hover:bg-white/[0.03]"
                >
                  See Our Work
                  <svg className="w-3.5 h-3.5 opacity-50 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
