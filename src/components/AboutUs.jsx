import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import './AboutUs.css';

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
    
    <section className="about-section"><br></br><br></br>
      <h2>About Us</h2>
      <p>We are a team CW of passionate technologists and HR professionals dedicated to making the job application process smoother and more successful for everyone. Our mission is to leverage the power of AI to help you achieve your career goals.</p><br></br><br></br>
      <div className="members">
        <div className="member">
          <img src="./src/assets/avi.jpg" alt="Avdhesh" className="member-image" />
          <h3>Avdhesh Upadhyay</h3>
          <p>Full-Stack Developer</p>
          <a href="https://www.linkedin.com/in/avdhesh-upadhyay-643a382b0/" target="_blank" className="login-social-signup-link">
          <img src="./src/assets/linkedd.jpg" alt="LinkedIn" className="login-social-signup-icon" /></a>
        </div>
        <div className="member">
          <img src="./src/assets/kar00.jpg" alt="Kartik" className="member-image" />
          <h3>Kartik Chaudhary</h3>
          <p>Full-Stack Developer</p>
          <a href="https://www.linkedin.com/in/kartik-chaudhary-496438281/" target="_blank" className="login-social-signup-link">
          <img src="./src/assets/linkedd.jpg" alt="LinkedIn" className="login-social-signup-icon" /></a>
        </div>
        <div className="member">
          <img src="./src/assets/radh.jpg" alt="Radhika" className="member-image" />
          <h3>Radhika Sharma</h3>
          <p>Full-Stack Developer</p>
          <a href="https://www.linkedin.com/in/radhika-sharma-773a80273/" target="_blank" className="login-social-signup-link">
          <img src="./src/assets/linkedd.jpg" alt="LinkedIn" className="login-social-signup-icon" /></a>
        </div>
        <div className="member">
          <img src="./src/assets/jahnvi.jpg" alt="Janhavi" className="member-image" />
          <h3>Janhavi Singh</h3>
          <p>Full-Stack Developer</p>
          <a href="https://www.linkedin.com/in/janhavi-singh-50b2bb275/" target="_blank" className="login-social-signup-link">
          <img src="./src/assets/linkedd.jpg" alt="LinkedIn" className="login-social-signup-icon" /></a>
        </div>
        <div className="member">
          <img src="./src/assets/kar01.jpg" alt="Kartikey" className="member-image" />
          <h3>Kartikey Pandey</h3>
          <p>Full-Stack Developer</p>
          <a href="https://www.linkedin.com/in/kartkp/" target="_blank" className="login-social-signup-link">
              <img src="./src/assets/linkedd.jpg" alt="LinkedIn" className="login-social-signup-icon" />
  </a>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;