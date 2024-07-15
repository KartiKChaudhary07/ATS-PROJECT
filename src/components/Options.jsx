import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Options.css';
import Loading from './Loading';

const Options = () => {
  const [hoveredImage, setHoveredImage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const handleMouseEnter = (imageId) => {
    setHoveredImage(imageId);
  };

  const handleMouseLeave = () => {
    setHoveredImage(null);
  };
  if (isLoading) {
    return <Loading />;
  }

  return (
    <section style={styles.section}><br></br><br></br>
      <h2>Choose Your Preference</h2>
      <div style={styles.imageContainer}>
        <div
          style={{ ...styles.imageDiv, ...(hoveredImage === 'image1' && styles.hoveredImageDiv) }}
          onMouseEnter={() => handleMouseEnter('image1')}
          onMouseLeave={handleMouseLeave}
        >
          <Link to="/score" style={styles.linkButton}><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
            <img src={'./src/assets/score.jpg'} alt="Image 1" style={styles.image} />
            <div style={styles.imageText}>Find Your ATS Score</div>
          </Link>
        </div>
        <div
          style={{ ...styles.imageDiv, ...(hoveredImage === 'image2' && styles.hoveredImageDiv) }}
          onMouseEnter={() => handleMouseEnter('image2')}
          onMouseLeave={handleMouseLeave}
        >
          <Link to="/sugg" style={styles.linkButton}><br></br><br></br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src={'./src/assets/ats_img00.jpg'} alt="Image 2" style={styles.image} />
            <div style={styles.imageText}>Suggestions</div>
          </Link>
        </div>
        <div
          style={{ ...styles.imageDiv, ...(hoveredImage === 'image3' && styles.hoveredImageDiv) }}
          onMouseEnter={() => handleMouseEnter('image3')}
          onMouseLeave={handleMouseLeave}
        >
          <Link to="/bullet" style={styles.linkButton}><br></br><br></br><br></br><br></br><br></br>
          &nbsp;&nbsp;&nbsp;&nbsp;<img src={'./src/assets/robot.jpg'} alt="Image 3" style={styles.image} />
            <div style={styles.imageText}>Bullet Points</div>
          </Link>
        </div>
      </div>
      <div style={styles.buttonContainer}>
        <Link
          to="/score"
          style={{ ...styles.button, ...(hoveredImage === 'image1' && styles.hoveredButton) }}
        >
          Find Your ATS Score
        </Link>
        <Link
          to="/sugg"
          style={{ ...styles.button, ...(hoveredImage === 'image2' && styles.hoveredButton) }}
        >
          Suggestions
        </Link>
        <Link
          to="/bullet"
          style={{ ...styles.button, ...(hoveredImage === 'image3' && styles.hoveredButton) }}
        >
          Bullet Points
        </Link>
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
    fontWeight: 'bold',
    textShadow: '2px 2px 4px #000',
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    marginBottom: '20px',
  },
  imageDiv: {
    flex: '1',
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden',
    transition: 'transform 0.4s ease',
  },
  hoveredImageDiv: {
    transform: 'scale(1.05)',
  },
  image: {
    maxWidth: '90%',
    height: 'auto',
    marginBottom: '10px',
    transition: 'transform 0.3s ease',
    borderRadius: '20px',
  },
  imageText: {
    position: 'absolute',
    bottom: '10px',
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    color: '#fff',
    padding: '5px 10px',
    borderRadius: '5px',
    opacity: 0,
    transition: 'opacity 0.3s ease',
  },
  linkButton: {
    display: 'block',
    textDecoration: 'none',
    color: '#fff',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '20px',
    
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    transition: 'background-color 0.3s ease, transform 0.3s ease',
  },
  hoveredButton: {
    transform: 'scale(1.1)',
    backgroundColor: '#000000',
  },
};

export default Options;
