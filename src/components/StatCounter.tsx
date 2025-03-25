
import React, { useState, useEffect, useRef } from 'react';

interface StatCounterProps {
  endValue: number;
  label: string;
  duration?: number;
  symbol?: string;
}

const StatCounter: React.FC<StatCounterProps> = ({ 
  endValue, 
  label, 
  duration = 2000,
  symbol = ""
}) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          
          const start = 0;
          const end = endValue;
          const increment = end / (duration / 16); // 60fps approx
          const startTime = performance.now();
          
          const updateCount = (currentTime: number) => {
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1);
            const currentCount = Math.floor(progress * (end - start) + start);
            
            setCount(currentCount);
            
            if (progress < 1) {
              requestAnimationFrame(updateCount);
            }
          };
          
          requestAnimationFrame(updateCount);
        }
      },
      { threshold: 0.1 }
    );
    
    if (countRef.current) {
      observer.observe(countRef.current);
    }
    
    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
    };
  }, [endValue, duration, hasAnimated]);
  
  return (
    <div ref={countRef} className="text-center p-4">
      <div className="text-4xl md:text-5xl font-serif text-herb-700 font-bold mb-2">
        {count}{symbol}
      </div>
      <div className="text-lg text-charcoal-600">{label}</div>
    </div>
  );
};

export default StatCounter;
