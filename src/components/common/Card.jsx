import React from 'react';

export default function Card({ children, className = '', hover = true }) {
  return (
    <div
      className={`bg-white/[0.03] border border-white/[0.07] rounded-2xl p-6 ${
        hover
          ? 'transition-all duration-300 ease-out hover:border-brand-orange/30 hover:bg-white/[0.05] hover:-translate-y-[2px] hover:scale-[1.02] hover:shadow-xl hover:shadow-black/20'
          : ''
      } ${className}`}
    >
      {children}
    </div>
  );
}
