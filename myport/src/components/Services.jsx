import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { HiOutlineUsers } from 'react-icons/hi'; // A nice icon for services

// We create an array of service data to avoid repetition
const servicesData = [
  { title: 'App Design' },
  { title: 'App Design' },
  { title: 'App Design' },
  { title: 'App Design' },
  { title: 'App Design' },
  { title: 'App Design' },
];

const Services = ({ setActiveLink }) => {
  // This hook tells us when the component is visible on screen
  const { ref, inView } = useInView({
    threshold: 0.5, // Trigger when 50% of the component is visible
  });

  // This effect calls the function from App.jsx to update the active link
  useEffect(() => {
    if (inView) {
      setActiveLink('services');
    }
  }, [inView, setActiveLink]);


  return (
    // We attach the 'ref' from the hook and an 'id' for scrolling
    <section ref={ref} id="services" className="services-section">
      <div className="services-header">
        <h2>Services</h2>
        <p>Lorem ipsum dolor sit amet consectetur. Imperdiet convallis blandit felis ligula aliquam</p>
      </div>
      <div className="services-grid">
        {servicesData.map((service, index) => (
          <div key={index} className="service-card">
            <HiOutlineUsers className="service-icon" />
            <h3>{service.title}</h3>
            <p>Lorem ipsum dolor sit amet . Imperdiet Lorem ipsum dolor sit amet consectetur</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;