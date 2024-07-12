import React, { useState } from 'react';
import './UploadButton.css';

const Hero = () => {
  const [file, setFile] = useState(null);


  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];

    if (selectedFile && selectedFile.type === 'application/pdf') {
      setFile(selectedFile);

    } else {
      alert('Please select a PDF file.');
    }
  };

  return (
    <div className="containers">
      <div className="rectangle">
        <input
          type="file"
          accept=".pdf"
          onChange={handleFileChange}
          style={{ display: 'none' }}
          id="upload-button"
        /><button>
        <label className="custom-file-upload">
  <input id="upload-button" type="file" style={{ display: 'none' }} />
  <span className="button">Upload Your Resume</span>
</label></button>
        {file && <p>Selected file: {file.name}</p>}
      </div>
    </div>
  );
};

export default Hero;
