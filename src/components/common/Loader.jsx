import React, { useEffect } from 'react';
import Logo from './Logo';

const Loader = ({ onComplete }) => {
  useEffect(() => {
    // Simple timer without progress tracking
    const timer = setTimeout(() => {
      if (onComplete) onComplete();
    }, 2500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0a0a0a]">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#0f0f0f] to-[#0a0a0a]" />
      
      {/* Animated orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/[0.08] rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/[0.06] rounded-full blur-[100px] animate-pulse" />

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Logo with rotating ring */}
        <div className="relative mb-8">
          {/* Rotating ring */}
          <div className="absolute inset-0 w-24 h-24 -m-4 rounded-full border-2 border-transparent border-t-orange-500/40 animate-spin" />
          
          {/* Logo */}
          <div className="relative">
            <Logo className="w-16 h-16 drop-shadow-2xl animate-pulse" />
            <div className="absolute inset-0 w-16 h-16 bg-orange-500/20 rounded-full blur-xl animate-pulse" />
          </div>
        </div>

        {/* Just the brand name */}
        <div className="text-center">
          <h2 className="text-white text-xl font-fraunces font-bold">
            Linkframe<span className="text-orange-500">.</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Loader;