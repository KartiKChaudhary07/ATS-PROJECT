import React from 'react';
import { useLocation } from 'react-router-dom';
import './Kk.css';

function Response() {
  const location = useLocation();
  const { response } = location.state || { response: 'No response available' };

  return (
    <div className="container">
      <h1 className="title">Response And The Score</h1>
      <p className='titlenew'>{response}</p>
    </div>
  );
}

export default Response;
