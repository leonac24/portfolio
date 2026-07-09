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
            <div
              key={p.name}
              className="pxlift project-card"
              style={{ transform: `rotate(${p.rot})` }}
            >
              <a
                href={p.link}
                target={p.link.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="project-link"
                aria-label={`${p.name} — view project`}
              />
              <span className="project-tape" style={{ background: p.tape }} />
              <div className="project-cover" style={{ background: p.coverBg }}>
                {p.image ? (
                  <img className="project-cover-img" src={p.image} alt={`${p.name} preview`} loading="lazy" />
                ) : (
                  <span aria-hidden="true">{p.cover}</span>
                )}
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
              {p.news && (
                <a
                  className="project-news"
                  href={p.news.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  &#9654; {p.news.label}
                </a>
              )}
              {p.gallery && p.gallery.length > 0 && (
                <div className="project-gallery">
                  {p.gallery.map((g) => (
                    <figure key={g.src} className="project-shot">
                      <span className="tape tape-mint" aria-hidden="true" />
                      <img src={g.src} alt={g.alt} loading="lazy" />
                      <figcaption>{g.cap}</figcaption>
                    </figure>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
