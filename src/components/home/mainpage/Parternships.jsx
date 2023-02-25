import React from "react";
import "../mainpage/css/Partnerships.css";

const Partnerships = () => {
  return (
    <section id="partnerships">
      <div className="container">
        <h2>Our Partnerships</h2>
        <div className="partnerships-grid">
          <div className="partnership">
            <img src="./images/partner1.png" alt="Partner 1" />
          </div>
          <div className="partnership">
            <img src="./images/partner2.png" alt="Partner 2" />
          </div>
          <div className="partnership">
            <img src="./images/partner3.png" alt="Partner 3" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partnerships;
