import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';


const Navbar = () => {
  const [scrollDirection, setScrollDirection] = useState('up');
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setScrollDirection('down');
      } else {
        setScrollDirection('up');
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header className={`header ${scrollDirection === 'down' ? 'hidden' : ''}`}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <a href="/" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <img src="./src/assets/logo.jpg" alt="cWSCAN logo" style={{ width: 65, height: 78, marginRight: 10 }} />
          <h4 style={{ ...styles.textOutline, fontFamily: "'Comic Sans MS', 'Comic Sans', cursive", margin: 0, color: '#DCE0DF' }}>cWSCAN</h4>
        </a>
      </div>
      <nav className="navbar">
        <NavLink exact activeClassName="active" to="/">Home</NavLink>
        <div className="dropdown">
          <NavLink activeClassName="active" to="/">Resume Analysis</NavLink>
          <div className="dropdown-content">
            <NavLink activeClassName="active" to="/me-page">ATS Score</NavLink>
            <NavLink activeClassName="active" to="/you-page">Suggestions</NavLink>
            <NavLink activeClassName="active" to="/us-page">Bullet Points</NavLink>
          </div>
        </div>
        <div className="dropdown">
          <NavLink activeClassName="active" to="/Default">Resume Maker</NavLink>
          <div className="dropdown-content">
            <NavLink activeClassName="active" to="/Default">Standard</NavLink>
          </div>
        </div>
        <NavLink activeClassName="active" to="/services">Services</NavLink>
        <NavLink activeClassName="active" to="/contact">About Us</NavLink>
      </nav>
    </header>
  );
};

const styles = {

  textOutline: {
    fontFamily: "'Comic Sans MS', 'Comic Sans', cursive",
    textShadow: '1px 1px 3px #1790E3;, -1px -1px 3px #1790E3;, 1px -1px 3px #1790E3;, -1px 1px 3px #1790E3;',
  },

};


export default Navbar;
