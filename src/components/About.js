import React from 'react';
import './About.css';
import './animations.css';
import { TypeAnimation } from 'react-type-animation';

function About() {
  return (
    <section id="about" className="px-section hero">
      <div className="px-wrap hero-grid">

        {/* ---- text column ---- */}
        <div className="hero-copy">
          <span className="hero-badge">&#9654; PLAYER 1</span>

          <h1 className="hero-name">LEONA<br />CHEN</h1>

          <div className="hero-role">
            &gt; software engineer &amp;{' '}
            <span className="hero-typed">
              <TypeAnimation
                sequence={[
                  'problem solver', 1600,
                  'AI enthusiast', 1600,
                  'computer scientist', 1600,
                  'lifelong learner', 1600,
                ]}
                wrapper="span"
                speed={45}
                repeat={Infinity}
              />
            </span>
            <span className="hero-caret" />
          </div>

          <p className="hero-bio">
            Junior @ Penn State — CS major, Math minor. Currently at IBM as an
            Associate Application Developer (Adobe Experience Platform), and an
            incoming SWE intern @ PNC for Summer 2026. On a quest toward AI &amp;
            machine-learning engineering.
          </p>

          <div className="hero-actions">
            <a
              href="/portfolio/Leona Chen Resume.pdf"
              download="Leona Chen Resume.pdf"
              className="pxbtn hero-btn dark"
            >
              R&Eacute;SUM&Eacute; &#8595;
            </a>
            <a href="#contact" className="pxbtn hero-btn yellow">SAY HI</a>
          </div>
        </div>

        {/* ---- collage column ---- */}
        <div className="hero-collage">
          <div className="hero-blob" />

          <span className="hero-spark s1" aria-hidden="true">&#10022;</span>
          <span className="hero-spark s2" aria-hidden="true">&#10022;</span>

          <div className="pol hero-polaroid">
            <span className="tape tape-lav" />
            <div className="hero-photo">
              <img src="/portfolio/profilepic.png" alt="Leona Chen" />
            </div>
            <div className="hero-photo-cap">that&rsquo;s me! &#9733;</div>
          </div>

          {/* decorative pixel stickers */}
          <div className="hero-sticker st-mint" aria-hidden="true">&lt;/&gt;</div>
          <div className="hero-sticker st-lav" aria-hidden="true">&#9829;</div>
        </div>
      </div>

      <div className="torn-strip hero-torn" />
    </section>
  );
}

export default About;
