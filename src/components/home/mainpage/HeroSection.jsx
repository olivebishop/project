import React from "react";
import "../mainpage/css/HeroSection.css";
import one from "../../.././assets/one.png";

function HeroSection() {
  return (
    <div className="hero-container">
      <div className="hero-text">
        <h1>Discover the World</h1>
        <p>Explore amazing destinations around the globe with us.</p>
        <button><a href='/signup'>Get Started</a></button>
      </div>
      <div className="hero-image">
        <div className="round-bg">
          <img src={one} alt="one" />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
