import React from 'react';

const items = [
  'Software Development',
  'Web Applications',
  'API Development',
  'Database Design',
  'Network Systems',
  'Wifi Setups',
  'Cloud Services',
  'Server Management',
  'Visual Effects & Media',
  'Motion Graphics',
  'Digital Marketting',
  'Brand Films',
];

export default function Marquee() {
  return (
    <div className="relative overflow-hidden border-y border-white/[0.05] bg-white/[0.015] py-4">
      <div className="flex gap-0 animate-marquee whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="inline-flex items-center gap-4 px-6 text-sm font-medium text-text-muted uppercase tracking-widest">
            <span className="w-1 h-1 rounded-full bg-brand-orange shrink-0" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
