import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import profilePic from '../assets/profile-pic.png';
import { FaInstagram, FaLinkedin, FaDribbble, FaBehance } from 'react-icons/fa';

const Hero = ({ setActiveLink }) => {
  // Hook to detect when this component is in view
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  // Effect to update the active link in the parent component (App.jsx)
  useEffect(() => {
    if (inView) {
      setActiveLink('home');
    }
  }, [inView, setActiveLink]);

  return (
    // Add the ref from the hook and the id for scrolling
    <section ref={ref} id="home" className="hero">
      <div className="hero-content">
        <p className="hero-intro">Hi I am</p>
        <h1 className="hero-name">Mahmood Fazile</h1>
        <h2 className="hero-title">UI/UX designer</h2>

        <div className="social-icons">
          <a href="#" aria-label="Instagram"><FaInstagram /></a>
          <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
          <a href="#" aria-label="Dribbble"><FaDribbble /></a>
          <a href="#" aria-label="Behance"><FaBehance /></a>
        </div>

        <div className="hero-buttons">
          <button className="btn btn-primary">Hire Me</button>
          <button className="btn btn-secondary">Download CV</button>
        </div>

        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-number">5+</span>
            <span className="stat-label">Experiences</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">20+</span>
            <span className="stat-label">Project done</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">80+</span>
            <span className="stat-label">Happy Clients</span>
          </div>
        </div>
      </div>
      <div className="hero-image-container">
        <img src={profilePic} alt="Mahmood Fazile" className="hero-image" />
      </div>
    </section>
  );
};

export default Hero;