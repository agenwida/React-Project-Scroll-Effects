import { useEffect, useRef } from 'react';

const useScrollReveal = () => {
  const ref = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: [0, 0.25, 0.5, 0.75, 1],
      rootMargin: '-10% 0px -10% 0px'
    };

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        const ratio = entry.intersectionRatio;
        entry.target.style.opacity = ratio;
        entry.target.style.transform = `translateY(${(1 - ratio) * 50}px)`;
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    
    if (ref.current) {
      const textElements = ref.current.querySelectorAll('.scroll-reveal-item');
      textElements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  return ref;
};

export default useScrollReveal;