import React from 'react';
import '.././mainpage/css/Newsletters.css'

const Newsletter = () => {
  return (
    <section id="newsletter" className="newsletter">
      <div className="container">
        <h2 className="newsletter__title">Subscribe to Our Newsletter</h2>
        <p className="newsletter__subtitle">Stay up to date with our latest news and updates</p>
        <form className="newsletter__form">
          <input className="newsletter__input" type="email" placeholder="Enter your email address" />
          <button className="newsletter__btn" type="submit">Subscribe</button>
        </form>
      </div>
    </section>
  );
}

export default Newsletter;
