import React from 'react';
import './Projects.css';
import './animations.css';
import { useIntersectionObserver } from './useIntersectionObserver';

function Projects() {
  const [ref, isVisible] = useIntersectionObserver();

  const projects = [
    {
      title: "RAGatha",
      description: "Winning submission for the HackPSU ICDS Challenge. Developed a Retrieval Augmented Generation (RAG) chatbot based on the Penn State Institute for Computational and Data Sciences ROAR user guide.",
      technologies: ["Python", "Langchain", "ChromA", "Tkinter"],
      link: "https://github.com/aryanxsabnekar/RAG_Chatbot"
    },
    {
      title: "Nomble",
      description: "Nomble is a placeholder project showcasing a flipped card UI. This card includes sample features and skills for demonstration purposes.",
      technologies: ["React", "CSS3", "Figma", "Node.js"],
      link: "#"
    },
  ];

  return (
    <section id="projects" ref={ref} className={`projects-section fade-in ${isVisible ? 'visible' : ''}`}>
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="technologies">
              {project.technologies.map((tech, i) => (
                <span key={i} className="tech-tag">{tech}</span>
              ))}
            </div>
            <a href={project.link} className="project-link highlight-link" target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects; 