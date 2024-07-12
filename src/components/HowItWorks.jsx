// src/components/HowItWorks.js
import React from 'react';

const HowItWorks = () => {
  return (
    <section style={styles.section}>
      <div style={styles.leftSide}><br /><br />
        <img src="./src/assets/gyaan.jpg" alt="How It Works" style={styles.image} /><br /><br /><br />
        <h2 style={styles.text}>How It Works?!</h2><br />
        <ol style={styles.text}>
          <li>Upload Your Resume: Simply upload your resume in PDF format.</li>
          <li>Analyze: Our AI scans and analyzes your resume against the job description.</li>
          <li>Get Feedback: Receive a comprehensive report with tips and improvements.</li>
          <li>Optimize: Apply the suggestions and resubmit for a re-analysis if needed.</li>
        </ol>
      </div>
      <div style={styles.rightSide}><br /><br />
        <h2 style={styles.text}>Get Your Resume Score</h2><br />
        <p style={styles.text}>Find out your resume score, see how you compare. Our resume checker puts your resume up against other resumes from our database that were written by people who got hired at the world’s top companies.</p>
        <ul style={styles.text}><br />
          <li>Check how your resume score compares against the best</li>
          <li>Get a detailed resume review report</li>
          <li>Improve your CV with personalized tips</li><br /><br /><br />
        </ul>
        <img src="./src/assets/score.jpg" alt="Resume Score" style={styles.rightImage} /><br /><br />
        
      </div>
      
    </section>
  );
};

const styles = {
  section: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: '20px',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
  },
  leftSide: {
    width: '48%',
    marginRight: '2%',

    padding: '10px',
    borderRadius: '10px',
  },
  rightSide: {
    width: '48%',

    padding: '10px',
    borderRadius: '10px',
  },
  image: {
    width: '65%',
    borderRadius: '15px',
  },
  rightImage: {
    width: '65%',
    borderRadius: '15px',
    marginTop: '20px',
  },
  text: {
    color: 'white',
    textAlign: 'left',
  },
};

export default HowItWorks;
