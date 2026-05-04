import { useState } from 'react';
import { Link } from 'react-router-dom';
import CtaBanner from '../components/sections/CtaBanner';
import useInView from '../hooks/useInView';

const leads = [
  {
    initials: 'AO',
    name: 'Alex Okonkwo',
    role: 'Lead Software Engineer',
    id: 'ENG-001',
    category: 'software',
    accent: 'brand-orange',
    bio: 'Full-stack engineer building scalable web systems for startups and enterprises. Leads architecture decisions across all software projects.',
    skills: ['React', 'Laravel', 'Node.js', 'PostgreSQL'],
  },
  {
    initials: 'CE',
    name: 'Chisom Eze',
    role: 'IMS Architect',
    id: 'IMS-001',
    category: 'ims',
    accent: '[#0099cc]',
    bio: 'Database specialist designing information systems that reduce operational friction. Owns the data layer across all client deployments.',
    skills: ['MySQL', 'System Design', 'Data Modeling', 'Laravel'],
  },
  {
    initials: 'TA',
    name: 'Tunde Adeyemi',
    role: 'VFX Lead',
    id: 'VFX-001',
    category: 'vfx',
    accent: 'brand-orange',
    bio: 'Motion designer and video editor with a sharp eye for brand storytelling. Directs all visual production pipelines.',
    skills: ['After Effects', 'Premiere Pro', 'Motion Graphics', 'Color Grading'],
  },
];

const specialists = [
  {
    initials: 'NO',
    name: 'Ngozi Obi',
    role: 'Frontend Developer',
    id: 'ENG-002',
    category: 'software',
    accent: 'brand-orange',
    bio: 'UI-focused developer bridging design and engineering.',
    skills: ['React', 'Tailwind CSS', 'TypeScript', 'Figma'],
  },
  {
    initials: 'EN',
    name: 'Emeka Nwosu',
    role: 'Systems Analyst',
    id: 'IMS-002',
    category: 'ims',
    accent: '[#0099cc]',
    bio: 'Translates complex workflows into clean, maintainable digital systems.',
    skills: ['Requirements Analysis', 'SQL', 'Process Mapping', 'Laravel'],
  },
  {
    initials: 'FB',
    name: 'Fatima Bello',
    role: 'Visual Effects Artist',
    id: 'VFX-002',
    category: 'vfx',
    accent: 'brand-orange',
    bio: 'Creates compositing and VFX work for film, ads, and digital campaigns.',
    skills: ['After Effects', 'Blender', 'DaVinci Resolve', 'Compositing'],
  },
];

const filters = [
  { label: 'All', value: 'all' },
  { label: 'Software', value: 'software' },
  { label: 'IMS', value: 'ims' },
  { label: 'VFX', value: 'vfx' },
];

const catMeta = {
  software: { label: 'Software Engineering', color: 'text-brand-orange', border: 'border-brand-orange/20', dot: 'bg-brand-orange' },
  ims: { label: 'IMS Solutions', color: 'text-[#0099cc]', border: 'border-[#0099cc]/20', dot: 'bg-[#0099cc]' },
  vfx: { label: 'VFX & Media', color: 'text-brand-orange', border: 'border-brand-orange/20', dot: 'bg-brand-orange' },
};

