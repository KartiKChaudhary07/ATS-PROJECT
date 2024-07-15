import React from 'react';
import './Ra.css'
function ResumeAnalysis() {
  return (
    <div className="resume-analysis">
      <div className="header">
        <h2>Resume Match Score</h2>
      </div>
      <div className="content">
        <h3>Your Resume Analysis</h3>
        <div className="circle-chart">
          <div className="circle-container">
            <svg width="200" height="200">
              <circle
                cx="100"
                cy="100"
                r="80"
                stroke="#007bff"
                strokeWidth="15"
                fill="none"
                strokeLinecap="round"
                strokeDasharray="400"
                strokeDashoffset="400"
                className="circle-chart-path"
              />
              <circle
                cx="100"
                cy="100"
                r="80"
                stroke="#dc3545"
                strokeWidth="15"
                fill="none"
                strokeLinecap="round"
                strokeDasharray="400"
                strokeDashoffset="320"
                className="circle-chart-path"
              />
              <text
                x="100"
                y="115"
                textAnchor="middle"
                fontSize="30px"
                fontWeight="bold"
                fill="#333"
              >
                41%
              </text>
            </svg>
          </div>
        </div>
        <div className="info">
          <h4>GREAT START!</h4>
          <p>
            You'll be good candidate for this position if you update
            your resume.
          </p>
          <p>
            Review the recommendations below for the formatting,
            keywords, and best practices you need to land the
            interview.
          </p>
          <p>
            Then scan your updated resume to make sure you
            score 75% or higher.
          </p>
          <h4>You have 56 recommended updates.</h4>
          <button className="btn btn-primary">SEE YOUR RECOMMENDATIONS</button>
        </div>
      </div>
    </div>
  );
}

export default ResumeAnalysis;