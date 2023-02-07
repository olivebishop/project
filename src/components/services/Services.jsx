import React from 'react';
import '../services/Services.css';
import one from '.././../assets/one.svg';
import two from '.././../assets/two.svg';
import three from '.././../assets/three.svg';
const Services = () => {
  return (
    <div className="services-container">
      <h1 className="services-header">Our Services</h1>
      <div className="services-grid">
        <div className="service">
          <img
            src={one}
            alt="Service 1"
            className="service-img"
          />
          <h2 className="service-title">Connecting Workers</h2>
          <p className="service-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in
            tincidunt elit.
          </p>
        </div>
        <div className="service">
          <img
            src={two}
            alt="Service 2"
            className="service-img"
          />
          <h2 className="service-title">Travel Safety</h2>
          <p className="service-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in
            tincidunt elit.
          </p>
        </div>
        <div className="service">
          <img
            src={three}
            alt="Service 3"
            className="service-img"
          />
          <h2 className="service-title">Insurance to Workers</h2>
          <p className="service-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in
            tincidunt elit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
