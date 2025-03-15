import React, { useEffect } from 'react';
import './text.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Text() {
  useEffect(() => {
    const timer = setTimeout(() => {
      document.querySelector('.App').classList.add('show');
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <div>
      <h1>Hi, I am MahaLakshmi.</h1>
      <p className="description">
        I am a passionate Full Stack Developer skilled in building responsive and dynamic web applications. 
        I specialize in front-end design and back-end logic, creating seamless user experiences.
      </p>
      <div className="social-icons">
        <a href='https://www.linkedin.com/in/maha-rudraboina-9a5723280?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' target="_blank" rel="noopener noreferrer">
          <FaLinkedin style={{ color: '#0077b5', fontSize: '45px', marginRight: '50px' }} />
        </a>
        <a href='https://github.com/maha2040' target="_blank" rel="noopener noreferrer">
          <FaGithub style={{ color: '#333', fontSize: '45px' }} />
        </a>
      </div>
      <div className='but'>
        <button type='submit'><Link to={"/hireme"} className='btn'>Hire Me</Link></button>
      </div>
    </div>
    </div>
  );
}

export default Text;
