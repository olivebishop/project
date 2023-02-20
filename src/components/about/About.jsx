import { useEffect } from 'react';
import './About.css';
import about from '../../assets/about.svg';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {

  useEffect(() => {
    AOS.init({duration: 2000});
  }, []);

  return (
    <div className="about-container">
      <div className="about-text" data-aos="fade-right">
        <h1>About Us</h1>
        <h5>Who are we?</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae. Sed dui lorem, adipiscing in adipiscing et, interdum nec metus. Mauris ultricies, justo eu convallis placerat, felis enim ornare nisi, vitae mattis nulla ante id dui.</p>
      </div>
      <div className="about-image" data-aos="fade-left">
        <img src={about} alt="About us" />
      </div>

      {/* FAQ section */}
      <div className="faq-container" data-aos="fade-left">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-question">
          <h3>What is your return policy?</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="faq-question">
          <h3>How long does shipping take?</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="faq-question">
          <h3>How do I contact customer service?</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
