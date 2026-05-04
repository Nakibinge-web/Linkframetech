import React from 'react';
import { Link } from 'react-router-dom';
import useInView from '../../hooks/useInView';

const projects = [
  {
    id: 1,
    title: 'School Management System',
    category: 'IMS',
    client: 'Secondary School, Uganda',
    year: '2024',
    description: 'End-to-end platform — admissions, grades, attendance, and staff records unified in one system.',
    metric: '65%',
    metricLabel: 'Admin reduction',
    tags: ['React', 'Laravel', 'MySQL'],
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=900&q=80',
    accent: '[#0099cc]',
    size: 'large',
  },
  {
    id: 2,
    title: 'Brand Identity Film',
    category: 'VFX',
    client: 'Fintech Startup, Lagos',
    year: '2024',
    description: 'Motion graphics and visual effects for a fintech startup launch campaign.',
    metric: '2M+',
    metricLabel: 'Social views',
    tags: ['After Effects', 'Motion Graphics'],
    image: 'https://images.unsplash.com/photo-1536240478700-b869ad10e128?w=700&q=80',
    accent: 'brand-orange',
    size: 'small',
  },
  {
    id: 3,
    title: 'NGO Operations Portal',
    category: 'Software',
    client: 'NGO, East Africa',
    year: '2023',
    description: 'Custom web portal for managing volunteers, donations, and field reports across 5 regions.',
    metric: '5',
    metricLabel: 'Regions unified',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=700&q=80',
    accent: 'brand-orange',
    size: 'small',
  },
];

