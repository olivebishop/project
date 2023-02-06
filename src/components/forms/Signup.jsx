import { Button, Card, CardContent, Link, TextField } from '@mui/material';
import './Signup.css';
import { Link as RouterLink } from 'react-router-dom';
import React, { useState } from 'react';


function Signup() {
  const [Username,setUsername]= useState('');
  const [Fullname,setFullname]= useState('');
  const [email, setEmail]= useState('');
  const [password, setPassword]= useState('');
  const signUp = e =>{
    e.preventDefault();
    console.log(Fullname , Username , email , password);
  }
  return (
    <div className='signup'>
      <Card className='card'>
        <h1>Sign Up</h1>
        <CardContent>
          <div>
            <TextField className='text' id="standard-basic" label='Fullname'
             value={Fullname} onChange={e => setFullname(e.target.value)} type="text"
             defaultValue="Username"
             variant='standard'></TextField>

            <TextField className='text' id="standard-basic" label='Username' 
              value={Username} onChange={e => setUsername(e.target.value)} type="text"
              defaultValue="Username"
    
            variant='standard'></TextField>
          </div>
          <div>
            <TextField className='text' id="standard-basic" label='Email'
               value={email}onChange={e => setEmail(e.target.value)} type="text"
               defaultValue="Email"
     
             variant='standard'></TextField>
          </div>
          <div>
            <TextField className='text pass' id="standard-basic" label='Password'
            value={password} onChange={e => setPassword(e.target.value)} type="password"
            autoComplete="current-password"
             variant='standard'></TextField>
          </div>
          <div>
            <TextField className='text pass' id="standard-basic" label='Confirm Password' variant='standard'></TextField>
          </div>
          <Button variant='outlined' className='btn' onClick={signUp}>Register</Button>
          <div>          
          <h6>Have an account?<Link component={RouterLink} to='/login'>Login here</Link></h6>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Signup;