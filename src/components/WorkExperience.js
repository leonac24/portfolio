import React, { useRef, useEffect, useState } from 'react';
import './WorkExperience.css';
import './animations.css';
import { useIntersectionObserver } from './useIntersectionObserver';

function WorkExperience() {
  const [ref, isVisible] = useIntersectionObserver();
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let rafId = null;

    const getCards = () => Array.from(el.querySelectorAll('.experience-card'));

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
    const realIndex = index + experiences.length;
    const cards = Array.from(el.querySelectorAll('.experience-card'));
    if (!cards[realIndex]) return;
    const targetCard = cards[realIndex];
    const targetLeft = targetCard.offsetLeft + targetCard.offsetWidth / 2 - el.clientWidth / 2;
    el.scrollTo({ left: targetLeft, behavior: 'smooth' });
  };

  const handleNext = () => {
    const el = containerRef.current;
    if (!el) return;
    const cards = Array.from(el.querySelectorAll('.experience-card'));
    const totalCards = experiences.length;
    
    let activeIndex = cards.findIndex(c => c.classList.contains('active'));
    if (activeIndex === -1) activeIndex = totalCards;
    
    const targetCard = cards[activeIndex + 1];
    if (!targetCard) return;
    
    const targetLeft = targetCard.offsetLeft + targetCard.offsetWidth / 2 - el.clientWidth / 2;
    el.scrollTo({ left: targetLeft, behavior: 'smooth' });
    
    setTimeout(() => {
      const newActive = cards.findIndex(c => c.classList.contains('active'));
      if (newActive >= totalCards * 2) {
        const jumpTo = cards[totalCards];
        el.scrollTo({ left: jumpTo.offsetLeft + jumpTo.offsetWidth / 2 - el.clientWidth / 2, behavior: 'auto' });
      }
    }, 400);
  };

  const handlePrev = () => {
    const el = containerRef.current;
    if (!el) return;
    const cards = Array.from(el.querySelectorAll('.experience-card'));
    const totalCards = experiences.length;
    
    let activeIndex = cards.findIndex(c => c.classList.contains('active'));
    if (activeIndex === -1) activeIndex = totalCards;
    
    const targetCard = cards[activeIndex - 1];
    if (!targetCard) return;
    
    const targetLeft = targetCard.offsetLeft + targetCard.offsetWidth / 2 - el.clientWidth / 2;
    el.scrollTo({ left: targetLeft, behavior: 'smooth' });
    
    setTimeout(() => {
      const newActive = cards.findIndex(c => c.classList.contains('active'));
      if (newActive < totalCards) {
        const jumpTo = cards[totalCards * 2 - 1];
        el.scrollTo({ left: jumpTo.offsetLeft + jumpTo.offsetWidth / 2 - el.clientWidth / 2, behavior: 'auto' });
      }
    }, 400);
  };

  const experiences = [
    {
      title: 'Incoming Associate Application Developer Co-Op',
      company: 'IBM',
      location: 'State College, PA',
      years: 'January 2026 - May 2026',
      description: [
        'Adobe Experience Platform Specialist / Engineer / Consultant',
      ],
    },
    {
      title: 'Incoming Software Engineering Intern',
      company: 'PNC Financial Services',
      location: 'Pittsburgh, PA',
      years: 'June 2026 - August 2026',
      description: [],
    },
    {
      title: 'Research Intern',
      company: 'James Z. Wang Research Group',
      location: 'University Park, PA',
      years: 'January 2025 - Present',
      description: [
        'Generated thousands of large-scale AI prompts via APIs to study cultural influences on emotional expression',
        'Managed high-throughput data pipelines producing extensive datasets for AI alignment analysis',
        'Synthesized AI outputs to investigate cross-cultural variations in emotional expression and inform alignment research',
      ],
    },
    {
      title: 'Artificial Intelligence/Machine Learning Instructor Assistant',
      company: 'Kode With Klossy',
      location: 'Remote',
      years: 'March 2025 - August 2025',
      description: [
        'Taught basic machine learning principles to 40 high school students of underrepresented genders in technology',
        'Instructed on supervised learning, image classification, sentiment analysis, neural networks, semantic search, and RAG',
        'Guided students through deploying capstone projects using tools including Hugging Face, scikit-learn, and TensorFlow',
      ],
    },
    {
      title: 'CMPSC 132 Grader',
      company: 'Penn State School of Electrical Engineering and Computer Science',
      location: 'Remote',
      years: 'August 2025 - December 2025',
      description: [
        'Graded Data Structures assignments in Python for over 200 students and provided actionable feedback',
        'Guided students through debugging and complex concepts, enhancing understanding and retention',
        'Collaborated with instructors to refine grading rubrics, streamline workflows, and maintain high-quality course delivery',
      ],
    },

    {
      title: 'Technology Intern',
      company: 'Penn State Department of Mathematics',
      location: 'Remote',
      years: 'May 2025 - Present',
      description: [
        'Enhanced Matrices, Multivariable Calculus, and Ordinary and Partial Differential Equations online Pressbooks',
        'Updated digital textbooks to comply with Web Content Accessibility Guidelines by integrating closed captioning',
        'Embedded interactive learning components using H5P and LaTeX-rendered equations',
      ],
    },
    {
      title: 'International Student Services Assistant',
      company: 'Penn State Global',
      location: 'University Park, PA',
      years: 'September 2024 - Present',
      description: [
        'Provided front-desk assistance to Penn State\'s over 9,000 international students and scholars',
        'Worked closely with International Student Advisors to coordinate appointments and handle emergencies',
        'Utilized LLMs to filter and organize common student queries into an FAQ page for Penn State Global\'s website',
      ],
    },
  ];

  const allExperiences = [...experiences, ...experiences, ...experiences];

  return (
    <section id="work-experience" ref={ref} className={`work-experience-section fade-in ${isVisible ? 'visible' : ''}`}>
      <h2>Work Experience</h2>

      <div className="work-carousel">
        <button
          className="carousel-control prev"
          aria-label="Previous experience"
          onClick={handlePrev}
        >
          ‹
        </button>

        <div
          className="experiences-container"
          ref={containerRef}
        >
          {allExperiences.map((exp, index) => (
            <div 
              key={index} 
              className="experience-card"
            >
              <h3>{exp.title} @ {exp.company}</h3>
              <p className="experience-years">{exp.years}</p>
              <p className="experience-location">{exp.location}</p>
              <ul className="experience-description">
                {exp.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <button
          className="carousel-control next"
          aria-label="Next experience"
          onClick={handleNext}
        >
          ›
        </button>
      </div>

      <div className="carousel-indicators">
        {experiences.map((_, index) => (
          <button
            key={index}
            className={`indicator-button ${activeIndex % experiences.length === index ? 'active' : ''}`}
            onClick={() => scrollToCard(index)}
            aria-label={`Go to experience ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

export default WorkExperience; 