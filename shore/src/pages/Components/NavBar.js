import React, { useState } from 'react';
import '../styles/Nav.css';
import Logo  from '../../assests/logo.svg'
import { Link } from 'react-router-dom';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  return (
    <nav>
      <input type='checkbox' id='check' />
      <label for="check" class="checkbtn">
        <i class="fas fa-bars"></i>
      </label>
      <label class="logo">MagicGlass</label>
      <ul>
        <li><a class="active" href="#"><Link to='/'>Home</Link></a></li>
        <li><a href="#"><Link to='/rank'>Rank</Link></a></li>
        <li><a href="#"><Link to='/login'>Login</Link></a></li>
      </ul>
    </nav>
  );
};

export default Header;
