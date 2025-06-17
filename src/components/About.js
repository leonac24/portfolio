import React from 'react';
import './About.css';

function About() {
  return (
    <section id="about" className="about-section">
      <h2>Leona Chen</h2>
      <div className="profile-picture">
        <img src="/portfolio/profilepic.jpg" alt="Leona Chen" />
      </div>
      <div className="about-content">
        <div className="about-text">
          <p>
            Hi, I'm Leona Chen! I'm a junior at Penn State majoring in Computer Science and minoring in Math.
          </p>
          <p>
            Looking to specialize in Machine Learning Engineering.
          </p>
          <p>
            When I'm not coding, you can find me hanging out with my dog Banjo.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About; 