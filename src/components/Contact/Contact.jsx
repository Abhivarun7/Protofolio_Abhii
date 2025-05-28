import React, { useState, useRef } from 'react';
import './contact.css';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import SlideInNotifications from './SlideNotofication';
import DownloadButton from "./DownloadButton"; 

const Contact = () => {
  const form = useRef();
  const [input, setInput] = useState({ name: '', email: '', message: '' });
  const [notifications, setNotifications] = useState([]);

  const sendEmail = (e) => {
    e.preventDefault();

    // Validate input fields
    if (!input.email || !input.message || !input.name) {
      addNotification("Please fill in all fields!", "error");
      return;
    }

    // Sending email using EmailJS
    emailjs
      .sendForm(
        'service_wb29vek',
        'template_ej4ltb7',
        form.current,
        '9IDhRQSCJZ9Cd3fFV'
      )
      .then(
        () => {
          addNotification("Message sent successfully!", "success");
          // Resetting input fields after successful send
          setInput({ name: '', email: '', message: '' });
        },
        (error) => {
          addNotification("Message failed to send.", "error");
        }
      );
  };

  // Function to add notifications
  const addNotification = (text, type) => {
    const id = Math.random();
    setNotifications((prev) => [...prev, { id, text, type }]);
    setTimeout(() => {
      setNotifications((prev) => prev.filter((notif) => notif.id !== id));
    }, 3000); // Auto-remove after 3 seconds
  };

  return (
    <>
      <div className="contact-main">
        <SlideInNotifications notifications={notifications} />
        <div className="contact-left">
          <div className='contact-left-main'>
            <h2>Contact</h2>

            <form className="contact-form" ref={form} onSubmit={sendEmail}>
              <label>Your Name:</label>
              <input
                type="text"
                name="user_name"
                placeholder="Enter your name"
                value={input.name}
                onChange={(e) => setInput({ ...input, name: e.target.value })}
                required
              />

              <label>Your Email:</label>
              <input
                type="email"
                name="user_email"
                placeholder="Enter your email"
                value={input.email}
                onChange={(e) => setInput({ ...input, email: e.target.value })}
                required
              />

              <label>Your Message:</label>
              <textarea
                name="message"
                placeholder="Enter your message"
                value={input.message}
                onChange={(e) => setInput({ ...input, message: e.target.value })}
                required
              ></textarea>

              <button type="submit">
                Send Message <FaEnvelope className="icon" />
              </button>
            </form>
          </div>
        </div>

        <div className="contact-right">
          <div className='contact-bottom-up'>
            <div className="info-item">
                <div className="download-matter">
                  <p>Download my Resume</p>
                  <DownloadButton />
                </div>
            </div>      
          </div>
          <div className="contact-bottom-down">
            <div className="contact-info">
              
              <div className="info-item">
                <FaEnvelope className="icon" />
                <p>varun8374041@gmail.com</p>
              </div>
              <div className="info-item">
                <FaPhone className="icon" />
                <p>7093353332</p>
              </div>
              <div className="info-item">
                <FaMapMarkerAlt className="icon" />
                <p>Tannuku, Andhra Pradesh, India</p>
              </div>
            </div>

            <div className="social-media-wrap">
              <a href="https://github.com/Abhivarun7" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/abhi-ram-3b9251279?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BLxWYvK8VTWKf3bcKs%2B6PvA%3D%3D" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="https://www.instagram.com/_bhi.v_run?igsh=ZWg3N3Q5bjJpNGNx" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Contact;
