import React from 'react'
import './Footer.css'
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

function Footer() {
  return (
    <div className='footer'>
      <div className='footer-links'>
        <div className='footer-col'>
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/signup">Get Started</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/login">login</a></li>
          </ul>
        </div>
        <div className='footer-col'>
          <h3>Follow Us</h3>
          <ul className='footer-social-icons'>
            <li><a href="https://www.instagram.com/rhymer_ke/"><InstagramIcon/></a></li>
            <li><a href="https://www.facebook.com/profile.php?id=100079997930132"><FacebookIcon/></a></li>
            <li><a href="https://twitter.com/olivebishop_dev"><TwitterIcon/></a></li>
            <li><a href="https://wa.link/03biqi"><WhatsAppIcon/></a></li>
          
          </ul>
        </div>
        <div className='footer-col'>
          <h3>Contact Us</h3>
          <ul>
            <li>Address: Mfanyikazi Abroad</li>
            <li>Phone: +(254) 799799223</li>
            <li>Email: mfanyikaziAbroad@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr/>
      <p className="footer-copy">Olive Bishop 2023; All rights reserved </p>
    </div>
  )
}

export default Footer
