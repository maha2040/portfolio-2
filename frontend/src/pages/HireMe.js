import React from 'react';
import { FaPhone, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import './HireMe.css';

const HireMe = () => {
  return (
    <div className='hire-wrapper'>
      <section className="hire-me-section">
      <div className="hire-me-container">
        <h2 className="hire-me-title">Let's Connect!</h2>
        <p className="hire-me-subtitle">Feel free to reach out for collaborations or just a friendly chat!</p>
        
        <div className="contact-card">
          <div className="contact-item">
            <FaPhone className="contact-icon" />
            <p>7036570801</p>
          </div>
          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <p>durga.rudraboina@sasi.ac.in</p>
          </div>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/maha-rudraboina-9a5723280?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="social-btn linkedin" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="social-icon" /> LinkedIn
            </a>
            <a href="https://github.com/maha2040" className="social-btn github" target="_blank" rel="noopener noreferrer">
              <FaGithub className="social-icon" /> GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default HireMe;
