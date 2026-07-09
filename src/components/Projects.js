import React from 'react';
import './Projects.css';
import './animations.css';
import { useIntersectionObserver } from './useIntersectionObserver';
import { PROJECTS } from '../data/projects';

function Projects() {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section id="projects" ref={ref} className={`px-section projects rv ${isVisible ? 'in' : ''}`}>
      <div className="px-wrap">
        <div className="px-title shadow-yellow">THINGS I MADE</div>
        <div className="projects-grid">
          {PROJECTS.map((p) => (
            <a
              key={p.name}
              href={p.link}
              target={p.link.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="pxlift project-card"
              style={{ transform: `rotate(${p.rot})` }}
            >
              <span className="project-tape" style={{ background: p.tape }} />
              <div className="project-cover" style={{ background: p.coverBg }}>
                <span aria-hidden="true">{p.cover}</span>
              </div>
              <div className="project-head">
                <span className="project-name">{p.name}</span>
                {p.award && <span className="project-award">{p.award}</span>}
              </div>
              <p className="project-desc">{p.desc}</p>
              <div className="project-tags">
                {p.tags.map((t) => (
                  <span key={t} className="project-tag">{t}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
