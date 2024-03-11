// Form.js

import React, { useState } from 'react';
import './Form.css';

const Form = () => {
  const [formData, setFormData] = useState({
    date: '',
    day: '',
    step: 'birth',
    experience: '',
    bestStep: [],
    favoriteStep: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox'
        ? (checked ? [...prevData[name], value] : prevData[name].filter(step => step !== value))
        : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for sharing your experience!');
    window.location.reload();
  };

  return (
    <div className="form-container">
      <h5>Share Your Life Experience</h5>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <input type="date" name="date" value={formData.date} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label htmlFor="day">Day:</label>
          <input type="text" name="day" value={formData.day} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label htmlFor="step">Life Step:</label>
          <select name="step" value={formData.step} onChange={handleChange}>
            <option value="birth">Birth</option>
            <option value="school">School</option>
            <option value="college">College</option>
            <option value="job">Job</option>
            <option value="marriage">Marriage</option>
            <option value="kids">Kids</option>
            <option value="oldage">Old Age</option>
          </select>
        </div>

        <div className="form-group">
          <label>Best Step in Your Life:</label>
          <div>
            <input type="checkbox" name="bestStep" value="birth" onChange={handleChange} />
            <span>Birth</span>
          </div>
          <div>
            <input type="checkbox" name="bestStep" value="school" onChange={handleChange} />
            <span>School</span>
          </div>
          <div>
            <input type="checkbox" name="bestStep" value="college" onChange={handleChange} />
            <span>College</span>
          </div>
          <div>
            <input type="checkbox" name="bestStep" value="job" onChange={handleChange} />
            <span>Job</span>
          </div>
          <div>
            <input type="checkbox" name="bestStep" value="marriage" onChange={handleChange} />
            <span>Marriage</span>
          </div>
          <div>
            <input type="checkbox" name="bestStep" value="kids" onChange={handleChange} />
            <span>Kids</span>
          </div>
          <div>
            <input type="checkbox" name="bestStep" value="oldage" onChange={handleChange} />
            <span>Old Age</span>
          </div>
        </div>

        <div className="form-group">
          <label>Favorite Step in Your Life:</label>
          <div>
            <input type="radio" name="favoriteStep" value="birth" onChange={handleChange} checked={formData.favoriteStep === 'birth'} />
            <span>Birth</span>
          </div>
          <div>
            <input type="radio" name="favoriteStep" value="school" onChange={handleChange} checked={formData.favoriteStep === 'school'} />
            <span>School</span>
          </div>
          <div>
            <input type="radio" name="favoriteStep" value="college" onChange={handleChange} checked={formData.favoriteStep === 'college'} />
            <span>College</span>
          </div>
          <div>
            <input type="radio" name="favoriteStep" value="job" onChange={handleChange} checked={formData.favoriteStep === 'job'} />
            <span>Job</span>
          </div>
          <div>
            <input type="radio" name="favoriteStep" value="marriage" onChange={handleChange} checked={formData.favoriteStep === 'marriage'} />
            <span>Marriage</span>
          </div>
          <div>
            <input type="radio" name="favoriteStep" value="kids" onChange={handleChange} checked={formData.favoriteStep === 'kids'} />
            <span>Kids</span>
          </div>
          <div>
            <input type="radio" name="favoriteStep" value="oldage" onChange={handleChange} checked={formData.favoriteStep === 'oldage'} />
            <span>Old Age</span>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="experience">Share Your Experience:</label>
          <textarea name="experience" value={formData.experience} onChange={handleChange} />
        </div>

        <div className="form-group">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Form;


