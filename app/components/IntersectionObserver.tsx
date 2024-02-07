"use client"
import React from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const InterSectionObserver = ({ children }: { children: React.ReactNode }) => {
  const { isVisible, targetRef } = useIntersectionObserver();

  return (
    <div ref={ targetRef } className={ isVisible ? 'opacity-1 transition-all duration-700 ease-out' : 'opacity-0 transition-all duration-700 ease-out' }>
      {children}
    </div>
  );
};

export default InterSectionObserver;