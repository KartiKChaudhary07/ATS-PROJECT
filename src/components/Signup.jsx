import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      return alert('Passwords do not match');
    }
    try {
      const res = await axios.post('http://localhost:3000/register', { username, email, password });
      localStorage.setItem('token', res.data.token);
      navigate('/home');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div><br></br><br></br><br></br>
<div className="register-form-container">
  <form onSubmit={handleSubmit} className="register-form">
    <h2 className='register-title'>Register to cWSCAN</h2>
    <input
      type="name"
      value={username}
      onChange={(e) => setUsername(e.target.value)}
      placeholder="Username"
      className="register-input-username"
      required
    />
    <input
      type="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      placeholder="Email"
      className="register-input-email"
      required
    />
    <input
      type="password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      placeholder="Password"
      className="register-input-password"
      required
    />
    <input
      type="password"
      value={confirmPassword}
      onChange={(e) => setConfirmPassword(e.target.value)}
      placeholder="Confirm Password"
      className="register-input-confirm-password"
      required
    />
    <button type="submit" className="register-button">Register</button>

    <div className="register-social-signup">
      <p className="register-social-signup-text">May also signup with</p><br />
      <div className="register-social-signup-link">
        <img src="https://static-00.iconduck.com/assets.00/google-icon-512x512-tqc9el3r.png" alt="Google" />
        <img src="https://cdns.iconmonstr.com/wp-content/releases/preview/2012/240/iconmonstr-github-1.png" alt="GitHub" />
        <img src="https://static-00.iconduck.com/assets.00/linkedin-icon-256x256-k7c74t1i.png" alt="LinkedIn" />
      </div>
    </div>

    <div className="register-login-link">
      <p className="register-new-user-text">Already have an account?</p>
      <button type="button" className="register-login-button" onClick={() => navigate('/login')}>Login Now</button>
    </div>
  </form>
</div>
</div>
  );
}   


export default Signup;
