// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>Connect With Us</p>
      <p>Follow us on social media for the latest tips and updates!</p>
      <ul style={styles.socialLinks}>
        <li><a href="#" target="_blank" rel="noopener noreferrer">Facebook</a></li>
        <li><a href="#" target="_blank" rel="noopener noreferrer">Twitter</a></li>
        <li><a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
        <li><a href="#" target="_blank" rel="noopener noreferrer">Instagram</a></li>
      </ul>
      <img src="https://example.com/social_media.jpg" alt="Social Media" style={styles.image} />
    </footer>
  );
};

const styles = {
  footer: {
    padding: '50px 20px',
    backgroundColor: 'transparent',
    color: '#fff',
    textAlign: 'center',
  },
  socialLinks: {
    listStyle: 'none',
    padding: 0,
  },
  image: {
    width: '100%',
    height: 'auto',
    marginTop: '20px',
  },
};

export default Footer;
