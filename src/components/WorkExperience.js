import React from 'react';
import './WorkExperience.css';
import './animations.css';
import { useIntersectionObserver } from './useIntersectionObserver';
import { EXPERIENCES } from '../data/experience';

function WorkExperience() {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section id="work-experience" ref={ref} className={`px-section story rv ${isVisible ? 'in' : ''}`}>
      <div className="px-wrap">
        <div className="px-title shadow-lav">THE STORY SO FAR</div>
        <div className="px-sub">&#9654; work &amp; everything between</div>

        <div className="tl-grid">
          {EXPERIENCES.map((e) => (
            <div key={e.org + e.role} className="pxlift tl-card" style={{ background: e.bg }}>
              <div className="tl-icon" aria-hidden="true">{e.icon}</div>
              <div className="tl-role">{e.role}</div>
              <div className="tl-org">@ {e.org}</div>
              <div className="tl-meta">{e.date} · {e.loc}</div>
              {e.bullets.length > 0 && (
                <ul className="tl-bullets">
                  {e.bullets.map((b, i) => <li key={i}>{b}</li>)}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WorkExperience;
