import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import profilePic from '../assets/profile-pic.png';
import { HiDownload } from 'react-icons/hi';

const About = ({ setActiveLink }) => {
  // Hook to detect when this component is visible
  const { ref, inView } = useInView({
    threshold: 0.4, // Trigger when 40% of the component is visible
  });

  // Effect to update the active link in App.jsx
  useEffect(() => {
    if (inView) {
      setActiveLink('about');
    }
  }, [inView, setActiveLink]);

  return (
    <section ref={ref} id="about" className="about-section">
      <div className="about-header">
        <h2>About Me</h2>
        <p>User Interface And User Experience And Also Video Editing</p>
      </div>
      <div className="about-content">
        <div className="about-image-container">
          <img src={profilePic} alt="Mahmood Fazile" className="about-image" />
        </div>
        <div className="about-text-content">
          <p>
            A software engineer, the modern-day architect of digital realms, navigates the ethereal landscapes of code, sculpting intangible structures that shape our technological world. With fingers poised over keyboards like virtuoso pianists, they compose symphonies of logic, their minds a labyrinth of algorithms and solutions. Their canvas is a screen, a vast expanse where lines of code dance in intricate patterns, weaving the fabric of programs and applications.
          </p>
          <button className="btn btn-primary">
            <HiDownload size={20} />
            <span>Download CV</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;