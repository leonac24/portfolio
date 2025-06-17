import React from 'react';
import './Dog.css';

function Dog() {
  return (
    <section id="dog" className="dog-section">
      <div className="dog-content">
        <h2>Dog</h2>
        <img src="/portfolio/banjo.jpeg" alt="Banjo the dog" className="dog-photo" />
        
        <p>This is my dog! His name is Banjo</p>
      </div>
    </section>
  );
}

export default Dog; 