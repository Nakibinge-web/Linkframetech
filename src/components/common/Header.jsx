import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'Team', path: '/team' },
];

const allLinks = [...navLinks, { label: 'Contact', path: '/contact' }];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close drawer on route change
  useEffect(() => setMenuOpen(false), [location]);

  return (
    <>
      <header className={`fixed mb-10 top-0 left-0 right-0 z-50 w-full px-4 sm:px-6 lg:px-8 py-3.5 transition-all duration-500 ${
          scrolled
            ? 'bg-white/[0.04] backdrop-blur-2xl shadow-[0_4px_24px_rgba(0,0,0,0.4)]'
            : 'bg-transparent'
        }`}>
        <div className="max-w-8xl mx-auto">
          {/* Mobile: flex layout, Desktop: 3-col grid */}
          <div className="flex md:grid md:grid-cols-[1fr_auto_1fr] items-center justify-between md:gap-6">

            {/* Logo — left */}
            <Link to="/" className="md:ml-[90px] flex items-center gap-2.5 group md:justify-self-start">
              <Logo className="w-8 h-8 transition-transform duration-300 group-hover:scale-110" />
              <span className="font-fraunces font-semibold text-text-light text-base tracking-tight">
                Linkframe<span className="text-brand-orange">.</span>
              </span>
            </Link>

            {/* Nav — truly centered */}
            <nav className="hidden md:flex items-center gap-1  rounded-2xl px-3 py-2.5 min-w-[680px] justify-center">
              {navLinks.map(({ label, path }) => {
                const active = location.pathname === path;
                return (
                  <Link
                    key={path}
                    to={path}
                    className={`relative px-6 py-2 rounded-xl text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                      active
                        ? 'text-white bg-white/[0.09] shadow-sm'
                        : 'text-text-muted hover:text-text-light hover:bg-white/[0.05]'
                    }`}
                  >
                    {active && (
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-brand-orange" />
                    )}
                    <span className={active ? 'pl-2' : ''}>{label}</span>
                  </Link>
                );
              })}
            </nav>

            {/* Right — CTA + mobile toggle */}
            <div className="flex items-center gap-3 md:justify-self-end md:mr-[90px]">
              <Link
                to="/contact"
                className="hidden md:inline-flex items-center gap-1.5 bg-brand-orange text-white text-sm font-medium px-4 py-2 rounded-xl transition-all duration-300 hover:shadow-[0_0_22px_rgba(242,102,34,0.4)] hover:scale-[1.03] active:scale-[0.98] group"
              >
                Get Started
                <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>

              {/* Mobile hamburger */}
              <button
                className="md:hidden relative w-9 h-9 flex items-center justify-center transition-colors duration-200"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
              >
                <span className={`absolute block h-[1.5px] bg-text-light transition-all duration-300 origin-center ${menuOpen ? 'rotate-45' : '-translate-y-[5px]'}`} style={{ width: '18px' }} />
                <span className={`absolute block h-[1.5px] bg-text-light transition-all duration-300 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} style={{ width: '18px' }} />
                <span className={`absolute block h-[1.5px] bg-text-light transition-all duration-300 origin-center ${menuOpen ? '-rotate-45' : 'translate-y-[5px]'}`} style={{ width: '18px' }} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile dropdown menu */}
      <div
        className={`fixed top-0 left-0 right-0 bottom-0 z-40 md:hidden transition-all duration-500 ease-out ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setMenuOpen(false)} />

        {/* Dropdown panel — slides from top */}
        <div
          className={`relative w-full bg-[#0d0d0d]/95 backdrop-blur-xl border-b border-white/[0.07] flex flex-col transition-all duration-700 ease-out transform shadow-2xl ${
            menuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
          }`}
        >
          {/* Nav links - no header with logo */}
          <nav className="flex flex-col gap-1 px-6 py-8 pt-20">
            {allLinks.map(({ label, path }, i) => {
              const active = location.pathname === path;
              return (
                <Link
                  key={path}
                  to={path}
                  className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-xs font-medium transition-all duration-300 transform ${
                    active
                      ? 'text-white bg-white/[0.07] border border-white/[0.08]'
                      : 'text-text-muted hover:text-text-light hover:bg-white/[0.04] hover:scale-105'
                  } ${menuOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}
                  style={{ 
                    transitionDelay: menuOpen ? `${(i + 1) * 100}ms` : '0ms',
                    animationDelay: menuOpen ? `${(i + 1) * 100}ms` : '0ms'
                  }}
                  onClick={() => setMenuOpen(false)}
                >
                  {active && <span className="w-1 h-1 rounded-full bg-brand-orange shrink-0" />}
                  <span>{label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Footer CTA */}
          <div className={`px-6 pb-8 transition-all duration-500 transform ${
            menuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`} style={{ transitionDelay: menuOpen ? '600ms' : '0ms' }}>
            <Link
              to="/contact"
              className="flex items-center justify-center gap-2 w-full bg-brand-orange text-white text-xs font-medium py-3 rounded-xl transition-all duration-300 hover:shadow-[0_0_20px_rgba(242,102,34,0.35)] active:scale-[0.98] group"
              onClick={() => setMenuOpen(false)}
            >
              Start a Project
              <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <p className={`text-center text-text-muted text-[10px] mt-2.5 transition-all duration-300 ${
              menuOpen ? 'opacity-100' : 'opacity-0'
            }`} style={{ transitionDelay: menuOpen ? '800ms' : '0ms' }}>
              hello@linkframe.tech
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
