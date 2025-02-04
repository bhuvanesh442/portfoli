import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./port.css";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <h1 className="nav-title">Bhuvanesh B</h1>
        <Link to="/contact">
          <button className="nav-contact-btn">Contact</button>
        </Link>
       
          <Link to="/" >
            <h3 className="nav-contact-h3" >Home</h3>
          </Link>
        
        <button className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>
      </nav>

      <div className={`nav-menu ${isOpen ? "open" : ""}`}>
        <ul>
          <li>
            <Link to="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setIsOpen(false)}>
              About
            </Link>
          </li>
          <li>
            <Link to="/projects" onClick={() => setIsOpen(false)}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
