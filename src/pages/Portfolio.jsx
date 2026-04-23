import { useState } from 'react';
import Card from '../components/common/Card';
import CtaBanner from '../components/sections/CtaBanner';
import useInView from '../hooks/useInView';

const projects = [
  {
    title: 'School Management System',
    category: 'ims',
    description: 'End-to-end platform for a secondary school — admissions, grades, attendance, and staff records.',
    tags: ['React', 'Laravel', 'MySQL'],
    color: 'from-brand-blue/20 to-transparent',
  },
  {
    title: 'Brand Identity Film',
    category: 'vfx',
    description: 'Motion graphics and visual effects package for a Lagos-based fintech startup launch.',
    tags: ['After Effects', 'Motion Graphics', 'Color Grading'],
    color: 'from-brand-orange/20 to-transparent',
  },
  {
    title: 'NGO Operations Portal',
    category: 'software',
    description: 'Custom web portal for managing volunteers, donations, and field reports across 5 regions.',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    color: 'from-brand-blue/20 to-transparent',
  },
  {
    title: 'Inventory Management System',
    category: 'ims',
    description: 'Real-time inventory tracking and reporting system for a mid-size retail chain.',
    tags: ['Laravel', 'MySQL', 'Charts.js'],
    color: 'from-brand-blue/20 to-transparent',
  },
  {
    title: 'Product Launch Campaign',
    category: 'vfx',
    description: 'Full visual campaign including teaser videos, social cuts, and animated logo reveal.',
    tags: ['Premiere Pro', 'After Effects'],
    color: 'from-brand-orange/20 to-transparent',
  },
  {
    title: 'E-commerce Platform',
    category: 'software',
    description: 'Custom storefront with order management, payment integration, and admin dashboard.',
    tags: ['React', 'Laravel', 'Stripe'],
    color: 'from-brand-blue/20 to-transparent',
  },
];

const filters = [
  { label: 'All', value: 'all' },
  { label: 'Software', value: 'software' },
  { label: 'IMS', value: 'ims' },
  { label: 'VFX', value: 'vfx' },
];

export default function Portfolio() {
  const [active, setActive] = useState('all');
  const filtered = active === 'all' ? projects : projects.filter((p) => p.category === active);
  const [heroRef, heroInView] = useInView();
  const [gridRef, gridInView] = useInView();

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div className="absolute bottom-0 left-1/3 w-[500px] h-[300px] bg-brand-orange/8 rounded-full blur-[100px] pointer-events-none" />
        <div ref={heroRef} className="container-max section-padding relative z-10 pt-40">
          <p className={`fade-up ${heroInView ? 'in-view' : ''} text-brand-orange text-sm font-medium uppercase tracking-widest mb-4`}>Portfolio</p>
          <h1 className={`fade-up delay-100 ${heroInView ? 'in-view' : ''} heading-xl text-text-light max-w-3xl`}>Work we're proud of.</h1>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="section-padding">
        <div className="container-max">
          {/* Filters */}
          <div className="flex flex-wrap gap-3 mb-12">
            {filters.map(({ label, value }) => (
              <button
                key={value}
                onClick={() => setActive(value)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ease-out ${
                  active === value
                    ? 'bg-brand-orange text-white scale-[1.02]'
                    : 'border border-white/10 text-text-muted hover:border-brand-orange/40 hover:text-text-light hover:-translate-y-[2px]'
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map(({ title, category, description, tags, color }, i) => (
              <div key={title} className={`fade-up delay-${Math.min((i + 1) * 100, 400)} ${gridInView ? 'in-view' : ''}`}>
                <Card className="group flex flex-col gap-4 h-full">
                  <div className={`h-44 rounded-xl bg-gradient-to-br ${color} border border-white/5 flex items-center justify-center transition-all duration-300 ease-out group-hover:scale-[1.02]`}>
                    <span className="text-text-muted text-xs uppercase tracking-widest">{category}</span>
                  </div>
                  <div>
                    <span className="text-brand-orange text-xs font-medium uppercase tracking-wide">{category}</span>
                    <h3 className="text-text-light font-fraunces font-semibold text-lg mt-1 mb-2">{title}</h3>
                    <p className="text-text-muted text-sm leading-relaxed">{description}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {tags.map((tag) => (
                      <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-white/5 text-text-muted border border-white/5 transition-colors duration-200 hover:border-brand-orange/30">
                        {tag}
                      </span>
                    ))}
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
