import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Kk.css';

function Score() {
  const [pdfFile, setPdfFile] = useState(null);
  const [jobDescription, setJobDescription] = useState('');
  const [jobRole, setJobRole] = useState('');
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false); 
  const [res, setRes] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 300);
    return () => clearTimeout(timer);
  }, []);

  const handlePdfChange = (event) => setPdfFile(event.target.files[0]);

  const handleJobDescriptionChange = (event) => setJobDescription(event.target.value);

  const handleJobRoleChange = (event) => setJobRole(event.target.value);

  const handleSubmit = (event) => {
    setSubmitting(true);
    event.preventDefault();
    const formData = new FormData();
    formData.append('resume', pdfFile);
    formData.append('jd', jobDescription);
    formData.append('role', jobRole);

    fetch('http://localhost:3000/upload', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Response:', data);
        setRes(data.response);
        navigate('/response', { state: { response: data.response } });
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div>
      {loading ? (
        <div className="loading">
          <div className="spinner"></div>
        </div>
      ) : (
        <div className="container">
          <h1 className="title">Find Bullet Points</h1>
          <form onSubmit={handleSubmit} className="form">
            <label className="label">
              Upload Your Resume Here:
              <input
                type="file"
                accept=".pdf"
                onChange={handlePdfChange}
                className="input-file"
                required
              />
            </label>
            <br />
            <label className="label">
              Job Description:<br />
              <textarea
                value={jobDescription}
                onChange={handleJobDescriptionChange}
                className="input-textarea"
                placeholder="Job Description"
                required
              />
            </label>
            <br />
            <label className="label">
              Job Role:
              <input
                type="text"
                value={jobRole}
                onChange={handleJobRoleChange}
                className="input-text"
                placeholder="Job Role"
              />
            </label>
            <br />
            <button type="submit" className="submit-button" disabled={submitting}>
              {submitting ? 'Submitting...' : 'Submit'}
            </button>

          </form>
        </div>
      )}
    </div>
  );
}

export default Score;