export default function ProjectsSection() {
  const [headerRef, headerInView] = useInView();
  const [bentoRef, bentoInView] = useInView();

  const large = projects.find(p => p.size === 'large');
  const small = projects.filter(p => p.size === 'small');

  return (
    <section className="section-padding bg-[#080808] relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:60px_60px]" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#0099cc]/[0.03] rounded-full blur-[140px] pointer-events-none" />

      <div className="container-max relative z-10">

        {/* Header */}
        <div ref={headerRef} className={`fade-up ${headerInView ? 'in-view' : ''} flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10 text-center sm:text-left`}>
          <div>
            <div className="flex items-center gap-3 mb-4 justify-center sm:justify-start">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
              <span className="text-text-muted text-xs font-medium tracking-[0.2em] uppercase">Our Work</span>
            </div>
            <h2 className="font-fraunces text-4xl sm:text-5xl font-bold text-text-light leading-[1.0]">
              Projects we're<br /><span className="text-brand-orange">proud of.</span>
            </h2>
          </div>
          <Link to="/portfolio" className="group inline-flex items-center justify-center sm:justify-start gap-2 text-text-muted text-sm hover:text-text-light transition-colors duration-200 shrink-0">
            View all projects
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Bento grid */}
        <div ref={bentoRef} className="grid grid-cols-1 lg:grid-cols-3 gap-4">

          {/* Large card — spans 2 cols, 2 rows */}
          {large && (() => {
            const isOrange = large.accent === 'brand-orange';
            const accentText = isOrange ? 'text-brand-orange' : 'text-[#0099cc]';
            const borderBase = isOrange ? 'border-brand-orange/20' : 'border-[#0099cc]/20';
            const borderHover = isOrange ? 'hover:border-brand-orange/50' : 'hover:border-[#0099cc]/50';
            const scanLine = isOrange ? 'from-brand-orange' : 'from-[#0099cc]';
            const hoverShadow = isOrange ? 'hover:shadow-[0_0_80px_-15px_rgba(242,102,34,0.3)]' : 'hover:shadow-[0_0_80px_-15px_rgba(0,153,204,0.28)]';
            const catStyle = isOrange ? 'border-brand-orange/30 bg-brand-orange/10 text-brand-orange' : 'border-[#0099cc]/30 bg-[#0099cc]/10 text-[#0099cc]';
            return (
              <div className={`fade-up delay-100 ${bentoInView ? 'in-view' : ''} lg:col-span-2 lg:row-span-2 group relative rounded-2xl border ${borderBase} ${borderHover} bg-[#0b0b0b] overflow-hidden transition-all duration-500 ${hoverShadow} hover:-translate-y-1 min-h-[420px] flex flex-col`}>
                <div className={`absolute top-0 left-0 w-0 group-hover:w-full h-px bg-gradient-to-r ${scanLine} to-transparent transition-all duration-700`} />

                {/* Image — top half */}
                <div className="relative flex-1 overflow-hidden min-h-[220px]">
                  <img src={large.image} alt={large.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0b] via-[#0b0b0b]/20 to-transparent" />
                  {/* Category badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`text-[10px] font-mono tracking-widest uppercase px-2.5 py-1 rounded border ${catStyle}`}>{large.category}</span>
                  </div>
                  {/* Year */}
                  <div className="absolute top-4 right-4">
                    <span className="text-text-muted/60 text-xs font-mono">{large.year}</span>
                  </div>
                </div>

                {/* Content — bottom */}
                <div className="p-7 lg:p-8">
                  <p className="text-text-muted text-xs mb-2">{large.client}</p>
                  <h3 className="font-fraunces text-2xl lg:text-3xl font-bold text-text-light mb-3 leading-snug">{large.title}</h3>
                  <p className="text-text-muted text-sm leading-[1.85] mb-5">{large.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {large.tags.map(tag => (
                        <span key={tag} className={`text-[10px] px-2.5 py-1 rounded-full border ${isOrange ? 'border-brand-orange/20' : 'border-[#0099cc]/20'} text-text-muted`}>{tag}</span>
                      ))}
                    </div>
                    <div className="text-right shrink-0 ml-4">
                      <p className={`font-fraunces text-3xl font-bold ${accentText}`}>{large.metric}</p>
                      <p className="text-text-muted text-[10px]">{large.metricLabel}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })()}

          {/* Small cards — right column */}
          {small.map(({ id, title, category, client, year, description, metric, metricLabel, tags, image, accent }, i) => {
            const isOrange = accent === 'brand-orange';
            const accentText = isOrange ? 'text-brand-orange' : 'text-[#0099cc]';
            const borderBase = isOrange ? 'border-brand-orange/15' : 'border-[#0099cc]/15';
            const borderHover = isOrange ? 'hover:border-brand-orange/45' : 'hover:border-[#0099cc]/45';
            const scanLine = isOrange ? 'from-brand-orange' : 'from-[#0099cc]';
            const glowColor = isOrange ? 'bg-brand-orange/[0.06] group-hover:bg-brand-orange/[0.12]' : 'bg-[#0099cc]/[0.05] group-hover:bg-[#0099cc]/[0.1]';
            const hoverShadow = isOrange ? 'hover:shadow-[0_0_50px_-15px_rgba(242,102,34,0.25)]' : 'hover:shadow-[0_0_50px_-15px_rgba(0,153,204,0.22)]';
            const catStyle = isOrange ? 'border-brand-orange/30 bg-brand-orange/10 text-brand-orange' : 'border-[#0099cc]/30 bg-[#0099cc]/10 text-[#0099cc]';

            return (
              <div key={id} className={`fade-up delay-${(i + 2) * 100} ${bentoInView ? 'in-view' : ''} group relative rounded-2xl border ${borderBase} ${borderHover} bg-[#0b0b0b] overflow-hidden transition-all duration-500 ${hoverShadow} hover:-translate-y-1 flex flex-col`}>
                <div className={`absolute top-0 left-0 w-0 group-hover:w-full h-px bg-gradient-to-r ${scanLine} to-transparent transition-all duration-700`} />
                <div className={`absolute -top-10 -right-10 w-40 h-40 ${glowColor} rounded-full blur-[60px] pointer-events-none transition-all duration-500`} />

                {/* Image */}
                <div className="relative h-40 overflow-hidden">
                  <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0b] via-[#0b0b0b]/10 to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className={`text-[10px] font-mono tracking-widest uppercase px-2 py-0.5 rounded border ${catStyle}`}>{category}</span>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className="text-text-muted/60 text-xs font-mono">{year}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10 p-6 flex flex-col flex-1">
                  <p className="text-text-muted text-xs mb-1.5">{client}</p>
                  <h3 className="font-fraunces text-lg font-bold text-text-light mb-2 leading-snug">{title}</h3>
                  <p className="text-text-muted text-xs leading-[1.85] mb-4 flex-1">{description}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-white/[0.05]">
                    <div className="flex flex-wrap gap-1.5">
                      {tags.slice(0, 2).map(tag => (
                        <span key={tag} className={`text-[10px] px-2 py-0.5 rounded border ${isOrange ? 'border-brand-orange/15' : 'border-[#0099cc]/15'} text-text-muted`}>{tag}</span>
                      ))}
                    </div>
                    <div className="text-right shrink-0 ml-3">
                      <p className={`font-fraunces text-xl font-bold ${accentText}`}>{metric}</p>
                      <p className="text-text-muted text-[9px]">{metricLabel}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

        </div>

        {/* Bottom strip */}
        <div className={`fade-up delay-400 ${bentoInView ? 'in-view' : ''} mt-4 rounded-2xl border border-white/[0.06] bg-white/[0.02] px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left`}>
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse" />
            <span className="text-text-muted text-xs">More projects in progress — check back soon.</span>
          </div>
          <Link to="/portfolio" className="group inline-flex items-center gap-2 text-brand-orange text-sm font-medium hover:text-brand-orange/80 transition-colors duration-200">
            See full portfolio
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

      </div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />
    </section>
  );
}
