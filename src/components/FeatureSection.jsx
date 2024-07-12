// src/components/FeatureSection.js
import React from 'react';

const FeatureSection = () => {
  return (
    <section style={styles.section}>
      <h2>Why Choose Our ATS Analyzer?</h2><br></br>
      <p>Are you tired of submitting resumes that get lost in the digital abyss? Our AI-powered ATS analyzer ensures your resume gets noticed by hiring managers and passes through applicant tracking systems with flying colors.</p>
      <ul><br></br>
        <li>AI Precision: Our advanced algorithms analyze your resume and optimize it for the specific job you’re applying for.</li><br></br>
        <li>Real-Time Feedback: Receive instant, actionable insights on how to improve your resume.</li><br></br>
        <li>Industry Standards: We tailor our analysis to meet the latest trends and standards in your industry.</li>
      </ul>
      <div style={styles.container}>
      <img 
        src="./src/assets/robot.jpg" 
        alt="Left Image" 
        style={styles.image}
        onMouseOver={(e) => e.currentTarget.style.transform = styles.imageHover.transform}
        onMouseOut={(e) => e.currentTarget.style.transform = 'none'}
      />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <video
        src="./src/assets/new.mp4"
        alt="Right Video"
        style={styles.video}
        onMouseOver={(e) => e.currentTarget.style.transform = styles.imageHover.transform}
        onMouseOut={(e) => e.currentTarget.style.transform = 'none'}
        autoPlay
        muted
      />
    </div>
    </section>
  );
};

const styles = {
  section: {
    padding: '50px 20px',
    // backgroundColor: 'transparent',
    textAlign: 'left',
    color: '#fff',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
  },
  image: {
    width: '40%',
    height: 'auto',
    marginTop: '20px',
    transition: 'transform 0.8s ease-in-out',
  },
  imageHover: {
    transform: 'scale(1.03)',
  },
  video: {
    width: '37%',
    height: 'auto',
    margin: '50px',
    transition: 'transform 0.8s ease-in-out',
    borderRadius: '15px',
    border: '1px solid #000',
  },
  
};

export default FeatureSection;
