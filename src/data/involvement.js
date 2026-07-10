import {
  FaLaptopCode,
  FaUsers,
  FaChartBar,
  FaCog,
  FaGlobeAsia,
} from 'react-icons/fa';

// Timeline cards for the "BEYOND THE CODE" (leadership & involvement) section.
export const INVOLVEMENTS = [
  {
    role: 'Student Engineer / Designer',
    org: 'National University of Singapore · Engineering Design Study Abroad',
    date: 'May 2026',
    loc: 'Singapore',
    icon: <FaGlobeAsia />,
    bg: '#f1ecff',
    bullets: [
      'Designed BlisterEase, a lever-based device that opens blister-pack medication with a single palm press — no pinching or fine motor control required.',
      'Grounded every decision in user research: interviews with arthritis & Parkinson’s patients, amputees and ICU nurses.',
      'Took the concept from ideation to CAD to a 3D-printed prototype in under two weeks with a BYU, Penn State & NUS team.',
    ],
    gallery: [
      { src: '/gallery/nus-team-prototype.jpg', alt: 'The Summers by Design team holding the BlisterEase prototype', cap: 'team & prototype ✦' },
      { src: '/gallery/blisterease-prototype.jpg', alt: 'The BlisterEase assistive device 3D-printed prototype', cap: 'BlisterEase 💊' },
      { src: '/gallery/nus-engineering.jpg', alt: 'The team at the NUS Design & Engineering sign', cap: 'NUS Design & Engineering ✦' },
    ],
  },
  {
    role: 'Front-End Developer / Technology Organizer',
    org: 'HackPSU',
    date: 'Sep 2025 – Present',
    loc: 'University Park, PA',
    icon: <FaLaptopCode />,
    bg: '#fff0f5',
    bullets: [
      'Built & maintained software for 900+ participants at Penn State’s largest hackathon.',
      'Shipped front-end features and API integrations with design and back-end teams.',
      'Streamlined workflows through testing, debugging and iterative CI/CD improvements.',
    ],
    gallery: [
      { src: '/gallery/hackpsu-team.jpg', alt: 'The HackPSU organizing team', cap: 'the HackPSU team ✦' },
      { src: '/gallery/hackpsu-donut-run.jpg', alt: 'HackPSU team on a donut run', cap: 'team donut run 🍩' },
    ],
  },
  {
    role: 'Loop Founder & Co-President · 2024 Leadership Council',
    org: 'Girls Who Code',
    date: 'Jun 2024 – Present',
    loc: 'University Park, PA',
    icon: <FaUsers />,
    bg: '#eafaf1',
    bullets: [
      'Led a team of 17 to host educational and professional events for Penn State’s chapter.',
      'Co-wrote a strategic proposal with the national Student Leadership Council.',
    ],
    gallery: [
      { src: '/gallery/gwc-kpmg-event.jpg', alt: 'Girls Who Code @ Penn State KPMG collaboration event', cap: 'KPMG event ✦' },
      { src: '/gallery/gwc-club-meeting.jpg', alt: 'Girls Who Code @ Penn State club meeting', cap: 'club meeting ✦' },
    ],
  },
  {
    role: 'Associate Consultant',
    org: 'Nittany Lion Consulting Group',
    date: 'Nov 2024 – May 2025',
    loc: 'University Park, PA',
    icon: <FaChartBar />,
    bg: '#f1ecff',
    bullets: [
      'Delivered solutions for concrete-3D-printing startup X-Hab 3D.',
      'Ran market research, competitor analysis and stakeholder interviews.',
    ],
    gallery: [
      { src: '/gallery/nlcg-org.jpg', alt: 'Nittany Lion Consulting Group organization photo', cap: 'the org ✦' },
      { src: '/gallery/nlcg-dinner.jpg', alt: 'Nittany Lion Consulting Group team dinner', cap: 'team dinner ✦' },
      { src: '/gallery/nlcg-bonding.jpg', alt: 'Nittany Lion Consulting Group team bonding event', cap: 'team bonding ✦' },
    ],
  },
  {
    role: 'Exec. Director of Finance & Pittsburgh Regional Director',
    org: 'Steel City Codes',
    date: 'May 2023 – Jun 2024',
    loc: 'Pittsburgh, PA',
    icon: <FaCog />,
    bg: '#fff0f5',
    bullets: [
      'Wrote grants supporting nationwide CS-education & diversity programs.',
      'Taught Python & Java summer camps reaching 200+ students and volunteers.',
      'Coordinated 17 after-school chapters across Greater Pittsburgh.',
    ],
  },
];