function MemberCard({ member, size = 'normal', index = 0, inView }) {
  const { initials, name, role, id, category, accent, bio, skills } = member;
  const isOrange = accent === 'brand-orange';
  const accentText = isOrange ? 'text-brand-orange' : 'text-[#0099cc]';
  const borderBase = isOrange ? 'border-brand-orange/20' : 'border-[#0099cc]/20';
  const borderHover = isOrange ? 'hover:border-brand-orange/50' : 'hover:border-[#0099cc]/50';
  const avatarGrad = isOrange
    ? 'from-brand-orange/20 to-brand-orange/5 border-brand-orange/25 group-hover:border-brand-orange/55'
    : 'from-[#0099cc]/20 to-[#0099cc]/5 border-[#0099cc]/25 group-hover:border-[#0099cc]/55';
  const scanLine = isOrange ? 'from-brand-orange' : 'from-[#0099cc]';
  const glowColor = isOrange ? 'bg-brand-orange/[0.07] group-hover:bg-brand-orange/[0.14]' : 'bg-[#0099cc]/[0.06] group-hover:bg-[#0099cc]/[0.12]';
  const hoverShadow = isOrange
    ? 'hover:shadow-[0_0_100px_-20px_rgba(242,102,34,0.35)]'
    : 'hover:shadow-[0_0_100px_-20px_rgba(0,153,204,0.3)]';
  const skillBorder = isOrange ? 'border-brand-orange/15 group-hover:border-brand-orange/35' : 'border-[#0099cc]/15 group-hover:border-[#0099cc]/35';
  const catLabel = category === 'software' ? 'Software' : category === 'ims' ? 'IMS' : 'VFX';
  const isLarge = size === 'large';

  return (
    <div className={`fade-up delay-${(index + 1) * 100} ${inView ? 'in-view' : ''} group relative rounded-2xl border ${borderBase} ${borderHover} bg-[#0b0b0b] overflow-hidden transition-all duration-500 ${hoverShadow} hover:-translate-y-1`}>
      {/* scan line */}
      <div className={`absolute top-0 left-0 w-0 group-hover:w-full h-px bg-gradient-to-r ${scanLine} to-transparent transition-all duration-700`} />
      {/* bottom accent */}
      <div className={`absolute bottom-0 left-0 w-1/2 h-px bg-gradient-to-r ${scanLine}/30 to-transparent`} />
      {/* corner glow */}
      <div className={`absolute -top-14 -right-14 w-56 h-56 ${glowColor} rounded-full blur-[80px] pointer-events-none transition-all duration-500`} />
      {/* ghost initials watermark */}
      <span className={`absolute -bottom-2 -right-1 font-fraunces font-bold leading-none select-none pointer-events-none transition-colors duration-500 ${isOrange ? 'text-brand-orange/[0.04] group-hover:text-brand-orange/[0.09]' : 'text-[#0099cc]/[0.04] group-hover:text-[#0099cc]/[0.09]'} ${isLarge ? 'text-[10rem]' : 'text-[7rem]'}`}>
        {initials}
      </span>

      <div className={`relative z-10 ${isLarge ? 'p-9 lg:p-11' : 'p-7 lg:p-8'} flex flex-col items-center lg:items-start text-center lg:text-left`}>
        {/* top bar */}
        <div className="flex items-center justify-between mb-7 w-full">
          <div className="flex items-center gap-2">
            <span className={`w-1.5 h-1.5 rounded-full ${isOrange ? 'bg-brand-orange' : 'bg-[#0099cc]'} animate-pulse`} />
            <span className={`${accentText} text-[9px] font-mono tracking-[0.25em] uppercase`}>{catLabel} / {id}</span>
          </div>
          <div className="flex gap-1">
            {[1, 2, 3].map(b => (
              <span key={b} className={`w-3 h-0.5 rounded-full transition-colors duration-300 ${isOrange ? 'bg-brand-orange/25 group-hover:bg-brand-orange/60' : 'bg-[#0099cc]/25 group-hover:bg-[#0099cc]/60'}`} style={{ transitionDelay: `${b * 80}ms` }} />
            ))}
          </div>
        </div>

        {/* avatar */}
        <div className={`bg-gradient-to-br ${avatarGrad} border rounded-2xl flex items-center justify-center transition-all duration-300 ${isLarge ? 'w-20 h-20 mb-7' : 'w-14 h-14 mb-5'}`}>
          <span className={`font-fraunces font-bold ${accentText} ${isLarge ? 'text-2xl' : 'text-lg'}`}>{initials}</span>
        </div>

        <h3 className={`font-fraunces font-bold text-text-light leading-snug mb-1 ${isLarge ? 'text-2xl lg:text-3xl' : 'text-lg'}`}>{name}</h3>
        <p className={`${accentText} text-xs font-medium tracking-wide mb-4`}>{role}</p>
        <p className={`text-text-muted leading-[1.8] mb-7 ${isLarge ? 'text-sm' : 'text-xs'}`}>{bio}</p>

        {/* skills */}
        <div className="flex flex-wrap gap-2 pt-5 border-t border-white/[0.05] w-full justify-center lg:justify-start">
          {skills.map(skill => (
            <span key={skill} className={`text-[10px] px-2.5 py-1 rounded-full border ${skillBorder} text-text-muted transition-colors duration-300`}>
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Team() {
  const [active, setActive] = useState('all');
  const [heroRef, heroInView] = useInView();
  const [leadsRef, leadsInView] = useInView();
  const [specRef, specInView] = useInView();

  const filteredLeads = active === 'all' ? leads : leads.filter(m => m.category === active);
  const filteredSpec = active === 'all' ? specialists : specialists.filter(m => m.category === active);

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden bg-[#080808]">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&q=80"
            alt=""
            className="w-full h-full object-cover opacity-[0.18]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#080808] via-[#080808]/70 to-[#080808]/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-[#080808]/50" />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-brand-blue/[0.05] rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-brand-orange/[0.04] rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
        {/* vertical accent line */}
        <div className="absolute top-0 right-[30%] w-px h-full bg-gradient-to-b from-brand-orange/15 via-white/[0.03] to-transparent hidden lg:block" />

        <div ref={heroRef} className="container-max section-padding relative z-10 pt-40 pb-20 w-full">
          <div className={`fade-up ${heroInView ? 'in-view' : ''} flex items-center gap-3 mb-8 justify-center lg:justify-start`}>
            <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
            <span className="text-text-muted text-xs font-medium tracking-[0.2em] uppercase">The Team</span>
            <div className="h-px bg-gradient-to-r from-white/[0.08] to-transparent w-24" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end text-center lg:text-left">
            <div className="lg:col-span-7">
              <h1 className={`fade-up delay-100 ${heroInView ? 'in-view' : ''} font-fraunces font-bold text-text-light leading-[1.0] tracking-tight`}>
                <span className="block text-5xl sm:text-6xl lg:text-[5rem]">Not just a team.</span>
                <span className="block text-5xl sm:text-6xl lg:text-[5rem] text-brand-orange">A system.</span>
              </h1>
            </div>
            <div className="lg:col-span-5 flex flex-col items-center lg:items-start">
              <p className={`fade-up delay-200 ${heroInView ? 'in-view' : ''} text-text-muted text-base leading-[1.85] max-w-sm`}>
                Three disciplines. Six specialists. One integrated crew — engineered to deliver across software, data, and visual media.
              </p>
              <div className={`fade-up delay-300 ${heroInView ? 'in-view' : ''} flex flex-wrap gap-3 mt-8 justify-center lg:justify-start`}>
                {Object.entries(catMeta).map(([key, { label, color, border, dot }]) => (
                  <div key={key} className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border ${border} bg-white/[0.02]`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${dot}`} />
                    <span className={`${color} text-[10px] font-mono tracking-widest uppercase`}>{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-28 bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none" />
      </section>

      {/* Filter + Team */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-brand-orange/[0.025] rounded-full blur-[160px] pointer-events-none" />

        <div className="container-max relative z-10">

          {/* Filter tabs */}
          <div className="flex items-center gap-2 mb-16 flex-wrap justify-center lg:justify-start">
            {filters.map(({ label, value }) => (
              <button
                key={value}
                onClick={() => setActive(value)}
                className={`px-5 py-2 rounded-xl text-xs font-medium tracking-[0.15em] uppercase transition-all duration-300 border ${
                  active === value
                    ? 'bg-brand-orange/10 border-brand-orange/40 text-brand-orange'
                    : 'border-white/[0.08] text-text-muted hover:border-white/20 hover:text-text-light bg-transparent'
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Leads — asymmetric: first card large, rest normal */}
          {filteredLeads.length > 0 && (
            <div ref={leadsRef} className="mb-6">
              <div className="flex items-center gap-3 mb-8 justify-center lg:justify-start">
                <span className="text-text-muted text-[10px] font-mono tracking-[0.3em] uppercase">Discipline Leads</span>
                <div className="flex-1 h-px bg-gradient-to-r from-white/[0.08] to-transparent hidden lg:block" />
              </div>

              {/* First lead — full width featured */}
              {filteredLeads[0] && (
                <div className="mb-5">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                    <MemberCard member={filteredLeads[0]} size="large" index={0} inView={leadsInView} />
                    {/* right side — remaining leads stacked */}
                    {filteredLeads.length > 1 && (
                      <div className="flex flex-col gap-5">
                        {filteredLeads.slice(1).map((m, i) => (
                          <MemberCard key={m.name} member={m} size="normal" index={i + 1} inView={leadsInView} />
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Specialists */}
          {filteredSpec.length > 0 && (
            <div ref={specRef}>
              <div className="flex items-center gap-3 mb-8 justify-center lg:justify-start">
                <span className="text-text-muted text-[10px] font-mono tracking-[0.3em] uppercase">Specialists</span>
                <div className="flex-1 h-px bg-gradient-to-r from-white/[0.08] to-transparent hidden lg:block" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {filteredSpec.map((m, i) => (
                  <MemberCard key={m.name} member={m} size="normal" index={i} inView={specInView} />
                ))}
              </div>
            </div>
          )}

          {/* Empty state */}
          {filteredLeads.length === 0 && filteredSpec.length === 0 && (
            <div className="text-center py-20">
              <p className="text-text-muted text-sm">No team members found for this filter.</p>
            </div>
          )}

          {/* Bottom strip */}
          <div className="mt-10 rounded-2xl border border-white/[0.06] bg-white/[0.02] px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse" />
              <span className="text-text-muted text-xs">We're a growing team — always looking for sharp minds.</span>
            </div>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 text-brand-orange text-sm font-medium hover:text-brand-orange/80 transition-colors duration-200"
            >
              Get in touch
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
