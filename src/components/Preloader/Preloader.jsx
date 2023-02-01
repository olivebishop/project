import React from 'react';
import './Preloader.css'
import loader from '../../assets/loader.gif'

const Preloader = () => {
  return (
    <div className="preloader">
      <img src={loader} alt='Loading spinner' />
    </div>
  );
};

export default Preloader;
