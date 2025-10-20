import React from 'react';

const Navbar = ({ activeLink }) => {
  return (
    <nav className="navbar">
      <div className="nav-logo">LOGO</div>
      <ul className="nav-links">
        <li><a href="#home" className={activeLink === 'home' ? 'nav-link active' : 'nav-link'}>Home</a></li>
        <li><a href="#services" className={activeLink === 'services' ? 'nav-link active' : 'nav-link'}>Services</a></li>
        <li><a href="#about" className={activeLink === 'about' ? 'nav-link active' : 'nav-link'}>About me</a></li>
        <li><a href="#portfolio" className={activeLink === 'portfolio' ? 'nav-link active' : 'nav-link'}>Portfolio</a></li>
        {/* Modify this line */}
        <li><a href="#contact" className={activeLink === 'contact' ? 'nav-link active' : 'nav-link'}>Contact me</a></li>
      </ul>
      <button className="btn btn-primary">Hire Me</button>
    </nav>
  );
};

export default Navbar;