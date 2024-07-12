import React from 'react';
import './Newdisc.css';

const Newdisc = () => {
  return (
    <section style={styles.section}>
      <h2></h2>
      <p className="textOutline0" style={{ ...styles.textOutline, fontFamily: 'Segoe UI, sans-serif', fontWeight: 700}}><br></br>Crafting a standout resume is your gateway to landing that dream job. Did you know that 61% of hiring managers swear by customized <br></br>resumes to secure interviews? It's true—personalizing your resume to fit each job description can significantly boost your chances.<br></br><br></br>

But here's the kicker: 51% of recruiters toss out resumes with typos! Imagine losing out on your dream job over a small spelling mistake.<br></br> That's where Resume Check swoops in to save the day.<br></br><br></br>

Imagine having a tool that scans your resume for over 30 critical issues. From formatting quirks to sneaky typos and ensuring your content matches<br></br> the job requirements—Resume Check does it all. It's like having a personal editor and job application strategist rolled into one sleek package.<br></br><br></br>

With Resume Check, you can confidently apply knowing your resume is flawless and tailored for success. Don't let a typo stand between you<br></br> and your dream job. Let Resume Check be your secret weapon to ace every job application. Your career success story starts here!</p>

<div style={styles.container}>
      <img 
        src="./src/assets/Analyzing.gif" 
        alt="Left Image" 
        style={styles.image}
        onMouseOver={(e) => e.currentTarget.style.transform = styles.imageHover.transform}
        onMouseOut={(e) => e.currentTarget.style.transform = 'none'}
      />
      <img 
        src="./src/assets/ats_img00.jpg" 
        alt="Right Image" 
        style={styles.image}
        onMouseOver={(e) => e.currentTarget.style.transform = styles.imageHover.transform}
        onMouseOut={(e) => e.currentTarget.style.transform = 'none'}
      />
    </div>
    </section>
  );
};

const styles = {
    section: {
        padding: '50px 20px',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        textAlign: 'center',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      },
      content: {
        maxWidth: '80px', // Adjust as per your design
        margin: '0 auto',
        textAlign: 'justify',
        lineHeight: '1.6',
      },
  image: {
    width: '500px', // Adjust width as per your design
    height: 'auto',
    margin: '100px',
    transition: 'transform 0.8s ease-in-out',
  },
  textOutline: {
    
    textShadow: '1px 1px 3px #1790E3;, -1px -1px 3px #1790E3;, 1px -1px 3px #1790E3;, -1px 1px 3px #1790E3;',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between', // or 'space-around' or 'space-evenly' based on your preference
  },
  imageHover: {
    transform: 'scale(1.04)', // Zoom effect
  },
};


export default Newdisc;