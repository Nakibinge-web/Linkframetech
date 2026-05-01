import { Link } from 'react-router-dom';
import CtaBanner from '../components/sections/CtaBanner';
import useInView from '../hooks/useInView';

const values = [
  {
    index: '01',
    title: 'Systems First',
    sub: 'Architecture before execution.',
    description: 'We architect before we build. Every solution is designed for scale, resilience, and long-term operability — not just the next sprint.',
    tag: 'Engineering',
  },
  {
    index: '02',
    title: 'Precision Over Speed',
    sub: 'Every frame. Every function.',
    description: 'We move deliberately. Whether rendering a VFX sequence or deploying infrastructure, quality is non-negotiable — every frame, every function.',
    tag: 'VFX / IMS',
  },
  {
    index: '03',
    title: 'Context-Aware',
    sub: 'Built for real environments.',
    description: 'We build for real environments — not ideal ones. Our solutions are grounded in the infrastructure, constraints, and ambitions of the markets we serve.',
    tag: 'Systems',
  },
  {
    index: '04',
    title: 'Craft at Every Layer',
    sub: 'Schema to final composite.',
    description: 'From database schema to final composite — we treat every layer of the stack as a creative and technical decision worth getting right.',
    tag: 'Production',
  },
];

const disciplines = [
  {
    id: 'software',
    number: '01',
    label: 'Software Engineering',
    tagline: 'Architecture that scales.',
    desc: 'Custom web applications, REST APIs, and internal systems engineered for your exact workflow — not adapted from templates.',
    tags: ['Web Apps', 'REST APIs', 'System Architecture', 'Integrations'],
    accent: 'brand-orange',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    id: 'ims',
    number: '02',
    label: 'IMS Solutions',
    tagline: 'Data that drives decisions.',
    desc: 'Information management systems for schools, NGOs, and enterprises — reducing manual overhead and surfacing the insights that matter.',
    tags: ['School Systems', 'Inventory', 'Dashboards', 'Data Migration'],
    accent: '[#0099cc]',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2 1 3 3 3h10c2 0 3-1 3-3V7c0-2-1-3-3-3H7C5 4 4 5 4 7z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 11h6M9 15h4" />
      </svg>
    ),
  },
  {
    id: 'vfx',
    number: '03',
    label: 'VFX & Media',
    tagline: 'Visuals with intent.',
    desc: 'Motion graphics, brand films, and visual effects crafted to communicate your story with cinematic precision and style.',
    tags: ['Motion Graphics', 'Visual Effects', 'Brand Films', 'Video Editing'],
    accent: 'brand-orange',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.069A1 1 0 0121 8.82v6.36a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
      </svg>
    ),
  },
];

const teamPreview = [
  {
    initials: 'AO',
    name: 'Alex Okonkwo',
    role: 'Lead Software Engineer',
    category: 'Software',
    accent: 'brand-orange',
    skills: ['React', 'Laravel', 'Node.js', 'PostgreSQL'],
    bio: 'Full-stack engineer building scalable web systems for startups and enterprises.',
  },
  {
    initials: 'CE',
    name: 'Chisom Eze',
    role: 'IMS Architect',
    category: 'IMS',
    accent: '[#0099cc]',
    skills: ['MySQL', 'System Design', 'Data Modeling', 'Laravel'],
    bio: 'Database specialist designing information systems that reduce operational friction.',
  },
  {
    initials: 'TA',
    name: 'Tunde Adeyemi',
    role: 'VFX Lead',
    category: 'VFX',
    accent: 'brand-orange',
    skills: ['After Effects', 'Premiere Pro', 'Motion Graphics', 'Color Grading'],
    bio: 'Motion designer and video editor with a sharp eye for brand storytelling.',
  },
];

