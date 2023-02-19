import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Link, NavLink } from 'react-router-dom';
import './nav.css';
import logo from "../../assets/small-logo.png"

function NavBar() {
  return (
    <nav className="NavBar">
      <div className="NavBar-logo">
        <Link to="/">
          <img src={logo} alt="Small logo" />
        </Link>
          <p>We sell only sweaters</p>
       
      </div>
      <ul className="NavBar-links">
        <li><Link to="/about">About</Link></li>
        <li><Link to="/item">Item</Link></li>
        <li><Link to="/shop">Shop</Link></li>
        <li><Link to="/info">Info</Link></li>
        <li><Link to="/press">Press</Link></li>
      </ul>
      <div className="NavBar-icons">
        <NavLink to="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></NavLink>
        <NavLink to="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} /></NavLink>
      </div>
    </nav>
  );
}

export default NavBar;
