import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/services.css';

const Services = () => {
  const heroRef = useRef(null);
  const scrollIndicatorRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);
  const [activeCard, setActiveCard] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Card data for the Philosophy section
  const philosophyCards = [
    { 
      title: 'Software & Systems Development', 
      subtitle: 'Foundation Layer',
      desc: 'Custom websites, mobile apps, enterprise systems, server configurations, and networking infrastructure.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=700&q=80',
      icon: (
        <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
        </svg>
      ),
      gradient: 'from-blue-500/10 to-cyan-500/5',
      border: 'border-blue-500/20',
      accent: '#3b82f6',
      transform: 'rotate-1 -translate-x-4 translate-y-2 lg:rotate-2 lg:-translate-x-8 lg:translate-y-4',
      zIndex: 'z-10',
      layer: '01',
      detailedDesc: 'We develop custom websites, mobile applications, enterprise systems, and handle complete IT infrastructure including server configurations, networking services, WiFi installations, hotspot setups, and security camera systems. Our hosting solutions ensure your digital presence is always available and secure.'
    },
    { 
      title: 'Information Management & Infrastructure', 
      subtitle: 'Intelligence Layer',
      desc: 'Database systems, cloud hosting, network security, and intelligent data processing solutions.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&q=80',
      icon: (
        <svg className="w-6 h-6 text-[#004D66]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
        </svg>
      ),
      gradient: 'from-[#004D66]/10 to-[#004D66]/5',
      border: 'border-[#004D66]/20',
      accent: '#004D66',
      transform: 'rotate-0 translate-x-0 translate-y-0',
      zIndex: 'z-20',
      layer: '02',
      detailedDesc: 'We design and implement comprehensive data management systems, cloud hosting solutions, network security protocols, and intelligent processing pipelines. Our infrastructure services include server management, database optimization, and scalable hosting platforms that grow with your business.'
    },
    { 
      title: 'Visual Effects & Content Creation', 
      subtitle: 'Experience Layer',
      desc: 'Motion graphics, video production, static design, VFX, video editing, and comprehensive content creation.',
      image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=700&q=80',
      icon: (
        <svg className="w-6 h-6 text-[#F26622]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
        </svg>
      ),
      gradient: 'from-[#F26622]/10 to-orange-400/5',
      border: 'border-[#F26622]/20',
      accent: '#F26622',
      transform: '-rotate-1 translate-x-4 -translate-y-2 lg:-rotate-2 lg:translate-x-8 lg:-translate-y-4',
      zIndex: 'z-30',
      layer: '03',
      detailedDesc: 'We create compelling visual content including motion graphics, static designs, professional video shooting and editing, visual effects, and comprehensive content creation strategies. Our media production services cover everything from concept development to final delivery across all digital platforms.'
    }
  ];

  useEffect(() => {
    // Enhanced scroll effects
    const handleScroll = () => {
      const scrolled = window.scrollY;
      setScrollY(scrolled);
      
      if (scrollIndicatorRef.current) {
        scrollIndicatorRef.current.style.transform = `translateY(${scrolled * -0.5}px)`;
        scrollIndicatorRef.current.style.opacity = Math.max(0, 1 - scrolled / 500);
      }

      // Parallax effects for background elements
      document.documentElement.style.setProperty('--scroll-y', `${scrolled * -0.3}px`);
    };

    // Auto-rotate cards every 4 seconds (pause on hover)
    const cardRotationInterval = setInterval(() => {
      if (!isPaused) {
        setActiveCard(prev => (prev + 1) % 3);
      }
    }, 4000);

    // Enhanced Intersection Observer
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          
          // Add stagger effect for children
          const children = entry.target.querySelectorAll('.stagger-child');
          children.forEach((child, index) => {
            setTimeout(() => {
              child.classList.add('animate-in');
            }, index * 100);
          });
        }
      });
    }, observerOptions);

    // Observe elements
    const animateElements = document.querySelectorAll('.animate-on-scroll, .animate-on-scroll-left, .animate-on-scroll-zoom, .animate-section');
    animateElements.forEach(el => observer.observe(el));

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
      clearInterval(cardRotationInterval);
    };
  }, [isPaused]);

  return (
    <div className="bg-[#0a0a0a] text-white overflow-hidden">
      {/* Modern Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
        {/* Enhanced background layers with code image */}
        <div className="absolute inset-0">
          {/* Code background image positioned to the right */}
          <img
            src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1600&q=80"
            alt=""
            className="w-full h-full object-cover object-[75%_center] opacity-[0.6]"
          />
          {/* Mobile gradient - uniform coverage */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/90 via-[#0a0a0a]/70 to-[#0a0a0a]/50 lg:hidden" />
          
          {/* Desktop gradient - strong fade on left, clear on right */}
          <div className="absolute inset-0 hidden lg:block bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/95 via-[#0a0a0a]/70 via-[#0a0a0a]/40 via-[#0a0a0a]/20 to-transparent" />
          <div className="absolute inset-0 hidden lg:block bg-gradient-to-t from-[#0a0a0a]/80 via-transparent to-[#0a0a0a]/10" />
        </div>

        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(242,102,34,0.15),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(0,77,102,0.1),transparent_50%)]" />
        </div>

        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:100px_100px]" />
        </div>

        {/* Floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/[0.08] rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/[0.06] rounded-full blur-[100px] animate-pulse" style={{animationDelay: '2s'}} />

        <div className="max-w-7xl mx-auto px-6 relative z-10 py-20 w-full">
          {/* Hero content - full width */}
          <div className="text-center lg:text-left max-w-5xl mx-auto lg:mx-0">
            {/* Main heading */}
            <h1 className="font-fraunces font-bold leading-[0.9] tracking-tight mb-8">
              <span className="block text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white mb-2">
                We Don't Just
              </span>
              <span className="block text-4xl sm:text-5xl lg:text-6xl xl:text-7xl bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-400 bg-clip-text text-transparent mb-2">
                Build Software.
              </span>
              <span className="block text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white mb-2">
                We Engineer
              </span>
              <span className="block text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-gray-400">
                Experiences.
              </span>
            </h1>
            
            <p className="text-lg text-gray-400 mt-8 max-w-3xl mx-auto lg:mx-0 leading-relaxed">
              From intelligent systems to immersive visuals — we craft digital solutions that don't just work, they inspire and transform.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mt-8 justify-center lg:justify-start items-center lg:items-start">
              <Link
                to="/contact"
                className="group relative px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-black rounded-xl font-semibold text-sm transition-all duration-300 hover:shadow-[0_0_50px_rgba(242,102,34,0.5)] hover:scale-105"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Start Your Project
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
              
              <Link
                to="/portfolio"
                className="group relative px-6 py-3 border-2 border-white/20 text-white rounded-xl font-medium text-sm transition-all duration-300 hover:border-orange-500/50 hover:bg-white/5 backdrop-blur-sm"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  View Our Work
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </span>
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-8 max-w-2xl mx-auto lg:mx-0">
              {[
                ['3', 'Core Disciplines', 'Software, IMS & VFX'],
                ['50+', 'Projects Delivered', 'Across multiple industries'], 
                ['100%', 'Custom Solutions', 'Tailored to your needs']
              ].map(([num, label, desc]) => (
                <div key={label} className="text-center lg:text-left group">
                  <div className="text-3xl font-fraunces font-bold bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">{num}</div>
                  <div className="text-white text-sm font-medium mt-2">{label}</div>
                  <div className="text-gray-500 text-xs mt-1">{desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Premium Philosophy Section */}
      <section className="px-6 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80"
            alt=""
            className="w-full h-full object-cover opacity-[0.60]"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a]/60 via-[#0f0f0f]/50 to-[#0a0a0a]/60" />
        </div>
        
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(242,102,34,0.06),transparent_70%)]" />
        
        {/* Subtle geometric patterns */}
        <div className="absolute inset-0 opacity-[0.015]">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,#ffffff_1px,transparent_1px),linear-gradient(-45deg,#ffffff_1px,transparent_1px)] bg-[size:80px_80px]" />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10 py-20">
          {/* Top Section: Cards + Header Side by Side */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-12 lg:mb-20">
            
            {/* Left: Professional Layered Stack */}
            <div 
              className="relative order-2 lg:order-1"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div className="relative h-[400px] lg:h-[520px] flex items-center justify-center">
                {philosophyCards.map((item, index) => (
                  <div 
                    key={item.title} 
                    className={`group absolute transition-all duration-1000 cursor-pointer ${
                      index === activeCard 
                        ? 'z-40 scale-110 rotate-0 translate-x-0 translate-y-0 w-72 h-80 lg:w-80 lg:h-96' 
                        : `${item.transform} ${item.zIndex} hover:scale-105 hover:rotate-0 hover:translate-x-0 hover:translate-y-0 hover:z-40 w-72 h-80 lg:w-80 lg:h-96`
                    }`}
                    onMouseEnter={() => setActiveCard(index)}
                  >
                    <div className={`relative w-full h-full overflow-hidden rounded-2xl bg-black/80 border backdrop-blur-sm shadow-[0_25px_80px_rgba(0,0,0,0.25)] transition-all duration-1000 ${
                      index === activeCard 
                        ? `${item.border} border-opacity-60` 
                        : `${item.border} group-hover:border-opacity-40`
                    }`}>
                      
                      {/* Subtle background pattern */}
                      <div className="absolute inset-0 opacity-[0.03]">
                        <div className="absolute inset-0 bg-[linear-gradient(45deg,#ffffff_1px,transparent_1px),linear-gradient(-45deg,#ffffff_1px,transparent_1px)] bg-[size:20px_20px]" />
                      </div>
                      
                      {/* Header */}
                      <div className="absolute top-0 left-0 right-0 p-5 bg-gradient-to-b from-black/20 to-transparent">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            {item.icon}
                            <div className="text-xs font-medium text-gray-400 uppercase tracking-wider">
                              {item.subtitle}
                            </div>
                          </div>
                          <div className="w-7 h-7 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                            <span className="text-white font-semibold text-xs">{item.layer}</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="relative z-10 p-5 pt-16 h-full flex flex-col justify-between">
                        {/* Background image positioned behind text */}
                        <div className="absolute inset-x-5 bottom-5 top-20">
                          <img 
                            src={item.image} 
                            alt={item.title}
                            className="w-full h-full object-cover opacity-50"
                          />
                          {/* Multi-directional gradient fade for seamless blending */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/70" />
                          <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />
                          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black" />
                        </div>

                        <div className="relative z-20">
                          <h3 className={`text-xl font-fraunces font-bold mb-3 leading-tight transition-colors duration-1000 ${
                            index === activeCard 
                              ? 'text-orange-400' 
                              : 'text-white group-hover:text-orange-400'
                          }`}>
                            {item.title}
                          </h3>
                          <p className={`leading-relaxed text-sm transition-colors duration-1000 ${
                            index === activeCard 
                              ? 'text-white' 
                              : 'text-gray-300 group-hover:text-white'
                          }`}>
                            {item.desc}
                          </p>
                        </div>
                        
                        {/* Footer */}
                        <div className="pt-4 border-t border-white/10">
                          <div className={`transition-opacity duration-1000 ${
                            index === activeCard 
                              ? 'opacity-100' 
                              : 'opacity-0 group-hover:opacity-100'
                          }`}>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2 text-orange-400 text-xs font-medium">
                                <span>Explore</span>
                                <svg className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Subtle gradient accent */}
                      <div 
                        className={`absolute inset-0 rounded-2xl transition-opacity duration-1000 ${
                          index === activeCard 
                            ? 'opacity-20' 
                            : 'opacity-10 group-hover:opacity-15'
                        }`}
                        style={{
                          background: `linear-gradient(135deg, ${item.accent}15, transparent 60%)`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Progress Indicators */}
              <div className="flex justify-center items-center gap-2 lg:gap-3 mt-6 lg:mt-8">
                {/* Auto-rotation indicator */}
                <div className={`w-1.5 h-1.5 lg:w-2 lg:h-2 mr-1 lg:mr-2 transition-all duration-300 ${
                  isPaused ? 'opacity-30' : 'opacity-100'
                }`}>
                  <div className={`w-full h-full border border-orange-500/50 rounded-full ${
                    isPaused ? '' : 'animate-spin'
                  }`} style={{animationDuration: '4s'}} />
                </div>
                
                {[0, 1, 2].map((index) => (
                  <button
                    key={index}
                    onClick={() => setActiveCard(index)}
                    className={`w-2.5 h-2.5 lg:w-3 lg:h-3 rounded-full transition-all duration-500 ${
                      index === activeCard 
                        ? 'bg-orange-500 scale-125' 
                        : 'bg-white/20 hover:bg-white/40'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Right: Section Header */}
            <div className="text-center lg:text-left order-1 lg:order-2 px-4 lg:px-0">
              <div className="inline-flex items-center gap-2 lg:gap-4 mb-6 lg:mb-8">
                <div className="w-8 lg:w-12 h-px bg-gradient-to-r from-transparent via-orange-500/60 to-orange-500/80" />
                <div className="relative">
                  <div className="absolute -inset-2 bg-gradient-to-r from-orange-500/20 to-transparent rounded-full blur opacity-50" />
                  <span className="relative text-orange-500 text-xs lg:text-sm font-semibold tracking-[0.2em] lg:tracking-[0.3em] uppercase bg-[#0a0a0a] px-3 lg:px-4 py-1.5 lg:py-2 rounded-full border border-orange-500/20">
                    Our Philosophy
                  </span>
                </div>
                <div className="w-8 lg:w-12 h-px bg-gradient-to-l from-transparent via-orange-500/60 to-orange-500/80" />
              </div>
              
              <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-fraunces font-bold mb-6 lg:mb-8 leading-[0.9]">
                <span className="block text-white">Three disciplines.</span>
                <span className="block text-transparent bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-400 bg-clip-text mt-1 lg:mt-2">One execution layer.</span>
              </h2>
              
              <p className="text-base lg:text-lg text-gray-300 leading-relaxed mb-6 lg:mb-8 max-w-lg mx-auto lg:mx-0">
                We don't compartmentalize creativity. Our integrated approach ensures every project benefits from the full spectrum of our expertise.
              </p>

              {/* Dynamic content based on active card */}
              <div className="space-y-4 lg:space-y-6 max-w-lg mx-auto lg:mx-0">
                <div className="flex items-center justify-center lg:justify-start gap-3 mb-3 lg:mb-4">
                  <div className="flex items-center gap-2">
                    {philosophyCards[activeCard].icon}
                    <span className="text-xs lg:text-sm font-medium text-gray-400 uppercase tracking-wider">
                      {philosophyCards[activeCard].subtitle}
                    </span>
                  </div>
                  <div className="w-5 h-5 lg:w-6 lg:h-6 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                    <span className="text-white font-semibold text-xs">{philosophyCards[activeCard].layer}</span>
                  </div>
                </div>
                
                <h3 className="text-xl lg:text-2xl font-fraunces font-bold text-white mb-3 lg:mb-4 transition-all duration-500">
                  {philosophyCards[activeCard].title}
                </h3>
                
                <p className="text-sm lg:text-base text-gray-300 leading-relaxed transition-all duration-500">
                  {philosophyCards[activeCard].detailedDesc}
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Section: Detailed Content */}
          <div className="max-w-4xl mx-auto px-4 lg:px-0">
            <div className="space-y-6 lg:space-y-8">
              <div>
                <h3 className="text-xl md:text-2xl lg:text-3xl font-fraunces font-bold text-white leading-tight text-center lg:text-left">
                  Integrated by Design,
                  <span className="block text-orange-500">Executed as One.</span>
                </h3>
                
                <p className="text-gray-300 leading-relaxed text-base lg:text-lg mt-3 lg:mt-4 text-center lg:text-left">
                  Our three-layer approach isn't just organizational — it's strategic. Each discipline informs and enhances the others, creating solutions that are greater than the sum of their parts.
                </p>
              </div>

              {/* Key Benefits */}
              <div className="space-y-4 lg:space-y-6">
                <h4 className="text-lg lg:text-xl font-fraunces font-bold text-white text-center lg:text-left">Why Integration Matters</h4>
                
                <div className="space-y-3 lg:space-y-4">
                  {[
                    {
                      title: 'Complete Digital Solutions',
                      desc: 'From custom web development and mobile apps to network infrastructure and security camera installations - we handle your entire digital ecosystem.',
                      icon: '🎯'
                    },
                    {
                      title: 'Integrated Infrastructure',
                      desc: 'Server configurations, hosting solutions, WiFi setups, and networking services work seamlessly with your custom applications and content.',
                      icon: '⚡'
                    },
                    {
                      title: 'Professional Media Production',
                      desc: 'Video shooting, editing, motion graphics, and VFX services designed to work perfectly with your technical platforms and data systems.',
                      icon: '🚀'
                    }
                  ].map((benefit, index) => (
                    <div key={benefit.title} className="flex gap-3 lg:gap-4 p-3 lg:p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.03] transition-colors duration-300">
                      <div className="text-xl lg:text-2xl flex-shrink-0">{benefit.icon}</div>
                      <div>
                        <h5 className="text-white font-semibold mb-1 lg:mb-2 text-sm lg:text-base">{benefit.title}</h5>
                        <p className="text-gray-400 text-xs lg:text-sm leading-relaxed">{benefit.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Process Flow */}
              <div className="space-y-4 lg:space-y-6">
                <h4 className="text-lg lg:text-xl font-fraunces font-bold text-white text-center lg:text-left">Our Process</h4>
                
                <div className="space-y-2 lg:space-y-3">
                  {[
                    { step: '01', title: 'Requirements & Infrastructure Planning', desc: 'Analyzing your needs for websites, apps, networking, hosting, and media production' },
                    { step: '02', title: 'Integrated System Design', desc: 'Planning server configurations, database architecture, network setup, and content strategy together' },
                    { step: '03', title: 'Parallel Implementation', desc: 'Simultaneous development of applications, infrastructure setup, camera installations, and content creation' },
                    { step: '04', title: 'Complete Solution Delivery', desc: 'Fully integrated system with hosting, networking, applications, and professional media content' }
                  ].map((process, index) => (
                    <div key={process.step} className="flex items-start gap-3 lg:gap-4">
                      <div className="w-7 h-7 lg:w-8 lg:h-8 rounded-full bg-gradient-to-br from-orange-500/20 to-orange-600/20 border border-orange-500/30 flex items-center justify-center flex-shrink-0 mt-0.5 lg:mt-1">
                        <span className="text-orange-400 font-bold text-xs">{process.step}</span>
                      </div>
                      <div>
                        <h5 className="text-white font-semibold text-xs lg:text-sm mb-0.5 lg:mb-1">{process.title}</h5>
                        <p className="text-gray-400 text-xs leading-relaxed">{process.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="pt-4 lg:pt-6 text-center lg:text-left">
                <Link 
                  to="/contact"
                  className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-black rounded-xl font-semibold text-sm transition-all duration-300 hover:shadow-[0_0_40px_rgba(242,102,34,0.4)] hover:scale-105"
                >
                  Start Your Integrated Project
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>

              {/* Integration Flow Visualization */}
              <div className="pt-6 lg:pt-8 border-t border-white/10">
                <div className="flex justify-center items-center gap-2 lg:gap-4 opacity-80 px-4">
                  <span className="text-gray-400 text-xs lg:text-sm whitespace-nowrap">Development</span>
                  <div className="w-6 lg:w-12 h-px bg-white/30 flex-shrink-0" />
                  <span className="text-gray-400 text-xs lg:text-sm whitespace-nowrap">Infrastructure</span>
                  <div className="w-6 lg:w-12 h-px bg-white/30 flex-shrink-0" />
                  <span className="text-gray-400 text-xs lg:text-sm whitespace-nowrap">Media</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;