import React from 'react';
import Logo from './Logo';

const PageLoader = ({ isVisible = true }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-[#0a0a0a]/90 backdrop-blur-sm">
      {/* Simplified loader for page transitions */}
      <div className="relative flex flex-col items-center">
        {/* Logo with rotation */}
        <div className="relative mb-4">
          {/* Single rotating ring */}
          <div className="absolute inset-0 w-20 h-20 -m-2 rounded-full border-2 border-transparent border-t-orange-500/40 animate-spin" />
          
          {/* Logo */}
          <div className="relative animate-pulse">
            <Logo className="w-16 h-16 drop-shadow-xl" />
            <div className="absolute inset-0 w-16 h-16 bg-orange-500/20 rounded-full blur-lg animate-pulse" />
          </div>
        </div>

        {/* Simple loading text */}
        <div className="text-center">
          <div className="flex items-center gap-1">
            <span className="text-gray-400 text-sm">Loading</span>
            <div className="flex gap-1">
              <div className="w-1 h-1 bg-orange-500 rounded-full animate-bounce" style={{animationDelay: '0ms'}} />
              <div className="w-1 h-1 bg-orange-500 rounded-full animate-bounce" style={{animationDelay: '150ms'}} />
              <div className="w-1 h-1 bg-orange-500 rounded-full animate-bounce" style={{animationDelay: '300ms'}} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageLoader;