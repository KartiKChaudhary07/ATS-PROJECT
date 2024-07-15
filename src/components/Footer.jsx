// src/components/Footer.js
import React from 'react';
import './Footer.css'; // import the CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <h2>Connect with us..</h2>
      <p>Follow us on social media for the latest tips and updates!</p>
      <ul className="social-links">
        <li>
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f" />
            Facebook
          </a>
        </li>
        <li>
          <a href="https://www.x.com/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter" />
            Twitter
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/kartkp/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin-in" />
            LinkedIn
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/kar_t_kpandey/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram" />
            Instagram
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;