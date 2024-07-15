import React, { useState, useEffect } from 'react';
import './Kk.css';

function KK() {
  const [pdfFile, setPdfFile] = useState(null);
  const [jobDescription, setJobDescription] = useState('');
  const [jobRole, setJobRole] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const handlePdfChange = (event) => {
    setPdfFile(event.target.files[0]);
  };

  const handleJobDescriptionChange = (event) => {
    setJobDescription(event.target.value);
  };

  const handleJobRoleChange = (event) => {
    setJobRole(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('PDF File:', pdfFile);
    console.log('Job Description:', jobDescription);
    console.log('Job Role:', jobRole);
  };

  return (
    <div>
      {loading ? (
        <div className="loading">
          <div className="spinner"></div>
        </div>
      ) : (
        <div className="container">
          <h1 className="title">Job Application Form</h1>
          <form onSubmit={handleSubmit} className="form">
            <label className="label">
              Upload Your Resume Here:
              <input
                type="file"
                accept=".pdf"
                onChange={handlePdfChange}
                className="input-file"
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
            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default KK;
