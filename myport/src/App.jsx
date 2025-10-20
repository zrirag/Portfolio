import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact'; // 1. Import the new component
import './App.css';

function App() {
  const [activeLink, setActiveLink] = useState('home');

  return (
    <div className="container">
      <Navbar activeLink={activeLink} />
      <Hero setActiveLink={setActiveLink} />
      <Services setActiveLink={setActiveLink} />
      <About setActiveLink={setActiveLink} />
      <Portfolio setActiveLink={setActiveLink} />
      <Contact setActiveLink={setActiveLink} /> {/* 2. Add the component here */}
    </div>
  );
}

export default App;