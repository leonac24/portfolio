import React from 'react';
import './WorkExperience.css';
import './animations.css';
import { useIntersectionObserver } from './useIntersectionObserver';

function WorkExperience() {
  const [ref, isVisible] = useIntersectionObserver();

  const experiences = [
    {
      title: 'Technology Intern',
      company: 'Penn State Department of Mathematics',
      years: 'May 2025 - Present',
      description: [
        'Enhanced Matrices, Multivariable Calculus, and Ordinary and Partial Differential Equations online Pressbooks',
        'Updated digital textbooks to comply with Web Content Accessibility Guidelines by integrating closed captioning',
        'Embedded interactive learning components using H5P and LaTeX-rendered equations',
      ],
    },
    {
      title: 'Artificial Intelligence/Machine Learning Instructor Assistant',
      company: 'Kode With Klossy',
      years: 'March 2025 - Present',
      description: [
        'Taught basic machine learning principles to middle/high school students of traditionally underrepresented genders in tech',
        'Instructed on supervised learning, image classification, sentiment analysis, neural networks, semantic search, and RAG',
      ],
    },
    {
      title: 'Research Intern',
      company: 'James Z. Wang Research Group',
      years: 'January 2025 - Present',
      description: [
        'Researched biases present in LLMs regarding emotions within the area of affective computing',
        'Analyzed published research literature to support hypothesis formation and determine metrics for biases',
        'Secured funding from the NASA Pennsylvania Space Grant Consortium PSU Undergraduate Research Internship Program',
      ],
    },
    {
      title: 'International Student Services Assistant',
      company: 'Penn State Global',
      years: 'September 2024 - Present',
      description: [
        'Provided front-desk assistance to Penn State\'s over 9,000 international students and scholars',
        'Worked closely with International Student Advisors to coordinate appointments and handle emergencies',
        'Utilized LLMs to filter and organize common student queries into an FAQ page for Penn State Global\'s website',
      ],
    },
  ];

  return (
    <section id="work-experience" ref={ref} className={`work-experience-section fade-in ${isVisible ? 'visible' : ''}`}>
      <h2>Work Experience</h2>
      <div className="experiences-container">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-card">
            <h3>{exp.title} @ {exp.company}</h3>
            <p className="experience-years">{exp.years}</p>
            <ul className="experience-description">
              {exp.description.map((desc, i) => (
                <li key={i}>{desc}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WorkExperience; 