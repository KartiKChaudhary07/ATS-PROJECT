import React, { useState, useEffect } from 'react';
import Loading from './Loading';

const Under = () => {
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
      <h2>We are:</h2><br></br><br></br>
      <div style={styles.imageContainer}>
        <img src={'./src/assets/Under.jpg'} alt="About Us" style={styles.image} />
      </div>
    </section>
  );
};
const styles = {
  section: {
    padding: '50px 20px',
    backgroundColor: 'transparent',
    textAlign: 'center',
    color: '#fff',
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
  },
  image: {
    maxWidth: '100%',
    height: 'auto',
  },
};

export default Under;
