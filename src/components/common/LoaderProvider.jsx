import React, { createContext, useContext, useState, useEffect } from 'react';
import Loader from './Loader';

const LoaderContext = createContext();

export const useLoaderContext = () => {
  const context = useContext(LoaderContext);
  if (!context) {
    throw new Error('useLoaderContext must be used within a LoaderProvider');
  }
  return context;
};

export const LoaderProvider = ({ children, minLoadTime = 3000 }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if this is the first visit
    const hasVisited = sessionStorage.getItem('hasVisited');
    
    if (hasVisited) {
      // Skip loader for subsequent page visits in the same session
      setIsLoading(false);
      return;
    }

    // First visit - show loader for minimum time
    const timer = setTimeout(() => {
      setIsLoading(false);
      sessionStorage.setItem('hasVisited', 'true');
    }, minLoadTime);

    return () => clearTimeout(timer);
  }, [minLoadTime]);

  const showLoader = () => setIsLoading(true);
  const hideLoader = () => setIsLoading(false);

  const handleLoaderComplete = () => {
    setIsLoading(false);
    sessionStorage.setItem('hasVisited', 'true');
  };

  return (
    <LoaderContext.Provider value={{ isLoading, showLoader, hideLoader }}>
      {isLoading ? (
        <Loader onComplete={handleLoaderComplete} />
      ) : (
        children
      )}
    </LoaderContext.Provider>
  );
};

export default LoaderProvider;