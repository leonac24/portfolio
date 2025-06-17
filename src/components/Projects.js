import React from 'react';
import './Projects.css';

function Projects() {
  const projects = [
    {
      title: "RAGatha",
      description: "Winning submission for the HackPSU ICDS Challenge. Developed a Retrieval Augmented Generation (RAG) chatbot based on the Penn State Institute for Computational and Data Sciences ROAR user guide.",
      technologies: ["Python", "Langchain", "ChromA", "Tkinter"],
      link: "https://github.com/aryanxsabnekar/RAG_Chatbot"
    },
  ];

  return (
    <section id="projects" className="projects-section">
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
            <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects; 