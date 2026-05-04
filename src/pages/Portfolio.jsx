import { useState } from 'react';
import { Link } from 'react-router-dom';
import CtaBanner from '../components/sections/CtaBanner';
import useInView from '../hooks/useInView';

const projects = [
  {
    id: 1,
    title: 'School Management System',
    category: 'ims',
    status: 'Live',
    client: 'Secondary School, Uganda',
    year: '2024',
    description: 'End-to-end platform for a secondary school — admissions, grades, attendance, and staff records unified in one system.',
    outcome: 'Reduced admin workload by 65%',
    metric: '65%',
    metricLabel: 'Admin reduction',
    tags: ['React', 'Laravel', 'MySQL'],
    featured: true,
  },
  {
    id: 2,
    title: 'Brand Identity Film',
    category: 'vfx',
    status: 'Completed',
    client: 'Fintech Startup, Lagos',
    year: '2024',
    description: 'Motion graphics and visual effects package for a Lagos-based fintech startup launch campaign.',
    outcome: '2M+ views across social platforms',
    metric: '2M+',
    metricLabel: 'Social views',
    tags: ['After Effects', 'Motion Graphics', 'Color Grading'],
    featured: false,
  },
  {
    id: 3,
    title: 'NGO Operations Portal',
    category: 'software',
    status: 'Live',
    client: 'NGO, East Africa',
    year: '2023',
    description: 'Custom web portal for managing volunteers, donations, and field reports across 5 regions.',
    outcome: 'Unified 5 regional offices on one platform',
    metric: '5',
    metricLabel: 'Regions unified',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    featured: false,
  },
  {
    id: 4,
    title: 'Inventory Management System',
    category: 'ims',
    status: 'Live',
    client: 'Retail Chain, Nigeria',
    year: '2024',
    description: 'Real-time inventory tracking and reporting system for a mid-size retail chain with multiple branches.',
    outcome: 'Cut stock discrepancies by 80%',
    metric: '80%',
    metricLabel: 'Discrepancy cut',
    tags: ['Laravel', 'MySQL', 'Charts.js'],
    featured: false,
  },
  {
    id: 5,
    title: 'Product Launch Campaign',
    category: 'vfx',
    status: 'Completed',
    client: 'Consumer Brand, Nigeria',
    year: '2023',
    description: 'Full visual campaign including teaser videos, social cuts, and animated logo reveal.',
    outcome: 'Delivered 12 assets in 3 weeks',
    metric: '12',
    metricLabel: 'Assets delivered',
    tags: ['Premiere Pro', 'After Effects'],
    featured: false,
  },
  {
    id: 6,
    title: 'E-commerce Platform',
    category: 'software',
    status: 'In Progress',
    client: 'SME, Uganda',
    year: '2025',
    description: 'Custom storefront with order management, payment integration, and admin dashboard.',
    outcome: 'Targeting 3x faster checkout flow',
    metric: '3x',
    metricLabel: 'Faster checkout',
    tags: ['React', 'Laravel', 'Stripe'],
    featured: false,
  },
];

const filters = [
  { label: 'All', value: 'all' },
  { label: 'Software', value: 'software' },
  { label: 'IMS', value: 'ims' },
  { label: 'VFX', value: 'vfx' },
];

