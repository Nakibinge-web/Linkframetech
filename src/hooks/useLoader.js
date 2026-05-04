import { useState, useEffect } from 'react';

export const useLoader = (minLoadTime = 2000) => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const startTime = Date.now();
    
    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + Math.random() * 15 + 5;
        return newProgress >= 100 ? 100 : newProgress;
      });
    }, 200);

    // Ensure minimum load time
    const minTimeTimeout = setTimeout(() => {
      const elapsedTime = Date.now() - startTime;
      if (elapsedTime >= minLoadTime) {
        setIsLoading(false);
      }
    }, minLoadTime);

    // Cleanup
    return () => {
      clearInterval(progressInterval);
      clearTimeout(minTimeTimeout);
    };
  }, [minLoadTime]);

  const completeLoading = () => {
    setProgress(100);
    setTimeout(() => setIsLoading(false), 500);
  };

  return {
    isLoading,
    progress,
    completeLoading
  };
};

export default useLoader;