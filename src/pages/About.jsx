import CtaBanner from '../components/sections/CtaBanner';
import useInView from '../hooks/useInView';

const values = [
  {
    index: '01',
    title: 'Systems First',
    sub: 'Architecture before execution.',
    description: 'We architect before we build. Every solution is designed for scale, resilience, and long-term operability — not just the next sprint.',
    accent: 'from-brand-orange/20 to-transparent',
    glow: 'bg-brand-orange/[0.06]',
    border: 'border-brand-orange/20',
    tag: 'Engineering',
  },
  {
    index: '02',
    title: 'Precision Over Speed',
    sub: 'Every frame. Every function.',
    description: 'We move deliberately. Whether rendering a VFX sequence or deploying infrastructure, quality is non-negotiable — every frame, every function.',
    accent: 'from-[#0099cc]/20 to-transparent',
    glow: 'bg-[#0099cc]/[0.05]',
    border: 'border-[#0099cc]/20',
    tag: 'VFX / IMS',
  },
  {
    index: '03',
    title: 'Context-Aware',
    sub: 'Built for real environments.',
    description: 'We build for real environments — not ideal ones. Our solutions are grounded in the infrastructure, constraints, and ambitions of the markets we serve.',
    accent: 'from-brand-orange/20 to-transparent',
    glow: 'bg-brand-orange/[0.06]',
    border: 'border-brand-orange/20',
    tag: 'Systems',
  },
  {
    index: '04',
    title: 'Craft at Every Layer',
    sub: 'Schema to final composite.',
    description: 'From database schema to final composite — we treat every layer of the stack as a creative and technical decision worth getting right.',
    accent: 'from-[#0099cc]/20 to-transparent',
    glow: 'bg-[#0099cc]/[0.05]',
    border: 'border-[#0099cc]/20',
    tag: 'Production',
  },
];

