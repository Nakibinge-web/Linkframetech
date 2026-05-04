import React, { useState, useEffect } from 'react';

const SequentialTypewriter = ({ 
  words = [], 
  finalContent = null,
  className = '',
  speed = 100,
  pauseBetweenWords = 1000,
  pauseBeforeClear = 800,
  pauseBeforeRestart = 3000,
  loop = false,
  onComplete = () => {}
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [completedWords, setCompletedWords] = useState([]);
  const [showFinalContent, setShowFinalContent] = useState(false);
  const [isClearing, setIsClearing] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (showFinalContent) {
        // If looping, restart after showing final content
        if (loop) {
          setTimeout(() => {
            setShowFinalContent(false);
            setIsTransitioning(false);
            setIsClearing(false);
            setCurrentWordIndex(0);
            setCurrentText('');
            setCompletedWords([]);
          }, pauseBeforeRestart);
        }
        return;
      }

      if (isClearing) {
        // Start transition effect
        setIsTransitioning(true);
        
        // Clear all words and show final content after transition
        setTimeout(() => {
          setCompletedWords([]);
          setCurrentText('');
          setShowFinalContent(true);
          console.log('Final content should now show');
          onComplete();
        }, 300);
        return;
      }

      if (currentWordIndex >= words.length) {
        // All words completed, wait then clear
        setTimeout(() => {
          setIsClearing(true);
        }, pauseBeforeClear);
        return;
      }

      const currentWord = words[currentWordIndex];
      
      if (currentText.length < currentWord.length) {
        // Continue typing current word
        setCurrentText(currentWord.substring(0, currentText.length + 1));
      } else {
        // Current word complete, move to next
        setCompletedWords(prev => [...prev, { text: currentWord, index: currentWordIndex }]);
        setCurrentText('');
        setCurrentWordIndex(prev => prev + 1);
      }
    }, currentText.length < words[currentWordIndex]?.length ? speed : pauseBetweenWords);

    return () => clearTimeout(timeout);
  }, [currentText, currentWordIndex, words, speed, pauseBetweenWords, pauseBeforeClear, pauseBeforeRestart, showFinalContent, isClearing, loop, onComplete]);

  if (showFinalContent && finalContent) {
    return (
      <div className={className} style={{ 
        opacity: 1, 
        transform: 'translateY(0px)',
        transition: 'all 0.7s ease-out'
      }}>
        {finalContent}
      </div>
    );
  }

  return (
    <div className={className}>
      <div className={`transition-all duration-300 ${isTransitioning ? 'opacity-0 scale-95 translate-y-2' : 'opacity-100 scale-100 translate-y-0'}`}>
        {completedWords.map((word, index) => (
          <div key={index} className={getWordClassName(word.index)}>
            {word.text}
          </div>
        ))}
        {currentWordIndex < words.length && (
          <div className={getWordClassName(currentWordIndex)}>
            {currentText}
            <span className="animate-pulse">|</span>
          </div>
        )}
      </div>
    </div>
  );
};

const getWordClassName = (index) => {
  const baseClasses = "block text-[clamp(3.5rem,9vw,8rem)]";
  switch (index) {
    case 0:
      return `${baseClasses}`;
    case 1:
      return `${baseClasses} text-brand-orange lg:pl-[5vw]`;
    case 2:
      return `${baseClasses} text-text-light/35 lg:pl-[10vw]`;
    default:
      return baseClasses;
  }
};

export default SequentialTypewriter;