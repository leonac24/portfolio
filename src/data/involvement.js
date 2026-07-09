import {
  FaLaptopCode,
  FaUsers,
  FaChartBar,
  FaSeedling,
  FaCog,
} from 'react-icons/fa';

// Timeline cards for the "BEYOND THE CODE" (leadership & involvement) section.
export const INVOLVEMENTS = [
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
      { src: '/portfolio/gallery/hackpsu-team.jpg', alt: 'The HackPSU organizing team', cap: 'the HackPSU team ✦' },
      { src: '/portfolio/gallery/hackpsu-donut-run.jpg', alt: 'HackPSU team on a donut run', cap: 'team donut run 🍩' },
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
      { src: '/portfolio/gallery/gwc-kpmg.jpg', alt: 'Girls Who Code @ Penn State club meeting in collaboration with KPMG', cap: 'club meeting x KPMG ✦' },
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
  },
  {
    role: 'Mentee',
    org: 'PSU Women in Engineering Program',
    date: 'Aug 2024 – Present',
    loc: 'University Park, PA',
    icon: <FaSeedling />,
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
    icon: <FaCog />,
    bg: '#fff0f5',
    bullets: [
      'Wrote grants supporting nationwide CS-education & diversity programs.',
      'Taught Python & Java summer camps reaching 200+ students and volunteers.',
      'Coordinated 17 after-school chapters across Greater Pittsburgh.',
    ],
  },
];
