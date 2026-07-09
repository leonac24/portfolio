import React, { useState } from 'react';
import './Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';

const LINKS = [
  { href: '#about', label: 'ABOUT' },
  { href: '#skills', label: 'SKILLS' },
  { href: '#work-experience', label: 'WORK' },
  { href: '#projects', label: 'PROJECTS' },
  { href: '#leadership-involvement', label: 'MORE' },
  { href: '#contact', label: 'HI', accent: true },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);

  return (
    <nav className="px-nav">
      <div className="px-nav-inner">
        <a href="#about" className="px-logo" onClick={close}>LEONA.EXE</a>

        <button
          className="px-nav-toggle"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        <div className={`px-nav-menu ${isOpen ? 'open' : ''}`}>
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={close}
              className={`px-nav-item ${l.accent ? 'accent' : ''}`}
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
