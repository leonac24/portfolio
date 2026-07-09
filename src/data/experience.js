import {
  FaBaseballBall,
  FaBriefcase,
  FaMicroscope,
  FaChalkboardTeacher,
  FaClipboardCheck,
} from 'react-icons/fa';

// Timeline cards for the "THE STORY SO FAR" (work) section.
export const EXPERIENCES = [
  {
    role: 'Software Engineering Intern · Fan Experience',
    org: 'GameChanger',
    date: 'Jun 2026 – Present',
    loc: 'New York, NY',
    icon: <FaBaseballBall />,
    bg: '#eafaf1',
    bullets: [
      'Developed a cross-platform SDUI home screen with a versioned API and resilient client handling.',
      'Built and maintained full-stack features across React/TypeScript frontends and backend API services.',
      'Cleaned up technical debt and maintained automated test coverage under strict lint and CI/CD standards.',
    ],
    gallery: [
      { src: '/portfolio/gallery/gc-interns.jpg', alt: 'The 2026 GameChanger intern class', cap: 'the whole intern squad ✦' },
      { src: '/portfolio/gallery/gc-linkedin.jpg', alt: 'Visiting LinkedIn HQ, sponsored by GameChanger', cap: 'GC-sponsored trip to LinkedIn HQ' },
      { src: '/portfolio/gallery/gc-lunch-sameer.jpg', alt: 'Lunch with GameChanger president Sameer Ahuja', cap: 'lunch with president Sameer Ahuja' },
    ],
  },
  {
    role: 'Associate Application Developer Co-Op',
    org: 'IBM',
    date: 'Jan 2026 – May 2026',
    loc: 'State College, PA',
    icon: <FaBriefcase />,
    bg: '#fff0f5',
    bullets: [
      'Implemented custom enterprise MarTech solutions across Adobe Experience Platform, Marketo and Real-Time CDP.',
      'Translated client needs into scalable solutions with integrated cross-channel data and targeted campaigns.',
      'Collaborated with cross-functional consulting teams on marketing automation and performance optimization.',
    ],
    gallery: [
      { src: '/portfolio/gallery/ibm-goodie-box.jpg', alt: 'IBM onboarding welcome box with branded goodies', cap: 'IBM welcome goodie box ✦' },
      { src: '/portfolio/gallery/ibm-dinner.jpg', alt: 'Dinner with IBM executives and co-interns', cap: 'dinner with execs & co-interns' },
    ],
  },
  {
    role: 'Research Intern',
    org: 'James Z. Wang Research Group',
    date: 'Jan 2025 – Present',
    loc: 'University Park, PA',
    icon: <FaMicroscope />,
    bg: '#f1ecff',
    bullets: [
      'Generated thousands of large-scale AI prompts via APIs to study cultural influences on emotional expression.',
      'Managed high-throughput data pipelines producing extensive datasets for AI alignment analysis.',
      'Synthesized AI outputs to investigate cross-cultural variation in emotional expression.',
    ],
    gallery: [
      { src: '/portfolio/gallery/wang-lab-members.jpg', alt: 'The James Z. Wang Research Group lab members', cap: 'the lab ✦' },
    ],
  },
  {
    role: 'AI / ML Instructor Assistant',
    org: 'Kode With Klossy',
    date: 'Mar 2025 – Aug 2025',
    loc: 'Remote',
    icon: <FaChalkboardTeacher />,
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
    icon: <FaClipboardCheck />,
    bg: '#fff0f5',
    bullets: [
      'Graded Data Structures assignments in Python for 200+ students with actionable feedback.',
      'Guided students through debugging and complex concepts to boost retention.',
    ],
  },
];
