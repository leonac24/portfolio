import React, { forwardRef } from 'react';
import './About.css';
import './animations.css';
import { TypeAnimation } from 'react-type-animation';
import { useIntersectionObserver } from './useIntersectionObserver';

const About = forwardRef((props, ref) => {
  const [internalRef, isVisible] = useIntersectionObserver();

  // Combine the internal ref with the forwarded ref
  const setRefs = (node) => {
    internalRef.current = node;
    if (typeof ref === 'function') {
      ref(node);
    } else if (ref) {
      ref.current = node;
    }
  };

  return (
    <section id="about" ref={setRefs} className={`about-section fade-in ${isVisible ? 'visible' : ''}`}>
      <h2>
        <TypeAnimation
          sequence={[
            'My name is Leona Chen',
            1000,
            'My name is Leona Chen and I\'m a problem solver',
            2000,
            'My name is Leona Chen and I\'m an avid developer',
            2000,
            'My name is Leona Chen and I\'m a computer scientist',
            2000,
            'My name is Leona Chen and I\'m an AI enthusiast',
            2000,
            'My name is Leona Chen and I\'m a lifelong learner',
            2000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
        />
      </h2>
      <div className="profile-picture">
        <img src="/portfolio/profilepic.jpg" alt="Leona Chen" />
      </div>
      <div className="about-content">
        <div className="about-text">
          <p>
            Hi! My name is Leona and I'm a junior at Penn State majoring in Computer Science and minoring in Math!
            I'm looking to specialize in AI and machine learning engineering.
          </p>
        </div>
        <a href="/portfolio/Leona Chen Resume.pdf" download="Leona Chen Resume.pdf" className="resume-download-btn">
          Download Resume
        </a>
      </div>
    </section>
  );
});

export default About; 