import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
    description: 'End-to-end platform for a secondary school — admissions, grades, attendance, and staff records.',
    outcome: 'Reduced admin workload by 65%',
    tags: ['React', 'Laravel', 'MySQL'],
    featured: true,
    link: null,
  },
  {
    id: 2,
    title: 'Brand Identity Film',
    category: 'vfx',
    status: 'Completed',
    client: 'Fintech Startup, Lagos',
    year: '2024',
    description: 'Motion graphics and visual effects package for a Lagos-based fintech startup launch.',
    outcome: '2M+ views across social platforms',
    tags: ['After Effects', 'Motion Graphics', 'Color Grading'],
    featured: false,
    link: null,
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
    tags: ['React', 'Node.js', 'PostgreSQL'],
    featured: false,
    link: null,
  },
  {
    id: 4,
    title: 'Inventory Management System',
    category: 'ims',
    status: 'Live',
    client: 'Retail Chain, Nigeria',
    year: '2024',
    description: 'Real-time inventory tracking and reporting system for a mid-size retail chain.',
    outcome: 'Cut stock discrepancies by 80%',
    tags: ['Laravel', 'MySQL', 'Charts.js'],
    featured: false,
    link: null,
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
    tags: ['Premiere Pro', 'After Effects'],
    featured: false,
    link: null,
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
    tags: ['React', 'Laravel', 'Stripe'],
    featured: false,
    link: null,
  },
];

const filters = [
  { label: 'All', value: 'all' },
  { label: 'Software', value: 'software' },
  { label: 'IMS', value: 'ims' },
  { label: 'VFX & Media', value: 'vfx' },
];

const categoryConfig = {
  software: {
    label: 'Software',
    accent: '#F26622',
    bg: 'from-[#F26622]/10 via-[#F26622]/5 to-transparent',
    border: 'border-[#F26622]/20',
    badge: 'bg-[#F26622]/10 text-[#F26622] border-[#F26622]/20',
    glow: 'rgba(242,102,34,0.15)',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
  },
  ims: {
    label: 'IMS',
    accent: '#60b8d4',
    bg: 'from-[#004D66]/15 via-[#004D66]/5 to-transparent',
    border: 'border-[#004D66]/30',
    badge: 'bg-[#004D66]/10 text-[#60b8d4] border-[#004D66]/30',
    glow: 'rgba(0,77,102,0.2)',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 2.625c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125m16.5 5.625c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
      </svg>
    ),
  },
  vfx: {
    label: 'VFX & Media',
    accent: '#a855f7',
    bg: 'from-purple-500/10 via-purple-500/5 to-transparent',
    border: 'border-purple-500/20',
    badge: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
    glow: 'rgba(168,85,247,0.15)',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-1.5A1.125 1.125 0 0118 18.375M20.625 4.5H3.375m17.25 0c.621 0 1.125.504 1.125 1.125M20.625 4.5h-1.5C18.504 4.5 18 5.004 18 5.625m3.75 0v1.5c0 .621-.504 1.125-1.125 1.125M3.375 4.5c-.621 0-1.125.504-1.125 1.125M3.375 4.5h1.5C5.496 4.5 6 5.004 6 5.625m-3.75 0v1.5c0 .621.504 1.125 1.125 1.125m0 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m1.5-3.75C5.496 8.25 6 8.754 6 9.375v1.5m0-5.25v5.25m0-5.25C6 5.004 6.504 4.5 7.125 4.5h9.75c.621 0 1.125.504 1.125 1.125m1.125 2.625h1.5m-1.5 0A1.125 1.125 0 0118 9.375v1.5m1.5-3.75C19.496 8.25 20 8.754 20 9.375v6.75" />
      </svg>
    ),
  },
};

const statusConfig = {
  Live: 'bg-green-500/10 text-green-400 border-green-500/20',
  Completed: 'bg-white/5 text-text-muted border-white/10',
  'In Progress': 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
};