export default function About() {
  const [storyRef, storyInView] = useInView();
  const [disciplinesRef, disciplinesInView] = useInView();
  const [valuesRef, valuesInView] = useInView();
  const [teamRef, teamInView] = useInView();
  const [whyRef, whyInView] = useInView();

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[100vh] flex items-center overflow-hidden bg-[#080808]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1600&q=80"
            alt=""
            className="w-full h-full object-cover opacity-[0.25]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#080808] via-[#080808]/70 to-[#080808]/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-[#080808]/50" />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:80px_80px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-brand-orange/[0.04] rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-brand-blue/[0.06] rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
        <div className="absolute top-0 right-[28%] w-px h-full bg-gradient-to-b from-brand-orange/20 via-white/[0.04] to-transparent hidden lg:block" />

        <div className="container-max section-padding relative z-10 pt-36 pb-24 w-full">
          <div className="hero-badge flex justify-center lg:justify-start mb-10">
            <div className="inline-flex items-center gap-3 border border-white/[0.08] bg-white/[0.03] rounded-full px-5 py-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse" />
              <span className="text-text-muted text-xs font-medium tracking-[0.2em] uppercase">Who We Are</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0 items-end">
            <div className="lg:col-span-8 text-center lg:text-left">
              <h1 className="hero-title font-fraunces font-bold text-text-light leading-[1.0] tracking-tight mb-0">
                <span className="block text-5xl sm:text-6xl lg:text-[5.5rem] xl:text-[6.5rem]">Software,</span>
                <span className="block text-5xl sm:text-6xl lg:text-[5.5rem] xl:text-[6.5rem] text-text-light/60 pl-0 lg:pl-16">Systems & Visuals.</span>
                <span className="block text-5xl sm:text-6xl lg:text-[5.5rem] xl:text-[6.5rem]">One team,</span>
                <span className="block text-5xl sm:text-6xl lg:text-[5.5rem] xl:text-[6.5rem] text-brand-orange">end to end.</span>
              </h1>
            </div>

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
        </div>

        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none" />
      </section>

      {/* Our Identity — Mission & Vision */}
      <section className="relative section-padding overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
        <div className="absolute top-1/2 -translate-y-1/2 left-[-100px] w-[700px] h-[700px] bg-brand-orange/[0.04] rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-[-60px] right-[5%] w-[450px] h-[450px] bg-brand-blue/[0.05] rounded-full blur-[110px] pointer-events-none" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />

        <div className="container-max relative z-10">
          <div className="flex items-center gap-3 mb-16 justify-center lg:justify-start">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
            <span className="text-text-muted text-xs font-medium tracking-[0.2em] uppercase">Our Identity</span>
            <div className="h-px bg-gradient-to-r from-white/[0.08] to-transparent w-24" />
          </div>

          <div ref={storyRef} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

            {/* Left */}
            <div className={`fade-up ${storyInView ? 'in-view' : ''} lg:col-span-5 relative text-center lg:text-left`}>
              <span className="absolute -top-8 -left-4 font-fraunces text-[10rem] font-bold text-white/[0.02] leading-none select-none pointer-events-none hidden lg:block">01</span>
              <p className="text-brand-orange text-xs font-medium tracking-[0.25em] uppercase mb-6">Who we are</p>
              <h2 className="font-fraunces font-bold text-text-light leading-[1.0] tracking-tight mb-6">
                <span className="block text-4xl sm:text-5xl lg:text-[3.25rem] xl:text-[3.75rem]">We don't just</span>
                <span className="block text-4xl sm:text-5xl lg:text-[3.25rem] xl:text-[3.75rem] text-brand-orange">write code.</span>
                <span className="block text-4xl sm:text-5xl lg:text-[3.25rem] xl:text-[3.75rem]">We architect scale.</span>
              </h2>
              <p className="text-text-muted text-sm leading-[1.85] max-w-xs mx-auto lg:mx-0 mb-8">
                One team. Three disciplines. Built for organizations ready to grow.
              </p>
              <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.07]">
                <svg className="w-3.5 h-3.5 text-brand-orange flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-text-muted text-xs">Based in Africa — building beyond it.</span>
              </div>
            </div>

            {/* Right — Mission + Vision floating */}
            <div className="lg:col-span-7 relative lg:pl-6 flex flex-col gap-4 lg:gap-0 lg:block lg:min-h-[420px]">

              {/* Mission — base card */}
              <div className={`fade-up delay-200 ${storyInView ? 'in-view' : ''} group relative rounded-2xl border border-brand-orange/25 bg-[#0d0d0d] overflow-hidden transition-all duration-500 hover:border-brand-orange/50 hover:shadow-[0_0_80px_-10px_rgba(242,102,34,0.28)] hover:-translate-y-1 lg:absolute lg:top-0 lg:left-6 lg:right-0 z-10`}>
                <div className="absolute top-0 left-0 w-0 group-hover:w-full h-px bg-gradient-to-r from-brand-orange to-transparent transition-all duration-700" />
                <div className="absolute bottom-0 left-0 w-3/4 h-px bg-gradient-to-r from-brand-orange/30 to-transparent" />
                <div className="absolute -top-10 -right-10 w-48 h-48 bg-brand-orange/[0.06] rounded-full blur-[70px] pointer-events-none group-hover:bg-brand-orange/[0.12] transition-all duration-500" />
                <div className="relative z-10 p-8 lg:p-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-brand-orange/10 border border-brand-orange/25 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-orange/20 transition-colors duration-300">
                      <svg className="w-5 h-5 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <span className="text-brand-orange text-sm font-semibold tracking-[0.2em] uppercase">Mission</span>
                  </div>
                  <h3 className="font-fraunces text-2xl lg:text-3xl font-bold text-text-light mb-3 leading-snug">What we're here to do</h3>
                  <p className="text-text-muted text-sm leading-[1.85]">
                    Deliver integrated digital solutions that help organizations operate smarter, look better, and grow faster.
                  </p>
                </div>
              </div>

              {/* Vision — floats over, offset bottom-right */}
              <div className={`fade-up delay-300 ${storyInView ? 'in-view' : ''} group relative rounded-2xl border border-[#0099cc]/25 bg-[#0c0c0c] overflow-hidden transition-all duration-500 hover:border-[#0099cc]/50 hover:shadow-[0_0_80px_-10px_rgba(0,153,204,0.25)] hover:-translate-y-1 lg:absolute lg:bottom-0 lg:left-16 lg:right-[-1.5rem] z-20`}>
                <div className="absolute top-0 left-0 w-0 group-hover:w-full h-px bg-gradient-to-r from-[#0099cc] to-transparent transition-all duration-700" />
                <div className="absolute bottom-0 left-0 w-2/3 h-px bg-gradient-to-r from-[#0099cc]/30 to-transparent" />
                <div className="absolute -bottom-10 -right-10 w-44 h-44 bg-[#0099cc]/[0.06] rounded-full blur-[60px] pointer-events-none group-hover:bg-[#0099cc]/[0.12] transition-all duration-500" />
                <div className="relative z-10 p-8 lg:p-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-[#0099cc]/10 border border-[#0099cc]/25 flex items-center justify-center flex-shrink-0 group-hover:bg-[#0099cc]/20 transition-colors duration-300">
                      <svg className="w-5 h-5 text-[#0099cc]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </div>
                    <span className="text-[#0099cc] text-sm font-semibold tracking-[0.2em] uppercase">Vision</span>
                  </div>
                  <h3 className="font-fraunces text-2xl lg:text-3xl font-bold text-text-light mb-3 leading-snug">Where we're headed</h3>
                  <p className="text-text-muted text-sm leading-[1.85]">
                    To be the most trusted technology partner for growing organizations across Africa and beyond.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />
      </section>

      {/* What We Do — asymmetric hub layout */}
      <section className="relative section-padding overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
        {/* ambient glows */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-brand-orange/[0.03] rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-[#0099cc]/[0.04] rounded-full blur-[120px] pointer-events-none" />

        <div ref={disciplinesRef} className="container-max relative z-10">

          {/* Header row */}
          <div className="flex items-center gap-3 mb-4 justify-center lg:justify-start">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
            <span className="text-text-muted text-xs font-medium tracking-[0.2em] uppercase">What We Do</span>
            <div className="h-px bg-gradient-to-r from-white/[0.08] to-transparent w-24" />
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-14 text-center lg:text-left">
            <h2 className="font-fraunces text-3xl sm:text-4xl lg:text-[3.25rem] font-bold text-text-light leading-[1.05]">
              One integrated system.<br />
              <span className="text-brand-orange">Three disciplines.</span>
            </h2>
            <Link
              to="/services"
              className="group inline-flex items-center gap-2 text-text-muted text-sm hover:text-text-light transition-colors duration-200 self-start lg:self-auto shrink-0"
            >
              Explore all services
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Hub grid — large left + stacked right */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 lg:gap-5 items-stretch">

            {/* Featured card — Software Engineering */}
            <div className={`fade-up delay-100 ${disciplinesInView ? 'in-view' : ''} lg:col-span-3 group relative rounded-2xl border border-brand-orange/20 bg-[#0c0c0c] overflow-hidden transition-all duration-500 hover:border-brand-orange/45 hover:shadow-[0_0_80px_-15px_rgba(242,102,34,0.3)]`}>
              <div className="absolute top-0 left-0 w-0 group-hover:w-full h-px bg-gradient-to-r from-brand-orange/80 to-transparent transition-all duration-700" />
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-orange/[0.06] rounded-bl-full pointer-events-none group-hover:bg-brand-orange/[0.12] transition-all duration-500" />
              <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-brand-orange/[0.05] rounded-full blur-[80px] pointer-events-none group-hover:bg-brand-orange/[0.1] transition-all duration-500" />

              {/* SVG connection node — top right corner */}
              <div className="absolute top-6 right-6 opacity-20 group-hover:opacity-60 transition-opacity duration-500">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <circle cx="24" cy="24" r="3" fill="#F26622" />
                  <circle cx="24" cy="24" r="8" stroke="#F26622" strokeWidth="0.5" strokeDasharray="2 3" />
                  <circle cx="24" cy="24" r="16" stroke="#F26622" strokeWidth="0.3" strokeDasharray="1 4" />
                  <line x1="24" y1="8" x2="24" y2="0" stroke="#F26622" strokeWidth="0.5" />
                  <line x1="40" y1="24" x2="48" y2="24" stroke="#F26622" strokeWidth="0.5" />
                </svg>
              </div>

              <div className="relative z-10 p-8 lg:p-10 flex flex-col h-full min-h-[340px]">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-11 h-11 rounded-xl bg-brand-orange/10 border border-brand-orange/25 flex items-center justify-center text-brand-orange flex-shrink-0 group-hover:bg-brand-orange/20 transition-colors duration-300">
                    {disciplines[0].icon}
                  </div>
                  <span className="text-brand-orange text-[10px] font-semibold tracking-[0.3em] uppercase">{disciplines[0].number}</span>
                </div>

                <h3 className="font-fraunces text-2xl lg:text-3xl font-bold text-text-light mb-3 leading-snug">{disciplines[0].label}</h3>
                <p className="text-brand-orange text-xs font-medium tracking-[0.15em] uppercase mb-5">{disciplines[0].tagline}</p>
                <p className="text-text-muted text-sm leading-[1.85] mb-8 max-w-sm">{disciplines[0].desc}</p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {disciplines[0].tags.map((tag) => (
                    <span key={tag} className="text-[11px] px-3 py-1 rounded-full border border-brand-orange/15 text-text-muted group-hover:border-brand-orange/30 transition-colors duration-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right column — IMS + VFX stacked */}
            <div className="lg:col-span-2 flex flex-col gap-4 lg:gap-5">

              {/* IMS */}
              <div className={`fade-up delay-200 ${disciplinesInView ? 'in-view' : ''} group relative rounded-2xl border border-[#0099cc]/20 bg-[#0c0c0c] overflow-hidden transition-all duration-500 hover:border-[#0099cc]/45 hover:shadow-[0_0_60px_-15px_rgba(0,153,204,0.28)] flex-1`}>
                <div className="absolute top-0 left-0 w-0 group-hover:w-full h-px bg-gradient-to-r from-[#0099cc]/70 to-transparent transition-all duration-700" />
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#0099cc]/[0.05] rounded-full blur-[60px] pointer-events-none group-hover:bg-[#0099cc]/[0.1] transition-all duration-500" />

                {/* mini node diagram */}
                <div className="absolute bottom-4 right-4 opacity-10 group-hover:opacity-30 transition-opacity duration-500">
                  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                    <rect x="14" y="14" width="8" height="8" rx="1" stroke="#0099cc" strokeWidth="0.8" />
                    <line x1="18" y1="0" x2="18" y2="14" stroke="#0099cc" strokeWidth="0.5" strokeDasharray="2 2" />
                    <line x1="18" y1="22" x2="18" y2="36" stroke="#0099cc" strokeWidth="0.5" strokeDasharray="2 2" />
                    <line x1="0" y1="18" x2="14" y2="18" stroke="#0099cc" strokeWidth="0.5" strokeDasharray="2 2" />
                    <line x1="22" y1="18" x2="36" y2="18" stroke="#0099cc" strokeWidth="0.5" strokeDasharray="2 2" />
                  </svg>
                </div>

                <div className="relative z-10 p-7 flex flex-col h-full">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-9 h-9 rounded-xl bg-[#0099cc]/10 border border-[#0099cc]/20 flex items-center justify-center text-[#0099cc] flex-shrink-0 group-hover:bg-[#0099cc]/20 transition-colors duration-300">
                      {disciplines[1].icon}
                    </div>
                    <span className="text-[#0099cc] text-[10px] font-semibold tracking-[0.3em] uppercase">{disciplines[1].number}</span>
                  </div>
                  <h3 className="font-fraunces text-xl font-bold text-text-light mb-1.5">{disciplines[1].label}</h3>
                  <p className="text-[#0099cc] text-[10px] font-medium tracking-[0.15em] uppercase mb-4">{disciplines[1].tagline}</p>
                  <p className="text-text-muted text-xs leading-[1.85]">{disciplines[1].desc}</p>
                </div>
              </div>

              {/* VFX */}
              <div className={`fade-up delay-300 ${disciplinesInView ? 'in-view' : ''} group relative rounded-2xl border border-brand-orange/20 bg-[#0c0c0c] overflow-hidden transition-all duration-500 hover:border-brand-orange/45 hover:shadow-[0_0_60px_-15px_rgba(242,102,34,0.28)] flex-1`}>
                <div className="absolute top-0 left-0 w-0 group-hover:w-full h-px bg-gradient-to-r from-brand-orange/80 to-transparent transition-all duration-700" />
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand-orange/[0.05] rounded-full blur-[60px] pointer-events-none group-hover:bg-brand-orange/[0.1] transition-all duration-500" />

                {/* film frame corners */}
                <div className="absolute top-3 right-3 opacity-10 group-hover:opacity-30 transition-opacity duration-500">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <path d="M0 8V0h8" stroke="#F26622" strokeWidth="1" />
                    <path d="M28 8V0h-8" stroke="#F26622" strokeWidth="1" />
                    <path d="M0 20v8h8" stroke="#F26622" strokeWidth="1" />
                    <path d="M28 20v8h-8" stroke="#F26622" strokeWidth="1" />
                  </svg>
                </div>

                <div className="relative z-10 p-7 flex flex-col h-full">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-9 h-9 rounded-xl bg-brand-orange/10 border border-brand-orange/25 flex items-center justify-center text-brand-orange flex-shrink-0 group-hover:bg-brand-orange/20 transition-colors duration-300">
                      {disciplines[2].icon}
                    </div>
                    <span className="text-brand-orange text-[10px] font-semibold tracking-[0.3em] uppercase">{disciplines[2].number}</span>
                  </div>
                  <h3 className="font-fraunces text-xl font-bold text-text-light mb-1.5">{disciplines[2].label}</h3>
                  <p className="text-brand-orange text-[10px] font-medium tracking-[0.15em] uppercase mb-4">{disciplines[2].tagline}</p>
                  <p className="text-text-muted text-xs leading-[1.85]">{disciplines[2].desc}</p>
                </div>
              </div>

            </div>
          </div>

          {/* Integration bar */}
          <div className={`fade-up delay-400 ${disciplinesInView ? 'in-view' : ''} mt-5 rounded-2xl border border-white/[0.06] bg-white/[0.02] px-8 py-5 flex flex-col sm:flex-row items-center gap-4 sm:gap-8 text-center sm:text-left`}>
            <div className="flex items-center gap-3 shrink-0 justify-center sm:justify-start">
              <div className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
              <span className="text-text-muted text-xs font-medium tracking-[0.2em] uppercase">Integrated by design</span>
            </div>
            <div className="h-px w-full bg-gradient-to-r from-brand-orange/20 via-white/[0.06] to-[#0099cc]/20 hidden sm:block" />
            <p className="text-text-muted text-xs leading-relaxed text-center sm:text-right max-w-sm shrink-0">
              Each discipline feeds the next — software powers the systems, systems inform the visuals, visuals drive the product.
            </p>
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

          <div ref={valuesRef} className="relative max-w-4xl mx-auto">
            <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-brand-orange/50 via-white/[0.08] to-transparent" />

            <div className="flex flex-col gap-0">
              {values.map((v, i) => {
                const isLeft = i % 2 === 0;
                const isOrange = i % 2 === 0;
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

                    <div className="hidden lg:flex w-[10%] justify-center items-center flex-shrink-0 relative z-10">
                      <div className={`w-3 h-3 rounded-full ${isOrange ? 'bg-brand-orange' : 'bg-[#0099cc]'} ring-4 ${isOrange ? 'ring-brand-orange/15' : 'ring-[#0099cc]/15'} shadow-[0_0_20px_-4px_rgba(242,102,34,0.6)]`} />
                    </div>

                    <div className="hidden lg:block w-[45%]" />
                  </div>
                );
              })}
            </div>

            <div className="hidden lg:flex justify-center mt-2">
              <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />
      </section>

      {/* Why Us */}
      <section className="relative py-28 lg:py-40 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
        <div className="absolute top-0 left-1/4 w-[700px] h-[700px] bg-brand-orange/[0.03] rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#0099cc]/[0.04] rounded-full blur-[140px] pointer-events-none" />

        <div ref={whyRef} className="container-max relative z-10">

          {/* Terminal-style section header */}
          <div className={`fade-up ${whyInView ? 'in-view' : ''} mb-16 flex justify-center lg:justify-start`}>
            <div className="inline-flex flex-col gap-0 rounded-xl border border-white/[0.08] overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-2.5 bg-white/[0.04] border-b border-white/[0.06]">
                <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
                <span className="w-2.5 h-2.5 rounded-full bg-brand-orange/40" />
                <span className="text-white/20 text-[10px] font-mono ml-2">linkframe.sys / why-us.md</span>
              </div>
              <div className="px-5 py-3 bg-[#0a0a0a]">
                <span className="text-brand-orange text-[10px] font-mono tracking-widest">$ query --module=WHY_LINKFRAME --status=ACTIVE</span>
              </div>
            </div>
          </div>

          {/* Headline row */}
          <div className={`fade-up ${whyInView ? 'in-view' : ''} grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16 items-end text-center lg:text-left`}>
            <h2 className="font-fraunces text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-text-light leading-[1.0]">
              Built to last.<br />
              <span className="text-brand-orange">Partnered to grow.</span>
            </h2>
            <div className="flex flex-col gap-5 items-center lg:items-start">
              <p className="text-text-muted text-base leading-[1.85] border-l-2 border-brand-orange/40 pl-5 text-left">
                Most agencies hand you a product and disappear. We stay invested in your outcomes — because your success is the only metric that matters to us.
              </p>
              <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-brand-orange/[0.06] border border-brand-orange/20">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse" />
                <span className="text-brand-orange text-xs font-medium">Currently accepting new projects</span>
              </div>
            </div>
          </div>

          {/* 2×2 large card grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

            {/* Card 01 */}
            <div className={`fade-up delay-100 ${whyInView ? 'in-view' : ''} group relative rounded-2xl border border-brand-orange/20 bg-[#0b0b0b] overflow-hidden transition-all duration-500 hover:border-brand-orange/50 hover:shadow-[0_0_100px_-20px_rgba(242,102,34,0.3)]`}>
              <div className="absolute top-0 left-0 w-0 group-hover:w-full h-px bg-gradient-to-r from-brand-orange to-transparent transition-all duration-700" />
              <div className="absolute bottom-0 left-0 w-2/3 h-px bg-gradient-to-r from-brand-orange/30 to-transparent" />
              <div className="absolute -top-16 -right-16 w-64 h-64 bg-brand-orange/[0.06] rounded-full blur-[80px] pointer-events-none group-hover:bg-brand-orange/[0.12] transition-all duration-500" />
              <span className="absolute bottom-4 right-5 font-fraunces text-[7rem] font-bold text-brand-orange/[0.04] leading-none select-none pointer-events-none group-hover:text-brand-orange/[0.08] transition-colors duration-500">01</span>
              <div className="relative z-10 p-8 lg:p-10">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse" />
                    <span className="text-brand-orange text-[9px] font-mono tracking-[0.25em] uppercase">MODULE_01 / ACTIVE</span>
                  </div>
                  <div className="flex gap-1">
                    {[1,2,3,4,5].map(b => (
                      <span key={b} className="w-4 h-1 rounded-full bg-brand-orange/30 group-hover:bg-brand-orange/60 transition-colors duration-300" style={{transitionDelay:`${b*60}ms`}} />
                    ))}
                  </div>
                </div>
                <div className="w-12 h-12 rounded-xl bg-brand-orange/10 border border-brand-orange/25 flex items-center justify-center text-brand-orange mb-6 group-hover:bg-brand-orange/20 transition-colors duration-300">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                </div>
                <h3 className="font-fraunces text-2xl lg:text-3xl font-bold text-text-light mb-3 leading-snug">Cross-discipline expertise</h3>
                <p className="text-brand-orange text-[10px] font-mono tracking-[0.2em] uppercase mb-5">Software · IMS · VFX</p>
                <p className="text-text-muted text-sm leading-[1.9] mb-8">One team. No vendor juggling. No context lost in translation. Every layer of your digital presence — engineered, managed, and visualised under one roof.</p>
                <div className="flex flex-wrap gap-2 pt-6 border-t border-white/[0.05]">
                  {['Software Eng.', 'IMS', 'VFX & Media'].map(tag => (
                    <span key={tag} className="text-[10px] px-3 py-1.5 rounded-full border border-brand-orange/20 text-brand-orange/70 tracking-widest uppercase group-hover:border-brand-orange/40 transition-colors duration-300">{tag}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Card 02 */}
            <div className={`fade-up delay-200 ${whyInView ? 'in-view' : ''} group relative rounded-2xl border border-[#0099cc]/20 bg-[#0b0b0b] overflow-hidden transition-all duration-500 hover:border-[#0099cc]/50 hover:shadow-[0_0_100px_-20px_rgba(0,153,204,0.28)]`}>
              <div className="absolute top-0 left-0 w-0 group-hover:w-full h-px bg-gradient-to-r from-[#0099cc] to-transparent transition-all duration-700" />
              <div className="absolute bottom-0 left-0 w-2/3 h-px bg-gradient-to-r from-[#0099cc]/30 to-transparent" />
              <div className="absolute -top-16 -right-16 w-64 h-64 bg-[#0099cc]/[0.05] rounded-full blur-[80px] pointer-events-none group-hover:bg-[#0099cc]/[0.1] transition-all duration-500" />
              <span className="absolute bottom-4 right-5 font-fraunces text-[7rem] font-bold text-[#0099cc]/[0.04] leading-none select-none pointer-events-none group-hover:text-[#0099cc]/[0.08] transition-colors duration-500">02</span>
              <div className="relative z-10 p-8 lg:p-10">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0099cc] animate-pulse" />
                    <span className="text-[#0099cc] text-[9px] font-mono tracking-[0.25em] uppercase">MODULE_02 / ACTIVE</span>
                  </div>
                  <div className="flex gap-1">
                    {[1,2,3,4,5].map(b => (
                      <span key={b} className="w-4 h-1 rounded-full bg-[#0099cc]/30 group-hover:bg-[#0099cc]/60 transition-colors duration-300" style={{transitionDelay:`${b*60}ms`}} />
                    ))}
                  </div>
                </div>
                <div className="w-12 h-12 rounded-xl bg-[#0099cc]/10 border border-[#0099cc]/25 flex items-center justify-center text-[#0099cc] mb-6 group-hover:bg-[#0099cc]/20 transition-colors duration-300">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-fraunces text-2xl lg:text-3xl font-bold text-text-light mb-3 leading-snug">Built for Africa</h3>
                <p className="text-[#0099cc] text-[10px] font-mono tracking-[0.2em] uppercase mb-5">Context · Infrastructure · Markets</p>
                <p className="text-text-muted text-sm leading-[1.9] mb-8">We understand local markets, infrastructure realities, and the constraints that actually matter. Our solutions are grounded in the environments where they'll actually run.</p>
                <div className="flex items-center gap-3 pt-6 border-t border-white/[0.05]">
                  <div className="flex-1 h-1 rounded-full bg-white/[0.05] overflow-hidden">
                    <div className="h-full w-4/5 bg-gradient-to-r from-[#0099cc]/60 to-[#0099cc]/20 rounded-full group-hover:w-full transition-all duration-700" />
                  </div>
                  <span className="text-[#0099cc] text-[10px] font-mono shrink-0">CONTEXT_MATCH: 94%</span>
                </div>
              </div>
            </div>

            {/* Card 03 */}
            <div className={`fade-up delay-300 ${whyInView ? 'in-view' : ''} group relative rounded-2xl border border-brand-orange/20 bg-[#0b0b0b] overflow-hidden transition-all duration-500 hover:border-brand-orange/50 hover:shadow-[0_0_100px_-20px_rgba(242,102,34,0.3)]`}>
              <div className="absolute top-0 left-0 w-0 group-hover:w-full h-px bg-gradient-to-r from-brand-orange to-transparent transition-all duration-700" />
              <div className="absolute bottom-0 left-0 w-2/3 h-px bg-gradient-to-r from-brand-orange/30 to-transparent" />
              <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-brand-orange/[0.06] rounded-full blur-[80px] pointer-events-none group-hover:bg-brand-orange/[0.12] transition-all duration-500" />
              <span className="absolute bottom-4 right-5 font-fraunces text-[7rem] font-bold text-brand-orange/[0.04] leading-none select-none pointer-events-none group-hover:text-brand-orange/[0.08] transition-colors duration-500">03</span>
              <div className="relative z-10 p-8 lg:p-10">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse" />
                    <span className="text-brand-orange text-[9px] font-mono tracking-[0.25em] uppercase">MODULE_03 / ACTIVE</span>
                  </div>
                  <div className="flex gap-1">
                    {[1,2,3,4,5].map(b => (
                      <span key={b} className="w-4 h-1 rounded-full bg-brand-orange/30 group-hover:bg-brand-orange/60 transition-colors duration-300" style={{transitionDelay:`${b*60}ms`}} />
                    ))}
                  </div>
                </div>
                <div className="w-12 h-12 rounded-xl bg-brand-orange/10 border border-brand-orange/25 flex items-center justify-center text-brand-orange mb-6 group-hover:bg-brand-orange/20 transition-colors duration-300">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="font-fraunces text-2xl lg:text-3xl font-bold text-text-light mb-3 leading-snug">Radical transparency</h3>
                <p className="text-brand-orange text-[10px] font-mono tracking-[0.2em] uppercase mb-5">No black boxes · Full visibility</p>
                <p className="text-text-muted text-sm leading-[1.9] mb-8">You see progress, give feedback, and stay in control at every stage. No surprises, no hidden decisions — just a clear pipeline from brief to delivery.</p>
                <div className="grid grid-cols-3 gap-3 pt-6 border-t border-white/[0.05]">
                  {[['Brief','✓'],['Build','✓'],['Deliver','→']].map(([label, status]) => (
                    <div key={label} className="flex flex-col items-center gap-1 px-2 py-2.5 rounded-lg bg-white/[0.03] border border-white/[0.05] group-hover:border-brand-orange/15 transition-colors duration-300">
                      <span className="text-brand-orange text-xs font-mono">{status}</span>
                      <span className="text-text-muted text-[9px] tracking-widest uppercase">{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Card 04 */}
            <div className={`fade-up delay-400 ${whyInView ? 'in-view' : ''} group relative rounded-2xl border border-[#0099cc]/20 bg-[#0b0b0b] overflow-hidden transition-all duration-500 hover:border-[#0099cc]/50 hover:shadow-[0_0_100px_-20px_rgba(0,153,204,0.28)]`}>
              <div className="absolute top-0 left-0 w-0 group-hover:w-full h-px bg-gradient-to-r from-[#0099cc] to-transparent transition-all duration-700" />
              <div className="absolute bottom-0 left-0 w-2/3 h-px bg-gradient-to-r from-[#0099cc]/30 to-transparent" />
              <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-[#0099cc]/[0.05] rounded-full blur-[80px] pointer-events-none group-hover:bg-[#0099cc]/[0.1] transition-all duration-500" />
              <span className="absolute bottom-4 right-5 font-fraunces text-[7rem] font-bold text-[#0099cc]/[0.04] leading-none select-none pointer-events-none group-hover:text-[#0099cc]/[0.08] transition-colors duration-500">04</span>
              <div className="relative z-10 p-8 lg:p-10">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0099cc] animate-pulse" />
                    <span className="text-[#0099cc] text-[9px] font-mono tracking-[0.25em] uppercase">MODULE_04 / ACTIVE</span>
                  </div>
                  <div className="flex gap-1">
                    {[1,2,3,4,5].map(b => (
                      <span key={b} className="w-4 h-1 rounded-full bg-[#0099cc]/30 group-hover:bg-[#0099cc]/60 transition-colors duration-300" style={{transitionDelay:`${b*60}ms`}} />
                    ))}
                  </div>
                </div>
                <div className="w-12 h-12 rounded-xl bg-[#0099cc]/10 border border-[#0099cc]/25 flex items-center justify-center text-[#0099cc] mb-6 group-hover:bg-[#0099cc]/20 transition-colors duration-300">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="font-fraunces text-2xl lg:text-3xl font-bold text-text-light mb-3 leading-snug">Long-term thinking</h3>
                <p className="text-[#0099cc] text-[10px] font-mono tracking-[0.2em] uppercase mb-5">Scalable · Resilient · Future-proof</p>
                <p className="text-text-muted text-sm leading-[1.9] mb-8">We build systems that scale with you — not quick fixes that break in six months. Every architecture decision is made with your next three years in mind.</p>
                <div className="flex items-center gap-3 pt-6 border-t border-white/[0.05]">
                  <div className="flex-1 h-1 rounded-full bg-white/[0.05] overflow-hidden">
                    <div className="h-full w-3/4 bg-gradient-to-r from-[#0099cc]/60 to-[#0099cc]/20 rounded-full group-hover:w-full transition-all duration-700" />
                  </div>
                  <span className="text-[#0099cc] text-[10px] font-mono shrink-0">SCALE_READY: 100%</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />
      </section>

      {/* Team teaser */}
      <section className="relative py-28 lg:py-40 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-brand-orange/[0.025] rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#0099cc]/[0.03] rounded-full blur-[120px] pointer-events-none" />

        <div ref={teamRef} className="container-max relative z-10">

          {/* Header */}
          <div className={`fade-up ${teamInView ? 'in-view' : ''} flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16 text-center lg:text-left`}>
            <div>
              <div className="flex items-center gap-3 mb-5 justify-center lg:justify-start">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
                <span className="text-text-muted text-xs font-medium tracking-[0.2em] uppercase">The Team</span>
                <div className="h-px bg-gradient-to-r from-white/[0.08] to-transparent w-24" />
              </div>
              <h2 className="font-fraunces text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-text-light leading-[1.0]">
                The people<br /><span className="text-brand-orange">behind the work.</span>
              </h2>
            </div>
            <div className="flex flex-col gap-4 lg:items-end items-center">
              <p className="text-text-muted text-sm leading-relaxed max-w-xs lg:text-right text-center">
                A cross-discipline crew of engineers, architects, and visual artists — each a specialist, all aligned.
              </p>
              <Link
                to="/team"
                className="group inline-flex items-center gap-2 border border-white/[0.1] text-text-muted px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 hover:border-brand-orange/40 hover:text-text-light"
              >
                Meet the full team
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {teamPreview.map(({ initials, name, role, category, accent, skills, bio }, i) => {
              const isOrange = accent === 'brand-orange';
              const accentText = isOrange ? 'text-brand-orange' : 'text-[#0099cc]';
              const borderBase = isOrange ? 'border-brand-orange/15' : 'border-[#0099cc]/15';
              const borderHover = isOrange ? 'hover:border-brand-orange/45' : 'hover:border-[#0099cc]/45';
              const avatarGrad = isOrange
                ? 'from-brand-orange/25 to-brand-orange/5 border-brand-orange/20 group-hover:border-brand-orange/50'
                : 'from-[#0099cc]/25 to-[#0099cc]/5 border-[#0099cc]/20 group-hover:border-[#0099cc]/50';
              const scanLine = isOrange ? 'from-brand-orange/70' : 'from-[#0099cc]/60';
              const glowPos = isOrange ? '-top-12 -right-12 bg-brand-orange/[0.06] group-hover:bg-brand-orange/[0.12]' : '-top-12 -left-12 bg-[#0099cc]/[0.05] group-hover:bg-[#0099cc]/[0.1]';
              const hoverShadow = isOrange
                ? 'hover:shadow-[0_0_80px_-20px_rgba(242,102,34,0.3)]'
                : 'hover:shadow-[0_0_80px_-20px_rgba(0,153,204,0.25)]';
              const skillBorder = isOrange ? 'border-brand-orange/15 group-hover:border-brand-orange/30' : 'border-[#0099cc]/15 group-hover:border-[#0099cc]/30';
              const numColor = isOrange ? 'text-brand-orange/[0.06] group-hover:text-brand-orange/[0.12]' : 'text-[#0099cc]/[0.06] group-hover:text-[#0099cc]/[0.12]';

              return (
                <div
                  key={name}
                  className={`fade-up delay-${(i + 1) * 100} ${teamInView ? 'in-view' : ''} group relative rounded-2xl border ${borderBase} ${borderHover} bg-[#0b0b0b] overflow-hidden transition-all duration-500 ${hoverShadow} hover:-translate-y-1`}
                >
                  {/* scan line */}
                  <div className={`absolute top-0 left-0 w-0 group-hover:w-full h-px bg-gradient-to-r ${scanLine} to-transparent transition-all duration-700`} />
                  {/* corner glow */}
                  <div className={`absolute w-48 h-48 ${glowPos} rounded-full blur-[70px] pointer-events-none transition-all duration-500`} />
                  {/* ghost number */}
                  <span className={`absolute bottom-3 right-4 font-fraunces text-[6rem] font-bold ${numColor} leading-none select-none pointer-events-none transition-colors duration-500`}>
                    0{i + 1}
                  </span>

                  <div className="relative z-10 p-8">
                    {/* status bar */}
                    <div className="flex items-center justify-between mb-7">
                      <div className="flex items-center gap-2">
                        <span className={`w-1.5 h-1.5 rounded-full ${isOrange ? 'bg-brand-orange' : 'bg-[#0099cc]'} animate-pulse`} />
                        <span className={`${accentText} text-[9px] font-mono tracking-[0.25em] uppercase`}>{category} / ACTIVE</span>
                      </div>
                      <div className="flex gap-1">
                        {[1,2,3].map(b => (
                          <span key={b} className={`w-3 h-0.5 rounded-full ${isOrange ? 'bg-brand-orange/30 group-hover:bg-brand-orange/60' : 'bg-[#0099cc]/30 group-hover:bg-[#0099cc]/60'} transition-colors duration-300`} style={{transitionDelay:`${b*80}ms`}} />
                        ))}
                      </div>
                    </div>

                    {/* Avatar */}
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${avatarGrad} border flex items-center justify-center mb-6 transition-all duration-300`}>
                      <span className={`font-fraunces font-bold text-xl ${accentText}`}>{initials}</span>
                    </div>

                    {/* Name + role */}
                    <h3 className="font-fraunces text-xl font-bold text-text-light mb-1 leading-snug">{name}</h3>
                    <p className={`${accentText} text-xs font-medium tracking-wide mb-4`}>{role}</p>
                    <p className="text-text-muted text-sm leading-[1.8] mb-7">{bio}</p>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2 pt-5 border-t border-white/[0.05]">
                      {skills.map(skill => (
                        <span key={skill} className={`text-[10px] px-2.5 py-1 rounded-full border ${skillBorder} text-text-muted transition-colors duration-300`}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom CTA strip */}
          <div className={`fade-up delay-400 ${teamInView ? 'in-view' : ''} mt-5 rounded-2xl border border-white/[0.06] bg-white/[0.02] px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left`}>
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {['AO','CE','TA'].map((init) => (
                  <div key={init} className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-orange/30 to-brand-blue/20 border-2 border-[#0b0b0b] flex items-center justify-center">
                    <span className="text-text-light font-fraunces font-bold text-[10px]">{init}</span>
                  </div>
                ))}
              </div>
              <span className="text-text-muted text-xs">+3 more specialists on the full team</span>
            </div>
            <Link
              to="/team"
              className="group inline-flex items-center gap-2 text-brand-orange text-sm font-medium hover:text-brand-orange/80 transition-colors duration-200"
            >
              View all team members
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

        </div>

        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />
      </section>

      <CtaBanner />
    </>
  );
}