const catConfig = {
  software: {
    label: 'Software',
    accentHex: '#F26622',
    border: 'border-brand-orange/20',
    borderHover: 'hover:border-brand-orange/50',
    glow: 'bg-brand-orange/[0.06] group-hover:bg-brand-orange/[0.12]',
    shadow: 'hover:shadow-[0_0_80px_-15px_rgba(242,102,34,0.3)]',
    scan: 'from-brand-orange',
    text: 'text-brand-orange',
    tagBorder: 'border-brand-orange/20 group-hover:border-brand-orange/40',
    dot: 'bg-brand-orange',
    outcomeBorder: 'border-brand-orange/20',
  },
  ims: {
    label: 'IMS',
    accentHex: '#0099cc',
    border: 'border-[#0099cc]/20',
    borderHover: 'hover:border-[#0099cc]/50',
    glow: 'bg-[#0099cc]/[0.05] group-hover:bg-[#0099cc]/[0.1]',
    shadow: 'hover:shadow-[0_0_80px_-15px_rgba(0,153,204,0.28)]',
    scan: 'from-[#0099cc]',
    text: 'text-[#0099cc]',
    tagBorder: 'border-[#0099cc]/20 group-hover:border-[#0099cc]/40',
    dot: 'bg-[#0099cc]',
    outcomeBorder: 'border-[#0099cc]/20',
  },
  vfx: {
    label: 'VFX & Media',
    accentHex: '#F26622',
    border: 'border-brand-orange/20',
    borderHover: 'hover:border-brand-orange/50',
    glow: 'bg-brand-orange/[0.06] group-hover:bg-brand-orange/[0.12]',
    shadow: 'hover:shadow-[0_0_80px_-15px_rgba(242,102,34,0.3)]',
    scan: 'from-brand-orange',
    text: 'text-brand-orange',
    tagBorder: 'border-brand-orange/20 group-hover:border-brand-orange/40',
    dot: 'bg-brand-orange',
    outcomeBorder: 'border-brand-orange/20',
  },
};

const statusConfig = {
  Live: 'text-green-400 border-green-500/20 bg-green-500/[0.06]',
  Completed: 'text-text-muted border-white/10 bg-white/[0.03]',
  'In Progress': 'text-yellow-400 border-yellow-500/20 bg-yellow-500/[0.06]',
};

