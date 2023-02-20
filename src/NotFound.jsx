
import PNF from './assets/PNF.svg';
import './NotFound.css';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const NotFound = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="notfound" data-aos="fade-up">
      <h4>Oops!<br/>PAGE NOT FOUND!!</h4>
      <img src={PNF} alt="Not found"></img>
    </div>
  );
};

export default NotFound;
