import React from 'react';
import {
  FaGlobe,
  FaMedal,
  FaTshirt,
  FaGamepad,
  FaChartBar,
} from 'react-icons/fa';
import './Projects.css';
import './animations.css';
import { useIntersectionObserver } from './useIntersectionObserver';

const PROJECTS = [
  {
    name: 'Rethread',
    award: <>— N.A. Finalist @ Google Solution Challenge <FaGlobe style={{ verticalAlign: '-0.12em' }} /></>,
    desc: 'Full-stack fashion-sustainability app in Next.js integrating 6 external APIs across a parallel server-side AI pipeline. Built a serverless REST API with async fan-out, in-memory caching and rate limiting across 9 endpoints, plus Firebase (Google OAuth + Firestore atomic batch writes) for user-stat aggregation.',
    tags: ['Next.js', 'React', 'Firebase', 'Tailwind'],
    link: 'https://rethread.studio/',
    cover: <FaTshirt />,
    coverBg: 'linear-gradient(135deg,#8fe0b0,#c9b8ff)',
    tape: 'var(--yellow)',
    rot: '-1.5deg',
  },
  {
    name: 'Pixel Truth',
    award: <>— Honorable Mention @ LA Hacks <FaMedal style={{ verticalAlign: '-0.12em' }} /></>,
    desc: 'Roblox game in Luau with an event-driven client–server architecture, state synchronization and modular backend logic. Designed a dialogue/scoring engine with dynamic UI driven by server-side events and shared data modules — shipped end to end in 36 hours.',
    tags: ['Luau', 'Roblox Studio'],
    link: 'https://devpost.com/software/pixel-truth',
    cover: <FaGamepad />,
    coverBg: 'linear-gradient(135deg,#ff2e74,#ff9dbf)',
    tape: 'var(--mint)',
    rot: '1.5deg',
  },
  {
    name: 'AI Enterprise Readiness Advisor',
    award: '',
    desc: 'React + Vite app using the Google Gemini API to process multi-step inputs and return real-time analysis. Engineered structured prompt chaining to parse freeform client profiles into strict JSON, then rendered scoring dashboards and transformation roadmaps with Recharts.',
    tags: ['React', 'Vite', 'JavaScript', 'Gemini API', 'Recharts'],
    link: 'https://github.com/leonac24/enterprise-ai-readiness-advisor',
    cover: <FaChartBar />,
    coverBg: 'linear-gradient(135deg,#c9b8ff,#8fe0b0)',
    tape: 'var(--lav)',
    rot: '-1deg',
  },
];

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
