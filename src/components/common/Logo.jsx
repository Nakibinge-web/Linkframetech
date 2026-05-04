import React from 'react';

const Logo = ({ className = "w-8 h-8" }) => {
  return (
    <img 
      src="/images/linkframe.png" 
      alt="Linkframe Technologies Logo" 
      className={className}
    />
  );
};

export default Logo;