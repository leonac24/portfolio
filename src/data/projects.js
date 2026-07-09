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
    image: '/portfolio/rethread.png',
    gallery: [
      { src: '/portfolio/gallery/rethread-demo.jpg', alt: 'Demoing Rethread to judges', cap: 'demoing to the judges ✦' },
      { src: '/portfolio/gallery/rethread-closet.jpg', alt: 'Rethread closet dashboard showing a scanned garment and sustainability stats', cap: 'the closet dashboard ✦' },
      { src: '/portfolio/gallery/rethread-team.jpg', alt: 'The Rethread team', cap: 'the team ✦' },
    ],
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
    news: {
      label: 'Featured in Penn State News',
      href: 'https://www.psu.edu/news/engineering/story/engineering-undergrads-win-award-roblox-media-literacy-game-la-hacks',
    },
    cover: <FaGamepad />,
    image: '/portfolio/pixel-truth.png',
    gallery: [
      { src: '/portfolio/gallery/pixel-truth-gameplay.png', alt: 'Pixel Truth gameplay', cap: 'gameplay ✦' },
      { src: '/portfolio/gallery/lahacks-team.png', alt: 'The Pixel Truth team at LA Hacks 2026', cap: 'the team @ LA Hacks 2026 ✦' },
    ],
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
    image: '/portfolio/ai-readiness-advisor.png',
    coverBg: 'linear-gradient(135deg,#c9b8ff,#8fe0b0)',
    tape: 'var(--lav)',
    rot: '-1deg',
  },
];
