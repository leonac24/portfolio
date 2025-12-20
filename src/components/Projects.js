import React from 'react';
import './Projects.css';
import './animations.css';
import { useIntersectionObserver } from './useIntersectionObserver';

function Projects() {
  const [ref, isVisible] = useIntersectionObserver();

  const projects = [
    {
      title: "RAGatha @ HackPSU (1st Place Winner)",
      description: "Developed RAG chatbot with team of 5 using LangChain and OpenAI API key to answer queries. Implemented vector-based semantic search by embedding user guide content into ChromaDB to optimize retrieval speed. Designed and built an interactive GUI using Tkinter library to enhance accessibility and usability.",
      technologies: ["Python", "LangChain", "OpenAI", "ChromA", "Tkinter", "NumPy", "pandas"],
      link: "https://github.com/aryanxsabnekar/RAG_Chatbot"
    },
    {
      title: "Nomble",
      description: "Built and maintained a cross-platform application that allows groups of users to collaboratively choose restaurants. Implemented user authentication, data management, AI recommendations, responsive UI, and third-party APIs. Collaborated with team of 3 using Git version control and automated build processes to enhance development efficiency.",
      technologies: ["React Native", "TypeScript", "JavaScript", "Firebase", "Xcode", "Expo"],
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