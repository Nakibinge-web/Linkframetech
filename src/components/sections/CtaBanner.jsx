import React from 'react';
import { Link } from 'react-router-dom';
import useInView from '../../hooks/useInView';

export default function CtaBanner() {
  const [ref, inView] = useInView();

  return (
    <section className="relative overflow-hidden bg-[#080808] py-24 lg:py-36">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
      <div className="absolute top-1/2 -translate-y-1/2 -left-40 w-[700px] h-[700px] bg-brand-orange/[0.06] rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/2 -translate-y-1/2 right-[-100px] w-[500px] h-[500px] bg-brand-blue/[0.07] rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />

      <div className="container-max relative z-10">
        <div
          ref={ref}
          className={`fade-up ${inView ? 'in-view' : ''} relative rounded-3xl overflow-hidden border border-white/[0.07] bg-[#0b0b0b]`}
        >
          {/* inner grid bg */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
          {/* gradient wash */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/[0.04] via-transparent to-[#0099cc]/[0.03] pointer-events-none" />

          {/* corner brackets */}
          <div className="absolute top-0 left-0 w-20 h-20 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-brand-orange/50 to-transparent" />
            <div className="absolute top-0 left-0 h-full w-px bg-gradient-to-b from-brand-orange/50 to-transparent" />
          </div>
          <div className="absolute bottom-0 right-0 w-20 h-20 pointer-events-none">
            <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-l from-brand-orange/30 to-transparent" />
            <div className="absolute bottom-0 right-0 h-full w-px bg-gradient-to-t from-brand-orange/30 to-transparent" />
          </div>

          {/* vertical divider desktop */}
          <div className="hidden lg:block absolute top-0 bottom-0 left-[58%] w-px bg-gradient-to-b from-transparent via-white/[0.07] to-transparent pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[460px]">

            {/* Left — statement */}
            <div className="lg:col-span-7 relative flex flex-col justify-center p-10 lg:p-16">
              {/* terminal badge */}
              <div className="inline-flex items-center gap-0 rounded-lg border border-white/[0.08] overflow-hidden mb-10 w-fit">
                <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white/[0.04] border-r border-white/[0.06]">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse" />
                  <span className="w-1.5 h-1.5 rounded-full bg-white/10" />
                  <span className="w-1.5 h-1.5 rounded-full bg-white/10" />
                </div>
                <span className="text-brand-orange text-[10px] font-mono tracking-widest px-3 py-1.5">$ init --project=YOUR_IDEA</span>
              </div>

              <h2 className="font-fraunces font-bold text-text-light leading-[1.0] tracking-tight mb-6">
                <span className="block text-4xl sm:text-5xl lg:text-[3.8rem] xl:text-[4.2rem]">Your vision.</span>
                <span className="block text-4xl sm:text-5xl lg:text-[3.8rem] xl:text-[4.2rem] text-brand-orange">Our systems.</span>
                <span className="block text-4xl sm:text-5xl lg:text-[3.8rem] xl:text-[4.2rem] text-text-light/40">One outcome.</span>
              </h2>

              <p className="text-text-muted text-base leading-[1.8] max-w-md mb-10">
                From architecture to final frame — we build the software, systems, and visuals that move organizations forward.
              </p>

              {/* discipline tags */}
              <div className="flex flex-wrap gap-2">
                {['Software Eng.', 'IMS Solutions', 'VFX & Media'].map((tag, i) => (
                  <span key={tag} className={`text-[10px] px-3 py-1.5 rounded-full border font-mono tracking-widest uppercase ${i === 0 ? 'border-brand-orange/25 text-brand-orange/70' : i === 1 ? 'border-[#0099cc]/25 text-[#0099cc]/70' : 'border-brand-orange/25 text-brand-orange/70'}`}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right — CTA panel */}
            <div className="lg:col-span-5 relative flex flex-col justify-center p-10 lg:p-14 border-t lg:border-t-0 border-white/[0.05] overflow-hidden">
              <div className="absolute inset-0">
                <img
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80"
                  alt=""
                  className="w-full h-full object-cover opacity-[0.07]"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0b0b0b]/90 to-[#0b0b0b]/40" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0b]/60 to-transparent" />
              </div>
              <div className="absolute top-0 right-0 w-56 h-56 bg-brand-orange/[0.06] rounded-full blur-[90px] pointer-events-none" />

              <div className="relative z-10">
                {/* status row */}
                <div className="flex items-center gap-2 mb-8">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse" />
                  <span className="text-brand-orange text-[10px] font-mono tracking-[0.2em] uppercase">Accepting new projects</span>
                </div>

                <h3 className="font-fraunces text-2xl font-bold text-text-light mb-3 leading-snug">
                  Ready to start?
                </h3>
                <p className="text-text-muted text-sm leading-[1.85] mb-8 max-w-xs">
                  Whether it's a web platform, an immersive media system, or a full VFX pipeline — let's talk.
                </p>

                <div className="flex flex-col gap-3">
                  <Link
                    to="/contact"
                    className="group relative inline-flex items-center justify-center gap-2 bg-brand-orange text-white px-7 py-3.5 rounded-xl font-medium text-sm overflow-hidden transition-all duration-300 hover:shadow-[0_0_28px_rgba(242,102,34,0.45)] hover:scale-[1.02] w-fit"
                  >
                    <span className="relative z-10">Start a Project</span>
                    <svg className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-orange to-[#ff7a2e] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Link>
                  <Link
                    to="/portfolio"
                    className="group inline-flex items-center gap-2 text-text-muted text-sm hover:text-text-light transition-colors duration-200 px-1"
                  >
                    See our work first
                    <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
