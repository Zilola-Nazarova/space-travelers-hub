import React from 'react';
import { NavLink } from 'react-router-dom';
import Planet from '../assets/planet.png';
import '../styles/Header.css';

function Header() {
  return (
    <>
      <header>
        <nav>
          <div className="logo">
            <img src={Planet} alt="planet" />
            <h1>Space Travelers&apos; Hub</h1>
          </div>
          <div className="links">
            <NavLink to="/">Rockets</NavLink>
            <NavLink to="/missions">Missions</NavLink>
            <span className="line2" />
            <NavLink to="/profile">My Profile</NavLink>
          </div>
        </nav>
        <div className="line" />
      </header>
    </>
  );
}

export default Header;
