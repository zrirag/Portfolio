import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import notAvailImage from '../assets/notavail.png'; // Make sure this path is correct

// Mock Data for portfolio projects
const allProjects = [
  { id: 1, name: 'Zalima Project', category: 'Website Design', image: notAvailImage },
  { id: 2, name: 'Black Minimal', category: 'App Mobile Design', image: notAvailImage },
  { id: 3, name: 'Undercover', category: 'Braiding', image: notAvailImage },
  { id: 4, name: 'Desktop App UI', category: 'App Desktop', image: notAvailImage },
  { id: 5, name: 'Mobile Site', category: 'Website Design', image: notAvailImage },
  { id: 6, name: 'Branding Mockup', category: 'Braiding', image: notAvailImage },
];

const filters = ['All', 'Website Design', 'App Mobile Design', 'App Desktop', 'Braiding'];

const Portfolio = ({ setActiveLink }) => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState(allProjects);
  
  // Hook for scroll-based navigation highlighting
  const { ref, inView } = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      setActiveLink('portfolio');
    }
  }, [inView, setActiveLink]);

  // Effect to handle the filtering logic
  useEffect(() => {
    if (activeFilter === 'All') {
      setFilteredProjects(allProjects);
    } else {
      const newFilteredProjects = allProjects.filter(
        (project) => project.category === activeFilter
      );
      setFilteredProjects(newFilteredProjects);
    }
  }, [activeFilter]);

  return (
    <section ref={ref} id="portfolio" className="portfolio-section">
      <div className="portfolio-header">
        <h2>Portfolio</h2>
      </div>
      
      <div className="portfolio-filters">
        {filters.map((filter) => (
          <button
            key={filter}
            className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="portfolio-grid">
        {filteredProjects.map((project) => (
          <div key={project.id} className="portfolio-card">
            <img src={project.image} alt={project.name} />
            <div className="portfolio-info">
              <h3>{project.name}</h3>
              <p>{project.category}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;