// src/components/ResumeUploadForm.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styles from './ResumeUploadForm.module.css';

const ResumeUploadForm = () => {
  const [resume, setResume] = useState(null);
  const [jobDescription, setJobDescription] = useState('');
  const navigate = useNavigate();

  const handleUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('resume', resume);
    formData.append('jobDescription', jobDescription);

    try {
      const res = await axios.post('http://localhost:5000/api/resume/upload', formData);
      console.log(res.data);
      navigate('/score');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className={styles.uploadFormContainer}>
      <form onSubmit={handleUpload} className={styles.uploadForm}>
        <h2>Upload Your Resume</h2>
        <input
          type="file"
          className={styles.inputFile}
          onChange={(e) => setResume(e.target.files[0])}
          required
        />
        <textarea
          className={styles.textareaJobDescription}
          value={jobDescription}
          onChange={(e) => setJobDescription(e.target.value)}
          placeholder="Job Description"
          required
        />
        <button type="submit" className={styles.btnUpload}>Upload</button>
      </form>
    </div>
  );
};

export default ResumeUploadForm;