function FeaturedProject({ project, inView }) {
  const c = catConfig[project.category];
  return (
    <div className={`fade-up ${inView ? 'in-view' : ''} group relative rounded-2xl border ${c.border} ${c.borderHover} bg-[#0b0b0b] overflow-hidden transition-all duration-500 ${c.shadow}`}>
      <div className={`absolute top-0 left-0 w-0 group-hover:w-full h-px bg-gradient-to-r ${c.scan} to-transparent transition-all duration-700`} />
      <div className={`absolute bottom-0 left-0 w-1/2 h-px bg-gradient-to-r ${c.scan}/30 to-transparent`} />
      <div className={`absolute -top-20 -right-20 w-80 h-80 ${c.glow} rounded-full blur-[100px] pointer-events-none transition-all duration-500`} />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 min-h-[400px]">
        {/* Left panel */}
        <div className="relative flex flex-col justify-between p-10 lg:p-12 border-b lg:border-b-0 lg:border-r border-white/[0.06]">
          <div>
            <div className="flex items-center gap-3 mb-10 justify-center lg:justify-start">
              <span className={`w-1.5 h-1.5 rounded-full ${c.dot} animate-pulse`} />
              <span className={`${c.text} text-[9px] font-mono tracking-[0.3em] uppercase`}>{c.label} / FEATURED</span>
            </div>
            <div className="mb-6 text-center lg:text-left">
              <p className={`font-fraunces font-bold leading-none ${c.text} text-[5rem] lg:text-[7rem]`}>
                {project.metric}
              </p>
              <p className="text-text-muted text-sm mt-2 tracking-wide">{project.metricLabel}</p>
            </div>
          </div>
          <div className="flex items-center gap-3 justify-center lg:justify-start">
            <span className={`text-[10px] px-2.5 py-1 rounded-full border font-medium flex items-center gap-1.5 ${statusConfig[project.status]}`}>
              {project.status === 'Live' && <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />}
              {project.status}
            </span>
            <span className="text-text-muted text-xs font-mono">{project.year}</span>
          </div>
          {/* SVG decoration */}
          <div className="absolute bottom-8 right-8 opacity-10 group-hover:opacity-25 transition-opacity duration-500 hidden lg:block">
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
              <circle cx="40" cy="40" r="4" fill={c.accentHex} />
              <circle cx="40" cy="40" r="14" stroke={c.accentHex} strokeWidth="0.5" strokeDasharray="3 4" />
              <circle cx="40" cy="40" r="28" stroke={c.accentHex} strokeWidth="0.3" strokeDasharray="2 5" />
              <line x1="40" y1="12" x2="40" y2="0" stroke={c.accentHex} strokeWidth="0.5" />
              <line x1="68" y1="40" x2="80" y2="40" stroke={c.accentHex} strokeWidth="0.5" />
              <line x1="40" y1="68" x2="40" y2="80" stroke={c.accentHex} strokeWidth="0.5" />
              <line x1="12" y1="40" x2="0" y2="40" stroke={c.accentHex} strokeWidth="0.5" />
            </svg>
          </div>
        </div>

        {/* Right panel */}
        <div className="flex flex-col justify-between p-10 lg:p-12 text-center lg:text-left">
          <div>
            <p className="text-text-muted text-xs mb-2">{project.client}</p>
            <h3 className="font-fraunces text-3xl lg:text-4xl font-bold text-text-light leading-snug mb-4">{project.title}</h3>
            <p className="text-text-muted text-sm leading-[1.85] mb-8">{project.description}</p>
            <div className={`flex items-center gap-3 px-4 py-3 rounded-xl border ${c.outcomeBorder} bg-white/[0.02] mb-8 justify-center lg:justify-start`}>
              <svg className={`w-4 h-4 ${c.text} shrink-0`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
              </svg>
              <span className="text-text-muted text-xs">{project.outcome}</span>
            </div>
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
              {project.tags.map(tag => (
                <span key={tag} className={`text-[10px] px-2.5 py-1 rounded-full border ${c.tagBorder} text-text-muted transition-colors duration-300`}>{tag}</span>
              ))}
            </div>
          </div>
          <div className="pt-6 border-t border-white/[0.05] mt-6">
            <span className="inline-flex items-center gap-1.5 text-text-muted/40 text-sm">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
              </svg>
              Case study coming soon
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project, inView, index }) {
  const c = catConfig[project.category];
  return (
    <div className={`fade-up delay-${(index % 3 + 1) * 100} ${inView ? 'in-view' : ''} group relative rounded-2xl border ${c.border} ${c.borderHover} bg-[#0b0b0b] overflow-hidden transition-all duration-500 ${c.shadow} hover:-translate-y-1 flex flex-col h-full`}>
      <div className={`absolute top-0 left-0 w-0 group-hover:w-full h-px bg-gradient-to-r ${c.scan} to-transparent transition-all duration-700`} />
      <div className={`absolute -top-12 -right-12 w-48 h-48 ${c.glow} rounded-full blur-[70px] pointer-events-none transition-all duration-500`} />
      <span className={`absolute bottom-3 right-4 font-fraunces text-[5rem] font-bold leading-none select-none pointer-events-none transition-colors duration-500 ${c.text} opacity-[0.04] group-hover:opacity-[0.09]`}>
        {String(project.id).padStart(2, '0')}
      </span>

      <div className="relative z-10 p-7 flex flex-col flex-1 text-center lg:text-left items-center lg:items-start">
        <div className="flex items-center justify-between mb-6 w-full">
          <div className="flex items-center gap-2">
            <span className={`w-1.5 h-1.5 rounded-full ${c.dot} animate-pulse`} />
            <span className={`${c.text} text-[9px] font-mono tracking-[0.25em] uppercase`}>{c.label}</span>
          </div>
          <span className={`text-[10px] px-2 py-0.5 rounded-full border font-medium flex items-center gap-1 ${statusConfig[project.status]}`}>
            {project.status === 'Live' && <span className="w-1 h-1 rounded-full bg-green-400 animate-pulse" />}
            {project.status}
          </span>
        </div>

        <div className="mb-5">
          <p className={`font-fraunces font-bold text-4xl leading-none ${c.text}`}>{project.metric}</p>
          <p className="text-text-muted text-[10px] mt-1 tracking-wide">{project.metricLabel}</p>
        </div>

        <h3 className="font-fraunces text-xl font-bold text-text-light mb-2 leading-snug">{project.title}</h3>
        <p className="text-text-muted text-xs leading-[1.85] mb-6 flex-1">{project.description}</p>

        <div className="flex flex-wrap gap-2 pt-5 border-t border-white/[0.05] w-full justify-center lg:justify-start">
          {project.tags.map(tag => (
            <span key={tag} className={`text-[10px] px-2.5 py-1 rounded-full border ${c.tagBorder} text-text-muted transition-colors duration-300`}>{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Portfolio() {
  const [active, setActive] = useState('all');
  const [heroRef, heroInView] = useInView();
  const [featuredRef, featuredInView] = useInView();
  const [gridRef, gridInView] = useInView();

  const filtered = active === 'all' ? projects : projects.filter(p => p.category === active);
  const featured = filtered.find(p => p.featured);
  const rest = filtered.filter(p => !p.featured);

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[58vh] flex items-end overflow-hidden bg-[#080808]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1600&q=80"
            alt=""
            className="w-full h-full object-cover opacity-[0.15]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#080808] via-[#080808]/70 to-[#080808]/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-[#080808]/50" />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-brand-orange/[0.04] rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
        <div className="absolute top-0 right-[30%] w-px h-full bg-gradient-to-b from-brand-orange/15 via-white/[0.03] to-transparent hidden lg:block" />

        <div ref={heroRef} className="container-max section-padding relative z-10 pt-40 pb-20 w-full">
          <div className={`fade-up ${heroInView ? 'in-view' : ''} flex items-center gap-3 mb-8 justify-center lg:justify-start`}>
            <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
            <span className="text-text-muted text-xs font-medium tracking-[0.2em] uppercase">Portfolio</span>
            <div className="h-px bg-gradient-to-r from-white/[0.08] to-transparent w-24" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end text-center lg:text-left">
            <div className="lg:col-span-7">
              <h1 className={`fade-up delay-100 ${heroInView ? 'in-view' : ''} font-fraunces font-bold text-text-light leading-[1.0] tracking-tight`}>
                <span className="block text-5xl sm:text-6xl lg:text-[5rem]">Work we're</span>
                <span className="block text-5xl sm:text-6xl lg:text-[5rem] text-brand-orange">proud of.</span>
              </h1>
            </div>
            <div className="lg:col-span-5 flex flex-col items-center lg:items-start">
              <p className={`fade-up delay-200 ${heroInView ? 'in-view' : ''} text-text-muted text-base leading-[1.85] max-w-sm`}>
                A selection of projects across software engineering, information systems, and visual media — each one built to last.
              </p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-28 bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none" />
      </section>

      {/* Filter + Projects */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />

        <div className="container-max relative z-10">

          {/* Filters */}
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
                <span className={`ml-2 text-[9px] px-1.5 py-0.5 rounded-full font-mono ${active === value ? 'bg-brand-orange/20 text-brand-orange' : 'bg-white/[0.05] text-text-muted'}`}>
                  {value === 'all' ? projects.length : projects.filter(p => p.category === value).length}
                </span>
              </button>
            ))}
            <span className="ml-auto text-text-muted text-xs font-mono hidden lg:block">
              {filtered.length} / {projects.length} projects
            </span>
          </div>

          {/* Featured */}
          {featured && (
            <div ref={featuredRef} className="mb-5">
              <div className="flex items-center gap-3 mb-8 justify-center lg:justify-start">
                <span className="text-text-muted text-[10px] font-mono tracking-[0.3em] uppercase">Featured Project</span>
                <div className="flex-1 h-px bg-gradient-to-r from-white/[0.08] to-transparent hidden lg:block" />
              </div>
              <FeaturedProject project={featured} inView={featuredInView} />
            </div>
          )}

          {/* Rest */}
          {rest.length > 0 && (
            <div ref={gridRef}>
              <div className="flex items-center gap-3 mb-8 mt-10 justify-center lg:justify-start">
                <span className="text-text-muted text-[10px] font-mono tracking-[0.3em] uppercase">All Projects</span>
                <div className="flex-1 h-px bg-gradient-to-r from-white/[0.08] to-transparent hidden lg:block" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {rest.map((p, i) => (
                  <ProjectCard key={p.id} project={p} inView={gridInView} index={i} />
                ))}
              </div>
            </div>
          )}

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-text-muted text-sm">No projects in this category yet.</p>
            </div>
          )}

          {/* Bottom strip */}
          <div className="mt-10 rounded-2xl border border-white/[0.06] bg-white/[0.02] px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse" />
              <span className="text-text-muted text-xs">More projects in progress — check back soon.</span>
            </div>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 text-brand-orange text-sm font-medium hover:text-brand-orange/80 transition-colors duration-200"
            >
              Start a project
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
