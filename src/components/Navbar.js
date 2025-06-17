import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isThin, setIsThin] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and past initial threshold
        setIsThin(true);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up
        setIsThin(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`navbar ${isThin ? 'navbar-thin' : ''}`}>
      <div className="navbar-container">
        <a href="/portfolio/" className="navbar-logo" onClick={closeMenu}>
          Leona Chen
        </a>
        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
        <div className={`nav-menu ${isOpen ? 'active' : ''} ${isThin ? 'navbar-menu-thin' : ''}`}>
          <a href="#about" className="nav-item" onClick={closeMenu}>About</a>
          <a href="#skills" className="nav-item" onClick={closeMenu}>Skills</a>
          <a href="#work-experience" className="nav-item" onClick={closeMenu}>Work Experience</a>
          <a href="#projects" className="nav-item" onClick={closeMenu}>Projects</a>
          <a href="#leadership-involvement" className="nav-item" onClick={closeMenu}>Leadership & Involvement</a>
          <a href="#contact" className="nav-item" onClick={closeMenu}>Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;