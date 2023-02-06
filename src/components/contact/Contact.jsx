import React from 'react'
import { Button, Card, CardContent, Link, TextField } from '@mui/material';
import contact from '../.././assets/contact.svg';
import './Contact.css'
function Contact() {
  return (
    <div className='contact'>
      <div className="contact-img">
      <img src={contact} alt='contact-svg'></img>
      </div>
      <Card className='card'>
        <h1>CHAT WITH  US</h1>
        <CardContent>
          <div>
            <TextField className='text' id="standard-basic" label='Username' variant='standard'></TextField>
          </div>
          <div>
            <TextField className='text' id="standard-basic" label='Email' variant='standard'></TextField>
          </div>
          <div>
            <TextField className='text mess' id="standard-basic" label='Message' variant='standard'></TextField>
          </div>
          <Button variant='outlined' className='btn'>Send Message</Button>         
        </CardContent>
      </Card>
    </div>
  );
};
export default Contact