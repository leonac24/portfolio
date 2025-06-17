import React from 'react';
import './Dog.css';
import './animations.css';
import { useIntersectionObserver } from './useIntersectionObserver';

function Dog() {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section id="dog" ref={ref} className={`dog-section fade-in ${isVisible ? 'visible' : ''}`}>
      <div className="dog-content">
        <h2>Dog</h2>
        <img src="/portfolio/banjo.jpeg" alt="Banjo the dog" className="dog-photo" />
        
        <p>This is my dog! His name is Banjo</p>
      </div>
    </section>
  );
}

export default Dog; 