import React from 'react';
import { Link } from 'react-router-dom';
import useInView from '../../hooks/useInView';

const projects = [
  {
    title: 'School Management System',
    category: 'IMS',
    description: 'End-to-end platform for a secondary school — admissions, grades, attendance, and staff records.',
    tags: ['React', 'Laravel', 'MySQL'],
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=700&q=80',
    accent: '#004D66',
  },
  {
    title: 'Brand Identity Film',
    category: 'VFX',
    description: 'Motion graphics and visual effects package for a Lagos-based fintech startup launch.',
    tags: ['After Effects', 'Motion Graphics'],
    image: 'https://images.unsplash.com/photo-1536240478700-b869ad10e128?w=700&q=80',
    accent: '#F26622',
  },
  {
    title: 'NGO Operations Portal',
    category: 'Software',
    description: 'Custom web portal for managing volunteers, donations, and field reports across 5 regions.',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=700&q=80',
    accent: '#004D66',
  },
];

export default function ProjectsSection() {
  const [headerRef, headerInView] = useInView();
  const [gridRef, gridInView] = useInView();

  return (
    <section className="section-padding bg-[#080808]">
      <div className="container-max">
        <div ref={headerRef} className={`fade-up ${headerInView ? 'in-view' : ''} flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16`}>
          <div>
            <p className="text-brand-orange text-xs font-medium uppercase tracking-widest mb-3">Our Work</p>
            <h2 className="font-fraunces text-4xl sm:text-5xl font-bold text-text-light leading-tight">
              Projects we're<br />proud of.
            </h2>
          </div>
          <Link
            to="/portfolio"
            className="group inline-flex items-center gap-2 text-text-muted text-sm hover:text-text-light transition-colors duration-200 shrink-0"
          >
            View all projects
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {projects.map(({ title, category, description, tags, image, accent }, i) => (
            <div
              key={title}
              className={`fade-up delay-${(i + 1) * 100} ${gridInView ? 'in-view' : ''} group relative rounded-2xl border border-white/[0.07] bg-white/[0.02] overflow-hidden hover:border-white/[0.14] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/50 cursor-pointer`}
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-black/20 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span
                    className="text-xs font-medium px-3 py-1 rounded-full border backdrop-blur-sm"
                    style={{ color: accent, borderColor: `${accent}50`, backgroundColor: `${accent}20` }}
                  >
                    {category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-fraunces font-semibold text-lg text-text-light mb-2 group-hover:text-white transition-colors duration-300">
                  {title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed mb-4">{description}</p>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-white/[0.04] text-text-muted border border-white/[0.06]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
