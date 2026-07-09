import React from 'react';
import './Skills.css';
import './animations.css';
import { useIntersectionObserver } from './useIntersectionObserver';

const SKILLS = [
  'Java', 'Python', 'C', 'JavaScript', 'Swift', 'MATLAB', 'SQL', 'HTML/CSS',
  'LaTeX', 'React.js', 'NumPy', 'pandas', 'Tkinter', 'ChromaDB', 'p5.js',
  'Swing', 'JDBC', 'LangChain', 'TensorFlow',
];

function Skills() {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section id="skills" ref={ref} className={`px-section skills rv ${isVisible ? 'in' : ''}`}>
      <div className="skills-band">
        <div className="skills-badge" aria-hidden="true">TOOLS</div>
        <div className="px-wrap">
          <div className="px-eyebrow">&#9642; INVENTORY</div>
          <div className="skills-list">
            {SKILLS.map((s) => (
              <span key={s} className="chip skill-chip">{s}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
