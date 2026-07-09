import {
  FaGlobe,
  FaMedal,
  FaTshirt,
  FaGamepad,
  FaChartBar,
} from 'react-icons/fa';

// Cards for the "THINGS I MADE" section.
export const PROJECTS = [
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
