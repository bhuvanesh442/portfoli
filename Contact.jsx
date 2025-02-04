import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaEnvelope, FaFacebook, FaInstagram } from "react-icons/fa";


export default function Contact() {
  return (
    <div className="home-contact">
    <h2 className="home-contact-title">Get in Touch</h2>
    <p className="home-contact-description">
      Feel free to reach out to me on any of these platforms!
    </p>

    <div className="home-contact-links">
      <Link to="https://www.linkedin.com/in/yourprofile" target="_blank" className="contact-icon">
        <FaLinkedin />
      </Link>
      <Link to="mailto:your@email.com" className="contact-icon">
        <FaEnvelope />
      </Link>
      <Link to="https://www.facebook.com/yourprofile" target="_blank" className="contact-icon">
        <FaFacebook />
      </Link>
      <Link to="https://www.instagram.com/yourprofile" target="_blank" className="contact-icon">
        <FaInstagram />
      </Link>
    </div>
  </div>
  );
}
