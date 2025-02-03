import React, { useState } from "react";
import "./port.css";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import { HashRouter  , Routes, Route } from "react-router-dom";
import Home from "./home";

const Portfolio = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Navbar />
      <HashRouter  >
          <Routes>
            <Route path="/home" element={<Home/>} />
            <Route path="/about" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Projects" element={<Projects />} />
          </Routes>
      </HashRouter>
    </div>
  );
};

export default Portfolio;
