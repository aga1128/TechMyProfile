import { useEffect, useRef, useState } from 'react';

const useIntersectionObserver = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const targetRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
      }
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