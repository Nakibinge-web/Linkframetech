import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useInView from '../../hooks/useInView';

const services = [
  {
    id: 'software',
    number: '01',
    title: 'Software Engineering',
    tagline: 'Custom systems built to last.',
    description:
      'We design and develop web applications, internal tools, and scalable APIs tailored to your exact workflow — not off-the-shelf templates.',
    tags: ['Web Apps', 'REST APIs', 'System Architecture', 'Integrations'],
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80',
    accent: '#F26622',
  },
  {
    id: 'ims',
    number: '02',
    title: 'IMS Solutions',
    tagline: 'Smarter data, better decisions.',
    description:
      'Information management systems for schools, NGOs, and enterprises. We design databases and workflows that reduce manual work and surface the insights you need.',
    tags: ['School Systems', 'Inventory', 'Dashboards', 'Data Migration'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    accent: '#004D66',
  },
  {
    id: 'vfx',
    number: '03',
    title: 'VFX & Media',
    tagline: 'Visuals that move people.',
    description:
      'From brand films to motion graphics, we craft visual content that communicates your story with precision and style.',
    tags: ['Motion Graphics', 'Video Editing', 'Visual Effects', 'Brand Films'],
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&q=80',
    accent: '#F26622',
  },
];

export default function ServicesSection() {
  const [active, setActive] = useState('software');
  const [ref, inView] = useInView();
  const current = services.find((s) => s.id === active);

  return (
    <section className="section-padding bg-[#080808]">
      <div className="container-max">
        {/* Header */}
        <div ref={ref} className={`fade-up ${inView ? 'in-view' : ''} mb-16`}>
          <p className="text-brand-orange text-xs font-medium uppercase tracking-widest mb-3">What We Do</p>
          <h2 className="font-fraunces text-4xl sm:text-5xl font-bold text-text-light leading-tight">
            Three disciplines,<br />one team.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 border border-white/[0.07] rounded-2xl overflow-hidden">
          {/* Tab list */}
          <div className="lg:col-span-2 border-b lg:border-b-0 lg:border-r border-white/[0.07]">
            {services.map((s) => (
              <button
                key={s.id}
                onClick={() => setActive(s.id)}
                className={`w-full text-left px-8 py-7 border-b border-white/[0.05] last:border-b-0 transition-all duration-300 group ${
                  active === s.id ? 'bg-white/[0.04]' : 'hover:bg-white/[0.02]'
                }`}
              >
                <div className="flex items-start gap-4">
                  <span className={`font-fraunces text-xs font-bold mt-1 transition-colors duration-300 ${active === s.id ? 'text-brand-orange' : 'text-white/20 group-hover:text-white/40'}`}>
                    {s.number}
                  </span>
                  <div>
                    <p className={`font-semibold text-sm transition-colors duration-300 ${active === s.id ? 'text-text-light' : 'text-text-muted group-hover:text-text-light'}`}>
                      {s.title}
                    </p>
                    <p className={`text-xs mt-1 transition-colors duration-300 ${active === s.id ? 'text-brand-orange' : 'text-white/20'}`}>
                      {s.tagline}
                    </p>
                  </div>
                  <div className={`ml-auto w-1 self-stretch rounded-full transition-all duration-300 ${active === s.id ? 'bg-brand-orange' : 'bg-transparent'}`} />
                </div>
              </button>
            ))}
          </div>

          {/* Panel */}
          <div className="lg:col-span-3 flex flex-col min-h-[360px]">
            {/* Image */}
            <div className="relative h-48 overflow-hidden border-b border-white/[0.07]">
              <img
                key={current.id}
                src={current.image}
                alt={current.title}
                className="w-full h-full object-cover transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-black/30 to-transparent" />
              <div className="absolute bottom-4 left-8">
                <p className="font-fraunces text-xl font-bold text-white">{current.title}</p>
              </div>
            </div>
            <div className="p-8 lg:p-10 flex flex-col justify-between flex-1">
              <div key={current.id + '-content'}>
                <p className="text-text-muted text-sm leading-relaxed mb-6">{current.description}</p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {current.tags.map((tag) => (
                    <span key={tag} className="text-xs px-3 py-1.5 rounded-full border border-white/10 text-text-muted hover:border-brand-orange/40 hover:text-text-light transition-all duration-200">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <Link
                to="/services"
                className="group inline-flex items-center gap-2 text-brand-orange text-sm font-medium"
              >
                Explore this service
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
