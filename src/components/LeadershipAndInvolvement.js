import React from 'react';
import './WorkExperience.css'; /* reuse the shared .tl-* pixel-card styles */
import './LeadershipAndInvolvement.css';
import './animations.css';
import { useIntersectionObserver } from './useIntersectionObserver';

const INVOLVEMENTS = [
  {
    role: 'Front-End Developer / Technology Organizer',
    org: 'HackPSU',
    date: 'Sep 2025 – Present',
    loc: 'University Park, PA',
    icon: '💻',
    bg: '#fff0f5',
    bullets: [
      'Built & maintained software for 900+ participants at Penn State’s largest hackathon.',
      'Shipped front-end features and API integrations with design and back-end teams.',
    ],
  },
  {
    role: 'Loop Founder & Co-President · 2024 Leadership Council',
    org: 'Girls Who Code',
    date: 'Jun 2024 – Present',
    loc: 'University Park, PA',
    icon: '👩‍💻',
    bg: '#eafaf1',
    bullets: [
      'Led a team of 17 to host educational and professional events for Penn State’s chapter.',
      'Co-wrote a strategic proposal with the national Student Leadership Council.',
    ],
  },
  {
    role: 'Associate Consultant',
    org: 'Nittany Lion Consulting Group',
    date: 'Nov 2024 – May 2025',
    loc: 'University Park, PA',
    icon: '📊',
    bg: '#f1ecff',
    bullets: [
      'Delivered solutions for concrete-3D-printing startup X-Hab 3D.',
      'Ran market research, competitor analysis and stakeholder interviews.',
    ],
  },
  {
    role: 'Mentee',
    org: 'PSU Women in Engineering Program',
    date: 'Aug 2024 – Present',
    loc: 'University Park, PA',
    icon: '🌱',
    bg: '#fff6d6',
    bullets: [
      'Completed a four-day orientation for first-year engineering students.',
      'Attended facilitated CS study groups and weekly career sessions.',
    ],
  },
  {
    role: 'Exec. Director of Finance & Pittsburgh Regional Director',
    org: 'Steel City Codes',
    date: 'May 2023 – Jun 2024',
    loc: 'Pittsburgh, PA',
    icon: '⚙️',
    bg: '#fff0f5',
    bullets: [
      'Wrote grants supporting nationwide CS-education & diversity programs.',
      'Taught Python & Java summer camps reaching 200+ students and volunteers.',
      'Coordinated 17 after-school chapters across Greater Pittsburgh.',
    ],
  },
];

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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LeadershipAndInvolvement;
