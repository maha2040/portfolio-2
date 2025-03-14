import React from 'react';
import '../pages/Certification.css'
import img1 from '../pages/workshop.jpg'
import img2 from '../pages/skilldezire.jpg'
import img3 from '../pages/DevOps.png'
const Certifications = () => {
    const certificates = [
      {
        image: img1,
        title: 'React Developer Certificate',
        description: 'Certified React Developer with hands-on experience in building dynamic and responsive web applications.',
      },
      {
        image: img2,
        title: 'JavaScript Mastery',
        description: 'Mastered advanced JavaScript concepts and best practices for efficient web development.',
      },
      {
        image: img3,
        title: 'Web Development Bootcamp',
        description: 'Completed an intensive bootcamp focusing on full-stack web development with modern technologies.',
      },
      {
        image: img1,
        title: 'Web Development Bootcamp',
        description: 'Completed an intensive bootcamp focusing on full-stack web development with modern technologies.',
      },
      {
        image: img1,
        title: 'Web Development Bootcamp',
        description: 'Completed an intensive bootcamp focusing on full-stack web development with modern technologies.',
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