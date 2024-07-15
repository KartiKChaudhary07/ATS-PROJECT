import React, { useState, useEffect } from 'react';
import Loading from './Loading';

const AboutUs = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <section style={styles.section}><br></br><br></br>
      <h2>About Us</h2>
      <p>We are a team CW of passionate technologists and HR professionals dedicated to making the job application process smoother and more successful for everyone. Our mission is to leverage the power of AI to help you achieve your career goals.</p>
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
