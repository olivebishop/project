import React from "react";
import '../mainpage/css/HowItWorks.css';

const HowItWorks = () => {
  return (
    <section className="how-it-works-container">
      <h2>How It Works</h2>
      <div className="how-it-works-grid">
        <div className="step">
          <div className="step-image">
            <img src="/img/step1.png" alt="Step 1" />
          </div>
          <h3>Step 1</h3>
          <p>Sign up for an account and choose your subscription plan.</p>
        </div>
        <div className="step">
          <div className="step-image">
            <img src="/img/step2.png" alt="Step 2" />
          </div>
          <h3>Step 2</h3>
          <p>Upload your products and set up your online store.</p>
        </div>
        <div className="step">
          <div className="step-image">
            <img src="/img/step3.png" alt="Step 3" />
          </div>
          <h3>Step 3</h3>
          <p>Start selling your products and manage your orders.</p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
