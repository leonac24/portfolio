import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import WorkExperience from './components/WorkExperience';
import Projects from './components/Projects';
import LeadershipAndInvolvement from './components/LeadershipAndInvolvement';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      {/* Torn-paper edge filters used by dividers across the site */}
      <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
        <defs>
          <filter id="torn">
            <feTurbulence type="fractalNoise" baseFrequency="0.014 0.02" numOctaves="3" seed="7" result="n" />
            <feDisplacementMap in="SourceGraphic" in2="n" scale="11" xChannelSelector="R" yChannelSelector="G" />
          </filter>
          <filter id="torn2">
            <feTurbulence type="fractalNoise" baseFrequency="0.02 0.03" numOctaves="2" seed="21" result="n" />
            <feDisplacementMap in="SourceGraphic" in2="n" scale="8" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
      </svg>

      <Navbar />
      <main>
        <About />
        <Skills />
        <Projects />
        <WorkExperience />
        <LeadershipAndInvolvement />
        <Contact />
      </main>
    </div>
  );
}

export default App;
