import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import emailjs from '@emailjs/browser';

const Contact = ({ setActiveLink }) => {
  const { ref, inView } = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      setActiveLink('contact');
    }
  }, [inView, setActiveLink]);

  const form = useRef();
  const [status, setStatus] = useState('Send'); // For button text and status

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('Sending...');

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus('Sent!');
          form.current.reset(); // Reset form on success
          setTimeout(() => setStatus('Send'), 2000); // Reset button text after 2 seconds
        },
        (error) => {
          console.log(error.text);
          setStatus('Failed!');
          setTimeout(() => setStatus('Send'), 2000); // Reset button text after 2 seconds
        }
      );
  };

  return (
    <section ref={ref} id="contact" className="contact-section">
      <div className="contact-header">
        <h2>Contact me</h2>
        <p>Cultivating Connections: Reach Out And Connect With Me</p>
      </div>
      <form ref={form} className="contact-form" onSubmit={sendEmail}>
        {/* Add 'name' attributes to each input to match your EmailJS template */}
        <input type="text" name="name" placeholder="Name" required />
        <input type="email" name="email" placeholder="Email" required />
        <input type="tel" name="phone" placeholder="Phone Number" />
        <div className="select-wrapper">
          <select name="service" required defaultValue="">
            <option value="" disabled>Service Of Interest</option>
            <option value="Website Design">Website Design</option>
            <option value="App Mobile Design">App Mobile Design</option>
            <option value="App Desktop">App Desktop</option>
            <option value="Braiding">Braiding</option>
          </select>
        </div>
        <input type="text" name="timeline" placeholder="Timeline" />
        <textarea name="message" placeholder="Project Details..." rows="5" required></textarea>
        <button type="submit" className="btn btn-secondary" disabled={status === 'Sending...'}>
          {status}
        </button>
      </form>
    </section>
  );
};

export default Contact;