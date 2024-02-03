import React, { useState } from 'react';
import '../styles/Nav.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`header ${isMenuOpen ? 'show-menu' : ''}`}>
      <nav className="nav container">
        <div className="nav__data">
          <a href="#" className="nav__logo">
            <i className="ri-planet-line"></i> Company
          </a>

          <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
            <i className={`ri-menu-line nav__burger ${isMenuOpen ? 'show-icon' : ''}`}></i>
            <i className={`ri-close-line nav__close ${isMenuOpen ? 'show-icon' : ''}`}></i>
          </div>
        </div>

        {/* ... rest of the content */}
      </nav>
    </header>
  );
};

export default Header;
