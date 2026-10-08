import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <span className="logo-dot"></span>
        PRELIC
      </div>

      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#services">Services</a>
        <a href="#solutions">Solutions</a>
        <a href="#projects">Projects</a>
        <a href="#about">About</a>
      </div>

      <a href="#contact" className="nav-button">
        Contact Us <span>↗</span>
      </a>
    </nav>
  );
}