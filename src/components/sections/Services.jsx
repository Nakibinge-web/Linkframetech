import { useState } from 'react';
import { Link } from 'react-router-dom';
import useInView from '../../hooks/useInView';

const services = [
  {
    id: 'software',
    number: '01',
    title: 'Software Engineering',
    tagline: 'Architecture that scales.',
    description: 'Custom web applications, REST APIs, and internal systems engineered for your exact workflow — not adapted from templates.',
    tags: ['Web Apps', 'REST APIs', 'Software development', 'Database Administration'],
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
    title: 'Infrastructure Management Solutions',
    tagline: 'Data that drives decisions.',
    description: 'Infrastructure management solutions for schools, NGOs, and enterprises — reducing manual overhead and surfacing the insights that matter.',
    tags: ['Networking', 'Wifi Setups', 'Cloud Services', 'Server Management'],
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
    title: 'Visual Effects & Media',
    tagline: 'Visuals with intent.',
    description: 'Motion graphics, brand films, and visual effects crafted to communicate your story with cinematic precision and style.',
    tags: ['Motion Graphics', 'Digital Marketting', 'Brand Films', 'Video Editing'],
    accent: 'brand-orange',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.069A1 1 0 0121 8.82v6.36a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
      </svg>
    ),
  },
];

export default function ServicesSection() {
  const [active, setActive] = useState('software');
  const [ref, inView] = useInView();
  const current = services.find(s => s.id === active);
  const isOrange = current.accent === 'brand-orange';

  return (
    <section className="relative section-padding overflow-hidden bg-[#080808]">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:60px_60px]" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-brand-orange/[0.025] rounded-full blur-[160px] pointer-events-none" />

      <div ref={ref} className="container-max relative z-10">

        {/* Header */}
        <div className={`fade-up ${inView ? 'in-view' : ''} flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16 text-center lg:text-left`}>
          <div>
            <div className="flex items-center gap-3 mb-4 justify-center lg:justify-start">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
              <span className="text-text-muted text-xs font-medium tracking-[0.2em] uppercase">What We Do</span>
            </div>
            <h2 className="font-fraunces text-4xl sm:text-5xl font-bold text-text-light leading-[1.0]">
              One integrated system.<br /><span className="text-brand-orange">Three disciplines.</span>
            </h2>
          </div>
          <Link to="/services" className="group inline-flex items-center gap-2 text-text-muted text-sm hover:text-text-light transition-colors duration-200 self-center lg:self-auto shrink-0">
            Explore all services
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Interactive panel */}
        <div className={`fade-up delay-100 ${inView ? 'in-view' : ''} grid grid-cols-1 lg:grid-cols-12 gap-0 rounded-2xl border overflow-hidden transition-all duration-500 ${isOrange ? 'border-brand-orange/20' : 'border-[#0099cc]/20'}`}>

          {/* Tab list */}
          <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-white/[0.06]">
            {services.map((s) => {
              const isActive = active === s.id;
              const sIsOrange = s.accent === 'brand-orange';
              return (
                <button
                  key={s.id}
                  onClick={() => setActive(s.id)}
                  className={`w-full text-left px-7 py-6 border-b border-white/[0.05] last:border-b-0 transition-all duration-300 group relative overflow-hidden ${isActive ? 'bg-white/[0.04]' : 'hover:bg-white/[0.02]'}`}
                >
                  {isActive && (
                    <div className={`absolute left-0 top-0 bottom-0 w-0.5 ${sIsOrange ? 'bg-brand-orange' : 'bg-[#0099cc]'}`} />
                  )}
                  <div className="flex items-center gap-4">
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${isActive ? (sIsOrange ? 'bg-brand-orange/15 text-brand-orange border border-brand-orange/25' : 'bg-[#0099cc]/15 text-[#0099cc] border border-[#0099cc]/25') : 'bg-white/[0.04] text-text-muted border border-white/[0.06]'}`}>
                      {s.icon}
                    </div>
                    <div>
                      <p className={`font-semibold text-sm transition-colors duration-300 ${isActive ? 'text-text-light' : 'text-text-muted group-hover:text-text-light'}`}>{s.title}</p>
                      <p className={`text-xs mt-0.5 transition-colors duration-300 ${isActive ? (sIsOrange ? 'text-brand-orange' : 'text-[#0099cc]') : 'text-white/20'}`}>{s.tagline}</p>
                    </div>
                    <span className={`ml-auto font-fraunces text-xs font-bold transition-colors duration-300 ${isActive ? (sIsOrange ? 'text-brand-orange' : 'text-[#0099cc]') : 'text-white/15'}`}>{s.number}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Content panel */}
          <div className="lg:col-span-8 relative overflow-hidden bg-[#0b0b0b]">
            <div className={`absolute -top-20 -right-20 w-72 h-72 rounded-full blur-[100px] pointer-events-none transition-all duration-700 ${isOrange ? 'bg-brand-orange/[0.07]' : 'bg-[#0099cc]/[0.06]'}`} />
            <div className={`absolute top-0 left-0 h-px w-full bg-gradient-to-r ${isOrange ? 'from-brand-orange/60' : 'from-[#0099cc]/50'} to-transparent`} />

            <div className="relative z-10 p-8 lg:p-10 flex flex-col h-full min-h-[320px]">
              <div className="flex items-center gap-2 mb-8">
                <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${isOrange ? 'bg-brand-orange' : 'bg-[#0099cc]'}`} />
                <span className={`text-[9px] font-mono tracking-[0.3em] uppercase ${isOrange ? 'text-brand-orange' : 'text-[#0099cc]'}`}>{current.number} / ACTIVE</span>
              </div>
              <h3 className="font-fraunces text-3xl lg:text-4xl font-bold text-text-light mb-3 leading-snug">{current.title}</h3>
              <p className={`text-xs font-medium tracking-[0.2em] uppercase mb-6 ${isOrange ? 'text-brand-orange' : 'text-[#0099cc]'}`}>{current.tagline}</p>
              <p className="text-text-muted text-sm leading-[1.9] mb-8 max-w-lg">{current.description}</p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {current.tags.map(tag => (
                  <span key={tag} className={`text-[10px] px-3 py-1.5 rounded-full border text-text-muted ${isOrange ? 'border-brand-orange/20' : 'border-[#0099cc]/20'}`}>{tag}</span>
                ))}
              </div>
            </div>
            <span className={`absolute bottom-2 right-4 font-fraunces text-[8rem] font-bold leading-none select-none pointer-events-none ${isOrange ? 'text-brand-orange/[0.04]' : 'text-[#0099cc]/[0.04]'}`}>
              {current.number}
            </span>
          </div>

        </div>

        {/* Integration bar */}
        <div className={`fade-up delay-200 ${inView ? 'in-view' : ''} mt-4 rounded-2xl border border-white/[0.06] bg-white/[0.02] px-8 py-4 flex flex-col sm:flex-row items-center gap-4 sm:gap-8 text-center sm:text-left`}>
          <div className="flex items-center gap-3 shrink-0 justify-center sm:justify-start">
            <div className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
            <span className="text-text-muted text-xs font-medium tracking-[0.2em] uppercase">Integrated by design</span>
          </div>
          <div className="h-px w-full bg-gradient-to-r from-brand-orange/20 via-white/[0.06] to-[#0099cc]/20 hidden sm:block" />
          <p className="text-text-muted text-xs leading-relaxed max-w-sm shrink-0">
            Each discipline feeds the next — software powers the systems, systems inform the visuals.
          </p>
        </div>

      </div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />
    </section>
  );
}
