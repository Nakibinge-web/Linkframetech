import React from 'react';
import { Link } from 'react-router-dom';

export default function Button({ children, to, href, variant = 'primary', className = '', onClick, ...props }) {
  const base = 'inline-flex items-center justify-center gap-2 font-medium transition-all duration-300 rounded-lg text-sm px-6 py-3';
  const variants = {
    primary: 'bg-brand-orange text-white hover:bg-opacity-90 hover:scale-105 hover:shadow-lg hover:shadow-brand-orange/20',
    secondary: 'border border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white',
    ghost: 'text-text-muted hover:text-text-light',
  };
  const cls = `${base} ${variants[variant]} ${className}`;

  if (to) return <Link to={to} className={cls} {...props}>{children}</Link>;
  if (href) return <a href={href} className={cls} target="_blank" rel="noreferrer" {...props}>{children}</a>;
  return <button className={cls} onClick={onClick} {...props}>{children}</button>;
}
