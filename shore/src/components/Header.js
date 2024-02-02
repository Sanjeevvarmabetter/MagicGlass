import React, { useState } from 'react';
import '../App.css';

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  }

  return (
    <header>
      <nav>
        <div className="logo">LOGO</div>
        <div className="menu-icon" onClick={toggleMenu}>
          <div className={showMenu ? "bar1 change" : "bar1"}></div>
          <div className={showMenu ? "bar2 change" : "bar2"}></div>
          <div className={showMenu ? "bar3 change" : "bar3"}></div>
        </div>
        <ul className={showMenu ? "nav-links show" : "nav-links"}>
          <li><a href='#'>Home</a></li>
          <li><a href='/about'>About</a></li>
          <li><a href="/login">Login</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
