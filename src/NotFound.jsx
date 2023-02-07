import React from 'react';
import PNF from './assets/PNF.svg';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="notfound">
      <h4>Oops!<br/>PAGE NOT FOUND!!</h4>
      <img src={PNF} alt="Not found"></img>
    </div>
  );
};

export default NotFound;
