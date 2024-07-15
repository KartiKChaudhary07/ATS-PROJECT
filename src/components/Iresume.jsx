import React, { useState, useRef } from 'react';
import './Iresume.css';
import './Iresume.css';

const Ir = () => {
  const handleRedirect = () => {
    window.location.href = './pref';
  };

  return (
    <div className="containers">
      <div className="rectangle">
        <button onClick={handleRedirect}> 
          <label className="custom-file-upload">
            <span className="button">Check Your Score</span>
          </label>
        </button>

      </div>
      <div style={styles.container}><br></br><br></br><br></br>
          <img 
            src="./src/assets/ss00.jpg" 
            alt="Left Image" 
            style={styles.image}
            onMouseOver={(e) => e.currentTarget.style.transform = styles.imageHover.transform}
            onMouseOut={(e) => e.currentTarget.style.transform = 'none'}
          />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <img
            src="./src/assets/ss01.jpg"
            alt="Right Image"
            style={styles.image}
            onMouseOver={(e) => e.currentTarget.style.transform = styles.imageHover.transform}
            onMouseOut={(e) => e.currentTarget.style.transform = 'none'}
            autoPlay
            muted
          /><br></br><br></br><br></br>
        </div>
    </div>

  );
};
const styles = {
  section: {
    padding: '50px 20px',
    textAlign: 'left',
    color: '#fff',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
  },
  image: {
    width: '36%',
    height: 'auto',
    marginTop: '20px',
    transition: 'transform 0.8s ease-in-out',
    borderRadius: '15px',
    border: '1px solid #202020',
  },
  imageHover: {
    transform: 'scale(1.03)',
  },
  
};

export default Ir;




