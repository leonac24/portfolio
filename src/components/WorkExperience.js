import React from 'react';
import './WorkExperience.css';
import './animations.css';
import { useIntersectionObserver } from './useIntersectionObserver';

const EXPERIENCES = [
  {
    role: 'Software Engineering Intern · Fan Experience',
    org: 'GameChanger',
    date: 'Jun 2026 – Present',
    loc: 'New York, NY',
    icon: '⚾',
    bg: '#eafaf1',
    bullets: [
      'Developed a cross-platform SDUI home screen with a versioned API and resilient client handling.',
      'Built and maintained full-stack features across React/TypeScript frontends and backend API services.',
      'Cleaned up technical debt and maintained automated test coverage under strict lint and CI/CD standards.',
    ],
  },
  {
    role: 'Associate Application Developer Co-Op',
    org: 'IBM',
    date: 'Jan 2026 – May 2026',
    loc: 'State College, PA',
    icon: '💼',
    bg: '#fff0f5',
    bullets: [
      'Implemented custom enterprise MarTech solutions across Adobe Experience Platform, Marketo and Real-Time CDP.',
      'Translated client needs into scalable solutions with integrated cross-channel data and targeted campaigns.',
      'Collaborated with cross-functional consulting teams on marketing automation and performance optimization.',
    ],
  },
  {
    role: 'Research Intern',
    org: 'James Z. Wang Research Group',
    date: 'Jan 2025 – Present',
    loc: 'University Park, PA',
    icon: '🔬',
    bg: '#f1ecff',
    bullets: [
      'Generated thousands of large-scale AI prompts via APIs to study cultural influences on emotional expression.',
      'Managed high-throughput data pipelines producing extensive datasets for AI alignment analysis.',
      'Synthesized AI outputs to investigate cross-cultural variation in emotional expression.',
    ],
  },
  {
    role: 'AI / ML Instructor Assistant',
    org: 'Kode With Klossy',
    date: 'Mar 2025 – Aug 2025',
    loc: 'Remote',
    icon: '✨',
    bg: '#fff6d6',
    bullets: [
      'Taught ML fundamentals to 40 high-school students of underrepresented genders in tech.',
      'Covered supervised learning, image classification, sentiment analysis, neural nets, semantic search & RAG.',
      'Guided capstone deployment with Hugging Face, scikit-learn and TensorFlow.',
    ],
  },
  {
    role: 'CMPSC 132 Grader',
    org: 'Penn State EECS',
    date: 'Aug 2025 – Dec 2025',
    loc: 'Remote',
    icon: '📝',
    bg: '#fff0f5',
    bullets: [
      'Graded Data Structures assignments in Python for 200+ students with actionable feedback.',
      'Guided students through debugging and complex concepts to boost retention.',
    ],
  },
  {
    role: 'Technology Intern',
    org: 'Penn State Dept. of Mathematics',
    date: 'May 2025 – Present',
    loc: 'Remote',
    icon: '🧮',
    bg: '#eafaf1',
    bullets: [
      'Enhanced Matrices, Multivariable Calc & Differential Equations online Pressbooks.',
      'Updated digital textbooks to meet WCAG accessibility with closed captioning.',
      'Embedded interactive components with H5P and LaTeX-rendered equations.',
    ],
  },
  {
    role: 'International Student Services Assistant',
    org: 'Penn State Global',
    date: 'Sep 2024 – Present',
    loc: 'University Park, PA',
    icon: '🌏',
    bg: '#f1ecff',
    bullets: [
      'Supported 9,000+ international students and scholars at the front desk.',
      'Coordinated advisor appointments and handled emergencies.',
      'Used LLMs to organize common queries into an FAQ page for the Penn State Global site.',
    ],
  },
];

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
