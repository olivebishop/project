import React from "react";
import "../mainpage/css/Partnerships.css";
import a from '../../../assets/a.png';
import b from '../../../assets/b.jpg';
import c from '../../../assets/c.png'

const Partnerships = () => {
  return (
    <section id="partnerships">
      <div className="container">
        <h2>Our Partnerships</h2>
        <div className="partnerships-grid">
          <div className="partnership">
          <img src={a} alt="a" />
          </div>
          <div className="partnership">
          <img src={b} alt="b" />
          </div>
          <div className="partnership">
          <img src={c} alt="c" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partnerships;
