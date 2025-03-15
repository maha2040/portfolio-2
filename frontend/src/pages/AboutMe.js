import React from 'react';
import '../pages/AboutMe.css'; 

const AboutMe = () => {
  return (
    <div className="about-container">
      <div className="about-card">
        
        {/* Left Section - Profile Image */}
        <div className="about-left">
          <div className="profile-pic-container">
            
          </div>
        </div>

        {/* Right Section - Details */}
        <div className="about-right">
          <h2 className="about-title">About Me</h2> 
          <p className="about-description">
            Hi, I'm <span className="highlight">MahaLakshmi</span>! A passionate developer skilled in 
            <span className="highlight"> MERN stack, React, and more</span>. 
            I love crafting interactive web applications with beautiful designs. 
            My journey in tech is fueled by <span className="highlight">curiosity and creativity</span>, 
            always eager to learn and explore new technologies.
          </p>
          <h3 className="about-subtitle">Education & Interests</h3>
          <ul className="about-list">
            <li>🎓 Pursuing Computer Science Degree</li>
            <li>🚀 Passionate about App Development and AI</li>
            <li>🎨 Creative in designing user experiences</li>
            <li>📚 Always learning and growing</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
