import React from 'react';
import './Contact.css';
import './animations.css';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import { useIntersectionObserver } from './useIntersectionObserver';

const Contact = () => {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section id="contact" ref={ref} className={`contact-section fade-in ${isVisible ? 'visible' : ''}`}>
      <div className="contact-content">
        <div className="contact-info">
          <h2>Contact</h2>
          <p>Feel free to reach out to me through any of these channels:</p>
          <div className="contact-links">
            <a href="mailto:leonachen24@gmail.com" className="contact-link highlight-link">
              <FaEnvelope className="contact-icon" />
              Email
            </a>
            <a href="https://linkedin.com/in/leona-chen" target="_blank" rel="noopener noreferrer" className="contact-link highlight-link">
              <FaLinkedin className="contact-icon" />
              LinkedIn
            </a>
            <a href="https://github.com/leonac24" target="_blank" rel="noopener noreferrer" className="contact-link highlight-link">
              <FaGithub className="contact-icon" />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 