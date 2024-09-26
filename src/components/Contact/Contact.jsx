import React, { useState } from 'react';
import './contact.css';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import ReCAPTCHA from 'react-google-recaptcha';

const Contact = () => {
  const [input, setInput] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [captcha, setCaptcha] = useState(null);
  const [error, setError] = useState({
    email: false,
    required: false,
  });

  const handleSendMail = (e) => {
    e.preventDefault();

    if (!captcha) {
      alert('Please complete the captcha!');
      return;
    }

    if (!input.email || !input.message || !input.name) {
      setError({ ...error, required: true });
      return;
    } else if (error.email) {
      return;
    }

    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', input, 'YOUR_PUBLIC_KEY')
      .then((response) => {
        alert('Message sent successfully!');
        setInput({ name: '', email: '', message: '' });
        setCaptcha(null);
      })
      .catch((error) => {
        alert('Failed to send message. Please try again later.');
      });
  };

  return (
    <div className="contact-main">
      <div className="contact-left">
        <h2>Contact With Me</h2>

        <form className="contact-form">
          <label>Your Name:</label>
          <input 
            type="text" 
            name="name" 
            placeholder="Enter your name" 
            value={input.name}
            onChange={(e) => setInput({ ...input, name: e.target.value })}
            required 
          />

          <label>Your Email:</label>
          <input 
            type="email" 
            name="email" 
            placeholder="Enter your email" 
            value={input.email}
            onChange={(e) => setInput({ ...input, email: e.target.value })}
            required 
          />
          {error.required && !input.email && <span className="error">Please provide a valid email!</span>}

          <label>Your Message:</label>
          <textarea 
            name="message" 
            placeholder="Enter your message" 
            value={input.message}
            onChange={(e) => setInput({ ...input, message: e.target.value })}
            required
          ></textarea>
          {error.required && !input.message && <span className="error">Message is required!</span>}

          <div className="recaptcha-wrap">
            <ReCAPTCHA
              sitekey="YOUR_RECAPTCHA_SITE_KEY"
              onChange={(code) => setCaptcha(code)}
            />
          </div>

          <button type="submit" onClick={handleSendMail}>
            Send Message <FaEnvelope />
          </button>
        </form>
      </div>

      <div className="contact-right">
        <div className='contact-bottom'>
          <div className="contact-info">
            <div className="info-item">
              <FaEnvelope className="icon" />
              <p>abusaid7388@gmail.com</p>
            </div>
            <div className="info-item">
              <FaPhone className="icon" />
              <p>+8801608797655</p>
            </div>
            <div className="info-item">
              <FaMapMarkerAlt className="icon" />
              <p>Middle Badda, Dhaka, Bangladesh - 1212</p>
            </div>
          </div>

          <div className="social-media-wrap">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