export default function About() {
  const [heroRef, heroInView] = useInView();
  const [storyRef, storyInView] = useInView();
  const [valuesRef, valuesInView] = useInView();

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[100vh] flex items-center overflow-hidden bg-[#080808]">
        {/* Full background image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=1600&q=80"
            alt=""
            className="w-full h-full object-cover opacity-[0.18]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#080808] via-[#080808]/80 to-[#080808]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-[#080808]/60" />
        </div>

        {/* Subtle grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:80px_80px]" />

        {/* Large radial glow behind heading */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-brand-orange/[0.04] rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-brand-blue/[0.06] rounded-full blur-[120px] pointer-events-none" />

        {/* Top edge line */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />

        {/* Asymmetric vertical accent */}
        <div className="absolute top-0 right-[28%] w-px h-full bg-gradient-to-b from-brand-orange/20 via-white/[0.04] to-transparent hidden lg:block" />

        <div ref={heroRef} className="container-max section-padding relative z-10 pt-36 pb-24 w-full">

          {/* Overline badge */}
          <div className="hero-badge flex justify-center lg:justify-start mb-10">
            <div className="inline-flex items-center gap-3 border border-white/[0.08] bg-white/[0.03] rounded-full px-5 py-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse" />
              <span className="text-text-muted text-xs font-medium tracking-[0.2em] uppercase">Who We Are</span>
            </div>
          </div>

          {/* Main layout — asymmetric */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0 items-end">

            {/* Heading — spans 7 cols, overlaps into right */}
            <div className="lg:col-span-8 text-center lg:text-left">
              <h1 className="hero-title font-fraunces font-bold text-text-light leading-[1.0] tracking-tight mb-0">
                <span className="block text-5xl sm:text-6xl lg:text-[5.5rem] xl:text-[6.5rem]">Software,</span>
                <span className="block text-5xl sm:text-6xl lg:text-[5.5rem] xl:text-[6.5rem] text-text-light/60 pl-0 lg:pl-16">Systems & Visuals.</span>
                <span className="block text-5xl sm:text-6xl lg:text-[5.5rem] xl:text-[6.5rem]">One team,</span>
              </h1>
            </div>

            {/* Right column — sub + CTA, anchored to bottom */}
            <div className="lg:col-span-4 flex flex-col gap-8 lg:pb-3 text-center lg:text-left items-center lg:items-start">
              <p className="hero-sub text-text-muted text-base leading-relaxed max-w-xs">
                A cross-discipline team of engineers, architects, and visual artists — building software, systems, and stories that move organizations forward.
              </p>
              <div className="hero-cta flex justify-center lg:justify-start">
                <a
                  href="/portfolio"
                  className="group inline-flex items-center gap-2 border border-white/[0.1] text-text-muted px-7 py-3.5 rounded-xl font-medium text-sm transition-all duration-300 hover:border-white/20 hover:text-text-light"
                >
                  View Our Work
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom stats bar */}
          <div className="hero-stats mt-20 pt-8 border-t border-white/[0.06] grid grid-cols-3 gap-8 max-w-lg mx-auto lg:mx-0">
            {[['3+', 'Years active'], ['50+', 'Projects delivered'], ['3', 'Core disciplines']].map(([num, label]) => (
              <div key={label} className="text-center lg:text-left">
                <p className="font-fraunces text-2xl sm:text-3xl font-bold text-text-light">{num}</p>
                <p className="text-text-muted text-xs mt-1 leading-snug">{label}</p>
              </div>
            ))}
          </div>

        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none" />
      </section>

      {/* Story + Mission & Vision */}
      <section className="relative section-padding overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
        <div className="absolute top-1/2 -translate-y-1/2 left-[-100px] w-[700px] h-[700px] bg-brand-orange/[0.05] rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-[-60px] right-[5%] w-[450px] h-[450px] bg-brand-blue/[0.06] rounded-full blur-[110px] pointer-events-none" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />

        <div className="container-max relative z-10">

          {/* Section label */}
          <div className="flex items-center gap-3 mb-16">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
            <span className="text-text-muted text-xs font-medium tracking-[0.2em] uppercase">Our Identity</span>
            <div className="h-px bg-gradient-to-r from-white/[0.08] to-transparent w-24" />
          </div>

          {/* Row 1 — text left, image mosaic right */}
          <div ref={storyRef} className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch mb-10">

            {/* Left — statement + stats */}
            <div className={`fade-up ${storyInView ? 'in-view' : ''} lg:col-span-5 flex flex-col justify-center relative`}>
              <span className="absolute -top-8 -left-4 font-fraunces text-[10rem] font-bold text-white/[0.02] leading-none select-none pointer-events-none hidden lg:block">01</span>
              <p className="text-brand-orange text-xs font-medium tracking-[0.25em] uppercase mb-8">Who we are</p>
              <h2 className="font-fraunces font-bold text-text-light leading-[1.05] tracking-tight mb-8">
                <span className="block text-4xl sm:text-5xl lg:text-[3.2rem] xl:text-[3.6rem]">We don't just</span>
                <span className="block text-4xl sm:text-5xl lg:text-[3.2rem] xl:text-[3.6rem] text-brand-orange">build products.</span>
                <span className="block text-4xl sm:text-5xl lg:text-[3.2rem] xl:text-[3.6rem]">We build futures.</span>
              </h2>
              <p className="text-text-muted text-base leading-[1.8] max-w-sm mb-10">
                One team. Three disciplines. Infinite possibilities — for organizations ready to grow.
              </p>
              <div className="flex gap-10 pt-8 border-t border-white/[0.05]">
                {[['50+', 'Projects'], ['3+', 'Years'], ['3', 'Disciplines']].map(([n, l]) => (
                  <div key={l}>
                    <p className="font-fraunces text-2xl font-bold text-text-light">{n}</p>
                    <p className="text-text-muted text-xs mt-0.5">{l}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — image mosaic */}
            <div className={`fade-up delay-200 ${storyInView ? 'in-view' : ''} lg:col-span-7 grid grid-cols-12 grid-rows-2 gap-3`} style={{ minHeight: 420 }}>

              {/* Large image — left, spans 2 rows */}
              <div className="col-span-7 row-span-2 relative rounded-2xl overflow-hidden border border-white/[0.06] group">
                <img
                  src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=700&q=80"
                  alt="Immersive media production"
                  className="w-full h-full object-cover opacity-75 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/80 via-[#080808]/20 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="inline-flex items-center gap-1.5 bg-black/40 backdrop-blur-sm border border-white/[0.08] rounded-full px-3 py-1">
                    <span className="w-1 h-1 rounded-full bg-brand-orange" />
                    <span className="text-white/60 text-[9px] tracking-widest uppercase">IMS</span>
                  </span>
                </div>
              </div>

              {/* Top-right — software */}
              <div className="col-span-5 row-span-1 relative rounded-2xl overflow-hidden border border-white/[0.06] group">
                <img
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&q=80"
                  alt="Software engineering"
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/70 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3">
                  <span className="inline-flex items-center gap-1.5 bg-black/40 backdrop-blur-sm border border-white/[0.08] rounded-full px-3 py-1">
                    <span className="w-1 h-1 rounded-full bg-brand-orange" />
                    <span className="text-white/60 text-[9px] tracking-widest uppercase">Software</span>
                  </span>
                </div>
              </div>

              {/* Bottom-right — VFX */}
              <div className="col-span-5 row-span-1 relative rounded-2xl overflow-hidden border border-white/[0.06] group">
                <img
                  src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500&q=80"
                  alt="VFX production"
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/70 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3">
                  <span className="inline-flex items-center gap-1.5 bg-black/40 backdrop-blur-sm border border-white/[0.08] rounded-full px-3 py-1">
                    <span className="w-1 h-1 rounded-full bg-[#0099cc]" />
                    <span className="text-white/60 text-[9px] tracking-widest uppercase">VFX</span>
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* Row 2 — Mission & Vision side by side */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-4 border-t border-white/[0.04]">

            {/* Mission */}
            <div className={`fade-up delay-300 ${storyInView ? 'in-view' : ''} group relative rounded-2xl border border-brand-orange/25 bg-white/[0.04] backdrop-blur-md p-8 overflow-hidden shadow-[0_0_60px_-10px_rgba(242,102,34,0.12)] transition-all duration-300 hover:shadow-[0_0_80px_-10px_rgba(242,102,34,0.22)] hover:-translate-y-1`}>
              <div className="absolute -top-10 -right-10 w-48 h-48 bg-brand-orange/[0.08] rounded-full blur-[60px] pointer-events-none group-hover:bg-brand-orange/[0.14] transition-all duration-500" />
              <div className="absolute bottom-0 left-0 w-3/4 h-px bg-gradient-to-r from-brand-orange/50 to-transparent" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-9 h-9 rounded-xl bg-brand-orange/10 border border-brand-orange/25 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <span className="text-brand-orange text-xs font-medium tracking-[0.2em] uppercase">Mission</span>
                </div>
                <h3 className="font-fraunces text-2xl font-bold text-text-light mb-3 leading-snug">What we're here to do</h3>
                <p className="text-text-muted text-sm leading-[1.85]">
                  Deliver integrated digital solutions that empower organizations to operate smarter, look better, and grow faster.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className={`fade-up delay-400 ${storyInView ? 'in-view' : ''} group relative rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-md p-8 overflow-hidden shadow-[0_0_50px_-10px_rgba(0,77,102,0.18)] transition-all duration-300 hover:shadow-[0_0_70px_-10px_rgba(0,153,204,0.2)] hover:-translate-y-1`}>
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-brand-blue/[0.12] rounded-full blur-[55px] pointer-events-none group-hover:bg-brand-blue/[0.2] transition-all duration-500" />
              <div className="absolute bottom-0 left-0 w-2/3 h-px bg-gradient-to-r from-[#0099cc]/40 to-transparent" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-8 h-8 rounded-xl bg-brand-blue/20 border border-brand-blue/30 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-[#0099cc]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <span className="text-[#0099cc] text-xs font-medium tracking-[0.2em] uppercase">Vision</span>
                </div>
                <h3 className="font-fraunces text-xl font-bold text-text-light mb-3 leading-snug">Where we're headed</h3>
                <p className="text-text-muted text-sm leading-[1.85]">
                  To be the most trusted technology partner for growing organizations across Africa and beyond.
                </p>
              </div>
            </div>

          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />
      </section>

      {/* How We Build — vertical timeline */}
      <section className="relative py-24 lg:py-36 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[800px] bg-brand-orange/[0.025] rounded-full blur-[160px] pointer-events-none" />

        <div className="container-max relative z-10">

          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-white/[0.15]" />
              <span className="text-text-muted text-xs font-medium tracking-[0.25em] uppercase">How We Build</span>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-white/[0.15]" />
            </div>
            <h2 className="font-fraunces text-4xl sm:text-5xl lg:text-6xl font-bold text-text-light leading-[1.05]">
              The principles behind<br />
              <span className="text-brand-orange">every decision.</span>
            </h2>
            <p className="text-text-muted text-sm mt-5 max-w-md mx-auto leading-relaxed">
              A working methodology — refined across software systems, immersive media, and production pipelines.
            </p>
          </div>

          {/* Timeline */}
          <div ref={valuesRef} className="relative max-w-4xl mx-auto">

            {/* Spine line — desktop only */}
            <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-brand-orange/50 via-white/[0.08] to-transparent" />

            <div className="flex flex-col gap-0">
              {values.map((v, i) => {
                const isLeft = i % 2 === 0;
                const isOrange = i % 2 === 0;
                const accentColor = isOrange ? 'brand-orange' : '[#0099cc]';
                const borderClass = isOrange ? 'border-brand-orange/25' : 'border-[#0099cc]/25';
                const hoverBorderClass = isOrange ? 'hover:border-brand-orange/55' : 'hover:border-[#0099cc]/55';
                const shadowClass = isOrange
                  ? 'shadow-[0_0_60px_-15px_rgba(242,102,34,0.2)] hover:shadow-[0_0_80px_-10px_rgba(242,102,34,0.35)]'
                  : 'shadow-[0_0_60px_-15px_rgba(0,153,204,0.18)] hover:shadow-[0_0_80px_-10px_rgba(0,153,204,0.3)]';
                const tagColor = isOrange ? 'text-brand-orange' : 'text-[#0099cc]';
                const subColor = isOrange ? 'text-brand-orange/70' : 'text-[#0099cc]/70';
                const lineFrom = isOrange ? 'from-brand-orange/70' : 'from-[#0099cc]/60';
                const bottomLine = isOrange ? 'from-brand-orange/35' : 'from-[#0099cc]/30';
                const glowBg = isOrange ? 'bg-brand-orange/[0.06]' : 'bg-[#0099cc]/[0.05]';
                const numColor = isOrange ? 'text-brand-orange/[0.07] group-hover:text-brand-orange/[0.15]' : 'text-[#0099cc]/[0.07] group-hover:text-[#0099cc]/[0.15]';

                return (
                  <div key={v.index} className={`relative flex items-center mb-12 lg:mb-16 ${isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>

                    {/* Card — takes up ~45% width on desktop */}
                    <div className={`fade-up delay-${(i + 1) * 100} ${valuesInView ? 'in-view' : ''} w-full lg:w-[45%] group`}>
                      <div className={`relative rounded-2xl border ${borderClass} ${hoverBorderClass} bg-[#0c0c0c]/95 backdrop-blur-md p-7 lg:p-8 overflow-hidden ${shadowClass} transition-all duration-300 hover:-translate-y-1`}>
                        <div className={`absolute top-0 left-0 w-0 group-hover:w-full h-px bg-gradient-to-r ${lineFrom} to-transparent transition-all duration-500`} />
                        <div className={`absolute ${isLeft ? '-top-10 -right-10' : '-top-10 -left-10'} w-36 h-36 ${glowBg} rounded-full blur-[50px] pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity duration-500`} />
                        <div className="relative z-10">
                          <div className="flex items-center justify-between mb-5">
                            <span className={`${tagColor} text-[10px] tracking-[0.25em] uppercase font-semibold`}>{v.tag}</span>
                            <span className={`font-fraunces text-4xl font-bold ${numColor} leading-none select-none transition-colors duration-300`}>{v.index}</span>
                          </div>
                          <h3 className="font-fraunces text-xl font-bold text-text-light mb-2 leading-snug">{v.title}</h3>
                          <p className={`${subColor} text-xs mb-4 font-medium tracking-wide`}>{v.sub}</p>
                          <p className="text-text-muted text-sm leading-[1.9]">{v.description}</p>
                          <div className={`mt-5 h-px w-full bg-gradient-to-r ${bottomLine} to-transparent`} />
                        </div>
                      </div>
                    </div>

                    {/* Center spine node — desktop */}
                    <div className="hidden lg:flex w-[10%] justify-center items-center flex-shrink-0 relative z-10">
                      <div className={`w-3 h-3 rounded-full ${isOrange ? 'bg-brand-orange' : 'bg-[#0099cc]'} ring-4 ${isOrange ? 'ring-brand-orange/15' : 'ring-[#0099cc]/15'} shadow-[0_0_20px_-4px_rgba(242,102,34,0.6)]`} />
                    </div>

                    {/* Spacer — opposite side */}
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

      <CtaBanner />
    </>
  );
}
