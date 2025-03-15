import React from 'react';
import '../pages/Certification.css'
import img1 from '../pages/cert-1.jpg'
import img2 from '../pages/cert-2.jpg'
const Certifications = () => {
    const certificates = [
      {
        image: img1,
        title: 'Machine Learning Internship',
        description: 'Completed Machine Learning Internship On the platform SkillDezire.',
      },
      {
        image: img2,
        title: 'Academor Internship',
        description: 'Completed Machine Learning Internship On the platform Academor.',
      }
      
    ];
  
    return (
      <div className='cont1'>
        <section className="certifications-section">
        <h2 className="certifications-title">My Certifications</h2>
        <div className="certifications-container">
          {certificates.map((cert, index) => (
            <div key={index} className="cert-card">
              <div className="cert-image-wrapper">
                <a href={cert.image}><img src={cert.image} alt={cert.title} className="cert-image" /></a>
              </div>
              <h3 className="cert-title">{cert.title}</h3>
              <p className="cert-description">{cert.description}</p>
            </div>
          ))}
        </div>
      </section>
      </div>
    );
  };
  
  export default Certifications;