import React from 'react';
import './Contact.css';
import './animations.css';

function Contact() {
  return (
    <section id="contact" className="px-section contact">
      <div className="torn-strip contact-torn" />
      <div className="contact-band">
        <span className="contact-spark" aria-hidden="true">&#10022;</span>

        <div className="px-wrap contact-inner">
          <div className="contact-eyebrow">&#9654; PRESS START TO CHAT</div>
          <div className="contact-title">SAY HI!</div>

          <div className="contact-links">
            <a href="mailto:leonachen24@gmail.com" className="pxbtn contact-btn pink">EMAIL</a>
            <a href="https://github.com/leonac24" target="_blank" rel="noopener noreferrer" className="pxbtn contact-btn yellow">GITHUB</a>
            <a href="https://linkedin.com/in/leona-chen" target="_blank" rel="noopener noreferrer" className="pxbtn contact-btn lav">LINKEDIN</a>
          </div>

          <div className="contact-foot">&#9670; LEONA.EXE — thanks for playing &#9829;</div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
