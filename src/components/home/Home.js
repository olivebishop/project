import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import logo from '../.././assets/logo.png'
import './Home.css'
const Home = () => {
  return (
    <div className='main-hero'>
    <div className='hero-container'>
      <div className='left-container'>
        <h4>protecting kenyan workers around the globe</h4>
        <h1>Avoid Rogue Agencies</h1>
        <p>OUR WORK IS TO PROTECT KENYAN WORKER WHO WORKS ABROAD.DO YOU WANT TO WORK ABROAD?</p>
        <Button sx={{marginLeft:'10px'}} variant='text'component={Link} to="/signup">Get started</Button>
        </div>
        <div className='right-container'>
        <div className='main-circle'></div>
        <div className='main-container-image'>
        <img src={logo} alt='logo'></img>
        </div>
        </div>
    </div>
    </div>
  );
};

export default Home;
