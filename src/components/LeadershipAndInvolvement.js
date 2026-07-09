import React from 'react';
import './WorkExperience.css'; /* reuse the shared .tl-* pixel-card styles */
import './LeadershipAndInvolvement.css';
import './animations.css';
import { useIntersectionObserver } from './useIntersectionObserver';
import { INVOLVEMENTS } from '../data/involvement';

function LeadershipAndInvolvement() {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section id="leadership-involvement" ref={ref} className={`px-section beyond rv ${isVisible ? 'in' : ''}`}>
      <div className="px-wrap">
        <div className="px-title shadow-mint">BEYOND THE CODE</div>
        <div className="px-sub">&#9654; leadership, teams &amp; community</div>

        <div className="tl-grid">
          {INVOLVEMENTS.map((e) => (
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
              {e.gallery && e.gallery.length > 0 && (
                <div className="tl-gallery">
                  {e.gallery.map((g) => (
                    <figure key={g.src} className="tl-shot">
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

export default LeadershipAndInvolvement;
