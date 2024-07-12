import React from 'react';

const Default = () => {
  return (
    <section style={styles.section}>
      <div>
        <img 
          src="./src/assets/under.jpg" 
          alt="Left Image" 
          style={styles.image}
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
  image: {
    maxWidth: '100%',
    borderRadius: '15px',
  },
};

export default Default;
