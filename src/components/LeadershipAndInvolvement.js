import React from 'react';
import './LeadershipAndInvolvement.css';
import './animations.css';
import { useIntersectionObserver } from './useIntersectionObserver';

function LeadershipAndInvolvement() {
  const [ref, isVisible] = useIntersectionObserver();

  const involvements = [
    {
      title: 'College Loop Co-President, Student Leadership Council Member, Club President',
      company: 'Girls Who Code',
      location: 'University Park, PA',
      years: 'May 2023 - Present',
      description: [
        'Led Penn State\'s chapter of Girls Who Code, creating a student organization fostering community for women in tech',
        'Collaborated with national Student Leadership Council to write strategic proposal for future Girls Who Code programs',
        'Directed after-school club meetings at Upper St. Clair High School, creating an inclusive learning space for students',
      ],
    },
    {
      title: 'Associate Consultant',
      company: 'Nittany Lion Consulting Group',
      location: 'University Park, PA',
      years: 'November 2024 - Present',
      description: [
        'Collaborated with team and company executives to deliver solutions for client concrete 3D printing startup X-Hab 3D',
        'Conducted market research, analyzed competitors, interviewed critical stakeholders, evaluated business model',
        'Selected from a competitive applicant pool via behavioral and case interviews through Consultant Training Program',
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

  return (
    <section id="leadership-involvement" ref={ref} className={`leadership-involvement-section fade-in ${isVisible ? 'visible' : ''}`}>
      <h2>Leadership & Involvement</h2>
      <div className="involvements-container">
        {involvements.map((inv, index) => (
          <div key={index} className="involvement-card">
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
    </section>
  );
}

export default LeadershipAndInvolvement; 