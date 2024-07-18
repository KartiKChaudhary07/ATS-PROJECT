import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import Loading from './Loading';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3000/login', { email, password });
      if (res.data.token) {
        localStorage.setItem('token', res.data.token);
        navigate('/home');
      } else {
        console.error('Login failed: No token received');
      }
    } catch (err) {
      console.error('Login error:', err);
    }
  };
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
    <div><br></br><br></br><br></br>
    <div className="form-container">
      <form onSubmit={handleSubmit} className="login-form">
      <h2 className='login-title'>Login to cWSCAN</h2>
          <input
            type="name"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Username or Email"
            required
            className="login-input-user"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
            className="login-input-password"
          />

          <button type="submit" className="login-button">Login</button>

          <div className="login-forgot-password" onClick={() => navigate('/na')}>Forgot password ?</div>
          <div className="login-signup">
            <p className="login-new-user-text">New user ?</p>
            <button type="button" onClick={() => navigate('/signup')} className="login-signup-button">Signup Now</button>
          </div>
          <div className="login-social-signup">
            <p className="login-social-signup-text">May also signup with</p>
            <a href="https://accounts.google.com/signup" target="_blank" className="login-social-signup-link">
              <img src="https://static-00.iconduck.com/assets.00/google-icon-512x512-tqc9el3r.png" alt="Google" className="login-social-signup-icon" />
            </a>
            <a href="https://github.com/join" target="_blank" className="login-social-signup-link">
              <img src="https://cdns.iconmonstr.com/wp-content/releases/preview/2012/240/iconmonstr-github-1.png" alt="GitHub" className="login-social-signup-icon" />
            </a>
            <a href="https://www.linkedin.com/signup" target="_blank" className="login-social-signup-link">
              <img src="https://static-00.iconduck.com/assets.00/linkedin-icon-256x256-k7c74t1i.png" alt="LinkedIn" className="login-social-signup-icon" />
  </a>
        </div>
      </form>
    </div></div>
  );
};

export default Login;
