import { useEffect, useRef, useState } from 'react';

const useIntersectionObserver = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const targetRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-70px',
      threshold: 0.5
    }
    if(window.innerWidth < 1024) {
      observerOptions.rootMargin = '-20px',
      observerOptions.threshold = 0.3
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      observerOptions
    );

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, []);

  return { isVisible, targetRef };
};

export default useIntersectionObserver;