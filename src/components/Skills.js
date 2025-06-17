import React from 'react';
import './Skills.css';
import './animations.css';
import { useIntersectionObserver } from './useIntersectionObserver';

function Skills() {
  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '0px'
  });

  const skills = [
    'Java',
    'Python',
    'C',
    'Javascript',
    'Swift',
    'MATLAB',
    'SQL',
    'HTML/CSS',
    'LaTeX',
    'React.js',
    'NumPy',
    'pandas',
    'Tkinter',
    'ChromA',
    'p5.js',
    'Swing',
    'JDBC',
    'LangChain',
    'TensorFlow',
  ];

  return (
    <section id="skills" ref={ref} className={`skills-section fade-in ${isVisible ? 'visible' : ''}`}>
      <h2>Skills</h2>
      <div className="skills-container">
        <ul className="skills-list">
          {skills.map((skill, index) => (
            <li key={index} className="skill-item">
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Skills;