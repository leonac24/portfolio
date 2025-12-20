import React, { useRef, useEffect, useState } from 'react';
import './LeadershipAndInvolvement.css';
import './animations.css';
import { useIntersectionObserver } from './useIntersectionObserver';

function LeadershipAndInvolvement() {
  const [ref, isVisible] = useIntersectionObserver();
  const [activeIndex, setActiveIndex] = useState(0);

  const involvements = [
    {
      title: 'Front-End Developer/Technology Organizer',
      company: 'HackPSU',
      location: 'University Park, PA',
      years: 'September 2025 - Present',
      description: [
        'Developed and maintained software for over 900 participants and internal organizers at Penn State\'s largest hackathon',
        'Implemented front-end features and API integrations in collaboration with design and back-end teams',
        'Streamlined project workflows through testing, debugging, and iterative improvements using Git version control',
      ],
    },
    {
      title: 'College Loop Founder & Co-President, 2024 Student Leadership Council Member',
      company: 'Girls Who Code',
      location: 'University Park, PA',
      years: 'June 2024 - Present',
      description: [
        'Led team of 17 to host educational and professional events through Penn State\'s chapter of national Girls Who Code',
        'Spearheaded strategic planning to set Loop goals, expand outreach, and create opportunities for Penn State\'s community',
        'Collaborated with national Student Leadership Council to write strategic proposal for future Girls Who Code programs',
      ],
    },
    {
      title: 'Associate Consultant',
      company: 'Nittany Lion Consulting Group',
      location: 'University Park, PA',
      years: 'November 2024 - May 2025',
      description: [
        'Collaborated with team and company executives to deliver solutions for client concrete 3D printing startup X-Hab 3D',
        'Conducted market research, analyzed competitors, interviewed critical stakeholders, evaluated business model',
        'Coordinated cross-functional team efforts, ensuring timely project deliverables and alignment with client objectives',
      ],
    },
    {
      title: 'Mentee',
      company: 'Penn State Women in Engineering Program',
      location: 'University Park, PA',
      years: 'August 2024 - Present',
      description: [
        'Participated in a four-day orientation program for first-year engineering students',
        'Attended facilitated study groups for computer science courses to strengthen understanding of material',
        'Engaged in \'WEP Wednesday\' sessions throughout the year to explore academic and career resources',
      ],
    },
    {
      title: 'Executive Director of Finance & Pittsburgh Regional Director',
      company: 'Steel City Codes',
      location: 'Pittsburgh, PA',
      years: 'May 2023 - June 2024',
      description: [
        'Wrote grant applications to support nationwide computer science education/diversity programs and hackathons',
        'Organized and taught Python and Java computer science summer camp reaching 200+ students and volunteers',
        'Managed and coordinated 17 after-school chapters throughout the Greater Pittsburgh region',
      ],
    },
  ];

  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let rafId = null;

    const getCards = () => Array.from(el.querySelectorAll('.involvement-card'));

    function updateActive() {
      const center = el.scrollLeft + el.clientWidth / 2;
      const cards = getCards();
      let min = Infinity;
      let active = null;

      cards.forEach((card) => {
        const cardCenter = card.offsetLeft + card.offsetWidth / 2;
        const dist = Math.abs(cardCenter - center);
        if (dist < min) {
          min = dist;
          active = card;
        }
      });

      cards.forEach((card) => card.classList.toggle('active', card === active));

      // Update active index for indicator buttons
      if (active) {
        const index = cards.indexOf(active);
        setActiveIndex(index);
      }
    }

    function onScroll() {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(updateActive);
    }

    el.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    // initial
    updateActive();

    return () => {
      el.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [setActiveIndex]);

  const scrollToCard = (index) => {
    const el = containerRef.current;
    if (!el) return;
    const cards = Array.from(el.querySelectorAll('.involvement-card'));
    if (!cards[index]) return;
    const targetCard = cards[index];
    const targetLeft = targetCard.offsetLeft + targetCard.offsetWidth / 2 - el.clientWidth / 2;
    el.scrollTo({ left: targetLeft, behavior: 'smooth' });
  };

  return (
    <section id="leadership-involvement" ref={ref} className={`leadership-involvement-section fade-in ${isVisible ? 'visible' : ''}`}>
      <h2>Leadership & Involvement</h2>

      <div className="work-carousel">
        <button
          className="carousel-control prev"
          aria-label="Previous involvement"
          onClick={() => {
            const el = containerRef.current;
            if (!el) return;
            const cards = Array.from(el.querySelectorAll('.involvement-card'));
            if (!cards.length) return;

            let activeIndex = cards.findIndex(c => c.classList.contains('active'));
            if (activeIndex === -1) {
              const center = el.scrollLeft + el.clientWidth / 2;
              let min = Infinity;
              cards.forEach((card, i) => {
                const cardCenter = card.offsetLeft + card.offsetWidth / 2;
                const dist = Math.abs(cardCenter - center);
                if (dist < min) { min = dist; activeIndex = i; }
              });
            }

            const targetIndex = Math.max(0, activeIndex - 1);
            const targetCard = cards[targetIndex];
            const targetLeft = targetCard.offsetLeft + targetCard.offsetWidth / 2 - el.clientWidth / 2;
            el.scrollTo({ left: targetLeft, behavior: 'smooth' });
          }}
        >
          ‹
        </button>

        <div className="involvements-container" ref={containerRef}>
          {involvements.map((inv, index) => (
            <div 
              key={index} 
              className="involvement-card"
              onClick={() => scrollToCard(index)}
            >
              <h3>{inv.title} @ {inv.company}</h3>
              <p className="involvement-years">{inv.years}</p>
              <p className="involvement-location">{inv.location}</p>
              <ul className="involvement-description">
                {inv.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <button
          className="carousel-control next"
          aria-label="Next involvement"
          onClick={() => {
            const el = containerRef.current;
            if (!el) return;
            const cards = Array.from(el.querySelectorAll('.involvement-card'));
            if (!cards.length) return;

            let activeIndex = cards.findIndex(c => c.classList.contains('active'));
            if (activeIndex === -1) {
              const center = el.scrollLeft + el.clientWidth / 2;
              let min = Infinity;
              cards.forEach((card, i) => {
                const cardCenter = card.offsetLeft + card.offsetWidth / 2;
                const dist = Math.abs(cardCenter - center);
                if (dist < min) { min = dist; activeIndex = i; }
              });
            }

            const targetIndex = Math.min(cards.length - 1, activeIndex + 1);
            const targetCard = cards[targetIndex];
            const targetLeft = targetCard.offsetLeft + targetCard.offsetWidth / 2 - el.clientWidth / 2;
            el.scrollTo({ left: targetLeft, behavior: 'smooth' });
          }}
        >
          ›
        </button>
      </div>

      <div className="carousel-indicators">
        {involvements.map((_, index) => (
          <button
            key={index}
            className={`indicator-button ${activeIndex === index ? 'active' : ''}`}
            onClick={() => scrollToCard(index)}
            aria-label={`Go to involvement ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

export default LeadershipAndInvolvement; 