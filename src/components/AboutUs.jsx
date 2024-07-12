// src/components/AboutUs.js
import React from 'react';

const AboutUs = () => {
  return (
    <section style={styles.section}>
      <h2>About Us</h2>
      <p>We are a team of passionate technologists and HR professionals dedicated to making the job application process smoother and more successful for everyone. Our mission is to leverage the power of AI to help you achieve your career goals.</p>
    </section>
  );
};

const styles = {
  section: {
    padding: '50px 20px',
    backgroundColor: 'transparent',
    textAlign: 'left',
    color: '#fff',
    
  },
};

export default AboutUs;
