import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [role, setRole] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState(false);
  const navigate = useNavigate();

  const handleRole = (e) => {
    setRole(e.target.value);
  };

  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (file && role && description) {
      const formData = new FormData();
      formData.append("resume", file);
      formData.append("role", role);
      formData.append("description", description);

      setLoading(true); // Set loading state to true

      try {
        // Simulated fetch request (replace with actual fetch)
        // const response = await fetch(api, {
        //   method: "POST",
        //   body: formData,
        // });
        // const data = await response.json();
        const data = { score: "85", positives: ["experience in AI", "strong communication skills"], negatives: ["lack of specific technical skills"] }; // Simulated response data

        if (data.err) {
          alert("Server error, please try again");
          console.log("Server side error");
          setServerError(true);
        } else {
          console.log("Success:", data);
          // Handle response data (setResponseData(data); navigate("/response");)
          navigate("/response");
        }
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false); // Set loading state to false regardless of the outcome
      }
    } else {
      console.error("All fields are required.");
    }
  };

  return (
    <div className="container">
      <div className="header">
        <h1>Gemini powered AI model analyzes your resume for formatting, keywords, and more. Improve your resume in minutes, not hours.</h1>
      </div>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <input
            type="text"
            required
            value={role}
            placeholder="Job role"
            onChange={handleRole}
            className="input"
          />
        </div>
        <div className="form-group">
          <textarea
            required
            value={description}
            onChange={handleDescription}
            className="textarea"
            placeholder="Job Description"
          ></textarea>
        </div>
        <div className="form-group">
          <input
            required
            type="file"
            onChange={handleFileChange}
            className="file-input"
          />
          <p className="file-info">Max file size 10mb</p>
          {serverError && (
            <p className="error-message">Server error, please try again</p>
          )}
        </div>
        <button
          className={`btn ${loading ? "btn-disabled" : ""}`}
          type="submit"
          disabled={loading}
        >
          {loading ? <span className="loading"></span> : "Submit"}
        </button>
      </form>
    </div>
  );
}
