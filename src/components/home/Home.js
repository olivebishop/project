import React from 'react';
import Header from '.././home/header/Header';
import HeroSection from './mainpage/HeroSection';
import Benefits from './mainpage/Benefits';
import HowItWorks from './mainpage/HowItWorks';
import Partnerships from './mainpage/Parternships';
import Testimonials from './mainpage/Testimonials';
import Newsletter from './mainpage/Newsletters';
const Home = () => {
  return (
    <div>
    <Header />
    <HeroSection />
    <Benefits />
    <HowItWorks />
    <Partnerships />
    <Testimonials />
    <Newsletter />
  </div>
  );
};

export default Home;
