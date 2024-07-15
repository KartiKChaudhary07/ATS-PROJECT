import React from 'react';
import './Loading.css';

const Loading = () => {
  return (
    <div className="loading-screen">
      <div className="spinner"></div>
      <p>&nbsp;Loading...</p>
    </div>
  );
};

export default Loading;
