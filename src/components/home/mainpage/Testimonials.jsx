import React from "react";
import ".././mainpage/css/Testimony.css";
import testimonial from '../../.././assets/testimonial.jpg'

const Testimony = () => {
  return (
    <section id="testimony">
      <div className="container">
        <h2>Testimonials</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card">
            <img src={testimonial} alt="a" />
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                euismod mauris vitae tellus feugiat, nec bibendum justo
                bibendum."
              </p>
              <h5>John Doe</h5>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
            <img src={testimonial} alt="a" />
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                euismod mauris vitae tellus feugiat, nec bibendum justo
                bibendum."
              </p>
              <h5>Jane Smith</h5>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
            <img src={testimonial} alt="a" />
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                euismod mauris vitae tellus feugiat, nec bibendum justo
                bibendum."
              </p>
              <h5>Mark Johnson</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimony;
