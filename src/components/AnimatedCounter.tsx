import React, { useState, useEffect, useRef, useCallback } from 'react';

interface AnimatedCounterProps {
  targetValue: string;
  duration?: number;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ 
  targetValue, 
  duration = 2000 
}) => {
  const [currentValue, setCurrentValue] = useState(0);
  const counterRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();
  const hasAnimatedRef = useRef(false);

  // Extract numeric value and suffix from targetValue
  const numericValue = parseInt(targetValue.replace(/\D/g, ''));
  const suffix = targetValue.replace(/\d/g, '');

  // Easing function for smooth animation
  const easeOutQuart = (t: number): number => {
    return 1 - Math.pow(1 - t, 4);
  };

  // Animation function wrapped in useCallback for stability
  const animateCounter = useCallback(() => {
    const startTime = Date.now();
    const startValue = 0;

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Apply easing function for smooth animation
      const easedProgress = easeOutQuart(progress);
      const current = Math.floor(startValue + (numericValue - startValue) * easedProgress);
      
      setCurrentValue(current);

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };

    animationRef.current = requestAnimationFrame(animate);
  }, [numericValue, duration]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimatedRef.current) {
          hasAnimatedRef.current = true;
          animateCounter();
          // Stop observing after animation starts
          if (counterRef.current) {
            observer.unobserve(counterRef.current);
          }
        }
      },
      { threshold: 0.5 }
    );

    const currentRef = counterRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [animateCounter]);

  return (
    <div 
      ref={counterRef}
      className="text-4xl md:text-5xl font-bold text-amber-600 mb-2"
    >
      {currentValue}{suffix}
    </div>
  );
};

export default AnimatedCounter;