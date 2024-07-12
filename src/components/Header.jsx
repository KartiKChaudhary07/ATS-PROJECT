// src/components/Header.js
import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header style={styles.header}>
      <br></br>
      <br></br>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ flex: 1 }}>
          <h1 style={{ ...styles.textOutline, fontFamily: 'Segoe UI, sans-serif', fontWeight: 700, fontSize: '2.5rem', marginBottom: '10px' }}><img src="./src/assets/wiz.jpg" alt="cWSCAN logo" style={{ width: 65, height: 78, marginRight: 10 }} />
            Welcome to Your Future:<br></br> AI-Powered Resume ATS Analyzer
          </h1>
          <p style={{ ...styles.textOutline, fontFamily: 'Segoe UI, sans-serif', fontWeight: 700, fontSize: '1.3rem', marginBottom: '10px' }}>
            Unlock the Secrets to Job Application Success with Cutting-Edge Technology!
          </p>
          <p style={{ ...styles.textOutline, fontFamily: 'Segoe UI, sans-serif', fontWeight: 700, fontSize: '1.3rem', marginBottom: '10px' }}>
            Resume Check: Instantly Check Your Resume
          </p>
        </div>
        <img src="./src/assets/ats_img01.jpg" alt="Tech Background" style={{ ...styles.image, transition: 'transform 0.8s ease-in-out' }} className="zoom-image"  />
      </div>
    </header>
  );
};

const styles = {
  header: {
    textAlign: 'LEFT',
    padding: '50px 20px',
    backgroundColor: 'transparent',
    color: '#fff',
  },

  textOutline: {
    fontFamily: "'Comic Sans MS', 'Comic Sans', cursive",
    textShadow: '1px 1px 3px #1790E3;, -1px -1px 3px #1790E3;, 1px -1px 3px #1790E3;, -1px 1px 3px #1790E3;',
  },

  image: {
    width: '30%',
    height: 'auto',
    marginTop: '20px',
    border: '1px solid #2A4F55',
    borderRadius: '5px',
    
  },

};

export default Header;