// ── Featured card (large, 2-col span) ──────────────────────────────────────
function FeaturedCard({ project }) {
  const config = categoryConfig[project.category];
  return (
    <motion.div
      layout
      layoutId={`project-${project.id}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="md:col-span-2 group flex flex-col sm:flex-row rounded-2xl border border-white/[0.07] bg-white/[0.02] overflow-hidden hover:border-white/[0.12] hover:bg-white/[0.04] transition-all duration-300 ease-out"
    >
      {/* Visual */}
      <div className={`relative sm:w-2/5 h-52 sm:h-auto bg-gradient-to-br ${config.bg} border-b sm:border-b-0 sm:border-r ${config.border} flex items-center justify-center overflow-hidden shrink-0`}>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:32px_32px]" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-40 h-40 rounded-full blur-[80px]" style={{ background: config.glow }} />
        </div>
        <div className="relative z-10 flex flex-col items-center gap-2">
          <div className="w-20 h-20 rounded-2xl border flex items-center justify-center" style={{ borderColor: config.accent + '30', background: config.accent + '10', color: config.accent }}>
            {config.icon}
          </div>
          <span className="text-xs font-medium uppercase tracking-widest mt-1" style={{ color: config.accent }}>Featured</span>
        </div>
        {/* Status */}
        <div className="absolute top-3 right-3">
          <span className={`text-xs px-2.5 py-1 rounded-full border font-medium flex items-center gap-1.5 ${statusConfig[project.status]}`}>
            {project.status === 'Live' && <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />}
            {project.status}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-4 p-6 flex-1 justify-center">
        <div className="flex items-center gap-2 flex-wrap">
          <span className={`text-xs font-medium px-2 py-0.5 rounded-full border ${config.badge}`}>{config.label}</span>
          <span className="text-text-muted/40 text-xs">·</span>
          <span className="text-text-muted text-xs">{project.client}</span>
          <span className="text-text-muted/40 text-xs">·</span>
          <span className="text-text-muted text-xs">{project.year}</span>
        </div>
        <div>
          <h3 className="text-text-light font-fraunces font-bold text-2xl leading-snug">{project.title}</h3>
          <p className="text-text-muted text-sm leading-relaxed mt-2">{project.description}</p>
        </div>
        {/* Outcome */}
        <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/[0.03] border border-white/5 w-fit">
          <svg className="w-3.5 h-3.5 text-brand-orange shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
          </svg>
          <span className="text-text-muted text-xs">{project.outcome}</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-white/5 text-text-muted border border-white/5 hover:border-white/15 transition-colors duration-200">
              {tag}
            </span>
          ))}
        </div>
        <div className="pt-2 border-t border-white/5">
          {project.link ? (
            <a href={project.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-brand-orange text-sm font-medium hover:gap-3 transition-all duration-200">
              View Project
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          ) : (
            <span className="inline-flex items-center gap-1.5 text-text-muted/40 text-sm">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
              </svg>
              Link coming soon
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}

// ── Regular card ────────────────────────────────────────────────────────────
function ProjectCard({ project }) {
  const config = categoryConfig[project.category];
  return (
    <motion.div
      layout
      layoutId={`project-${project.id}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="group flex flex-col rounded-2xl border border-white/[0.07] bg-white/[0.02] overflow-hidden hover:border-white/[0.12] hover:bg-white/[0.04] transition-all duration-300 ease-out"
    >
      {/* Visual */}
      <div className={`relative h-44 bg-gradient-to-br ${config.bg} border-b ${config.border} flex items-center justify-center overflow-hidden`}>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:32px_32px]" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-28 h-28 rounded-full blur-[60px]" style={{ background: config.glow }} />
        </div>
        <div className="relative z-10">
          <div className="w-14 h-14 rounded-2xl border flex items-center justify-center" style={{ borderColor: config.accent + '30', background: config.accent + '10', color: config.accent }}>
            {config.icon}
          </div>
        </div>
        <div className="absolute top-3 right-3">
          <span className={`text-xs px-2.5 py-1 rounded-full border font-medium flex items-center gap-1.5 ${statusConfig[project.status]}`}>
            {project.status === 'Live' && <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />}
            {project.status}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-3 p-5 flex-1">
        <div className="flex items-center gap-2 flex-wrap">
          <span className={`text-xs font-medium px-2 py-0.5 rounded-full border ${config.badge}`}>{config.label}</span>
          <span className="text-text-muted/40 text-xs">·</span>
          <span className="text-text-muted text-xs">{project.year}</span>
        </div>
        <div>
          <h3 className="text-text-light font-fraunces font-semibold text-lg leading-snug">{project.title}</h3>
          <p className="text-text-muted text-sm leading-relaxed mt-1.5">{project.description}</p>
        </div>
        {/* Outcome */}
        <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/[0.03] border border-white/5 w-fit">
          <svg className="w-3 h-3 text-brand-orange shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
          </svg>
          <span className="text-text-muted text-xs">{project.outcome}</span>
        </div>
        <div className="flex flex-wrap gap-2 mt-auto pt-1">
          {project.tags.map((tag) => (
            <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-white/5 text-text-muted border border-white/5 hover:border-white/15 transition-colors duration-200">
              {tag}
            </span>
          ))}
        </div>
        <div className="pt-3 border-t border-white/5 mt-1">
          {project.link ? (
            <a href={project.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-brand-orange text-sm font-medium hover:gap-3 transition-all duration-200">
              View Project
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          ) : (
            <span className="inline-flex items-center gap-1.5 text-text-muted/40 text-sm">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
              </svg>
              Link coming soon
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}

// ── Page ────────────────────────────────────────────────────────────────────
export default function Portfolio() {
  const [active, setActive] = useState('all');
  const [heroRef, heroInView] = useInView();

  const filtered = active === 'all' ? projects : projects.filter((p) => p.category === active);
  const featured = filtered.find((p) => p.featured);
  const rest = filtered.filter((p) => !p.featured);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div className="absolute bottom-0 left-1/3 w-[500px] h-[300px] bg-brand-orange/8 rounded-full blur-[100px] pointer-events-none" />
        <div ref={heroRef} className="container-max px-4 sm:px-6 lg:px-8 relative z-10 pt-32 pb-10">
          <p className={`fade-up ${heroInView ? 'in-view' : ''} text-brand-orange text-sm font-medium uppercase tracking-widest mb-4`}>Portfolio</p>
          <h1 className={`fade-up delay-100 ${heroInView ? 'in-view' : ''} heading-xl text-text-light max-w-3xl`}>Work we're proud of.</h1>
          <p className={`fade-up delay-200 ${heroInView ? 'in-view' : ''} text-body max-w-xl mt-4`}>
            A selection of projects across software, systems, and visual media.
          </p>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="container-max">

          {/* Filters + count */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
            <div className="flex flex-wrap gap-3">
              {filters.map(({ label, value }) => (
                <button
                  key={value}
                  onClick={() => setActive(value)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ease-out ${
                    active === value
                      ? 'bg-brand-orange text-white shadow-[0_0_20px_rgba(242,102,34,0.3)]'
                      : 'border border-white/10 text-text-muted hover:border-white/25 hover:text-text-light'
                  }`}
                >
                  {label}
                  <span className={`ml-2 text-xs px-1.5 py-0.5 rounded-full ${active === value ? 'bg-white/20' : 'bg-white/5'}`}>
                    {value === 'all' ? projects.length : projects.filter((p) => p.category === value).length}
                  </span>
                </button>
              ))}
            </div>
            {/* Count summary */}
            <p className="text-text-muted text-sm shrink-0">
              Showing <span className="text-text-light font-medium">{filtered.length}</span> of <span className="text-text-light font-medium">{projects.length}</span> projects
            </p>
          </div>

          {/* Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {/* Featured card spans 2 cols */}
              {featured && <FeaturedCard key={`featured-${featured.id}`} project={featured} />}
              {/* Rest */}
              {rest.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Empty state */}
          {filtered.length === 0 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20">
              <p className="text-text-muted text-sm">No projects in this category yet.</p>
            </motion.div>
          )}
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
