import React from 'react';
import '../components/about/About.css';
import logo from '../assets/logo.png';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-text">
        <h1>About Us</h1>
        <h5>Who are we?</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae. Sed dui lorem, adipiscing in adipiscing et, interdum nec metus. Mauris ultricies, justo eu convallis placerat, felis enim ornare nisi, vitae mattis nulla ante id dui.</p>
      </div>
      <div className="about-image">
        <img src={logo} alt="About us" />
      </div>
    </div>
  );
};

export default About;
