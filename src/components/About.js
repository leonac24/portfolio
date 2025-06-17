import React from 'react';
import './About.css';
import { TypeAnimation } from 'react-type-animation';

function About() {
  return (
    <section id="about" className="about-section">
      <h2>
        <TypeAnimation
          sequence={[
            'My name is Leona Chen',
            1000,
            'My name is Leona Chen and I\'m a problem s',
            1000,
            'My name is Leona Chen and I\'m an ML Enthusiast',
            1000,
            'My name is Leona Chen and I\'m a Dog Lover',
            1000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
        />
      </h2>
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